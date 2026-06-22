const DB_PIANETI = {
  sole:    { nome:'Sole',      emoji:'☀️',  desc:'Identità, ego, forza vitale', veloce:true },
  luna:    { nome:'Luna',      emoji:'🌙',  desc:'Emozioni, istinto, cicli', veloce:true },
  mercurio:{ nome:'Mercurio',  emoji:'☿',  desc:'Comunicazione, intelletto, viaggi', veloce:true },
  venere:  { nome:'Venere',    emoji:'♀️',  desc:'Amore, bellezza, valori, piacere', veloce:true },
  marte:   { nome:'Marte',     emoji:'♂️',  desc:'Azione, desiderio, energia fisica', veloce:true },
  giove:   { nome:'Giove',     emoji:'♃',  desc:'Espansione, fortuna, filosofia', veloce:false },
  saturno: { nome:'Saturno',   emoji:'♄',  desc:'Struttura, karma, disciplina, limiti', veloce:false },
  urano:   { nome:'Urano',     emoji:'⛢',  desc:'Rivoluzione, innovazione, rotture', veloce:false },
  nettuno: { nome:'Nettuno',   emoji:'♆',  desc:'Sogni, illusione, spiritualità, arte', veloce:false },
  plutone: { nome:'Plutone',   emoji:'⯓',  desc:'Trasformazione, potere, morte e rinascita', veloce:false },
};

const DB_PIANETI_RETROGRADI = {
  mercurio:`Mercurio Retrogrado è la fase più famosa nell'astrologia pop — e per una buona ragione. Mercurio governa comunicazione, tecnologia, trasporti e contratti. Quando retrograda, tutti questi ambiti diventano soggetti a revisioni, incomprensioni e malfunzionamenti. Non è il momento per firmare contratti importanti o prendere decisioni irrevocabili. È invece il momento perfetto per rivedere, riflettere, riconsiderare e finire ciò che era rimasto aperto.`,
  venere:`Venere Retrograda — che accade solo ogni 18 mesi circa — porta una revisione profonda dei valori, dell'amore e del denaro. Vecchie relazioni riemergono per essere rivalutate. Le spese di lusso andrebbero evitate. Non è il momento ideale per nuovi tagli di capelli o cambiamenti estetici importanti. Usa questo periodo per capire cosa desideri veramente in amore.`,
  marte:`Marte Retrogrado rallenta l'energia, la motivazione e la libido. Le azioni impulsive portano rimpianti. I conflitti riesplodono se non risolti. È il momento di riorientare la tua energia verso obiettivi che contano davvero, non di combattere battaglie secondarie. Pazienza e strategia ora valgono più del coraggio improvvisato.`,
  giove:`Giove Retrogrado (circa 4 mesi ogni anno) invita a riconsiderare la tua filosofia di vita, le tue credenze e il tuo concetto di crescita. I guadagni potrebbero rallentare, ma la vera espansione avviene nell'interno. È un momento di grande crescita spirituale e saggezza se lo usi consciamente.`,
  saturno:`Saturno Retrogrado porta a fare i conti con strutture, responsabilità e karma irrisolto. Le lezioni che hai evitato tornano con urgenza rinnovata. Non è un periodo punitivo — è un'opportunità per costruire basi più solide. Chi lavora seriamente durante Saturno Retrogrado raccoglierà frutti duraturi.`,
  urano:`Urano Retrogrado (circa 5 mesi/anno) porta rivoluzioni interiori invece di rotture esterne. Sei chiamato a liberarti da dentro — da strutture mentali, credenze e limitazioni auto-imposte. Le intuizioni durante questa fase possono essere fulminanti e trasformative.`,
  nettuno:`Nettuno Retrogrado (circa 5 mesi/anno) porta chiarezza attraverso la nebbia: ciò che sembrava romantico o ideale ora mostra la sua vera natura. È il momento di distinguere il sogno dall'illusione, la fede autentica dall'auto-inganno. Meditazione e pratiche spirituali sono amplificaissimi.`,
  plutone:`Plutone Retrogrado (circa 5 mesi/anno) porta il processo di trasformazione all'interno. Ciò che stava cambiando lentamente fuori ora si intensifica dentro. È il momento di fare i conti con il potere — il tuo e quello degli altri — e di morire piccole morti necessarie per rinascere.`,
};

const DB_SEGNI_PIANETI = {

  sole: ['Ariete: forza d\'iniziativa, pionierismo, energia marziale','Toro: stabilità, piacere sensoriale, costruzione lenta','Gemelli: versatilità, comunicazione, curiosità intellettuale','Cancro: nutrimento, emozioni profonde, protezione della famiglia','Leone: creatività, drammaticità, generosità regale','Vergine: analisi, servizio, perfezione nei dettagli','Bilancia: armonia, giustizia, bellezza nelle relazioni','Scorpione: intensità, trasformazione, profondità emotiva','Sagittario: espansione, avventura, ricerca del significato','Capricorno: ambizione, disciplina, costruzione dell\'eredità','Acquario: rivoluzione, ideali universali, originalità','Pesci: compassione, sogno, connessione col tutto'],
  mercurio: ['Ariete: pensiero rapido e diretto','Toro: pensiero pratico e lento ma solido','Gemelli: versatilità intellettuale al massimo — casa','Cancro: memoria emotiva, intuizione','Leone: comunicazione drammatica e creativa','Vergine: analisi precisa — casa','Bilancia: comunicazione diplomatica','Scorpione: pensiero penetrante e strategico','Sagittario: visione filosofica','Capricorno: logica pratica e disciplinata','Acquario: idee innovative e originali','Pesci: pensiero intuitivo e poetico'],
  venere: ['Ariete: amore passionale e diretto','Toro: amore sensoriale — casa','Gemelli: amore mentale, flirtazione','Cancro: amore protettivo e nutrito','Leone: amore drammatico e generoso','Vergine: amore discreto e di servizio','Bilancia: amore armonico — casa','Scorpione: amore intenso e trasformativo','Sagittario: amore libero e avventuroso','Capricorno: amore duraturo e leale','Acquario: amore per l\'umanità','Pesci: amore universale ed empatico'],
};

const ASPETTI_MSG = [
  { tipo:'congiunzione', simbolo:'☌', desc:'Energie unificate — potenza amplificata' },
  { tipo:'trigono',      simbolo:'△', desc:'Armonia naturale — facilità e flusso' },
  { tipo:'sextile',      simbolo:'⚹', desc:'Opportunità — sinergia costruttiva' },
  { tipo:'quadratura',   simbolo:'□', desc:'Tensione creativa — crescita attraverso la sfida' },
  { tipo:'opposizione',  simbolo:'☍', desc:'Polarità — equilibrio tra forze opposte' },
];

function calcAspetti(positions){
  const keys = Object.keys(positions);
  const aspetti = [];
  for(let i=0;i<keys.length;i++){
  for(let j=i+1;j<keys.length;j++){
  const p1=positions[keys[i]], p2=positions[keys[j]];
  let diff = Math.abs(p1.lon - p2.lon);
  if(diff>180) diff=360-diff;
  let tipo=null;
  if(diff<=8) tipo='congiunzione';
  else if(Math.abs(diff-60)<=6) tipo='sextile';
  else if(Math.abs(diff-90)<=6) tipo='quadratura';
  else if(Math.abs(diff-120)<=8) tipo='trigono';
  else if(Math.abs(diff-180)<=8) tipo='opposizione';
  if(tipo) aspetti.push({ p1:keys[i], p2:keys[j], tipo });
  }
  }
  return aspetti.slice(0,5); // max 5 aspetti
}

function resetPianeti(){
  $('#planetiResult').style.display='none';
  $('#planetiForm').style.display='block';
  const todayStr = new Date().toISOString().split('T')[0];
  const planetiDateEl = $('#planetiDate');
  if(planetiDateEl){
  planetiDateEl.value = todayStr;
  planetiDateEl.max = todayStr;
  planetiDateEl.min = '1900-01-01';
  }
}

function calcPianeti(){ _renderPianeti(new Date()); }
function calcPianetiData(){
  const v=$('#planetiDate').value;
  if(!v){ toast('⚠️ Seleziona una data'); return; }
  const [yyyy,mm,dd] = v.split('-').map(Number);
  _renderPianeti(new Date(yyyy, mm-1, dd, 12, 0, 0));
}

function _renderPianeti(date){
  const JD = getJulianDay(date);
  const pos = calcPlanetPos(JD);
  const dateStr = date.toLocaleDateString('it-IT',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const retrogradi = Object.entries(pos).filter(([k,v])=>v.retro).map(([k])=>k);

  const aspetti = calcAspetti(pos);

  const ordine = ['sole','luna','mercurio','venere','marte','giove','saturno','urano','nettuno','plutone'];
  const righeHtml = ordine.map(key=>{
  const p = pos[key];
  const db = DB_PIANETI[key];
  const segno = lonToSegno(p.lon);
  const badge = p.retro
  ? `<span class="pianeta-badge retro">℞ Retrogrado</span>`
  : `<span class="pianeta-badge normale">${segno.gradi}°</span>`;
  return `
  <div class="pianeta-row ${p.retro?'retro':''}">
  <span class="pianeta-emoji">${db.emoji}</span>
  <div class="pianeta-info">
  <div class="pianeta-nome">${db.nome} <span class="pianeta-gradi">${db.desc}</span></div>
  <div class="pianeta-segno">${segno.emoji} ${segno.nome} ${segno.elemento}</div>
  </div>
  ${badge}
  </div>`;
  }).join('');

  let retroHtml = '';
  if(retrogradi.length>0){
  retroHtml = retrogradi.map(key=>{
  const msg = DB_PIANETI_RETROGRADI[key]||'';
  if(!msg) return '';
  return `
  <div class="pianeti-alert danger">
  <h4>℞ ${DB_PIANETI[key]?.nome||key} Retrogrado — Attenzione</h4>
  <p>${msg}</p>
  </div>`;
  }).join('');
  }

  const aspettiHtml = aspetti.length>0 ? `
  <div class="pianeti-aspetti">
  <div class="pianeti-aspetti-title">✦ Aspetti Planetari Attivi</div>
  ${aspetti.map(a=>{
  const db1=DB_PIANETI[a.p1], db2=DB_PIANETI[a.p2];
  const asp = ASPETTI_MSG.find(x=>x.tipo===a.tipo)||{simbolo:'?',desc:''};
  return `<div class="aspetto-row">
  <span class="aspetto-simbolo">${asp.simbolo}</span>
  <span>${db1?.emoji||''} ${db1?.nome||a.p1} — ${db2?.emoji||''} ${db2?.nome||a.p2}</span>
  <span class="aspetto-desc">&nbsp;· ${asp.desc}</span>
  </div>`;
  }).join('')}
  </div>` : '';

  const nRetro = retrogradi.length;
  let climaMsg, climaClass;
  if(nRetro===0){
  climaMsg='Tutti i pianeti sono in moto diretto — cielo favorevole per azioni, lanci e decisioni importanti. Sfrutta questa finestra di chiarezza.';
  climaClass='gold';
  } else if(nRetro<=2){
  climaMsg=`${nRetro} pianeta${nRetro>1?'i':''} in retrogrado. Procedi con consapevolezza: revisione e riflessione sono più potenti dell'azione impulsiva in questo periodo.`;
  climaClass='info';
  } else {
  climaMsg=`${nRetro} pianeti in retrogrado simultaneo — periodo intenso di revisione cosmica. Il ritiro interiore è più produttivo di qualsiasi lancio esteriore. Rifletti, ripara, riposa.`;
  climaClass='danger';
  }

  const el = $('#planetiResult');
  el.innerHTML = `
  <div>
  <div class="pianeti-alert ${climaClass}" style="margin-bottom:14px">
  <h4>🪐 Clima Astrale — ${dateStr}</h4>
  <p>${climaMsg}</p>
  </div>
  <div class="pianeti-sky">
  <div class="pianeti-header">✦ Posizioni Planetarie ✦</div>
  ${righeHtml}
  </div>
  ${retroHtml}
  ${aspettiHtml}
  <button class="btn btn-sec" onclick="resetPianeti()" style="margin-top:6px">🔄 Altra Data</button>
  </div>
  `;
  el.style.display='block';
  $('#planetiForm').style.display='none';
  burst();
  saveHistory('Transiti Planetari', dateStr + (nRetro>0?' — '+nRetro+' retrogradi':''));
}

