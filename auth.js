/**
 * MYSTICA Auth Manager v1.0
 * Includi PRIMA di premium.js in ogni pagina:
 * <script src="./auth.js"></script>
 * <script src="./premium.js"></script>
 *
 * Espone globalmente:
 *   window.MysticaAuth.currentUser()        → oggetto user Firebase o null
 *   window.MysticaAuth.isLoggedIn()         → true/false
 *   window.MysticaAuth.openAuthModal(mode)  → apre modal ('login'|'register')
 *   window.MysticaAuth.logout()
 *   window.MysticaAuth.saveProfile(data)    → salva profilo mistico su Firestore (utente loggato)
 *   window.MysticaAuth.loadProfile()        → Promise<profilo|null> da Firestore
 *   window.MysticaAuth.isPremium()          → stato premium (cache locale, sync da Firestore)
 *   window.MysticaAuth.getUid()             → uid corrente o null
 *
 * Eventi custom su document:
 *   'mystica-auth-ready'    → SDK Firebase Auth pronto
 *   'mystica-auth-changed'  → login/logout avvenuto (detail: {user})
 *   'mystica-premium-changed' → stato premium aggiornato da Firestore (detail: {premium})
 */
(function () {
  'use strict';

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDy8uh1lbW6QEWFheW3HDFzLza9SmgAGBo",
    authDomain: "mysticaoracoli.firebaseapp.com",
    projectId: "mysticaoracoli",
    storageBucket: "mysticaoracoli.firebasestorage.app",
    messagingSenderId: "301300952494",
    appId: "1:301300952494:web:f6cb04ba2e118e863f2c3f"
  };

  let _authInitPromise = null;
  let _currentUser = null;
  let _premiumUnsub = null;
  let _cachedPremium = (function () {
    try { return localStorage.getItem('myst_premium_cache') === '1'; } catch (e) { return false; }
  })();

  /* ── Preconnect anticipato ai CDN Firebase (leggero, non blocca il rendering) ──
     Accelera il caricamento reale dell'SDK quando poi parte, senza scaricare nulla ora. */
  (function _preconnectFirebase() {
    ['https://www.gstatic.com', 'https://firestore.googleapis.com', 'https://identitytoolkit.googleapis.com']
      .forEach(function (href) {
        var l = document.createElement('link');
        l.rel = 'preconnect';
        l.href = href;
        l.crossOrigin = 'anonymous';
        document.head.appendChild(l);
      });
  })();

  function _initAuth() {
    if (_authInitPromise) return _authInitPromise;
    _authInitPromise = Promise.all([
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')
    ]).then(([appMod, authMod, fsMod]) => {
      const { initializeApp, getApps, getApp } = appMod;
      const {
        getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut, GoogleAuthProvider,
        signInWithPopup, sendPasswordResetEmail, updateProfile
      } = authMod;
      const {
        getFirestore, doc, getDoc, setDoc, onSnapshot, serverTimestamp
      } = fsMod;

      const app = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApp();
      const auth = getAuth(app);
      const db = getFirestore(app);

      window._fbAuth = auth;
      window._fbDb = window._fbDb || db;
      window._fbAuthFns = {
        onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
        signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile,
        doc, getDoc, setDoc, onSnapshot, serverTimestamp
      };

      document.dispatchEvent(new Event('mystica-auth-ready'));

      onAuthStateChanged(auth, (user) => {
        _currentUser = user;
        document.dispatchEvent(new CustomEvent('mystica-auth-changed', { detail: { user } }));
        _renderAccountWidget();
        if (user) {
          _migrateLegacyDataIfNeeded(user);
          _listenPremium(user.uid);
        } else {
          if (_premiumUnsub) { _premiumUnsub(); _premiumUnsub = null; }
        }
      });

      return { auth, db };
    }).catch(e => {
      console.warn('Errore inizializzazione Firebase Auth:', e);
      _authInitPromise = null;
    });
    return _authInitPromise;
  }
  /* ── Avvio differito: l'SDK Firebase (auth+firestore, ~centinaia di KB) non deve
     mai competere con il rendering iniziale della pagina. Parte:
       - appena la pagina è "idle" dopo il load (requestIdleCallback), oppure
       - subito, se l'utente clicca prima su login/registrati/premium
         (openAuthModal/_myst_authLogin/ecc. chiamano comunque _initAuth(),
          che è idempotente: se è già partito riusa la stessa Promise). ── */
  function _scheduleAuthInit() {
    const start = () => _initAuth();
    if ('requestIdleCallback' in window) {
      requestIdleCallback(start, { timeout: 2500 });
    } else {
      setTimeout(start, 300);
    }
  }
  if (document.readyState === 'complete') {
    _scheduleAuthInit();
  } else {
    window.addEventListener('load', _scheduleAuthInit, { once: true });
  }

  /* ── Migrazione dati legacy (localStorage → Firestore) al primo login ── */
  async function _migrateLegacyDataIfNeeded(user) {
    try {
      const { doc, getDoc, setDoc, serverTimestamp } = window._fbAuthFns;
      const uRef = doc(window._fbDb, 'users', user.uid);
      const snap = await getDoc(uRef);

      if (!snap.exists()) {
        const raw = localStorage.getItem('myst_v3_profile');
        const profileData = raw ? JSON.parse(raw) : null;
        await setDoc(uRef, {
          name: profileData?.name || user.displayName || '',
          date: profileData?.date || null,
          segno: profileData?.segno || null,
          gender: profileData?.gender || null,
          email: user.email || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
    } catch (e) {
      console.warn('Migrazione dati legacy fallita:', e);
    }
  }

  /* ── Ascolto real-time dello stato premium (fonte di verità server-side) ── */
  function _listenPremium(uid) {
    if (_premiumUnsub) _premiumUnsub();
    const { doc, onSnapshot } = window._fbAuthFns;
    const pRef = doc(window._fbDb, 'premiumStatus', uid);
    _premiumUnsub = onSnapshot(pRef, (snap) => {
      const premium = snap.exists() && snap.data().premium === true;
      _cachedPremium = premium;
      try { localStorage.setItem('myst_premium_cache', premium ? '1' : '0'); } catch (e) {}
      document.dispatchEvent(new CustomEvent('mystica-premium-changed', { detail: { premium } }));
    }, (err) => {
      console.warn('Errore lettura stato premium:', err);
    });
  }

  /* ── API profilo mistico ── */
  async function saveProfile(data) {
    if (!_currentUser) return false;
    try {
      const { doc, setDoc, serverTimestamp } = window._fbAuthFns;
      const uRef = doc(window._fbDb, 'users', _currentUser.uid);
      await setDoc(uRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
      return true;
    } catch (e) {
      console.warn('Errore salvataggio profilo:', e);
      return false;
    }
  }

  async function loadProfile() {
    if (!_currentUser) return null;
    try {
      const { doc, getDoc } = window._fbAuthFns;
      const uRef = doc(window._fbDb, 'users', _currentUser.uid);
      const snap = await getDoc(uRef);
      return snap.exists() ? snap.data() : null;
    } catch (e) {
      console.warn('Errore caricamento profilo:', e);
      return null;
    }
  }

  /* ── CSS modal (stessa estetica di premium.js) ── */
  const CSS = `
#_myst_auth_overlay{position:fixed;inset:0;z-index:99999;background:rgba(10,5,20,.92);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);padding:16px;}
#_myst_auth_box{background:linear-gradient(135deg,#1a0e35,#0d1a2e);border:1px solid #d4af37;border-radius:16px;padding:28px 24px;max-width:360px;width:100%;text-align:center;color:#e8e0f0;font-family:'Cinzel',serif;box-shadow:0 0 40px rgba(212,175,55,.25);position:relative;}
#_myst_auth_box .au-star{font-size:2.2rem;margin-bottom:6px;}
#_myst_auth_box h2{color:#d4af37;font-size:1.2rem;margin:4px 0 8px;}
.au-tabs{display:flex;border-bottom:1px solid rgba(212,175,55,.25);margin-bottom:16px;}
.au-tab{flex:1;padding:9px 4px;background:none;border:none;color:rgba(212,175,55,.55);font-family:'Cinzel',serif;font-size:.72rem;letter-spacing:.05em;cursor:pointer;border-bottom:2px solid transparent;}
.au-tab.active{color:#d4af37;border-bottom-color:#d4af37;}
.au-panel{display:none;text-align:left;}
.au-panel.active{display:block;}
.au-field{margin-bottom:10px;}
.au-field label{display:block;font-size:.68rem;color:#d4af37;letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;}
.au-field input{width:100%;background:rgba(42,23,72,.5);border:1px solid rgba(212,175,55,.3);border-radius:8px;padding:10px 12px;color:#e8e0f0;font-family:'Crimson Pro',serif;font-size:.95rem;outline:none;box-sizing:border-box;}
.au-field input:focus{border-color:#d4af37;}
.au-submit-btn{width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#d4af37,#9a7820);color:#0a0514;font-family:'Cinzel',serif;font-size:.85rem;font-weight:700;cursor:pointer;margin:10px 0 8px;}
.au-google-btn{width:100%;padding:11px;border-radius:10px;border:1px solid rgba(212,175,55,.4);background:transparent;color:#e8e0f0;font-family:'Crimson Pro',serif;font-size:.88rem;cursor:pointer;margin-bottom:10px;display:flex;align-items:center;justify-content:center;gap:8px;}
.au-divider{display:flex;align-items:center;gap:8px;margin:12px 0;font-size:.72rem;color:rgba(232,224,240,.4);}
.au-divider::before,.au-divider::after{content:'';flex:1;height:1px;background:rgba(212,175,55,.2);}
.au-err{background:rgba(255,80,80,.1);border:1px solid rgba(255,80,80,.3);border-radius:8px;padding:9px 10px;color:#ff9090;font-size:.8rem;margin-top:8px;display:none;font-family:'Crimson Pro',serif;text-align:left;}
.au-ok{background:rgba(55,212,100,.1);border:1px solid rgba(55,212,100,.3);border-radius:8px;padding:9px 10px;color:#90ffb0;font-size:.85rem;margin-top:8px;display:none;font-family:'Crimson Pro',serif;}
.au-footer{margin-top:14px;}
.au-footer a,.au-footer button.au-skip{color:rgba(212,175,55,.65);font-size:.78rem;text-decoration:none;background:none;border:none;cursor:pointer;font-family:'Cinzel',serif;display:block;margin:6px auto 0;}
.au-footer a:hover,.au-footer button.au-skip:hover{color:#d4af37;}
#_myst_account_widget{position:fixed;bottom:18px;left:18px;z-index:9998;background:rgba(20,12,36,.9);border:1px solid rgba(212,175,55,.4);border-radius:24px;padding:8px 14px;font-family:'Cinzel',serif;font-size:.72rem;color:#d4af37;cursor:pointer;backdrop-filter:blur(6px);box-shadow:0 2px 12px rgba(0,0,0,.3);display:flex;align-items:center;gap:6px;}
#_myst_account_widget:hover{border-color:#d4af37;}
`;

  function _ensureCss() {
    if (!document.getElementById('_myst_auth_css')) {
      const s = document.createElement('style');
      s.id = '_myst_auth_css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }

  /* ── Widget account fisso (basso-sinistra) ── */
  function _renderAccountWidget() {
    _ensureCss();
    let w = document.getElementById('_myst_account_widget');
    if (!w) {
      w = document.createElement('div');
      w.id = '_myst_account_widget';
      document.body.appendChild(w);
      w.addEventListener('click', () => {
        if (_currentUser) { MysticaAuth.openAccountMenu(); }
        else { MysticaAuth.openAuthModal('login'); }
      });
    }
    if (_currentUser) {
      const label = _currentUser.email ? _currentUser.email.split('@')[0] : 'Account';
      w.innerHTML = `✦ ${label}${_cachedPremium ? ' ★' : ''}`;
    } else {
      w.innerHTML = `✦ Accedi`;
    }
  }

  /* ── Menu account rapido (logout) ── */
  function openAccountMenu() {
    _ensureCss();
    if (document.getElementById('_myst_auth_overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = '_myst_auth_overlay';
    overlay.innerHTML = `
      <div id="_myst_auth_box">
        <div class="au-star">✦</div>
        <h2>Il tuo Account</h2>
        <p style="font-family:'Crimson Pro',serif;font-size:.88rem;opacity:.85;margin-bottom:16px;">${_currentUser.email || ''}</p>
        <p style="font-family:'Crimson Pro',serif;font-size:.85rem;color:${_cachedPremium ? '#90ffb0' : '#e8e0f0'};margin-bottom:16px;">
          ${_cachedPremium ? '★ Premium attivo' : 'Nessun abbonamento Premium attivo'}
        </p>
        <button class="au-submit-btn" onclick="window.MysticaAuth.logout();document.getElementById('_myst_auth_overlay').remove();">Esci dall'account</button>
        <div class="au-footer"><button class="au-skip" onclick="document.getElementById('_myst_auth_overlay').remove()">Chiudi</button></div>
      </div>`;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  /* ── Modal login/registrazione ── */
  function openAuthModal(mode) {
    _ensureCss();
    if (document.getElementById('_myst_auth_overlay')) return;
    mode = mode === 'register' ? 'register' : 'login';

    const overlay = document.createElement('div');
    overlay.id = '_myst_auth_overlay';
    overlay.innerHTML = `
      <div id="_myst_auth_box">
        <div class="au-star">✦</div>
        <h2>Il tuo Account MYSTICA</h2>
        <p style="font-family:'Crimson Pro',serif;font-size:.85rem;opacity:.8;margin-bottom:14px;">
          Accedi per ritrovare il tuo profilo e il tuo Premium su ogni dispositivo.
        </p>

        <div class="au-tabs">
          <button class="au-tab ${mode==='login'?'active':''}" id="_au_tab_login" onclick="window._myst_authSwitch('login')">Accedi</button>
          <button class="au-tab ${mode==='register'?'active':''}" id="_au_tab_register" onclick="window._myst_authSwitch('register')">Registrati</button>
        </div>

        <button class="au-google-btn" onclick="window._myst_authGoogle()">🔵 Continua con Google</button>
        <div class="au-divider">oppure</div>

        <div class="au-panel ${mode==='login'?'active':''}" id="_au_panel_login">
          <div class="au-field"><label>Email</label><input type="email" id="_au_login_email" autocomplete="email" placeholder="tuo@email.com"></div>
          <div class="au-field"><label>Password</label><input type="password" id="_au_login_pass" autocomplete="current-password" placeholder="••••••••"></div>
          <button class="au-submit-btn" onclick="window._myst_authLogin()">✦ Accedi</button>
          <a href="#" onclick="window._myst_authReset();return false;" style="display:block;text-align:center;font-family:'Crimson Pro',serif;font-size:.78rem;color:rgba(212,175,55,.7);">Password dimenticata?</a>
        </div>

        <div class="au-panel ${mode==='register'?'active':''}" id="_au_panel_register">
          <div class="au-field"><label>Nome</label><input type="text" id="_au_reg_name" autocomplete="given-name" placeholder="Il tuo nome"></div>
          <div class="au-field"><label>Email</label><input type="email" id="_au_reg_email" autocomplete="email" placeholder="tuo@email.com"></div>
          <div class="au-field"><label>Password</label><input type="password" id="_au_reg_pass" autocomplete="new-password" placeholder="Almeno 6 caratteri"></div>
          <button class="au-submit-btn" onclick="window._myst_authRegister()">✦ Crea Account</button>
        </div>

        <div class="au-err" id="_au_err"></div>
        <div class="au-ok" id="_au_ok"></div>

        <div class="au-footer"><button class="au-skip" onclick="document.getElementById('_myst_auth_overlay').remove()">Continua senza account</button></div>
      </div>`;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  window._myst_authSwitch = function (tab) {
    document.getElementById('_au_tab_login').classList.toggle('active', tab === 'login');
    document.getElementById('_au_tab_register').classList.toggle('active', tab === 'register');
    document.getElementById('_au_panel_login').classList.toggle('active', tab === 'login');
    document.getElementById('_au_panel_register').classList.toggle('active', tab === 'register');
  };

  function _showErr(msg) {
    const e = document.getElementById('_au_err');
    if (!e) return;
    e.textContent = msg; e.style.display = 'block';
    const o = document.getElementById('_au_ok'); if (o) o.style.display = 'none';
  }
  function _showOk(msg) {
    const o = document.getElementById('_au_ok');
    if (!o) return;
    o.textContent = msg; o.style.display = 'block';
    const e = document.getElementById('_au_err'); if (e) e.style.display = 'none';
  }
  function _friendlyError(code) {
    const map = {
      'auth/email-already-in-use': 'Questa email è già registrata. Prova ad accedere.',
      'auth/invalid-email': 'Email non valida.',
      'auth/weak-password': 'La password deve avere almeno 6 caratteri.',
      'auth/user-not-found': 'Nessun account trovato con questa email.',
      'auth/wrong-password': 'Password errata.',
      'auth/invalid-credential': 'Email o password errati.',
      'auth/too-many-requests': 'Troppi tentativi. Riprova tra qualche minuto.',
      'auth/popup-closed-by-user': 'Accesso Google annullato.',
      'auth/unauthorized-domain': 'Dominio non autorizzato in Firebase (Authentication → Impostazioni → Domini autorizzati).',
      'auth/network-request-failed': 'Errore di rete. Controlla la connessione e riprova.'
    };
    // DEBUG TEMPORANEO: se il codice non è mappato, mostralo comunque in chiaro
    // così è visibile anche da telefono senza dover aprire la console.
    // Da togliere una volta risolto il problema di login.
    return map[code] || ('Si è verificato un errore (' + (code || 'codice sconosciuto') + '). Riprova.');
  }

  window._myst_authLogin = async function () {
    await _initAuth();
    const { signInWithEmailAndPassword } = window._fbAuthFns;
    const email = document.getElementById('_au_login_email').value.trim();
    const pass = document.getElementById('_au_login_pass').value;
    if (!email || !pass) return _showErr('Inserisci email e password.');
    try {
      await signInWithEmailAndPassword(window._fbAuth, email, pass);
      _showOk('✦ Accesso effettuato!');
      setTimeout(() => { const ov = document.getElementById('_myst_auth_overlay'); if (ov) ov.remove(); }, 900);
    } catch (e) { _showErr(_friendlyError(e.code)); }
  };

  window._myst_authRegister = async function () {
    await _initAuth();
    const { createUserWithEmailAndPassword, updateProfile } = window._fbAuthFns;
    const name = document.getElementById('_au_reg_name').value.trim();
    const email = document.getElementById('_au_reg_email').value.trim();
    const pass = document.getElementById('_au_reg_pass').value;
    if (!email || !pass) return _showErr('Inserisci email e password.');
    if (pass.length < 6) return _showErr('La password deve avere almeno 6 caratteri.');
    try {
      const cred = await createUserWithEmailAndPassword(window._fbAuth, email, pass);
      if (name) await updateProfile(cred.user, { displayName: name });
      _showOk('✦ Account creato!');
      setTimeout(() => { const ov = document.getElementById('_myst_auth_overlay'); if (ov) ov.remove(); }, 900);
    } catch (e) { _showErr(_friendlyError(e.code)); }
  };

  window._myst_authGoogle = async function () {
    await _initAuth();
    const { GoogleAuthProvider, signInWithPopup } = window._fbAuthFns;
    try {
      await signInWithPopup(window._fbAuth, new GoogleAuthProvider());
      _showOk('✦ Accesso effettuato!');
      setTimeout(() => { const ov = document.getElementById('_myst_auth_overlay'); if (ov) ov.remove(); }, 900);
    } catch (e) { _showErr(_friendlyError(e.code)); }
  };

  window._myst_authReset = async function () {
    await _initAuth();
    const { sendPasswordResetEmail } = window._fbAuthFns;
    const email = document.getElementById('_au_login_email').value.trim();
    if (!email) return _showErr('Inserisci la tua email per ricevere il link di reset.');
    try {
      await sendPasswordResetEmail(window._fbAuth, email);
      _showOk('✦ Email di reset inviata. Controlla la posta.');
    } catch (e) { _showErr(_friendlyError(e.code)); }
  };

  const MysticaAuth = {
    currentUser() { return _currentUser; },
    isLoggedIn() { return !!_currentUser; },
    getUid() { return _currentUser ? _currentUser.uid : null; },
    isPremium() { return _cachedPremium; },
    openAuthModal,
    openAccountMenu,
    saveProfile,
    loadProfile,
    async logout() {
      await _initAuth();
      const { signOut } = window._fbAuthFns;
      await signOut(window._fbAuth);
    }
  };

  window.MysticaAuth = MysticaAuth;
  document.addEventListener('DOMContentLoaded', _renderAccountWidget);
})();
