/**
 * MYSTICA Premium Manager v2.0
 * Includi come ultimo script nel <body> di ogni pagina:
 * <script src="./premium.js"></script>
 *
 * Espone globalmente:
 *   window.MysticaPremium.isPremium()       → true/false
 *   window.MysticaPremium.requirePremium(fn) → esegue fn o apre modal
 *   window.requirePremium(fn)               → alias retrocompatibile
 *   window.isPremium()                      → alias retrocompatibile
 */
(function(){
  'use strict';

  const LS_KEY   = 'myst_premium';
  const STRIPE   = 'https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01';

  function isLocalPremium(){
    try{ return localStorage.getItem(LS_KEY)==='true'; }catch(e){ return false; }
  }

  const MysticaPremium = {
    _ready: isLocalPremium(),

    isPremium(){ return this._ready; },

    requirePremium(cb){
      if(this._ready){ if(typeof cb==='function') cb(); }
      else { this.openModal(); }
    },

    openModal(){
      // Cerca modal già presente nella pagina
      const m = document.getElementById('premiumModal')
             || document.getElementById('premium-modal')
             || document.getElementById('modal-premium');
      if(m){ m.style.display='flex'; m.classList.add('active'); return; }
      this._inlineModal();
    },

    _inlineModal(){
      if(document.getElementById('_myst_pm')) return;
      const o = document.createElement('div');
      o.id = '_myst_pm';
      o.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(10,5,20,.92);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);';
      o.innerHTML=`
        <div style="background:linear-gradient(135deg,#1a0e35,#0d1a2e);border:1px solid #d4af37;border-radius:16px;padding:2rem 2.5rem;max-width:360px;width:90%;text-align:center;color:#e8e0f0;font-family:Cinzel,serif;box-shadow:0 0 40px rgba(212,175,55,.25);">
          <div style="font-size:2.5rem;margin-bottom:.5rem;">✦</div>
          <h2 style="color:#d4af37;font-size:1.3rem;margin:.4rem 0;">Funzione Premium</h2>
          <p style="font-family:'Crimson Pro',serif;font-size:.95rem;margin:.8rem 0 1.2rem;opacity:.9;line-height:1.5;">
            Sblocca letture illimitate, archivio completo e consulti avanzati.<br>
            <strong>Solo 4,99€ una tantum.</strong>
          </p>
          <a href="${STRIPE}" target="_blank" style="display:block;background:#d4af37;color:#0a0514;padding:.85rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:.9rem;margin-bottom:.7rem;letter-spacing:.04em;">✦ Sblocca MYSTICA Premium</a>
          <a href="./premium-restore.html" style="display:block;color:rgba(212,175,55,.7);font-size:.8rem;margin-bottom:.6rem;text-decoration:none;">🔑 Ho già pagato — Ripristina accesso</a>
          <button onclick="document.getElementById('_myst_pm').remove()" style="background:transparent;border:none;color:rgba(232,224,240,.4);cursor:pointer;font-size:.85rem;font-family:inherit;">Continua Gratis</button>
        </div>`;
      document.body.appendChild(o);
    }
  };

  window.MysticaPremium = MysticaPremium;
  window.requirePremium  = function(cb){ MysticaPremium.requirePremium(cb); };
  window.isPremium       = function(){ return MysticaPremium.isPremium(); };
})();
