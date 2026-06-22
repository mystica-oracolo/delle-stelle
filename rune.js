const DB_RUNE = [
  { sim:'ᚠ', nome:'Fehu', trasl:'F', invertibile:true,
  diritta:'Fehu è la runa della ricchezza guadagnata — non ereditata, non rubata, ma creata con le mani e la mente. Annuncia abbondanza materiale, successo nei progetti finanziari e il frutto di un lavoro onesto. È anche la runa del fuoco primordiale che anima ogni creazione. In questo momento le forze del fuoco cosmico sono con te: ciò che hai seminato sta per dare frutti.',
  rovesciata:'Fehu rovesciata segnala perdita finanziaria, frustrazione nei progetti o energie mal indirizzate. Il denaro che non circolano marcisce — controlla se stai trattenendo risorse (materiali o emotivi) invece di metterle in circolazione. Rivedi i tuoi investimenti di tempo e energia.',
  amore:'Prosperità emotiva in arrivo. Una relazione si arricchisce di nuova vitalità.',
  parola:'Abbondanza', elemento:'Fuoco' },

  { sim:'ᚢ', nome:'Uruz', trasl:'U', invertibile:true,
  diritta:'Uruz è la forza bruta del bisonte selvatico — potenza fisica, vitalità, capacità di superare ostacoli con pura energia. Questa runa ti dice che hai più forza di quanta tu creda. Un\'opportunità si presenta improvvisamente e richiede coraggio per essere colta. La tua salute è in ascesa o si sta rafforzando.',
  rovesciata:'Uruz rovesciata segnala energia mal indirizzata, debolezza temporanea o opportunità mancate. Forse stai combattendo la resistenza giusta invece di piegarti intelligentemente come il bambù.',
  amore:'Passione e vitalità in amore. Attrazione fisica intensa.',
  parola:'Forza', elemento:'Terra' },

  { sim:'ᚦ', nome:'Thurisaz', trasl:'TH', invertibile:true,
  diritta:'Thurisaz è la runa del gigante e del martello — forza distruttrice che apre il cammino. Rappresenta la protezione attiva contro le forze che ti vogliono fermare, ma anche i propri ostacoli interni che devono essere abbattuti. Un momento di catarsi difficile ma necessaria si avvicina.',
  rovesciata:'Thurisaz rovesciata avverte di forze ostili nell\'ambiente — persone o circostanze che potrebbero sabotare i tuoi piani. Massima cautela nelle alleanze. Non agire d\'impulso.',
  amore:'Protezione nelle relazioni. Diffondi i confini chiari.',
  parola:'Protezione', elemento:'Fuoco' },

  { sim:'ᚨ', nome:'Ansuz', trasl:'A', invertibile:true,
  diritta:'Ansuz è la runa di Odino, il dio della saggezza e del linguaggio. Porta messaggi divini, ispirazioni improvvise e il potere trasformativo della parola. Un insegnamento importante sta per arrivare — attraverso un sogno, un incontro, un libro, una conversazione apparentemente casuale. Ascolta con più attenzione del solito.',
  rovesciata:'Ansuz rovesciata segnala comunicazioni bloccate, inganni o messaggi distorti. Qualcuno potrebbe non dirti tutta la verità. Fidati più della tua intuizione che delle parole degli altri.',
  amore:'Un messaggio importante in amore. Dì ciò che senti veramente.',
  parola:'Saggezza', elemento:'Aria' },

  { sim:'ᚱ', nome:'Raidho', trasl:'R', invertibile:true,
  diritta:'Raidho è la runa del viaggio — non solo fisico ma anche interiore. Indica movimento, progresso, la gioia del cammino in sé oltre che della meta. Un viaggio fisico potrebbe essere in arrivo, oppure sei invitato a metterti in movimento verso un obiettivo che hai rimandato. Il ritmo giusto è con te.',
  rovesciata:'Raidho rovesciata segnala ritardi, viaggi problematici o un percorso deviato. Potresti sentirti bloccato in un ciclo che non ti porta da nessuna parte. Rivedi la direzione — non la velocità.',
  amore:'Un viaggio o cambiamento di scenario ravviva la relazione.',
  parola:'Viaggio', elemento:'Aria' },

  { sim:'ᚲ', nome:'Kenaz', trasl:'K', invertibile:true,
  diritta:'Kenaz è la torcia nella notte — la conoscenza tecnica, la creatività artigianale, la fiamma che illumina il buio dell\'ignoranza. Stai per capire qualcosa che ti sfuggiva. Un\'abilità si sviluppa, un progetto creativo prende forma. La chiarezza sta arrivando.',
  rovesciata:'Kenaz rovesciata segnala la perdita di una fiamma — fine di una relazione, di un progetto o di un\'illusione confortante. Anche se è doloroso, questo chiarimento ti libera per qualcosa di più autentico.',
  amore:'Luce portata nell\'oscurità emotiva. Comprensione reciproca approfondita.',
  parola:'Illuminazione', elemento:'Fuoco' },

  { sim:'ᚷ', nome:'Gebo', trasl:'G', invertibile:false,
  diritta:'Gebo è la runa del dono — lo scambio sacro tra due parti. Indica partnership equilibrate, doni ricevuti o dati, e la legge cosmica del dare e ricevere. Ogni dono autentico crea un legame. Stai per ricevere un dono inaspettato, o sei chiamato a darne uno con il cuore aperto. Le collaborazioni ora fioriscono.',
  rovesciata:null,
  amore:'Una relazione in dono reciproco. Partnership equa e nutriente.',
  parola:'Dono', elemento:'Aria' },

  { sim:'ᚹ', nome:'Wunjo', trasl:'W', invertibile:true,
  diritta:'Wunjo è la runa della gioia — non il piacere superficiale, ma la gioia profonda che nasce dall\'essere esattamente dove si deve essere. Armonia, felicità, successo nei gruppi e nelle comunità. Un periodo di vero benessere è o si avvicina. Permettiti di godertelo senza sabotarlo.',
  rovesciata:'Wunjo rovesciata porta delusioni, disarmonia nel gruppo, o una gioia che si rivela fragile. Attenzione all\'autoinganna circa la felicità.',
  amore:'Gioia e armonia in amore. Momenti di connessione autentica.',
  parola:'Gioia', elemento:'Terra' },

  { sim:'ᚺ', nome:'Hagalaz', trasl:'H', invertibile:false,
  diritta:'Hagalaz è la grandine — distruzione improvvisa e fuori dal controllo. Rappresenta le forze del caos che spazzano via ciò che era malato o instabile. Anche se l\'esperienza può essere traumatica, ciò che Hagalaz distrugge aveva bisogno di andare. Il campo dopo la grandine è pulito e pronto per una semina nuova.',
  rovesciata:null,
  amore:'Un\'interruzione improvvisa in amore — può purificare ciò che era tossico.',
  parola:'Rottura', elemento:'Acqua' },

  { sim:'ᚾ', nome:'Nauthiz', trasl:'N', invertibile:true,
  diritta:'Nauthiz è la runa del bisogno e della necessità — la frizione che produce il fuoco. Indica un periodo di difficoltà che forgia il carattere. Sei in una situazione di costrizione, ma questa limitazione stessa ti sta insegnando qualcosa di essenziale. Il desiderio insoddisfatto è il motore della crescita.',
  rovesciata:'Nauthiz rovesciata amplifica la frustrazione e la mancanza. Potresti sentirti intrappolato in un ciclo di bisogno. Il primo passo è riconoscere ciò di cui hai veramente bisogno — non ciò che vuoi.',
  amore:'Un bisogno non espresso crea tensione. Parla di ciò che ti manca.',
  parola:'Necessità', elemento:'Fuoco' },

  { sim:'ᛁ', nome:'Isa', trasl:'I', invertibile:false,
  diritta:'Isa è il ghiaccio — stasi, blocco, il mondo congelato. Non è negativa: il ghiaccio preserva. Ma indica che ora non è il momento dell\'azione. Tutto è fermo, e forse è necessario. Usa questo periodo di congelamento per riflettere invece di combattere la stasi. Il disgelo arriverà.',
  rovesciata:null,
  amore:'Periodo di gelo emotivo. Non forzare — attendi il disgelo naturale.',
  parola:'Stasi', elemento:'Acqua' },

  { sim:'ᛃ', nome:'Jera', trasl:'J', invertibile:false,
  diritta:'Jera è la runa del raccolto — il frutto paziente di un lungo ciclo. Annuncia che il tempo della raccolta è arrivato: i tuoi sforzi passati stanno per dare i loro frutti. Questa runa insegna che i cicli naturali non si possono forzare. Il raccolto arriva alla sua ora, non alla tua.',
  rovesciata:null,
  amore:'Il raccolto in amore: ciò che hai investito nella relazione torna moltiplicato.',
  parola:'Raccolto', elemento:'Terra' },

  { sim:'ᛇ', nome:'Eihwaz', trasl:'EI', invertibile:false,
  diritta:'Eihwaz è il tasso — l\'albero dell\'immortalità che cresce tra i mondi. Rappresenta la connessione tra vita e morte, tra il visibile e l\'invisibile. Sei in un momento di transizione profonda. Hai la forza di resistere alle prove più difficili. Questa runa è una delle più potenti come amuleto di protezione.',
  rovesciata:null,
  amore:'Un amore che attraversa trasformazioni profonde e ne emerge più forte.',
  parola:'Resilienza', elemento:'Terra' },

  { sim:'ᛈ', nome:'Perthro', trasl:'P', invertibile:true,
  diritta:'Perthro è il calice del destino — il mistero, il gioco del fato, ciò che è ancora nascosto nel ventre del futuro. Indica che stai per scoprire qualcosa di sorprendente, o che una situazione ha risvolti che non vedi ancora. Tratta la vita come un gioco divino e accetta l\'incertezza con curiosità.',
  rovesciata:'Perthro rovesciata porta segreti svelati male, sorprese spiacevoli o comportamenti dipendenti (da sostanze, da relazioni, da abitudini).',
  amore:'Misteri e sorprese in amore. Non tutto è come sembra.',
  parola:'Destino', elemento:'Acqua' },

  { sim:'ᛉ', nome:'Algiz', trasl:'Z', invertibile:true,
  diritta:'Algiz è la runa della protezione — le corna dell\'alce alzate in difesa, la connessione con le guide spirituali. Sei protetto in questo momento da forze che non vedi. Fidati dell\'istinto che ti dice di allontanarti da certi posti, persone o situazioni.',
  rovesciata:'Algiz rovesciata segnala che la tua protezione è indebolita — potresti essere vulnerabile a manipolazioni o energie negative. Rafforza i tuoi confini.',
  amore:'Protezione divina sulla relazione. Un\'ala ti copre.',
  parola:'Protezione', elemento:'Aria' },

  { sim:'ᛊ', nome:'Sowilo', trasl:'S', invertibile:false,
  diritta:'Sowilo è il sole — vittoria, salute, energia vitale al massimo. È la runa della luce che non può essere oscurata, della volontà che si allinea con la forza cosmica. Stai per (o stai vivendo) un momento di grande chiarezza e potere personale. Non lasciare che la timidezza ti impedisca di brillare.',
  rovesciata:null,
  amore:'Energia solare in amore: calore, gioia, vitalità nella relazione.',
  parola:'Vittoria', elemento:'Fuoco' },

  { sim:'ᛏ', nome:'Tiwaz', trasl:'T', invertibile:true,
  diritta:'Tiwaz è la runa di Tyr, il dio della giustizia che sacrificò la mano per incatenare il lupo Fenrir. Indica vittoria attraverso il sacrificio consapevole, giustizia, onore. Hai la forza di fare la cosa giusta anche quando è difficile. La tua integrità è la tua protezione.',
  rovesciata:'Tiwaz rovesciata segnala ingiustizia, sconfitta, o una causa in cui non credi davvero. Rivedi per cosa stai combattendo.',
  amore:'Giustizia e onore nelle relazioni. Dì la verità anche quando è scomoda.',
  parola:'Giustizia', elemento:'Aria' },

  { sim:'ᛒ', nome:'Berkano', trasl:'B', invertibile:true,
  diritta:'Berkano è la betulla — nuovi inizi, fertilità, rinascita. Come l\'albero che è il primo a rifiorire in primavera, questa runa annuncia un nuovo inizio pieno di potenziale. Ottima per progetti nuovi, gravidanze, guarigione. La madre cosmica ti nutre.',
  rovesciata:'Berkano rovesciata indica problemi familiari, blocchi nella crescita o un\'idea che non riesce a nascere nonostante gli sforzi.',
  amore:'Nuovi inizi in amore. Fertilità e nutrimento reciproco.',
  parola:'Rinascita', elemento:'Terra' },

  { sim:'ᛖ', nome:'Ehwaz', trasl:'E', invertibile:true,
  diritta:'Ehwaz è il cavallo — il viaggio veloce, la partnership leale, il movimento armonioso tra due forze che si fidano l\'una dell\'altra. Indica collaborazioni eccellenti, spostamenti produttivi e la fiducia come fondamento di ogni relazione autentica.',
  rovesciata:'Ehwaz rovesciata porta disaccordo in una partnership, viaggi problematici o una collaborazione che si inceppa per mancanza di fiducia.',
  amore:'Partnership leale e mossa dalla fiducia profonda.',
  parola:'Partnership', elemento:'Terra' },

  { sim:'ᛗ', nome:'Mannaz', trasl:'M', invertibile:true,
  diritta:'Mannaz è la runa dell\'umanità — il sé in relazione agli altri, la coscienza collettiva, la cooperazione. Ti ricorda che siamo tutti connessi e che le tue azioni hanno ripercussioni nella rete umana intorno a te. Momento di grande potenziale per le relazioni sociali e intellettuali.',
  rovesciata:'Mannaz rovesciata segnala isolamento, egoismo o manipolazione nell\'ambiente sociale. Riesaminare i confini tra sé e gli altri.',
  amore:'Connessione profonda basata sulla comprensione reciproca della natura umana.',
  parola:'Umanità', elemento:'Aria' },

  { sim:'ᛚ', nome:'Laguz', trasl:'L', invertibile:true,
  diritta:'Laguz è l\'acqua — il flusso, l\'intuizione, l\'inconscio, il mondo emotivo. Sei chiamato a seguire il flusso invece di combatterlo. La tua intuizione ora è particolarmente affidabile — ascoltala anche quando non ha spiegazioni logiche.',
  rovesciata:'Laguz rovesciata indica emozioni fuori controllo, eccesso di fantasie o una situazione in cui ti stai annegando invece di nuotare.',
  amore:'Intuizione in amore. Lasciati guidare dal sentire profondo.',
  parola:'Intuizione', elemento:'Acqua' },

  { sim:'ᛜ', nome:'Ingwaz', trasl:'NG', invertibile:false,
  diritta:'Ingwaz è la runa del dio della fertilità — il potenziale interno pronto a esplodere in manifestazione. Indica completamento di un ciclo, energia interna accumulata pronta per essere rilasciata, e una nuova fase della vita che sta per cominciare. È una runa di grande potere silenzioso.',
  rovesciata:null,
  amore:'Un ciclo si completa e un nuovo inizia — la relazione evolve in qualcosa di più.',
  parola:'Potenziale', elemento:'Terra' },

  { sim:'ᛞ', nome:'Dagaz', trasl:'D', invertibile:false,
  diritta:'Dagaz è l\'alba — il punto di svolta tra il buio e la luce, la trasformazione catalizzante. Indica un momento di illuminazione, un cambiamento di prospettiva così radicale che tutto dopo sarà diverso. Non si può tornare indietro dopo Dagaz — e non vorresti farlo.',
  rovesciata:null,
  amore:'Un\'alba in amore: tutto cambia in meglio, una comprensione nuova trasforma la relazione.',
  parola:'Svolta', elemento:'Fuoco' },

  { sim:'ᛟ', nome:'Othala', trasl:'O', invertibile:true,
  diritta:'Othala è la runa dell\'eredità e della casa — le radici ancestrali, la proprietà, il patrimonio (materiale e spirituale) tramandato. Indica connessione con gli antenati, questioni di famiglia o proprietà, e la necessità di onorare le proprie radici per crescere verso l\'alto.',
  rovesciata:'Othala rovesciata porta conflitti familiari, problemi legati alle proprietà o un\'incapacità di liberarsi da pattern ancestrali che non servono più.',
  amore:'Amore radicato nella famiglia e nelle tradizioni. L\'eredità emotiva del passato influenza il presente.',
  parola:'Eredità', elemento:'Terra' },

  { sim:'ᛣ', nome:'Wyrd', trasl:'∅', invertibile:false,
  diritta:'Wyrd è la runa del vuoto, della runa bianca — il mistero supremo che non può essere nominato. Quando la runa del vuoto emerge, il destino non può essere letto: sei in un momento di pura potenzialità dove tutte le possibilità sono aperte simultaneamente. Non cercare la risposta — siediti nel mistero e lascia che il futuro si riveli da solo.',
  rovesciata:null,
  amore:'Ciò che deve manifestarsi in amore sta prendendo forma nel silenzio. Fidati.',
  parola:'Mistero', elemento:'Spirito' },
];

let _runeMode = 0; // 0=singola, 1=tre rune

function resetRune(){
  _runeMode=0;
  runeSelectMode(0);
  const runeResultEl = $('#runeResult');
  runeResultEl.style.display='none';
  runeResultEl.innerHTML='';
  $('#runeForm').style.display='block';
  $('#runeDomanda').value='';
}

function runeSelectMode(m){
  _runeMode=m;
  $$('.rune-mode-tab').forEach((t,i)=>t.classList.toggle('active',i===m));
  $('#runeDrawBtn').textContent = m===0 ? 'ᚱ Estrai la Runa' : 'ᚱᚢᚾ Estrai le Tre Rune';
}

function runeDraw(){
  if(_runeMode===0) _runeDrawSingola();
  else _runeDrawTre();
}

function _runeRandom(){
  const r = DB_RUNE[Math.floor(Math.random()*DB_RUNE.length)];
  const rovesciata = r.invertibile && Math.random()<0.35;
  return { ...r, rovesciata };
}

function _runeDrawSingola(){
  const runa = _runeRandom();
  const domanda = ($('#runeDomanda').value||'').trim();
  const versoBadge = runa.invertibile
  ? `<span class="rune-verso-badge ${runa.rovesciata?'rovesciata':'diritta'}">${runa.rovesciata?'▽ Rovesciata':'△ Diritta'}</span>`
  : '';
  const msg = runa.rovesciata && runa.rovesciata_msg !== null
  ? (runa.rovesciata || runa.diritta)
  : runa.diritta;
  const domandaHtml = domanda ? `<div class="geo-question-shown">❓ "${domanda}"</div>` : '';

  const el=$('#runeResult');
  el.innerHTML=`
  <div class="rune-single">
  ${domandaHtml}
  <div class="rune-symbol-big" style="transform:${runa.rovesciata?'rotate(180deg)':'none'}">${runa.sim}</div>
  <div class="rune-nome">${runa.nome}</div>
  <div class="rune-traslitt">Traslitterazione: ${runa.trasl} · ${runa.elemento}</div>
  ${versoBadge}
  <div class="num-keywords" style="margin-bottom:14px"><span class="num-kw">✦ ${runa.parola}</span></div>
  <div class="rune-block"><h4>📜 Il Messaggio della Runa</h4><p>${msg}</p></div>
  <div class="rune-block"><h4>💕 In Amore</h4><p>${runa.amore}</p></div>
  <button class="btn btn-sec" onclick="resetRune()" style="margin-top:10px">🔄 Nuova Estrazione</button>
  </div>
  `;
  el.style.display='block';
  $('#runeForm').style.display='none';
  burst();
  saveHistory('Runologia', runa.nome + (runa.rovesciata?' (rovesciata)':'') + ' — ' + runa.parola);
}

function _runeDrawTre(){

  const pool=[...DB_RUNE];
  const drawn=[];
  for(let i=0;i<3;i++){
  const idx=Math.floor(Math.random()*pool.length);
  const r=pool.splice(idx,1)[0];
  drawn.push({...r, rovesciata:r.invertibile&&Math.random()<0.35});
  }
  const posizioni=['PASSATO','PRESENTE','FUTURO'];
  const poscol=['#a0a0ff','var(--gold)','#ffb347'];
  const domanda=($('#runeDomanda').value||'').trim();
  const domandaHtml=domanda?`<div class="geo-question-shown">❓ "${domanda}"</div>`:'';

  const spreadCards=drawn.map((r,i)=>`
  <div class="rune-spread-card">
  <div class="rune-spread-pos" style="color:${poscol[i]}">${posizioni[i]}</div>
  <div class="rune-spread-sym" style="transform:${r.rovesciata?'rotate(180deg)':'none'}">${r.sim}</div>
  <div class="rune-spread-name">${r.nome}</div>
  <div class="rune-spread-verso">${r.rovesciata?'<span style="color:#f44">▽</span>':'<span style="color:#4c4">△</span>'}</div>
  </div>`).join('');

  const dettagli=drawn.map((r,i)=>{
  const msg=r.rovesciata&&r.rovesciata?r.rovesciata:r.diritta;
  const vmsg=r.rovesciata&&r.rovesciata?'℞ Rovesciata':'Diritta';
  return `
  <div class="rune-spread-detail">
  <h4><span style="font-size:22px">${r.sim}</span> ${r.nome} — <span style="color:${poscol[i]};font-size:10px">${posizioni[i]}</span> <span style="color:var(--muted);font-size:9px;margin-left:4px">${vmsg}</span></h4>
  <p>${msg}</p>
  </div>`;
  }).join('');

  const el=$('#runeResult');
  el.innerHTML=`
  <div class="rune-single">
  ${domandaHtml}
  <div class="rune-spread">${spreadCards}</div>
  ${dettagli}
  <button class="btn btn-sec" onclick="resetRune()" style="margin-top:10px">🔄 Nuova Lettura</button>
  </div>
  `;
  el.style.display='block';
  $('#runeForm').style.display='none';
  burst();
  const nomi=drawn.map(r=>r.nome+(r.rovesciata?'℞':'')).join(' · ');
  saveHistory('Runologia 3 Rune', nomi);
}

const TRIGRAMMI = {
  '111':{ nome:'Cielo',   cinese:'乾', elem:'☰ Metallo', desc:'Forza creativa' },
  '000':{ nome:'Terra',   cinese:'坤', elem:'☷ Terra',   desc:'Forza ricettiva' },
  '100':{ nome:'Tuono',   cinese:'震', elem:'☳ Legno',   desc:'Movimento, risveglio' },
  '010':{ nome:'Acqua',   cinese:'坎', elem:'☵ Acqua',   desc:'Pericolo, profondità' },
  '001':{ nome:'Monte',   cinese:'艮', elem:'☶ Terra',   desc:'Immobilità, meditazione' },
  '110':{ nome:'Vento',   cinese:'巽', elem:'☴ Legno',   desc:'Penetrazione, docilità' },
  '101':{ nome:'Fuoco',   cinese:'離', elem:'☲ Fuoco',   desc:'Chiarezza, dipendenza' },
  '011':{ nome:'Lago',    cinese:'兌', elem:'☱ Metallo', desc:'Gioia, comunicazione' },
};

