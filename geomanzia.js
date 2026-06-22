const DB_GEO = [
  {
  nome:'Via', latino:'Via', emoji:'🛤️',
  righe:[1,1,1,1], // 1=singolo(attivo), 2=doppio(passivo)
  elemento:'Acqua · Luna', keywords:['Viaggio','Movimento','Cambiamento','Destino aperto'],
  significato:'La Via è la figura del cammino in movimento. La tua risposta è chiara: ciò che stai cercando si trova nel movimento stesso, non nella meta. Non aspettare che le cose si sistemino — inizia a muoverti e il percorso si rivelerà sotto i tuoi piedi. La Via promette risultati, ma solo a chi accetta di lasciare la terraferma conosciuta.',
  amore:'In amore, la Via annuncia incontri attraverso spostamenti, viaggi o nuove situazioni. Se sei in una relazione, un cambiamento di scenario ravviverà la connessione.',
  lavoro:'Opportunità che richiedono mobilità e adattabilità. Un progetto itinerante o una collaborazione a distanza si rivelerà più fruttifera dell\'atteso.',
  consiglio:'Muoviti. Cambia prospettiva. La risposta alla tua domanda non arriverà nell\'attesa ma nell\'azione.'
  },
  {
  nome:'Popolo', latino:'Populus', emoji:'👥',
  righe:[2,2,2,2],
  elemento:'Acqua · Luna', keywords:['Comunità','Stabilità','Collettivo','Attesa'],
  significato:'Il Popolo è la figura della folla e della stabilità collettiva. Nulla si muove — tutto è sospeso. Questa non è passività: è la quiete prima della semina. La tua situazione attuale richiede di consolidare, non di lanciare. Raccogli persone intorno a te, consolida le alleanze esistenti, e aspetta il momento giusto.',
  amore:'Numerose relazioni sociali ma nulla di esclusivo in questo momento. La persona giusta è già nel tuo cerchio — aspetta che la connessione si approfondisca naturalmente.',
  lavoro:'Clima neutro, né avanzamenti né perdite. Rafforza le relazioni professionali e prepara il terreno per l\'azione futura.',
  consiglio:'La pazienza ora è più produttiva dell\'azione frettolosa. Consolida prima di espanderti.'
  },
  {
  nome:'Grande Fortuna', latino:'Fortuna Major', emoji:'🏆',
  righe:[2,2,1,1],
  elemento:'Sole · Leone', keywords:['Successo','Protezione','Vittoria','Aiuto divino'],
  significato:'La Grande Fortuna è la figura più benevolente di tutta la geomanzia. Annuncia successo reale, solido, guadagnato — non fortuna passeggera ma risultato che dura. Se hai una domanda specifica, la risposta è sì con piena fiducia. Le forze cosmiche sono allineate con la tua intenzione. Agisci con coraggio perché sei protetto.',
  amore:'Una relazione importante si approfondisce o un incontro significativo è imminente. Se stai attraversando difficoltà, la Grande Fortuna porta risoluzione duratura.',
  lavoro:'Periodo eccellente per presentazioni, negoziazioni, accordi importanti. I tuoi sforzi vengono riconosciuti e premiati con generosità.',
  consiglio:'Hai la protezione cosmica. Non esitare — agisci con la fiducia che ti spetta.'
  },
  {
  nome:'Piccola Fortuna', latino:'Fortuna Minor', emoji:'🍀',
  righe:[1,1,2,2],
  elemento:'Sole · Leone', keywords:['Aiuto esterno','Successo rapido','Transitorietà','Supporto'],
  significato:'La Piccola Fortuna porta successo, ma di natura temporanea o parziale. L\'aiuto che ricevi viene dall\'esterno — da persone, circostanze fortunate, coincidenze. Non puoi contarci sempre, ma ora è disponibile. Usa questa finestra favorevole con intelligenza e costruisci qualcosa che regga anche quando la fortuna si ritira.',
  amore:'Un aiuto inatteso in amore — un amico che fa da tramite, una coincidenza che crea l\'incontro. Sfrutta l\'occasione che si presenta.',
  lavoro:'Supporto temporaneo da colleghi o superiori. Completa ora i progetti che hai in sospeso: il momento è favorevole ma breve.',
  consiglio:'La finestra è aperta ora — passa. Non aspettare un momento migliore che potrebbe non arrivare.'
  },
  {
  nome:'Acquisizione', latino:'Acquisitio', emoji:'💰',
  righe:[2,1,2,1],
  elemento:'Giove · Sagittario', keywords:['Guadagno','Profitto','Successo materiale','Abbondanza'],
  significato:'Acquisitio è la figura del guadagno in tutte le sue forme. Ciò che hai dato sta per tornare moltiplicato. Soldi, conoscenza, salute, amore — quello che cerchi è in arrivo. La figura indica però che devi essere attivo: l\'abbondanza non cade dall\'alto, viene conquistata attraverso l\'azione consapevole e il merito genuino.',
  amore:'In amore si guadagna: affetto, impegno, profondità. Una relazione diventa più seria e stabile. Una persona rivela sentimenti importanti.',
  lavoro:'Periodo eccellente per transazioni finanziarie, aumenti, nuovi contratti. La semina del passato è pronta per il raccolto.',
  consiglio:'Avanza con fiducia nelle tue richieste. Meriti quello che chiedi — non svalutarti in questo momento.'
  },
  {
  nome:'Perdita', latino:'Amissio', emoji:'🍂',
  righe:[1,2,1,2],
  elemento:'Venere · Toro', keywords:['Perdita','Lasciar andare','Liberazione','Fine di ciclo'],
  significato:'Amissio annuncia una perdita — ma non necessariamente una tragedia. Spesso ciò che si perde era già un peso. Questa figura insegna che la vera abbondanza richiede spazio: devi rilasciare ciò che trattieni per fare posto a ciò che viene. La perdita indicata da questa figura porta, nel lungo termine, a una libertà che non immaginavi.',
  amore:'Una relazione che si allontana o una fase emotiva che si chiude. Invece di combatterla, accompagna questo cambiamento con grazia — libera entrambi.',
  lavoro:'Un progetto o una fonte di reddito si riduce. È il momento di diversificare e non dipendere da una sola fonte.',
  consiglio:'Non stringere le mani su ciò che sta andando. Lascia andare con coscienza e prepara le mani per ricevere.'
  },
  {
  nome:'Letizia', latino:'Laetitia', emoji:'🌟',
  righe:[1,1,1,2],
  elemento:'Giove · Ariete', keywords:['Gioia','Salute','Buone notizie','Ottimismo'],
  significato:'Laetitia è la figura della gioia genuina e della salute che fiorisce. Una notizia positiva, un momento di celebrazione o un recupero tanto atteso è in arrivo. Questo non è solo piacere superficiale — è la gioia profonda dell\'anima che riconosce di essere nel posto giusto al momento giusto. Permetti a te stesso di godere di questo momento senza sensi di colpa.',
  amore:'Gioia in amore: momenti felici condivisi, leggerezza ritrovata, possibilità di nuovo inizio se c\'è stata una rottura.',
  lavoro:'Clima lavorativo positivo, buone notizie in arrivo. Un progetto che ti stava pesando prende una svolta allegra e promettente.',
  consiglio:'Apri le braccia alla gioia che si avvicina. Non sabotarla con il pensiero che non duri — esisti in questo momento.'
  },
  {
  nome:'Tristezza', latino:'Tristitia', emoji:'🌧️',
  righe:[2,1,1,1],
  elemento:'Saturno · Acquario', keywords:['Difficoltà','Lentezza','Prova','Profondità'],
  significato:'Tristitia indica un periodo di lentezza, prove interiori, o lutto (di persone, situazioni, o versioni di sé). Non è la figura del disastro ma della profondità necessaria. Come l\'inverno prepara la primavera, questo periodo di raccoglimento ti sta costruendo qualcosa che l\'estate non potrebbe. Accettalo come un dono travestito da peso.',
  amore:'Periodo di riflessione in amore. Una relazione richiede un lavoro interiore serio prima di poter fiorire. La solitudine attuale è nutritiva, non punitiva.',
  lavoro:'Progressi lenti, ostacoli, ritardi. Non è il momento per grandi lanci — è il momento per radici più profonde.',
  consiglio:'Scendi nella profondità invece di correre in superficie. Ciò che stai costruendo nel silenzio durerà generazioni.'
  },
  {
  nome:'Fanciullo', latino:'Puer', emoji:'⚔️',
  righe:[1,2,1,1],
  elemento:'Marte · Ariete', keywords:['Azione','Impulsività','Coraggio','Sfida'],
  significato:'Il Fanciullo è l\'energia marziale allo stato puro: coraggio senza cautela, azione senza strategia. È sia la sua forza che il suo pericolo. In questo momento hai l\'energia per sfide che terrorizzerebbero gli altri — usala, ma affiancala a un briciolo di saggezza. La testa calda vince le battaglie; la testa fredda vince le guerre.',
  amore:'Attrazione intensa, passionale, forse conflittuale. Un amore che brucia forte. Attenzione all\'impulsività nelle discussioni.',
  lavoro:'Forza e determinazione nel lavoro — questa è la tua arma. Ma calcola i rischi prima di lanciarti: il coraggio cieco ha un costo.',
  consiglio:'Agisci, ma con una domanda prima dell\'azione: "Questa mossa serve la mia strategia o solo il mio ego?"'
  },
  {
  nome:'Fanciulla', latino:'Puella', emoji:'🌸',
  righe:[2,1,2,2],
  elemento:'Venere · Bilancia/Toro', keywords:['Bellezza','Armonia','Piacere','Mediazione'],
  significato:'La Fanciulla porta armonia, grazia e la capacità di risolvere conflitti attraverso la bellezza del gesto. Dove il Fanciullo batte i pugni, la Fanciulla trova soluzioni attraverso l\'intelligenza relazionale. Questo è il momento delle relazioni — cura le connessioni esistenti, investi nella pace intorno a te, e lascia che la tua parte dolce guidi la situazione.',
  amore:'Figura eccellente per l\'amore e le relazioni. Una connessione armoniosa si rafforza. È il momento di esprimere affetto e tenerezza apertamente.',
  lavoro:'Usare il fascino, la diplomazia e le relazioni per avanzare. Un alleato inaspettato si fa avanti. Evita i conflitti diretti.',
  consiglio:'La dolcezza non è debolezza. In questa situazione, la via gentile è quella che porta più lontano.'
  },
  {
  nome:'Rosso', latino:'Rubeus', emoji:'🔴',
  righe:[2,2,2,1],
  elemento:'Marte · Scorpione', keywords:['Pericolo','Passione intensa','Attenzione','Ombre'],
  significato:'Rubeus è la figura della passione fuori controllo e dell\'energia caotica. Non è una figura necessariamente negativa, ma è un segnale d\'allarme chiaro: c\'è qualcosa nella tua situazione che richiede attenzione, o un comportamento tuo che sta creando danni che non vedi ancora. In amore e nei conflitti, Rubeus chiede di raffreddare il fuoco prima che divampi.',
  amore:'Passioni intense che possono bruciare anziché scaldare. Gelosia, possessività o segreti non detti rischiano di fare più danni dei problemi reali.',
  lavoro:'Tensioni nascoste nell\'ambiente lavorativo. Qualcuno o qualcosa non è quello che sembra. Massima prudenza nelle alleanze.',
  consiglio:'Fermati. Respira. La situazione ha più sfumature di quanto la tua emozione attuale ti permetta di vedere.'
  },
  {
  nome:'Bianco', latino:'Albus', emoji:'🕊️',
  righe:[2,2,1,2],
  elemento:'Mercurio · Gemelli', keywords:['Saggezza','Chiarezza','Purezza d\'intenzione','Pace'],
  significato:'Albus è la figura della mente chiara e dell\'intenzione pura. Quando questa figura appare, sei sulla strada giusta — la tua intenzione è allineata con il bene. La saggezza è disponibile se la cerchi: in persone anziane o esperte, in libri, in momenti di meditazione. Questa è la figura del maestro, del consigliere, del saggio.',
  amore:'Relazioni basate su rispetto e comprensione autentica. Una persona saggia entra nella tua vita con intenzioni pure. O sei tu a dover offrire saggezza a qualcuno.',
  lavoro:'Chiarezza mentale eccellente per decisioni, contratti e negoziazioni. Il consiglio di un esperto risolverà un nodo che ti bloccava.',
  consiglio:'Fidati della tua intuizione più intellettuale. La risposta che cerchi è già in te — silenzio e riflessione la faranno emergere.'
  },
  {
  nome:'Congiunzione', latino:'Coniunctio', emoji:'🤝',
  righe:[1,2,2,1],
  elemento:'Mercurio · Vergine', keywords:['Unione','Incontro','Recupero','Nodo'],
  significato:'La Congiunzione indica l\'incontro di energie: persone, situazioni, opportunità che si uniscono. Qualcosa di perso può essere recuperato. Una connessione che sembrava spezzata può essere riannodato. Ma attenzione: non tutto quello che si unisce è positivo — Coniunctio indica anche il nodo di un problema. Discerni cosa si sta unendo nella tua vita.',
  amore:'Riavvicinamenti possibili o nuovi incontri significativi. Se stai cercando di recuperare qualcosa o qualcuno, questa figura è incoraggiante.',
  lavoro:'Collaborazioni nuove o rafforzate. Un accordo che sembrava perso può essere recuperato. Partnership favorevoli.',
  consiglio:'Valuta attentamente cosa stai per legare a te — sia persone che situazioni. Non tutti i nodi portano abbondanza.'
  },
  {
  nome:'Prigione', latino:'Carcer', emoji:'🔒',
  righe:[1,2,2,1],
  elemento:'Saturno · Capricorno', keywords:['Restrizione','Blocco','Isolamento','Struttura'],
  significato:'Carcer è la figura della prigione — non necessariamente fisica, ma mentale, emotiva o situazionale. Ti senti bloccato? Lo sei davvero, ma meno di quanto pensi. Le mura intorno a te sono in parte reali e in parte costruzioni della mente. La figura chiede: "Di cosa hai paura realmente? Cosa ti trattiene che potresti lasciare andare?"',
  amore:'Relazione stagnante o sensazione di essere intrappolato in un pattern emotivo. Identificare le catene è il primo passo per scioglierle.',
  lavoro:'Ostacoli burocratici, blocchi strutturali, situazione immobile. Non combatterla frontalmente — trova i canali obliqui.',
  consiglio:'Invece di sfondare il muro, chiedi: c\'è una porta che non hai visto? L\'intelligenza batte la forza bruta.'
  },
  {
  nome:'Testa del Drago', latino:'Caput Draconis', emoji:'🐉',
  righe:[1,1,2,1],
  elemento:'Giove·Venere · Nodo Nord', keywords:['Ingresso','Ascesa','Nuovi inizi','Fortuna crescente'],
  significato:'Caput Draconis — la Testa del Drago — è la soglia di ingresso: crescita, inizio fortunato, apertura di un nuovo capitolo. Sei al punto di ingresso di un ciclo ascendente. Ciò che inizi ora ha un seme di buona fortuna integrato. È come piantare nella luna crescente: le condizioni supportano la crescita spontanea.',
  amore:'Periodo ideale per iniziare una relazione o per approfondirne una esistente. Ingresso in una fase più matura e promettente.',
  lavoro:'Ideale per lanciare progetti, firmare contratti, iniziare nuove posizioni. Il timing è tuo alleato in questo momento.',
  consiglio:'Inizia ora quello che stai rimandando. La finestra di ingresso favorevole non è eterna.'
  },
  {
  nome:'Coda del Drago', latino:'Cauda Draconis', emoji:'🌑',
  righe:[2,1,1,2],
  elemento:'Saturno·Marte · Nodo Sud', keywords:['Uscita','Fine','Lasciar andare','Karma'],
  significato:'Cauda Draconis — la Coda del Drago — indica una soglia di uscita: qualcosa si chiude, un ciclo si completa, un karma si esaurisce. Non è una figura negativa — è la fine necessaria che precede ogni nuovo inizio. La resistenza a questa conclusione è l\'unica cosa che può renderla dolorosa. Chi l\'abbraccia consapevolmente trova la libertà.',
  amore:'Una fase relazionale si chiude definitivamente o un legame karmico si esaurisce. È giunto il momento di liberare — te stesso e l\'altro.',
  lavoro:'Chiusura di un capitolo professionale. Una collaborazione, un incarico o una fase lavorativa giunge al suo termine naturale.',
  consiglio:'Non fare forza per tenere aperto ciò che si sta chiudendo. Il tuo futuro è dietro quella porta che si apre quando questa si chiude.'
  }
];

let _geoCurrentRow = 0;
let _geoRows = [];

function resetGeomanzia(){
  _geoCurrentRow = 0;
  _geoRows = [];

  for(let i=0;i<4;i++){
  const slot = $('#geoSlot'+i);
  slot.classList.remove('active','done');
  slot.querySelector('.geo-dots-placeholder') ? null : null;
  slot.innerHTML = `
  <span class="geo-row-label">${['I riga — Fuoco','II riga — Aria','III riga — Acqua','IV riga — Terra'][i]}</span>
  <span class="geo-dots-placeholder">· · · · ·</span>
  `;
  }
  $('#geoSlot0').classList.add('active');
  $('#geoTapBtn').style.display='block';
  $('#geoTapLabel').textContent='✋ Traccia la Prima Riga';
  $('#geoForm').style.display='block';
  $('#geoResult').style.display='none';
}

function geoTapRow(){
  if(_geoCurrentRow >= 4) return;

  const total = 7 + Math.floor(Math.random()*9);
  const isOdd = total % 2 !== 0; // 1=singolo/attivo, 2=doppio/passivo
  _geoRows.push(isOdd ? 1 : 2);

  const elementNames = ['Fuoco','Aria','Acqua','Terra'];
  const slot = $('#geoSlot'+_geoCurrentRow);
  slot.classList.remove('active');
  slot.classList.add('done');

  const dotsHtml = isOdd
  ? '<div class="geo-dot-group"><div class="geo-dot"></div></div>'
  : '<div class="geo-dot-group"><div class="geo-dot"></div><div class="geo-dot dim"></div></div>';

  slot.innerHTML = `
  <span class="geo-row-label">${['I riga — Fuoco','II riga — Aria','III riga — Acqua','IV riga — Terra'][_geoCurrentRow]}</span>
  <div class="geo-dots-rendered">${dotsHtml}</div>
  <span class="geo-row-type">${isOdd ? '✦ Attivo' : '✦✦ Passivo'}</span>
  `;

  _geoCurrentRow++;

  if(_geoCurrentRow < 4){
  const labels = ['Prima','Seconda','Terza','Quarta'];
  $('#geoSlot'+_geoCurrentRow).classList.add('active');
  $('#geoTapLabel').textContent = `✋ Traccia la ${labels[_geoCurrentRow]} Riga`;
  } else {

  setTimeout(()=>geoCalcFigura(), 400);
  }
}

function geoCalcFigura(){

  const pattern = _geoRows; // es. [1,2,1,1]
  let figura = DB_GEO.find(f =>
  f.righe[0]===pattern[0] && f.righe[1]===pattern[1] &&
  f.righe[2]===pattern[2] && f.righe[3]===pattern[3]
  );
  if(!figura) figura = DB_GEO[Math.floor(Math.random()*DB_GEO.length)];

  const question = $('#geoQuestion').value.trim();
  $('#geoTapBtn').style.display='none';

  const el = $('#geoResult');

  const figureVisual = figura.righe.map((r,i)=>{
  const elLabel = ['🔥 Fuoco','💨 Aria','💧 Acqua','🌍 Terra'][i];
  if(r===1){
  return `<div class="geo-frow"><div class="geo-fdot"></div><span class="geo-element-label">${elLabel}</span></div>`;
  } else {
  return `<div class="geo-frow"><div class="geo-fdot"></div><div style="width:18px"></div><div class="geo-fdot" style="opacity:.5"></div><span class="geo-element-label">${elLabel}</span></div>`;
  }
  }).join('');

  const kwHtml = figura.keywords.map(k=>`<span class="num-kw">${k}</span>`).join('');
  const questionHtml = question
  ? `<div class="geo-question-shown">❓ "${question}"</div>`
  : '';

  el.innerHTML = `
  <div class="geo-res">
  <div style="font-size:48px;margin-bottom:8px;filter:drop-shadow(0 0 15px #d4af3760)">${figura.emoji}</div>
  <div class="geo-figure-name">${figura.nome}</div>
  <div class="geo-figure-latin">${figura.latino} · ${figura.elemento}</div>
  <div class="geo-figure-visual">${figureVisual}</div>
  <div class="num-keywords">${kwHtml}</div>
  ${questionHtml}
  <div class="geo-block">
  <h4>🌍 Il Messaggio della Terra</h4>
  <p>${figura.significato}</p>
  </div>
  <div class="geo-block">
  <h4>💕 In Amore</h4>
  <p>${figura.amore}</p>
  </div>
  <div class="geo-block">
  <h4>💼 Nel Lavoro</h4>
  <p>${figura.lavoro}</p>
  </div>
  <div class="geo-block">
  <h4>🌟 Il Consiglio Geomantico</h4>
  <p style="font-style:italic;color:var(--muted)">"${figura.consiglio}"</p>
  </div>
  <button class="btn btn-sec" onclick="resetGeomanzia()" style="margin-top:10px">🔄 Nuova Consultazione</button>
  </div>
  `;
  el.style.display = 'block';
  burst();
  saveHistory('Geomanzia', figura.nome + ' — ' + figura.latino);
}

