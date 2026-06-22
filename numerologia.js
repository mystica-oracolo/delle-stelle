const DB_NUM = {
  1: {
  nome:'Il Pioniere',
  emoji:'☀️',
  master:false,
  keywords:['Leadership','Indipendenza','Originalità','Coraggio','Volontà'],
  essenza:'Il numero 1 è l\'energia del sole — singolare, luminoso, irripetibile. Sei venuto in questo mondo per tracciare strade dove non ce n\'erano. Non segui: guidi. Non imiti: crei. La tua vita è un esperimento originale e questo può essere solitario, ma è anche magnifico. Il tuo compito karmico è imparare a guidare senza schiacciare, e a essere indipendente senza diventare incapace di connettersi.',
  luci:'Iniziativa straordinaria, coraggio pionieristico, forza di volontà che non si arrende, capacità di creare dal nulla, leadership naturale che ispira.',
  ombre:'Tendenza all\'arroganza, difficoltà a ricevere aiuto, egocentrismo nei momenti di stress, impertinenza quando non si è al comando.',
  missione:'La tua missione è usare la tua individualità unica per aprire strade che beneficino non solo te, ma tutti coloro che verranno dopo di te.',
  compatibile:'3 e 5 amplificano la tua libertà; 2 e 6 ti insegnano a ricevere; 8 divide il potere con te.'
  },
  2: {
  nome:'Il Diplomatico',
  emoji:'🌙',
  master:false,
  keywords:['Sensibilità','Partnership','Intuizione','Armonia','Mediazione'],
  essenza:'Il numero 2 è l\'energia della luna — riflessiva, ciclica, empatica. Sei un essere di relazioni profonde, nato per connettere ciò che è diviso. La tua forza non sta nel fare da solo ma nel fare con. Hai un\'intuizione psichica rara e una capacità di comprendere gli altri che spesso ti lascia senza parole perché sai già cosa l\'altro proverà prima che lo dica. Il tuo compito è imparare a ricevere quanto dai.',
  luci:'Empatia profondissima, diplomazia raffinata, intuizione quasi psichica, dono per le relazioni, pazienza straordinaria, ascolto trasformativo.',
  ombre:'Indecisione cronica, eccessiva dipendenza dall\'approvazione altrui, tendenza a dissolversi nelle relazioni, paura del conflitto anche quando è necessario.',
  missione:'La tua missione è costruire ponti tra anime diverse, portare pace dove c\'è divisione e ricordare al mondo che la forza vera nasce dalla cooperazione.',
  compatibile:'6 e 8 offrono sicurezza; 1 e 9 ti ispirano; 4 ti ancora; 11 risuona con la tua profondità.'
  },
  3: {
  nome:'Il Creativo',
  emoji:'🎨',
  master:false,
  keywords:['Creatività','Espressione','Gioia','Comunicazione','Arte'],
  essenza:'Il numero 3 è la vibrazione della creazione pura — la trinità che genera tutto ciò che esiste. Sei nato con un dono espressivo che può manifestarsi come arte, parole, musica, umorismo o presenza magnetica. Quando sei al tuo meglio, porti gioia autentica nel mondo semplicemente essendo te stesso. Il rischio è disperdere questo dono in mille direzioni senza approfondire nessuna.',
  luci:'Creatività abbondante, comunicazione brillante, ottimismo contagioso, magnetismo naturale, senso dell\'umorismo che guarisce, gioia come dono spirituale.',
  ombre:'Dispersione delle energie su troppi fronti, superficialità nella profondità emotiva, tendenza a evitare i problemi attraverso l\'umorismo, incompletezza dei progetti.',
  missione:'La tua missione è portare bellezza, leggerezza e gioia nel mondo attraverso la tua espressione unica — e non smettere mai di creare.',
  compatibile:'1 e 5 condividono la tua energia; 2 e 6 ti danno profondità; 9 eleva la tua creatività.'
  },
  4: {
  nome:'Il Costruttore',
  emoji:'🏛️',
  master:false,
  keywords:['Stabilità','Disciplina','Costruzione','Affidabilità','Struttura'],
  essenza:'Il numero 4 è l\'energia della terra — solida, affidabile, capace di costruire ciò che dura secoli. Sei venuto a creare fondamenta su cui altri possono edificare la loro vita. Il tuo lavoro è metodico, preciso, paziente. Dove altri vedono sacrificio, tu vedi investimento. Il tuo compito karmico è trovare la bellezza nella routine e imparare che la rigidità è il confine tra struttura e prigione.',
  luci:'Affidabilità assoluta, disciplina fuori dal comune, capacità costruttiva concreta, pazienza infinita per i dettagli, dedizione che non si arrende.',
  ombre:'Rigidità di pensiero, difficoltà ad adattarsi ai cambiamenti, tendenza al workaholic, resistenza all\'innovazione, incapacità di godere del processo.',
  missione:'La tua missione è costruire ciò che dura — non solo case e carriere, ma valori, sistemi, strutture che servono le generazioni future.',
  compatibile:'2 e 6 dividono la cura; 8 costruisce con te; 1 ti ispira; 7 ti apre alla spiritualità.'
  },
  5: {
  nome:'Il Libero',
  emoji:'🦋',
  master:false,
  keywords:['Libertà','Avventura','Cambiamento','Versatilità','Esperienza'],
  essenza:'Il numero 5 è la vibrazione della libertà assoluta — il vento che non può essere imprigionato. Hai bisogno di varietà, movimento, esperienze nuove come altri hanno bisogno d\'aria. La tua vita ideale è una serie di capitoli completamente diversi l\'uno dall\'altro. Il tuo dono al mondo è l\'adattabilità e il coraggio di abbracciare l\'ignoto. Il tuo compito è imparare che la libertà più profonda non è fuggire ma scegliere.',
  luci:'Adattabilità straordinaria, coraggio verso l\'ignoto, curiosità insaziabile, versatilità nel talento, capacità di prosperare nel cambiamento.',
  ombre:'Incostanza, difficoltà a completare i progetti, tendenza all\'eccesso nelle piacevoli distrazioni, paura dell\'impegno a lungo termine, dispersione.',
  missione:'La tua missione è mostrare al mondo che il cambiamento non è nemico ma maestro — e che la vita più autentica è quella vissuta con coraggio nell\'incertezza.',
  compatibile:'1 e 3 condividono la tua energia espansiva; 7 ti offre profondità; 6 ti ancora all\'amore.'
  },
  6: {
  nome:'Il Nutrimento',
  emoji:'💚',
  master:false,
  keywords:['Amore','Responsabilità','Cura','Armonia domestica','Guarigione'],
  essenza:'Il numero 6 è la vibrazione dell\'amore in azione — non l\'amore romantico ma quello cosmico, il tipo di amore che si manifesta come cura, presenza, nutrimento. Sei qui per costruire ambienti dove gli altri fioriscono. La tua casa, il tuo spazio, le tue relazioni portano il tuo tocco curativo. Il tuo compito karmico è imparare che prendersi cura non significa sacrificare sé stessi.',
  luci:'Amore incondizionato, dono per la cura e la guarigione, senso della responsabilità, capacità di creare armonia, bellezza che manifesta nell\'ambiente.',
  ombre:'Tendenza al martirio emotivo, perfezionismo nell\'ambiente, ingerenza nelle scelte altrui per amore, difficoltà a lasciare andare.',
  missione:'La tua missione è costruire nidi di amore — spazi fisici ed emotivi dove la vita può essere vissuta in pienezza e sicurezza.',
  compatibile:'2 e 4 rispecchiano la tua cura; 9 eleva il tuo amore; 3 porta gioia nel tuo nido.'
  },
  7: {
  nome:'Il Cercatore',
  emoji:'🔭',
  master:false,
  keywords:['Saggezza','Analisi','Misticismo','Solitudine feconda','Verità'],
  essenza:'Il numero 7 è la vibrazione del mistero — il numero del sacro, del cercare, del penetrare le superfici. Hai un\'intelligenza penetrante che non accetta le risposte facili. La fede senza prova e l\'affermazione senza ragione non ti bastano. Sei un cercatore di verità in tutte le sue forme — scientifiche, spirituali, filosofiche. Il tuo compito karmico è ricordarti che la solitudine del ricercatore non deve diventare isolamento.',
  luci:'Intelligenza analitica profonda, intuizione mistica, dono per la ricerca e la comprensione, onestà intellettuale assoluta, profondità spirituale autentica.',
  ombre:'Tendenza all\'isolamento, difficoltà a fidarsi degli altri, cinismo difensivo, perfezionismo paralizzante, freddezza emotiva come scudo.',
  missione:'La tua missione è portare luce nella complessità — tradurre i misteri in comprensione accessibile agli altri attraverso la tua ricerca instancabile.',
  compatibile:'4 ti ancora; 9 ti eleva; 2 ti scalda; 11 risuona con la tua profondità mistica.'
  },
  8: {
  nome:'Il Potere',
  emoji:'⚡',
  master:false,
  keywords:['Potere','Abbondanza','Autorità','Karma materiale','Successo'],
  essenza:'Il numero 8 è la vibrazione del potere cosmico — il simbolo dell\'infinito in piedi. Sei qui per padroneggiare il mondo materiale, non per servirlo. Denaro, potere, autorità — questi non sono i tuoi obiettivi, sono i tuoi strumenti. Quando li gestisci con saggezza e giustizia, crei prosperità che beneficia molti. Il tuo compito karmico è usare il potere al servizio, non come fine.',
  luci:'Forza esecutiva straordinaria, visione strategica a lungo termine, determinazione invincibile, capacità di creare abbondanza, autorità naturale rispettata.',
  ombre:'Tendenza al controllo, difficoltà a delegare, ossessione per il successo a scapito delle relazioni, attrazione per il potere senza etica.',
  missione:'La tua missione è dimostrare che abbondanza ed etica non sono opposti — e che il potere più grande è quello usato per sollevare gli altri.',
  compatibile:'4 costruisce con te; 2 ti addolcisce; 6 ti radica nell\'amore; 3 porta leggerezza.'
  },
  9: {
  nome:'Il Saggio Universale',
  emoji:'🌌',
  master:false,
  keywords:['Saggezza universale','Compassione','Completamento','Umanità','Servizio'],
  essenza:'Il numero 9 è la vibrazione della fine e della completezza — il numero che contiene tutti gli altri. Hai vissuto (in questa vita o in altre) molte esperienze, e questo ti ha dato una comprensione dell\'anima umana che altri non riescono a toccare. Sei nato per servire qualcosa di più grande di te. Quando hai abbracciato questo, la tua vita diventa straordinaria. Il tuo compito karmico è lasciar andare senza rimpianto.',
  luci:'Saggezza profonda che trascende l\'esperienza diretta, compassione universale, generosità senza confini, visione che abbraccia tutta l\'umanità, capacità di guarire le ferite più antiche.',
  ombre:'Difficoltà a lasciare andare, tendenza al martirio, eccessiva sensibilità alle sofferenze altrui, impracticability nei dettagli quotidiani.',
  missione:'La tua missione è servire l\'umanità attraverso qualunque forma sia tua — arte, guarigione, insegnamento, attivismo. Sei qui per fare la differenza su grande scala.',
  compatibile:'3 e 6 amplificano il tuo dono; 7 condivide la tua profondità; 2 ti sostiene nell\'amore.'
  },
  11: {
  nome:'Il Visionario Illuminato',
  emoji:'✨',
  master:true,
  keywords:['Intuizione superiore','Illuminazione','Ispirazione','Messaggero','Elevazione'],
  essenza:'L\'11 è il primo Numero Maestro — una vibrazione elevata che non tutti sono pronti a portare. Sei un canale tra il visibile e l\'invisibile, tra il quotidiano e il trascendente. La tua intuizione non viene dalla logica ma da qualcosa di più antico. Hai l\'incarico di ispirare, di illuminare, di essere un faro per chi è al buio. Il costo di questa vibrazione è alta sensibilità e a volte il peso di sapere troppo.',
  luci:'Intuizione quasi psichica, capacità di ispirare e illuminare, visione del futuro, dono per la guarigione spirituale, presenza carismatica che eleva.',
  ombre:'Estremamente sensibile alle energie negative, tendenza all\'esaurimento nervoso, difficoltà a "stare nel mondo pratico", cicli di luce e buio molto pronunciati.',
  missione:'La tua missione è essere una lampada nella notte — ispirare gli altri a vedere possibilità che da soli non avrebbero mai immaginato.',
  compatibile:'2 condivide la tua sensibilità; 7 la tua profondità; 22 costruisce ciò che tu sogni.'
  },
  22: {
  nome:'Il Maestro Costruttore',
  emoji:'🏗️',
  master:true,
  keywords:['Visione colossale','Costruzione pratica','Potere universale','Maestria','Eredità'],
  essenza:'Il 22 è il Numero Maestro della costruzione — la capacità di prendere sogni impossibili e renderli realtà concrete. Hai la visione dell\'11 e la capacità pratica dell\'8 moltiplicata. Non sei qui per fare cose piccole. Le strutture che costruisci — fisiche, intellettuali, spirituali — sono destinate a durare generazioni. Il peso di questa vibrazione è enorme: il rischio è il crollo sotto la pressione delle grandi ambizioni.',
  luci:'Capacità di manifestare visioni straordinarie, leadership monumentale, dono per costruire sistemi che durano, disciplina fuori dal comune, eredità che trascende il singolo.',
  ombre:'Tendenza all\'eccesso di ambizione, difficoltà nelle relazioni intime per l\'intensità del focus, possibile rigidità nel voler controllare la propria creazione.',
  missione:'La tua missione è costruire qualcosa di così grande e buono che nemmeno la tua morte potrà fermarlo.',
  compatibile:'4 e 8 condividono la tua forza costruttiva; 11 ti ispira; 33 eleva la tua opera.'
  },
  33: {
  nome:'Il Maestro dell\'Amore',
  emoji:'💫',
  master:true,
  keywords:['Amore universale','Compassione cosmica','Servizio supremo','Guarigione','Benedizione'],
  essenza:'Il 33 è il Numero Maestro dell\'amore compassionevole — la vibrazione del guaritore cosmico, del maestro spirituale, del portatore di luce che ama incondizionatamente. Pochissime anime sono pronte per questa vibrazione. Se il tuo numero è 33, sei qui con una missione di amore su scala globale. Non stai solo vivendo per te stesso — ogni tua azione ha risonanza cosmica.',
  luci:'Amore incondizionato su scala cosmica, dono guaritore straordinario, capacità di trasformare chi ti avvicina, saggezza che trascende la comprensione ordinaria.',
  ombre:'Estremamente vulnerabile all\'energia negativa, tendenza all\'esaurimento totale, difficoltà a incarnare la propria vibrazione elevatissima nel quotidiano.',
  missione:'La tua missione è amare il mondo — e farlo attraverso ogni singola scelta, parola, azione della tua vita.',
  compatibile:'6 e 9 rispecchiano il tuo amore; 11 e 22 condividono la tua missione maestra.'
  }
};

const NUM_TABLE = {
  A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
  J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
  S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
};

let _numCurrentTab = 0;

function resetNumerologia(){
  _numCurrentTab = 0;
  numSelectTab(0);
  $('#numResult').style.display='none';
  $('#numForm').style.display='block';

  try{
  const p = JSON.parse(_lsGet(CFG.kProfilo)||'{}');
  const numDateEl = $('#numDate');
  if(numDateEl){
  const maxD=new Date(); maxD.setFullYear(maxD.getFullYear()-10);
  numDateEl.max = maxD.toISOString().split('T')[0];
  numDateEl.min = '1900-01-01';
  if(p.date) numDateEl.value = p.date;
  }
  if(p.name && $('#numName')) $('#numName').value = p.name;
  }catch(e){}
}

function numSelectTab(idx){
  _numCurrentTab = idx;
  $$('.num-tab').forEach((t,i)=>t.classList.toggle('active',i===idx));
  $('#numPanelDate').style.display = idx===0?'block':'none';
  $('#numPanelName').style.display = idx===1?'block':'none';
  $('#numResult').style.display='none';
}

function numReduce(n){
  while(n>9 && n!==11 && n!==22 && n!==33){
  n = String(n).split('').reduce((a,c)=>a+parseInt(c),0);
  }
  return n;
}

function calcSentiero(){
  const dateVal = $('#numDate').value;
  if(!dateVal){toast('⚠️ Inserisci la data di nascita'); return;}

  const [yyyy,mm,dd] = dateVal.split('-').map(Number);
  const d = new Date(yyyy, mm-1, dd, 12, 0, 0);
  if(isNaN(d.getTime())){toast('⚠️ Data non valida'); return;}
  const day = d.getDate();
  const month = d.getMonth()+1;
  const year = d.getFullYear();

  const allDigits = String(day)+String(month)+String(year);
  const rawSum = allDigits.split('').reduce((a,c)=>a+parseInt(c),0);
  const numero = numReduce(rawSum);

  const stepsHtml = `
  ${String(day).padStart(2,'0')} / ${String(month).padStart(2,'0')} / ${year}<br>
  = ${allDigits.split('').join(' + ')} = ${rawSum}<br>
  ${rawSum !== numero ? '= ' + String(rawSum).split('').join(' + ') + ' = <strong style="color:var(--gold)">' + numero + '</strong>' : '= <strong style="color:var(--gold)">' + numero + '</strong>'}
  ${DB_NUM[numero]?.master ? '<br>✦ Numero Maestro' : ''}
  `;

  _showNumResult(numero, 'Sentiero di Vita', stepsHtml, dateVal);
}

function calcDestino(){
  const rawName = ($('#numName').value||'').trim().toUpperCase();
  if(!rawName){toast('⚠️ Inserisci il tuo nome completo'); return;}

  const lettersOnly = rawName.replace(/[^A-Z]/g,'');
  if(lettersOnly.length===0){toast('⚠️ Inserisci un nome valido'); return;}

  const values = lettersOnly.split('').map(c=>NUM_TABLE[c]||0);
  const rawSum = values.reduce((a,c)=>a+c,0);
  const numero = numReduce(rawSum);

  const letterRow = lettersOnly.split('').join(' + ');
  const numRow = values.join(' + ');
  const stepsHtml = `
  ${rawName}<br>
  ${letterRow}<br>
  = ${numRow} = ${rawSum}<br>
  ${rawSum !== numero ? '= ' + String(rawSum).split('').join(' + ') + ' = <strong style="color:var(--gold)">' + numero + '</strong>' : '= <strong style="color:var(--gold)">' + numero + '</strong>'}
  ${DB_NUM[numero]?.master ? '<br>✦ Numero Maestro' : ''}
  `;

  _showNumResult(numero, 'Numero del Destino', stepsHtml, rawName);
}

function _showNumResult(numero, tipo, stepsHtml, inputVal){
  const data = DB_NUM[numero];
  if(!data){toast('❌ Numero non trovato'); return;}

  const kwHtml = data.keywords.map(k=>`<span class="num-kw">${k}</span>`).join('');
  const masterBadge = data.master
  ? `<div class="num-master-badge">✦ Numero Maestro — Vibrazione Elevata ✦</div>`
  : '';

  const el = $('#numResult');
  el.innerHTML = `
  <div class="num-res">
  <div class="num-big">${numero}</div>
  <div class="num-name-label">${data.nome}</div>
  <div style="font-size:36px;margin:8px 0;filter:drop-shadow(0 0 12px #d4af3760)">${data.emoji}</div>
  ${masterBadge}
  <div class="num-calc-steps">✦ Come è stato calcolato il tuo ${tipo}:<br>${stepsHtml}</div>
  <div class="num-keywords">${kwHtml}</div>
  <div class="num-block">
  <h4>✨ La Tua Essenza Numerologica</h4>
  <p>${data.essenza}</p>
  </div>
  <div class="num-block">
  <h4>🌟 Le Tue Luci</h4>
  <p>${data.luci}</p>
  </div>
  <div class="num-block">
  <h4>🌑 Le Tue Ombre</h4>
  <p>${data.ombre}</p>
  </div>
  <div class="num-block">
  <h4>🎯 La Tua Missione</h4>
  <p>${data.missione}</p>
  </div>
  <div class="num-block">
  <h4>💞 Numeri Compatibili</h4>
  <p>${data.compatibile}</p>
  </div>
  <button class="btn btn-sec" onclick="resetNumerologia()" style="margin-top:10px">🔄 Nuovo Calcolo</button>
  </div>
  `;
  el.style.display='block';
  $('#numForm').style.display='none';
  burst();
  saveHistory('Numerologia', tipo + ' ' + numero + ' (' + data.nome + ')');
}

