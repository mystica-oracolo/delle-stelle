/* ===== Firebase, inizializzato solo quando si apre la sezione Community/Recensioni ===== */
let _fbInitPromise = null;
function _initFirebaseCommenti(){
  if(_fbInitPromise) return _fbInitPromise;
  _fbInitPromise = Promise.all([
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')
  ]).then(([appMod, fsMod]) => {
    const { initializeApp } = appMod;
    const { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where, increment, serverTimestamp, onSnapshot } = fsMod;
    const firebaseConfig = {
      apiKey: "AIzaSyDy8uh1IbW6QEWFheW3HDFzLza9SmgAGBo",
      authDomain: "mysticaoracoli.firebaseapp.com",
      projectId: "mysticaoracoli",
      storageBucket: "mysticaoracoli.firebasestorage.app",
      messagingSenderId: "301300952494",
      appId: "1:301300952494:web:f6cb04ba2e118e863f2c3f"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    window._fbDb = db;
    window._fbFns = { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where, increment, serverTimestamp, onSnapshot };
    window._fbReady = true;
    document.dispatchEvent(new Event('firebase-ready'));
  }).catch(e => console.warn('Errore caricamento Firebase:', e));
  return _fbInitPromise;
}
_initFirebaseCommenti();

let _commentiTutti = [];
let _filtroAttivo = 'tutti';
let _commentiUnsubscribe = null;
let _rispostaA = null; // ID del commento a cui si sta rispondendo

const PAROLE_PROIBITE = ['scemo', 'cretino', 'stronzo', 'vaffanculo', 'merda', 'idiota', 'bastardo', 'cafone'];

const TOPIC_EMOJI = {
  generale:'🔮', tarocchi:'🃏', astrologia:'🌙', sogni:'😴',
  rune:'ᚱ', chakra:'🕉️', wicca:'🌿', iching:'☯️',
  numerologia:'🔢', esperienze:'✨'
};

function _initCommChars() {
  const ta = document.getElementById('comm-testo');
  if(ta) {
    // Rimuovi listener precedenti se esistono
    ta._charListenerAdded = false;
    // Aggiungi il listener
    ta.addEventListener('input', () => {
      const el = document.getElementById('comm-chars');
      if(el) el.textContent = ta.value.length + '/600';
    });
    ta._charListenerAdded = true;
    // Inizializza il contatore
    const el = document.getElementById('comm-chars');
    if(el) el.textContent = ta.value.length + '/600';
  }
}
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initCommChars);
} else {
  _initCommChars();
}

document.addEventListener('firebase-ready', () => {
  _avviaListenerCommenti();
});
// Fallback: if firebase already ready when this script runs
if(window._fbReady) {
  setTimeout(_avviaListenerCommenti, 100);
}

function _assicuraFirebase(cb) {
  if(window._fbReady) { cb(); return; }
  document.addEventListener('firebase-ready', cb, { once: true });
}

function _avviaListenerCommenti() {
  if(_commentiUnsubscribe) return;
  _assicuraFirebase(() => {
    try {
      const { collection, query, orderBy, onSnapshot } = window._fbFns;
      const db = window._fbDb;
      const q = query(collection(db, 'commenti'), orderBy('timestamp', 'desc'));
      _commentiUnsubscribe = onSnapshot(q, (snap) => {
        _commentiTutti = [];
        snap.forEach(d => _commentiTutti.push({ id: d.id, ...d.data() }));
        _renderCommenti();
        _renderAdmin();
      }, (err) => {
        console.warn('Firebase listener error:', err);
        _renderCommentiErrore();
      });
    } catch(e) {
      console.warn('Firebase init error:', e);
    }
  });
}

function _renderCommenti() {
  const lista = document.getElementById('commenti-lista');
  if(!lista) return;

  const approvati = _commentiTutti.filter(c => c.approvato !== false);
  const padri = _filtroAttivo === 'tutti' 
    ? approvati.filter(c => !c.parentId)
    : approvati.filter(c => !c.parentId && c.topic === _filtroAttivo);

  if(padri.length === 0) {
    lista.innerHTML = '<div style="text-align:center;padding:30px;color:var(--muted);font-size:14px"><div style="font-size:32px;margin-bottom:8px">🌙</div>Nessun messaggio ancora. Sii il primo a condividere!</div>';
    return;
  }

  let html = '';
  padri.forEach(c => {
    html += _costruisciHTMLCommento(c, false);
    // Cerca risposte a questo commento
    const risposte = approvati.filter(r => r.parentId === c.id);
    if(risposte.length > 0) {
      html += '<div style="margin-left:30px;border-left:2px solid var(--gold-dim);padding-left:15px;margin-top:-5px;margin-bottom:15px">';
      risposte.sort((a,b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));
      risposte.forEach(r => {
        html += _costruisciHTMLCommento(r, true);
      });
      html += '</div>';
    }
  });
  lista.innerHTML = html;
}

function _costruisciHTMLCommento(c, isRisposta) {
  const data = c.timestamp ? new Date(c.timestamp.seconds * 1000).toLocaleDateString("it-IT", {day:"2-digit",month:"short",year:"numeric"}) : "ora";
  const emoji = TOPIC_EMOJI[c.topic] || "🔮";
  const likes = c.likes || 0;
  const hasLiked = _hoLikato(c.id);
  const shadow = isRisposta ? 'none' : '0 4px 18px rgba(0,0,0,0.08)';
  
  return '<div class="card" style="margin-bottom:10px;box-shadow:'+shadow+'" id="comm-' + c.id + '">' +
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">' +
      '<div>' +
        '<span style="font-family:Cinzel,serif;font-size:13px;color:var(--gold)">' + _sanitize(c.nome) + '</span>' +
        (!isRisposta ? '<span style="margin-left:8px;background:rgba(212,175,55,0.1);border:1px solid var(--gold-dim);color:var(--gold);padding:2px 8px;border-radius:12px;font-size:11px">' + emoji + ' ' + (c.topic || 'generale') + '</span>' : '') +
      '</div>' +
      '<span style="font-size:11px;color:var(--muted)">' + data + '</span>' +
    '</div>' +
    '<p style="font-size:13px;line-height:1.7;color:var(--text);margin:0 0 10px">' + _sanitize(c.testo) + '</p>' +
    '<div style="display:flex;gap:10px;align-items:center">' +
      (!isRisposta ? '<button onclick="preparaRisposta(\'' + c.id + '\', \'' + _sanitize(c.nome) + '\')" style="background:none;border:none;color:var(--gold);cursor:pointer;font-size:12px;text-decoration:underline">Rispondi</button>' : '') +
    '</div>' +
  '</div>';
}

function preparaRisposta(id, nome) {
  _rispostaA = id;
  const formCard = document.getElementById('commenti-form-card');
  if(formCard) {
    formCard.scrollIntoView({ behavior: 'smooth' });
    const info = document.getElementById('comm-risposta-info') || document.createElement('div');
    info.id = 'comm-risposta-info';
    info.style.cssText = 'background:rgba(212,175,55,0.1);padding:10px;border-radius:8px;margin-bottom:15px;font-size:13px;display:flex;justify-content:space-between;align-items:center';
    info.innerHTML = '<span>Stai rispondendo a <b>' + nome + '</b></span>' +
                     '<button onclick="annullaRisposta()" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:12px">Annulla</button>';
    
    const container = document.querySelector('#commenti-form-card .card-body') || formCard;
    if(!document.getElementById('comm-risposta-info')) {
      container.insertBefore(info, container.firstChild);
    }
    // Nascondi selettore topic per le risposte (ereditano quello del padre)
    const topicRow = document.getElementById('comm-topic')?.closest('div');
    if(topicRow) topicRow.style.display = 'none';
  }
}

function annullaRisposta() {
  _rispostaA = null;
  const info = document.getElementById('comm-risposta-info');
  if(info) info.remove();
  const topicRow = document.getElementById('comm-topic')?.closest('div');
  if(topicRow) topicRow.style.display = '';
}

function adminPreparaRisposta(id, nome) {
  // Chiudi il pannello admin per mostrare il form
  const panel = document.getElementById('admin-panel');
  if(panel) panel.style.display = 'none';
  
  // Imposta il nome admin nel form se è vuoto
  const nomeEl = document.getElementById('comm-nome');
  if(nomeEl && !nomeEl.value) nomeEl.value = 'Admin Mystica';
  
  // Avvia la logica di risposta standard
  preparaRisposta(id, nome);
}

function _renderCommentiErrore() {
  const lista = document.getElementById('commenti-lista');
  if(lista) lista.innerHTML = '<div class="card" style="text-align:center;color:var(--muted);font-size:13px">⚠️ Impossibile caricare i commenti. Controlla la connessione.</div>';
}

function _sanitize(str) {
  if(!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function _hoLikato(id) {
  try { const l = JSON.parse(localStorage.getItem('myst_likes') || '[]'); return l.includes(id); } catch(e){ return false; }
}
function _salvaLike(id) {
  try { const l = JSON.parse(localStorage.getItem('myst_likes') || '[]'); if(!l.includes(id)){ l.push(id); localStorage.setItem('myst_likes', JSON.stringify(l)); } } catch(e){}
}

async function inviaCommento() {
  const nomeEl = document.getElementById('comm-nome');
  const testoEl = document.getElementById('comm-testo');
  const nome = (nomeEl ? nomeEl.value : '').trim();
  const testo = (testoEl ? testoEl.value : '').trim();
  let topic = document.getElementById('comm-topic') ? document.getElementById('comm-topic').value : 'generale';
  const btn = document.getElementById('comm-invia-btn');

  if(!nome || nome.length < 2) { _mostraFeedback('⚠️ Inserisci un nome (minimo 2 caratteri)', '#e74c3c'); return; }
  if(!testo || testo.length < 10) { _mostraFeedback('⚠️ Il messaggio è troppo corto (minimo 10 caratteri)', '#e74c3c'); return; }

  // Filtro parole proibite
  const testoLower = testo.toLowerCase();
  if(PAROLE_PROIBITE.some(p => testoLower.includes(p))) {
    _mostraFeedback('⚠️ Il tuo messaggio contiene termini non consentiti. Modificalo per continuare.', '#e74c3c');
    return;
  }

  if(btn) { btn.disabled = true; btn.textContent = '⏳ Invio...'; }

  // Se è una risposta, eredita il topic del padre
  if(_rispostaA) {
    const padre = _commentiTutti.find(c => c.id === _rispostaA);
    if(padre) topic = padre.topic || 'generale';
  }

  _assicuraFirebase(async () => {
    try {
      const { collection, addDoc, serverTimestamp } = window._fbFns;
      await addDoc(collection(window._fbDb, 'commenti'), {
        nome: nome, testo: testo, topic: topic,
        timestamp: serverTimestamp(),
        likes: 0,
        approvato: true,
        parentId: _rispostaA || null
      });
      if(nomeEl) nomeEl.value = '';
      if(testoEl) testoEl.value = '';
      document.getElementById('comm-chars').textContent = '0/600';
      annullaRisposta();
      _mostraFeedback('✨ Messaggio inviato! Grazie per aver condiviso.', '#27ae60');
    } catch(e) {
      _mostraFeedback('❌ Errore nell invio. Riprova.', '#e74c3c');
      console.error(e);
    } finally {
      if(btn) { btn.disabled = false; btn.textContent = '🔮 Invia Messaggio'; }
    }
  });
}

function _mostraFeedback(msg, colore) {
  const fb = document.getElementById('comm-feedback');
  if(!fb) return;
  fb.textContent = msg;
  fb.style.color = colore;
  fb.style.display = 'block';
  setTimeout(() => { fb.style.display = 'none'; }, 4000);
}

async function likaCommento(evt, id) {
  const docId = String(id);
  if(_hoLikato(docId)) return;
  
  _salvaLike(docId);

  // Aggiorna subito l'array in memoria così onSnapshot non sovrascrive con valore vecchio
  const commInMemoria = _commentiTutti.find(c => String(c.id) === docId);
  if(commInMemoria) {
    commInMemoria.likes = (commInMemoria.likes || 0) + 1;
  }
  
  // Update UI istantaneo
  const el = document.getElementById('likes-' + docId);
  if(el) {
    let val = parseInt(el.textContent || 0);
    el.textContent = val + 1;
  }

  // Animazione
  const btn = evt?.currentTarget;
  if(btn) {
    btn.style.background = 'rgba(212,175,55,0.4)';
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 300);
  }

  _assicuraFirebase(async () => {
    try {
      const { doc, updateDoc, increment } = window._fbFns;
      await updateDoc(doc(window._fbDb, 'commenti', docId), { likes: increment(1) });
    } catch(e){ console.error(e); }
  });
}

function filtraCommenti(topic) {
  _filtroAttivo = topic;
  document.querySelectorAll('[id^="filtro-"]').forEach(b => {
    b.className = b.id === 'filtro-' + topic ? 'btn btn-gold' : 'btn btn-sec';
    // Manteniamo lo stile arrotondato delle chips
    b.style.borderRadius = '20px';
    b.style.padding = '6px 16px';
  });
  _renderCommenti();
}

const ADMIN_PASS_C = 'Petromystico8@';
function apriAdmin() {
  const p = prompt('Password admin:');
  if(p !== ADMIN_PASS_C) { if(p !== null) alert('Password errata'); return; }
  const panel = document.getElementById('admin-panel');
  if(panel) panel.style.display = 'block';
  _renderAdmin();
}

async function adminNascondi(id, nascondi) {
  _assicuraFirebase(async () => {
    try {
      const { doc, updateDoc } = window._fbFns;
      await updateDoc(doc(window._fbDb, 'commenti', id), { approvato: !nascondi });
    } catch(e){ alert('Errore: ' + e.message); }
  });
}

async function adminElimina(id) {
  if(!confirm('Eliminare definitivamente questo commento?')) return;
  _assicuraFirebase(async () => {
    try {
      const { doc, deleteDoc } = window._fbFns;
      await deleteDoc(doc(window._fbDb, 'commenti', id));
    } catch(e){ alert('Errore: ' + e.message); }
  });
}

// ═══ TAB SWITCHER ═══
function switchTab(tab) {
  const isCommunity = tab === 'community';
  document.getElementById('tab-community').style.display = isCommunity ? '' : 'none';
  document.getElementById('tab-recensioni').style.display = isCommunity ? 'none' : '';
  const btnC = document.getElementById('tab-btn-community');
  const btnR = document.getElementById('tab-btn-recensioni');
  if(btnC && btnR) {
    btnC.style.background = isCommunity ? 'var(--gold)' : 'transparent';
    btnC.style.color = isCommunity ? '#1a0a00' : 'var(--gold)';
    btnC.style.fontWeight = isCommunity ? '700' : '400';
    btnR.style.background = !isCommunity ? 'var(--gold)' : 'transparent';
    btnR.style.color = !isCommunity ? '#1a0a00' : 'var(--gold)';
    btnR.style.fontWeight = !isCommunity ? '700' : '400';
  }
  if(!isCommunity) {
    _initRecChars();
    _avviaListenerRecensioni();
  } else {
    _initCommChars();
    _avviaListenerCommenti();
  }
}

// ═══ RECENSIONI (Firebase) ═══
let _recensioniTutte = [];
let _recensioniUnsubscribe = null;
let _stelleSelezionate = 0;

const STELLE_LABEL = ['','⭐ Pessima','⭐⭐ Scarsa','⭐⭐⭐ Nella media','⭐⭐⭐⭐ Buona','⭐⭐⭐⭐⭐ Eccellente!'];

function _initRecChars() {
  const ta = document.getElementById('rec-testo');
  if(ta) {
    // Rimuovi listener precedenti se esistono
    ta._charListenerAdded = false;
    // Aggiungi il listener
    ta.addEventListener('input', () => {
      const el = document.getElementById('rec-chars');
      if(el) el.textContent = ta.value.length + '/400';
    });
    ta._charListenerAdded = true;
    // Inizializza il contatore
    const el = document.getElementById('rec-chars');
    if(el) el.textContent = ta.value.length + '/400';
  }
}
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initRecChars);
} else {
  _initRecChars();
}

function setStelle(n) {
  _stelleSelezionate = n;
  const stars = document.querySelectorAll('#rec-stelle-input span');
  stars.forEach((s, i) => {
    s.style.filter = i < n ? 'grayscale(0) drop-shadow(0 0 6px #d4af37)' : 'grayscale(1)';
    s.style.transform = i < n ? 'scale(1.15)' : 'scale(1)';
  });
  const lbl = document.getElementById('rec-stelle-label');
  if(lbl) { lbl.textContent = STELLE_LABEL[n]; lbl.style.color = 'var(--gold)'; }
}

function _avviaListenerRecensioni() {
  if(_recensioniUnsubscribe) return;
  _assicuraFirebase(() => {
    try {
      const { collection, query, orderBy, onSnapshot } = window._fbFns;
      const q = query(collection(window._fbDb, 'recensioni'), orderBy('timestamp', 'desc'));
      _recensioniUnsubscribe = onSnapshot(q, (snap) => {
        _recensioniTutte = [];
        snap.forEach(d => _recensioniTutte.push({ id: d.id, ...d.data() }));
        _renderRecensioni();
        _renderMedia();
      }, (err) => {
        console.warn('Recensioni listener error:', err);
      });
    } catch(e){ console.warn(e); }
  });
}

function _renderMedia() {
  const approvate = _recensioniTutte.filter(r => r.approvato !== false);
  const n = approvate.length;
  const elN = document.getElementById('rec-media-numero');
  const elS = document.getElementById('rec-media-stelle');
  const elC = document.getElementById('rec-media-count');
  const elB = document.getElementById('rec-barre');
  if(!elN) return;

  if(n === 0) {
    elN.textContent = '—';
    elS.textContent = '☆☆☆☆☆';
    elC.textContent = 'Nessuna recensione ancora';
    if(elB) elB.innerHTML = '';
    return;
  }

  const media = approvate.reduce((s,r) => s + (r.stelle||0), 0) / n;
  elN.textContent = media.toFixed(1);
  elC.textContent = n + (n === 1 ? ' recensione' : ' recensioni');

  // Stelle colorate
  const piene = Math.round(media);
  elS.textContent = '⭐'.repeat(piene) + '☆'.repeat(5 - piene);

  // Barre distribuzione
  const dist = [0,0,0,0,0];
  approvate.forEach(r => { if(r.stelle >= 1 && r.stelle <= 5) dist[r.stelle-1]++; });
  if(elB) {
    elB.innerHTML = [5,4,3,2,1].map(v => {
      const count = dist[v-1];
      const pct = n > 0 ? Math.round(count/n*100) : 0;
      return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">' +
        '<span style="font-size:11px;color:var(--gold);width:14px;text-align:right">' + v + '</span>' +
        '<span style="font-size:11px">⭐</span>' +
        '<div style="flex:1;background:rgba(212,175,55,0.1);border-radius:6px;height:8px;overflow:hidden">' +
          '<div style="width:' + pct + '%;height:100%;background:var(--gold);border-radius:6px;transition:width .4s"></div>' +
        '</div>' +
        '<span style="font-size:11px;color:var(--muted);width:28px">' + count + '</span>' +
      '</div>';
    }).join('');
  }
}

function _renderRecensioni() {
  const lista = document.getElementById('recensioni-lista');
  if(!lista) return;
  const approvate = _recensioniTutte.filter(r => r.approvato !== false);
  if(approvate.length === 0) {
    lista.innerHTML = '<div style="text-align:center;padding:30px;color:var(--muted);font-size:14px"><div style="font-size:32px;margin-bottom:8px">⭐</div>Nessuna recensione ancora. Sii il primo!</div>';
    return;
  }
  lista.innerHTML = approvate.map(r => {
    const data = r.timestamp ? new Date(r.timestamp.seconds*1000).toLocaleDateString('it-IT',{day:'2-digit',month:'short',year:'numeric'}) : 'ora';
    const stelle = '⭐'.repeat(r.stelle||0) + '☆'.repeat(5-(r.stelle||0));
    return '<div class="card" style="margin-bottom:10px">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">' +
        '<span style="font-family:Cinzel,serif;font-size:13px;color:var(--gold)">' + _sanitize(r.nome) + '</span>' +
        '<span style="font-size:11px;color:var(--muted)">' + data + '</span>' +
      '</div>' +
      '<div style="font-size:18px;margin-bottom:8px">' + stelle + '</div>' +
      (r.testo ? '<p style="font-size:13px;line-height:1.7;color:var(--text);margin:0">' + _sanitize(r.testo) + '</p>' : '') +
    '</div>';
  }).join('');
}

async function inviaRecensione() {
  const nome = (document.getElementById('rec-nome') ? document.getElementById('rec-nome').value : '').trim();
  const testo = (document.getElementById('rec-testo') ? document.getElementById('rec-testo').value : '').trim();
  const btn = document.getElementById('rec-invia-btn');

  if(!nome || nome.length < 2) { _mostraFeedbackRec('⚠️ Inserisci un nome (minimo 2 caratteri)', '#e74c3c'); return; }
  if(_stelleSelezionate === 0) { _mostraFeedbackRec('⚠️ Seleziona almeno una stella', '#e74c3c'); return; }

  // Controlla se ha già recensito (localStorage)
  if(localStorage.getItem('myst_recensito')) {
    _mostraFeedbackRec('Hai già inviato una recensione. Grazie!', '#d4af37'); return;
  }

  if(btn) { btn.disabled = true; btn.textContent = '⏳ Invio...'; }

  _assicuraFirebase(async () => {
    try {
      const { collection, addDoc, serverTimestamp } = window._fbFns;
      await addDoc(collection(window._fbDb, 'recensioni'), {
        nome: nome, testo: testo, stelle: _stelleSelezionate,
        timestamp: serverTimestamp(),
        approvato: true
      });
      localStorage.setItem('myst_recensito', '1');
      document.getElementById('rec-nome').value = '';
      document.getElementById('rec-testo').value = '';
      document.getElementById('rec-chars').textContent = '0/400';
      setStelle(0);
      _mostraFeedbackRec('✨ Recensione pubblicata! Grazie mille.', '#27ae60');
    } catch(e) {
      _mostraFeedbackRec('❌ Errore invio. Riprova.', '#e74c3c');
      console.error(e);
    } finally {
      if(btn) { btn.disabled = false; btn.textContent = '⭐ Pubblica Recensione'; }
    }
  });
}

function _mostraFeedbackRec(msg, colore) {
  const fb = document.getElementById('rec-feedback');
  if(!fb) return;
  fb.textContent = msg; fb.style.color = colore; fb.style.display = 'block';
  setTimeout(() => { fb.style.display = 'none'; }, 4000);
}

// Admin tab switcher
let _adminTabAttivo = 'commenti';
function adminTab(t) {
  _adminTabAttivo = t;
  _renderAdmin();
  document.getElementById('atab-commenti').style.background = t==='commenti' ? 'rgba(231,76,60,0.3)' : 'none';
  document.getElementById('atab-recensioni').style.background = t==='recensioni' ? 'rgba(231,76,60,0.3)' : 'none';
}

function _renderAdmin() {
  const lista = document.getElementById('admin-lista');
  if(!lista) return;
  if(_adminTabAttivo === 'commenti') {
    if(_commentiTutti.length === 0) { lista.innerHTML = '<p style="color:var(--muted);font-size:13px">Nessun commento.</p>'; return; }
    lista.innerHTML = _commentiTutti.map(c => {
      const isRisposta = !!c.parentId;
      return '<div style="border-bottom:1px solid var(--gold-dim);padding:8px 0;font-size:12px;' + (isRisposta ? 'margin-left:20px;border-left:2px solid #e74c3c;padding-left:10px' : '') + '">' +
        '<strong style="color:var(--gold)">' + _sanitize(c.nome) + '</strong>' +
        (isRisposta ? ' <span style="color:var(--muted)">(Risposta)</span>' : '<span style="color:var(--muted);margin-left:6px">[' + (c.topic||'generale') + ']</span>') +
        (c.approvato === false ? '<span style="color:#e74c3c;margin-left:6px">● NASCOSTO</span>' : '') +
        '<p style="color:var(--text);margin:4px 0">' + _sanitize(c.testo) + '</p>' +
        '<div style="display:flex;gap:8px;margin-top:4px">' +
        '<button onclick="adminNascondi(\'' + c.id + '\',' + (c.approvato !== false) + ')" style="background:rgba(231,76,60,0.2);border:1px solid #e74c3c;color:#e74c3c;padding:3px 10px;border-radius:8px;cursor:pointer;font-size:11px">' +
        (c.approvato !== false ? '🚫 Nascondi' : '✅ Mostra') + '</button>' +
        '<button onclick="adminElimina(\'' + c.id + '\')" style="background:rgba(231,76,60,0.3);border:1px solid #e74c3c;color:#e74c3c;padding:3px 10px;border-radius:8px;cursor:pointer;font-size:11px">🗑 Elimina</button>' +
        (!isRisposta ? '<button onclick="adminPreparaRisposta(\'' + c.id + '\', \'' + _sanitize(c.nome) + '\')" style="background:rgba(212,175,55,0.2);border:1px solid var(--gold);color:var(--gold);padding:3px 10px;border-radius:8px;cursor:pointer;font-size:11px">💬 Rispondi</button>' : '') +
        '</div></div>';
    }).join('');
  } else {
    if(_recensioniTutte.length === 0) { lista.innerHTML = '<p style="color:var(--muted);font-size:13px">Nessuna recensione.</p>'; return; }
    lista.innerHTML = _recensioniTutte.map(r =>
      '<div style="border-bottom:1px solid var(--gold-dim);padding:8px 0;font-size:12px">' +
      '<strong style="color:var(--gold)">' + _sanitize(r.nome) + '</strong>' +
      '<span style="margin-left:6px">' + '⭐'.repeat(r.stelle||0) + '</span>' +
      (r.approvato === false ? '<span style="color:#e74c3c;margin-left:6px">● NASCOSTO</span>' : '') +
      (r.testo ? '<p style="color:var(--text);margin:4px 0">' + _sanitize(r.testo) + '</p>' : '<p style="color:var(--muted);margin:4px 0;font-style:italic">nessun commento</p>') +
      '<div style="display:flex;gap:8px;margin-top:4px">' +
      '<button onclick="adminNascondiRec(\'' + r.id + '\',' + (r.approvato !== false) + ')" style="background:rgba(231,76,60,0.2);border:1px solid #e74c3c;color:#e74c3c;padding:3px 10px;border-radius:8px;cursor:pointer;font-size:11px">' +
      (r.approvato !== false ? '🚫 Nascondi' : '✅ Mostra') + '</button>' +
      '<button onclick="adminEliminaRec(\'' + r.id + '\')" style="background:rgba(231,76,60,0.3);border:1px solid #e74c3c;color:#e74c3c;padding:3px 10px;border-radius:8px;cursor:pointer;font-size:11px">🗑 Elimina</button>' +
      '</div></div>'
    ).join('');
  }
}

async function adminNascondiRec(id, nascondi) {
  _assicuraFirebase(async () => {
    try {
      const { doc, updateDoc } = window._fbFns;
      await updateDoc(doc(window._fbDb, 'recensioni', id), { approvato: !nascondi });
    } catch(e){ alert('Errore: ' + e.message); }
  });
}

async function adminEliminaRec(id) {
  if(!confirm('Eliminare questa recensione?')) return;
  _assicuraFirebase(async () => {
    try {
      const { doc, deleteDoc } = window._fbFns;
      await deleteDoc(doc(window._fbDb, 'recensioni', id));
    } catch(e){ alert('Errore: ' + e.message); }
  });
}

