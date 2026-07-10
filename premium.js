/**
 * MYSTICA Premium Manager v4.1 — sincronizzato online (Firestore), no carta richiesta agli utenti
 * Includi DOPO auth.js in ogni pagina:
 * <script src="./auth.js"></script>
 * <script src="./premium.js"></script>
 *
 * Espone globalmente (retrocompatibile con v3):
 *   window.MysticaPremium.isPremium()
 *   window.MysticaPremium.requirePremium(fn)
 *   window.requirePremium(fn)
 *   window.isPremium()
 *
 * MODELLO:
 *   - L'app è gratuita: chiunque può registrarsi gratis (email o Google), senza carta.
 *   - Il Premium è un pagamento UNICO di 4,99€ (non un abbonamento).
 *   - Il flag premium vive SOLO su Firestore (premiumStatus/{uid}) e viene scritto
 *     SOLO da un webhook server-side dopo conferma di pagamento reale da Stripe.
 *     Il browser non può mai scriverlo: niente bypass lato client.
 *
 * FLUSSO:
 *   1. Utente crea account gratuito (auth.js)
 *   2. Clic su "Acquista" → link Stripe con ?client_reference_id=<uid>
 *   3. Stripe conferma il pagamento → un webhook (Cloudflare Worker o Cloud Function)
 *      scrive premiumStatus/{uid}.premium = true
 *   4. Il client legge quel valore in tempo reale (onSnapshot) → premium sbloccato ovunque
 */
(function () {
  'use strict';

  const STRIPE_BASE = 'https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01';

  const MysticaPremium = {
    _ready: false,

    isPremium() {
      // Fonte di verità unica: Firestore, tramite auth.js. Senza account
      // loggato non esiste alcun modo di risultare Premium (niente flag locali).
      if (window.MysticaAuth && window.MysticaAuth.isLoggedIn()) {
        return window.MysticaAuth.isPremium();
      }
      return false;
    },

    requirePremium(cb) {
      if (this.isPremium()) { if (typeof cb === 'function') cb(); }
      else { this.openModal(); }
    },

    openModal() {
      const m = document.getElementById('premiumModal')
        || document.getElementById('premium-modal')
        || document.getElementById('modal-premium');
      if (m) {
        m.style.display = 'flex';
        m.classList.add('active', 'show');
        return;
      }
      this._buildModal();
    },

    _buyUrl() {
      const loggedIn = window.MysticaAuth && window.MysticaAuth.isLoggedIn();
      if (!loggedIn) return null; // serve login prima di acquistare
      const user = window.MysticaAuth.currentUser();
      const params = new URLSearchParams();
      params.set('client_reference_id', user.uid);
      if (user.email) params.set('prefilled_email', user.email);
      return STRIPE_BASE + '?' + params.toString();
    },

    _buildModal() {
      if (document.getElementById('_myst_pm_overlay')) return;
      if (!document.getElementById('_myst_pm_css')) {
        const s = document.createElement('style');
        s.id = '_myst_pm_css';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      const loggedIn = window.MysticaAuth && window.MysticaAuth.isLoggedIn();
      const buyUrl = this._buyUrl();

      const overlay = document.createElement('div');
      overlay.id = '_myst_pm_overlay';
      overlay.innerHTML = `
        <div id="_myst_pm_box">
          <div class="pm-star">✦</div>
          <h2>Funzione Premium</h2>
          <p class="pm-sub">Sblocca l'accesso completo a tutti gli oracoli e le funzioni avanzate.<br><strong>Pagamento unico di 4,99€, nessun abbonamento.</strong></p>

          ${loggedIn ? `
          <a href="${buyUrl}" target="_blank" class="pm-buy-btn">✦ Sblocca MYSTICA Premium · 4,99€ una tantum</a>
          <p style="font-family:'Crimson Pro',serif;font-size:.8rem;opacity:.65;margin-bottom:0;">
            Un pagamento solo, per sempre. Si attiva sul tuo account<br>ed è disponibile su ogni dispositivo dove accedi.
          </p>
          ` : `
          <p style="font-family:'Crimson Pro',serif;font-size:.85rem;opacity:.85;margin-bottom:14px;line-height:1.5;">
            La registrazione è gratuita e non richiede alcun pagamento.<br>
            Crea un account gratis per usare l'app; se vuoi anche sbloccare<br>
            le funzioni Premium, potrai farlo con un pagamento unico dopo.
          </p>
          <button class="pm-buy-btn" style="border:none;cursor:pointer;" onclick="document.getElementById('_myst_pm_overlay').remove();window.MysticaAuth.openAuthModal('register');">✦ Registrati Gratis</button>
          `}

          <div class="pm-footer">
            <button class="pm-skip" onclick="document.getElementById('_myst_pm_overlay').remove()">Continua Gratis</button>
          </div>
        </div>`;

      overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.remove(); });
      document.body.appendChild(overlay);
    }
  };

  const CSS = `
#_myst_pm_overlay{position:fixed;inset:0;z-index:99999;background:rgba(10,5,20,.92);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);padding:16px;}
#_myst_pm_box{background:linear-gradient(135deg,#1a0e35,#0d1a2e);border:1px solid #d4af37;border-radius:16px;padding:28px 24px;max-width:360px;width:100%;text-align:center;color:#e8e0f0;font-family:'Cinzel',serif;box-shadow:0 0 40px rgba(212,175,55,.25);position:relative;}
#_myst_pm_box .pm-star{font-size:2.2rem;margin-bottom:6px;}
#_myst_pm_box h2{color:#d4af37;font-size:1.2rem;margin:4px 0 8px;}
.pm-buy-btn{display:block;width:100%;background:#d4af37;color:#0a0514;padding:13px;border-radius:10px;text-decoration:none;font-weight:700;font-size:.88rem;margin-bottom:10px;letter-spacing:.04em;font-family:'Cinzel',serif;}
.pm-buy-btn:hover{opacity:.9;}
.pm-footer{margin-top:14px;}
.pm-footer button.pm-skip{color:rgba(212,175,55,.65);font-size:.78rem;background:none;border:none;cursor:pointer;font-family:'Cinzel',serif;display:block;margin:6px auto 0;}
.pm-footer button.pm-skip:hover{color:#d4af37;}
`;

  /* ── Aggiorna widget/UI quando lo stato premium cambia (login o pagamento) ── */
  document.addEventListener('mystica-premium-changed', function () {
    MysticaPremium._ready = MysticaPremium.isPremium();
  });
  document.addEventListener('mystica-auth-changed', function () {
    MysticaPremium._ready = MysticaPremium.isPremium();
  });

  window.MysticaPremium = MysticaPremium;
  window.requirePremium = function (cb) { MysticaPremium.requirePremium(cb); };
  window.isPremium = function () { return MysticaPremium.isPremium(); };

})();
