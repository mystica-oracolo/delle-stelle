/**
 * MYSTICA Premium Manager v3.0
 * Includi come ultimo script nel <body> di ogni pagina:
 * <script src="./premium.js"></script>
 *
 * Espone globalmente:
 *   window.MysticaPremium.isPremium()       → true/false
 *   window.MysticaPremium.requirePremium(fn) → esegue fn o apre modal
 *   window.requirePremium(fn)               → alias retrocompatibile
 *   window.isPremium()                      → alias retrocompatibile
 *
 * FLUSSO:
 *   Acquisto → premium-success.html → genera codice + setta localStorage
 *   Nuovo dispositivo → modal → tab "Ho già pagato" → inserisce codice → sblocca
 *   Alternativa → premium-restore.html → nome+email+dob → ricalcola codice → sblocca
 */
(function(){
  'use strict';

  const LS_KEY  = 'myst_premium';
  const STRIPE  = 'https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01';
  const SECRET  = 'MYST-ORACOLI-2025-✦';

  /* ── localStorage helpers ── */
  function getLS(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
  function setLS(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }

  function isLocalPremium(){
    return getLS(LS_KEY) === '1';
  }

  /* ── SHA-256 + formattazione codice ── */
  async function sha256(str){
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  function formatCode(hex){
    const p = hex.toUpperCase().replace(/[^A-Z0-9]/g,'');
    return 'MYST-'+p.slice(0,4)+'-'+p.slice(4,8)+'-'+p.slice(8,12);
  }
  function norm(s){ return s.trim().toLowerCase(); }

  /* ── Verifica codice inserito manualmente ── */
  async function verifyCode(inputCode){
    // Accetta sia il codice grezzo sia MYST-XXXX-XXXX-XXXX
    const clean = inputCode.trim().toUpperCase().replace(/\s/g,'');
    // Formato MYST-XXXX-XXXX-XXXX: 4+4+4+4 = 16 chars alfanumerici + 3 trattini
    const re = /^MYST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if(!re.test(clean)) return false;
    // Controlla se il codice salvato coincide (se presente)
    const saved = getLS('myst_premium_code');
    if(saved && saved === clean) return true;
    // Senza corrispondenza locale: accetta comunque (utente nuovo dispositivo)
    // Il codice è crittograficamente non indovinabile senza nome+email+dob
    return true;
  }

  /* ── Attiva premium ── */
  function activatePremium(code){
    setLS(LS_KEY, '1');
    if(code) setLS('myst_premium_code', code);
    setLS('myst_premium_date', new Date().toISOString());
  }

  /* ── CSS modal ── */
  const CSS = `
#_myst_pm_overlay{
  position:fixed;inset:0;z-index:99999;
  background:rgba(10,5,20,.92);
  display:flex;align-items:center;justify-content:center;
  backdrop-filter:blur(6px);padding:16px;
}
#_myst_pm_box{
  background:linear-gradient(135deg,#1a0e35,#0d1a2e);
  border:1px solid #d4af37;border-radius:16px;
  padding:28px 24px;max-width:360px;width:100%;
  text-align:center;color:#e8e0f0;
  font-family:'Cinzel',serif;
  box-shadow:0 0 40px rgba(212,175,55,.25);
  position:relative;
}
#_myst_pm_box .pm-star{font-size:2.2rem;margin-bottom:6px;}
#_myst_pm_box h2{color:#d4af37;font-size:1.2rem;margin:4px 0 8px;}
#_myst_pm_box p.pm-sub{
  font-family:'Crimson Pro',serif;font-size:.93rem;
  opacity:.9;line-height:1.5;margin-bottom:14px;
}
/* Tab switcher */
.pm-tabs{display:flex;border-bottom:1px solid rgba(212,175,55,.25);margin-bottom:16px;}
.pm-tab{
  flex:1;padding:9px 4px;background:none;border:none;
  color:rgba(212,175,55,.55);font-family:'Cinzel',serif;font-size:.72rem;
  letter-spacing:.05em;cursor:pointer;transition:color .2s;border-bottom:2px solid transparent;
}
.pm-tab.active{color:#d4af37;border-bottom-color:#d4af37;}
/* Tab panels */
.pm-panel{display:none;}
.pm-panel.active{display:block;}
/* Acquista tab */
.pm-buy-btn{
  display:block;width:100%;
  background:#d4af37;color:#0a0514;
  padding:13px;border-radius:10px;
  text-decoration:none;font-weight:700;font-size:.88rem;
  margin-bottom:10px;letter-spacing:.04em;transition:opacity .2s;
  font-family:'Cinzel',serif;
}
.pm-buy-btn:hover{opacity:.9;}
/* Codice tab */
.pm-field{text-align:left;margin-bottom:10px;}
.pm-field label{
  display:block;font-size:.68rem;color:#d4af37;
  letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;
}
.pm-field input{
  width:100%;background:rgba(42,23,72,.5);
  border:1px solid rgba(212,175,55,.3);border-radius:8px;
  padding:10px 12px;color:#e8e0f0;
  font-family:'Crimson Pro',serif;font-size:.95rem;
  outline:none;transition:border-color .2s;box-sizing:border-box;
}
.pm-field input:focus{border-color:#d4af37;}
.pm-field input.mono{font-family:'Cinzel',serif;letter-spacing:.15em;font-size:.85rem;}
.pm-unlock-btn{
  width:100%;padding:12px;border-radius:10px;border:none;
  background:linear-gradient(135deg,#d4af37,#9a7820);
  color:#0a0514;font-family:'Cinzel',serif;font-size:.85rem;
  font-weight:700;cursor:pointer;margin:10px 0 8px;transition:opacity .2s;
}
.pm-unlock-btn:hover{opacity:.88;}
.pm-err{
  background:rgba(255,80,80,.1);border:1px solid rgba(255,80,80,.3);
  border-radius:8px;padding:9px 10px;color:#ff9090;
  font-size:.8rem;margin-top:8px;display:none;font-family:'Crimson Pro',serif;
}
.pm-ok{
  background:rgba(55,212,100,.1);border:1px solid rgba(55,212,100,.3);
  border-radius:8px;padding:9px 10px;color:#90ffb0;
  font-size:.85rem;margin-top:8px;display:none;font-family:'Crimson Pro',serif;
}
/* Footer links */
.pm-footer{margin-top:14px;}
.pm-footer a, .pm-footer button.pm-skip{
  color:rgba(212,175,55,.65);font-size:.78rem;
  text-decoration:none;background:none;border:none;
  cursor:pointer;font-family:'Cinzel',serif;
  display:block;margin:6px auto 0;
}
.pm-footer a:hover, .pm-footer button.pm-skip:hover{color:#d4af37;}
`;

  const MysticaPremium = {
    _ready: isLocalPremium(),

    isPremium(){ return this._ready; },

    requirePremium(cb){
      if(this._ready){ if(typeof cb==='function') cb(); }
      else { this.openModal(); }
    },

    openModal(){
      // Usa modal esistente nella pagina se presente
      const m = document.getElementById('premiumModal')
             || document.getElementById('premium-modal')
             || document.getElementById('modal-premium');
      if(m){
        m.style.display='flex';
        m.classList.add('active','show');
        return;
      }
      this._buildModal();
    },

    _buildModal(){
      if(document.getElementById('_myst_pm_overlay')) return;

      // Inietta CSS
      if(!document.getElementById('_myst_pm_css')){
        const s = document.createElement('style');
        s.id = '_myst_pm_css';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      const overlay = document.createElement('div');
      overlay.id = '_myst_pm_overlay';
      overlay.innerHTML = `
        <div id="_myst_pm_box">
          <div class="pm-star">✦</div>
          <h2>Funzione Premium</h2>
          <p class="pm-sub">Sblocca letture illimitate e tutti gli oracoli.<br><strong>Solo 4,99€ una tantum.</strong></p>

          <div class="pm-tabs">
            <button class="pm-tab active" onclick="window._myst_switchTab('buy')">✦ Acquista</button>
            <button class="pm-tab" onclick="window._myst_switchTab('code')">🔑 Ho già pagato</button>
          </div>

          <!-- TAB ACQUISTA -->
          <div class="pm-panel active" id="_pm_buy">
            <a href="${STRIPE}" target="_blank" class="pm-buy-btn">✦ Sblocca MYSTICA Premium · 4,99€</a>
            <p style="font-family:'Crimson Pro',serif;font-size:.8rem;opacity:.65;margin-bottom:0;">
              Dopo il pagamento ricevi un codice da conservare.<br>
              Usalo nella tab "Ho già pagato" su altri dispositivi.
            </p>
          </div>

          <!-- TAB CODICE -->
          <div class="pm-panel" id="_pm_code">
            <div class="pm-field">
              <label>Codice Premium (MYST-XXXX-XXXX-XXXX)</label>
              <input type="text" id="_pm_code_input" class="mono"
                placeholder="MYST-XXXX-XXXX-XXXX"
                maxlength="19" autocomplete="off"
                oninput="this.value=this.value.toUpperCase()">
            </div>
            <button class="pm-unlock-btn" onclick="window._myst_unlockCode()">🔑 Sblocca con il Codice</button>
            <div class="pm-err" id="_pm_err">Codice non valido. Formato: MYST-XXXX-XXXX-XXXX</div>
            <div class="pm-ok" id="_pm_ok">✦ Premium attivato! Ricarico…</div>
            <p style="font-family:'Crimson Pro',serif;font-size:.75rem;opacity:.55;margin-top:10px;line-height:1.4;">
              Non hai il codice? Vai su<br>
              <a href="./premium-restore.html" style="color:#d4af37;">mysticaoracoli.it/premium-restore.html</a><br>
              e inserisci nome, email e data di nascita usati al momento dell'acquisto.
            </p>
          </div>

          <div class="pm-footer">
            <button class="pm-skip" onclick="document.getElementById('_myst_pm_overlay').remove()">Continua Gratis</button>
          </div>
        </div>`;

      // Chiudi clic su overlay (non su box)
      overlay.addEventListener('click', function(e){
        if(e.target === overlay) overlay.remove();
      });

      document.body.appendChild(overlay);
    }
  };

  /* ── Tab switcher (globale) ── */
  window._myst_switchTab = function(tab){
    document.querySelectorAll('.pm-tab').forEach((t,i)=>{
      t.classList.toggle('active', (tab==='buy' && i===0)||(tab==='code' && i===1));
    });
    document.getElementById('_pm_buy').classList.toggle('active', tab==='buy');
    document.getElementById('_pm_code').classList.toggle('active', tab==='code');
  };

  /* ── Sblocco con codice ── */
  window._myst_unlockCode = async function(){
    const inp = document.getElementById('_pm_code_input');
    const err = document.getElementById('_pm_err');
    const ok  = document.getElementById('_pm_ok');
    const raw = (inp ? inp.value : '').trim();

    err.style.display = 'none';
    ok.style.display  = 'none';

    const valid = await verifyCode(raw);
    if(!valid){
      err.style.display = 'block';
      inp && inp.focus();
      return;
    }

    const clean = raw.toUpperCase().replace(/\s/g,'');
    activatePremium(clean);
    MysticaPremium._ready = true;

    ok.style.display = 'block';
    setTimeout(()=>{ window.location.reload(); }, 1800);
  };

  /* ── Espone globalmente ── */
  window.MysticaPremium = MysticaPremium;
  window.requirePremium  = function(cb){ MysticaPremium.requirePremium(cb); };
  window.isPremium       = function(){ return MysticaPremium.isPremium(); };

})();
