// oracoli.js - Versione corretta con fallback integrato

/* ── ORACOLO DI DELFI ── */
let _delfiRitoSel = -1;

const DELFI_RITI = [
  {emoji:'🌿', nome:'Alloro', tono:'Con la chiarezza dell\'alloro sacro ad Apollo, la Pizia rivela'},
  {emoji:'🔥', nome:'Fuoco', tono:'Attraverso le fiamme del coraggio, l\'oracolo parla'},
  {emoji:'💧', nome:'Acqua', tono:'Dalle acque della rivelazione, emerge la profezia'}
];

const DELFI_RESPONSI = [
  {tit:'Il Cammino si Apre',txt:'Le acque del Castalia mostrano chiarezza dove sembrava nebbia. Ciò che cerchi non è lontano — sei tu a doverti avvicinare.',enigma:'Ciò che si mostra palesemente a chi lo cerca con cuore puro spesso si nasconde a chi lo insegue con troppa fretta.',virtù:['Fiducia','Apertura','Pazienza']},
  {tit:'Conosci Te Stesso',txt:'Apollo ricorda: prima di ogni azione, il saggio si interroga. La risposta che cerchi fuori esiste già dentro di te — ascoltala nel silenzio.',enigma:'La fonte più profonda non è nel tempio, ma nell\'anima che vi si specchia.',virtù:['Autoconoscenza','Saggezza','Silenzio']},
  {tit:'Il Tempo Non È Ancora Maturo',txt:'La Pizia vede vapori che si addensano. Non è il momento di agire — è il momento di preparare. La stagione giusta arriverà.',enigma:'Il grano non nasce prima dell\'inverno; la vittoria non arriva prima della preparazione.',virtù:['Attesa','Preparazione','Fiducia nel ciclo']},
  {tit:'Prudenza nel Cammino',txt:'Apollo avverte: tra due vie, prendi quella che onora la tua integrità. Il destino premia chi agisce con rettitudine.',enigma:'La strada più veloce non è sempre quella giusta; la più retta è quella che non pesa sulla coscienza.',virtù:['Integrità','Discernimento','Coraggio morale']},
  {tit:'Il Cambiamento È Inevitabile',txt:'Le sacre fiamme del Parnaso illuminano una trasformazione in atto. Resistere non serve — fluire con il cambiamento è la vera saggezza.',enigma:'Il fiume non si dispera per le pietre che deve aggirare: sa che il mare l\'aspetta comunque.',virtù:['Adattabilità','Lasciar andare','Fiducia nel fluire']},
  {tit:'Un\'Alleanza Da Cercare',txt:'La Pizia vede mani che si tendono. C\'è qualcuno — o qualcosa — che può aiutarti in questo momento. Non temere di chiedere.',enigma:'Anche Apollo aveva bisogno delle Muse per creare armonia; la forza vera sa quando fare squadra.',virtù:['Umiltà','Collaborazione','Fiducia']},
  {tit:'Il Segreto Sta Nei Dettagli',txt:'L\'oracolo sussurra: presta attenzione a ciò che passa inosservato. La risposta si cela in un piccolo segnale che hai quasi ignorato.',enigma:'Il delfino sacro ad Apollo trova la strada anche nel buio degli abissi — si fida dei sensi sottili.',virtù:['Attenzione','Intuizione','Cura del dettaglio']},
  {tit:'Porta a Termine Ciò Che Hai Iniziato',txt:'La Pizia vede promesse non mantenute a te stesso. Completa ciò che hai abbandonato — lì risiede la tua forza ritrovata.',enigma:'Il tempio di Delfi fu costruito pietra per pietra; nessuna grande opera nasce completa in un giorno.',virtù:['Costanza','Impegno','Integrità con se stessi']},
  {tit:'Guarda Oltre l\'Apparenza',txt:'Apollo rivela che la situazione non è ciò che sembra. Ciò che temi è meno grave; ciò che credi sicuro merita più attenzione.',enigma:'L\'oracolo non mente mai — ma la mente che interpreta può traviare. Leggi i segni con occhi nuovi.',virtù:['Discernimento','Apertura mentale','Lucidità']},
  {tit:'Il Sacrificio Porta Frutto',txt:'La Pizia vede che qualcosa deve essere lasciato andare per far spazio a qualcosa di più grande. Ogni rinuncia consapevole è un\'offerta sacra.',enigma:'Chi porta doni ad Apollo con mani aperte riceve più di chi stringe i pugni per trattenere tutto.',virtù:['Distacco','Generosità','Visione lunga']},
  {tit:'Cerca il Consiglio del Saggio',txt:'L\'oracolo indica: intorno a te c\'è qualcuno con più esperienza di questa situazione. Ascoltare non è debolezza — è intelligenza.',enigma:'Anche Achille aveva Chirone; anche Ulisse aveva Atena. Il saggio sa quando cercare guida.',virtù:['Umiltà','Apertura al consiglio','Riconoscenza']},
  {tit:'La Forza del Silenzio',txt:'Apollo parla attraverso il silenzio questa volta. Smetti di cercare risposte fuori — siediti con la domanda finché risponde da sola.',enigma:'Il tripode della Pizia era circondato dal silenzio del santuario; la verità emerge nel vuoto, non nel rumore.',virtù:['Contemplazione','Pazienza','Ascolto profondo']}
];

function initDelfiIcons(){
  const dc = document.getElementById('dcDelfiCanvas');
  if(dc){
    const ctx=dc.getContext('2d'),w=dc.width,h=dc.height,cx=w/2,cy=h/2;
    ctx.clearRect(0,0,w,h);
    const bg=ctx.createRadialGradient(cx,cy,2,cx,cy,w*0.48);
    bg.addColorStop(0,'#2a0d5e');bg.addColorStop(1,'#0d0520');
    ctx.beginPath();ctx.arc(cx,cy,w*0.48,0,Math.PI*2);ctx.fillStyle=bg;ctx.fill();
    ctx.beginPath();ctx.arc(cx,cy,w*0.47,0,Math.PI*2);
    ctx.strokeStyle='rgba(200,160,240,0.6)';ctx.lineWidth=1.5;ctx.stroke();
    ctx.beginPath();ctx.arc(cx,cy-4,8,0,Math.PI*2);ctx.fillStyle='#d4af37';ctx.fill();
    for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*10,cy-4+Math.sin(a)*10);ctx.lineTo(cx+Math.cos(a)*16,cy-4+Math.sin(a)*16);ctx.strokeStyle='#d4af37';ctx.lineWidth=1.5;ctx.stroke();}
    ctx.fillStyle='rgba(200,160,240,0.5)';
    [cx-10,cx+2].forEach(x=>{ctx.fillRect(x,cy+6,4,14);ctx.fillRect(x-2,cy+4,8,3);ctx.fillRect(x-2,cy+20,8,3);});
  }
  const dt=document.getElementById('delfiTempleCanvas');
  if(dt){
    const ctx=dt.getContext('2d'),w=dt.width,h=dt.height,cx=w/2,cy=h/2;
    ctx.clearRect(0,0,w,h);
    const bg=ctx.createRadialGradient(cx,cy,5,cx,cy,w*0.5);
    bg.addColorStop(0,'#3a1560');bg.addColorStop(1,'#0d0520');
    ctx.beginPath();ctx.arc(cx,cy,w*0.5,0,Math.PI*2);ctx.fillStyle=bg;ctx.fill();
    ctx.beginPath();ctx.arc(cx,cy-20,18,0,Math.PI*2);ctx.fillStyle='#d4af37';ctx.fill();
    for(let i=0;i<12;i++){const a=i*Math.PI/6;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*20,cy-20+Math.sin(a)*20);ctx.lineTo(cx+Math.cos(a)*30,cy-20+Math.sin(a)*30);ctx.strokeStyle='rgba(212,175,55,0.7)';ctx.lineWidth=1.5;ctx.stroke();}
    ctx.fillStyle='rgba(200,160,240,0.7)';
    [cx-30,cx-16,cx,cx+14].forEach(x=>{ctx.fillRect(x,cy+2,6,30);ctx.fillRect(x-3,cy,12,4);ctx.fillRect(x-3,cy+32,12,4);});
    ctx.beginPath();ctx.moveTo(cx-38,cy);ctx.lineTo(cx,cy-18);ctx.lineTo(cx+38,cy);ctx.closePath();
    ctx.fillStyle='rgba(160,123,208,0.35)';ctx.fill();ctx.strokeStyle='rgba(200,160,240,0.5)';ctx.lineWidth=1;ctx.stroke();
  }
}

function resetDelfi(){
  _delfiRitoSel = -1;
  const q = document.getElementById('delfiQuestion');
  if(q) q.value = '';
  const res = document.getElementById('delfiResult');
  if(res){ res.style.display='none'; res.innerHTML=''; }
  const form = document.getElementById('delfiForm');
  if(form) form.style.display='block';
  document.querySelectorAll('.delfi-rito').forEach(b => b.classList.remove('sel'));
}

function selRito(btn){
  document.querySelectorAll('.delfi-rito').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  _delfiRitoSel = parseInt(btn.getAttribute('data-rito'));
}

function consultaDelfi(){
  const q = (document.getElementById('delfiQuestion')?.value || '').trim();
  if(!q){ toast('Scrivi la tua domanda per la Pizia ✦'); return; }
  if(_delfiRitoSel < 0){ toast('Scegli prima il rito di purificazione ✦'); return; }

  const rito = DELFI_RITI[_delfiRitoSel];
  const risposta = DELFI_RESPONSI[Math.floor(Math.random() * DELFI_RESPONSI.length)];

  document.getElementById('delfiForm').style.display = 'none';

  const res = document.getElementById('delfiResult');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="delfi-oracolo-box">
      <div class="delfi-pizia">🏛️</div>
      <div class="delfi-titolo">✦ LA RISPOSTA DELLA PIZIA ✦</div>
      <div style="font-size:11px;color:rgba(200,160,240,0.7);margin-bottom:14px;font-family:'Cinzel',serif;letter-spacing:1px">
        ${rito.emoji} Rito dell\'${rito.nome} — ${rito.tono}:
      </div>
      <div style="font-family:'Cinzel',serif;font-size:16px;color:#c8a0f0;margin-bottom:12px;letter-spacing:1px">
        ${risposta.tit}
      </div>
      <div class="delfi-responso">${risposta.txt}</div>
      <div class="delfi-enigma">
        <strong>✦ L\'ENIGMA ✦</strong><br>${risposta.enigma}
      </div>
      <div class="delfi-virtù">
        ${risposta.virtù.map(v=>`<span>${v}</span>`).join('')}
      </div>
      <div style="display:flex;gap:9px;margin-top:4px">
        <button class="btn btn-sec" onclick="resetDelfi();initDelfiIcons();" style="flex:1;margin-top:0;padding:12px">
          🔄 Nuova Domanda
        </button>
        <button class="btn btn-sec" onclick="shareResult('delfi','Oracolo di Delfi','${risposta.tit}')" style="flex:1;margin-top:0;padding:12px">
          📲 Condividi
        </button>
      </div>
    </div>`;
}

/* ═══ DATABASE SIGILLI FALLBACK (se rituali.js non caricato) ═══ */
if (typeof DB_SIGILLI_SALOMONE === 'undefined') {
  window.DB_SIGILLI_SALOMONE = [
    { geomFn: 'saturno', nome: 'Saturno', pianeta: '♄ Saturno', colore: '#6b6b8a', metallo: 'Piombo', giorno: 'Sabato', sigillo: '⬡', elemento: 'Terra' },
    { geomFn: 'giove', nome: 'Giove', pianeta: '♃ Giove', colore: '#4a7fbf', metallo: 'Stagno', giorno: 'Giovedì', sigillo: '✡', elemento: 'Aria' },
    { geomFn: 'marte', nome: 'Marte', pianeta: '♂ Marte', colore: '#c84a3a', metallo: 'Ferro', giorno: 'Martedì', sigillo: '★', elemento: 'Fuoco' },
    { geomFn: 'sole', nome: 'Sole', pianeta: '☉ Sole', colore: '#e6b800', metallo: 'Oro', giorno: 'Domenica', sigillo: '☀', elemento: 'Fuoco' },
    { geomFn: 'venere', nome: 'Venere', pianeta: '♀ Venere', colore: '#3da88e', metallo: 'Rame', giorno: 'Venerdì', sigillo: '♥', elemento: 'Acqua' },
    { geomFn: 'mercurio', nome: 'Mercurio', pianeta: '☿ Mercurio', colore: '#d97a3a', metallo: 'Argento-Mercurio', giorno: 'Mercoledì', sigillo: '☿', elemento: 'Aria' },
    { geomFn: 'luna', nome: 'Luna', pianeta: '☾ Luna', colore: '#b8a8d4', metallo: 'Argento', giorno: 'Lunedì', sigillo: '☽', elemento: 'Acqua' }
  ];
}

/* ═══ FUNZIONI DI FALLBACK PER MAGIA ═══ */
if (typeof _generaSigilloSVG === 'undefined') {
  window._generaSigilloSVG = function(s) {
    const size = 180;
    const cx = size/2, cy = size/2;
    const colors = {
      'saturno': '#6b6b8a', 'giove': '#4a7fbf', 'marte': '#c84a3a',
      'sole': '#e6b800', 'venere': '#3da88e', 'mercurio': '#d97a3a',
      'luna': '#b8a8d4'
    };
    const c = colors[s.geomFn] || '#d4af37';
    
    let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;filter:drop-shadow(0 0 18px ${c}60)">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${size/2 - 12}" fill="none" stroke="${c}" stroke-width="2" opacity="0.5"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${size/2 - 18}" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="4,6" opacity="0.3"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="22" fill="${c}" opacity="0.2"/>`;
    svg += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="'Cinzel',serif" font-size="24" font-weight="700" fill="${c}" letter-spacing="2">${s.nome.charAt(0).toUpperCase()}</text>`;
    svg += `<text x="${cx}" y="${size - 8}" text-anchor="middle" font-family="'Cinzel',serif" font-size="9" fill="${c}" opacity="0.6" letter-spacing="3">${s.nome.toUpperCase()}</text>`;
    svg += `</svg>`;
    return svg;
  };
}

if (typeof _renderEnciclopediaSVG === 'undefined') {
  window._renderEnciclopediaSVG = function() {
    const map = {
      'svgSaturno': 'saturno', 'svgGiove': 'giove', 'svgMarte': 'marte',
      'svgSole': 'sole', 'svgVenere': 'venere', 'svgMercurio': 'mercurio', 'svgLuna': 'luna'
    };
    Object.entries(map).forEach(function([elId, geomKey]) {
      const container = document.getElementById(elId);
      if (!container || container.innerHTML.trim()) return;
      const s = DB_SIGILLI_SALOMONE.find(function(x) { return x.geomFn === geomKey; });
      if (s) container.innerHTML = _generaSigilloSVG(s);
    });
  };
}

if (typeof initMagia === 'undefined') {
  window.initMagia = function() {
    const panels = ['bianca', 'rossa', 'nera', 'malocchio', 'sigilli'];
    const titles = {
      'bianca': '✨ Magia Bianca',
      'rossa': '❤️ Magia Rossa',
      'nera': '🖤 Magia Nera',
      'malocchio': '🧿 Il Malocchio',
      'sigilli': '🔯 Sigilli di Re Salomone'
    };
    const intros = {
      'bianca': 'Rituali di protezione, guarigione e luce. Lavorano in armonia con il bene di tutti gli esseri.',
      'rossa': 'Rituali di passione, amore e attrazione. Sempre nel rispetto del libero arbitrio altrui.',
      'nera': 'Rituali di ombra, difesa e trasformazione. Usati eticamente per proteggere e allontanare il male.',
      'malocchio': 'Tradizione popolare mediterranea. Riconoscimento, rimozione e protezione dal malocchio.',
      'sigilli': 'La Clavicula Salomonis — 44 sigilli planetari per la manifestazione del desiderio.'
    };
    
    panels.forEach(function(p) {
      const list = document.getElementById('magiaList-' + p);
      if (!list) return;
      if (list.children.length > 0 && list.querySelector('.magia-fallback')) return;
      
      list.innerHTML = `
        <div class="card magia-fallback" style="margin-bottom:10px;border-color:rgba(212,175,55,0.2)">
          <h3 style="text-align:center;color:var(--gold);font-family:'Cinzel',serif;font-size:14px;margin-bottom:6px">${titles[p] || p}</h3>
          <p style="font-size:13px;color:var(--muted);text-align:center;line-height:1.8">${intros[p] || ''}</p>
          <p style="font-size:12px;color:var(--gold-dim);text-align:center;font-family:'Cinzel',serif;letter-spacing:1px;margin-top:8px">
            ✦ Contenuti disponibili con MYSTICA Premium ✦
          </p>
          <button class="btn" style="width:100%;margin-top:8px" onclick="if(typeof showPremiumModal==='function') showPremiumModal(null); else alert('Premium disponibile su MYSTICA')">
            ⭐ Sblocca Premium — 3,99€
          </button>
        </div>
      `;
    });
  };
}

/* ── NAVIGAZIONE ── */
function openOracoloHome(id){
  if(typeof trackEvent !== 'undefined') trackEvent('Oracle','open',id);

  if(!_adSeen.has('oracolo_'+id)){
    _adSeenAdd('oracolo_'+id);
    const labels={totem:'Animali Guida',angeli:'Angelologia',geomanzia:'Geomanzia',
    numerologia:'Numerologia',orespeschio:'Ore Specchio',luna:'Fasi Lunari',
    pianeti:'Transiti Planetari',rune:'Runologia',iching:'I Ching',libro:'Libro Risposte',
    wicca:'Stregoneria &amp; Wicca',alchimia:'Alchimia — Grande Opera',
    cabala:'Cabala — Albero della Vita',ermetismo:'Ermetismo — Tavola Smeraldina',
    negromanzia:'Negromanzia — Dialoghi con l\'Ombra',
    delfi:'Oracolo di Delfi — Apollo &amp; Pizia'};
    showAdGate(labels[id]||id, function(){ _switchView('oracoli'); _openOracoloPanel(id); });
  } else {
    _switchView('oracoli');
    _openOracoloPanel(id);
  }
}

function navMagia(panel){
  var _doOpen = function(){
    // Prova a caricare rituali.js, ma se fallisce usa il fallback
    if (typeof _loadChunk === 'function') {
      _loadChunk('rituali').then(function() {
        _switchView('magia');
        _openMagiaPanel(panel);
      }).catch(function(err) {
        console.warn('Errore caricamento rituali.js, uso fallback:', err);
        _switchView('magia');
        _openMagiaPanel(panel);
      });
    } else {
      _switchView('magia');
      _openMagiaPanel(panel);
    }
  };

  if(!_adSeen.has('magia')){
    _adSeenAdd('magia');
    const labels={bianca:'Magia Bianca',rossa:'Magia Rossa',nera:'Magia Nera',malocchio:'Il Malocchio',sigilli:'Sigilli di Re Salomone'};
    showAdGate(labels[panel]||'Libri di Magia', _doOpen);
  } else {
    _doOpen();
  }
}

function _openMagiaPanel(panel){
  document.querySelectorAll('.magia-panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.magia-tab').forEach(function(t){ t.classList.toggle('active', t.dataset.panel===panel); });
  const el = document.getElementById('magiaPanel-'+panel);
  if(el) el.classList.add('active');
  
  // Inizializza le liste di magia (usa fallback se initMagia non definita)
  if (typeof initMagia === 'function') {
    initMagia();
  } else {
    // Fallback init rapido
    ['bianca','rossa','nera','malocchio','sigilli'].forEach(function(p) {
      const list = document.getElementById('magiaList-' + p);
      if (list && list.children.length === 0) {
        list.innerHTML = `
          <div class="card magia-fallback" style="margin-bottom:10px;border-color:rgba(212,175,55,0.2)">
            <p style="font-size:13px;color:var(--muted);text-align:center;line-height:1.8;padding:10px 0">
              Contenuti disponibili con MYSTICA Premium
            </p>
            <button class="btn" style="width:100%;margin-top:4px" onclick="if(typeof showPremiumModal==='function') showPremiumModal(null)">
              ⭐ Sblocca Premium — 3,99€
            </button>
          </div>
        `;
      }
    });
  }
  
  if(panel === 'sigilli'){
    setTimeout(function(){
      if (typeof _renderEnciclopediaSVG === 'function') {
        _renderEnciclopediaSVG();
      }
    }, 100);
  }
}

function openOracolo(id){
  hapticFeedback('medium');

  const labels={
    totem:'Animali Guida — Totem',
    angeli:'Angelologia — Angelo Custode',
    geomanzia:'Geomanzia Antica',
    numerologia:'Numerologia del Destino',
    orespeschio:'Ore Specchio',
    luna:'Fasi Lunari',
    pianeti:'Transiti Planetari',
    rune:'Runologia — Le Rune',
    iching:'I Ching — Libro dei Mutamenti',
    libro:'Il Libro delle Risposte',
    wicca:'Stregoneria &amp; Wicca',
    alchimia:'Alchimia — Grande Opera',
    cabala:'Cabala — Albero della Vita',
    ermetismo:'Ermetismo — Tavola Smeraldina',
    negromanzia:'Negromanzia — Dialoghi con l\'Ombra',
    bibliomanzia:'Bibliomanzia & Tasseomanzia',
    delfi:'Oracolo di Delfi — Apollo & Pizia'
  };
  if(!ORACOLI_AD_SEEN.has(id)){
    ORACOLI_AD_SEEN.add(id);
    showAdGate(labels[id]||id, function(){ _openOracoloPanel(id); });
  } else {
    _openOracoloPanel(id);
  }
}

function _openOracoloPanel(id, isBack){
  if(!isBack){
    try{ window.history.pushState({view: 'oracoli', oracoloId: id, type: 'oracolo'}, '', '#oracolo-' + id); }catch(e){}
  }
  hapticFeedback('mystical');
  var home = document.getElementById('oracoliHome');
  if(home) home.style.display = 'none';
  document.querySelectorAll('[id^="oracolo-"]').forEach(function(el){ el.style.display = 'none'; });
  var target = document.getElementById('oracolo-'+id);
  if(target){
    target.style.display = 'block';

    // Inizializza l'oracolo specifico
    var initMap = {
      'totem': function(){ if(typeof resetTotem === 'function') resetTotem(); },
      'angeli': function(){ if(typeof resetAngeli === 'function') resetAngeli(); },
      'geomanzia': function(){ if(typeof resetGeomanzia === 'function') resetGeomanzia(); },
      'numerologia': function(){ if(typeof resetNumerologia === 'function') resetNumerologia(); },
      'orespeschio': function(){ if(typeof resetOreSpecchio === 'function') resetOreSpecchio(); },
      'luna': function(){ if(typeof resetLuna === 'function') resetLuna(); },
      'pianeti': function(){ if(typeof resetPianeti === 'function') resetPianeti(); },
      'rune': function(){ if(typeof resetRune === 'function') resetRune(); },
      'iching': function(){ if(typeof resetIching === 'function') resetIching(); },
      'libro': function(){ if(typeof resetLibro === 'function') resetLibro(); },
      'wicca': function(){ if(typeof resetWicca === 'function') resetWicca(); },
      'alchimia': function(){ if(typeof resetAlchimia === 'function') resetAlchimia(); },
      'cabala': function(){ if(typeof resetCabala === 'function') resetCabala(); },
      'ermetismo': function(){ if(typeof resetErmetismo === 'function') resetErmetismo(); },
      'negromanzia': function(){ if(typeof resetNegromanzia === 'function') resetNegromanzia(); },
      'bibliomanzia': function(){ if(typeof resetBibliomanzia === 'function') resetBibliomanzia(); },
      'delfi': function(){ resetDelfi(); initDelfiIcons(); }
    };
    if(initMap[id]) initMap[id]();
  }
}

function backToOracoli(){
  try{ window.history.back(); }catch(e){ nav('oracoli'); }
}

// Inizializza le liste di magia al caricamento
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof initMagia === 'function') initMagia();
  });
} else {
  if (typeof initMagia === 'function') initMagia();
}