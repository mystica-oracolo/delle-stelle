var _consultTopicActive = 'destino';

function selectConsultTopic(btn) {
  document.querySelectorAll('.consult-topic').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  _consultTopicActive = btn.dataset.t || 'destino';
}

function openConsulente() {
  document.getElementById('consultResult').style.display = 'none';
  document.getElementById('consultInput').value = '';
  document.getElementById('modalConsulente').classList.add('open');
}

function _detectKeywords(txt) {
  var t = txt.toLowerCase();
  var KMAP = [
    { keys: ['amore','amo','innamorat','cuore','sentimento','lei','lui','ragazzo','ragazza','fidanzat','ex','storia','relazione','coppia','matrimonio','sposo','sposa','sposare','romantico','bacio','ti amo','mi ama','mi vuole','anima gemella','flirt','crush','piacere','attrazione','ci sto','ci sono','vuole bene','ci tengo','gelosia','geloso','gelosa','possessivo','possessiva','appuntamento','uscire insieme','incontro','primo bacio','incontro romantico','storia seria','convivenza','convivere','vivere insieme','partner','compagno','compagna'], tema: 'amore' },
    { keys: ['tradimento','tradisce','tradito','tradita','cornuto','cornuta','inganna','infedele','bugiardo','bugiarda','mente','mentito','nasconde','doppia vita','segreto','nascosto','messaggi nascosti','altra persona','altro uomo','altra donna','sospetto','sospetti','scoperto','scoperta','tradisce davvero','mi sta ingannando'], tema: 'tradimento' },
    { keys: ['separazione','separare','lasciar','lasciato','lasciata','divorzio','si separa','rottura','finita','addio','perso','persa','ci lasciamo','voglio lasciarlo','voglio lasciarla','lasciare','andarsene','chiudere','fine della storia','rompere','si lasceranno','litigio grave','crisi di coppia'], tema: 'separazione' },
    { keys: ['ritorno','torna','torner','ritornare','riavvicinamento','riconquistare','riconquista','vuole tornare','sta tornando','mi scrive','mi cerca','mi pensa','tornare insieme','ricominciare','riprendere','secondo tentativo','ci riprovo','lo riconquisto','la riconquisto'], tema: 'ritorno' },
    { keys: ['lavoro','carriera','impiego','ufficio','azienda','capo','collega','licenziat','assunto','assunta','contratto','stipendio','professione','mestiere','dimissioni','concorso','colloquio','curriculum','trovare lavoro','nuovo lavoro','cambio lavoro','lavorare','freelance','autonomo','partita iva','aprire attivita','attivita propria','business','progetto lavorativo','scadenza','obiettivo professionale'], tema: 'lavoro' },
    { keys: ['promoss','promozione','avanzamento','aumento stipendio','aumento di stipendio','scatto','riconoscimento professionale','crescita carriera','posizione superiore','responsabilita maggiore','diventare capo','leadership','manager','direttore'], tema: 'promozione' },
    { keys: ['soldi','denaro','finanzi','economico','economica','guadagno','guadagnare','ricchezza','povero','povera','debito','debiti','prestito','investimento','eredit','prosperit','stipendio','entrate','uscite','risparmio','risparmiare','conto in banca','budget','spese','bollette','affitti','mutuo','finanziamento','criptovalute','azioni','borsa','crypto','bitcoin','rendita','passivo','guadagnare online'], tema: 'soldi' },
    { keys: ['salute','malattia','malato','malata','guarire','guarigione','dolore','ospedale','medico','dottore','diagnosi','cura','terapia','operazione','intervento','esami','analisi','risultati','referto','sintomi','febbre','stanchezza','affaticamento','disturbo','psicolog','psichiatra','terapeuta','ansia da salute','ipocondria','corpo','fisico','benessere fisico'], tema: 'salute' },
    { keys: ['gravidanza','incinta','aspetto un bambino','aspetto una bambina','sono incinta','sto aspettando','maternit','paternit','avere figli','neonato','concepire','test gravidanza','ciclo','ovulazione','fertilita','ivf','fecondazione','aborto','perdita gravidanza','nascita','aspettando un bimbo','sto aspettando un figlio'], tema: 'gravidanza' },
    { keys: ['fortuna','sfiga','sfortuna','fortunato','fortunata','vincere','vincita','lotteria','gioco','gratta e vinci','slot','casinо','scommessa','scommesse','numeri fortunati','numeri','jackpot','colpo di fortuna','portafortuna','buona sorte','cattiva sorte','disdetta','iella'], tema: 'fortuna' },
    { keys: ['viaggio','viaggiare','partire','partenza','trasferimento','trasferirsi','trasferirmi','estero','straniero','trasloco','volo','aereo','crociera','vacanza','gita','fuga','nuova citta','nuova nazione','emigrare','avventura','zaino in spalla','tour','paese straniero','trasferta','traslocarmi','mi trasferisco','cambiare citta','andare all estero','vivere all estero','spostarmi'], tema: 'viaggio' },
    { keys: ['casa','appartamento','affitto','mutuo','acquistare casa','comprare casa','vendere casa','immobile','trasloco','nuovo appartamento','nuova casa','stanza','abitazione','ristrutturare','ristrutturazione','arredamento','affittare','trovare casa','cambio casa','radici'], tema: 'casa' },
    { keys: ['famiglia','genitori','madre','padre','fratello','sorella','nonno','nonna','parenti','mamma','papa','figli','figlio','figlia','cognato','cognata','suocero','suocera','nucleo familiare','dinamiche familiari','litigio in famiglia','conflitto familiare','distacco dalla famiglia'], tema: 'famiglia' },
    { keys: ['amicizia','amico','amica','amici','litigio con amico','amica del cuore','migliore amico','migliore amica','tradimento amicizia','amici veri','falsi amici','allontanamento','distanza con amici','ritrovare amicizia','riavvicinarsi','gruppo di amici','cerchia sociale'], tema: 'amicizia' },
    { keys: ['studio','esame','universit','scuola','laurea','laurearsi','diplomarsi','diploma','bocciato','bocciata','studiare','tesi','dottorato','master','corso','formazione','apprendimento','studiare all estero','borse di studio','risultati scolastici','voto','votazione','preparazione esame','elementare','media','superiore','liceo','materna','asilo','pagella','voti','compito','interrogazione','professoressa','professore','maestra','maestro','classe','terza','quarta','quinta','prima media','seconda media'], tema: 'studio' },
    { keys: ['futuro','destino','cosa succeder','cosa mi aspetta','cosa mi riserva','cambiamento','svolta','cambiare vita','prospettive','vie da seguire','scelta','bivio','decisione importante','cosa fare','cosa scegliere','quale strada','percorso','missione','scopo di vita','purpose'], tema: 'futuro' },
    { keys: ['paura','ansia','angoscia','preoccupazione','preoccupato','preoccupata','stress','nervoso','nervosa','depressione','tristezza','piangere','solitudine','isolamento','abbandono','rifiuto','insicurezza','dubbio','indecisione','blocco','panico','attacco di panico','burnout','esaurimento','crisi','sofferenza'], tema: 'paura' },
    { keys: ['magia','rituale','incantesimo','fattura','malocchio','protezione magica','sigillo','strega','stregone','spirito','karma','legamento','scioglimento','filtro magico','rito','energia negativa','energia positiva','pulizia energetica','campo aura','vibrazione cosmica','frequenza energetica','manifestare','legge di attrazione','fare un rituale','wicca','sabbat'], tema: 'magia' },
    { keys: ['sogno','sognato','sognare','visione','simbolo','messaggio onirico','incubo','sogno lucido','sogno ricorrente','sogno strano','ho sognato','cosa significa sognare','significato del sogno','profetico','premonitore','apparizione nel sogno'], tema: 'sogno' },
    { keys: ['morte','morire','morto','morta','lutto','perdita','defunto','defunta','aldila','spirito del defunto','contattare il defunto','comunicare con i morti','oltre la morte','reincarnazione','passaggio','vita dopo la morte','testamento','eredita'], tema: 'morte' },
    { keys: ['vendetta','vendette','rivalsa','fargliela pagare','punire','punizione','karma negativo','maledizione','mi ha fatto del male','mi vuole male','nemica','nemico dichiarato','fare del male','maledirlo','maledirla','odio','rancore','risentimento','me la paghi'], tema: 'vendetta' },
    { keys: ['successo','riuscire','vincere','obiettivo','sogno realizzato','realizzarsi','ambizione','aspirazione','famoso','famosa','diventare ricco','diventare ricca','raggiungere','traguardo','meta','aspirare','volare alto','crescita personale','sviluppo personale','competizione','gara','concorso','sfida professionale','diventare qualcuno','primeggiare','eccellere','emergere'], tema: 'successo' },
    { keys: ['ispirazione','creativita','arte','artista','musica','musican','cantante','scrivere','scrittore','pittore','pittrice','disegnare','fotografo','fotografa','recitare','attore','attrice','film','progetto creativo','idea creativa','blocco creativo'], tema: 'creativita' }
  ];
  var trovati = [];
  for (var i = 0; i < KMAP.length; i++) {
    for (var j = 0; j < KMAP[i].keys.length; j++) {
      if (t.indexOf(KMAP[i].keys[j]) !== -1) {
        if (trovati.indexOf(KMAP[i].tema) === -1) trovati.push(KMAP[i].tema);
        break;
      }
    }
  }

  // Correzioni semantiche contestuali: rimuove falsi positivi
  // "promossa/promosso" con parenti/figli -> studia, non promozione lavorativa
  var PARENTI = ['figlia','figlio','figl','bambino','bambina','bimbo','bimba','nipote','sorella','fratello','figliolo','figliola'];
  var haParente = PARENTI.some(function(p){ return t.indexOf(p) !== -1; });
  if (haParente) {
    // rimuovi promozione se c'e' un parente nel testo
    var idxProm = trovati.indexOf('promozione');
    if (idxProm !== -1) trovati.splice(idxProm, 1);
    // rimuovi lavoro se NON ci sono parole di lavoro adulto esplicite
    var LAVORO_ESPLICITO = ['mio lavoro','mia carriera','mio capo','mio ufficio','mia azienda','mio contratto','mio stipendio','mie dimissioni'];
    var hasLavoroEsplicito = LAVORO_ESPLICITO.some(function(p){ return t.indexOf(p) !== -1; });
    if (!hasLavoroEsplicito) {
      var idxLav = trovati.indexOf('lavoro');
      if (idxLav !== -1) trovati.splice(idxLav, 1);
    }
    // aggiungi famiglia se non c'e' gia
    if (trovati.indexOf('famiglia') === -1) trovati.unshift('famiglia');
    // aggiungi studio se la domanda contiene parole scolastiche o di valutazione
    var SCOLASTICO = ['promoss','promossa','promosso','esame','scuola','classe','voto','bocciato','bocciata','diplomarsi','laurearsi','maestra','professore','compito','interrogazione','pagella','elementare','media','superiore','liceo','asilo','materna','terza','quarta','quinta'];
    var hasScolastico = SCOLASTICO.some(function(p){ return t.indexOf(p) !== -1; });
    if (hasScolastico) {
      // rimuovi promozione lavorativa: in contesto scolastico e' una falsa corrispondenza
      var idxProm2 = trovati.indexOf('promozione');
      if (idxProm2 !== -1) trovati.splice(idxProm2, 1);
      if (trovati.indexOf('studio') === -1) trovati.unshift('studio');
      else {
        // porta studio in prima posizione
        trovati.splice(trovati.indexOf('studio'), 1);
        trovati.unshift('studio');
      }
    }
  }

  // Correzione: "promoss" + parole scolastiche (livello classe) -> studio, non promozione lavorativa
  var LIVELLI_SCUOLA = ['elementare','media','superiore','liceo','asilo','materna','terza','quarta','quinta','prima media','seconda media','terza media','maturita','a scuola','di scuola','alla scuola','anno scolastico'];
  var hasLivello = LIVELLI_SCUOLA.some(function(p){ return t.indexOf(p) !== -1; });
  if (hasLivello) {
    var idxProm3 = trovati.indexOf('promozione');
    if (idxProm3 !== -1) trovati.splice(idxProm3, 1);
    if (trovati.indexOf('studio') === -1) trovati.unshift('studio');
    else { trovati.splice(trovati.indexOf('studio'),1); trovati.unshift('studio'); }
  }

  // "vincero" / "vinco" senza "lotteria" o "gioco" -> non e' fortuna classica, ma puo' essere successo
  // "gratta" e "vinci" devono stare insieme per essere fortuna
  if (t.indexOf('gratta') === -1 && t.indexOf('lotteria') === -1 && t.indexOf('gioco') === -1 && t.indexOf('scommess') === -1 && t.indexOf('jackpot') === -1) {
    var idxFort = trovati.indexOf('fortuna');
    // solo se l'unica ragione era "vincere" generica, rimuovila in favore di successo
    if (idxFort !== -1 && (t.indexOf('vince') !== -1 || t.indexOf('vincero') !== -1 || t.indexOf('vinco') !== -1)) {
      trovati.splice(idxFort, 1);
      if (trovati.indexOf('successo') === -1) trovati.push('successo');
    }
  }

  return trovati;
}


function _detectSoggetto(txt) {
  var t = txt.toLowerCase();
  // Parenti femminili con possessivo
  var FEMMINILI = ['mia figlia','mia madre','mia mamma','mia sorella','mia nonna','mia zia','mia nipote','mia amica','mia moglie','mia compagna','mia ragazza','mia fidanzata','mia cugina'];
  // Parenti maschili con possessivo
  var MASCHILI  = ['mio figlio','mio padre','mio papa','mio fratello','mio nonno','mio zio','mio nipote','mio amico','mio marito','mio compagno','mio ragazzo','mio fidanzato','mio cugino','mio capo','mio collega'];
  // Terza persona senza possessivo esplicito
  var LEI_KEYS  = ['lei ','lei,','lei.','lei?','lei!','di lei','per lei','su lei','con lei','\\u00e8 lei','sara lei'];
  var LUI_KEYS  = ['lui ','lui,','lui.','lui?','lui!','di lui','per lui','su lui','con lui','\\u00e8 lui','sara lui'];
  // Prima persona
  var IO_KEYS   = ['io ','io,','io.','io?','io!','mio ','mia ','mi ','sono ','ho ','staro','faro','trovero','riusciro','vincero','avro','saro','mi ama','mi vuole','mi tradisce','mi lascia','mi cerca','mi scrive'];

  for (var i = 0; i < FEMMINILI.length; i++) {
    if (t.indexOf(FEMMINILI[i]) !== -1) return { tipo: 'terza_f', label: FEMMINILI[i] };
  }
  for (var i = 0; i < MASCHILI.length; i++) {
    if (t.indexOf(MASCHILI[i]) !== -1) return { tipo: 'terza_m', label: MASCHILI[i] };
  }
  for (var i = 0; i < LEI_KEYS.length; i++) {
    if (t.indexOf(LEI_KEYS[i]) !== -1) return { tipo: 'terza_f', label: 'lei' };
  }
  for (var i = 0; i < LUI_KEYS.length; i++) {
    if (t.indexOf(LUI_KEYS[i]) !== -1) return { tipo: 'terza_m', label: 'lui' };
  }
  // Default: se c\'e\' un verbo in prima persona -> io
  for (var i = 0; i < IO_KEYS.length; i++) {
    if (t.indexOf(IO_KEYS[i]) !== -1) return { tipo: 'io', label: 'io' };
  }
  return { tipo: 'io', label: 'io' };
}

function _getRispostaKeyword(temi, nome, soggetto) {
  var RISPOSTE_AI = {
    "amore": {
        "generale": [
            "Le stelle vedono un cuore che cerca connessione profonda. L'universo non ignora questo desiderio — prepara il terreno affinché l'amore possa crescere dove meno te lo aspetti.",
            "Il sentimento che porti dentro è reale e potente. Non affrettare i tempi: ciò che è destinato a fiorire, fiorirà nel momento esatto in cui il terreno sarà pronto.",
            "Venere parla chiaro: c'è energia amorosa in movimento attorno a te. Apriti alla possibilità senza difese — il cuore che si chiude per paura si priva della sua stessa gioia.",
            "L'amore che cerchi inizia con l'amore che dai a te stesso. Quando quella luce sarà piena, attrarrà naturalmente chi è in sintonia con la tua anima.",
            "Il pianeta del desiderio è in aspetto favorevole: non ignorare i segnali sottili che ti manda chi ti sta accanto. A volte l'amore parla sottovoce, aspettando di essere ascoltato.",
            "Un incontro che hai considerato casuale potrebbe rivelarsi tutt'altro. Le stelle suggeriscono di guardare di nuovo chi è già nella tua vita quotidiana.",
            "La vulnerabilità autentica è il portale più diretto verso la connessione profonda. Abbassa le difese con chi merita il tuo cuore — è il momento giusto.",
            "L'attrazione che senti è confermata dagli astri, ma ricorda: la chimica accende, il rispetto reciproco tiene vivo il fuoco nel tempo.",
            "Non temere di fare il primo passo. Venere sostiene i coraggiosi in amore — chi non rischia non ottiene ciò che il cuore desidera davvero.",
            "Un periodo di crescita personale è anche il più fertile per l'amore autentico. Lavorando su te stesso attrai chi è allineato con la tua versione migliore."
        ],
        "consiglio": [
            "Ascolta il tuo cuore, ma non ignorare la voce della ragione. L'equilibrio è la chiave.",
            "Sii paziente. Le cose migliori richiedono tempo per manifestarsi.",
            "Comunica apertamente. La chiarezza dissolve ogni dubbio.",
            "Ama te stesso per primo. Solo così potrai amare pienamente gli altri.",
            "Lascia andare il passato. Il futuro ti aspetta con nuove possibilità."
        ]
    },
    "tradimento": {
        "generale": [
            "L'universo non nasconde la verità a lungo — ciò che è fatto nell'ombra prima o poi emerge alla luce. Abbi il coraggio di guardare i fatti senza lasciarti accecare dalla paura.",
            "Il dolore del tradimento è reale, ma non definitivo. Le stelle ti invitano a non confondere il silenzio con l'innocenza: fidati del tuo istinto.",
            "Saturno insegna che le prove difficili rivelano chi siamo davvero — sia noi sia le persone accanto a noi. La risposta che cerchi è già dentro di te.",
            "Il tuo corpo sa prima della tua mente. Quella sensazione nell'addome che non riesci a ignorare è il tuo istinto che parla: ascoltalo prima di chiedere conferme.",
            "Non ogni segreto è un tradimento, ma non ogni tradimento viene dichiarato. Osserva i comportamenti nel tempo, non solo le parole del momento.",
            "Le stelle ti invitano a non costruire castelli di ipotesi. Chiedi con calma e chiarezza — la risposta, qualunque essa sia, ti libera dall'incertezza che logora."
        ],
        "consiglio": [
            "Affronta la verità, per quanto dolorosa. Solo così potrai guarire.",
            "Proteggi il tuo cuore, ma non chiuderti all'amore. La fiducia si ricostruisce, ma con cautela.",
            "Cerca il supporto di chi ti vuole bene. Non affrontare questo momento da solo.",
            "Perdona, non per l'altro, ma per te stesso. Lascia andare il peso del rancore.",
            "Ricorda il tuo valore. Non permettere a nessuno di farti sentire meno di ciò che sei."
        ]
    },
    "separazione": {
        "generale": [
            "Ogni fine porta il seme di un nuovo inizio. Questo dolore che senti è reale, ma le stelle vedono oltre: stai attraversando una soglia, non un muro.",
            "La separazione non è sempre una sconfitta — a volte è la cosa più amorevole che l'universo possa orchestrare per entrambe le anime coinvolte. Il tempo rivelerà il perché.",
            "Marte e Venere ti invitano a non decidere nulla nell'immediato dolore. Lascia che il silenzio parli. La chiarezza arriverà quando le acque si calmeranno.",
            "Lasciare andare non significa smettere di amare — significa scegliere il proprio benessere con lo stesso rispetto con cui hai amato l'altro.",
            "Un ciclo si chiude per permettere a uno nuovo di aprirsi. La separazione, per quanto dolorosa, è spesso il gesto più onesto che due persone possano farsi reciprocamente.",
            "Il vuoto che senti ora non è perdita permanente — è spazio. È nello spazio che entrano le cose nuove e migliori che il destino sta preparando per te."
        ],
        "consiglio": [
            "Permettiti di sentire il dolore, ma non lasciarti definire da esso.",
            "Concentrati sulla tua guarigione. È il momento di prenderti cura di te.",
            "Guarda avanti con speranza. Nuove opportunità ti attendono.",
            "Non aver paura di chiedere aiuto. Amici e famiglia sono lì per te.",
            "Riscopri te stesso. Questa è un'opportunità per un nuovo inizio."
        ]
    },
    "ritorno": {
        "generale": [
            "Le stelle vedono un'energia di riavvicinamento, ma attenzione: non tutto ciò che ritorna merita di restare. Chiediti se è amore o abitudine a chiamarti indietro.",
            "Un possibile ritorno è nell'aria — ma le stelle ti chiedono: è davvero questo che vuoi, o è la paura della solitudine a guidarti? La risposta onesta è quella che ti libera.",
            "Ciò che è destinato a restare non ha bisogno di essere inseguito. Se quell'energia deve tornare, tornerà. Il tuo compito ora è essere pronto ad accoglierla o lasciarla andare.",
            "Prima di riaprire una porta chiusa, chiediti cosa è cambiato. Se le stesse dinamiche sono ancora presenti, anche il risultato sarà lo stesso. La crescita si misura nelle azioni, non nelle promesse.",
            "Il riavvicinamento richiede onestà da entrambi i lati. Non basta il desiderio — occorre un accordo chiaro su cosa deve cambiare perché questa volta sia diversa.",
            "A volte torna perché si è sentito mancare. Ma il vuoto non è la stessa cosa dell'amore. Distingui tra chi ti vuole nella sua vita e chi vuole solo colmare il proprio."
        ],
        "consiglio": [
            "Valuta attentamente le tue vere intenzioni. Cosa desideri realmente?",
            "Non affrettare le decisioni. Lascia che il tempo riveli la verità.",
            "Comunica chiaramente le tue aspettative. La trasparenza è fondamentale.",
            "Proteggi il tuo cuore. Non permettere che vecchie ferite si riaprano senza una vera ragione.",
            "Ricorda che il tuo benessere viene prima di tutto. Sii onesto con te stesso."
        ]
    },
    "lavoro": {
        "generale": [
            "Il cielo professionale è in movimento. Un'energia nuova si avvicina nel campo lavorativo — rimani vigile e non scartare opportunità che sembrano minori: nascondono semi di grandi cambiamenti.",
            "Giove guarda favorevolmente la tua sfera professionale. Ma la fortuna va incontrata a metà strada: agisci, proponi, mostrati. L'universo premia chi non aspetta in silenzio.",
            "Sul lavoro si apre una fase di valutazione — gli sforzi passati stanno per trovare risposta. Mantieni la rotta senza disperderti: la coerenza ora vale più del talento.",
            "Le stelle indicano che le tue competenze sono sottovalutate nel contesto attuale. È il momento di alzare la voce o cercare un ambiente che sappia riconoscere il tuo valore.",
            "Un colloquio, una proposta, un progetto nuovo: Mercurio favorisce la comunicazione professionale. Preparati con cura e presentati con fiducia — le stelle sostengono chi si espone con preparazione.",
            "Un cambiamento lavorativo può sembrare spaventoso, ma le stelle lo confermano come necessario per la tua crescita. Ciò che hai accumulato non andrà perso — ti seguirà ovunque tu vada.",
            "Non ogni giornata difficile è un segnale negativo. A volte i momenti più duri del lavoro precedono un salto di qualità importante. Persevera con metodo.",
            "Il tuo istinto professionale è più affidabile di quanto credi. Quando qualcosa sul lavoro non ti convince, indaga invece di ignorare: la tua intuizione è un radar prezioso."
        ],
        "consiglio": [
            "Sii proattivo. Le opportunità si creano, non si aspettano.",
            "Valorizza le tue competenze. Non aver paura di mostrare il tuo valore.",
            "La perseveranza è la chiave del successo. Non mollare di fronte alle difficoltà.",
            "Cerca un ambiente che ti valorizzi. Il tuo talento merita di essere riconosciuto.",
            "Ascolta la tua intuizione. Spesso ti guida verso la strada giusta."
        ]
    },
    "promozione": {
        "generale": [
            "Le stelle vedono il riconoscimento avvicinarsi. Gli sforzi che hai messo nel lavoro non sono passati inosservati — un passo in avanti è nell'aria, ma richiede ancora pazienza e un ultimo slancio.",
            "Giove in aspetto favorevole indica che questo è il momento giusto per mettersi in luce. Non restare in ombra: fai vedere il tuo valore senza timore.",
            "L'avanzamento che sogni è più vicino di quanto pensi. L'universo suggerisce di non aspettare che arrivino a chiederti — fai il primo passo, sii visibile, dimostra la tua leadership.",
            "Le stelle ti invitano a non sminuirti nei momenti chiave. Il riconoscimento arriva a chi sa presentarsi con sicurezza: prepara le tue argomentazioni e parla con chi decide.",
            "Un ciclo di lavoro intenso sta per essere premiato. La promozione o il riconoscimento che cerchi è già in valutazione — sii paziente ma non passivo in questi ultimi passi."
        ],
        "consiglio": [
            "Sii audace e mostra il tuo valore. Non aver paura di chiedere ciò che meriti.",
            "Prepara le tue argomentazioni con cura. La chiarezza ti darà forza.",
            "Sii paziente, ma non passivo. Continua a lavorare sodo e a farti notare.",
            "La leadership si dimostra con l'esempio. Sii un punto di riferimento per gli altri.",
            "Credi in te stesso. Il successo è a portata di mano."
        ]
    },
    "soldi": {
        "generale": [
            "Mercurio e Giove parlano di flusso finanziario in movimento. Non è il momento di bloccarsi per paura ma nemmeno di agire impulsivamente. La saggezza ora vale oro.",
            "Le stelle vedono un'opportunità economica che si avvicina, ma richiede attenzione ai dettagli. Non firmare nulla senza averlo letto bene — ogni parola conta.",
            "Il denaro è energia, e l'energia segue la mente. Se i tuoi pensieri sui soldi sono di scarsità, attrai scarsità. Inizia a vedere l'abbondanza come possibile — le stelle la confermano.",
            "Un'entrata inaspettata o una soluzione a un problema economico si avvicina da una direzione non prevista. Rimani aperto alle possibilità che non rientrano nei tuoi schemi abituali.",
            "Le stelle ti invitano a fare chiarezza nella gestione delle risorse. Un bilancio onesto tra entrate e uscite è il primo atto magico per attirare prosperità duratura.",
            "Non ogni rischio finanziario è avventatezza. Le stelle indicano che un investimento ponderato e ben studiato in questo periodo può portare frutti significativi nel medio termine.",
            "La prosperità che cerchi è già in movimento verso di te. Ma richiede che tu sia pronto a riceverla: rimuovi i blocchi mentali sulla merita e sull'abbondanza.",
            "Un consiglio finanziario da una fonte inaspettata potrebbe rivelarsi prezioso. Ascolta chi ha già percorso la strada che stai cercando di imboccare."
        ],
        "consiglio": [
            "Sii attento ai dettagli. Ogni opportunità merita un'analisi accurata.",
            "Cambia la tua mentalità riguardo al denaro. L'abbondanza inizia nella mente.",
            "Sii aperto alle nuove possibilità. Le soluzioni possono arrivare da direzioni inaspettate.",
            "Gestisci le tue risorse con saggezza. Un buon bilancio è la base della prosperità.",
            "Non aver paura di investire in te stesso. La conoscenza è la ricchezza più grande."
        ]
    },
    "salute": {
        "generale": [
            "Il tuo corpo ti sta mandando un messaggio. Le stelle ti invitano a fermarti e ascoltarlo davvero, senza rimandare. La cura di sé non è un lusso — è la base di tutto il resto.",
            "Un periodo di recupero e rigenerazione è indicato dagli astri. Non combattere il bisogno di riposo: è il tuo sistema che si riorganizza per tornare più forte.",
            "La Luna governa i ritmi del corpo. Segui i tuoi ritmi naturali — il tuo organismo sa di cosa ha bisogno. L'equilibrio che cerchi parte dal rispetto per i tuoi limiti.",
            "Le stelle ti invitano a non sottovalutare i segnali fisici che stai ricevendo. Un piccolo sintomo ignorato a lungo diventa una voce sempre più alta — ascoltalo ora.",
            "L'equilibrio tra corpo e mente è la chiave che le stelle evidenziano in questo momento. Un'attenzione maggiore al sonno, all'alimentazione e al movimento trasforma l'energia disponibile.",
            "Un cambiamento nello stile di vita — anche piccolo e graduale — viene indicato dagli astri come il punto di svolta per il benessere che stai cercando.",
            "La salute emotiva influenza quella fisica in modo diretto. Le stelle ti invitano a non trattare il corpo come separato dalla mente — curarsi è un atto olistico."
        ],
        "consiglio": [
            "Ascolta il tuo corpo. Ti sta dando segnali importanti.",
            "Riposa e rigenerati. Il riposo è fondamentale per la tua salute.",
            "Segui i tuoi ritmi naturali. Il tuo benessere ne trarrà beneficio.",
            "Prenditi cura di te stesso. La tua salute è la tua priorità.",
            "Cerca l'equilibrio tra corpo e mente. Sono interconnessi."
        ]
    },
    "gravidanza": {
        "generale": [
            "Le stelle vedono un'energia di nascita e creazione fortissima attorno a te — che si tratti di vita, di un progetto o di una nuova fase. Qualcosa di grande sta per venire alla luce.",
            "La luna nuova parla di semi piantati e pronti a germogliare. Un inizio prezioso si avvicina — preparati ad accoglierlo con amore e presenza.",
            "L'universo sostiene i nuovi inizi. Qualunque cosa stai aspettando, le condizioni per la sua fioritura si stanno creando proprio ora.",
            "Le stelle indicano un periodo fertile — sia in senso letterale che simbolico. Un progetto, un legame o una nuova vita è in fase di creazione. Nutrilo con intenzione e cura.",
            "Il desiderio di creare qualcosa di tuo — che sia una famiglia, un'opera o un progetto — è sostenuto dall'energia cosmica di questo periodo. È il momento di agire con fede."
        ],
        "consiglio": [
            "Accogli questa nuova energia con amore e gratitudine.",
            "Sii paziente. Ogni cosa ha il suo tempo per crescere e fiorire.",
            "Nutri i tuoi sogni e progetti con intenzione e cura.",
            "Confida nel processo. L'universo ti sta sostenendo.",
            "Preparati ad accogliere un nuovo inizio con gioia."
        ]
    },
    "fortuna": {
        "generale": [
            "Giove, pianeta della fortuna, è attivo nel tuo tema. Questo non significa che la fortuna cadrà dal cielo — significa che sei in un periodo in cui le tue azioni vengono amplificate dal favore cosmico.",
            "Le stelle indicano un ciclo positivo in apertura. La fortuna non è casuale: è risonanza tra la tua energia e quella dell'universo. Sintonizzati.",
            "Un vento favorevole soffia — ma la vela devi alzarla tu. Le stelle creano le condizioni, tu devi essere pronto a coglierle senza esitazione.",
            "La fortuna in questo momento si nasconde nei dettagli che altri ignorano. La tua capacità di osservare ciò che gli altri trascurano potrebbe rivelarsi il tuo vantaggio principale.",
            "Le stelle ti invitano a non giocare tutto su un solo numero. La vera fortuna si costruisce con scelte ponderate e un pizzico di audacia al momento giusto.",
            "Un ciclo karmico favorevole sta compensando sacrifici e sforzi passati. Ciò che stai per ricevere non è un caso — è la risposta dell'universo a ciò che hai seminato.",
            "I numeri guida di oggi suggeriscono attenzione alle opportunità che si presentano due volte. La seconda volta che incontri qualcosa di interessante, non lasciarlo andare."
        ],
        "consiglio": [
            "Sii proattivo. La fortuna aiuta gli audaci.",
            "Sintonizzati con l'energia positiva dell'universo. Attrai ciò che emani.",
            "Cogli le opportunità che si presentano. Non esitare troppo a lungo.",
            "Presta attenzione ai dettagli. Spesso la fortuna si nasconde lì.",
            "Costruisci la tua fortuna con scelte sagge e un pizzico di coraggio."
        ]
    },
    "viaggio": {
        "generale": [
            "Un movimento importante si prospetta — fisico, mentale o spirituale. Le stelle sostengono i cambiamenti di prospettiva. Ciò che sembra un salto nel vuoto è in realtà un salto verso qualcosa di più grande.",
            "Mercurio e Giove in sintonia parlano di orizzonti che si aprono. Non avere paura del nuovo — il tuo spirito è fatto per esplorare, non per restare fermo.",
            "Il viaggio che stai considerando porta con sé una trasformazione profonda. L'universo dice: vai — ma vai consapevole, non in fuga.",
            "Un trasferimento o un viaggio importante è nell'aria. Le stelle indicano che il cambiamento di ambiente ti porterà la chiarezza che stai cercando da troppo tempo.",
            "L'energia del movimento è potente ora. Anche un breve spostamento — una nuova città, un nuovo quartiere — può aprire porte che nella routine quotidiana resterebbero invisibili.",
            "Chi si muove incontra il mondo. Le stelle confermano che restare fermi in questo momento significa perdere opportunità che il moto porterebbe naturalmente a te."
        ],
        "consiglio": [
            "Apriti al nuovo. L'esplorazione ti porterà crescita.",
            "Sii consapevole delle tue intenzioni. Viaggia con uno scopo.",
            "Non aver paura del cambiamento. Spesso è necessario per la tua evoluzione.",
            "Cogli le opportunità di movimento. Ti porteranno nuove prospettive.",
            "Lasciati guidare dalla tua curiosità. Il mondo ha molto da offrirti."
        ]
    },
    "casa": {
        "generale": [
            "La tua quarta casa — quella della dimora e delle radici — è attiva. Un cambiamento nel tuo spazio fisico si avvicina. Le stelle sostengono le decisioni prese con il cuore.",
            "La casa è il luogo dove l'anima si riposa. Le stelle ti invitano a chiederti: il luogo in cui vivi ti nutre o ti prosciuga? La risposta guiderà la prossima mossa.",
            "Un nuovo inizio legato alle fondamenta materiali si avvicina. Non avere fretta, ma non bloccarti per paura. Il momento giusto si riconosce quando agisci senza rimpianti.",
            "Un'energia di stabilità e di radicamento è presente. Le stelle favoriscono le decisioni relative alla casa prese in questo periodo — agisci con fiducia e documentazione in ordine.",
            "Lo spazio fisico riflette lo stato interiore. Prima di cercare una nuova casa fuori, chiediti cosa puoi trasformare nello spazio che già hai — a volte basta riarrangiare l'energia.",
            "Le stelle indicano che il cambiamento di casa o di ambiente che stai considerando apporterà benefici che vanno ben oltre il puramente pratico. È un atto di cura verso te stesso."
        ],
        "consiglio": [
            "Ascolta il tuo cuore riguardo alla tua dimora. Ti guiderà verso la scelta giusta.",
            "Non aver paura del cambiamento. Un nuovo spazio può portare nuova energia.",
            "Crea un ambiente che ti nutra. La tua casa è il tuo santuario.",
            "Agisci con fiducia e preparazione. Le stelle ti sostengono nelle tue decisioni.",
            "Rifletti sul tuo spazio interiore. Spesso è lì che inizia il cambiamento esteriore."
        ]
    },
    "famiglia": {
        "generale": [
            "I legami familiari sono sotto i riflettori del cielo. Le stelle invitano alla comprensione e al dialogo — vecchie ferite possono essere toccate, ma anche finalmente guarite.",
            "La famiglia è il primo specchio della nostra anima. Ciò che senti nelle relazioni con i tuoi cari riflette qualcosa che è ancora in elaborazione dentro di te. Guarda con compassione.",
            "Un momento di chiarimento nelle relazioni familiari si avvicina. Parla con il cuore aperto — la vulnerabilità ora è forza, non debolezza.",
            "Le stelle evidenziano una dinamica familiare che richiede attenzione. Non aspettare che si risolva da sola — un passo verso il dialogo oggi evita distanze che domani sarebbero difficili da colmare.",
            "Le radici familiari ti hanno dato più di quanto riconosci. Anche nelle relazioni difficili c'è un dono nascosto — trovarlo richiede pazienza e uno sguardo più ampio.",
            "Un membro della famiglia ha bisogno di sentirti vicino anche se non lo chiede esplicitamente. Le stelle ti invitano a fare il primo passo verso chi ami, senza aspettare."
        ],
        "consiglio": [
            "Comunica apertamente e con compassione. Il dialogo può guarire vecchie ferite.",
            "Rifletti sulle dinamiche familiari. Spesso sono uno specchio del tuo mondo interiore.",
            "Sii vulnerabile. La vera forza si trova nell'apertura del cuore.",
            "Non aspettare. Fai il primo passo verso la riconciliazione.",
            "Onora le tue radici. La famiglia è una fonte di forza e apprendimento."
        ]
    },
    "amicizia": {
        "generale": [
            "Le stelle rivelano che non tutte le persone accanto a te stanno camminando nella tua stessa direzione. Fidati di chi dimostra — non di chi promette.",
            "Un'amicizia vera si rivela nei momenti difficili. Guarda chi c'è stato nelle tue notti buie — quella è la tua cerchia reale. Il resto è contorno.",
            "Venere nei legami di amicizia parla di connessioni che si rafforzano e altre che si allontanano naturalmente. Lascia andare senza rancore ciò che non cresce più.",
            "Le stelle indicano che un'amicizia che senti distante potrebbe essere recuperata con un gesto semplice e sincero. A volte una persona importante aspetta solo un tuo segnale.",
            "Non ogni allontanamento è un rifiuto. Le persone evolvono e a volte i percorsi si separano. Onora ciò che è stato senza trattenerlo per forza — le stelle sostengono i cambiamenti naturali.",
            "Una nuova amicizia potrebbe entrare nella tua vita da una direzione inaspettata. Le stelle ti invitano a essere aperto con chi ancora non conosci — l'incontro significativo è vicino."
        ],
        "consiglio": [
            "Fidati del tuo istinto. Le vere amicizie si dimostrano con i fatti.",
            "Sii presente per chi ti è caro. L'amicizia si nutre di presenza e supporto.",
            "Lascia andare ciò che non ti serve più. Non aver paura di chiudere cicli.",
            "Apriti a nuove connessioni. L'universo ti sta presentando nuove persone.",
            "Comunica apertamente con i tuoi amici. La chiarezza rafforza i legami."
        ]
    },
    "studio": {
        "generale": [
            "Le stelle sono favorevoli all'apprendimento e alla crescita mentale. Il percorso di studio che stai seguendo ti porterà più lontano di quanto immagini — non mollare.",
            "Mercurio, pianeta dell'intelletto, ti sostiene. Un esame o una prova importante sta per essere superata. La preparazione che hai fatto vale più di quanto credi.",
            "Il sapere che stai accumulando è un investimento nell'anima oltre che nella carriera. Anche quando le difficoltà sembrano insormontabili, ricorda: hai già superato ostacoli più grandi.",
            "Le stelle indicano che il momento di dubbio che attraversi nello studio è una fase normale di ogni processo di crescita. Chi si ferma qui perde; chi persevera trova la svolta.",
            "Un metodo di studio diverso dal tuo solito potrebbe sbloccare un apprendimento che sembrava bloccato. Le stelle favoriscono la sperimentazione metodologica in questo periodo.",
            "Non confrontare il tuo progresso con quello degli altri: ogni mente ha il suo ritmo e la sua profondità. Il tuo percorso è unico e sta andando nella direzione giusta."
        ],
        "consiglio": [
            "Persevera nei tuoi studi. La conoscenza è un tesoro inestimabile.",
            "Confida nella tua preparazione. Hai le capacità per superare ogni ostacolo.",
            "Sperimenta nuovi metodi di apprendimento. Potrebbero aprirti nuove prospettive.",
            "Non confrontarti con gli altri. Il tuo percorso è unico e prezioso.",
            "Ricorda che ogni difficoltà è un'opportunità per crescere e imparare."
        ]
    },
    "futuro": {
        "generale": [
            "Il futuro non è scritto nella pietra — si plasma con ogni scelta consapevole che fai oggi. Le stelle mostrano potenziale enorme, ma la direzione la scegli tu.",
            "Una svolta si avvicina. Non tutte le rivoluzioni sono rumorose — spesso il cambiamento più profondo inizia con un momento di silenzio e chiarezza interiore.",
            "L'universo sta riorganizzando le carte del tuo destino. Ciò che sembra incerto ora è in realtà il suolo che si prepara per qualcosa di straordinario.",
            "Le stelle ti invitano a smettere di temere il futuro e a iniziare a costruirlo. Ogni azione intenzionale oggi è un mattone nella direzione che desideri.",
            "Il cambiamento che senti arrivare non è da temere — è il segnale che sei pronto per una versione più grande di te stesso. Lasciati superare da chi stavi diventando.",
            "L'incertezza che provi ora è la stessa che sente il seme prima di germogliare. Le stelle confermano che stai per emergere alla superficie — mantieni la fede nel processo.",
            "Le stelle mostrano più strade aperte davanti a te. Non è il momento di aspettare che una si chiuda per prenderne una — è il momento di scegliere con cuore e metodo."
        ],
        "consiglio": [
            "Sii l'architetto del tuo futuro. Ogni scelta conta.",
            "Accogli il cambiamento con fiducia. Spesso porta a nuove opportunità.",
            "Non temere l'incertezza. È il terreno fertile per la crescita.",
            "Costruisci il tuo futuro con azioni intenzionali. Ogni passo ti avvicina ai tuoi sogni.",
            "Scegli con il cuore e con metodo. La chiarezza ti guiderà."
        ]
    },
    "paura": {
        "generale": [
            "Le stelle riconoscono il peso che stai portando. Ma l'ansia e la paura non sono la realtà — sono l'ombra proiettata da pensieri che il futuro non ha ancora confermato.",
            "Saturno ti invita a guardare in faccia ciò che ti spaventa. La paura affrontata perde metà del suo potere — l'altra metà la perde quando scopri di essere più forte di lei.",
            "L'universo non ti ha messo in questa situazione per spezzarti, ma per mostrarti di cosa sei capace. Anche nel buio più fitto, una stella si vede sempre.",
            "Lo stress che senti è reale, ma non è permanente. Le stelle indicano un periodo di transizione — il disagio attuale è il preludio di un equilibrio che sta tornando.",
            "L'ansia ha una funzione: ti segnala ciò che ti importa davvero. Usala come bussola invece di combatterla — ti dirà esattamente dove concentrare la tua energia di cura.",
            "Non devi affrontare tutto da solo. Le stelle ti invitano a permettere ad altri di sostenerti — la forza vera non è non aver bisogno, ma saper chiedere e ricevere con grazia.",
            "Un pensiero ripetuto crea la realtà che poi si autocertifica. Interrompi il ciclo con un'azione piccola ma concreta: il movimento fisico più semplice spezza le spirali mentali."
        ],
        "consiglio": [
            "Affronta le tue paure. Scoprirai una forza che non pensavi di avere.",
            "Non sei solo. Permetti agli altri di sostenerti.",
            "Trasforma l'ansia in una bussola. Ti indicherà ciò che è importante.",
            "Interrompi i cicli negativi con piccole azioni concrete.",
            "Ricorda che sei più forte di quanto credi. La luce è sempre presente, anche nel buio."
        ]
    },
    "magia": {
        "generale": [
            "L'energia che stai percependo è reale. Le forze sottili rispondono alle intenzioni pure — chiarisci dentro di te cosa vuoi davvero, poi agisci con rispetto e consapevolezza.",
            "Le stelle confermano che sei in un periodo di forte sensibilità energetica. Proteggiti con intenzione, sii selettivo sulle persone che lasci entrare nel tuo spazio.",
            "Ciò che mandi nell'universo ritorna moltiplicato. Prima di qualsiasi rituale, chiediti: agisco dall'amore o dalla paura? La risposta determina il risultato.",
            "L'intenzione è il vero strumento magico. Prima di qualsiasi rituale, fermati e definisci con precisione cosa stai chiedendo — l'universo risponde alla chiarezza, non all'urgenza.",
            "Le stelle confermano che sei in un periodo di heightened sensitivity energetica. I tuoi sogni, le tue intuizioni e le sincronicità che noti sono messaggi reali: annotali.",
            "La magia più potente non ha bisogno di strumenti esterni. La tua intenzione chiara, il tuo respiro consapevole e il tuo cuore allineato sono il rituale completo."
        ],
        "consiglio": [
            "Chiarisci le tue intenzioni. La magia risponde alla chiarezza.",
            "Proteggi la tua energia. Sii selettivo con le tue interazioni.",
            "Agisci con amore e consapevolezza. L'universo ti restituirà il doppio.",
            "Ascolta i messaggi dell'universo. Sono ovunque intorno a te.",
            "Ricorda che la vera magia risiede dentro di te. La tua intenzione è il tuo potere."
        ]
    },
    "sogno": {
        "generale": [
            "I sogni sono messaggi dell'anima in un linguaggio che la mente razionale non riesce a bloccare. Prendi nota di ciò che hai visto — contiene un simbolo importante per il tuo percorso.",
            "Il mondo onirico è un ponte tra il conscio e l'inconscio. Ciò che appare ripetutamente nei sogni chiede di essere ascoltato nella veglia.",
            "Le stelle confermano: il sogno che ti ha colpito non è casuale. L'universo parla attraverso di esso. Meditaci sopra con calma — il significato si rivelerà.",
            "Ogni elemento del sogno è un simbolo che parla il linguaggio della tua anima. Il luogo, i colori, le emozioni provate: ognuno di questi è un frammento di risposta.",
            "Un sogno ricorrente è una lettera che l'inconscio ti rispedisce finché non viene letta. Questa volta fermati e presta attenzione — il messaggio è urgente e necessario.",
            "Le stelle confermano che il tuo inconscio è in stato di elaborazione intensa. I sogni vividi di questo periodo sono un segnale che stai integrando qualcosa di importante."
        ],
        "consiglio": [
            "Presta attenzione ai tuoi sogni. Sono messaggi preziosi dall'inconscio.",
            "Annota i tuoi sogni. Spesso contengono simboli importanti per il tuo percorso.",
            "Rifletti sui tuoi sogni con calma. Il significato si rivelerà col tempo.",
            "Ogni elemento del sogno è un simbolo. Cerca di comprenderne il linguaggio.",
            "Non ignorare i sogni ricorrenti. Sono messaggi urgenti che richiedono la tua attenzione."
        ]
    },
    "morte": {
        "generale": [
            "La morte nell'ottica esoterica è trasformazione, non fine. Qualcosa sta chiudendo un ciclo nella tua vita per fare spazio a qualcosa di completamente nuovo. Onora ciò che finisce.",
            "Le stelle sono con te nel lutto. Il dolore della perdita è il segno di quanto profondo fosse quel legame — e l'amore non muore con il corpo.",
            "Ogni grande trasformazione ha la forma di una piccola morte. Ciò che stai attraversando sta rimodellando la tua anima. Dall'altro lato di questa soglia c'è una versione più autentica di te.",
            "L'aldilà esiste nelle tradizioni di ogni civiltà come realtà parallela. Chi ami è partito, non sparito. La connessione dell'anima non si interrompe con il corpo fisico.",
            "Il lutto richiede il suo tempo e non va affrettato. Le stelle ti invitano a onorare il dolore senza affogare in esso — la vita del defunto continua in te attraverso i suoi insegnamenti.",
            "La perdita di una persona cara lascia un vuoto che nessuno può colmare, ma che col tempo si trasforma in uno spazio sacro dove il ricordo vive per sempre."
        ],
        "consiglio": [
            "Accetta la trasformazione. Ogni fine è un nuovo inizio.",
            "Onora il tuo dolore. È una parte naturale del processo di guarigione.",
            "Ricorda che l'amore non muore. La connessione con chi hai perso rimane.",
            "Permettiti di vivere il lutto. Ogni emozione è valida.",
            "Trova conforto nei ricordi. Chi hai amato vive attraverso di essi."
        ]
    },
    "vendetta": {
        "generale": [
            "Le stelle ti invitano a riflettere: la vendetta non sana la ferita — la mantiene viva. Ciò che vuoi davvero non è punire, ma guarire. Sono strade diverse.",
            "Il karma è un meccanismo dell'universo che non ha bisogno del tuo intervento. Chi ti ha fatto del male riceverà ciò che ha seminato — il tuo compito è uscire dal ciclo, non alimentarlo.",
            "L'energia che stai dirigendo verso la rivalsa può essere reindirizzata verso la tua crescita. La migliore vendetta è una vita piena e autentica che nulla deve alla tua fonte di dolore.",
            "La giustizia cosmica non dimentica nulla. Le stelle ti dicono di affidarti al meccanismo universale di riequilibrio — è più potente e preciso di qualsiasi azione tu possa intraprendere.",
            "Il rancore è un veleno che avvelena chi lo porta, non chi lo ha causato. Liberartene non è debolezza — è l'atto di forza più difficile e più trasformativo che esista."
        ],
        "consiglio": [
            "Cerca la guarigione, non la punizione. La pace interiore è più preziosa della vendetta.",
            "Affidati al karma. L'universo si occuperà di riequilibrare le cose.",
            "Reindirizza la tua energia verso la crescita personale. La tua felicità è la migliore risposta.",
            "Lascia andare il rancore. Ti libererà da un peso inutile.",
            "Sii superiore. La tua dignità è la tua forza più grande."
        ]
    },
    "successo": {
        "generale": [
            "Le stelle confermano che sei sulla strada giusta verso i tuoi obiettivi. Ogni passo, anche quelli che sembrano piccoli, ti avvicina al traguardo che hai nel cuore.",
            "Giove sorride alle tue ambizioni. Il successo che cerchi non è irraggiungibile — è il risultato naturale della coerenza tra ciò che vuoi, ciò che pensi e ciò che fai ogni giorno.",
            "Un momento di visibilità si avvicina. Le stelle ti invitano a non sminuire i tuoi risultati quando li presenti agli altri — il tuo valore è reale e merita di essere riconosciuto.",
            "Il successo autentico non arriva solo — arriva con le persone giuste accanto. Le stelle ti invitano a coltivare le relazioni con chi ti ispira a crescere.",
            "Non confondere la velocità con il progresso. Le stelle indicano che il tuo percorso verso il successo ha il suo ritmo preciso — forzarlo crea errori che rallentano."
        ],
        "consiglio": [
            "Confida nel tuo percorso. Ogni passo ti avvicina al successo.",
            "Sii coerente con i tuoi obiettivi. La costanza premia sempre.",
            "Non aver paura di mostrare i tuoi risultati. Il tuo valore merita riconoscimento.",
            "Coltiva relazioni positive. Le persone giuste ti ispireranno a crescere.",
            "Rispetta il tuo ritmo. Il successo arriva al momento giusto."
        ]
    },
    "creativita": {
        "generale": [
            "Le stelle confermano che la tua creatività è in un periodo di forte attivazione. Ciò che senti di voler creare ora ha una ragione profonda — non ignorare quell'impulso.",
            "L'ispirazione che cerchi non arriva aspettando — arriva iniziando. Le stelle ti invitano ad aprire il quaderno, lo schermo o lo strumento e mettere giù il primo segno.",
            "Il blocco creativo che senti è spesso paura del giudizio travestita da mancanza di idee. Le stelle ti dicono: crea per te prima che per gli altri.",
            "Mercurio favorisce la comunicazione creativa in questo periodo. È il momento giusto per condividere un progetto o un'idea che hai tenuto solo per te.",
            "La creatività autentica nasce dal vissuto reale. Le tue esperienze più difficili contengono il materiale per la tua opera più potente. Non aver paura di usarle.",
            "Le stelle indicano che una collaborazione creativa potrebbe moltiplicare il tuo potenziale in questo periodo. Cerca chi completa ciò che tu sai fare con ciò che sa fare lui."
        ],
        "consiglio": [
            "Non ignorare il tuo impulso creativo. È un dono prezioso.",
            "Inizia a creare. L'ispirazione arriverà con l'azione.",
            "Crea per te stesso, senza paura del giudizio. La tua espressione è unica.",
            "Condividi le tue idee. La collaborazione può amplificare il tuo potenziale.",
            "Trasforma le tue esperienze in arte. La tua storia è una fonte di ispirazione."
        ]
    },
    "default": {
        "generale": [
            "Le stelle hanno ricevuto la tua domanda. L'universo non risponde sempre con parole dirette — a volte risponde con un'intuizione, un incontro inatteso, un sogno.",
            "La tua intenzione è stata inviata al cosmo. Ciò che stai cercando sta cercando anche te — rimani aperto ai segnali che arriveranno nelle prossime ore e nei prossimi giorni.",
            "Il cielo vede la tua domanda e la tua ricerca. Confida nel fatto che ciò che ti serve davvero arriverà — anche in una forma diversa da quella che ti aspetti.",
            "L'universo risponde sempre — ma a volte il silenzio è già una risposta. Fermati, respira, e ascolta ciò che già sai nel profondo.",
            "Le stelle vedono la tua intenzione e la tua sincera ricerca. Ogni domanda posta con il cuore aperto merita una risposta — e l'universo non la nega mai a chi sa ascoltare.",
            "Ciò che cerchi sta già cercando te. La risposta arriverà nel momento esatto in cui sarai abbastanza quieto da riceverla — fidati del processo e del tempo cosmico.",
            "Il tuo cammino è osservato dalle stelle con attenzione e cura. Non sei solo in questa ricerca — forze più grandi di te stanno lavorando a tuo favore anche quando non le senti."
        ],
        "consiglio": [
            "Rimani aperto ai segnali dell'universo. Le risposte possono arrivare in modi inaspettati.",
            "Confida nel processo. Ciò che è destinato a te arriverà al momento giusto.",
            "Ascolta la tua voce interiore. Spesso la risposta è già dentro di te.",
            "Sii paziente. L'universo ha i suoi tempi perfetti.",
            "Non sei solo. Forze più grandi ti stanno guidando e sostenendo."
        ]
    }
}
;

  var tema = temi.length > 0 ? temi[0] : 'default';
  var poolGenerale = RISPOSTE_AI[tema] && RISPOSTE_AI[tema].generale ? RISPOSTE_AI[tema].generale : RISPOSTE_AI['default'].generale;
  var poolConsiglio = RISPOSTE_AI[tema] && RISPOSTE_AI[tema].consiglio ? RISPOSTE_AI[tema].consiglio : RISPOSTE_AI['default'].consiglio;
  var idxGenerale = Math.floor(Date.now() / 300000) % poolGenerale.length;
  var idxConsiglio = Math.floor(Date.now() / 150000) % poolConsiglio.length; // Usa un seed diverso per il consiglio
  var rispostaGenerale = poolGenerale[idxGenerale];
  var rispostaConsiglio = poolConsiglio[idxConsiglio];
  var risposta = rispostaGenerale + ' ' + rispostaConsiglio; // Combina le due risposte

  // Adatta la risposta al soggetto rilevato
  var sog = soggetto || { tipo: 'io', label: 'io' };

  if (sog.tipo === 'terza_f') {
    // Sostituzioni per terza persona femminile
    risposta = risposta
      .replace(/\bstai\b/g, 'sta')
      .replace(/\bhai\b/g, 'ha')
      .replace(/\bsei\b/g, 'e\'')
      .replace(/\bsenti\b/g, 'sente')
      .replace(/\bporti\b/g, 'porta')
      .replace(/\bvuoi\b/g, 'vuole')
      .replace(/\bpuoi\b/g, 'puo\'')
      .replace(/\bfai\b/g, 'fa')
      .replace(/\bdai\b/g, 'da')
      .replace(/\bsai\b/g, 'sa')
      .replace(/\bvai\b/g, 'va')
      .replace(/\bla tua\b/g, 'la sua')
      .replace(/\bil tuo\b/g, 'il suo')
      .replace(/\ble tue\b/g, 'le sue')
      .replace(/\bi tuoi\b/g, 'i suoi')
      .replace(/\bte stesso\b/g, 'se stessa')
      .replace(/\bte stessa\b/g, 'se stessa')
      .replace(/\bdi te\b/g, 'di lei')
      .replace(/\bper te\b/g, 'per lei')
      .replace(/\bcon te\b/g, 'con lei')
      .replace(/\bsu te\b/g, 'su di lei')
      .replace(/\ba te\b/g, 'a lei')
      .replace(/\bintorno a te\b/g, 'intorno a lei')
      .replace(/\bche sei\b/g, 'che e\'')
      .replace(/\bche hai\b/g, 'che ha')
      .replace(/\bche stai\b/g, 'che sta')
      .replace(/\b ti \b/g, ' le ')
      .replace(/ ti$/g, ' le')
      .replace(/ ti,/g, ' le,')
      .replace(/ ti\./g, ' le.')
      .replace(/\btuo\b/g, 'suo')
      .replace(/\btua\b/g, 'sua')
      .replace(/\bfermarti\b/g, 'fermarsi')
      .replace(/\bamarti\b/g, 'amarsi')
      .replace(/\bproteggerti\b/g, 'proteggersi')
      .replace(/\bcurarti\b/g, 'curarsi')
      .replace(/\bchiederti\b/g, 'chiedersi')
      .replace(/\bpermettiti\b/g, 'si permetta')
      .replace(/\bti libera\b/g, 'la libera')
      .replace(/\bti seguira\b/g, 'la seguira')
      .replace(/\bti seguono\b/g, 'la seguono')
      .replace(/\bti porta\b/g, 'la porta')
      .replace(/\bti invita\b/g, 'la invita')
      .replace(/\bLe stelle ti\b/g, 'Le stelle la')
      .replace(/\bstelle ti\b/g, 'stelle la')
      .replace(/\binvitano a fermarti\b/g, 'invitano a fermarsi');
    var labelF = sog.label !== 'lei' ? sog.label.replace('mia ','') : 'lei';
    var cap = labelF.charAt(0).toUpperCase() + labelF.slice(1);
    risposta = cap + ': ' + risposta.charAt(0).toLowerCase() + risposta.slice(1);
  } else if (sog.tipo === 'terza_m') {
    risposta = risposta
      .replace(/\bstai\b/g, 'sta')
      .replace(/\bhai\b/g, 'ha')
      .replace(/\bsei\b/g, 'e\'')
      .replace(/\bsenti\b/g, 'sente')
      .replace(/\bporti\b/g, 'porta')
      .replace(/\bvuoi\b/g, 'vuole')
      .replace(/\bpuoi\b/g, 'puo\'')
      .replace(/\bfai\b/g, 'fa')
      .replace(/\bdai\b/g, 'da')
      .replace(/\bsai\b/g, 'sa')
      .replace(/\bvai\b/g, 'va')
      .replace(/\bla tua\b/g, 'la sua')
      .replace(/\bil tuo\b/g, 'il suo')
      .replace(/\ble tue\b/g, 'le sue')
      .replace(/\bi tuoi\b/g, 'i suoi')
      .replace(/\bte stesso\b/g, 'se stesso')
      .replace(/\bte stessa\b/g, 'se stesso')
      .replace(/\bdi te\b/g, 'di lui')
      .replace(/\bper te\b/g, 'per lui')
      .replace(/\bcon te\b/g, 'con lui')
      .replace(/\bsu te\b/g, 'su di lui')
      .replace(/\ba te\b/g, 'a lui')
      .replace(/\bintorno a te\b/g, 'intorno a lui')
      .replace(/\bche sei\b/g, 'che e\'')
      .replace(/\bche hai\b/g, 'che ha')
      .replace(/\bche stai\b/g, 'che sta')
      .replace(/\b ti \b/g, ' gli ')
      .replace(/ ti$/g, ' gli')
      .replace(/ ti,/g, ' gli,')
      .replace(/ ti\./g, ' gli.')
      .replace(/\btuo\b/g, 'suo')
      .replace(/\btua\b/g, 'sua')
      .replace(/\bfermarti\b/g, 'fermarsi')
      .replace(/\bamarti\b/g, 'amarsi')
      .replace(/\bproteggerti\b/g, 'proteggersi')
      .replace(/\bcurarti\b/g, 'curarsi')
      .replace(/\bchiederti\b/g, 'chiedersi')
      .replace(/\bpermettiti\b/g, 'si permetta')
      .replace(/\bti libera\b/g, 'lo libera')
      .replace(/\bti seguira\b/g, 'lo seguira')
      .replace(/\bti seguono\b/g, 'lo seguono')
      .replace(/\bti porta\b/g, 'lo porta')
      .replace(/\bti invita\b/g, 'lo invita')
      .replace(/\bLe stelle ti\b/g, 'Le stelle lo')
      .replace(/\bstelle ti\b/g, 'stelle lo')
      .replace(/\binvitano a fermarti\b/g, 'invitano a fermarsi')
      .replace(/\bLe stelle gli\b/g, 'Le stelle lo')
      .replace(/\bstelle gli\b/g, 'stelle lo');
    var labelM = sog.label !== 'lui' ? sog.label.replace('mio ','') : 'lui';
    var capM = labelM.charAt(0).toUpperCase() + labelM.slice(1);
    risposta = capM + ': ' + risposta.charAt(0).toLowerCase() + risposta.slice(1);
  } else {
    // Prima persona: aggiungi nome se disponibile
    if (nome && nome !== 'Viandante') {
      risposta = nome + ', ' + risposta.charAt(0).toLowerCase() + risposta.slice(1);
    }
  }

  // secondo tema rimosso per evitare risposte incoerenti

  return risposta;
}

function runConsulente() {
  var input = document.getElementById('consultInput').value.trim();
  var topic = _consultTopicActive;
  var btn = document.getElementById('consultBtn');
  var res = document.getElementById('consultResult');

  if (!input) {
    try{ showToast('✍️ Scrivi la tua domanda prima di consultare le stelle…'); }catch(e){}
    return;
  }

  var raw = localStorage.getItem('myst_v3_profile');
  var p = null; try{ p = JSON.parse(raw||''); }catch(e){}
  var segno = p && DB.segni[p.segno] ? DB.segni[p.segno] : null;
  var nome = p ? p.name : 'Viandante';

  var temiRilevati = _detectKeywords(input);
  var soggetto = _detectSoggetto(input);
  var seed = _dailySeedN(input.length * 7 + topic.length * 13);
  var carta = _arcaniMaggiori[_seededIdx(_arcaniMaggiori, seed + Math.floor(Date.now()/60000))];
  var luna = _fasi[_seededIdx(_fasi, _dailySeedN(2))];
  var num = (_dailySeedN(17 + input.length + topic.length) % 9) + 1;
  var rispostaPersonale = _getRispostaKeyword(temiRilevati, nome, soggetto);
  var segnoConsiglio = segno ? ('Il ' + segno.n + ' (governato da ' + segno.p + ', elemento ' + segno.el + ') suggerisce di agire con ' + segno.k[Math.floor(Date.now()/300000) % segno.k.length].toLowerCase() + '.') : '';

  btn.textContent = '⏳ Le stelle consultano...';
  btn.style.opacity = '.6';
  btn.style.pointerEvents = 'none';

  setTimeout(function(){
    try {
    btn.textContent = '✨ Chiedi all\'Universo';
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';

    res.style.display = 'block';
    res.innerHTML = [
      '<div class="consult-block">',
      '<h4>🔮 Il Messaggio delle Stelle</h4>',
      '<div class="consult-response">' + rispostaPersonale.split('. ').map(function(s,i,a){
        if(i === a.length - 1) return '<span class="consult-response-advice">✦ ' + s + '</span>';
        return '<span class="consult-response-general">' + s + (s.endsWith('.')?'':'.') + '</span>';
      }).join(' ') + '</div>',
      '</div>',
      '<div class="consult-block">',
      '<h4>' + carta.e + ' Arcano Rivelato — ' + carta.n + '</h4>',
      '<p>' + carta.msg + '</p>',
      '</div>',
      '<div class="consult-block">',
      '<h4>' + luna.e + ' Energia Lunare — ' + luna.n + '</h4>',
      '<p>In questo momento lunare, l\'energia è amplificata per ciò che hai nel cuore. Segui l\'istinto.</p>',
      '</div>',
      segnoConsiglio ? '<div class="consult-block"><h4>♈ Il Tuo Segno Parla</h4><p>' + segnoConsiglio + '</p></div>' : '',
      '<div class="consult-block">',
      '<h4>✦ Numero Guida — ' + num + '</h4>',
      '<p>' + (DB_NUM && DB_NUM[num] ? DB_NUM[num].keywords.slice(0,2).join(', ') + ': ' + DB_NUM[num].essenza : 'Il ' + num + ' porta con sé energia di trasformazione e crescita.') + '</p>',
      '</div>',
      '<button class="btn btn-sec" style="margin-top:4px;font-size:11px" onclick="runConsulente()">🔄 Nuova Lettura</button>'
    ].join('');
    try{ playMysticSound('bell'); }catch(e){}
    try{ burst(); }catch(e){}
    } catch(err) {
      console.error('Consulente error:', err);
      btn.textContent = '✨ Chiedi all\'Universo';
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      res.style.display = 'block';
      res.innerHTML = '<div class="consult-block"><p style="color:var(--gold)">🔮 Le stelle hanno captato la tua domanda. Riprova tra un momento.</p></div>';
    }
  }, 1400);
}

