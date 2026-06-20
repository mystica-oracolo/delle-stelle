
const DB = {

segni:{
  ariete:    {n:"Ariete",    e:"♈",s:"🐏",p:"Marte",    el:"Fuoco", d:"21 Mar – 20 Apr",k:["Coraggio","Leadership","Passione","Iniziativa"],
  pietre:["Rubino — amplifica il coraggio e la forza vitale","Diamante — chiarezza e invincibilità","Corniola rossa — energia e determinazione","Ematite — protezione e ancoraggio"],
  oggetti:["🔑 Chiave di ferro — apre le porte del destino","🐴 Ferro di cavallo — devia le energie negative","🌶️ Corno rosso — protezione mediterranea antica","🗡️ Pugnale in miniatura — simbolo di volontà"]},
  toro:      {n:"Toro",      e:"♉",s:"🐂",p:"Venere",   el:"Terra",  d:"21 Apr – 20 Mag",k:["Stabilità","Sensualità","Tenacia","Costanza"],
  pietre:["Smeraldo — abbondanza e fertilità della terra","Malachite — trasformazione e protezione del cuore","Quarzo rosa — amore incondizionato e pace","Rodonite — guarigione emotiva e fiducia"],
  oggetti:["🌿 Ramo di quercia — forza e radicamento","💰 Moneta d'oro antica — magnete per l'abbondanza","🌹 Rosa essiccata — amore duraturo","🐂 Toro in terracotta — stabilità della casa"]},
  gemelli:   {n:"Gemelli",   e:"♊",s:"👯",p:"Mercurio", el:"Aria",   d:"21 Mag – 21 Giu",k:["Comunicazione","Curiosità","Intelligenza","Adattabilità"],
  pietre:["Agata — equilibrio tra le due nature","Citrino — chiarezza mentale e comunicazione","Tormalina bicolore — dualità in armonia","Acquamarina — espressione autentica del pensiero"],
  oggetti:["📖 Libro segreto con chiave — conoscenza protetta","🎲 Dado antico — lascia scegliere al caso sacro","✍️ Penna d'oca — parola come magia","🗝️ Chiave doppia — accesso a mondi paralleli"]},
  cancro:    {n:"Cancro",    e:"♋",s:"🦀",p:"Luna",     el:"Acqua",  d:"22 Giu – 22 Lug",k:["Intuizione","Empatia","Protezione","Memoria"],
  pietre:["Pietra di luna — intuizione lunare e cicli femminili","Perla — saggezza accumulata e purezza","Acquamarina — connessione con le acque dell'inconscio","Calcedonio bianco — pace interiore e protezione"],
  oggetti:["🌙 Luna crescente in argento — protezione notturna","🐚 Conchiglia di nautilus — spirale della vita","💧 Ampolla d'acqua di mare — forza degli oceani","🪞 Specchio piccolo — riflessione interiore"]},
  leone:     {n:"Leone",     e:"♌",s:"🦁",p:"Sole",     el:"Fuoco",  d:"23 Lug – 22 Ago",k:["Carisma","Creatività","Generosità","Vitalità"],
  pietre:["Occhio di tigre — potere e coraggio visibile","Granato arancio — vitalità solare e passione creativa","Ambra — calore antico e luce solare intrappolata","Citrino dorato — abbondanza e generosità"],
  oggetti:["👑 Corona dorata in miniatura — regalità dello spirito","🦁 Leone in pietra — custodia e forza","☀️ Amuleto solare egizio — benedizione del Ra","🔆 Cristallo di quarzo al sole — amplificatore di luce"]},
  vergine:   {n:"Vergine",   e:"♍",s:"🌾",p:"Mercurio", el:"Terra",  d:"23 Ago – 22 Set",k:["Precisione","Servizio","Analisi","Salute"],
  pietre:["Ametista — purificazione e chiarezza analitica","Giada verde — salute e lunga vita","Diaspro verde — connessione con la terra guaritrice","Fluorite — ordine mentale e discernimento"],
  oggetti:["🌾 Spiga di grano — ciclo del nutrimento","⚗️ Alambicco in miniatura — alchimia quotidiana","📿 Rosario di semi — preghiera e ritmo","🌿 Fascio di erbe aromatiche essiccate — purificazione dello spazio"]},
  bilancia:  {n:"Bilancia",  e:"♎",s:"⚖️",p:"Venere",   el:"Aria",   d:"23 Set – 22 Ott",k:["Armonia","Giustizia","Diplomazia","Bellezza"],
  pietre:["Opale — iridescenza e bellezza nascosta","Lapislazzuli — verità e armonia cosmica","Turchese — protezione e comunicazione","Quarzo rosa — amore e relazioni armoniose"],
  oggetti:["⚖️ Bilancia in miniatura — equilibrio delle forze","🪭 Ventaglio di piume — eleganza che deflette il caos","🌸 Fiore di loto essiccato — bellezza nell'impermanenza","💎 Pendente in pietra preziosa — bellezza come protezione"]},
  scorpione: {n:"Scorpione", e:"♏",s:"🦂",p:"Plutone",  el:"Acqua",  d:"23 Ott – 22 Nov",k:["Intensità","Trasformazione","Potere","Mistero"],
  pietre:["Ossidiana nera — specchio delle ombre e protezione totale","Granato rosso scuro — fuoco interno e trasformazione","Malachite — svela la verità nascosta","Labradorite — magia e accesso ai misteri"],
  oggetti:["🖤 Ossidiana in forma di serpente — guardiano dei segreti","🦂 Scorpione in argento — simbolo di rinascita","🕯️ Candela nera — brucia ciò che non serve","🔮 Sfera di ossidiana — visione nel profondo"]},
  sagittario:{n:"Sagittario",e:"♐",s:"🏹",p:"Giove",    el:"Fuoco",  d:"23 Nov – 21 Dic",k:["Libertà","Filosofia","Avventura","Ottimismo"],
  pietre:["Turchese — protezione del viaggiatore e fortuna","Zaffiro — saggezza e connessione con il cielo","Sodalite — pensiero filosofico e intuizione","Topazio azzurro — chiarezza della visione"],
  oggetti:["🏹 Freccia in legno — direzione e intenzione precisa","🗺️ Mappa antica arrotolata — l'avventura è la meta","🧭 Bussola in ottone — trova sempre il nord interiore","📿 Mala di turchese — meditazione del viaggiatore"]},
  capricorno:{n:"Capricorno",e:"♑",s:"🐐",p:"Saturno",  el:"Terra",  d:"22 Dic – 20 Gen",k:["Ambizione","Disciplina","Resilienza","Struttura"],
  pietre:["Onice nero — resilienza e potere della struttura","Quarzo fumé — ancoraggio e purificazione delle energie dense","Tormalina nera — protezione assoluta e scudo","Ossidiana fiocco di neve — equilibrio tra luce e ombra"],
  oggetti:["⏱️ Orologio antico — il tempo è il tuo alleato","🪨 Pietra di montagna levigata — calma indistruttibile","🏺 Vaso in terracotta — contenitore del lavoro","📐 Squadra in legno — costruzione con precisione"]},
  acquario:  {n:"Acquario",  e:"♒",s:"🏺",p:"Urano",    el:"Aria",   d:"21 Gen – 19 Feb",k:["Innovazione","Originalità","Umanità","Libertà"],
  pietre:["Acquamarina — libertà e comunicazione autentica","Ametista — mente aperta e innovazione spirituale","Fluorite arcobaleno — espansione della coscienza","Angelite — connessione con dimensioni superiori"],
  oggetti:["∞ Simbolo dell'infinito in argento — oltre i confini","🔭 Piccolo telescopio — vedi ciò che altri non vedono","💫 Cristallo di quarzo rutilato — elettricità dell'anima","🌐 Globo di vetro — il mondo è casa tua"]},
  pesci:     {n:"Pesci",     e:"♓",s:"🐟",p:"Nettuno",  el:"Acqua",  d:"20 Feb – 20 Mar",k:["Intuizione","Compassione","Arte","Spiritualità"],
  pietre:["Acquamarina — purezza delle acque e connessione psichica","Ametista — protezione spirituale e sogni lucidi","Pietra di luna — intuizione e magia femminile","Kunzite — amore universale e apertura del cuore"],
  oggetti:["🐚 Conchiglia di nautilus — spirale della coscienza","🌊 Ampolla d'acqua di fonte sacra — purificazione","🪷 Fiore di loto in argento — illuminazione nel fango","🔮 Sfera di vetro azzurro — visione attraverso le acque"]}
},

zodcinese:{
  topo:     {n:"Topo",     e:"🐭",anni:"1912 · 1924 · 1936 · 1948 · 1960 · 1972 · 1984 · 1996 · 2008 · 2020",
  desc:"Intelligente, adattabile, carismatico e perspicace. Il Topo sa sempre trovare la strada, anche nel labirinto. Accumula risorse con intelligenza e trasforma le difficoltà in opportunità.",
  fortuna:"Viola · Blu marino · Nero",oggetto:"Formaggio d'oro — simbolo dell'abbondanza trovata nell'ingegno"},
  bue:      {n:"Bue",      e:"🐮",anni:"1913 · 1925 · 1937 · 1949 · 1961 · 1973 · 1985 · 1997 · 2009 · 2021",
  desc:"Laborioso, affidabile, determinato e paziente come la terra. Il Bue costruisce ciò che dura per generazioni. La sua forza non è nell'esplosione, ma nella costanza inesorabile.",
  fortuna:"Bianco · Giallo · Verde",oggetto:"Giogo dorato — il lavoro come via sacra"},
  tigre:    {n:"Tigre",    e:"🐯",anni:"1914 · 1926 · 1938 · 1950 · 1962 · 1974 · 1986 · 1998 · 2010 · 2022",
  desc:"Coraggiosa, carismatica, ribelle e magnetica. La Tigre non chiede il permesso — prende il suo posto nel mondo con grazia feroce. Nata per guidare, odia le catene.",
  fortuna:"Blu · Grigio · Arancione",oggetto:"Zampa di tigre in giada — coraggio e protezione"},
  coniglio: {n:"Coniglio", e:"🐰",anni:"1915 · 1927 · 1939 · 1951 · 1963 · 1975 · 1987 · 1999 · 2011 · 2023",
  desc:"Gentile, elegante, acuto e diplomatico. Il Coniglio vive nell'arte di creare armonia senza perdere la sua natura. Porta fortuna naturalmente, senza cercarla.",
  fortuna:"Rosa · Rosso · Viola",oggetto:"Coniglio di giada bianca — fortuna silenziosa"},
  drago:    {n:"Drago",    e:"🐲",anni:"1916 · 1928 · 1940 · 1952 · 1964 · 1976 · 1988 · 2000 · 2012 · 2024",
  desc:"Il più potente dello zodiaco cinese. Il Drago incarna la forza cosmica, la creatività divina e il destino eccezionale. Chi nasce Drago è qui per lasciare un segno impossibile da ignorare.",
  fortuna:"Oro · Argento · Verde imperiale",oggetto:"Drago in giada imperiale — potere e protezione celeste"},
  serpente: {n:"Serpente", e:"🐍",anni:"1917 · 1929 · 1941 · 1953 · 1965 · 1977 · 1989 · 2001 · 2013 · 2025",
  desc:"Saggio, intuitivo, misterioso e profondo. Il Serpente vede ciò che gli altri non vedono e sa quando agire e quando attendere. La sua saggezza nasce dal silenzio.",
  fortuna:"Nero · Rosso · Giallo",oggetto:"Serpente in giada — saggezza e rinnovamento ciclico"},
  cavallo:  {n:"Cavallo",  e:"🐴",anni:"1918 · 1930 · 1942 · 1954 · 1966 · 1978 · 1990 · 2002 · 2014 · 2026",
  desc:"Energico, libero, entusiasta e indipendente. Il Cavallo è nato per galoppare verso l'orizzonte. La sua forza è il movimento, la sua anima è la libertà.",
  fortuna:"Giallo · Verde · Viola",oggetto:"Ferro di cavallo dorato — velocità verso il successo"},
  capra:    {n:"Capra",    e:"🐐",anni:"1919 · 1931 · 1943 · 1955 · 1967 · 1979 · 1991 · 2003 · 2015 · 2027",
  desc:"Creativa, gentile, artistica e intuitiva. La Capra vive nel mondo della bellezza e della sensibilità. Trova il sacro nel quotidiano e trasforma il dolore in arte.",
  fortuna:"Verde · Rosso · Viola",oggetto:"Flauto di bambù — arte come medicina"},
  scimmia:  {n:"Scimmia",  e:"🐵",anni:"1920 · 1932 · 1944 · 1956 · 1968 · 1980 · 1992 · 2004 · 2016 · 2028",
  desc:"Brillante, ingegnosa, versatile e irresistibile. La Scimmia risolve in dieci minuti ciò che altri non risolverebbero in dieci giorni. Il suo talento è l'adattamento creativo.",
  fortuna:"Bianco · Blu · Oro",oggetto:"Peach — frutto dell'immortalità e dell'ingegno"},
  gallo:    {n:"Gallo",    e:"🐓",anni:"1921 · 1933 · 1945 · 1957 · 1969 · 1981 · 1993 · 2005 · 2017 · 2029",
  desc:"Osservatore, preciso, onesto e perfezionista. Il Gallo vede i dettagli che gli altri ignorano e non ha paura di dire la verità. La sua integrità è la sua vera corona.",
  fortuna:"Oro · Marrone · Giallo",oggetto:"Cresta dorata — fierezza e autenticità"},
  cane:     {n:"Cane",     e:"🐕",anni:"1922 · 1934 · 1946 · 1958 · 1970 · 1982 · 1994 · 2006 · 2018 · 2030",
  desc:"Leale, onesto, protettivo e giusto. Il Cane è il guardiano del tempio del cuore. Non tradisce chi ama, non abbandona chi protegge. La sua fedeltà è assoluta.",
  fortuna:"Verde · Rosso · Viola",oggetto:"Cane di ceramica — guardiano della soglia"},
  maiale:   {n:"Maiale",   e:"🐷",anni:"1923 · 1935 · 1947 · 1959 · 1971 · 1983 · 1995 · 2007 · 2019 · 2031",
  desc:"Generoso, sincero, fortunato e gioioso. Il Maiale porta abbondanza dove va — non per calcolo, ma per natura. La sua fortuna è genuina come il suo cuore.",
  fortuna:"Giallo · Grigio · Oro",oggetto:"Lingotto dorato — abbondanza che condivide"}
},

oroscopo:{
  ariete:{
  amore:["La fiamma di Marte ti brucia il petto in modo insolito: invece di inseguire, aspetta. Chi ti interessa lo sentirà e farà il primo passo, attratto dalla tua sicurezza silenziosa.", "Il coraggio è il tuo dono più seducente: di' ciò che senti senza filtri. Il partner ama quando cade la maschera e vede il guerriero con l'anima scoperta.", "Se sei single, gli incontri spontanei sono i più autentici: rinuncia ai piani e lascia che la vita ti sorprenda in un posto inaspettato — forse mentre corri, forse al supermercato.", "La gelosia è fuoco — governala con saggezza. Non bruciare ciò che hai costruito con una fiamma mal diretta verso chi ti ama.", "Un vecchio amore potrebbe riaffiorare: le stelle ti chiedono di riflettere se vuoi riaprire quella porta o chiuderla definitivamente con rispetto.", "La passione fisica è intensa, ma cerca la connessione emotiva: il corpo unisce momenti, ma è l'anima che trattiene le persone.", "L'Ariete in amore dà fino all'eccesso — oggi ricorda di ricevere, non solo dare. L'equilibrio nutre entrambi.", "Una conversazione banale si trasforma in qualcosa di inaspettatamente profondo: sii presente, stai per scoprire una verità importante su chi hai vicino.", "L'Ariete innamorato è travolgente: usa quella stessa energia per ascoltare oltre che per conquistare.", "Un momento di tenerezza inaspettata vale più di mille gesti plateali: abbraccia chi ami senza motivo.", "La velocità con cui vuoi tutto subito può spaventare: dai al legame il tempo di radicarsi nel profondo.", "Chi ama l'Ariete cerca anche la calma sotto la fiamma: mostragli quella parte silenziosa di te.", "Un messaggio scritto a mano, un fiore portato senza occasione: i gesti semplici parlano la lingua del cuore.", "L'intensità emotiva è il tuo dono: non smorzarla, ma imparare a dosarla con sensibilità.", "Se senti distanza con il partner, parla prima che il silenzio costruisca un muro invisibile.", "La passione nasce di continuo nell'Ariete: non darla per scontata, rinnovarla è un atto d'amore quotidiano.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["Marte ti dà la carica per quel progetto rimasto in standby. Il momento di agire è adesso: chi esita perde un'opportunità che difficilmente tornerà identica.", "La tua capacità di iniziare è leggendaria, ma oggi serve anche finire: dedica l'energia a completare ciò che hai avviato, non ad aprire nuovi cantieri.", "Un collega propone qualcosa che sembra allettante: valuta con attenzione prima di dire sì — non tutto ciò che brilla è oro.", "Lo spirito competitivo è un asset, ma oggi la collaborazione ti porta più lontano della rivalità: la squadra amplifica la tua forza.", "Periodo favorevole per mettersi in gioco davanti ai superiori: la tua energia naturale conquista chi ha il potere di farti avanzare.", "Un errore del passato torna alla luce: affrontalo con onestà invece di difenderti. La trasparenza ti salva sempre, la difensiva ti indebolisce.", "La carriera richiede strategia, non solo forza bruta: fermati un momento a pianificare il prossimo passo invece di caricare alla cieca.", "Nuove responsabilità si profilano: accettale come il segnale che gli altri si fidano di te — è riconoscimento, non fardello.", "La tua velocità di esecuzione è un vantaggio: usala per essere il primo a consegnare ciò che conta.", "Delega senza senso di colpa: non tutto richiede la tua presenza, alcune cose crescono meglio senza di te.", "Un'opportunità si chiude mentre un'altra si apre — tieni gli occhi sul futuro, non rimpiangere il passato.", "La creatività sotto pressione è il tuo punto di forza: trasforma la crisi in un trampolino.", "Impara il ritmo degli altri prima di guidarli: il leader migliore conosce le velocità del suo gruppo.", "Un'idea rivoluzionaria che hai da tempo merita di essere presentata: prepara il terreno e lancia.", "L'entusiasmo conta, ma la preparazione chiude i contratti: studia prima di entrare nella stanza.", "Costruisci ponti anche con chi ha ritmi diversi dai tuoi: la diversità di approcci rafforza il risultato.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["La testa e il viso sono zone sensibili per l'Ariete: attenzione agli sbalzi di temperatura e alle tensioni alla base del cranio.", "L'energia è alta ma la gestione è tutto: allenati senza esagerare, il corpo Ariete può andare in overdrive e poi crollare.", "Il movimento fisico è la tua medicina numero uno: anche una corsa di venti minuti trasforma una giornata difficile in una vittoria.", "Attenzione all'impazienza nei momenti di stanchezza: forzare quando sei a corto di energia porta a infortuni tipicamente Ariete.", "La mente Ariete ha bisogno di sfide costanti — se ti annoi, il corpo ne risente. Cerca attività che stimolino entrambe le dimensioni.", "Il ferro è il tuo minerale chiave: integra con legumi, carne rossa magra, verdure a foglia scura per sostenere la vitalità.", "Un momento di meditazione — anche solo cinque minuti — farà miracoli per la chiarezza mentale prima delle decisioni importanti.", "Ascolta i segnali del corpo prima che diventino sintomi: l'Ariete tende a ignorarli finché non diventano impossibili da ignorare.", "Il respiro rapido dell'Ariete in stress porta tensioni cervicali: rallenta il respiro e il collo si scioglie.", "Sport di combattimento, arrampicata, maratona: cerca sfide fisiche all'altezza della tua soglia di adrenalina.", "L'idratazione è spesso trascurata: bevi acqua prima di sentirti stanco — la stanchezza è già disidratazione.", "Il ferro è il tuo minerale di potere: controlla periodicamente i livelli e integra quando necessario.", "Cinque minuti di stretching mattutino trasformano la tua giornata più di qualsiasi caffeina.", "Il tuo sistema immunitario è forte ma si indebolisce con il sonno insufficiente: priorità al riposo notturno.", "Una passeggiata veloce di venti minuti scarica l'adrenalina e riequilibra il sistema nervoso.", "Riduci il consumo di cibi piccanti e stimolanti nei periodi di alta tensione: il fuoco interno basta.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 9. Il Rosso carminio ti protegge — indossalo nei momenti decisivi.", "L'audacia paga oggi: il rischio calcolato porta la ricompensa inaspettata. Non rimandare.", "La fortuna si nasconde negli incontri mattutini: sii aperto ai contatti nelle prime ore della giornata.", "Martedì e domenica sono i tuoi giorni di potere questa settimana: pianifica lì gli appuntamenti importanti.", "Una notizia che sembra difficile in superficie porta dentro di sé un'opportunità d'oro — approfondisci.", "Il numero 3 appare nelle tue situazioni fortunate: quando lo vedi ripetuto, agisci.", "La generosità attira l'abbondanza: dona senza calcolare e riceverai senza aspettarti.", "Porta con te qualcosa di rosso — è il colore di Marte, il tuo protettore planetario.", "Il coraggio è il tuo talismano più potente: agisci con audacia e la fortuna ti segue.", "Il colore rosso vivo in un accessorio oggi amplifica la tua energia marziana.", "Un inizio fatto di lunedì mattina porta i frutti migliori per l'Ariete.", "La fortuna ti sorride quando non stai cercando consenso: sii te stesso e attiri ciò che ti serve.", "Un numero 1 che ricorre nelle situazioni importanti è un segnale di via libera cosmico.", "Dona energia — un aiuto spontaneo, un entusiasmo condiviso — e la riceverai moltiplicata.", "Il momento migliore per iniziare qualcosa di nuovo è adesso: l'impulso del mattino non va sprecato.", "La fortuna dell'Ariete è nella velocità di risposta: chi esita perde, chi agisce vince.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  toro:{
  amore:["Venere, il tuo pianeta, oggi è in posizione favorevole: il fascino naturale è al massimo. Non fare nulla di forzato — il tuo carisma silenzioso parla per te.","La stabilità che offri è il dono più prezioso che un partner possa ricevere. Oggi il/la tua persona lo comprende più chiaramente del solito.","Se sei single, l'amore arriva attraverso i sensi: un profumo, una musica, un sapore inaspettato. Sii presente nel corpo, non nella testa.","La pazienza è la tua virtù cardinale in amore: non forzare ciò che ha bisogno di maturare. Il Toro sa aspettare come nessun altro segno.","Un gesto concreto vale più di mille parole: cucina qualcosa di speciale, ripara ciò che è rotto, mostra il tuo amore attraverso il fare quotidiano.","Attenzione alla possessività: tieni le dita strette ai ricordi, non alle persone. L'amore che non è libero non è amore — è controllo.","La sensualità è il tuo linguaggio d'amore naturale: il contatto fisico autentico sana, connette e rassicura più di qualsiasi parola.","Un ricordo romantico del passato torna: usalo come fonte d'ispirazione per il presente, non come specchio critico.","La stabilità del Toro è il dono più prezioso: chi sei nei momenti ordinari è ciò che conquista per sempre.","Un gesto sensoriale — un profumo scelto con cura, una musica che sa di voi — riaccende il legame.","La lentezza del Toro nell'aprirsi vale oro: chi aspetta con pazienza merita la tua fiducia totale.","Non aspettare l'occasione speciale per dire ciò che senti: l'amore quotidiano non ha bisogno di scenari.","La gelosia nasce dalla paura di perdere: parla di quella paura invece di manifestarla come controllo.","Un momento di silenzio condiviso può essere la forma di intimità più profonda che conosci.","Dai al partner lo spazio per crescere: l'amore maturo celebra l'indipendenza dell'altro.","La bellezza nei piccoli gesti quotidiani — il caffè portato, la coperta sistemata — è il tuo linguaggio d'amore.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["La costanza paga: quel progetto su cui lavori con dedizione mostra finalmente i primi frutti concreti. Non mollare proprio adesso.","Le finanze chiedono attenzione: un piccolo audit delle spese rivela dove i soldi si disperdono silenziosamente.","La tua reputazione di affidabilità è la miglior carta da visita — oggi qualcuno te la riconosce apertamente.","Periodo favorevole per tutto ciò che riguarda beni materiali, investimenti a lungo termine, acquisti importanti.","Un collega di lunga data può diventare un alleato strategico: coltiva quella relazione con la cura che sai mettere nelle cose importanti.","La resistenza al cambiamento potrebbe costarti un'opportunità: sii disposto a fare le cose in modo diverso. La flessibilità non è tradire se stessi.","Il lavoro manuale, artistico o legato alla natura ti ricarica più di qualsiasi vacanza: cercane un frammento anche oggi.","Una proposta finanziaria merita valutazione con i numeri alla mano, non di pancia — anche se l'intuito Toro è spesso giusto.","La tua resistenza al cambiamento è leggendaria, ma questa volta il cambiamento lavora per te: abbraccialo.","Un progetto a lungo termine richiede la tua qualità migliore: la perseveranza silenziosa che porta risultati.","Le finanze meritano una revisione seria: il Toro che controlla i numeri non ha sorprese.","Un'opportunità nel settore immobiliare, artistico o alimentare si allinea con la tua natura.","Non svalutare il tuo lavoro: chiedi ciò che vali senza scusarti per la qualità che offri.","La tua reputazione di affidabilità è il capitale più solido che possiedi: proteggerla vale qualsiasi fatica.","Un momento di aggiornamento professionale porta nuove prospettive al tuo approccio consolidato.","Il lavoro ben fatto è il tuo biglietto da visita: non hai bisogno di pubblicità quando i risultati parlano.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Gola, collo e tiroide sono le zone di attenzione del Toro: evita gli sbalzi termici e tieni il collo coperto nelle variazioni climatiche.","Il piacere del cibo è sacro per te, ma l'eccesso logora: assapora ogni boccone con consapevolezza invece di mangiare distratto.","Il contatto con la terra ti guarisce: giardinaggio, passeggiate scalzo sull'erba, lavoro con le mani nella natura — cerca questo oggi.","L'osteopatia, i massaggi cervicali e le cure olistiche sono particolarmente efficaci per te in questo periodo.","Costruisci l'abitudine all'esercizio fisico regolare: il corpo Toro risponde meglio alla costanza moderata che all'intensità sporadica.","Lo stress si scarica sulla mandibola e sul collo: se senti tensioni lì, è il segnale del corpo che chiede una pausa.","Dolci e carboidrati raffinati sono il tuo punto di vulnerabilità energetica: sceglili con consapevolezza.","Il riposo è produttivo: non sentirti in colpa se hai bisogno di rallentare — stai ricaricando le batterie per la prossima spinta.","La voce è lo specchio della tua salute emozionale: nota se è tesa, rauca o fioca — il corpo sta parlando.","Una passeggiata lenta in un posto bello fa più per il Toro di un'ora di palestra intensiva.","Il tatto è il tuo senso dominante: investire in un massaggio regolare è autocura, non lusso.","Mangiare in silenzio e con gratitudine trasforma il cibo in nutrimento vero, non solo in carburante.","La mandibola tesa è il segnale del Toro sotto stress: esercizi di rilassamento facciale aiutano moltissimo.","La natura come farmacia: erbe aromatiche, fiori di bach, aromaterapia — il Toro risponde a questi rimedi.","Il sonno tra le 22 e le 6 è il ciclo ottimale per la tua costituzione: proteggilo con rituali serali.","L'esposizione alla luce naturale mattutina regola i tuoi ritmi circadiani: inizia la giornata fuori, anche cinque minuti.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 6. Il Verde smeraldo ti porta abbondanza concreta.","Venere protegge le tue iniziative pratiche: agisci su ciò che vuoi costruire materialmente.","Un oggetto di valore sentimentale porta fortuna speciale questa settimana: tienilo vicino.","Il venerdì è il tuo giorno di potere: pianifica gli appuntamenti più importanti in quel giorno.","La fortuna arriva attraverso la pazienza: non forzare i tempi, l'universo ha il suo orologio.","Un consiglio di chi ha più esperienza vale oro in questo momento: ascolta con umiltà.","I colori rosa e verde ti attraggono l'armonia: usali nell'ambiente che abiti quotidianamente.","La gratitudine per la bellezza quotidiana apre canali di abbondanza che la ricerca ossessiva chiude.","Il venerdì di Venere è il tuo giorno di maggiore potere: usalo per ciò che conta davvero.","Un oggetto di pietra naturale — giada, malachite, quarzo rosa — porta equilibrio nella tua settimana.","La fortuna del Toro si manifesta con pazienza: non affrettare il raccolto, la stagione ha i suoi tempi.","Investire in qualcosa di bello e duraturo oggi porta ritorno domani: la qualità paga sempre.","Il numero 6 e i multipli di 6 ricorrono nelle tue situazioni più fortunate.","Un contatto con la terra — letteralmente — ricarica la tua fortuna: metti i piedi nell'erba o nella sabbia.","La semplicità è il tuo magnete di abbondanza: più sei autentico, più attrai ciò che ti appartiene.","La bellezza che crei intorno a te richiama bellezza dall'esterno: cura l'ambiente che abiti.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  gemelli:{
  amore:["La comunicazione è il tuo superpotere romantico: una conversazione sincera e giocosa apre più porte di qualsiasi cena a lume di candela.","La curiosità per il mondo del partner è il miglior afrodisiaco: chiedi, ascolta, stupisciti. L'interesse genuino conquista più della perfezione.","Se sei single, l'incontro arriva dove meno te lo aspetti: un commento online, un gruppo di lettura, una conferenza su un tema che ami.","Attenzione alla dispersione emotiva: il Gemelli a volte butta tante esche senza voler pescare davvero. Chiediti cosa vuoi veramente.","La varietà mantiene viva la passione: sorprendi il partner con qualcosa di completamente inaspettato — un'idea bizzarra, un viaggio improvvisato.","Un malinteso si risolve solo parlando — non con i messaggi, ma voce a voce. Chiedi un incontro invece di scrivere.","L'intesa mentale è più importante di quella fisica per te: cerca un partner con cui condividere idee, libri, visioni del mondo.","La leggerezza è il tuo regalo più prezioso: porta il sorriso dove c'è peso, e le persone ti ameranno per questo dono.","Il doppio volto del Gemelli non è falsità — è ricchezza: mostra entrambe le tue dimensioni a chi ami.","Un gioco di parole, un messaggio inaspettatamente poetico, un invito bizzarro: il tuo amore è scintillante.","La noia è il tuo nemico romantico: porta sempre qualcosa di nuovo nel rapporto per tenere viva la fiamma.","Ascoltare con la stessa attenzione con cui parli è il più grande gesto d'amore che puoi fare.","La connessione mentale profonda con il partner vale per te più di qualsiasi altra forma di intesa.","Un momento di sincerità totale — senza battute, senza ironia — avvicina più di cento conversazioni brillanti.","Se sei in coppia da tempo, sorprendi con una versione di te che il partner non ha ancora incontrato.","L'amore del Gemelli è un dono raro: porta luce, intelligenza e gioia — non dimenticarlo quando ti sembra di deludere.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["Le idee innovative ti arrivano a raffica: annota tutto, poi scegli la migliore e focalizzati su quella sola con disciplina.","Il networking è la tua abilità segreta: una conversazione casuale oggi può aprire una porta che inseguivi da mesi.","La comunicazione scritta è al top: invia quell'email importante, pubblica quel contenuto, presenta quel progetto con sicurezza.","Periodo favorevole per corsi, workshop, formazione professionale: la mente Gemelli assorbe come una spugna in questo momento.","Il multitasking è il tuo stile, ma oggi la profondità su una cosa sola porta risultati migliori della superficie su mille.","Attenzione alle distrazioni digitali: crea slot di focus senza notifiche e la produttività triplica.","Un progetto creativo che unisce parole, idee e connessioni è il tuo ambiente naturale: proponilo, il timing è favorevole.","La flessibilità ti distingue: adattarti ai cambiamenti invece di resistere ti fa avanzare dove gli altri si bloccano.","La tua capacità di adattamento è la tua risorsa segreta in momenti di cambiamento rapido.","Un progetto che unisce scrittura, insegnamento, comunicazione o media è dove esprimi il massimo.","Smettila di sottostimarti nelle presentazioni: parli come nessun altro e il tuo pubblico lo sa.","Il multitasking ha un costo: oggi scegli tre cose da fare bene invece di dieci da fare male.","Un collega che ti stimola intellettualmente è prezioso: coltiva quella relazione professionale.","La chiarezza nella comunicazione scritta evita la metà dei problemi: rileggi prima di inviare.","Un corso breve, un libro tecnico, una masterclass online: la tua mente assorbe e cresce con voracità.","La versatilità ti rende prezioso in team interdisciplinari: proponiti per progetti che richiedono connessioni creative.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Il sistema nervoso Gemelli è potente ma fragile: la sovrastimolazione cronica esaurisce senza che te ne accorga — fino a quando è troppo tardi.","Mani, polmoni e spalle sono le tue zone sensibili: stretching delle braccia, respirazione profonda, aria fresca quotidiana.","La meditazione non è per te nella forma classica — prova il movimento meditativo: yoga, tai chi, camminata consapevole nel verde.","Il sonno è il reset del tuo processore mentale: senza 7-8 ore, il Gemelli funziona al 40% e lo sa.","La scrittura terapeutica scarica la mente che non si ferma mai: dieci minuti di journaling la sera fanno miracoli autentici.","Limita i social media a slot precisi: l'infinito scroll satura la mente Gemelli più di qualsiasi sforzo fisico.","La varietà nell'alimentazione soddisfa anche il palato curioso: esplora cucine diverse, sperimenta ricette nuove.","Un esame preventivo rimandato: schedulalo questa settimana. La salute non aspetta.","Il sistema nervoso è la tua sede di vulnerabilità: tecniche di rilassamento rapido sono investimenti reali.","Le mani e le braccia del Gemelli si stancano con il lavoro al computer: pausa e stretching ogni ora.","Il respiro diaframmatico trasforma l'ansia in chiarezza: tre minuti di pratica cambiano l'intera mattinata.","La varietà nell'alimentazione soddisfa anche il palato curioso del Gemelli: esplora, sperimenta, assaggia.","Limitare la caffeina nelle ore pomeridiane protegge la qualità del sonno e dell'umore.","Un'attività fisica con musica — danza, zumba, spinning — tiene la mente del Gemelli impegnata e felice.","La scrittura a mano — un diario, una lista — ancora la mente volante del Gemelli alla realtà presente.","Il ridere è il tuo farmaco più economico e disponibile: cercalo ogni giorno senza vergogna.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 5. Il Giallo sole attira la tua energia.","Mercurio favorisce gli scambi e le comunicazioni: ciò che dici oggi ha peso speciale.","Un libro, un podcast, un articolo: dentro c'è un messaggio che stavi aspettando.","Il mercoledì è il tuo giorno di potere — pianifica gli appuntamenti importanti lì.","La fortuna arriva attraverso le connessioni: quella persona che non senti da mesi potrebbe sorprenderti.","Un viaggio breve o un cambio di scenario porta nuova ispirazione e nuove opportunità concrete.","Colori fortunati: giallo, arancione, turchese — usali quando vuoi comunicare con efficacia.","La curiosità è la tua bussola magica: ciò che ti attira inspiegabilmente potrebbe contenere la risposta.","Un gemello incontrato per caso porta messaggi doppi: presta attenzione alle coincidenze in coppia.","Il numero 5 e le doppie cifre identiche (11, 22, 33) sono i tuoi segnali di via libera.","Il mercoledì di Mercurio è il tuo giorno di potere: le comunicazioni importanti fluiscono meglio.","Un libro trovato per caso in una libreria contiene la risposta che cercavi.","Colori fortunati per te oggi: giallo mango e azzurro cielo — portali con te in modo sottile.","La fortuna del Gemelli arriva attraverso le parole: ciò che dici con intenzione si manifesta più velocemente.","Un viaggio breve — anche solo in un quartiere nuovo della tua città — porta la svolta inaspettata.","La rete è il tuo patrimonio: ogni connessione coltivata oggi è un seme che germoglierà al momento giusto.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  cancro:{
  amore:["La Luna illumina il tuo cuore: le emozioni sono intense e vere. Condividile con chi ami senza difese — la vulnerabilità è coraggio.","La protezione e la cura sono il tuo linguaggio d'amore naturale: oggi qualcuno nella tua vita ha bisogno esattamente di questo.","Se sei single, l'ambiente familiare o gli amici di vecchia data possono presentarti qualcuno di davvero speciale — spesso l'amore è già vicino.","Attenzione alla sensibilità: non tutto ciò che viene detto è un attacco. Distingui la critica costruttiva dal giudizio reale.","Il nido domestico è il tempio della coppia: crea un'atmosfera calda e accogliente e la magia si rigenera da sola.","La vulnerabilità è coraggio autentico: mostrati per quello che sei, senza maschere. Chi ti ama apprezzerà quella verità.","Un sogno ricorrente potrebbe contenere messaggi importanti sulla tua vita amorosa: annotalo al risveglio e meditaci.","La nostalgia può essere dolce, ma il presente è dove vive il vero amore: sii qui, adesso, con chi hai scelto.","Il tuo istinto affettivo è sempre corretto: fidati di ciò che senti senza cercare conferma razionale.","Creare un ricordo insieme — una ricetta preparata, un posto visitato — è il tuo modo di dichiarare amore.","La sensibilità del Cancro è un dono: non irrigidirti per proteggerti — l'apertura è il tuo vero potere.","Se senti di aver dato troppo senza ricevere, dillo con delicatezza: il bisogno è umano e legittimo.","Un abbraccio lungo e silenzioso vale più di qualsiasi conversazione terapeutica.","La famiglia d'elezione che costruisci è la tua opera d'arte più bella: custodiscila.","La nostalgia può essere dolce, ma il partner che hai ora merita la tua presenza piena e presente.","Il tuo modo di prenderti cura degli altri è unico: assicurati che qualcuno si prenda anche cura di te.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["L'empatia è il tuo asset professionale invisibile: sai leggere le dinamiche del gruppo e navigarle con una maestria che nessun corso insegna.","Progetti legati alla casa, alla famiglia, al cibo, alla cura degli altri ti trovano al massimo delle tue capacità.","La memoria dettagliata e l'attenzione alle persone sono i tuoi punti di forza: usali per eccellere dove gli altri non arrivano.","Periodo favorevole per le collaborazioni fondate sulla fiducia reciproca: costruisci ponti invece di muri.","Non caricarti di responsabilità altrui per sentirti indispensabile: impara il confine sacro tra aiutare e fare per gli altri.","Un feedback che arriva oggi, per quanto difficile da ascoltare, è un dono: accoglilo con apertura.","La sicurezza emotiva influenza la performance: crea rituali che ti fanno sentire protetto prima di affrontare le sfide.","Il lavoro da casa o in ambienti familiari ti ispira e ti rende più produttivo: organizza il tuo spazio con intenzione.","Il tuo senso del team è leggendario: sei quello che unisce, che ricorda i compleanni, che tiene il morale.","La memoria storica che porti nelle organizzazioni è preziosa: chi ti ha prima era sciocco a non capirlo.","Un progetto legato alla cura, all'educazione, al benessere o alla casa trova in te il campione ideale.","L'intuito sulle persone è il tuo radar professionale più affidabile: quando qualcosa non torna, credici.","Impara a separare il lavoro dalle emozioni: la professionalità non significa non sentire — significa non lasciarsi sopraffare.","La costanza del Cancro porta risultati dove gli altri si stancano: vai avanti anche nei giorni grigi.","Un'opportunità legata alla memoria, alla tradizione o alla cultura familiare si apre per te.","Costruisci un ambiente di lavoro che si senta come casa: la comfort zone produttiva è la tua condizione ideale.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Lo stomaco del Cancro parla il linguaggio delle emozioni: quando sei in ansia, mangia con calma e cibi leggeri.","L'acqua è il tuo elemento guaritore: bagni caldi, nuoto, soggiorni al mare, idratazione abbondante.","Il riposo emotivo è importante quanto quello fisico: concediti momenti di solitudine rigenerante senza sensi di colpa.","La Luna influenza i tuoi cicli d'energia: impara a conoscerli e rispettali invece di forzarli.","Il petto e le vie respiratorie sono zone sensibili: attenzione ai cambi di stagione e agli ambienti umidi.","La meditazione guidata e le visualizzazioni positive sono strumenti straordinariamente efficaci per te.","Il contatto con l'acqua — anche solo una fontana, un lago — ha un effetto calmante immediato sulla mente.","Cibo preparato con amore nutre in modo diverso dal cibo consumato di fretta: scegli la qualità della presenza.","La pancia del Cancro è il suo diario emotivo: quando l'intestino protesta, guarda le emozioni non dette.","L'acqua del bagno serale con sali aromatici purifica corpo e aura in modo che il Cancro sente fisicamente.","Imparare a dire no alle richieste eccessive è la forma di salute più urgente per il tuo segno.","Il sonno prima di mezzanotte ha per te un valore rigenerativo doppio: proteggilo come un tesoro.","Il cibo preparato con amore da qualcuno che ti vuole bene ha un effetto terapeutico reale.","La meditazione lunare — fuori al chiaro di luna, anche cinque minuti — ricarica la tua energia in modo speciale.","Attenzione alla ritenzione idrica nei periodi di stress: bere acqua tiepida con limone aiuta moltissimo.","Crea un angolo della casa dedicato solo a te: un posto dove non sei figlio, genitore, partner — solo tu.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 2. L'Argento e il Bianco perla ti proteggono.","Il lunedì è il tuo giorno di potere: la Luna ti sostiene in questo giorno della settimana.","Un sogno vivido contiene un messaggio di fortuna: annotalo al risveglio e meditaci.","La fortuna arriva attraverso la cura genuina: quando aiuti qualcuno con cuore, l'universo ti rimanda il favore moltiplicato.","Un oggetto legato all'infanzia o alla famiglia porta fortuna speciale: tienilo vicino questa settimana.","Il momento migliore per decisioni importanti è la sera, quando l'intuizione si fa più nitida.","I colori bianco, argento e azzurro lunare attirano protezione nei momenti di incertezza.","La gratitudine verso chi ti ha amato apre porte che nemmeno sapevi esistessero.","La luna piena è il tuo momento di massima fortuna: fai richieste all'universo in quelle notti.","Il bianco e l'argento sono i tuoi colori di protezione questa settimana: usali con intenzione.","La casa è il centro della tua fortuna: investire nell'ambiente domestico porta risonanza positiva.","Un sogno con l'acqua è un messaggio di abbondanza in arrivo: annotalo appena ti svegli.","Il numero 2 e i numeri pari ricorrono nelle tue situazioni di fortuna maggiore.","La fortuna del Cancro si manifesta attraverso le relazioni: chi ti vuole bene ti porta opportunità.","Accendere una candela bianca lunedì sera con un'intenzione chiara amplifica il tuo campo magnetico.","La gratitudine rivolta alla famiglia — anche a quella difficile — libera energia bloccata e apre nuove strade.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  leone:{
  amore:["Il Sole ti illumina dall'interno: il tuo carisma oggi è magnetico. Non cercare l'amore — lascia che venga a te con naturalezza.","La generosità è il tuo linguaggio d'amore: gesti grandiosi, attenzioni spettacolari, presenza totale. Chi ti ama si sente al centro del mondo.","Se sei single, gli eventi creativi, teatrali, artistici o mondani sono il tuo terreno naturale di incontri memorabili.","Attenzione all'ego in amore: a volte il Leone vuole essere amato più di quanto ami. Trovare l'equilibrio è la vera vittoria.","Sorprendi il partner con qualcosa che metta in mostra il suo valore: fallo sentire speciale di fronte agli altri.","La fedeltà è il tuo valore cardinale: dai e pretendi lealtà assoluta. Nulla di meno è accettabile per te.","Un momento di vulnerabilità genuina rafforza il legame più di cento performances: abbassa la guardia con chi ami.","La passione del Leone brucia se non trova il giusto canale: indirizzala verso la creatività condivisa.","Il tuo cuore è enorme: impara a ricevere con la stessa grandezza con cui sai dare.","La cura dei dettagli sentimentali conquista più dei gesti grandiosi: ricorda le piccole cose.","Un partner che ti sfida intellettualmente e ti sorprende è ciò di cui il Leone ha bisogno per restare acceso.","L'amore del Leone è leale per natura: chi ha la tua lealtà ha un tesoro che pochi sanno valutare.","Mostrare le insicurezze al partner non è debolezza: è l'atto di coraggio più autentico che puoi fare.","La gelosia sotto controllo è passione; quella fuori controllo è controllo — conosci la differenza.","Un atto romantico con un pubblico, anche piccolo, fa brillare il Leone: organizza qualcosa di memorabile.","La fedeltà che dai merita fedeltà in cambio: non scendere a compromessi su questo valore fondamentale.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["Il riconoscimento pubblico è il tuo carburante: oggi potresti ricevere la visibilità che meriti e aspetti da tempo.","La tua naturale leadership ispira gli altri: non nasconderla per falsa modestia — usala per elevare il gruppo.","Creatività e performance sono i tuoi punti di forza professionali: portali in ogni progetto senza trattenerti.","Attenzione all'autoreferenzialità: ascolta i colleghi prima di partire con le tue idee. L'input altrui vale oro.","Periodo favorevole per presentazioni, discorsi pubblici, vendite, negoziazioni: sei al massimo della tua eloquenza.","Un progetto artistico o creativo richiede il tuo contributo speciale: non sottovalutare l'impatto che hai sugli altri.","La leadership benevola include saper riconoscere i meriti altrui: fallo oggi e costruirai alleanze durature.","Le ambizioni sono giuste — assicurati che siano allineate con i tuoi valori profondi, non solo con l'orgoglio.","Il tuo talento di ispirare gli altri è il tuo valore professionale più alto: coltivalo consapevolmente.","Un palcoscenico — metaforico o letterale — amplifica il tuo impatto: cerca visibilità con strategia.","La cura della reputazione è per il Leone fondamentale: ogni azione professionale è un biglietto da visita.","Delega con fiducia: crescere significa lasciare che gli altri facciano parti del lavoro a modo loro.","L'orgoglio è un'arma a doppio taglio: usalo come standard di qualità, non come difesa dall'umiltà.","Riconoscere il lavoro degli altri ad alta voce è un atto di leadership che ti fa crescere ulteriormente.","Un progetto artistico, creativo o legato alla performance è dove porti il tuo contributo unico al mondo.","Il carisma naturale apre le porte, ma la sostanza le tiene aperte: assicurati di avere entrambi.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Il cuore è l'organo del Leone — metaforicamente e fisicamente: prenditi cura di lui con movimento aerobico regolare.","La vitalità è naturale, ma non invincibile: anche il Leone più forte ha bisogno di recupero sincero.","L'attività fisica con un elemento competitivo o performativo ti motiva più di qualsiasi routine monotona.","La schiena è spesso tesa nei momenti di stress: stretching quotidiano della colonna è fondamentale.","Il calore del sole è il tuo alimento naturale: cerca la luce quando le energie calano inspiegabilmente.","L'eccesso di orgoglio può farti ignorare i sintomi: quando il corpo parla, ascolta prima che urli.","La vitamina D e il magnesio sono i tuoi alleati in questo periodo: verifica i livelli con un esame.","Crea rituali di autocura regali: il bagno profumato, il massaggio, la notte in un bel posto. Lo meriti davvero.","Il cuore del Leone merita cure regolari: cardio moderato, controlli periodici, gestione dello stress.","La schiena porta il peso della corona: yoga e stretching dorsale sono la tua pratica di mantenimento.","L'esposizione regolare alla luce solare è per il Leone una necessità vitale, non un capriccio.","Il magnesio aiuta la schiena tesa e il cuore stressato: un'integrazione leggera può fare la differenza.","Il divertimento è medicina reale: pianifica attività che portino gioia pura senza scopo produttivo.","Attenzione all'eccesso di stimolanti: caffè, zuccheri, schermi — il tuo sistema nervoso li sente molto.","Uno sport che abbia un elemento di spettacolo o gara ti motiva molto più di uno solitario.","La cura estetica di sé — che per il Leone è naturale — nutre l'autostima in modo reale e salutare.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 1. Il Giallo oro ti porta potere e visibilità.","Il Sole protegge le tue iniziative: agisci la domenica, il tuo giorno di potere.","La generosità attira la fortuna: dona senza calcolare e l'universo restituisce amplificato.","Un incontro con qualcuno di influente può cambiare il corso della tua storia: sii aperto.","Il leone del tuo spirito ruggisce più forte in questo periodo: fidati della tua visione.","Colori fortunati: giallo, oro, arancione. Indossali nei momenti chiave della giornata.","Il riconoscimento che aspettavi sta arrivando: sii pronto a riceverlo con grazia, non con sorpresa.","Un atto creativo fatto con passione pura diventa catalizzatore di sincronicità positive.","La domenica del Sole è il tuo giorno di massima potenza: usala per le decisioni più importanti.","Il colore giallo oro in un dettaglio dell'abbigliamento attiva il tuo campo magnetico.","La fortuna del Leone si esprime quando sei sul palco: mostrati, parla, crea — non nasconderti.","Un numero 1 che si ripete in situazioni importanti è il tuo segnale cosmico di avanzata.","Fare un regalo bello a qualcuno — senza motivo — attiva il tuo ciclo di abbondanza.","La fortuna arriva attraverso la creatività: un'opera fatta con passione apre porte inaspettate.","La fiducia nella tua visione non è arroganza — è la condizione per attirare ciò che meriti.","Un incontro con qualcuno che ammiri porta spunti che cambieranno la traiettoria della tua settimana.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  vergine:{
  amore:["La Vergine ama attraverso i gesti concreti: riparare ciò che è rotto, ricordare i dettagli, essere presente quando conta — questo è amore puro.","Oggi lascia da parte l'analisi e lascia che le emozioni fluiscano senza catalogarle — l'amore non si ottimizza, si abita.","Se sei single, gli incontri nascono dalla condivisione di interessi pratici: corsi, volontariato, ambienti di lavoro con valori comuni.","La perfezione è il nemico dell'amore: nessun partner sarà mai all'altezza degli standard ideali. Impara ad amare l'imperfetto.","Mostra la cura in modo più esplicito — il partner non sempre riesce a leggere il linguaggio dei tuoi gesti.","L'autocritica si riversa sulla coppia: quando sei duro con te stesso, diventi critico con l'altro. Nota questo meccanismo.","La fiducia si costruisce lentamente per la Vergine, ma una volta concessa è per sempre — e questo è un dono enorme.","Dedica una serata senza pianificazione: lascia che sia l'impulso a guidare, non l'agenda.","Il tuo amore si esprime nell'attenzione ai bisogni dell'altro: oggi mostralo con un gesto concreto e silenzioso.","Non aspettarti che il partner legga nella tua mente: la Vergine deve imparare a chiedere ciò che vuole.","La critica, anche costruttiva, ferisce: scegli il momento e il tono con la cura che metti in ogni cosa.","Un atto di imperfezione condiviso — una ricetta andata storta, un piano cambiato — avvicina più della perfezione.","Il partner non è un sistema da ottimizzare: amalo così com'è, imperfezioni incluse.","La fedeltà silenziosa della Vergine è un dono immensurabile: chi la riceve dovrebbe saperlo.","Mostra la tua vulnerabilità almeno una volta oggi: abbassa le difese e guarda cosa succede.","La Vergine in amore dà il meglio: assicurati che il partner lo sappia e te lo riconosca apertamente.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["La precisione della Vergine produce lavori impeccabili: oggi potresti finire qualcosa che altri avrebbero tralasciato a metà.","L'analisi è il tuo superpotere: dove gli altri vedono confusione, tu vedi pattern e soluzioni eleganti.","Periodo favorevole per tutto ciò che riguarda la salute, l'alimentazione, i servizi e la cura degli altri.","Attenzione al perfezionismo paralizzante: fatto è meglio di perfetto. Pubblica, consegna, invia — poi migliora.","Un collega beneficia enormemente del tuo aiuto: offrirlo senza che venga chiesto rafforza il tuo valore percepito.","Il lavoro di ricerca, scrittura tecnica, editing, analisi è dove eccelli — rivendicalo senza timidezza.","Le finanze meritano un'analisi seria: la Vergine sa dove guardare per trovare le perdite nascoste.","Nuovi strumenti o metodologie innovative meritano la tua attenzione: investi nel miglioramento continuo.","La tua attenzione ai dettagli salva progetti che gli altri avrebbero mandato in crisi: non sottovalutarla.","Il metodo è il tuo superpotere professionale: sistematizza ciò che fai e la produttività triplica.","Un'analisi approfondita rivela l'errore nascosto che stava rallentando tutto: il tuo occhio clinico vale.","Impara a presentare il tuo lavoro con la stessa cura con cui lo fai: la visibilità è parte del valore.","Delega i compiti che non richiedono la tua precisione: libera energie per il lavoro di eccellenza.","Un progetto legato alla salute, alla nutrizione, all'ambiente o all'organizzazione è il tuo habitat.","La gratitudine per il tuo contributo arriva: sii pronto a riceverla senza minimizzare.","L'aggiornamento professionale continuo è la tua forma naturale di crescita: investici senza sensi di colpa.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Il sistema digestivo è il specchio della Vergine: mangia con calma, mastica bene, scegli cibi naturali e non processati.","L'ansia da prestazione si accumula nell'intestino: probiotici e fermenti lattici sono i tuoi alleati silenziosi.","Crea routine di salute rigide quanto basta ma flessibili quando serve: il corpo non è una macchina da ottimizzare.","La meditazione analitica — mindfulness con attenzione ai dettagli del momento presente — funziona bene per te.","L'attività fisica preferita: yoga, pilates, escursionismo — tutto ciò che unisce mente e corpo con precisione.","Attenzione all'autocura: la Vergine si prende cura di tutti tranne che di se stessa. Cambia questa abitudine profonda.","Un check-up di routine rimandato: schedulalo. La Vergine che fa prevenzione è la Vergine che vive meglio.","Il riposo non è pigrizia: è la base della produttività sostenibile. Permettiti di non fare nulla ogni tanto.","L'intestino della Vergine è il termometro dell'anima: quando va fuori equilibrio, guarda cosa hai ingerito emotivamente.","La microbiota intestinale risponde bene ai tuoi rituali di cura: fermenti, fibra, idratazione costante.","Un'app per tracciare sonno e alimentazione soddisfa il tuo bisogno di dati e migliora il benessere.","La critica che rivolgi al tuo corpo è il danno più costante che fai alla tua salute: scegli la gentilezza.","L'ambiente clinicamente ordinato non è ossessione — è la condizione in cui il tuo sistema nervoso si tranquillizza.","Mindfulness applicata: mangiare senza distrazioni, camminare senza telefono, ascoltare senza analizzare.","La prevenzione è la tua medicina prediletta: check-up regolari, analisi annuali, odontoiatria preventiva.","Il contatto con erbe aromatiche e rimedi naturali nutre la Vergine in modo che la chimica non raggiunge.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 6. Il Verde salvia e il Marrone terra ti portano stabilità.","Mercurio favorisce i dettagli: quell'errore piccolo che noti potrebbe salvarti da uno grande.","Il mercoledì è il tuo giorno di potere: pianifica le attività importanti allora.","La fortuna si nasconde nel lavoro ben fatto: ogni compito svolto con cura porta il suo frutto preciso.","Un'analisi attenta rivela un'opportunità che chi cerca a colpo d'occhio non vede.","La salute è fortuna: investi in essa e tutte le altre aree della vita ne beneficiano.","Colori fortunati: verde, marrone, beige naturale — eleganza sobria che attira rispetto.","La gratitudine per la perfezione nei dettagli della vita quotidiana apre occhi nuovi.","La fortuna della Vergine si trova nel dettaglio: quell'errore piccolo che solo tu vedi ti porterà riconoscimento.","Il mercoledì di Mercurio è il tuo giorno di potere per comunicazioni e analisi importanti.","Il verde salvia e il marrone terra sono i colori che attraggono la tua fortuna materiale.","La fortuna arriva attraverso il servizio: aiutare qualcuno con le tue competenze apre porte insospettabili.","Un libro tecnico o un manuale trovato per caso contiene una risposta che cercavi da settimane.","Il numero 6 ricorre nelle tue situazioni di svolta professionale: presta attenzione quando appare.","La gratitudine per il tuo lavoro quotidiano — anche quello invisibile — amplifica il tuo campo di fortuna.","Un atto di ordine e pulizia nell'ambiente che abiti libera energie bloccate e attira nuove opportunità.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  bilancia:{
  amore:["Venere ti regala grazia e armonia: oggi sei al tuo meglio nella relazione. Usa questo momento per riavvicinarti a chi ami.","La diplomazia è il tuo dono, ma oggi l'onestà diretta serve di più: di' quello che pensi davvero invece di mediare.","Se sei single, i luoghi belli e curati — musei, gallerie, ristoranti raffinati — sono dove trovi la tua anima gemella.","L'indecisione in amore ti logora più di una scelta sbagliata: scegli e poi correggi il tiro se necessario.","L'estetica conta per la Bilancia: cura l'ambiente degli incontri, accendete una candela, mettete musica.","L'equilibrio tra dare e ricevere è fondamentale: se senti di dare sempre senza ricevere, è tempo di dirlo.","Il partner ha bisogno di sentire che sei dalla sua parte: mostralo apertamente oggi, senza mezze misure.","Un momento di bellezza condivisa — un tramonto, un museo, una buona musica — rafforza il legame più di qualsiasi analisi.","L'armonia che cerchi nelle relazioni inizia dentro di te: equilibrati prima e poi osserva il cambiamento.","Un gesto estetico condiviso — una mostra visitata, una cena curata — riaccende la connessione.","La diplomazia è una virtù, ma l'onestà è fondamentale: di' la tua verità con eleganza, non tacerla.","L'indecisione cronica in amore nasce dalla paura di sbagliare: scegli e aggiusta il tiro se necessario.","Il partner ha bisogno di sentire che sei dalla sua parte in modo dichiarato, non solo implicito.","Un momento di disaccordo risolto con grazia rafforza il legame più di mille momenti di accordo facile.","La Bilancia innamorata è generosa: assicurati di non esaurirti dando tutto senza ricaricarti.","La bellezza condivisa — un tramonto, una candela, una buona musica — è il tuo rituale d'amore più potente.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["La diplomazia della Bilancia è un asset raro: sei il mediatore naturale nei conflitti, quello che porta pace senza perdere la sostanza.","Periodo favorevole per trattative, contratti, collaborazioni: il tuo senso dell'equità chiude gli accordi.","L'estetica influenza la produttività: cura l'ambiente di lavoro, la scrivania ordinata, i colori armonici.","Attenzione alla procrastinazione nata dall'indecisione: usa un timer di 25 minuti per iniziare — poi la inerzia ti porta avanti.","Un progetto legato all'arte, al design, alla moda, alla giustizia o alle relazioni pubbliche è il tuo terreno naturale.","Il tuo senso del giusto è una guida affidabile: fidati di esso quando le decisioni sono eticamente complesse.","La concretezza batte la perfezione teorica: metti in pratica il piano che esiste nella tua testa invece di perfezionarlo all'infinito.","Equilibra le relazioni professionali: non investire tutto in un solo alleato — costruisci una rete diversificata.","La tua capacità di vedere entrambi i lati è rara in contesti dove tutti prendono partito: valorizzala.","Un ruolo di mediazione, coaching o consulenza è dove il tuo talento naturale porta i risultati massimi.","La cura dell'ambiente lavorativo — colori, ordine, armonia — aumenta la tua produttività in modo misurabile.","Un accordo che sembrava bloccato si sblocca con la tua presenza: porta quella capacità al tavolo.","Attenzione alla procrastinazione da perfezionismo: fatto oggi bene batte perfetto mai consegnato.","Le relazioni professionali coltivate con costanza sono il tuo investimento a lungo termine più redditizio.","La tua estetica raffinata è un asset in settori come design, moda, comunicazione, lusso, diritto.","Un progetto che unisce giustizia, bellezza e relazioni umane è il terreno dove fiorisce il tuo talento.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["I reni e la zona lombare sono le aree di attenzione della Bilancia: idratati bene e stiracchia la schiena ogni ora di lavoro sedentario.","L'equilibrio fisico riflette quello emotivo: quando sei in conflitto interiore, il corpo va fuori asse.","Lo yoga è la tua pratica ideale: unisce equilibrio, estetica, filosofia — tutti elementi che ami profondamente.","Attenzione ai dolci: la Bilancia tende a cercare dolcezza nel cibo quando manca nelle relazioni.","La pace interiore si costruisce con piccole scelte quotidiane: un pasto sano, un respiro consapevole, cinque minuti di silenzio.","Il massaggio ai piedi e alla zona lombare porta benefici immediati: cercalo regolarmente.","L'ambiente estetico influenza il benessere: fiori freschi, musica armoniosa, luce naturale sono medicine reali.","Ritaglia del tempo per la bellezza: visitare una mostra, ascoltare musica dal vivo — è autocura, non lusso.","I reni della Bilancia risentono dello stress relazionale: tè alle erbe, acqua abbondante, meno sale.","L'equilibrio fisico parla dell'equilibrio interiore: pilates e yoga della Bilancia — esercizi di simmetria.","Quando prendi decisioni difficili il tuo sistema nervoso si sovraccarica: crea rituali di scarico post-decisione.","La dolcezza cercata nel cibo nei momenti di tensione è un segnale: cosa ti manca nelle relazioni?","Un massaggio agli archi plantari scarica le tensioni che la Bilancia accumula nel portamento.","La luce naturale e i colori pastello nel tuo ambiente sono una medicina estetica reale.","La danza e il movimento fluido sono le tue pratiche fisiche più efficaci e naturali.","Creare bellezza — anche solo un tavolo apparecchiato con cura — è una pratica di benessere reale.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 7. Il Rosa cipria e l'Azzurro pallido ti portano armonia.","Venere protegge le tue iniziative relazionali: proponi, connetti, crea ponti.","La bellezza è un magnete di fortuna per la Bilancia: circondati di ciò che trovi bello.","Il venerdì è il tuo giorno di potere: pianifica incontri importanti in quel giorno.","Un accordo che sembrava impossibile si sblocca improvvisamente: sii pronto a firmare.","Colori fortunati: rosa, celeste, lavanda — usali quando hai bisogno di diplomazia.","La fortuna sorride a chi crea armonia intorno a sé: sii il ponte tra le persone.","La gratitudine per la bellezza presente apre porte verso bellezze future inaspettate.","Il venerdì di Venere è il tuo momento di massima apertura alla fortuna: non sprecare quel giorno.","Il rosa antico e il celeste pallido sono i tuoi colori di risonanza positiva questa settimana.","La fortuna della Bilancia si manifesta attraverso la bellezza: crea bellezza e attrai abbondanza.","Un accordo equo siglato oggi porta benefici a lungo termine maggiori di uno squilibrato a tuo vantaggio.","Il numero 7 ricorre nelle tue situazioni di svolta: presta attenzione quando lo incontri.","La gratitudine per l'armonia presente attira armonia futura: contala ogni sera prima di dormire.","Un incontro in un luogo bello porta la connessione che cercavi: cura i contesti in cui ti muovi.","Creare equilibrio nelle tue relazioni apre canali di fortuna che il conflitto tiene chiusi.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  scorpione:{
  amore:["Plutone ti dà un'intensità magnetica irresistibile: chi ti interessa lo sente senza che tu dica nulla — semplicemente stando.","L'amore per lo Scorpione è trasformazione: scegli partner che ti cambino davvero, non che ti lascino come prima.","Se sei single, gli incontri profondi nascono nelle situazioni limite — corsi di crescita personale, momenti di crisi condivisa.","Attenzione al controllo: amare non significa possedere. Lascia che l'altro respiri e ti tornerà da solo.","La fiducia è il fondamento assoluto: una volta rotta, lo Scorpione raramente torna indietro. Comunicalo chiaramente prima.","La vulnerabilità è il tuo terreno più coraggioso: mostrare la ferita è più audace di qualsiasi durezza.","Un segreto condiviso crea un legame invincibile: trova cosa non hai mai detto a nessuno e dillo al tuo partner.","La gelosia intensa è un segnale di quanto ci tieni: usala come bussola, non come arma.","L'intensità dello Scorpione è un dono: chi riesce a starci dentro riceve un amore trasformativo e raro.","Permetti che qualcuno ti conosca davvero — non solo la superficie, ma il profondo che custodisci gelosamente.","La guarigione emotiva di vecchie ferite libera spazio per l'amore presente: è il lavoro più importante.","Lo Scorpione non dimentica mai, ma può scegliere cosa lasciare andare: questa scelta è potere.","Un atto di fiducia verso il partner, anche piccolo, costruisce il ponte che l'intimità vera richiede.","La passione dello Scorpione è leggendaria: usala come forza creativa nella coppia, non come dipendenza.","Chi ama lo Scorpione ha bisogno di sentirsi visto nella sua interezza: dagli quello che tu stesso cerchi.","La trasformazione attraverso l'amore è il tuo sentiero: non temere le profondità che questa strada richiede.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["La visione strategica dello Scorpione è rara: vedi cinque mosse avanti mentre gli altri guardano quella corrente.","Ricerca, analisi in profondità, psicologia, finanza, investigazione: i tuoi campi d'eccellenza naturale.","Una verità scomoda che conosci potrebbe essere la chiave per risolvere un problema bloccato da settimane.","Attenzione ai giochi di potere: li vedi con chiarezza, ma partecipare ti consuma. Scegli le battaglie con saggezza.","Periodo favorevole per trasformazioni radicali in carriera: il ciclo che finisce porta in sé il seme del prossimo.","La resilienza è la tua vera arma professionale: dove gli altri si spezzano, tu risorgi più forte.","Tieni i tuoi piani per te finché non sono pronti: lo Scorpione che parla troppo presto perde il vantaggio.","Una collaborazione con chi ha accesso a risorse o informazioni può cambiare le carte in tavola.","La tua capacità di vedere attraverso le apparenze è il tuo maggiore vantaggio competitivo.","Un progetto di ricerca, analisi, trasformazione o guarigione richiede il tuo contributo unico.","I segreti ben custoditi proteggono i tuoi piani: parla dei risultati, non dei processi.","La determinazione dello Scorpione è quasi soprannaturale: usala su obiettivi che valgono davvero.","Un ciclo professionale si chiude: non trattenerti per abitudine — la prossima fase è più potente.","La resilienza è il tuo asset più raro nel mondo professionale: chi cade e si rialza vince sempre.","Un alleato strategico con accesso a risorse o informazioni può cambiare il tuo scenario.","La tua visione a lungo termine è corretta: fidati di essa anche quando il presente sembra contraddirla.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Gli organi riproduttivi e la zona del bacino sono le aree di attenzione: esami regolari, cure preventive.","La detossificazione fisica rispecchia quella emotiva: periodo favorevole per cure di pulizia consapevole.","L'acqua è la tua medicina: bagni caldi prolungati, piscina, terme. Il corpo Scorpione si scioglie nell'acqua.","Le emozioni non elaborate si somatizzano rapidamente: terapia, journaling o arte come sfogo regolare.","La pratica spirituale è salute per lo Scorpione: meditazione profonda, breathwork, pratiche di trasformazione.","Il sonno dello Scorpione è spesso ricco di sogni significativi: tienine traccia per la tua crescita.","Evita i farmaci non necessari: lo Scorpione ha un metabolismo sensibile che reagisce agli eccessi.","La sessualità sana è parte della salute totale: non trascurarla né usarla come sfogo inconsapevole.","Gli organi riproduttivi e il sistema endocrino sono le zone dello Scorpione: attenzione regolare.","L'intensità emotiva si accumula nel corpo dello Scorpione: movimento fisico intenso come valvola di sfogo.","L'acqua fredda e le docce alternate attivano la resilienza del tuo sistema immunitario.","La meditazione delle profondità — respirazione guidata verso il basso — è perfetta per la tua struttura.","Trasformare il dolore fisico in consapevolezza è la pratica di guarigione più efficace per te.","Il detox — fisico e mentale — ogni stagione è un rituale di rigenerazione che il tuo segno richiede.","Il sonno profondo e rigenerante si ottiene con rituali di scarico emotivo prima di dormire.","Cibi ricchi di zinco e selenio supportano il sistema immunitario e riproduttivo dello Scorpione.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 8. Il Bordeaux e il Nero profondo ti proteggono.","Plutone attiva le tue capacità trasformative: ciò che sembra una fine è un inizio travestito.","La fortuna si nasconde nelle profondità: non in superficie, non nell'ovvio, ma nel nascosto.","Il martedì è il tuo giorno di potere: usa quell'energia per le iniziative importanti.","Una persona che ritorna dalla tua vita porta un'opportunità inaspettata: valutala.","Il numero 8 e i simboli dell'infinito attirano la tua fortuna: tienili vicino.","Colori fortunati: bordeaux, rosso scuro, nero, porpora profondo.","La trasformazione interiore è la tua migliore fortuna: quando cambi dentro, il mondo fuori si adatta.","Il martedì e il giovedì sono i tuoi giorni di potere più intenso questa settimana.","Il rosso scuro e il bordeaux sono i tuoi colori di potere e protezione.","La fortuna dello Scorpione si manifesta nei momenti di crisi: sotto la distruzione c'è sempre il seme.","Un numero 8 che ricorre è il segnale cosmico che il tuo ciclo di abbondanza sta per completarsi.","Un atto di perdono — anche solo interiore — libera energia bloccata e apre nuovi flussi.","La fortuna si nasconde in ciò che hai già: guarda con occhi nuovi ciò che possiedi.","La trasformazione è la tua fortuna: ogni cambiamento che accetti porta ciò che la resistenza blocca.","Un sogno potente nella notte tra lunedì e martedì porta un messaggio che vale la pena decodificare.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  sagittario:{
  amore:["Giove ti espande il cuore: sei pronto ad amare con meno paure e più apertura rispetto ai mesi scorsi.", "La libertà è la tua conditio sine qua non: il partner che te la dà ti conquista per sempre.", "Se sei single, i viaggi, gli incontri internazionali, le community di appassionati sono i tuoi terreni fertili.", "Attenzione all'incostanza: non promettere la luna se sei fatto per le stelle. Sii onesto sui tuoi limiti.", "Una conversazione filosofica profonda con il partner rafforza il legame più di qualsiasi romanticismo convenzionale.", "L'entusiasmo del Sagittario è contagioso: porta energia positiva nella relazione soprattutto nei momenti grigi.", "L'avventura condivisa — un viaggio, una sfida, un'esplorazione — è l'afrodisiaco perfetto per te.", "La fedeltà emotiva è importante quanto quella fisica: sii presente con la mente, non solo con il corpo.", "L'avventura è il tuo linguaggio d'amore: porta il partner in un posto che non ha mai visto.", "La libertà che chiedi in amore deve essere offerta con la stessa generosità: il partner ha le sue ali.", "Un partner con una visione del mondo diversa dalla tua è il più prezioso: imparare insieme è la tua forma d'amore.", "La filosofia dell'amore del Sagittario è ottimista per natura: usa questa energia per trasformare i momenti difficili.", "L'onestà brutale del Sagittario può ferire: aggiungi tenerezza alle tue verità scomode.", "L'entusiasmo con cui arrivi all'inizio di una storia deve trasformarsi in costanza: il lungo termine richiede radici.", "Un viaggio insieme — anche breve — riaccende la connessione e ricorda perché siete una squadra.", "L'umorismo è il tuo afrodisiaco principale: una risata condivisa profonda vale più di mille cene romantiche.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["La visione a lungo raggio del Sagittario è un superpotere in un mondo che pensa a breve termine.", "Lavoro internazionale, istruzione, editoria, filosofia, legge, turismo: i tuoi campi naturali.", "Periodo favorevole per iniziative coraggiose che richiedono fiducia nel futuro: espanditi con coraggio.", "La sincerità diretta è un asset e un rischio: calibra come dici le cose, anche quando hai assolutamente ragione.", "Un'opportunità di lavoro internazionale si profila: tieniti pronto con documenti e portfolio aggiornati.", "L'entusiasmo è il tuo combustibile professionale: scegli progetti che ti accendono davvero.", "La formazione continua nutre la tua vocazione all'insegnamento: impara, poi insegna ciò che hai imparato.", "Un mentore che apprezzi potrebbe diventare una risorsa professionale preziosa e inaspettata.", "La visione d'insieme è il tuo punto di forza: sei quello che vede dove il team è diretto quando tutti guardano i piedi.", "L'insegnamento, la formazione, la filosofia, i viaggi internazionali, l'editoria: i tuoi campi di eccellenza.", "L'ottimismo del Sagittario è contagioso: portalo nei momenti di crisi del team e cambierà l'umore.", "Non iniziare un altro progetto finché non hai chiuso quello attuale: la visione senza esecuzione è solo un sogno.", "Un'opportunità internazionale o cross-culturale porta il tuo talento nel contesto giusto.", "La formazione continua non è un obbligo per te — è uno stile di vita che ti nutre professionalmente.", "Il networking globale è il tuo patrimonio: mantieni i contatti internazionali con costanza.", "Una collaborazione con qualcuno di cultura diversa porta prospettive che ampliano la tua visione strategica.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Le cosce, i fianchi e il fegato sono le zone del Sagittario: movimento fisico abbondante e alcol con moderazione.", "L'eccesso è il pericolo del Sagittario: troppo di tutto — cibo, sole, avventura, stimoli. Impara il confine salutare.", "L'attività fisica all'aperto è la tua medicina principale: escursionismo, equitazione, sport di squadra.", "La filosofia di vita influenza direttamente la salute: valori chiari e ottimismo sono immunostimolanti naturali.", "Attenzione agli infortuni alle gambe: stretching pre-attività fisica e riscaldamento adeguato.", "Un viaggio in natura — montagna, foresta, mare aperto — ricarica le batterie del Sagittario come niente altro.", "Il fegato elabora non solo il cibo ma anche le emozioni represse: cura entrambi.", "La risata è la tua medicina numero uno: circondarti di persone che ti fanno ridere è autocura reale.", "Le anche, i fianchi e il fegato sono le zone del Sagittario: stretching dei flessori e cure epatiche.", "Il movimento all'aria aperta è la tua medicina primaria: trekking, equitazione, ciclismo, corsa libera.", "Il fegato risente dell'eccesso: moderazione con alcol e cibi grassi, anche nei periodi di festa.", "La mente del Sagittario si esaurisce senza stimoli nuovi: il viaggio è anche una forma di prevenzione.", "Lo sport che include sfida personale e spazio aperto è quello in cui eccelli e che ami di più.", "La colonna vertebrale sacrale e il bacino portano le tensioni del Sagittario: yoga e mobilità dell'anca.", "Un check-up epatico periodico è la forma di prevenzione più importante per il tuo segno.", "Ridere forte, ballare libero, camminare senza meta: queste sono le tue pratiche di benessere più profonde.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 3. Il Viola e il Turchese ti portano espansione.", "Giove potenzia tutto ciò che inizi: pensa in grande, agisci in grande.", "La fortuna ti sorride quando sei onesto e entusiasta: non fingere mai per piacere.", "Il giovedì è il tuo giorno di potere: pianifica le iniziative più importanti quel giorno.", "Un viaggio o un incontro internazionale porta con sé una svolta inaspettata.", "Colori fortunati: viola, turchese, blu reale — usali per espandere la tua influenza.", "La generosità del Sagittario attira abbondanza: non trattenerti dal dare.", "Il numero 9 e i multipli di 3 ricorrono nelle tue situazioni fortunate: notali.", "Il giovedì di Giove è il tuo giorno di abbondanza naturale: agisci nelle ore centrali di quel giorno.", "Il viola regale e il blu cobalto sono i tuoi colori di espansione e fortuna.", "Un viaggio — anche immaginario — sblocca la fortuna del Sagittario: esplora, muoviti, cambia scenario.", "Il numero 3 e i multipli di 3 ricorrono nelle tue situazioni di svolta positiva.", "La generosità del Sagittario attira abbondanza: dona con entusiasmo e l'universo amplifica.", "Un libro letto con curiosità autentica porta la risposta che cerchi.", "La fortuna si manifesta attraverso la filosofia: avere una visione chiara del tuo scopo accelera la sincronicità.", "Un incontro con qualcuno di altra cultura o paese porta la svolta professionale o sentimentale che attendi.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  capricorno:{
  amore:["Saturno ti insegna che l'amore duraturo si costruisce mattone per mattone: apprezza chi rimane al tuo fianco.", "La difficoltà a esprimere le emozioni è il tuo ostacolo più grande: oggi prova a dire una cosa vera, anche se ti costa.", "Se sei single, gli ambienti professionali, i circoli culturali selezionati sono i tuoi terreni naturali.", "La fedeltà assoluta è il tuo dono più prezioso: riconosci chi la ricambia e allontanati da chi no.", "Il partner ha bisogno di sapere che sei emotivamente presente, non solo fisicamente affidabile: mostralo.", "L'ambizione professionale non può divorare la vita di coppia: trova l'equilibrio prima che diventi un problema serio.", "La tenerezza non è debolezza per il Capricorno: è la faccia nascosta che i pochi eletti hanno il privilegio di vedere.", "Costruite qualcosa insieme — un progetto, un viaggio, un sogno condiviso — e il legame si solidifica come pietra.", "L'amore del Capricorno si costruisce come una cattedrale: lento, solido, magnifico nel tempo.", "La difficoltà ad aprirsi emotivamente è la tua sfida più grande: vale la pena superarla per chi lo merita.", "Un gesto pratico che alleggerisce la vita del partner è per te la dichiarazione d'amore più eloquente.", "Il partner ha bisogno di sentire il tuo calore, non solo la tua competenza: mostragli la parte tenera.", "La fedeltà del Capricorno è assoluta: chi la riceve ha un tesoro che conosce il peso degli anni.", "Un momento di gioco spontaneo e irrazionale sorprenderà il partner più di qualsiasi gesto pianificato.", "L'ambizione professionale non deve essere rivale dell'amore: trova il ritmo che onori entrambi.", "Scegli il partner con la stessa saggezza con cui scegli gli investimenti: qualità e orizzonte lungo.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["Saturno premia la disciplina: i risultati di oggi sono frutto di semi piantati mesi fa. Continua.", "L'autorità naturale del Capricorno emerge in modo convincente in questo periodo: usa questa finestra favorevole.", "Un progetto che richiede pianificazione a lungo termine, precisione e resilienza è il tuo terreno d'elezione.", "Attenzione al workaholic: lavorare di più non sempre significa produrre di più. L'efficienza batte le ore.", "Un riconoscimento professionale è imminente: accettalo con la dignità che caratterizza il Capricorno.", "Le strutture gerarchiche ti sono familiari: usale a tuo vantaggio invece di lottarci contro.", "Investi in formazione, certificazioni, titoli che aggiungono credibilità al tuo già solido profilo.", "Un piano a cinque anni ha più senso per il Capricorno che qualsiasi strategia di breve termine.", "Saturno ti sostiene nella costruzione di strutture durature: ogni fondamenta posta oggi regge decenni.", "La tua credibilità professionale è il capitale più solido che possiedi: proteggila con ogni scelta.", "Un progetto a lungo termine che altri trovano scoraggiante è esattamente il tuo terreno naturale.", "La disciplina silenziosa del Capricorno produce risultati che chi cerca scorciatoie non vedrà mai.", "L'avanzamento arriva attraverso la competenza dimostrata nel tempo, non attraverso i giochi di potere.", "Un mentore o figura senior nella tua rete porta una prospettiva che accelera la tua crescita.", "Gestione finanziaria e pianificazione a lungo termine sono i tuoi strumenti di potere professionale.", "Il momento in cui sei riconosciuto per il lavoro fatto in silenzio sta arrivando: mantieni lo standard.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Le ginocchia, i denti e le ossa sono le zone del Capricorno: calcio, vitamina D, postura corretta quotidiana.", "La tendenza alla rigidità fisica rispecchia quella mentale: stretching e flessibilità come pratica quotidiana.", "Il freddo ti rallenta: mantieni il corpo caldo, in particolare le articolazioni nelle stagioni fredde.", "Il Capricorno porta il peso della responsabilità nel corpo: massaggi alla schiena e alle spalle sono essenziali.", "L'ossessione per il lavoro crea stress cronico: inserisci momenti di piacere inutile nell'agenda, senza negoziare.", "La lentezza del Capricorno porta spesso alla salute nel lungo termine: costruisci abitudini, non diete lampo.", "La natura austera del Capricorno tende all'undernutrition emotiva: nutri anche la gioia, non solo l'impegno.", "Un check-up dentistico e osseo è particolarmente indicato per te in questo periodo.", "Le ossa, le articolazioni e i denti sono le zone del Capricorno: calcio, vitamina D, mobilità articolare.", "Il corpo del Capricorno risponde bene alla disciplina: routine fisiche regolari portano risultati certi.", "Le rigidità articolari dello stress si sciolgono con stretching quotidiano mattutino, anche breve.", "Il carico emotivo portato in silenzio si deposita nelle spalle e nella schiena: massaggi regolari.", "La vitamina D è spesso carente nel Capricorno che lavora troppo al chiuso: esposizione solare necessaria.", "Il riposo del Capricorno deve essere programmato con la stessa serietà del lavoro: schedulalo.", "Camminare nella natura — specialmente in montagna — ricarica il sistema nervoso del Capricorno in modo unico.", "Ridurre il perfezionismo come fonte di stress cronico è la pratica di salute mentale più urgente per te.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 8. Il Marrone terra e il Grigio antracite ti portano solidità.", "Saturno premia la perseveranza: ogni passo disciplinato accumulato oggi diventa fortuna domani.", "La fortuna del Capricorno non è mai casuale — è costruita. Continua a costruire con metodo.", "Il sabato è il tuo giorno di potere: dedica del tempo alla pianificazione strategica.", "Un incontro con qualcuno di esperto e affidabile porta opportunità concrete.", "Colori fortunati: marrone, nero, grigio antracite — eleganza sobria che attira rispetto.", "Il numero 4 e le sue strutture ti portano stabilità e fortuna costruita.", "La gratitudine per le fondamenta solide della tua vita apre porte verso nuove altezze.", "Il sabato di Saturno è il tuo giorno di costruzione e consolidamento fortunato.", "Il verde bosco e il grigio ardesia sono i tuoi colori di stabilità e fortuna materiale.", "La fortuna del Capricorno si manifesta attraverso la costanza: ogni giorno uguale è un mattone.", "Un investimento a lungo termine fatto con disciplina porta i frutti esattamente al momento giusto.", "Il numero 8 e i multipli di 4 ricorrono nelle tue situazioni di svolta concreta.", "La fortuna arriva attraverso la credibilità: mantieni la parola data e l'universo manterrà la sua.", "Un anziano o una figura di esperienza nella tua vita porta un consiglio che vale più di qualsiasi analisi.", "Il patrimonio costruito con fatica onesta ha una risonanza cosmica più alta di qualsiasi ricchezza facile.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  acquario:{
  amore:["Urano porta imprevedibilità in amore: abbraccia la novità invece di resistere. Il cambiamento è la tua storia d'amore più bella.","L'intelletto è il tuo strumento di seduzione: una mente brillante ti attrae più di qualsiasi bellezza fisica.","Se sei single, le community, i movimenti sociali, i gruppi di innovatori sono dove trovi la tua connessione.","La distanza emotiva è il tuo difetto principale in amore: impara a scendere dalla testa al cuore con coraggio.","La libertà non è solitudine: puoi essere libero E connesso. Sono compatibili — a patto di dirlo chiaramente.","Partner che condividono i tuoi valori sull'umanità e sul futuro sono i tuoi alleati d'amore autentici.","Sorprendi il partner con qualcosa di completamente insolito e personale: l'ordinario non fa per te.","L'amicizia è la base del tuo amore ideale: se non siete anche amici, non siete ancora ciò che potreste essere.","L'amicizia profonda è il terreno dell'amore per l'Acquario: cerca chi ti fa ridere prima ancora di desiderare.","La tua unicità è seducente per chi sa apprezzarla: non sminuirla per renderti più digeribile.","L'Acquario ha bisogno di spazio per essere libero: comunicalo invece di scappare.","Un partner che rispetta la tua visione del futuro è un partner per la vita: non scendere a compromessi su questo.","La distanza emotiva è la tua difesa automatica: scegli consapevolmente di avvicinarti invece di automatizzare.","Un gesto completamente insolito e personalissimo dice al partner che lo conosci davvero.","L'amore che cambia il mondo inizia dall'amore che cambia la tua relazione: comincia da casa.","La lealtà dell'Acquario è reale e rara: chi la ha non sappia darla per scontata.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["L'innovazione è il tuo respiro professionale: proponi quella soluzione rivoluzionaria che tieni nel cassetto.","Tecnologia, scienze sociali, design del futuro, attivismo: i tuoi campi d'eccellenza.","La visione sistemica dell'Acquario vede le connessioni che nessun altro vede: usala per soluzioni originali.","Attenzione alla tendenza a innovare senza finire: l'idea rivoluzionaria vale zero senza implementazione.","Il lavoro in team di visionari ti esalta: cerca collaboratori che camminino sullo stesso confine.","Un progetto per il bene comune ti dà la motivazione più potente di qualsiasi incentivo economico.","Il futuro è il tuo habitat naturale: pianifica a dieci anni mentre gli altri pianificano a uno.","Un incontro con qualcuno di altra cultura porta una svolta nel modo in cui pensi al tuo lavoro.","La tua capacità di vedere il futuro mentre gli altri guardano il presente è il tuo asset irreplicabile.","Un progetto legato all'innovazione sociale, alla tecnologia etica o alla formazione di comunità è il tuo.","Il pensiero sistemico dell'Acquario trova soluzioni che il pensiero lineare non vede: usalo senza scuse.","L'entusiasmo per l'utopia deve trasformarsi in piani concreti: senza implementazione, la visione evapora.","Un team di innovatori con mentalità simile è l'ambiente in cui porti il massimo della tua potenzialità.","La comunicazione dei tuoi progetti non convenzionali richiede strategia: impara a tradurre il visionario in linguaggio accessibile.","Un aggiornamento in tecnologia o scienze sociali ti porta davanti alla curva, dove sei più a tuo agio.","La rete globale che hai costruito è un patrimonio professionale: attivala con intenzione strategica.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["Le caviglie, le gambe e il sistema circolatorio sono le zone dell'Acquario: movimento, idratazione abbondante.","La mente iperattiva dell'Acquario esaurisce il sistema nervoso: il digital detox periodico è medicina vera.","Sport di squadra o attività collettive ti stimolano più dell'allenamento solitario.","Il respiro è il tuo ancoraggio: pratiche di breathwork o pranayama portano il sistema nervoso all'equilibrio.","Le temperature estreme ti fanno male: evita i cambiamenti bruschi e vesti a strati con intelligenza.","Il tuo sistema nervoso è la tua risorsa prioritaria: trattalo come qualcosa di prezioso e insostituibile.","Esercizi di grounding ti aiutano a restare nel corpo invece di perderti nelle idee astratte.","La meditazione tecnologica — binaural beats, app guidate — funziona per la tua mente progressista.","La circolazione alle gambe e alle caviglie è la tua priorità: movimento frequente e idratazione abbondante.","Il sistema nervoso iperattivo dell'Acquario richiede periodi di silenzio totale: programmali come appuntamenti.","L'elettrosmog influenza la tua sensibilità: limita i device nelle ore serali e proteggi il sonno.","Il biohacking moderato e la nutrizione personalizzata affascinano l'Acquario: sperimenta con metodo.","La meditazione con binaural beats o onde cerebrali guidate è la porta d'ingresso più efficace per te.","Sport di squadra con elementi tattici — basket, pallavolo — soddisfano sia il corpo che la mente.","Il grounding fisico — camminare scalzo, meditazione a terra — ancora il tuo sistema nervoso iperattivo.","Le innovazioni nel campo della salute mentale ti interessano: esplora le nuove frontiere con curiosità informata.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 11. L'Azzurro elettrico e il Turchese futuristico ti portano innovazione.","Urano cambia le regole del gioco a tuo favore quando sei autentico: non conformarti per piacere.","La fortuna arriva attraverso la rete umana: quella persona con cui parli oggi potrebbe essere la svolta.","Il mercoledì è il tuo giorno di potere in questo periodo.","Un'idea che non hai ancora osato dire ad alta voce: dilla. Potrebbe cambiarti la vita.","Colori fortunati: elettrico, turchese, argento metallico — il futuro è il tuo colore.","Il numero 22 e i doppi numeri ricorrono nelle tue situazioni di svolta.","La gratitudine per la tua unicità — invece di considerarla un difetto — è il tuo magnete di fortuna.","Il mercoledì tecnologico è il tuo giorno di potere per idee rivoluzionarie e connessioni strategiche.","Il turchese elettrico e il blu ultramarino sono i tuoi colori di potere e innovazione.","La fortuna dell'Acquario arriva attraverso la rete: ogni connessione attivata è un nodo di possibilità.","Un'idea rivoluzionaria che condividi oggi trova il terreno fertile che non si aspettava.","Il numero 11 — il numero del risveglio — è il tuo segnale di sincronicità più potente.","La fortuna si manifesta quando sei autenticamente te stesso: il conformismo chiude le porte.","Un progetto collettivo in cui contribuisci con la tua unicità porta ricompense inaspettate.","Donare la tua visione — anche piccoli frammenti — al mondo amplifica il tuo campo di fortuna.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  },
  pesci:{
  amore:["Nettuno ti immerge in un oceano di sentimenti: naviga con cura, non perdere il filo che ti riporta a riva.","L'empatia totale è il tuo dono e il tuo rischio: assicurati di sentire i tuoi sentimenti, non quelli dell'altro.","Se sei single, le arti, la musica, il cinema, gli ambienti spirituali sono i luoghi dove trovi la tua connessione.","Attenzione all'idealizzazione: il partner reale è meraviglioso — smetti di confrontarlo con la versione perfetta nella tua testa.","Un gesto poetico e inaspettato dice più di mille parole: scrivi, disegna, suona, crea qualcosa per chi ami.","I confini sani in amore non tolgono romanticismo: ti permettono di amare da un posto di forza, non di paura.","Il perdono è la tua superpotenza: usalo con saggezza, non come abitudine a tollerare ciò che non va.","L'amore spirituale — che va oltre il corpo e la mente — è ciò che cerchi davvero. Vai verso chi lo vive.","L'amore del Pesci è un oceano: profondo, misterioso, capace di contenere tutto — compresa la solitudine.","La comunicazione emotiva diretta è più efficace del linguaggio poetico per risolvere i problemi pratici.","Scegli il partner che vede la tua profondità come dono, non come problema da gestire.","I confini sani non tolgono romanticismo: ti permettono di amare senza dissolverti nell'altro.","Un gesto creativo — un disegno, una canzone, una lettera — dice al partner cose che le parole non raggiungono.","L'idealizzazione è la tua trappola romantica: ama la persona reale davanti a te, non la versione nella tua testa.","La spiritualità condivisa — anche solo guardare le stelle insieme — crea una connessione unica per il Pesci.","L'amore che vuoi esiste: non scendere a compromessi sul rispetto della tua profondità emotiva.","Oggi il cuore è vulnerabile: evita conversazioni che potrebbero aprire vecchie ferite.","Le stelle avvertono di una tensione latente in amore che potrebbe esplodere se non affrontata.","Un malinteso si trasformerà in conflitto se non trovi il coraggio di chiarire oggi.","Chi ami potrebbe non dirti tutta la verità; ascolta ciò che non viene detto.","Le energie di Venere oggi non sono favorevoli: rimanda le dichiarazioni importanti.","Un legame che credevi solido mostra le prime crepe; ignorarle non le farà sparire.","La gelosia o il risentimento accumulato stanno avvelenando lentamente qualcosa di prezioso.","Le stelle avvertono: stai dando troppo a chi non sa ricevere, e troppo poco a chi meriterebbe.","Un amore del passato torna come un'ombra; scegli con lucidità se aprire quella porta.","Oggi l'amore richiede sacrificio, non romanticismo: sei pronto a questa differenza?"],
  lavoro:["L'intuizione creativa dei Pesci è una risorsa professionale spesso sottovalutata: rivendicala con coraggio.","Arte, musica, cinema, fotografia, healing, psicologia, lavoro caritatevole: i tuoi campi d'elezione.","Dove gli altri vedono un problema, tu vedi un'opera d'arte — questa visione poetica porta soluzioni inaspettate.","Attenzione alla dispersione: fissa un obiettivo chiaro per la settimana e torna sempre lì quando ti perdi.","Il lavoro in ambienti belli, silenziosi e ispirati ti dà il quadruplo della produttività.","Collabora con qualcuno che sappia gestire i dettagli operativi: tu sei la visione, cerca chi fa l'esecuzione.","Un progetto nato dall'ispirazione pura porta risultati inaspettati: fidati del flusso creativo.","La tua capacità di empatizzare con il pubblico è il vantaggio competitivo più sottile e potente.","L'intuizione creativa è il tuo asset professionale più potente: rivendicala con sicurezza.","Un progetto che unisce arte, cura, spiritualità o psicologia porta il tuo contributo unico al mondo.","La tua empatia ti permette di capire il pubblico e i clienti come nessun altro: usala strategicamente.","Stabilisci obiettivi settimanali chiari per non disperdere la tua energia creativa in mille direzioni.","Un partner operativo che gestisce i dettagli pratici ti libera per fare ciò in cui eccelli.","L'ambiente di lavoro bello e silenzioso non è un capriccio: è una condizione di produttività reale.","La musica durante il lavoro creativo — non dispersiva — amplifica il flusso del Pesci.","Un progetto con un impatto emotivo e sociale profondo ti motiva più di qualsiasi incentivo economico.","Le stelle segnalano ostacoli professionali oggi: non è il momento di esporsi troppo.","Un collega o superiore potrebbe mettere in discussione il tuo operato; documenta tutto.","Un progetto in cui hai investito energie potrebbe subire un rallentamento o un rifiuto.","Le influenze planetarie oggi non favoriscono la firma di contratti o accordi importanti.","Attenzione: qualcuno sul lavoro potrebbe prendersi il merito di ciò che hai costruito.","Le stelle avvertono di non fidarsi ciecamente di chi si mostra troppo disponibile oggi.","Un errore che hai rimandato di correggere sta per diventare impossibile da ignorare.","Le energie di oggi portano frustrazione lavorativa: non aggravare la situazione con reazioni impulsive.","Un'opportunità che sembrava certa potrebbe sfumare; non avevi messo in conto tutte le variabili.","Oggi il cielo non protegge le iniziative audaci: procedi con metodo, non con entusiasmo."],
  salute:["I piedi e il sistema linfatico sono le aree del Pesci: riflessologia, drenaggio, cure ai piedi, scarpe comode.","L'acqua è la tua medicina assoluta: nuoto, bagni termali, soggiorni al mare, acqua calda con limone al mattino.","Le emozioni non elaborate si somatizzano velocemente: terapia, journaling o arte come sfogo regolare.","Attenzione alla tendenza a fuggire: affronta le sfide con compassione verso te stesso invece di scappare.","Il sonno è sacro e ricco di messaggi: crea un rituale serale e tieni un diario dei sogni.","I sensi dei Pesci sono acutissimi: proteggiti da ambienti caotici e luoghi energeticamente pesanti.","La pratica spirituale — meditazione, preghiera, yoga — nutre l'anima quanto il cibo nutre il corpo.","La creatività come medicina: dipingere, suonare, scrivere mantiene il sistema nervoso in equilibrio.","I piedi del Pesci sono il punto di contatto con la terra: cure regolari, scarpe comode, riflessologia.","La permeabilità emotiva del Pesci esaurisce le ghiandole surrenali: il riposo è non negoziabile.","Il contatto con l'acqua — nuoto, bagni, oceano — è il tuo reset più rapido e profondo.","Proteggiti energeticamente dagli ambienti pesanti: la tua sensibilità assorbe ciò che ti circonda.","Il sonno del Pesci è ricco di sogni significativi: tieni un diario e leggi i messaggi notturni.","La creatività come pratica di salute mentale è scientificamente provata: dipingi, scrivi, suona.","L'alimentazione del Pesci risponde bene ai cibi leggeri, al pesce, alle verdure a foglia e all'idratazione.","Una pratica spirituale regolare — meditazione, preghiera, yoga — è la tua forma di igiene più profonda.","Le stelle segnalano un calo di energia oggi: non ignorare i segnali di stanchezza del corpo.","Lo stress accumulato sta iniziando a manifestarsi fisicamente; il corpo non mente.","Oggi l'equilibrio psicofisico è fragile: evita eccessi e situazioni ad alta tensione.","Le influenze lunari di oggi amplificano l'ansia e i pensieri negativi; non alimentarli.","Un malessere che stai minimizzando merita più attenzione di quanta gliene stai dando.","Le stelle avvertono: stai chiedendo al tuo corpo più di quanto possa dare senza conseguenze.","Oggi il sistema nervoso è sotto pressione; il riposo non è un lusso, è una necessità urgente.","Le energie di oggi portano malinconia e senso di vuoto: non combatterli, attraversali con consapevolezza.","Qualcosa che stai reprimendo emotivamente sta cercando un'uscita fisica; ascolta il tuo corpo.","Le stelle segnalano un momento di debolezza: non è il giorno giusto per sfidare i tuoi limiti."],
  fortuna:["Numero fortunato: 12. Il Viola acqua e il Verde mare ti portano ispirazione divina.","Nettuno ti parla attraverso i sogni: annotali e cercane il senso — possono contenere direzioni concrete.","La fortuna arriva attraverso la compassione: aiutare senza aspettarsi nulla apre canali di abbondanza.","Il giovedì è il tuo giorno di potere mistico in questo periodo.","Un sogno vivido o un presentimento forte è un messaggio dall'universo: seguilo con fiducia.","Colori fortunati: viola, verde acqua, azzurro profondo, bianco perla.","La creatività è il tuo canale magico: esprimerti attira sincronicità positive.","La gratitudine per i miracoli quotidiani apre la porta a quelli straordinari.","Il giovedì e il lunedì lunare sono i tuoi giorni di maggiore risonanza cosmica.","Il viola acqua e il verde mare sono i tuoi colori di risonanza con Nettuno.","La fortuna del Pesci arriva attraverso i sogni: annotali e cerca le sincronicità con la realtà.","La compassione attivata — aiutare senza calcolo — apre canali di abbondanza che nessun altro percorso raggiunge.","Il numero 12 e i multipli di 3 ricorrono nelle tue situazioni di grazia inaspettata.","Un momento di meditazione dedicato a un'intenzione specifica porta risultati concreti per il Pesci.","La fortuna si manifesta attraverso l'arte: creare qualcosa di bello attira ciò che è bello.","La gratitudine per i miracoli invisibili della vita quotidiana è la tua pratica di fortuna più potente.","Oggi il karma chiede il conto: ciò che hai seminato sta per tornare, nel bene o nel male.","Le stelle non sorridono alle scommesse di oggi; tieni il portafoglio chiuso.","Un ciclo karmico pesante si sta per chiudere: attraversarlo è inevitabile e necessario.","Le influenze cosmiche di oggi portano lezioni dure ma necessarie; non fare la vittima.","La fortuna oggi volge le spalle: non forzare la mano al destino.","Le stelle avvertono di una perdita imminente, materiale o affettiva; preparati con lucidità.","Oggi il destino non è dalla tua parte: meglio rimandare le decisioni importanti a domani.","Un'energia di sfortuna sottile pervade la giornata; procedi con cautela in ogni ambito.","Le stelle ricordano che ciò che vai evitando da tempo non sparirà da solo.","Il cielo oggi porta notizie scomode ma necessarie: la verità che non vuoi sentire è quella di cui hai più bisogno.","Non è una giornata per rischiare: le stelle consigliano di restare in territorio sicuro e conosciuto.","Un presagio oscuro aleggia sulla giornata; fidati del tuo istinto se qualcosa non ti convince.","Le energie cosmiche di oggi portano solitudine e incomprensione: accettale invece di combatterle.","Qualcuno o qualcosa nella tua vita sta consumando più di quanto dia; è ora di fare i conti.","Le stelle avvertono: stai costruendo su fondamenta instabili, e prima o poi te ne accorgerai."]
  }
},

oroscopo_pool:[
  "Il tuo segno è sotto l'influenza di un'energia trasformativa; accogli il cambiamento con coraggio.",
  "Oggi le stelle suggeriscono di rallentare e osservare prima di agire.",
  "La luna favorisce l'introspezione; è il momento giusto per fare chiarezza interiore.",
  "Un incontro inaspettato potrebbe aprire una porta che credevi chiusa.",
  "La tua creatività è al culmine: usala per dare forma a ciò che hai nel cuore.",
  "Le energie cosmiche ti invitano a perdonare, soprattutto te stesso.",
  "Oggi è un giorno favorevole per piantare semi di nuovi progetti.",
  "Non temere di mostrare la tua vulnerabilità; è il primo passo verso la vera forza.",
  "Le stelle indicano un periodo di crescita interiore; fidati del processo.",
  "La tua intuizione è particolarmente acuta; seguila senza esitazione.",
  "Un messaggio del passato potrebbe tornare per chiudere un cerchio necessario.",
  "Oggi le energie favoriscono la comunicazione sincera e il dialogo aperto.",
  "La tua anima chiede spazio; concediti momenti di silenzio rigenerante.",
  "Le stelle suggeriscono di lasciare andare il controllo e affidarti al flusso.",
  "Un'opportunità si presenterà sotto mentite spoglie; resta vigile e aperto.",
  "La tua forza interiore è il tuo alleato più prezioso in questo momento.",
  "Oggi è un giorno propizio per riconnetterti con le tue radici e la tua essenza.",
  "Le energie cosmiche ti invitano a celebrare i piccoli traguardi raggiunti.",
  "La tua presenza ha un impatto positivo su chi ti sta intorno; non sottovalutarla.",
  "Oggi le stelle favoriscono la guarigione emotiva; permetti a te stesso di sentirsi.",
  "Un sogno potrebbe contenere un messaggio importante; annotalo al risveglio.",
  "La tua energia è in fase di riallineamento; rispetta i tempi del tuo corpo.",
  "Le stelle indicano che è tempo di investire in te stesso senza sensi di colpa.",
  "Oggi è un giorno favorevole per esprimere la tua verità con delicatezza.",
  "La tua anima chiede di perdonare e rilasciare ciò che ti appesantisce.",
  "Le energie cosmiche favoriscono la collaborazione e il sostegno reciproco.",
  "Oggi le stelle suggeriscono di ascoltare il tuo corpo e onorare i suoi segnali.",
  "Un incontro del destino potrebbe cambiare la prospettiva su una situazione.",
  "La tua luce interiore sta crescendo; non temere di brillare anche nel buio.",
  "Oggi è un giorno propizio per chiarire malintesi e ripristinare armonia.",
  "Le stelle indicano che la pazienza sarà la tua alleata più preziosa.",
  "La tua creatività è un canale divino; lasciala fluire senza filtri.",
  "Oggi le energie favoriscono la riflessione e la pianificazione strategica.",
  "Un messaggio inaspettato potrebbe aprire nuove strade; resta ricettivo.",
  "La tua anima chiede di essere vista e ascoltata; dedicale tempo e attenzione.",
  "Oggi è un giorno favorevole per rafforzare i legami significativi.",
  "La tua energia è in fase di trasformazione; accogli i cambiamenti con gratitudine.",
  "Le energie cosmiche ti invitano a riconoscere il tuo valore intrinseco.",
  "Oggi le stelle favoriscono la chiarezza mentale e la decisione consapevole.",
  "Un sogno ricorrente potrebbe contenere una chiave per il tuo prossimo passo.",
  "La tua presenza è un dono; non nasconderla per paura del giudizio.",
  "Le stelle indicano che è tempo di investire in relazioni autentiche.",
  "Oggi è un giorno propizio per pulire gli spazi fisici e mentali.",
  "La tua intuizione è il tuo faro; seguila anche quando la nebbia è fitta.",
  "Le energie cosmiche favoriscono la guarigione e il rinnovamento interiore.",
  "Oggi le stelle suggeriscono di celebrare la tua unicità senza paragoni.",
  "Un incontro casuale potrebbe rivelarsi un messaggio del destino.",
  "La tua anima chiede di esprimersi liberamente; trova il tuo canale creativo.",
  "Le stelle indicano che la fiducia in te stesso è la chiave per sbloccare il potenziale.",
  "Oggi è un giorno favorevole per chiudere cicli e aprire nuovi capitoli.",
  "La tua energia è in fase di riallineamento con il tuo scopo più profondo.",
  "Le energie cosmiche ti invitano a praticare la gratitudine come atto quotidiano.",
  "Oggi le stelle favoriscono la comunicazione empatica e l'ascolto attivo.",
  "Un messaggio dal passato potrebbe tornarti utile per comprendere il presente.",
  "La tua forza interiore è la tua ancora; affidati ad essa nelle tempeste.",
  "Le stelle indicano che è tempo di investire nella tua crescita spirituale.",
  "Oggi è un giorno propizio per riconoscere i tuoi doni e condividerli.",
  "La tua anima chiede di essere nutrita con bellezza e silenzio.",
  "Le energie cosmiche favoriscono la coerenza tra pensieri, parole e azioni.",
  "Oggi le stelle suggeriscono di lasciare andare la perfezione e abbracciare l'autenticità.",
  "Un'opportunità si presenterà quando meno te la aspetti; resta aperto.",
  "La tua presenza ha il potere di guarire; usalo con saggezza e amore.",
  "Le stelle indicano che è tempo di onorare il tuo percorso, anche se tortuoso.",
  "Oggi è un giorno favorevole per rafforzare la tua connessione con la natura.",
  "La tua energia è in fase di espansione; non limitarla per paura.",
  "Le energie cosmiche ti invitano a vedere le sfide come maestri mascherati.",
  "Oggi le stelle favoriscono la chiarezza emotiva e la scelta consapevole.",
  "Un sogno potrebbe contenere una mappa per il tuo prossimo passo; fidati.",
  "La tua anima chiede di essere celebrata, non giudicata.",
  "Le stelle indicano che la pazienza e la costanza porteranno frutti abbondanti.",
  "Oggi è un giorno propizio per perdonare e liberarti da vecchi pesi.",
  "La tua intuizione è più saggia della logica; lasciala guidare.",
  "Oggi le stelle suggeriscono di riconoscere i tuoi progressi e festeggiarli.",
  "Un incontro inaspettato potrebbe cambiare la tua prospettiva per sempre.",
  "La tua luce interiore è sufficiente; non cercare di essere ciò che non sei.",
  "Le stelle indicano che è tempo di investire in te stesso con generosità.",
  "Oggi è un giorno favorevole per ascoltare il silenzio e trovare risposte.",
  "La tua anima chiede di esprimersi senza filtri; trova la tua voce.",
  "Le energie cosmiche ti invitano a vedere la bellezza nell'imperfezione.",
  "Oggi le stelle favoriscono la guarigione e il rinnovamento emotivo.",
  "Un messaggio dal destino potrebbe arrivare in forma di coincidenza; resta vigile.",
  "La tua forza interiore è la tua bussola; seguila anche quando la strada è oscura.",
  "Le stelle indicano che è tempo di onorare il tuo ritmo naturale.",
  "Oggi è un giorno propizio per rafforzare la tua connessione con l'infinito.",
  "La tua energia è in fase di purificazione; lascia andare ciò che non serve.",
  "Le energie cosmiche favoriscono la sincerità e l'autenticità nei rapporti.",
  "Oggi le stelle suggeriscono di celebrare la tua presenza come atto sacro.",
  "Un sogno ricorrente potrebbe contenere la chiave per il tuo blocco attuale.",
  "La tua anima chiede di essere nutrita con verità e bellezza.",
  "Le stelle indicano che la fiducia nel processo è la tua alleata più potente.",
  "Oggi è un giorno favorevole per aprire il cuore e ricevere l'inaspettato.",
  "La tua intuizione è un dono divino; onorala con attenzione.",
  "Le energie cosmiche ti invitano a vedere le sfide come opportunità di crescita.",
  "Oggi le stelle favoriscono la chiarezza e la decisione senza esitazione.",
  "Un incontro casuale potrebbe rivelarsi un messaggero del destino.",
  "La tua presenza è un faro; non temere di brillare anche quando il mondo è buio.",
  "Le stelle indicano che è tempo di investire nella tua pace interiore.",
  "Oggi è un giorno propizio per perdonare te stesso e ricominciare.",
  "Il tuo segno vibra con l'energia della rinascita; abbraccia il nuovo con fiducia.",
  "Le stelle ti invitano a fidarti del tuo istinto nelle decisioni importanti.",
  "Oggi è un momento favorevole per meditare e connetterti con la tua saggezza interiore.",
  "Un cambiamento inatteso potrebbe portare opportunità inaspettate.",
  "La tua sensibilità è un dono; usala per comprendere meglio te stesso e gli altri.",
  "Le energie planetarie sostengono la tua crescita personale; accogli i nuovi insegnamenti.",
  "Oggi è il giorno giusto per esprimere gratitudine per ciò che hai ricevuto.",
  "Non sottovalutare il potere dei piccoli gesti; possono creare grandi trasformazioni.",
  "Le stelle suggeriscono di prenderti cura del tuo benessere emotivo e fisico.",
  "La tua capacità di adattamento è una risorsa preziosa in questo momento.",
  "Oggi le influenze cosmiche favoriscono la creatività e l'ispirazione.",
  "Un incontro significativo potrebbe offrirti una nuova prospettiva sulla vita.",
  "Le stelle indicano un periodo di riflessione; usa questo tempo per chiarire i tuoi obiettivi.",
  "Oggi è favorevole per rafforzare le relazioni basate sulla sincerità e il rispetto.",
  "La tua energia è in armonia con il flusso universale; lasciati guidare.",
  "Le energie cosmiche ti invitano a esplorare nuovi interessi e passioni.",
  "Oggi le stelle suggeriscono di praticare la pazienza con te stesso e con gli altri.",
  "La tua presenza calma e centrata è un dono per chi ti sta vicino.",
  "Le stelle indicano che è tempo di rilasciare ciò che non ti serve più.",
  "Oggi è un giorno propizio per connetterti con la natura e rigenerarti.",
  "La tua anima cerca equilibrio; dedica tempo a ciò che ti nutre interiormente.",
  "Le energie planetarie favoriscono la comunicazione autentica e il dialogo profondo.",
  "Oggi le stelle ti invitano a fidarti del processo, anche se non vedi ancora i risultati.",
  "Un sogno vivido potrebbe contenere un messaggio importante per il tuo presente.",
  "La tua forza interiore è in crescita; affidati a essa nelle scelte difficili.",
  "Le stelle suggeriscono di celebrare i tuoi progressi, per quanto piccoli possano sembrare.",
  "Oggi è favorevole per perdonare e liberarti da risentimenti del passato.",
  "La tua intuizione è una guida affidabile; seguila con coraggio.",
  "Le energie cosmiche sostengono la tua capacità di trasformare le sfide in opportunità.",
  "Oggi le stelle ti invitano a praticare la gratitudine come chiave per l'abbondanza.",
  "La tua luce interiore brilla di più quando sei autentico e fedele a te stesso.",
  "Oggi è un giorno propizio per ascoltare il silenzio e ricevere ispirazione.",
  "La tua anima chiede di esprimersi con creatività e gioia; trova il tuo canale.",
  "Le energie planetarie favoriscono la chiarezza mentale e la presa di decisioni sagge.",
  "Oggi le stelle suggeriscono di lasciare andare il bisogno di controllo e di fidarti del flusso.",
  "Un'opportunità inaspettata potrebbe presentarsi; sii pronto a coglierla.",
  "La tua presenza amorevole ha il potere di guarire; usala con saggezza.",
  "Le stelle indicano che è tempo di onorare il tuo viaggio unico e personale.",
  "Oggi è favorevole per rafforzare la tua connessione con le energie cosmiche.",
  "La tua energia è in fase di espansione; non limitare la tua luce per paura.",
  "Le stelle oggi suggeriscono cautela: non è il momento di prendere decisioni affrettate.",
  "Un'energia di tensione aleggia intorno a te; evita confronti diretti nelle prossime ore.",
  "Mercurio retrogrado mette alla prova la tua pazienza: aspettati incomprensioni e ritardi.",
  "Le influenze cosmiche di oggi non favoriscono i nuovi inizi; consolida prima di espanderti.",
  "Un ostacolo inaspettato potrebbe rallentare i tuoi piani: accettalo senza resistenza inutile.",
  "Il cielo di oggi porta nubi: non tutto ciò che brilla è oro, e non tutto ciò che promette mantiene.",
  "Le stelle avvertono: qualcuno intorno a te non è sincero quanto sembra.",
  "Oggi l'universo ti chiede di fermarti: ignorare questo segnale potrebbe costare caro.",
  "Un ciclo si chiude con dolore necessario; resistere prolunga solo la sofferenza.",
  "Le energie di oggi sono pesanti: conserva le tue forze invece di disperderle.",
  "Non è una giornata favorevole per fidarsi del primo istinto: rifletti due volte prima di agire.",
  "Le stelle indicano una prova in arrivo: non sei ancora pronto quanto credi.",
  "Un'illusione che ti ha consolato sta per svanire; la verità, anche se scomoda, è necessaria.",
  "Oggi le energie cosmiche mettono alla prova la tua resistenza: non cedere al primo ostacolo.",
  "Qualcosa che stai aspettando non arriverà nei tempi che speravi; impara ad aspettare senza aspettarti.",
  "Le stelle suggeriscono che stai ignorando un segnale importante; il silenzio non risolve tutto.",
  "Un'ombra del passato torna a bussare: affrontarla è inevitabile, rimandare è inutile.",
  "Oggi il destino testa la tua capacità di sopportare l'incertezza senza perdere la bussola.",
  "Le influenze planetarie di oggi portano stanchezza e disillusione: è normale, non è definitivo.",
  "Attenzione alle promesse che fai oggi: le stelle ricordano tutto ciò che dimentichi di mantenere.",
  "Le stelle confermano: stai diventando esattamente ciò che dovevi diventare, anche se ancora non lo riconosci quando ti guardi allo specchio.",
  "Un seme piantato in silenzio, senza testimoni, sta per bucare la terra. Nessun atto fatto con intenzione pura va perduto.",
  "La luce che cerchi fuori è un riflesso di ciò che già brucia dentro di te; non si trova, si riconosce.",
  "Ogni cicatrice che porti è una mappa di sopravvivenza: non ti ha indebolito, ti ha reso cartografo della tua stessa forza.",
  "L'universo non ti mette alla prova per vederti cadere; ti mette alla prova perché sa già che sai rialzarti.",
  "Il dolore che hai attraversato in silenzio ha scavato in te uno spazio che ora può contenere gioia più grande di prima.",
  "Oggi il cosmo ti restituisce energia che hai donato senza aspettarti nulla: la generosità non si disperde, si moltiplica.",
  "Non sei in ritardo su nessuna versione della tua vita; stai percorrendo esattamente il tempo che ti appartiene.",
  "La pace che senti in questo istante non è passività: è la calma di chi ha smesso di combattere con ciò che non può controllare.",
  "Il futuro che temi non esiste ancora; il coraggio che hai già si estende ben oltre ciò che riesci a immaginare.",
  "Le stelle vedono in te risorse che la tua mente critica non ha ancora il permesso di ammettere.",
  "Un confine che poni con amore verso te stesso costruisce la strada attraverso cui l'altro impara a rispettarti davvero.",
  "Non è la velocità che ti porta a destinazione: è la direzione. Rallenta se serve, ma non cambiare rotta.",
  "Ogni volta che hai scelto l'autenticità invece del comodo, hai investito nella versione più vera di te stesso.",
  "Il tuo silenzio non è debolezza: è la scelta di chi sa che non tutto merita una risposta.",
  "La gioia che nascondi per non sembrare ingenuo è quella che ti tiene vivo; permettile di manifestarsi senza vergogna.",
  "Quello che chiami 'ancora non abbastanza' è già più di ciò che esisteva prima. Il progresso si misura da dove sei partito.",
  "Il coraggio più profondo non è saltare nel vuoto: è restare presente nella propria vita anche quando fa paura.",
  "Una connessione autentica vale più di mille approvazioni superficiali; le stelle ti guidano verso ciò che nutre davvero.",
  "Il tuo corpo ha attraversato stagioni difficili e continua a portarti avanti: ringrazialo oggi, concretamente.",
  "Le radici non le vedi, ma è grazie a loro che reggi la tempesta. Il tuo lavoro interiore silenzioso ha costruito qualcosa di solido.",
  "L'incontro che stai per fare non è casuale: l'universo ha orchestrato questo momento con cura che supera la tua comprensione.",
  "Ogni versione di te che hai lasciato indietro era necessaria per fare spazio a chi sei adesso.",
  "Le stelle ricordano che la tua sensibilità non è un difetto del carattere: è la tua intelligenza emotiva in azione.",
  "Il piccolo atto di cura che ti concedi oggi si propaga silenziosamente nelle tue prossime settimane come acqua nel terreno assetato.",
  "Stai cercando convalida dove non può arrivare; l'universo ti chiede di guardare dentro prima di chiedere fuori.",
  "Qualcosa che costruisci su fondamenta di paura anziché di scelta crollerà prima o poi: meglio smontarlo adesso con le tue mani.",
  "Le stelle rivelano un nodo irrisolto che stai spostando da un angolo all'altro della tua vita invece di scioglierlo.",
  "Il silenzio che mantieni per pace non sta mantenendo la pace: sta accumulando pressione che esploderà altrove.",
  "Non puoi svuotare te stesso per riempire gli altri a tempo indeterminato; ciò che stai dando non è amore, è esaurimento.",
  "L'opportunità che aspetti non bussa due volte alla stessa porta; se l'hai già vista passare, chiediti perché non hai aperto.",
  "C'è una verità scomoda che stai rinviando da settimane: l'universo non ti darà pace finché non la guardi in faccia.",
  "La persona che stai cercando di compiacere non riconoscerà mai abbastanza il tuo sforzo; il problema non è lo sforzo.",
  "Quello che chiami 'restare prudente' è a volte solo il nome che dai alla paura di vivere fino in fondo.",
  "Stai confondendo lealtà con dipendenza: restare dove non cresci non è virtù, è resistenza al cambiamento.",
  "Le stelle avvertono che stai investendo energie preziose in un progetto o relazione che non ha la stessa cura per te.",
  "Il rimando cronico è un segnale: non è mancanza di tempo, è mancanza di chiarezza su ciò che vuoi davvero.",
  "Qualcuno nella tua cerchia parla bene di te quando sei presente e diversamente quando sei assente: fidati di ciò che senti.",
  "Il successo che cerchi con questa strategia ha un tetto basso; l'universo ti mostra che esiste un'altra strada.",
  "Stai nutrendo un'abitudine che ti consuma più di quanto ti sostenga; riconoscerla è il primo atto di liberazione.",
  "Le stelle ricordano che ciò che reprime accumula, e ciò che accumula tende a esplodere quando meno vuoi.",
  "Non è il momento, né le circostanze, né gli altri: sei tu l'unica variabile che non hai ancora considerato.",
  "La stanchezza che senti non è fisica: è l'esaurimento di chi vive troppo lontano da ciò che ama davvero.",
  "Stai aspettando che le cose cambino senza cambiare tu: ma l'universo non muove il mondo per chi resta fermo.",
  "Il rancore che tieni in forma di 'indifferenza' consuma le tue energie con la stessa efficacia della rabbia aperta.",
  "Quello che stai idealizzando da lontano non corrisponde alla realtà di vicino; le stelle ti chiedono di guardare senza filtri.",
  "Un accordo che senti già sbagliato nella pancia non migliorerà con la firma; il corpo sa cose che la mente non ammette.",
  "Stai dando più valore al giudizio degli estranei che alla tua voce interiore; questo squilibrio ha un costo crescente.",
  "Le stelle ti mostrano che stai costruendo per ciò che pensi di dover essere invece che per ciò che sei davvero.",
  "Il momento di chiedere aiuto è già passato di due settimane; non attendere che il carico diventi insostenibile per chiamare.",
  "Una porta che sembrava sigillata torna a vibrare sotto la mano del destino: avvicinati con fiducia, perché non si apre per caso.",
  "Le stelle versano sul tuo cammino una luce morbida e precisa: ciò che non capivi ieri oggi può diventare direzione.",
  "Un gesto gentile compiuto senza testimoni sta generando ritorni invisibili; l'universo non dimentica ciò che nasce dal cuore pulito.",
  "La tua energia sta ritrovando il proprio centro: ogni scelta fatta con calma oggi avrà radici più profonde di quanto immagini.",
  "Un incontro, una parola o un segnale minimo potrebbe accendere una comprensione nuova: resta presente, perché il cielo parla nei dettagli.",
  "La pazienza che hai coltivato sta maturando in forza silenziosa; presto vedrai perché l'attesa non è stata tempo perduto.",
  "Oggi la tua intuizione è una lanterna accesa nella nebbia: non chiederle prove, chiedile solo il coraggio di seguirla.",
  "Una piccola decisione presa con amore verso te stesso può cambiare l'umore dell'intera giornata e aprire una settimana più leggera.",
  "Le stelle favoriscono chi sceglie la verità con dolcezza: parla chiaro, ma lascia che il cuore temperi ogni parola.",
  "Qualcosa che hai seminato in silenzio comincia a muoversi sotto la superficie; non scavare per controllare, continua a nutrire.",
  "Il tuo magnetismo oggi nasce dalla serenità, non dallo sforzo: più smetti di rincorrere, più ciò che è giusto si avvicina.",
  "Una benedizione discreta si nasconde dietro un cambiamento di programma: non irritarti se il percorso devia, potrebbe proteggerti.",
  "Le stelle ti invitano a fidarti della tua maturità emotiva: hai superato prove che ora possono diventare saggezza per scegliere meglio.",
  "Oggi un nodo interiore può sciogliersi con meno fatica del previsto, se smetti di tirarlo e inizi ad ascoltarlo.",
  "La tua luce non ha bisogno di rumore per farsi riconoscere: chi è destinato a vederti saprà distinguerti anche nel silenzio.",
  "Una conversazione sincera può rimettere armonia dove c'era distanza; il cielo sostiene le parole dette senza orgoglio.",
  "L'abbondanza oggi passa attraverso la semplicità: un ordine ritrovato, una scelta sobria, un sì detto solo a ciò che conta.",
  "Le stelle aprono una finestra sul futuro: non correre a entrarci, osserva prima la qualità dell'aria che arriva.",
  "Il tuo cuore possiede una bussola più antica della paura; lascia che indichi il nord anche quando la mente pretende mappe perfette.",
  "Una conferma che aspettavi può arrivare in forma sottile: un messaggio, uno sguardo, una coincidenza troppo precisa per essere casuale.",
  "Oggi il cielo premia la costanza: il passo piccolo, ripetuto con fede, vale più di una promessa grandiosa lasciata a metà.",
  "Un nuovo equilibrio sta nascendo dentro di te; non assomiglierà al passato, e proprio per questo potrà sostenerti meglio.",
  "Le stelle ti ricordano che non devi forzare ciò che è destinato: ciò che ti appartiene riconosce la strada verso di te.",
  "Una vecchia paura perde potere quando la guardi senza vergogna; oggi puoi trasformarla in alleata del tuo discernimento.",
  "La giornata porta un filo d'oro tra intuizione e azione: se lo segui con delicatezza, ti condurrà a una scelta feconda.",
  "Il bene che hai dato torna con un volto diverso da quello che immaginavi: accoglilo senza chiedergli di somigliare al passato.",
  "Le stelle favoriscono la riconciliazione con una parte di te che avevi giudicato troppo severamente; oggi puoi riabbracciarla.",
  "Un desiderio autentico bussa con discrezione: non soffocarlo con il realismo degli altri, dagli almeno uno spazio per respirare.",
  "La tua presenza oggi può guarire più di quanto credi; entra nelle stanze con gentilezza e lascia che la calma parli per te.",
  "Il destino ti offre un margine di grazia: usalo per scegliere con lucidità, non per rimandare ancora ciò che sai già.",
  "Un'ombra sottile attraversa la giornata: non tutto ciò che appare urgente merita la tua energia, e non tutto ciò che sorride è alleato.",
  "Le stelle avvertono di una promessa fragile: prima di crederci, osserva se i fatti camminano nella stessa direzione delle parole.",
  "Oggi un vecchio schema potrebbe ripresentarsi con un volto nuovo; riconoscerlo subito ti eviterà di ripetere una lezione già pagata.",
  "Una tensione non detta rischia di crescere nel silenzio: se continui a evitarla, finirà per parlare al posto tuo.",
  "Il cielo non sostiene le decisioni prese per paura di perdere qualcuno; ciò che ti trattiene con ansia non sempre ti ama davvero.",
  "Un ritardo o un rifiuto potrebbe ferire l'orgoglio, ma contiene un avvertimento: non ogni porta chiusa è ingiustizia.",
  "Le stelle chiedono prudenza nei legami e negli accordi: una crepa piccola oggi può diventare frattura se la copri con ottimismo cieco.",
  "Qualcuno potrebbe testare i tuoi confini con dolcezza apparente; non confondere la gentilezza esterna con il rispetto reale.",
  "Oggi la stanchezza può renderti vulnerabile a scelte impulsive: non decidere dal vuoto, prima torna a nutrirti.",
  "Un desiderio insistente potrebbe non essere intuizione, ma attaccamento travestito da destino; osserva se porta pace o agitazione.",
  "Le stelle indicano una verità scomoda in arrivo: non chiudere gli occhi, perché ignorarla costerà più che ascoltarla.",
  "Una persona o situazione ti sta chiedendo più di quanto restituisca; il cielo ti invita a fare i conti senza romanticizzare lo squilibrio.",
  "Non è il giorno adatto per sfidare il caso: ciò che sembra audacia potrebbe essere solo imprudenza con un nome più elegante.",
  "Un malinteso può nascere da una parola detta troppo in fretta; oggi pesa le frasi, perché il vento le porterà lontano.",
  "Le stelle avvertono che la nostalgia può mentire: non tutto ciò che ti manca merita di tornare nella tua vita.",
  "Un progetto costruito sull'approvazione degli altri mostra segni di fragilità; se non nasce da te, non reggerà la pressione.",
  "Oggi potresti sentire distanza proprio dove cercavi conferma: non inseguire chi usa il silenzio come forma di potere.",
  "Il cielo segnala dispersione: troppe energie stanno uscendo da fessure che continui a chiamare piccoli problemi.",
  "Una scelta rimandata comincia a scegliere per te; più aspetti, meno spazio avrai per guidarne le conseguenze.",
  "Le stelle non puniscono, ma mostrano: se qualcosa si incrina oggi, forse era già fragile da molto prima.",
],

consigli:[
  "Le stelle suggeriscono pazienza: ciò che aspetti sta arrivando, ma con i suoi tempi cosmici. Fidati del ritmo dell'universo.","Un incontro apparentemente casuale nasconde un messaggio importante. Le coincidenze non esistono — esistono i messaggi non ascoltati.","Il passato ritorna per insegnarti, non per punirti. Impara la lezione senza portarla nel futuro come un peso.","La risposta che cerchi disperatamente fuori è già dentro di te. Medita e ascolta il silenzio tra i pensieri.","Non tutto è perduto: una porta si chiude e tre si aprono. Fidati dell'intelligenza dell'universo.","Ciò che brilla non è sempre oro, e l'oro non sempre brilla. Guarda con gli occhi dell'anima.","Il coraggio non è assenza di paura, ma agire nonostante essa. Fai quel passo che rimandi.","Perdona te stesso per prima cosa: il rancore verso se stessi è il peso più inutile che esista.","L'equilibrio non è una posizione statica, è un movimento continuo di aggiustamenti piccoli e costanti.","Un sogno ricorrente è una lettera che l'inconscio ti spedisce. Aprila e leggila con attenzione.","La gratitudine trasforma ciò che hai in abbondanza e ciò che sei in abbastanza.","Il corpo sa prima della mente. Ascolta le sue sensazioni come messaggi di saggezza antica.","Un piccolo gesto di gentilezza gratuita può cambiare la giornata di qualcuno — e inaspettatamente anche la tua.","La creatività non chiede permesso: esprimi qualcosa oggi, qualsiasi cosa, senza giudicarla.","Il confronto con gli altri è il ladro di gioia più sottile che esista. Il tuo percorso è unico.","Un messaggio inatteso porta una svolta che non aspettavi. Sii aperto a ciò che arriva da direzioni inaspettate.","La natura ti chiama: una passeggiata all'aperto rigenera ciò che nessun farmaco può toccare.","Un vecchio contatto che riaffiora porta con sé notizie migliori di quanto immagini.","L'intuito sa già la risposta. Il problema è che la mente non si fida di lui per paura dell'incertezza.","Un rischio piccolo ma calcolato può aprire una porta che sembrava murata per sempre.","Il momento presente è l'unico che possiedi davvero. Abita ogni istante invece di attraversarlo in corsa.","Le parole hanno un peso specifico: scegli con cura quelle che dici a te stesso — ti creano letteralmente.","Un cambiamento apparentemente negativo è spesso una benedizione in incognito. Aspetta e osserva.","La semplicità è l'ultima sofisticazione: a volte meno è precisamente ciò di cui hai bisogno.","Il respiro è sempre con te come ancora: quando tutto sembra caotico, ritorna a lui.","Non aspettare il momento perfetto — non arriverà mai. Inizia da dove sei, con quello che hai.","La tua luce interiore è originale e irriproducibile: smettila di nasconderla per convenienza.","Un atto di coraggio oggi costruisce la fiducia di domani e di tutti i giorni che seguono.","Ciò che vedi negli altri è spesso uno specchio: usa questa consapevolezza invece di difenderti.","Il perdono non è un regalo per chi ti ha fatto del male. È la tua liberazione personale.","La curiosità mantiene giovane l'anima e fresca la mente: smettila solo quando sei pronto a fermarti.","Il silenzio non è vuoto: è lo spazio dove la tua voce più vera finalmente si fa sentire.","Un obiettivo definito con precisione è già metà raggiunto. Scrivi cosa vuoi davvero.","La flessibilità non è debolezza: è l'intelligenza che sa quando piegare senza spezzarsi.","Celebra i progressi minimi: ogni passo conta nel viaggio verso chi sei destinato a diventare.","La paura è spesso il segnale che sei esattamente al confine della tua crescita.","Il tempo speso con amore pieno non è mai tempo perso — è il tempo più produttivo che esista.","Non cercare di controllare tutto: la fiducia nell'universo è la forma più alta di intelligenza.","La tua presenza autentica è un dono: sii qui, adesso, per te e per chi hai intorno.","Un pensiero coltivato con cura diventa un'intenzione. Un'intenzione ripetuta diventa realtà.","La resilienza non è non cadere mai: è rialzarsi ogni volta portando la saggezza della caduta.","L'autenticità attrae le persone giuste e allontana quelle sbagliate: è il miglior filtro che esista.","La vita non è un problema da risolvere con la logica — è un mistero da abitare con meraviglia.","Il tuo valore non dipende da ciò che produci: sei prezioso semplicemente per il fatto di esistere.","La pace interiore è la fondazione su cui costruire tutto il resto: investici prima di qualsiasi altra cosa.","Un atto di fede oggi apre porte che la sola logica non riuscirebbe mai a vedere.","Le radici profonde permettono ai rami di toccare il cielo: fortifica le fondamenta.","Chi ti vuole bene davvero ti dice le cose difficili: impara a distinguerlo dal giudizio distruttivo.","La disciplina non è rigidità: è l'amore per il risultato più forte dell'istinto del momento.","Ogni alba è una pagina bianca: che storia vuoi scrivere oggi su di te?","Il caos che vedi fuori riflette spesso l'ordine che manca dentro. Comincia da te.","Le stagioni cambiano perché il mondo è vivo: i tuoi cambiamenti sono segnali di vita, non di crisi.","La perfezione è nemica del completamento: fatto con amore batte perfetto mai finito.","Un confine sano detto con chiarezza protegge sia te che l'altro: parlalo senza scuse.","La semenza del grande successo è sempre un piccolo gesto umile e quotidiano.","Non tutto ciò che finisce muore: alcune cose finiscono per trasformarsi in qualcosa di meglio.","L'attenzione che dai alle cose le fa crescere: scegli con cura dove metti il tuo fuoco.","Il cambiamento che temi è già avvenuto dentro di te: il fuori lo sta solo registrando.","Un momento di bellezza vissuto pienamente vale più di mille esperienze consumate distrattamente.","Ciò che chiedi all'universo con intenzione chiara e cuore aperto trova sempre la strada di tornare.","L'universo non ti abbandona mai: anche nel silenzio più profondo, stai ricevendo ciò di cui hai bisogno per crescere.","Un'idea che sembra piccola contiene un universo intero: nutrila con fiducia e darebbe frutti che non riesci ancora a immaginare.","Il cambiamento non arriva quando sei pronto — arriva quando ne hai bisogno. Apriti e lasciati trasportare.","Ciò che ti spaventa di più è spesso la direzione esatta in cui devi andare: il coraggio non chiede permesso.","La gentilezza verso te stesso non è debolezza — è il fondamento su cui costruisci qualsiasi forma di forza autentica.","Un confine è un atto d'amore: verso te stesso e verso chi stai proteggendo con quella linea chiara e necessaria.","Il dolore che provi oggi sta lavorando per te: sta radendo ciò che non serve per far spazio a ciò che è vero.","La tua storia non ti definisce — ma ti ha forgiato. Porta quella forza nel presente senza portare le catene.","Non tutto merita la tua risposta: a volte il silenzio è la frase più eloquente e saggia che puoi offrire.","I tuoi pensieri sono semi: controlla con attenzione quello che pianturi nel terreno della tua mente ogni mattino.","La gratitudine non è negare il dolore — è scegliere di vedere anche ciò che funziona, mentre si lavora su ciò che non va.","Un piccolo rituale quotidiano ha più potere trasformativo di una grande risoluzione di capodanno: la costanza vince sempre.","Quello che stai cercando fuori di te ha già trovato la strada verso di te: calmati abbastanza da sentirlo arrivare.","La solitudine creativa è una delle forme più alte di amore verso se stessi: usala senza senso di colpa.","Le relazioni sane si riconoscono dal come ti senti dopo, non durante: nota come ti lascia quella persona.","Il momento in cui smetti di chiedere il permesso di essere te stesso è il momento in cui inizi a vivere davvero.","Il tuo corpo è saggio in modo che la mente non comprende: rispettalo, ascoltalo, ringrazialo per ciò che porta.","Un fallimento vissuto con consapevolezza vale più di dieci successi vissuti distrattamente: estrai tutto l'oro.","L'amore che cerchi non è quello che ti salva — è quello che ti incontra mentre ti salvi da solo.","Non devi spiegare la tua crescita a chi non vuole capirla: il tuo progresso non ha bisogno di difensori.","Ogni persona che incontri ti insegna qualcosa — anche chi ti fa del male ha portato una lezione preziosa.","Il tempo che senti di sprecare spesso è quello in cui stai elaborando, ricaricando, preparando il terreno.","La tua intuizione è stata coltivata da ogni esperienza vissuta: fidati di essa più spesso di quanto non fai.","Quello che chiami difetto è spesso un dono non ancora compreso: guarda i tuoi limiti con occhi diversi.","Un passo verso la tua autenticità vale più di cento passi verso ciò che gli altri si aspettano da te.","Il vuoto che senti a volte non è mancanza: è lo spazio che l'universo ha appena creato per qualcosa di nuovo.","Non è mai troppo tardi per iniziare: ogni giorno che nasce porta con sé una versione inedita delle tue possibilità.","Chi ti ama davvero celebra la tua crescita anche quando quella crescita ti porta lontano da loro: è amore maturo.","La chiarezza non arriva prima della decisione — arriva durante e dopo. Agisci e il nebbia si diraderà.","Le parole che usi per descrivere la tua vita la stanno riscrivendo in questo momento: sceglile con intenzione.","Il riposo profondo non è passività — è uno degli atti più rivoluzionari in un mondo che glorifica l'esaurimento.","Non tutto ciò che hai perso era tuo: alcune perdite sono la vita che ti libera da ciò che ti tratteneva.","La tua energia è la tua risorsa più preziosa: investi in cosa, come e con chi la spendi ogni giorno.","Un pensiero compassionevole verso te stesso oggi vale più di mille anni di autocritica intensa.","Il coraggio di cambiare idea è raro e prezioso: chi non cambia mai idea non sta crescendo, sta solo invecchiando.","Ogni piccola vittoria merita di essere celebrata: il cervello impara dal piacere del progresso, non solo dalla paura del fallimento.","La tua presenza piena in questo momento è il più grande dono che puoi fare a te stesso e a chi hai accanto.","Non aspettare di sentirti pronto: la preparazione è importante, ma a un certo punto devi solo fare il tiro.","Il limite che vedi davanti a te è spesso il riflesso di un limite che porti dentro: lavora lì prima.","Alcune porte si aprono solo dall'interno: e la chiave sei tu — il tuo coraggio, la tua verità, la tua scelta.","La vita è generosa con chi sa chiedere: formula la tua richiesta con chiarezza e lascia lo spazio alla risposta.","Il processo è parte del risultato: non saltarlo per arrivare prima — perderesti i frammenti di saggezza lungo il percorso.","Chi sei quando sei da solo è la versione più onesta di te: coltivala con la stessa cura che dai alla versione pubblica.","Un'idea coraggiosa condivisa con la persona giusta può diventare il punto di svolta della tua storia.","La crescita vera fa un po' male: non perché qualcosa va storto, ma perché stai espandendo ciò che eri.","Non devi avere tutto capito per andare avanti: puoi procedere con le domande aperte e la fiducia nel processo.","La tua storia di vita, con tutte le sue ombre, è esattamente ciò che ti ha reso capace di quello che sei ora.","Il silenzio tra le parole è dove vive il senso più profondo: impara ad ascoltarlo nei tuoi dialoghi.","Ciò che chiami perfezione è spesso una forma di paura: paura di essere visto, giudicato, rifiutato. Agisci lo stesso.","La connessione autentica con una sola persona vale più di mille relazioni superficiali: punta alla profondità.","Un momento di meraviglia pura — davanti a un tramonto, a una pagina, a una melodia — ricarica l'anima come nient'altro.","Non devi portare il peso dell'altro per dimostrare che ti importa: puoi esserci senza dissolverti.","Il tuo ritmo di vita è personale e non negoziabile: smettila di confrontarlo con quello degli altri.","Ogni radice profonda che coltivi nella quiete è linfa che salirà nei rami nei momenti di vento forte.","La generosità torna sempre — non sempre da chi l'ha ricevuta, ma sempre dall'universo che tiene il conto.","Una domanda posta con onestà vale più di dieci risposte trovate con la logica: chiedi con coraggio.","Il modo in cui tratti te stesso insegna agli altri come trattarti: inizia tu a darti il rispetto che cerchi.","Non ogni capitolo della tua vita ha bisogno di un finale eroico: alcuni si chiudono in silenzio, e va bene così.","La tua intuizione conosce la strada anche quando la mente è persa nella nebbia: fidati del primo impulso.","Ogni giorno in cui scegli di essere autentico invece di comodo stai costruendo una vita che valga la pena vivere.","Le stelle non affrettano il loro cammino; permetti anche alla tua anima di respirare.","Ogni alba è un invito a ricominciare con intenzione.","Non cercare la luce fuori: accendila dentro, e il cammino si illuminerà da sé.","La pazienza è il linguaggio che l'universo comprende meglio.","Oggi lascia andare ciò che non ti appartiene più.","Il silenzio non è vuoto: è il luogo dove nascono le risposte.","Cammina con leggerezza: il destino preferisce chi non trascina pesi inutili.","La verità non urla, sussurra. Ascolta con il cuore.","Non ogni cambiamento è una perdita; a volte è solo un nuovo inizio travestito.","La tua energia è preziosa: investila solo dove fiorisce.","Le coincidenze sono solo l'universo che ti strizza l'occhio.","Non devi avere tutto chiaro per iniziare; basta un passo sincero.","La saggezza non si trova nelle risposte, ma nelle domande giuste.","Oggi scegli gentilezza verso te stesso; è il primo atto di magia.","Non confrontare il tuo capitolo 3 con il capitolo 20 di qualcun altro.","Il tempo non guarisce tutto; è ciò che fai nel tempo che trasforma.","La gratitudine trasforma il poco in abbondanza.","Il tuo valore non dipende da chi ti guarda, ma da chi sei quando nessuno guarda.","La magia quotidiana è notare il bello nelle piccole cose.","La tua intuizione è più antica della tua logica. Fidati.","Ogni incontro ha uno scopo; non tutti sono per sempre, ma tutti sono necessari.","La pace non è assenza di tempesta, ma calma nel centro di essa.","Non devi essere perfetto per essere amato; devi essere vero.","Le stelle non brillano per competere, ma per illuminare il cammino altrui.","Il passato è una lezione, non una dimora.","La creatività è l'anima che respira attraverso di te.","Non aspettare il momento giusto; crealo con le tue mani.","La resilienza è la dolcezza che non si spezza.","Ogni fine è un portale. Oltre c'è ciò che devi ancora scoprire.","La tua anima conosce la strada anche quando tu la perdi di vista.","Lascia andare la necessità di avere ragione e scegli la pace.","Il tempo speso per te stesso non è egoismo, è necessità.","Non ogni porta che si chiude è un rifiuto; a volte è protezione.","La tua voce interiore merita lo stesso rispetto di quella degli altri.","Le risposte arrivano quando smetti di inseguirle e inizi ad ascoltare.","Il coraggio non è assenza di paura, ma scelta di agire nonostante essa.","La tua essenza è già completa; non devi aggiustare ciò che è già sacro.","La magia è nell'ordinario vissuto con consapevolezza.","Non temere il buio; è lì che le stelle si rivelano.","La tua presenza è sufficiente. Non devi dimostrare nulla per meritare spazio.","La tua ombra non è il nemico; è la parte di te che chiede integrazione.","Ogni passo, anche incerto, ti avvicina a te stesso.","Non cercare di salvare chi non vuole essere salvato; offri luce, non catene.","Il tuo cammino è unico; non esistono scorciatoie per la tua anima.","L'amore non è possessione, ma spazio sicuro dove due anime crescono insieme.","La compatibilità non è assenza di conflitti, ma volontà di riparare dopo ogni tempesta.","A volte l'anima gemella non è chi ti completa, ma chi ti sfida a diventare intero.","L'amore vero non chiede di cambiare l'altro, ma di accompagnarlo nella sua evoluzione.","La passione accende, ma è la tenerezza quotidiana che tiene vivo il fuoco.","Due cuori allineati non battono allo stesso ritmo, ma si ascoltano nel silenzio.","La vera intimità non si costruisce solo nei letti, ma nelle conversazioni oneste.","Non cercare qualcuno che ti salvi; cerca qualcuno con cui camminare verso la luce.","La compatibilità si nutre di rispetto, non di perfezione.","A volte la persona giusta arriva quando smetti di cercarla con disperazione.","L'amore non è un rifugio dal mondo, ma un faro per attraversarlo insieme.","Non confondere l'attaccamento con l'amore; il primo tiene, il secondo libera.","La passione può bruciare forte, ma è la cura quotidiana che non si spegne.","La vera connessione nasce quando entrambi hanno il coraggio di essere vulnerabili.","Non cercare qualcuno che ti renda felice; cerca qualcuno con cui costruire felicità.","L'amore maturo sa perdonare senza dimenticare, e imparare senza giudicare.","La compatibilità si misura nella gestione delle differenze, non nella loro assenza.","L'amore sano non chiede sacrifici, ma condivisione consapevole.","La vera intimità è quando il silenzio non è imbarazzo, ma pace condivisa.","Non confondere la dipendenza con l'amore; il primo è paura, il secondo è libertà.","Il lupo ti insegna il valore della fedeltà al branco e alla tua verità interiore.","L'aquila ti invita a elevare lo sguardo e vedere oltre le illusioni del quotidiano.","Il gufo sussurra che la saggezza nasce dal coraggio di guardare nel buio.","Il cervo ti ricorda la gentilezza come forza e la sensibilità come dono sacro.","Il serpente ti insegna a trasformarti lasciando andare la pelle del passato.","Il cavallo galoppa verso la tua libertà; non temere di correre verso te stesso.","L'orso ti invita a ritirarti nel riposo per poi risvegliarti con forza rinnovata.","Il corvo porta messaggi dall'inconscio; ascolta ciò che il sogno ti dice.","Il delfino ti guida attraverso le acque emotive con gioia e intelligenza.","La volpe ti insegna l'astuzia sacra: adattarsi senza perdere la propria essenza.","Il falco ti chiede di agire con precisione e visione chiara."
],

tarot:{
  carte:[

  {id:0, n:"Il Matto",         s:"maggiori",e:"🌟",u:"Nuovo inizio assoluto, salto nel vuoto con fede, libertà totale dall'abitudine",r:"Imprudenza senza calcolo, rischio insensato, fuga dalle responsabilità"},
  {id:1, n:"Il Mago",          s:"maggiori",e:"🪄",u:"Tutti gli elementi a disposizione, volontà creatrice, potere di manifestare",r:"Manipolazione, talenti ignorati, inganno mascherato da competenza"},
  {id:2, n:"La Papessa",       s:"maggiori",e:"📖",u:"Saggezza interiore, intuizione pura, segreti da svelare solo nel silenzio",r:"Segreti nascosti, rifiuto dell'intuito, superficialità dove serve profondità"},
  {id:3, n:"L'Imperatrice",    s:"maggiori",e:"🌿",u:"Abbondanza, fertilità, creatività che si manifesta, connessione con la Natura",r:"Blocco creativo, dipendenza emotiva, corpo e sensualità trascurati"},
  {id:4, n:"L'Imperatore",     s:"maggiori",e:"👑",u:"Struttura solida, autorità guadagnata, disciplina come atto d'amore verso sé",r:"Rigidità che soffoca, tirannia, controllo ossessivo che distrugge"},
  {id:5, n:"Il Papa",          s:"maggiori",e:"✝️",u:"Tradizione come radice, guida spirituale autentica, trasmissione di valori",r:"Dogmatismo soffocante, conformismo per paura, ipocrisia spirituale"},
  {id:6, n:"Gli Amanti",       s:"maggiori",e:"💑",u:"Scelta del cuore, allineamento profondo di valori, unione sacra tra opposti",r:"Indecisione paralizzante, disarmonia di valori, scelta sbagliata per paura"},
  {id:7, n:"Il Carro",         s:"maggiori",e:"🏆",u:"Vittoria con determinazione, controllo delle forze opposte, avanzata risoluta",r:"Aggressività fuori controllo, dispersione delle energie, ostacoli che bloccano"},
  {id:8, n:"La Forza",         s:"maggiori",e:"🦁",u:"Coraggio gentile, dominio delle passioni con amore, forza interiore che non si impone",r:"Cedimento alle passioni, debolezza di fronte alle sfide, impulsività incontrollata"},
  {id:9, n:"L'Eremita",        s:"maggiori",e:"🕯️",u:"Introspezione necessaria, saggezza guadagnata nel silenzio, guida interiore",r:"Isolamento punitivo, rifiuto del mondo per paura, solitudine sterile"},
  {id:10,n:"La Ruota",         s:"maggiori",e:"🎡",u:"Il destino gira favorevolmente, fortuna in arrivo, accettazione dei cicli",r:"Resistenza al cambiamento, sfortuna temporanea, lotta inutile contro il flusso"},
  {id:11,n:"La Giustizia",     s:"maggiori",e:"⚖️",u:"Equilibrio perfetto, karma che agisce con precisione, decisione imparziale",r:"Ingiustizia, bugia consapevole, rifiuto di assumersi la responsabilità"},
  {id:12,n:"L'Appeso",         s:"maggiori",e:"🔄",u:"Sacrificio volontario, nuova prospettiva ribaltata, resa che libera tutto",r:"Vittimismo passivo, stagnazione sterile, ritardo per paura di rinunciare"},
  {id:13,n:"La Morte",         s:"maggiori",e:"🌑",u:"Fine inevitabile di un ciclo, trasformazione necessaria, rinascita dall'interno",r:"Resistenza alla fine necessaria, stagnazione paralizzante, paura del cambiamento"},
  {id:14,n:"La Temperanza",    s:"maggiori",e:"⚗️",u:"Alchimia interiore, armonia tra opposti, guarigione graduale e profonda",r:"Eccessi di ogni tipo, impazienza distruttiva, squilibrio che si avvita"},
  {id:15,n:"Il Diavolo",       s:"maggiori",e:"🔗",u:"Energia primordiale da integrare, ombre da riconoscere, lezione delle dipendenze",r:"Liberazione dalle catene illusorie, consapevolezza che spezza i legami"},
  {id:16,n:"La Torre",         s:"maggiori",e:"⚡",u:"Rivelazione esplosiva che libera, crollo di strutture false, luce nella rovina",r:"Paura della crisi necessaria, resistenza all'inevitabile, scosse piccole invece del terremoto"},
  {id:17,n:"La Stella",        s:"maggiori",e:"⭐",u:"Speranza rinnovata dopo la tempesta, ispirazione celeste, serenità come stato naturale",r:"Sfiducia che oscura i doni presenti, pessimismo cronico, mancanza di fede"},
  {id:18,n:"La Luna",          s:"maggiori",e:"🌕",u:"Il mondo dell'inconscio da attraversare, illusioni da riconoscere, sogni che parlano verità",r:"Inganno sottile, paure irrazionali che paralizzano, confusione mentale densa"},
  {id:19,n:"Il Sole",          s:"maggiori",e:"☀️",u:"Gioia pura, successo luminoso, vitalità e chiarezza che trionfano",r:"Egocentrismo che oscura gli altri, ottimismo superficiale, rifiuto delle ombre"},
  {id:20,n:"Il Giudizio",      s:"maggiori",e:"📯",u:"Risveglio spirituale, chiamata irrevocabile, redenzione e rinascita totale",r:"Rifiuto della chiamata per paura, paralisi del dubbio, autocritica che impedisce l'ascesa"},
  {id:21,n:"Il Mondo",         s:"maggiori",e:"🌍",u:"Completamento del grande ciclo, totalità integrata, trionfo che abbraccia tutto",r:"Ciclo incompiuto per paura della fine, senso di incompletezza persistente"},

  {id:22,n:"Asso dei Bastoni",      s:"bastoni",e:"🔥",u:"Scintilla divina di creatività, nuovo inizio vitale, forza d'ispirazione che chiede forma",r:"Blocco creativo alla fonte, energia vitale stagnante, opportunità creativa mancata"},
  {id:23,n:"Due dei Bastoni",       s:"bastoni",e:"🔥",u:"Visione audace del futuro, pianificazione a lungo raggio, il mondo nelle tue mani",r:"Paura del passo successivo, analisi paralisi, resistenza all'espansione"},
  {id:24,n:"Tre dei Bastoni",       s:"bastoni",e:"🔥",u:"Espansione in corso, risultati che arrivano da lontano, fiducia nel progresso",r:"Ritardi e ostacoli all'espansione, aspettative deluse, collaborazioni problematiche"},
  {id:25,n:"Quattro dei Bastoni",   s:"bastoni",e:"🔥",u:"Celebrazione meritata, casa come rifugio di gioia, armonia e stabilità conquistate",r:"Tensioni domestiche, celebrazione forzata, instabilità nelle fondamenta"},
  {id:26,n:"Cinque dei Bastoni",    s:"bastoni",e:"🔥",u:"Competizione stimolante, sfide che affilano, disaccordo produttivo",r:"Conflitto sterile e distruttivo, litigi senza soluzione, caos senza direzione"},
  {id:27,n:"Sei dei Bastoni",       s:"bastoni",e:"🔥",u:"Successo pubblico riconosciuto, trionfo sulla scena, ritorno del vincitore",r:"Ritardo del successo, arroganza che isola, dipendenza dal riconoscimento altrui"},
  {id:28,n:"Sette dei Bastoni",     s:"bastoni",e:"🔥",u:"Difesa della posizione conquistata, resilienza sotto pressione, vantaggio da mantenere",r:"Sopraffazione, cedimento per esaurimento, difensività paranoica"},
  {id:29,n:"Otto dei Bastoni",      s:"bastoni",e:"🔥",u:"Velocità e azione rapida, tutto si muove, comunicazioni accelerate e decisive",r:"Ritardi e blocchi ovunque, messaggi fraintesi, fretta controproducente"},
  {id:30,n:"Nove dei Bastoni",      s:"bastoni",e:"🔥",u:"Resistenza dopo le ferite, ultima riserva di energia, saggezza cicatrizzata",r:"Paranoia da eccesso di difese, diffidenza che blocca le opportunità"},
  {id:31,n:"Dieci dei Bastoni",     s:"bastoni",e:"🔥",u:"Peso delle responsabilità al limite, successo che schiaccia, carico da alleggerire",r:"Burnout totale, incapacità di delegare, crollo sotto il peso eccessive"},
  {id:32,n:"Fante dei Bastoni",     s:"bastoni",e:"🔥",u:"Entusiasmo fresco e contagioso, spirito d'avventura, notizie di nuove imprese",r:"Impulsività senza direzione, notizie false o in ritardo, entusiasmo vuoto"},
  {id:33,n:"Cavaliere dei Bastoni", s:"bastoni",e:"🔥",u:"Energia travolgente in azione, passione che muove montagne, avanzata senza esitazione",r:"Impulsività che brucia tutto, fuoco senza controllo, dispersione totale"},
  {id:34,n:"Regina dei Bastoni",    s:"bastoni",e:"🔥",u:"Carisma solare e magnetico, indipendenza creativa, leadership calda e determinata",r:"Gelosia distruttiva, possessività soffocante, potere che diventa controllo"},
  {id:35,n:"Re dei Bastoni",        s:"bastoni",e:"🔥",u:"Visione imprenditoriale matura, leadership ispirata, fuoco domato dalla saggezza",r:"Tirannia, ego che schiaccia gli altri, incapacità di sostenere la visione"},

  {id:36,n:"Asso delle Coppe",      s:"coppe",e:"💧",u:"Amore nuovo come primavera, grazia emotiva che trabocca, connessione spirituale profonda",r:"Cuore chiuso da ferite, rifiuto dell'amore offerto, vuoto emotivo"},
  {id:37,n:"Due delle Coppe",       s:"coppe",e:"💧",u:"Incontro di anime che si riconoscono, partnership armoniosa, attrazione reciproca autentica",r:"Disconnessione, rottura di accordo, relazione che perde la sua magia"},
  {id:38,n:"Tre delle Coppe",       s:"coppe",e:"💧",u:"Amicizia celebrata, comunità gioiosa, gioia condivisa genuina e nutritiva",r:"Eccessi sociali, tradimento tra amici, terze parti indesiderate nelle relazioni"},
  {id:39,n:"Quattro delle Coppe",   s:"coppe",e:"💧",u:"Contemplazione necessaria, insoddisfazione che chiama alla riflessione profonda",r:"Risveglio dall'apatia, opportunità finalmente colta, uscita dalla contemplazione sterile"},
  {id:40,n:"Cinque delle Coppe",    s:"coppe",e:"💧",u:"Dolore del lutto, rimpianto che insegna, perdita che invita alla guarigione vera",r:"Guarigione in corso, accettazione della perdita, ritorno alla speranza"},
  {id:41,n:"Sei delle Coppe",       s:"coppe",e:"💧",u:"Nostalgia dolce, radici che sostengono, incontri con il passato che nutrono",r:"Passato che intrappola, idealizzazione che impedisce il presente"},
  {id:42,n:"Sette delle Coppe",     s:"coppe",e:"💧",u:"Fantasia ricca di possibilità, illusioni da discernere, immaginazione come dono e pericolo",r:"Chiarezza dopo la nebbia, scelta concreta, ritorno alla realtà pratica"},
  {id:43,n:"Otto delle Coppe",      s:"coppe",e:"💧",u:"Abbandono coraggioso di ciò che non nutre più, partenza nel buio, ricerca del significato",r:"Incapacità di andare via, attaccamento al vuoto, paura del cambiamento"},
  {id:44,n:"Nove delle Coppe",      s:"coppe",e:"💧",u:"Desideri realizzati, soddisfazione piena, prosperità emotiva autentica e meritata",r:"Soddisfazione illusoria, materialismo che non colma il vuoto interiore"},
  {id:45,n:"Dieci delle Coppe",     s:"coppe",e:"💧",u:"Amore completo, armonia familiare profonda, realizzazione del sogno emotivo",r:"Armonia di facciata, conflitti nascosti, aspettative disilluse"},
  {id:46,n:"Fante delle Coppe",     s:"coppe",e:"💧",u:"Messaggi creativi inaspettati, intuizioni improvvise, offerte emotive sorprendenti",r:"Immaturità emotiva, promesse non mantenute, romanticismo esasperato e vuoto"},
  {id:47,n:"Cavaliere delle Coppe", s:"coppe",e:"💧",u:"Proposta romantica con grazia, missione del cuore intrapresa, offerta fatta con bellezza",r:"Sentimentalismo vuoto, manipolazione emotiva sottile, promesse senza sostanza"},
  {id:48,n:"Regina delle Coppe",    s:"coppe",e:"💧",u:"Empatia profonda come dono, intuizione affidabile, custode del mondo emotivo",r:"Codipendenza che annienta il sé, perdita di confini, emozioni degli altri al posto dei propri"},
  {id:49,n:"Re delle Coppe",        s:"coppe",e:"💧",u:"Saggezza emotiva matura, equilibrio nel mare dei sentimenti, leadership benevola del cuore",r:"Instabilità emotiva mascherata, manipolazione sentimentale, dipendenze affettive"},

  {id:50,n:"Asso delle Spade",      s:"spade",e:"⚔️",u:"Chiarezza fulminea che taglia l'illusione, verità che libera, idea potente e rivoluzionaria",r:"Chiarezza distorta dall'ego, pensiero confuso, verità usata come arma"},
  {id:51,n:"Due delle Spade",       s:"spade",e:"⚔️",u:"Stallo decisionale, equilibrio forzato, informazioni ancora insufficienti per scegliere",r:"Decisione forzata, verità che emerge, stallo che si sblocca dolorosamente"},
  {id:52,n:"Tre delle Spade",       s:"spade",e:"⚔️",u:"Dolore del tradimento o lutto, ferita reale che invita alla guarigione profonda",r:"Guarigione in corso, perdono possibile, liberazione dal dolore"},
  {id:53,n:"Quattro delle Spade",   s:"spade",e:"⚔️",u:"Riposo necessario dopo la battaglia, recupero e contemplazione rigenerante",r:"Riposo prolungato oltre il necessario, isolamento che diventa prigione"},
  {id:54,n:"Cinque delle Spade",    s:"spade",e:"⚔️",u:"Vittoria di Pirro, conflitto dal costo altissimo, riflessione sui danni causati",r:"Riconciliazione possibile, riconoscimento degli errori, pace costruttiva"},
  {id:55,n:"Sei delle Spade",       s:"spade",e:"⚔️",u:"Transizione verso acque più calme, partenza necessaria, cambiamento doloroso ma giusto",r:"Resistenza alla partenza necessaria, attaccamento al dolore familiare"},
  {id:56,n:"Sette delle Spade",     s:"spade",e:"⚔️",u:"Strategia sottile al limite dell'inganno, furbizia come strumento di sopravvivenza",r:"Inganno scoperto, confessione liberatoria, fine della manipolazione"},
  {id:57,n:"Otto delle Spade",      s:"spade",e:"⚔️",u:"Prigione mentale con catene illusorie, mente che si crea i propri limiti",r:"Liberazione dalla prigione mentale, benda che cade, autonomia ritrovata"},
  {id:58,n:"Nove delle Spade",      s:"spade",e:"⚔️",u:"Ansia notturna, mente che ingigantisce i problemi, paure che crescono nel buio",r:"Fine dell'angoscia, mente che si placa, luce ritrovata dopo l'oscurità"},
  {id:59,n:"Dieci delle Spade",     s:"spade",e:"⚔️",u:"Fine assoluta di un ciclo, punto zero prima dell'alba, crollo che libera",r:"Difficile accettazione della fine, lenta rinascita piena di cicatrici"},
  {id:60,n:"Fante delle Spade",     s:"spade",e:"⚔️",u:"Mente curiosa e acuta, verità cercata con determinazione, comunicazione onesta",r:"Gossip come arma, pensiero superficiale, parole che feriscono senza necessità"},
  {id:61,n:"Cavaliere delle Spade", s:"spade",e:"⚔️",u:"Azione rapida e determinata, sfida frontale senza esitazione, ambizione che avanza",r:"Impulsività che crea danni, conflitti non necessari, velocità senza controllo"},
  {id:62,n:"Regina delle Spade",    s:"spade",e:"⚔️",u:"Chiarezza intellettuale affilata, confini rispettati, comunicazione onesta e netta",r:"Freddezza che diventa crudeltà, amarezza accumulata, mente usata per ferire"},
  {id:63,n:"Re delle Spade",        s:"spade",e:"⚔️",u:"Autorità intellettuale, giustizia razionale, decisioni chiare e imparziali",r:"Tirannia della mente sull'emozione, logica come strumento di dominio"},

  {id:64,n:"Asso dei Pentacoli",    s:"pentacoli",e:"🪙",u:"Opportunità materiale concreta, seme della prosperità nel piano fisico",r:"Opportunità mancata, fondamenta instabili, denaro che sfugge"},
  {id:65,n:"Due dei Pentacoli",     s:"pentacoli",e:"🪙",u:"Equilibrio dinamico tra impegni, multitasking sostenibile, adattabilità come forza",r:"Perdita dell'equilibrio, debiti accumulati, troppi impegni simultanei"},
  {id:66,n:"Tre dei Pentacoli",     s:"pentacoli",e:"🪙",u:"Lavoro di squadra eccellente, maestria in costruzione, riconoscimento del talento",r:"Disaccordi nel team, ego in conflitto, lavoro non riconosciuto"},
  {id:67,n:"Quattro dei Pentacoli", s:"pentacoli",e:"🪙",u:"Sicurezza finanziaria conquistata, conservazione prudente, stabilità materiale",r:"Avarizia che blocca l'abbondanza, paura della perdita paralizzante"},
  {id:68,n:"Cinque dei Pentacoli",  s:"pentacoli",e:"🪙",u:"Periodo di difficoltà materiale, perdita reale, invito a chiedere aiuto senza vergogna",r:"Fine del periodo difficile, aiuto che arriva, ripresa graduale e solida"},
  {id:69,n:"Sei dei Pentacoli",     s:"pentacoli",e:"🪙",u:"Generosità equilibrata, dare e ricevere in armonia, giustizia nel flusso del denaro",r:"Generosità condizionale, dipendenza creata dal dono, squilibrio nel dare"},
  {id:70,n:"Sette dei Pentacoli",   s:"pentacoli",e:"🪙",u:"Valutazione del lavoro svolto, pazienza per la maturazione, riflessione strategica",r:"Frustrazione per risultati lenti, tentazione di abbandonare prima del raccolto"},
  {id:71,n:"Otto dei Pentacoli",    s:"pentacoli",e:"🪙",u:"Dedizione artigianale al dettaglio, specializzazione profonda, apprendimento continuo",r:"Lavoro meccanico senza passione, perfezionismo bloccante, burnout da ossessione"},
  {id:72,n:"Nove dei Pentacoli",    s:"pentacoli",e:"🪙",u:"Abbondanza autonoma conquistata, lusso meritato, autosufficienza elegante",r:"Dipendenza finanziaria mascherata, lusso su fondamenta instabili"},
  {id:73,n:"Dieci dei Pentacoli",   s:"pentacoli",e:"🪙",u:"Eredità costruita, ricchezza transgenerazionale, famiglia come fondamento solido",r:"Conflitti ereditari, famiglia divisa dal denaro, patrimonio disperso"},
  {id:74,n:"Fante dei Pentacoli",   s:"pentacoli",e:"🪙",u:"Ambizione nascente, studio disciplinato, progetto a lungo termine con basi solide",r:"Procrastinazione cronica, studio senza applicazione, ambizione senza piano"},
  {id:75,n:"Cavaliere dei Pentacoli",s:"pentacoli",e:"🪙",u:"Metodo e costanza assoluta, affidabilità come identità, progresso lento e inesorabile",r:"Inerzia che si spaccia per metodo, routine prigioniera, rigidità ossessiva"},
  {id:76,n:"Regina dei Pentacoli",  s:"pentacoli",e:"🪙",u:"Abbondanza concreta e nutritiva, saggezza pratica della terra, cura autentica",r:"Materialismo ansioso, eccessi o avarizia alternati, sé profondo trascurato"},
  {id:77,n:"Re dei Pentacoli",      s:"pentacoli",e:"🪙",u:"Maestria nel costruire il patrimonio, leadership materiale responsabile, ricchezza saggia",r:"Avidità che corrode il successo, corruzione del potere materiale"}
  ],

  pos_semplice:[
  {n:"🕰️ Passato",  d:"Le radici: energia che ha plasmato questa situazione"},
  {n:"🔮 Presente", d:"Il cuore: forza dominante in questo momento"},
  {n:"⏳ Futuro",   d:"Il seme: dove porta questa energia se coltivata"}
  ],

  pos_approfondita:[
  {n:"❤️ Cuore",    d:"La situazione centrale — il nucleo della questione"},
  {n:"⚔️ Sfida",    d:"La forza che si oppone o chiede integrazione"},
  {n:"🌱 Radici",   d:"Il fondamento — le origini profonde di tutto questo"},
  {n:"🌊 Corrente", d:"Ciò che sta emergendo dall'inconscio"},
  {n:"🌟 Esito",    d:"La possibilità — dove porta il flusso se lo segui"}
  ]
},

compat:{
  ariete:    {toro:50,gemelli:80,cancro:45,leone:95,vergine:55,bilancia:70,scorpione:65,sagittario:95,capricorno:55,acquario:75,pesci:55},
  toro:      {ariete:50,gemelli:45,cancro:80,leone:50,vergine:95,bilancia:60,scorpione:70,sagittario:45,capricorno:90,acquario:50,pesci:75},
  gemelli:   {ariete:80,toro:45,cancro:50,leone:75,vergine:50,bilancia:95,scorpione:45,sagittario:70,capricorno:45,acquario:90,pesci:60},
  cancro:    {ariete:45,toro:80,gemelli:50,leone:50,vergine:80,bilancia:55,scorpione:95,sagittario:40,capricorno:70,acquario:45,pesci:90},
  leone:     {ariete:95,toro:50,gemelli:75,cancro:50,vergine:45,bilancia:80,scorpione:55,sagittario:90,capricorno:50,acquario:65,pesci:60},
  vergine:   {ariete:55,toro:95,gemelli:50,cancro:80,leone:45,bilancia:60,scorpione:75,sagittario:40,capricorno:90,acquario:50,pesci:70},
  bilancia:  {ariete:70,toro:60,gemelli:95,cancro:55,leone:80,vergine:60,scorpione:50,sagittario:75,capricorno:55,acquario:90,pesci:65},
  scorpione: {ariete:65,toro:70,gemelli:45,cancro:95,leone:55,vergine:75,bilancia:50,sagittario:50,capricorno:75,acquario:45,pesci:90},
  sagittario:{ariete:95,toro:45,gemelli:70,cancro:40,leone:90,vergine:40,bilancia:75,scorpione:50,capricorno:50,acquario:75,pesci:60},
  capricorno:{ariete:55,toro:90,gemelli:45,cancro:70,leone:50,vergine:90,bilancia:55,scorpione:75,sagittario:50,acquario:50,pesci:75},
  acquario:  {ariete:75,toro:50,gemelli:90,cancro:45,leone:65,vergine:50,bilancia:90,scorpione:45,sagittario:75,capricorno:50,pesci:60},
  pesci:     {ariete:55,toro:75,gemelli:60,cancro:90,leone:60,vergine:70,bilancia:65,scorpione:90,sagittario:60,capricorno:75,acquario:60}
}

}; // fine DB

const CFG = {
  kProfilo: 'myst_v3_profile',
  kStorico: 'myst_v3_history'
};

const APP_VERSION = '1.0.1';
const APP_BUILD_DATE = '2026-06-15';
const APP_YEAR_RANGE = '2025–2026';

let S = {
  segno: null,
  tMode: 'semplice',
  tPicked: [],
  tDeck: [],
  tStep: 0,
  adShown: {semplice:false, approfondita:false},
  forOther: null   // {name, date, segno} — lettura per un'altra persona
};

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const rnd = a => a[Math.floor(Math.random()*a.length)];
const rndBool = (p=.5) => Math.random()<p;

const SUIT_LABEL = {maggiori:'Arcani Maggiori',bastoni:'Bastoni',coppe:'Coppe',spade:'Spade',pentacoli:'Pentacoli'};

function seededRnd(arr, seed){
  let h = 0;
  for(let i=0;i<seed.length;i++) h=(Math.imul(31,h)+seed.charCodeAt(i))|0;
  return arr[Math.abs(h)%arr.length];
}
function dailySeed(extra=''){
  const d=new Date();

  const mm=String(d.getMonth()+1).padStart(2,'0');
  const dd=String(d.getDate()).padStart(2,'0');
  return `${d.getFullYear()}${mm}${dd}${extra}`;
}

let _adCallback=null;
let _adTimer=null;

/* ── Rileva se l'app gira dentro l'APK Android (TWA) ── */
const _isAPK = (function(){
  try{
    return window.matchMedia('(display-mode: standalone)').matches &&
           /Android/i.test(navigator.userAgent);
  }catch(e){ return false; }
})();

const ADMOB_APP_ID        = 'ca-app-pub-0522720046244970~2539053525';
const ADMOB_INTERSTITIAL  = 'ca-app-pub-0522720046244970/1170131539';
const ADMOB_BANNER        = 'ca-app-pub-0522720046244970/3552374998';
const ADSENSE_CLIENT      = 'ca-pub-0522720046244970';
const ADSENSE_SLOT        = '2539053525';

function showAdGate(labelSezione, callback){
  _adCallback=callback;
  $('#adGateLabel').textContent='✦ ' + labelSezione + ' ✦';
  const modal=$('#modalAdGate');
  modal.classList.add('open');

  const btn=$('#adGateBtn');
  btn.disabled=true;
  btn.style.opacity='.5';
  btn.textContent='Continua in 4...';

  const slot=$('#adGateSlot');
  slot.innerHTML='';

  if(_isAPK){
    // Dentro APK → AdMob interstiziale
    const admobDiv = document.createElement('div');
    admobDiv.style.cssText='text-align:center;padding:10px 0;min-height:90px;display:flex;align-items:center;justify-content:center;color:rgba(212,175,55,0.4);font-size:11px;font-family:Cinzel,serif;letter-spacing:1px';
    admobDiv.textContent='✦ Pubblicità ✦';
    slot.appendChild(admobDiv);
    // AdMob interstiziale viene gestito dal wrapper PWABuilder
    if(typeof admob !== 'undefined'){
      try{
        admob.showInterstitial();
      }catch(e){}
    }
  } else {
    // Versione web → AdSense
    const ins=document.createElement('ins');
    ins.className='adsbygoogle';
    ins.style='display:block;min-height:90px';
    ins.dataset.adClient=ADSENSE_CLIENT;
    ins.dataset.adSlot=ADSENSE_SLOT;
    ins.dataset.adFormat='auto';
    ins.dataset.fullWidthResponsive='true';
    // Placeholder mistico visibile finché AdSense non carica
    const placeholder=document.createElement('div');
    placeholder.id='adPlaceholder';
    placeholder.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,rgba(42,23,72,.3),rgba(10,5,20,.4));border-radius:10px;pointer-events:none;z-index:1';
    placeholder.innerHTML='<div style="font-size:32px;animation:logoGlow 3s infinite">✨</div><div style="font-family:\'Cinzel\',serif;font-size:10px;color:rgba(212,175,55,.5);letter-spacing:2px;text-transform:uppercase">Supporta l\'Oracolo</div>';
    slot.style.position='relative';
    slot.style.minHeight='90px';
    slot.appendChild(placeholder);
    slot.appendChild(ins);
    try{
      (window.adsbygoogle=window.adsbygoogle||[]).push({});
      // Nascondi placeholder se AdSense carica correttamente
      setTimeout(()=>{
        if(ins.offsetHeight>10) placeholder.style.display='none';
      }, 2000);
    }catch(e){}
  }

  let sec=4;
  clearInterval(_adTimer);
  _adTimer=setInterval(()=>{
  sec--;
  if(sec>0){
  btn.textContent='Continua in '+sec+'...';
  } else {
  clearInterval(_adTimer);
  btn.disabled=false;
  btn.style.opacity='1';
  btn.textContent='✨ Continua';
  }
  },1000);
}

function adGateProceed(){
  const modal=$('#modalAdGate');
  if(!modal.classList.contains('open')) return; // già chiuso, ignora
  clearInterval(_adTimer);
  modal.classList.remove('open');
  const cb=_adCallback;
  _adCallback=null;
  if(typeof cb==='function') cb();
}

let _toastTimer=null;
function hapticFeedback(type='light') {
  if (window.navigator && window.navigator.vibrate) {
  const patterns = {
  'light': [10],
  'medium': [20],
  'strong': [40],
  'double': [15, 10, 15],
  'triple': [10, 8, 10, 8, 10],
  'pulse': [30, 50, 30],
  'mystical': [5, 15, 10, 15, 5]
  };
  window.navigator.vibrate(patterns[type] || patterns['light']);
  }
}

let _audioCtx = null;
function getAudioCtx() {
  try {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume().catch(()=>{});
  return _audioCtx;
  } catch(e) {
  console.warn('AudioContext non disponibile:', e);
  return null;
  }
}

function playMysticSound(type = 'bell') {
  try {
  const ctx = getAudioCtx();
  if (!ctx) return; // Silenzioso se AudioContext non disponibile (fuori gesture su iOS)
  const sounds = {

  bell: () => {
  const g = ctx.createGain();
  g.connect(ctx.destination);
  const now = ctx.currentTime;
  [110, 220, 440, 880].forEach((f, i) => {
  const o = ctx.createOscillator();
  const og = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(f, now);
  og.gain.setValueAtTime(0.1 / (i + 1), now);
  og.gain.exponentialRampToValueAtTime(0.001, now + 3);
  o.connect(og); og.connect(g);
  o.start(now); o.stop(now + 3);
  });
  g.gain.setValueAtTime(0.4, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + 3);
  },

  chime: () => {
  const now = ctx.currentTime;
  [880, 1108, 1318, 1760].forEach((f, i) => {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(f, now + i * 0.1);
  g.gain.setValueAtTime(0, now + i * 0.1);
  g.gain.linearRampToValueAtTime(0.15, now + i * 0.1 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 1.5);
  o.connect(g); g.connect(ctx.destination);
  o.start(now + i * 0.1); o.stop(now + i * 0.1 + 1.5);
  });
  },

  card: () => {
  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 0.3;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1000, now);
  filter.frequency.exponentialRampToValueAtTime(400, now + 0.3);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(0.2, now + 0.05);
  g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  noise.connect(filter); filter.connect(g); g.connect(ctx.destination);
  noise.start(now); noise.stop(now + 0.3);
  },

  reveal: () => {
  const now = ctx.currentTime;
  const g = ctx.createGain();
  g.connect(ctx.destination);

  [73.42, 110, 146.83, 220].forEach((f, i) => {
  const o = ctx.createOscillator();
  const og = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(f, now);
  og.gain.setValueAtTime(0, now);
  og.gain.linearRampToValueAtTime(0.15 / (i + 1), now + 0.5);
  og.gain.exponentialRampToValueAtTime(0.001, now + 4);
  o.connect(og); og.connect(g);
  o.start(now); o.stop(now + 4);
  });

  [440, 659.25, 880].forEach((f, i) => {
  const o = ctx.createOscillator();
  const og = ctx.createGain();
  o.type = 'triangle';
  o.frequency.setValueAtTime(f, now + 0.2);
  og.gain.setValueAtTime(0, now + 0.2);
  og.gain.linearRampToValueAtTime(0.05, now + 0.8);
  og.gain.exponentialRampToValueAtTime(0.001, now + 3);
  o.connect(og); og.connect(g);
  o.start(now + 0.2); o.stop(now + 3);
  });
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(0.5, now + 0.2);
  g.gain.exponentialRampToValueAtTime(0.001, now + 4);
  }
  };
  (sounds[type] || sounds.bell)();
  } catch(e) {}
  hapticFeedback();
}

function toast(msg){
  const t=$('#toast');
  if(_toastTimer){ clearTimeout(_toastTimer); t.classList.remove('show'); }

  setTimeout(()=>{
  t.textContent=msg;
  t.classList.add('show');
  _toastTimer=setTimeout(()=>{ t.classList.remove('show'); _toastTimer=null; },3200);
  }, _toastTimer ? 80 : 0);
}

function mysticaConfirm(msg, onOk){
  const overlay = document.createElement('div');
  overlay.className = 'myst-confirm-overlay';
  overlay.innerHTML = `
  <div class="myst-confirm-box">
  <p>${msg}</p>
  <div class="myst-confirm-actions">
  <button class="myst-confirm-cancel" id="_mcCancel">Annulla</button>
  <button class="myst-confirm-ok" id="_mcOk">Conferma</button>
  </div>
  </div>`;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('#_mcOk').onclick = () => { close(); onOk(); };
  overlay.querySelector('#_mcCancel').onclick = close;
  overlay.addEventListener('click', e => { if(e.target === overlay) close(); });
}

function particle(size,color,dur){
  const p=document.createElement('div');
  p.className='particle';
  p.style.cssText=`
  left:${Math.random()*100}%;
  width:${size}px;height:${size}px;
  background:${color};
  animation-duration:${dur}s;
  animation-delay:${Math.random()*dur}s;
  `;
  $('#particles').appendChild(p);
  setTimeout(()=>p.remove(),(dur+6)*1000);
}
function burst(){for(let i=0;i<18;i++)setTimeout(()=>particle(3,'#d4af37',5+Math.random()*5),i*80);}

const NAV_ORDER = ['profilo','tarot','oroscopo','zodiaco','amore','mistico','zodcinese','oracoli','magia','astrale','archivio','energia','spazio','strumenti'];

const ZOD_CHAR={
  topo:'鼠',bue:'牛',tigre:'虎',coniglio:'兔',drago:'龍',
  serpente:'蛇',cavallo:'馬',capra:'羊',scimmia:'猴',gallo:'雞',
  cane:'狗',maiale:'豬'
};

function _switchView(v){

  const pageTitle = LABELS[v] ? ('🔮 ' + LABELS[v] + ' — MYSTICA') : '🔮 MYSTICA – Oracolo delle Stelle';
  document.title = pageTitle;

  const currentView = document.querySelector('.view.active');
  if (currentView) {
  currentView.style.opacity = '0';
  currentView.style.transform = 'translateY(10px)';
  setTimeout(() => {
  currentView.classList.remove('active');
  const nextView = document.getElementById('view-' + v);
  if (nextView) {
  nextView.classList.add('active');
  nextView.style.opacity = '0';
  nextView.style.transform = 'translateY(10px)';

  nextView.offsetHeight;
  nextView.style.transition = 'all 0.3s ease-out';
  nextView.style.opacity = '1';
  nextView.style.transform = 'translateY(0)';
  }
  }, 150);
  } else {
  document.getElementById('view-' + v)?.classList.add('active');
  }
  window.scrollTo({top:0,behavior:'smooth'});

  const fab=document.getElementById('homeFab');
  if(fab){
  if(v!=='profilo'){
  const activeView=document.getElementById('view-'+v);
  if(activeView){ activeView.appendChild(fab); }
  fab.classList.add('visible');
  } else {
  fab.classList.remove('visible');
  }
  }
  if(v==='oroscopo') genOroscopo();
  if(v==='zodiaco') showZodiaco();
  if(v==='amore') initCompatSelects();
  if(v==='archivio') showArchivio();
  if(v==='magia') initMagia();
  if(v==='astrale') initAstrale();
  if(v==='mistico') showProfiloMistico();
  if(v==='zodcinese') showZodCinese();
  if(v==='strumenti') requestAnimationFrame(()=>requestAnimationFrame(pendoloDrawStatic));
  if(v==='oracoli'){
  $('#oracoliHome').style.display='block';
  document.querySelectorAll('[id^="oracolo-"]').forEach(el=>el.style.display='none');
  }

  if(v==='profilo' && S.forOther){
  S.forOther = null;
  const ob = document.getElementById('oroForOtherBanner');
  const tb = document.getElementById('tarotForOtherBanner');
  const ob2 = document.getElementById('btnOroForOther');
  const tb2 = document.getElementById('btnTarotForOther');
  if(ob) ob.style.display = 'none';
  if(tb) tb.style.display = 'none';
  if(ob2) ob2.style.display = '';
  if(tb2) tb2.style.display = '';
  }
}

const LABELS={
  tarot:'Lettura dei Tarocchi',
  oroscopo:'Oroscopo del Giorno',
  zodiaco:'Il Tuo Segno Zodiacale',
  amore:'Compatibilità d\'Amore',
  oracoli:'Oracoli Antichi',
  magia:'Libri di Magia',
  mistico:'Profilo Mistico Completo',
  zodcinese:'Zodiaco Cinese — Oroscopo Orientale',
  energia:'Energia & Coscienza',
  sogni:'Oniromanzia & Sogni',
  spazio:'Spazio & Elementi',
  strumenti:'Strumenti del Praticante',
  blog:'Enciclopedia Esoterica',
  commenti:'Community & Commenti',
  opzioni:'Opzioni',
  strega:'Diventa una Strega',
  ouija:'Tavola Ouija',
  pratiche:'Figure del Mistico'
};
const AD_SECTIONS=new Set(['tarot','oroscopo','zodiaco','amore','oracoli','magia','mistico','zodcinese','energia','sogni','spazio','strumenti']);

const _adSeen = new Set(
  (()=>{ try{ return JSON.parse(sessionStorage.getItem('myst_adSeen')||'[]'); }catch(e){ return []; } })()
);
function _adSeenAdd(v){
  _adSeen.add(v);
  try{ sessionStorage.setItem('myst_adSeen', JSON.stringify([..._adSeen])); }catch(e){}
}

// Chiave storage offuscata
const PREMIUM_KEY = (()=>{
  const _a='mys'; const _b='tic'; const _c='a_s'; const _d='tr_';
  const _e='9x2'; const _f='k7p'; const _g='v1';
  return _a+_b+_c+_d+_e+_f+_g;
})();
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/aFa6ozfOx2vNcdAdEW4ow00';

/* ── Attivazione Premium via URL parameter (ritorno da Stripe) ── */
(function checkStripeReturn(){
  try{
    const params = new URLSearchParams(window.location.search);
    if(params.get('premium') === 'activated'){
      // Salva subito in localStorage — prima di qualsiasi altra cosa
      try{ localStorage.setItem(PREMIUM_KEY, 'true'); }catch(e){}
      // Salva anche in sessionStorage come backup
      try{ sessionStorage.setItem(PREMIUM_KEY, 'true'); }catch(e){}
      // Pulisce l'URL
      try{ window.history.replaceState({}, '', window.location.pathname); }catch(e){}
    }
    // Controlla anche sessionStorage al caricamento (backup)
    if(sessionStorage.getItem(PREMIUM_KEY) === 'true'){
      try{ localStorage.setItem(PREMIUM_KEY, 'true'); }catch(e){}
    }
  }catch(e){}
})();


const PREMIUM_VIEWS = new Set(['astrale','energia','spazio','strumenti']);

const PREMIUM_ORACOLI = new Set([
  'angeli','geomanzia','numerologia','orespeschio','luna','pianeti',
  'rune','iching','libro','wicca','alchimia','cabala','ermetismo',
  'negromanzia','delfi','bibliomanzia'
]);

// Codici promo offuscati — verificati tramite hash semplice
const _PC = (function(){
  // Hash leggero per non esporre i codici in chiaro
  function _h(s){ let h=0; for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;} return Math.abs(h).toString(36).toUpperCase(); }
  // I codici reali sono: QX7K9M2P / ZR4NW8JL / VT6YB3FS / MK5DH1XQ
  return ['UXIDM5','C6JYWB','PZDRXD','7WM8DR'];
})();

function _checkPromo(code){
  function _h(s){ let h=0; for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;} return Math.abs(h).toString(36).toUpperCase(); }
  return _PC.includes(_h(code.trim().toUpperCase()));
}

function isPremium(){
  try{
    if(localStorage.getItem(PREMIUM_KEY)==='true') return true;
    if(sessionStorage.getItem(PREMIUM_KEY)==='true'){
      localStorage.setItem(PREMIUM_KEY,'true');
      return true;
    }
    if(sessionStorage.getItem('mystica_stripe_just_paid')==='true'){
      localStorage.setItem(PREMIUM_KEY,'true');
      return true;
    }
    return false;
  }catch(e){ return false; }
}

function showPremiumModal(callbackFn){
  window._premiumCallback = callbackFn || null;
  document.getElementById('premiumModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePremiumModal(){
  document.getElementById('premiumModal').classList.remove('open');
  document.body.style.overflow = '';
  window._premiumCallback = null;
}

function premiumActivateCode(){
  const code = (document.getElementById('pmCodeInput')?.value||'').trim().toUpperCase();
  if(!code){ toast('⚠️ Inserisci un codice'); return; }
  if(_checkPromo(code)){
  try{ _lsSet(PREMIUM_KEY,'true'); }catch(e){}
  closePremiumModal();
  updatePremiumUI();
  burst();
  playMysticSound('chime');

  const fpb = document.getElementById('footerPremiumBtn');
  if(fpb) fpb.style.display = 'none';

  if(typeof trackEvent!=='undefined') trackEvent('Monetization','premium_activated','promo_code');
  toast('⭐ Premium attivato! L\'oracolo completo è tuo.');
  if(window._premiumCallback){
  setTimeout(window._premiumCallback, 500);
  window._premiumCallback = null;
  }
  } else {
  if(typeof trackEvent!=='undefined') trackEvent('Monetization','promo_code_failed',code);
  toast('⚠️ Codice non valido. Riprova o acquista la versione Premium.');
  }
}

function premiumRestore(){
  if(isPremium()){
    closePremiumModal();
    toast('✅ Premium già attivo su questo dispositivo!');
  } else {
    toast('⚠️ Nessun acquisto trovato. Se hai già pagato inserisci il codice promo ricevuto via email.');
  }
}

function premiumBuy(){
  hapticFeedback();
  try{ _lsSet('mystica_pre_stripe_ts', Date.now().toString()); }catch(e){}
  window.location.href = STRIPE_PAYMENT_LINK;
}


function updatePremiumUI(){
  const badge = document.getElementById('premiumHeaderBadge');
  if(badge){
  if(isPremium()){
  badge.classList.add('active');
  badge.onclick = ()=>toast('⭐ Mystica Premium attivo — accesso completo!');
  } else {
  badge.classList.remove('active');
  badge.onclick = ()=>showPremiumModal(null);
  }
  }

  const advLock = document.getElementById('tarotAdvLock');
  if(advLock) advLock.style.display = isPremium() ? 'none' : 'block';

  if(isPremium()){
  document.querySelectorAll('.dash-card.premium-locked').forEach(card=>{
  card.classList.remove('premium-locked');
  });
  }
}

function requirePremium(fn){
  if(isPremium()){ fn(); }
  else { showPremiumModal(fn); }
}

function nav(v, isBack = false){

  if(PREMIUM_VIEWS.has(v) && !isPremium()){
  requirePremium(()=>nav(v));
  return;
  }

  const proceed = () => {
  _switchView(v);

  if(!isBack){
  try{ window.history.pushState({view: v, type: 'section'}, '', '#' + v); }catch(e){}
  }
  };

  if(!AD_SECTIONS.has(v)||_adSeen.has(v)){
  proceed();
  } else {
  _adSeenAdd(v);
  showAdGate(LABELS[v]||v, proceed);
  }
}

function segnoFromDate(ds){

  let d;
  if (ds.includes('-')) {
  const parts = ds.split('-').map(Number);

  d = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
  } else {
  d = new Date(ds + 'T12:00:00');
  }
  if (isNaN(d.getTime())) return 'ariete'; // Fallback
  const day = d.getDate(), m = d.getMonth() + 1;
  if((m==3&&day>=21)||(m==4&&day<=20)) return 'ariete';
  if((m==4&&day>=21)||(m==5&&day<=20)) return 'toro';
  if((m==5&&day>=21)||(m==6&&day<=21)) return 'gemelli';
  if((m==6&&day>=22)||(m==7&&day<=22)) return 'cancro';
  if((m==7&&day>=23)||(m==8&&day<=22)) return 'leone';
  if((m==8&&day>=23)||(m==9&&day<=22)) return 'vergine';
  if((m==9&&day>=23)||(m==10&&day<=22)) return 'bilancia';
  if((m==10&&day>=23)||(m==11&&day<=22)) return 'scorpione';
  if((m==11&&day>=23)||(m==12&&day<=21)) return 'sagittario';
  if((m==12&&day>=22)||(m==1&&day<=20)) return 'capricorno';
  if((m==1&&day>=21)||(m==2&&day<=19)) return 'acquario';
  return 'pesci';
}

function applyProfile(p){
  const sg=DB.segni[p.segno];
  if(!sg) return;

  $('#phIcon').textContent=sg.s;
  $('#phName').textContent=p.name;
  $('#phDates').textContent=sg.n+' · '+sg.d;
  $('#phPlanet').textContent='🪐 '+sg.p+' · 🌿 '+sg.el;

  // Mostra immagine copertina segno zodiacale
  const coverWrap = $('#phCoverImg');
  const coverImg  = $('#phCoverImgEl');
  const ringWrap  = $('#phRingWrap');
  if(coverWrap && coverImg && p.segno){
    const imgUrl = './images/zodiaco-orizzontale/'+p.segno+'-oriz.webp';
    const testImg = new Image();
    testImg.onload = function(){
      coverImg.src = imgUrl;
      coverImg.alt = sg.n;
      coverImg.style.objectPosition = 'center 20%';
      coverImg.style.objectFit = 'cover';
      // Immagine come sfondo assoluto pieno del card con altezza fissa per evitare tagli eccessivi
      coverWrap.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:hidden;display:block;z-index:0';
      // Scurisci il gradiente per leggibilità testo
      const overlay = coverWrap.querySelector('div');
      if(overlay) overlay.style.background = 'linear-gradient(to bottom,rgba(10,5,20,0.1) 0%,rgba(10,5,20,0.4) 50%,rgba(10,5,20,0.95) 100%)';
      // Nascondi il ring (icona segno) quando c'è l'immagine di sfondo
      if(ringWrap){ ringWrap.style.display='none'; }
      const cDiv = ringWrap ? ringWrap.nextElementSibling : null;
      if(cDiv){ cDiv.style.position='relative'; cDiv.style.zIndex='2'; }
    };
    testImg.onerror = function(){
      coverWrap.style.display = 'none';
      if(ringWrap) ringWrap.style.display = 'block';
    };
    testImg.src = imgUrl;
  }
  const oro=DB.oroscopo[p.segno];
  if(oro){
  const base=dailySeed(p.segno+'msg');
  const pool=[...oro.amore.slice(0,3),...oro.lavoro.slice(0,3),...oro.fortuna.slice(0,3)];
  $('#phMsg').textContent='"'+seededRnd(pool,base)+'"';
  }

  const dateParts=(p.date||'').split('-').map(Number);
  const birthYear = dateParts.length===3 ? dateParts[0] : new Date(p.date+'T12:00:00').getFullYear();
  const cKey=zodicineseFromYear(birthYear);
  const cz=DB.zodcinese[cKey];

  const dashSection=$('#dashMisticoSection');
  if(dashSection) dashSection.style.display='block';

  const dcMisticoImg=$('#dcMisticoImg');
  if(dcMisticoImg) dcMisticoImg.src='./images/icone/zodiaco/'+(p.segno||'ariete')+'.webp';

  const dcZodImg=$('#dcZodImg2');
  const dcZodName=$('#dcZodName2');
  if(cz){
  if(dcZodImg){dcZodImg.src='./images/icone/cinese/'+cz.n.toLowerCase()+'.webp';}
  if(dcZodName)  dcZodName.textContent=cz.n;
  }

  const editCard=$('#cardEditProfilo');
  if(editCard) editCard.style.display='none';

  if($('#inpName')) $('#inpName').value=p.name;
  if($('#inpDate')) $('#inpDate').value=p.date;
  if($('#inpGender')) $('#inpGender').value=p.gender||'';
  if($('#inpInterests')) $('#inpInterests').value=p.interests||'';
  S.segno=p.segno;
}

const _memStore = {};
let _useLS = (function(){
  try{ localStorage.setItem('__t__','1'); localStorage.removeItem('__t__'); return true; }
  catch(e){ return false; }
})();

function _lsGet(key){
  if(_useLS){ try{ return localStorage.getItem(key); }catch(e){ _useLS=false; } }
  return (_memStore[key]!==undefined) ? _memStore[key] : null;
}
function _lsSet(key,val){
  if(_useLS){ try{ localStorage.setItem(key,val); return; }catch(e){ _useLS=false; } }
  _memStore[key]=val;
}
function _lsRemove(key){
  if(_useLS){ try{ localStorage.removeItem(key); return; }catch(e){ _useLS=false; } }
  delete _memStore[key];
}

function toggleEditProfilo(){
  const c=$('#cardEditProfilo');
  if(!c) return;
  const isVisible=c.style.display!=='none';
  c.style.display=isVisible?'none':'block';
  if(!isVisible) setTimeout(()=>c.scrollIntoView({behavior:'smooth'}),50);
}

function saveProfile(){
  const name=$('#inpName').value.trim();
  const date=$('#inpDate').value;
  if(!name){toast('⚠️ Inserisci il tuo nome');return;}
  if(!date){toast('⚠️ Inserisci la data di nascita');return;}

  const parts=date.split('-').map(Number);
  const testDate=new Date(parts[0],parts[1]-1,parts[2]);
  if(isNaN(testDate.getTime())||testDate.getFullYear()!==parts[0]||testDate.getMonth()+1!==parts[1]||testDate.getDate()!==parts[2]){
  toast('⚠️ Data non valida — controlla giorno e mese');return;
  }
  if(parts[0]<1900||parts[0]>new Date().getFullYear()){
  toast('⚠️ Anno non valido');return;
  }
  const gender=$('#inpGender').value;
  const interests=$('#inpInterests').value.trim();
  const segno=segnoFromDate(date);
  const p={name,date,segno,gender,interests};
  _lsSet(CFG.kProfilo,JSON.stringify(p));
  applyProfile(p);
  playMysticSound('bell');
  const editCard=$('#cardEditProfilo');
  if(editCard) editCard.style.display='none';
  toast('✨ Profilo salvato — Benvenuto, '+name+'!');
}

function showProfiloMistico(){
  const raw=_lsGet(CFG.kProfilo);
  const cont=$('#misticoViewContent');
  const fallbackHtml='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Salva prima il tuo profilo ✨</p>'+'<button class="btn btn-sec" onclick="nav(\'profilo\')" style="margin-top:0">✏️ Vai al Profilo</button>';
  if(!raw||!cont){if(cont) cont.innerHTML=fallbackHtml;return;}
  let p; try{p=JSON.parse(raw);}catch(e){return;}
  const sg=DB.segni[p.segno];
  if(!sg||!sg.pietre) return;

  const dateParts=(p.date||'').split('-').map(Number);
  const birthYear=dateParts.length===3?dateParts[0]:new Date(p.date+'T12:00:00').getFullYear();
  const cKey=zodicineseFromYear(birthYear);
  const cz=DB.zodcinese[cKey];

  const pietre=sg.pietre.map(x=>'<li style="margin:6px 0;font-size:13px">💎 '+x+'</li>').join('');
  const oggetti=sg.oggetti.map(x=>'<li style="margin:6px 0;font-size:13px">'+x+'</li>').join('');
  const tags=sg.k.map(k=>'<span class="tag">'+k+'</span>').join('');

  cont.innerHTML=`
  <div style="text-align:center;padding:12px 0 16px">
  <div style="font-size:52px;margin-bottom:8px;filter:drop-shadow(0 0 16px #d4af3770)">${sg.s}</div>
  <div style="font-family:'Cinzel',serif;font-size:20px;color:var(--gold);letter-spacing:2px">${p.name}</div>
  <div style="font-family:'Cinzel',serif;font-size:13px;color:var(--text);opacity:.8;margin-top:3px">${sg.n}</div>
  <div style="font-size:11px;color:var(--muted);margin-top:2px">${sg.d}</div>
  <div style="font-size:11px;color:var(--text);opacity:.7;margin-top:5px">🪐 ${sg.p} &nbsp;·&nbsp; 🌿 ${sg.el}</div>
  <div style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-top:10px">${tags}</div>
  </div>
  <div class="divider"></div>
  <h3>💎 Le Tue Pietre Mistiche</h3>
  <ul style="list-style:none;padding:0;margin:8px 0">${pietre}</ul>
  <div class="divider"></div>
  <h3>🔮 I Tuoi Oggetti Fortunati</h3>
  <ul style="list-style:none;padding:0;margin:8px 0">${oggetti}</ul>
  `;
}

function showZodCinese(){
  const raw=_lsGet(CFG.kProfilo);
  const cont=$('#zodCineseViewContent');
  const fallbackHtmlZod='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Salva prima il tuo profilo ✨</p>'+'<button class="btn btn-sec" onclick="nav(\'profilo\')" style="margin-top:0">✏️ Vai al Profilo</button>';
  if(!raw||!cont){if(cont) cont.innerHTML=fallbackHtmlZod;return;}
  let p; try{p=JSON.parse(raw);}catch(e){return;}

  const dateParts=(p.date||'').split('-').map(Number);
  const birthYear=dateParts.length===3?dateParts[0]:new Date(p.date+'T12:00:00').getFullYear();
  const cKey=zodicineseFromYear(birthYear);
  const cz=DB.zodcinese[cKey];
  if(!cz){cont.innerHTML='<p class="t-muted" style="padding:20px 0;text-align:center">Dati non disponibili ✨</p>';return;}

  const czChar=ZOD_CHAR[cKey]||'';

  const COMPAT_CIN={
  topo:['drago','scimmia'],bue:['serpente','gallo'],
  tigre:['cavallo','cane'],coniglio:['capra','maiale'],
  drago:['topo','scimmia'],serpente:['bue','gallo'],
  cavallo:['tigre','cane'],capra:['coniglio','maiale'],
  scimmia:['topo','drago'],gallo:['bue','serpente'],
  cane:['tigre','cavallo'],maiale:['coniglio','capra']
  };
  const compatCin=(COMPAT_CIN[cKey]||[]).map(k=>{
  const a=DB.zodcinese[k];
  return a?'<span class="tag">'+a.e+' '+a.n+'</span>':'';
  }).join('');

  const anniHtml=cz.anni.split(' · ').map(a=>`<span class="tag" style="font-family:'Cinzel',serif;font-size:11px">${a}</span>`).join('');

  cont.innerHTML=`
  <div style="text-align:center;padding:14px 0 18px;position:relative">
  <img loading="lazy" src="./images/icone/cinese/${cz.n.toLowerCase()}int.webp" style="width:200px;height:300px;object-fit:cover;border-radius:16px;margin-bottom:6px;filter:drop-shadow(0 0 20px rgba(212,175,55,0.5))">
  <div style="display:inline-flex;align-items:center;gap:10px;justify-content:center">
  <span style="font-size:36px;color:var(--gold);font-weight:bold;
  filter:drop-shadow(0 0 14px rgba(212,175,55,.8));line-height:1">${czChar}</span>
  <div>
  <div style="font-family:'Cinzel',serif;color:var(--gold);font-size:20px;letter-spacing:2px">${cz.n}</div>
  <div style="font-size:11px;color:var(--muted);margin-top:2px">Anno di nascita: <span style="color:var(--gold);font-family:'Cinzel',serif">${birthYear}</span></div>
  </div>
  </div>
  </div>
  <div class="divider"></div>
  <h3>📅 Gli Anni del ${cz.n}</h3>
  <div style="display:flex;flex-wrap:wrap;gap:5px;margin:10px 0">${anniHtml}</div>
  <div class="divider"></div>
  <div class="horosec">
  <h4>✨ Il Tuo Profilo Orientale</h4>
  <p>${cz.desc}</p>
  </div>
  <div class="horosec">
  <h4>🎨 Colori Fortunati</h4>
  <p style="color:var(--gold)">${cz.fortuna}</p>
  </div>
  ${cz.oggetto?`<div class="horosec"><h4>🔮 Oggetto Totemico</h4><p>${cz.oggetto}</p></div>`:''}
  ${compatCin?`
  <div class="divider"></div>
  <h3>💞 Compatibilità Cinese</h3>
  <p style="font-size:12px;color:var(--muted);margin-bottom:8px">Animali con cui il ${cz.n} vibra in perfetta armonia</p>
  <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">${compatCin}</div>`:''}
  <div class="divider"></div>
  <p class="t-muted" style="font-size:10px;text-align:center">✦ Il ciclo dei 12 animali si ripete ogni 12 anni — la tua essenza orientale è ${cz.n} ✦</p>
  `;
}

function populateWelcomeDateSelects(){
  const dSel=document.getElementById('wDay');
  const mSel=document.getElementById('wMonth');
  const ySel=document.getElementById('wYear');
  if(!dSel||!mSel||!ySel) return;
  if(dSel.dataset.filled==='1'){ [dSel,mSel,ySel].forEach(el=>{ if(!el.dataset.errBound2){ el.addEventListener('change',syncWelcomeDate); el.dataset.errBound2='1'; } }); return; } // già popolati
  const mesi=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

  dSel.innerHTML='<option value="" selected>— Giorno —</option>';
  mSel.innerHTML='<option value="" selected>— Mese —</option>';
  ySel.innerHTML='<option value="" selected>— Anno —</option>';
  for(let i=1;i<=31;i++){
  const o=document.createElement('option');
  o.value=String(i).padStart(2,'0'); o.textContent=String(i);
  dSel.appendChild(o);
  }
  for(let i=1;i<=12;i++){
  const o=document.createElement('option');
  o.value=String(i).padStart(2,'0'); o.textContent=mesi[i-1];
  mSel.appendChild(o);
  }
  const curY=new Date().getFullYear();

  for(let y=curY;y>=1900;y--){
  const o=document.createElement('option');
  o.value=String(y); o.textContent=String(y);
  ySel.appendChild(o);
  }
  dSel.dataset.filled='1';

  [dSel,mSel,ySel].forEach(el=>{
  el.addEventListener('change',syncWelcomeDate);
  });
}

function syncWelcomeDate(){
  const d=document.getElementById('wDay');
  const m=document.getElementById('wMonth');
  const y=document.getElementById('wYear');
  const out=document.getElementById('wDate');
  if(!d||!m||!y||!out) return;
  if(d.value && m.value && y.value){
  out.value = y.value + '-' + m.value + '-' + d.value;
  } else {
  out.value = '';
  }
}

function completeWelcome(){

  try{ document.activeElement && document.activeElement.blur(); }catch(e){}

  try{
  const dSel = document.getElementById('wDay');
  if(dSel && (!dSel.dataset.filled || dSel.options.length <= 1)){
    populateWelcomeDateSelects();
  }
  }catch(e){}

  try{ syncWelcomeDate(); }catch(e){}

  try{
  const fields = [
  {id:'wName',  msg:'Inserisci il tuo nome'},
  {id:'wDay',   msg:'Scegli il giorno'},
  {id:'wMonth', msg:'Scegli il mese'},
  {id:'wYear',  msg:'Scegli l\u2019anno'}
  ];
  let firstEmpty = null;
  fields.forEach(f=>{
  const el = document.getElementById(f.id);
  if(!el) return;
  const isEmpty = !el.value || !String(el.value).trim();
  if(isEmpty){
  el.style.border = '2px solid #ff5a5a';
  el.style.boxShadow = '0 0 0 3px rgba(255,90,90,.25)';
  el.style.borderRadius = '10px';
  if(!firstEmpty) firstEmpty = el;
  } else {
  el.style.border = '';
  el.style.boxShadow = '';
  }
  });
  if(firstEmpty){
  try{ firstEmpty.scrollIntoView({behavior:'smooth', block:'center'}); }catch(_){}

  fields.forEach(f=>{
  const el = document.getElementById(f.id);
  if(!el || el.dataset.errBound==='1') return;
  const clear = ()=>{ el.style.border=''; el.style.boxShadow=''; };
  el.addEventListener('change', clear);
  el.addEventListener('input', clear);
  el.dataset.errBound='1';
  });
  toast('\u26A0\uFE0F Compila tutti i campi (su iPhone ruota la rotella e tocca "Fine")');
  return;
  }
  }catch(e){}

  setTimeout(function(){
  const name=$('#wName').value.trim();
  const date=$('#wDate').value;
  if(!name){toast('⚠️ Come ti chiami?');return;}
  if(!date){toast('⚠️ Seleziona giorno, mese e anno');return;}

  const parts=date.split('-').map(Number);
  const testDate=new Date(parts[0],parts[1]-1,parts[2]);
  if(isNaN(testDate.getTime())||testDate.getFullYear()!==parts[0]||testDate.getMonth()+1!==parts[1]||testDate.getDate()!==parts[2]){
  toast('⚠️ Data non valida — controlla giorno e mese');return;
  }
  if(parts[0]<1900||parts[0]>new Date().getFullYear()){
  toast('⚠️ Anno non valido');return;
  }
  const segno=segnoFromDate(date);
  const p={name,date,segno};
  _lsSet(CFG.kProfilo,JSON.stringify(p));

  $('#modalWelcome').classList.remove('open');
  try{ applyProfile(p); }catch(e){ console.warn('applyProfile error:',e); }

  try{
  if(!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if(_audioCtx.state === 'suspended') _audioCtx.resume();
  playMysticSound('chime');
  }catch(e){}
  try{ burst(); }catch(e){}
  toast('✨ Le stelle ti danno il benvenuto, '+name+'!');
  // ═══ ONBOARDING: mostra selezione interesse dopo benvenuto ═══
  setTimeout(function(){
    var hasOnboard = localStorage.getItem('myst_onboard_v1');
    if(!hasOnboard) showOnboarding(name);
  }, 900);
  }, 80);
}

function loadProfile(){
  const raw=_lsGet(CFG.kProfilo);
  if(!raw){
    // Nuovo utente: mostra app (dietro al modal welcome che è già open)
    document.getElementById('app').style.visibility='visible';
    return;
  }
  try{
  const p=JSON.parse(raw);
  applyProfile(p);
  $('#modalWelcome').classList.remove('open');
  // Profilo già presente: mostra app senza flicker
  document.getElementById('app').style.visibility='visible';
  }catch(e){ _lsRemove(CFG.kProfilo); document.getElementById('app').style.visibility='visible'; }
}

function refreshWisdom(){
  const el=$('#wisdomQ');
  if(!el) return;
  const seed=dailySeed('consiglio');
  el.textContent=seededRnd(DB.consigli, seed);

  const dateEl=$('#wisdomDate');
  if(dateEl){
  const oggi=new Date().toLocaleDateString('it-IT',{day:'numeric',month:'long'});
  dateEl.textContent=oggi;
  }
}

function zodicineseFromYear(year){

  const animals=['topo','bue','tigre','coniglio','drago','serpente',
  'cavallo','capra','scimmia','gallo','cane','maiale'];
  const idx=((year-1900)%12+12)%12;
  return animals[idx];
}

function noRepeatPick(pool, lsKey){
  if (!pool || pool.length === 0) return '';
  let seen = [];
  try{ seen = JSON.parse(_lsGet(lsKey)||'[]'); }catch(e){}
  if(seen.length >= pool.length) seen = [];
  const available = pool.map((_,i)=>i).filter(i => !seen.includes(i));
  if(available.length === 0) return pool[Math.floor(Math.random()*pool.length)];
  const idx = available[Math.floor(Math.random()*available.length)];
  seen.push(idx);
  try{ _lsSet(lsKey, JSON.stringify(seen)); }catch(e){}
  return pool[idx];
}

function todayKey(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }

function genOroscopo(){
  const cont=$('#oroContent');
  const _oroBtnHtml='<button class="btn btn-sec" onclick="nav(\'profilo\')" style="margin-top:0">✏️ Vai al Profilo</button>';
  let p;

  if(S.forOther){
  p = { name: S.forOther.name, segno: S.forOther.segno, date: S.forOther.date, _isOther: true };
  } else {
  const raw=_lsGet(CFG.kProfilo);
  if(!raw){cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Salva prima il tuo profilo ✨</p>'+_oroBtnHtml;return;}
  try{ p=JSON.parse(raw); }catch(e){ cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Profilo non valido — salvalo di nuovo ✨</p>'+_oroBtnHtml; return; }
  }

  const sg=DB.segni[p.segno];
  const ore=DB.oroscopo[p.segno];
  if(!sg||!ore){ cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Segno non riconosciuto — aggiorna il profilo ✨</p>'+_oroBtnHtml; return; }
  const oggi=new Date().toLocaleDateString('it-IT',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  $('#oroDate').textContent=oggi.charAt(0).toUpperCase()+oggi.slice(1);

  if(!p._isOther){
  const lockKey = 'myst_oro_lock_'+p.segno;
  const cached = (() => { try{ return JSON.parse(_lsGet(lockKey)||'null'); }catch(e){return null;} })();
  if(cached && cached.date === todayKey()){
  cont.innerHTML = cached.html;
  return;
  }
  }

  const fortunaPool = [...ore.fortuna, ...DB.oroscopo_pool];
  const pfx = p._isOther
  ? 'myst_oro_other_'+p.segno+'_'+todayKey()+'_'
  : 'myst_oro_'+p.segno+'_';

  const _segnoImg = (segnoKey) => {
    return `<div style="width:100%;max-width:340px;margin:0 auto 16px;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(212,175,55,0.25)"><img src="./images/zodiaco-verticale/${segnoKey}.webp" alt="${segnoKey}" style="width:100%;display:block;object-fit:cover" onerror="this.parentElement.style.display='none'"></div>`;
  };

  const headerHtml = p._isOther
  ? `<div style="text-align:center;padding:10px 0 14px">
  ${_segnoImg(p.segno)}
  <div style="font-size:46px;margin-bottom:7px;filter:drop-shadow(0 0 12px #d4af3760)">${sg.s}</div>
  <div style="font-family:'Cinzel',serif;font-size:18px;color:var(--gold)">${sg.n}</div>
  <div style="font-size:11px;color:var(--muted);margin-top:3px">${sg.d}</div>
  <div style="font-size:12px;color:var(--gold-dim);margin-top:8px;font-family:'Cinzel',serif;letter-spacing:1px">Lettura per <strong style="color:var(--gold)">${p.name}</strong></div>
  </div>`
  : `<div style="text-align:center;padding:10px 0 14px">
  ${_segnoImg(p.segno)}
  <div style="font-size:46px;margin-bottom:7px;filter:drop-shadow(0 0 12px #d4af3760)">${sg.s}</div>
  <div style="font-family:'Cinzel',serif;font-size:18px;color:var(--gold)">${sg.n}</div>
  <div style="font-size:11px;color:var(--muted);margin-top:3px">${sg.d}</div>
  </div>`;
  const html=`
  ${headerHtml}
  <div class="horosec"><h4>💕 Amore & Relazioni</h4><p>${noRepeatPick(ore.amore, pfx+'amore')}</p></div>
  <div class="horosec"><h4>💼 Lavoro & Finanze</h4><p>${noRepeatPick(ore.lavoro, pfx+'lavoro')}</p></div>
  <div class="horosec"><h4>🌿 Salute & Energia</h4><p>${noRepeatPick(ore.salute, pfx+'salute')}</p></div>
  <div class="horosec"><h4>⭐ Fortuna & Consiglio Cosmico</h4><p>${noRepeatPick(fortunaPool, pfx+'fortuna')}</p></div>
  <p class="t-muted" style="font-size:10px;margin-top:14px">✦ Le stelle parlano una volta al giorno — torna domani per un nuovo messaggio ✦</p>
  `;
  cont.innerHTML = html;

  if(!p._isOther){
  const lockKey = 'myst_oro_lock_'+p.segno;
  try{ _lsSet(lockKey, JSON.stringify({date: todayKey(), html})); }catch(e){}
  }
  saveHistory('Oroscopo',''+(p._isOther?p.name+' — ':'')+sg.n+' — '+oggi);
}

let _foCtx = null; // contesto: 'oroscopo' | 'tarot'

function openForOther(ctx){
  hapticFeedback();
  _foCtx = ctx;
  const nm = document.getElementById('foName');
  const dt = document.getElementById('foDate');
  const pr = document.getElementById('foSignPreview');
  if(nm) nm.value = '';
  if(dt) dt.value = '';
  if(pr) pr.innerHTML = '';
  document.getElementById('modalForOther').classList.add('open');
}

function onFoDateChange(){
  const dt = document.getElementById('foDate');
  const pr = document.getElementById('foSignPreview');
  if(!dt || !pr) return;
  if(!dt.value){ pr.innerHTML = ''; return; }
  const segno = segnoFromDate(dt.value);
  const sg = DB.segni ? DB.segni[segno] : null;
  if(sg){
  pr.innerHTML = '<span class="fo-prev-emoji">'+sg.s+'</span>'+sg.n+' · '+sg.d;
  } else {
  pr.innerHTML = '';
  }
}

function confirmForOther(){
  hapticFeedback();
  const name = (document.getElementById('foName').value||'').trim();
  const date = document.getElementById('foDate').value;
  if(!name){ toast('✨ Inserisci il nome della persona'); return; }
  if(!date){ toast('✨ Inserisci la data di nascita'); return; }
  const segno = segnoFromDate(date);
  const sg = DB.segni[segno];
  S.forOther = { name, date, segno };
  document.getElementById('modalForOther').classList.remove('open');

  if(_foCtx === 'oroscopo'){
  document.getElementById('oroFoBannerSign').textContent = sg ? sg.s : '✦';
  document.getElementById('oroFoBannerName').textContent = name;
  document.getElementById('oroFoBannerSegno').textContent = sg ? sg.n+' · '+sg.d : '';
  document.getElementById('oroForOtherBanner').style.display = 'flex';
  document.getElementById('btnOroForOther').style.display = 'none';
  genOroscopo();
  } else if(_foCtx === 'tarot'){
  document.getElementById('tarotFoBannerSign').textContent = sg ? sg.s : '✦';
  document.getElementById('tarotFoBannerName').textContent = name;
  document.getElementById('tarotFoBannerSegno').textContent = sg ? sg.n+' · '+sg.d : '';
  document.getElementById('tarotForOtherBanner').style.display = 'flex';
  document.getElementById('btnTarotForOther').style.display = 'none';
  }
  toast('✨ Lettura per '+name+' pronta!');
}

function clearForOther(ctx){
  hapticFeedback();
  S.forOther = null;
  if(ctx === 'oroscopo'){
  document.getElementById('oroForOtherBanner').style.display = 'none';
  document.getElementById('btnOroForOther').style.display = '';
  genOroscopo();
  } else if(ctx === 'tarot'){
  document.getElementById('tarotForOtherBanner').style.display = 'none';
  document.getElementById('btnTarotForOther').style.display = '';
  const th = document.getElementById('tarotHome');
  const tr = document.getElementById('tarotReading');
  if(th) th.style.display = 'block';
  if(tr) tr.style.display = 'none';
  }
}

function showZodiaco(){
  const raw=_lsGet(CFG.kProfilo);
  const cont=$('#zodContent');
  const _zodBtnHtml='<button class="btn btn-sec" onclick="nav(\'profilo\')" style="margin-top:0">✏️ Vai al Profilo</button>';
  if(!raw){cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Salva prima il tuo profilo ✨</p>'+_zodBtnHtml;return;}
  let p;
  try{ p=JSON.parse(raw); }catch(e){ cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Profilo non valido — salvalo di nuovo ✨</p>'+_zodBtnHtml; return; }
  const sg=DB.segni[p.segno];
  const ore=DB.oroscopo[p.segno];
  if(!sg||!ore){ cont.innerHTML='<p class="t-muted" style="padding:16px 0 10px;text-align:center">Segno non riconosciuto — aggiorna il profilo ✨</p>'+_zodBtnHtml; return; }
  const tags=sg.k.map(k=>'<span class="tag">'+k+'</span>').join('');
  const compatEntry=DB.compat[p.segno]||{};
  const topC=Object.entries(compatEntry).sort(([,a],[,b])=>b-a).slice(0,3)
  .map(([s,sc])=>'<span class="tag">'+DB.segni[s].e+' '+DB.segni[s].n+' ('+sc+'%)</span>').join('');
  cont.innerHTML=`
  <div class="zodiac-hero" style="padding:0;overflow:hidden;border-radius:14px;border:1px solid rgba(212,175,55,0.4)">
  <div style="width:100%;height:220px;position:relative;overflow:hidden">
    <img src="./images/zodiaco-verticale/${p.segno}.webp" alt="${sg.n}" style="width:100%;height:100%;object-fit:cover;object-position:center center;display:block" onerror="this.parentNode.innerHTML='<div style=height:100%;display:flex;align-items:center;justify-content:center;font-size:72px;background:linear-gradient(145deg,#180d30,#08040f)>${sg.s}</div>'">
    <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,5,20,0.1) 0%,rgba(10,5,20,0.5) 50%,rgba(10,5,20,0.97) 100%)"></div>
    <div style="position:absolute;bottom:14px;left:0;right:0;text-align:center;z-index:2">
      <div style="font-size:46px;filter:drop-shadow(0 0 14px rgba(212,175,55,0.9));line-height:1">${sg.s}</div>
      <div class="zh-name" style="margin-top:6px">${sg.n}</div>
      <div class="zh-dates">${sg.d}</div>
    </div>
  </div>
  <div style="padding:14px 15px 18px;text-align:center">
  <div style="font-size:12px;color:var(--muted);margin-bottom:10px">Pianeta: <span style="color:var(--gold)">${sg.p}</span> · Elemento: <span style="color:var(--gold)">${sg.el}</span></div>
  <div class="zh-attrs">${tags}</div>
  </div>
  </div>
  <div style="margin-bottom:11px"><h3>💕 In amore</h3><p>${rnd(ore.amore)}</p></div>
  <div style="margin-bottom:11px"><h3>💼 Nel lavoro</h3><p>${rnd(ore.lavoro)}</p></div>
  <div style="margin-bottom:11px"><h3>⭐ Il tuo consiglio cosmico</h3><p>${rnd(ore.fortuna)}</p></div>
  <div><h3>💞 Segni più compatibili</h3><div style="margin-top:7px">${topC}</div></div>
  `;
}

function selMode(m){
  S.tMode=m;
  $('#modeS').classList.toggle('active',m==='semplice');
  $('#modeA').classList.toggle('active',m==='approfondita');
}

function startTarot(){

  if(S.tMode === 'approfondita' && !isPremium()){
  requirePremium(()=>startTarot());
  return;
  }

  showAdGate(S.tMode==='semplice'?'Lettura Semplice · 3 Carte':'Lettura Approfondita · 5 Carte', _doStartTarot);
}

function _doStartTarot(){
  $('#tarotHome').style.display='none';
  $('#tarotReading').style.display='block';
  $('#tarotResult').style.display='none';
  _pickLock=true; // Blocca finché l'animazione non finisce
  S.tDeck=[...DB.tarot.carte].sort(()=>Math.random()-.5);
  S.tPicked=[];
  S.tStep=0;

  const pos=S.tMode==='semplice'?DB.tarot.pos_semplice:DB.tarot.pos_approfondita;
  const n=pos.length;
  const slots=S.tMode==='semplice'?3:5;

  const foSuffix = S.forOther ? ' · per '+S.forOther.name : '';
  $('#tarotTitle').textContent=S.tMode==='semplice'
  ?'🃏 Lettura Semplice — Passato · Presente · Futuro'+foSuffix
  :'🔮 La Croce della Vita — Lettura Approfondita'+foSuffix;
  $('#tarotInstr').textContent='Il mazzo si sta preparando...';

  const g=$('#tGrid');
  g.className='tgrid'+(S.tMode==='approfondita'?' wide':'');
  g.style.gridTemplateColumns = ''; // Rimuovo grid per posizionamento absolute

  const bar=$('#posBar');
  bar.innerHTML=pos.map((p,i)=>`
  <div class="posbar-item" id="pbar${i}">
  <div class="posbar-num">${i+1}</div>
  <div>${p.n}</div>
  </div>
  `).join('');

  g.innerHTML=Array(slots).fill(0).map((_,i)=>`
  <div class="tslot in-deck" id="ts${i}" style="--i:${i}" onclick="pickCard(${i})">
  <div class="tcard-inner" id="ci${i}">
  <div class="tcard-face tcard-back">
  <canvas class="tcard-canvas tcard-canvas-back" width="240" height="360"></canvas>
  <div class="tcard-shimmer"></div>
  </div>
  <div class="tcard-face tcard-front">
  <canvas class="tcard-canvas tcard-canvas-front" width="240" height="360"></canvas>
  </div>
  </div>
  </div>
  `).join('');

  _initCardBacks();

  setTimeout(() => {
  const slotsArr = Array.from(document.querySelectorAll('.tslot'));
  const totalWidth = g.offsetWidth;
  const isWide = S.tMode === 'approfondita';
  const cardWidth = isWide ? 80 : 100;
  const spacing = (totalWidth - (cardWidth * slots)) / (slots + 1);

  slotsArr.forEach((slot, i) => {
  setTimeout(() => {
  slot.classList.remove('in-deck');
  const leftPos = spacing + (cardWidth / 2) + i * (cardWidth + spacing);
  slot.style.left = `${leftPos}px`;
  slot.style.top = `50%`;
  slot.style.transform = `translate(-50%, -50%)`;

  slot.dataset.origLeft = `${leftPos}px`;
  slot.dataset.origTop = `50%`;
  slot.dataset.origTransform = `translate(-50%, -50%)`;

  playMysticSound('card');
  if (i === slots - 1) {
  _pickLock = false;
  $('#tarotInstr').textContent = 'Tocca le carte una per una per rivelarle.';
  }
  }, i * 200);
  });
  }, 500);
}

let _pickLock=false;
const TAROT_IMGS = {"0": "./images/tarocchi/il-matto.webp", "1": "./images/tarocchi/il-mago.webp", "2": "./images/tarocchi/la-papessa.webp", "3": "./images/tarocchi/imperatrice.webp", "4": "./images/tarocchi/imperatore.webp", "5": "./images/tarocchi/il-papa.webp", "6": "./images/tarocchi/gli-amanti.webp", "7": "./images/tarocchi/il-carro.webp", "8": "./images/tarocchi/la-forza.webp", "9": "./images/tarocchi/eremita.webp", "10": "./images/tarocchi/la-ruota-della-fortuna.webp", "11": "./images/tarocchi/la-giustizia.webp", "12": "./images/tarocchi/appeso.webp", "13": "./images/tarocchi/la-morte.webp", "14": "./images/tarocchi/la-temperanza.webp", "15": "./images/tarocchi/il-diavolo.webp", "16": "./images/tarocchi/la-torre.webp", "17": "./images/tarocchi/la-stella.webp", "18": "./images/tarocchi/la-luna.webp", "19": "./images/tarocchi/il-sole.webp", "20": "./images/tarocchi/il-giudizio.webp", "21": "./images/tarocchi/il-mondo.webp", "22": "./images/tarocchi/asso-di-bastoni.webp", "23": "./images/tarocchi/due-di-bastoni.webp", "24": "./images/tarocchi/tre-di-bastoni.webp", "25": "./images/tarocchi/quatro-di-bastoni.webp", "26": "./images/tarocchi/cinque-di-bastoni.webp", "27": "./images/tarocchi/sei-di-bastoni.webp", "28": "./images/tarocchi/sette-di-bastoni.webp", "29": "./images/tarocchi/otto-di-bastoni.webp", "30": "./images/tarocchi/nove-di-bastoni.webp", "31": "./images/tarocchi/dieci-di-bastoni.webp", "32": "./images/tarocchi/fante-di-bastoni.webp", "33": "./images/tarocchi/cavaliere-di-bastoni.webp", "34": "./images/tarocchi/regina-di-bastoni.webp", "35": "./images/tarocchi/re-di-bastoni.webp", "36": "./images/tarocchi/asso-di-coppe.webp", "37": "./images/tarocchi/due-di-coppe.webp", "38": "./images/tarocchi/tre-di-coppe.webp", "39": "./images/tarocchi/quattro-di-coppe.webp", "40": "./images/tarocchi/cinque-di-coppe.webp", "41": "./images/tarocchi/sei-di-coppe.webp", "42": "./images/tarocchi/sette-di-coppe.webp", "43": "./images/tarocchi/otto-di-coppe.webp", "44": "./images/tarocchi/nove-di-coppe.webp", "45": "./images/tarocchi/dieci-di-coppe.webp", "46": "./images/tarocchi/fante-di-coppe.webp", "47": "./images/tarocchi/cavaliere-di-coppe.webp", "48": "./images/tarocchi/regina-di-coppe.webp", "49": "./images/tarocchi/re-di-coppe.webp", "50": "./images/tarocchi/asso-di-spade.webp", "51": "./images/tarocchi/due-di-spade.webp", "52": "./images/tarocchi/tre-di-spade.webp", "53": "./images/tarocchi/quattro-di-spade.webp", "54": "./images/tarocchi/cinque-di-spade.webp", "55": "./images/tarocchi/sei-di-spade.webp", "56": "./images/tarocchi/sette-di-spade.webp", "57": "./images/tarocchi/otto-di-spade.webp", "58": "./images/tarocchi/nove-di-spade.webp", "59": "./images/tarocchi/dieci-di-spade.webp", "60": "./images/tarocchi/fante-di-spade.webp", "61": "./images/tarocchi/cavaliere-di-spade.webp", "62": "./images/tarocchi/regina-di-spade.webp", "63": "./images/tarocchi/re-di-spade.webp", "64": "./images/tarocchi/asso-di-denari.webp", "65": "./images/tarocchi/due-di-denari.webp", "66": "./images/tarocchi/tre-di-denari.webp", "67": "./images/tarocchi/quattro-di-denari.webp", "68": "./images/tarocchi/cinque-di-denari.webp", "69": "./images/tarocchi/sei-di-denari.webp", "70": "./images/tarocchi/sette-di-denari.webp", "71": "./images/tarocchi/otto-di-denari.webp", "72": "./images/tarocchi/nove-di-denari.webp", "73": "./images/tarocchi/dieci-di-denari.webp", "74": "./images/tarocchi/fante-di-denari.webp", "75": "./images/tarocchi/cavaliere-di-denari.webp", "76": "./images/tarocchi/regina-di-denari.webp", "77": "./images/tarocchi/re-di-denari.webp"};
const TAROT_BACK = "./images/card-back.webp";

const SUIT_COLORS={
  maggiori:{bg:['#2d0050','#130025'],border:'#d4af37',accent:'#ffd700',text:'#ffe080'},
  bastoni: {bg:['#3d1200','#1a0700'],border:'#ff6b1a',accent:'#ff8c42',text:'#ffb380'},
  coppe:   {bg:['#001840','#000d20'],border:'#3aa0ff',accent:'#60c0ff',text:'#a0d8ff'},
  spade:   {bg:['#10101e','#08081a'],border:'#b0b0d0',accent:'#d0d0f0',text:'#e8e8ff'},
  pentacoli:{bg:['#002510','#001008'],border:'#40c060',accent:'#60e080',text:'#a0f0b0'}
};

function _rr(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

function drawCardBack(canvas){
  const W=canvas.width,H=canvas.height,ctx=canvas.getContext('2d');

  if(typeof TAROT_BACK !== 'undefined'){
  const img=new Image();
  img.onload=()=>{
  ctx.clearRect(0,0,W,H);
  _rr(ctx,0,0,W,H,10);ctx.save();ctx.clip();
  ctx.drawImage(img,0,0,W,H);ctx.restore();

  const ov=ctx.createLinearGradient(0,0,W,0);
  ov.addColorStop(0,'rgba(212,175,55,0)');
  ov.addColorStop(0.5,'rgba(212,175,55,0.08)');
  ov.addColorStop(1,'rgba(212,175,55,0)');
  ctx.fillStyle=ov;ctx.fillRect(0,0,W,H);

  ctx.strokeStyle='rgba(212,175,55,0.7)';ctx.lineWidth=2.5;
  _rr(ctx,1.5,1.5,W-3,H-3,9);ctx.stroke();
  };
  img.src=TAROT_BACK;
  return;
  }

  const bg=ctx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,'#1e0840');bg.addColorStop(1,'#0a0220');
  ctx.fillStyle=bg;_rr(ctx,0,0,W,H,10);ctx.fill();

  ctx.strokeStyle='#d4af37';ctx.lineWidth=2;
  _rr(ctx,2,2,W-4,H-4,9);ctx.stroke();
  ctx.strokeStyle='rgba(212,175,55,0.3)';ctx.lineWidth=1;
  _rr(ctx,5,5,W-10,H-10,7);ctx.stroke();

  ctx.fillStyle='rgba(212,175,55,0.18)';
  const step=Math.round(W/5);
  for(let x=step;x<W;x+=step){
  for(let y=step;y<H;y+=step){
  ctx.font=`${Math.round(W*0.09)}px serif`;
  ctx.fillText('✦',x-W*0.045,y+W*0.035);
  }
  }

  const cx=W/2,cy=H/2,cr=W*0.28;
  const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,cr);
  cg.addColorStop(0,'rgba(140,60,220,0.5)');cg.addColorStop(1,'rgba(140,60,220,0)');
  ctx.fillStyle=cg;ctx.beginPath();ctx.arc(cx,cy,cr,0,Math.PI*2);ctx.fill();

  ctx.save();ctx.translate(cx,cy);ctx.fillStyle='rgba(212,175,55,0.6)';
  for(let i=0;i<8;i++){
  ctx.save();ctx.rotate(i*Math.PI/4);
  ctx.fillRect(-W*0.02,-H*0.2,W*0.04,H*0.12);
  ctx.restore();
  }
  ctx.beginPath();ctx.arc(0,0,W*0.08,0,Math.PI*2);
  ctx.fillStyle='rgba(212,175,55,0.4)';ctx.fill();
  ctx.restore();

  ctx.save();ctx.font=`bold ${Math.round(W*0.12)}px 'Arial'`;
  ctx.fillStyle='rgba(212,175,55,0.55)';ctx.textAlign='center';
  ctx.letterSpacing='2px';
  ctx.fillText('MYSTICA',cx,H*0.88);
  ctx.restore();
}

function drawCardFront(canvas, carta, inv, preloadedImg) {
  const W = canvas.width, H = canvas.height, ctx = canvas.getContext('2d');

  const render = (img) => {
  ctx.clearRect(0, 0, W, H);
  _rr(ctx, 0, 0, W, H, 10);
  ctx.save();
  ctx.clip();
  if (inv) {
  ctx.translate(W / 2, H / 2);
  ctx.rotate(Math.PI);
  ctx.translate(-W / 2, -H / 2);
  }
  ctx.drawImage(img, 0, 0, W, H);
  ctx.restore();
  ctx.strokeStyle = 'rgba(212,175,55,0.8)';
  ctx.lineWidth = 2.5;
  _rr(ctx, 1.5, 1.5, W - 3, H - 3, 9);
  ctx.stroke();
  if (inv) {
  ctx.fillStyle = 'rgba(180,30,30,0.85)';
  _rr(ctx, W / 2 - 20, 4, 40, 14, 4);
  ctx.fill();
  ctx.font = `bold ${Math.round(W * 0.1)}px Arial`;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('INVERTITA', W / 2, 11);
  }
  };

  if (preloadedImg) {
  render(preloadedImg);
  return;
  }

  if (typeof TAROT_IMGS !== 'undefined' && TAROT_IMGS[carta.id]) {
  const img = new Image();
  img.onload = () => render(img);
  img.src = TAROT_IMGS[carta.id];
  return;
  }
  const sc=SUIT_COLORS[carta.s]||SUIT_COLORS.maggiori;

  const bg=ctx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,sc.bg[0]);bg.addColorStop(1,sc.bg[1]);
  ctx.fillStyle=bg;_rr(ctx,0,0,W,H,10);ctx.fill();

  ctx.strokeStyle=sc.border;ctx.lineWidth=2.5;
  _rr(ctx,2,2,W-4,H-4,9);ctx.stroke();

  ctx.strokeStyle=sc.accent+'50';ctx.lineWidth=1;
  _rr(ctx,6,6,W-12,H-12,7);ctx.stroke();

  const co=sc.accent;
  [[8,8],[W-8,8],[8,H-8],[W-8,H-8]].forEach(([x,y])=>{
  ctx.save();ctx.translate(x,y);ctx.strokeStyle=co+'80';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(-6,0);ctx.lineTo(0,0);ctx.lineTo(0,6*(y<H/2?1:-1));ctx.stroke();
  ctx.restore();
  });

  ctx.strokeStyle=sc.accent+'30';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(10,H*0.22);ctx.lineTo(W-10,H*0.22);ctx.stroke();
  ctx.beginPath();ctx.moveTo(10,H*0.78);ctx.lineTo(W-10,H*0.78);ctx.stroke();

  const cx=W/2,cy=H*0.45;
  const ag=ctx.createRadialGradient(cx,cy,0,cx,cy,W*0.32);
  ag.addColorStop(0,sc.accent+'25');ag.addColorStop(1,'transparent');
  ctx.fillStyle=ag;ctx.beginPath();ctx.arc(cx,cy,W*0.32,0,Math.PI*2);ctx.fill();

  ctx.save();
  if(inv){ctx.translate(cx,cy);ctx.rotate(Math.PI);ctx.translate(-cx,-cy);}
  ctx.font=`${Math.round(W*0.38)}px serif`;
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(carta.e,cx,cy);
  ctx.restore();

  const nome=carta.n.length>12?carta.n.substring(0,11)+'…':carta.n;
  ctx.font=`bold ${Math.round(W*0.11)}px Arial`;
  ctx.fillStyle=sc.text;ctx.textAlign='center';ctx.textBaseline='bottom';
  ctx.fillText(nome,cx,H-10);

  if(inv){
  ctx.fillStyle='rgba(248,113,113,0.85)';
  _rr(ctx,W/2-16,8,32,12,4);ctx.fill();
  ctx.font=`bold ${Math.round(W*0.09)}px Arial`;
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('INV',W/2,14);
  }

  ctx.font=`${Math.round(W*0.09)}px serif`;ctx.fillStyle=sc.accent+'80';
  ctx.textBaseline='top';ctx.textAlign='left';ctx.fillText('✦',10,H*0.24);
  ctx.textAlign='right';ctx.fillText('✦',W-10,H*0.24);
}

function _initCardBacks(){
  const isWide = S.tMode === 'approfondita';
  const W = isWide ? 80 : 100;
  const H = isWide ? 120 : 150;
  document.querySelectorAll('.tcard-canvas-back').forEach(c=>{
  c.width=W*2;c.height=H*2;drawCardBack(c);
  });
}

function pickCard(idx){
  if(_pickLock) return;
  const pos=S.tMode==='semplice'?DB.tarot.pos_semplice:DB.tarot.pos_approfondita;
  if(S.tStep>=pos.length) return;
  const sl=document.getElementById('ts'+idx);
  if(!sl||sl.classList.contains('flipped')) return;

  _pickLock=true;
  const carta=S.tDeck[S.tPicked.length];
  const inv=rndBool(.33);

  const img = new Image();
  img.onload = () => {
  const frontCanvas = sl.querySelector('.tcard-canvas-front');

  frontCanvas.width = 440;
  frontCanvas.height = 660;
  drawCardFront(frontCanvas, carta, inv, img);

  sl.classList.add('zoomed');
  const inner = sl.querySelector('.tcard-inner');

  setTimeout(() => {
  inner.classList.add('do-flip');
  sl.classList.add('flipped', 'glow-' + carta.s);
  playMysticSound('card');
  }, 50);

  S.tPicked.push({ carta, inv, pos: pos[S.tStep] });

  setTimeout(() => {
  burst();
  document.getElementById('pbar' + S.tStep)?.classList.add('done');
  S.tStep++;

  sl.classList.remove('zoomed');

  sl.style.left = sl.dataset.origLeft;
  sl.style.top = sl.dataset.origTop;
  sl.style.transform = sl.dataset.origTransform;

  if (S.tStep >= pos.length) {
  setTimeout(showResult, 1000);
  } else {
  setTimeout(() => { _pickLock = false; }, 800);
  }
  }, 2500); // Tempo di visualizzazione aumentato per godersi l'animazione
  };
  img.src = TAROT_IMGS[carta.id] || TAROT_IMGS["0"];
}

function showResult(){
  playMysticSound('reveal');
  burst();
  const isDeep=S.tMode==='approfondita';
  let html='';

  S.tPicked.forEach((pick,i)=>{
  const {carta,inv,pos}=pick;
  const sig=inv?carta.r:carta.u;
  const invTag=inv?'<span class="rb-inv">Invertita</span>':'';
  const cid='rbcv'+i;

  html+=`
  <div class="reading-block">
  <div class="rb-head">
  <div class="rb-card-img"><canvas id="${cid}" width="112" height="168"></canvas></div>
  <div>
  <div class="rb-pos">${pos.n}</div>
  <div class="rb-name">${carta.n}${invTag}</div>
  <div class="rb-suit">${SUIT_LABEL[carta.s]}</div>
  </div>
  </div>
  <span class="rb-posname">${pos.d}</span>
  <p class="rb-text">${buildInterpret(carta,sig,inv,i,isDeep)}</p>
  </div>
  `;
  });

  html+=`
  <div class="synthesis">
  <h3>🌟 Il Filo Rosso della Lettura${S.forOther ? ' <span style="color:var(--muted);font-size:14px;font-family:\'Crimson Pro\',serif">— per '+S.forOther.name+'</span>' : ''}</h3>
  <p>${buildSynthesis(S.tPicked)}</p>
  </div>
  `;

  html += `<div style='text-align:center;margin-top:15px'><button class='btn' onclick='shareResult("tarocchi", "I miei Tarocchi", "Ecco la mia lettura...")'>🔮 Condividi Lettura</button></div>`;
  $('#tarotContent').innerHTML=html;

  S.tPicked.forEach((pick,i)=>{
  const c=document.getElementById('rbcv'+i);
  if(c){ c.width=112;c.height=168;drawCardFront(c,pick.carta,pick.inv); }
  });

  $('#tarotResult').style.display='block';

  const names=S.tPicked.map(p=>p.carta.n+(p.inv?' ↓':'')).join(' · ');
  saveHistory(isDeep?'Lettura Approfondita':'Lettura Semplice',names);
  saveToDiary(isDeep?'Tarocchi (Approfondita)':'Tarocchi (Semplice)', names, $('#tarotContent').innerHTML);
}

function buildInterpret(carta,sig,inv,pos,isDeep){
  const intros3=[
  ["Nel tuo passato si radica","Le fondamenta di questa situazione portano","L'energia del passato porta"],
  ["Nel momento presente emerge","Adesso al centro della scena vive","L'energia viva di oggi porta"],
  ["Nel futuro prossimo si profila","Il seme del domani è","L'evoluzione possibile porta"]
  ];
  const intros5=[
  ["Al cuore di questa situazione vive","Nel nucleo di tutto ciò che stai vivendo pulsa","L'essenza centrale porta"],
  ["Come sfida che chiede integrazione emerge","La forza che si oppone — e al tempo stesso insegna — porta","L'ostacolo-maestro porta"],
  ["Le radici profonde di questa storia affondano in","Il fondamento su cui si regge tutto porta","Le origini di questo momento portano"],
  ["Dall'inconscio sta emergendo","Le correnti sottomarine di questa situazione portano","Ciò che sale in superficie porta"],
  ["Se segui il flusso, l'esito possibile è","Il seme del futuro, se coltivato ora, porta","Verso dove tende questa energia:"]
  ];

  const pool=isDeep?intros5:intros3;
  const intro=rnd(pool[Math.min(pos,pool.length-1)]);

  if(!isDeep){
  return `${intro} <strong>${carta.n}</strong>${inv?' (invertita)':''}: ${sig}.`;
  }else{
  const app=inv
  ?`l'ombra di ${carta.n}: ${sig}. Questo aspetto nascosto chiede di essere riconosciuto e integrato — non ignorato. Dove nella tua vita resisti a questa verità?`
  :`${carta.n} in piena luce: ${sig}. Lascia che questa energia ti parli direttamente, come forza viva nella tua realtà concreta.`;
  return `${intro} ${app}`;
  }
}

function buildSynthesis(picks){
  const suits=picks.map(p=>p.carta.s);
  const cnt={};
  suits.forEach(s=>{cnt[s]=(cnt[s]||0)+1;});
  const dom=Object.entries(cnt).sort(([,a],[,b])=>b-a)[0][0];
  const hasInv=picks.some(p=>p.inv);

  const msgs={
  maggiori:`Le Carte Maggiori dominano questa lettura: il cosmo sta orchestrando qualcosa di più grande della volontà personale. Non si tratta di piccole decisioni quotidiane — c'è una lezione karmico-spirituale in gioco. Il tuo compito è ascoltare, non solo agire.`,
  bastoni:`Il Fuoco dei Bastoni domina: hai un'energia potente che chiede di essere canalizzata con intenzione. Creatività, passione e azione sono al centro. La domanda non è se — è come e verso dove.`,
  coppe:`Le Coppe dell'Acqua dominano: il cuore emotivo è il protagonista. Relazioni, sentimenti, intuizioni e connessioni profonde sono la materia prima di questa lettura. Fidati di ciò che senti prima di ciò che pensi.`,
  spade:`Le Spade dell'Aria dominano: la mente, le scelte e la verità sono al centro. Qualcosa chiede di essere detto con chiarezza o tagliato via con coraggio. La chiarezza mentale è la tua strada.`,
  pentacoli:`I Pentacoli della Terra dominano: materia, lavoro e strutture concrete sono al fuoco. Ciò che costruisci oggi diventa il tuo domani — costruisci con intenzione, non per abitudine.`
  };

  const fili=[
  ' Il filo comune a queste carte è il movimento: qualcosa si sta trasformando, con o senza il tuo consenso.',
  ' La coerenza di questa lettura indica una direzione chiara — fidati di essa anche quando la mente dubita.',
  ' Le carte mostrano un ciclo completo: fine e inizio convivono in questo preciso momento.',
  " C'è una tensione creativa in questa lettura: usa l'attrito per far avanzare il cammino invece di resistergli."
  ];

  const inv=hasInv?' Alcune energie sono ancora nell\'ombra o in transizione — non come ostacoli, ma come aree che chiedono consapevolezza prima di esprimersi pienamente.':'';
  return (msgs[dom]||msgs.maggiori)+inv+rnd(fili);
}

function resetTarot(){
  S.tPicked=[];S.tDeck=[];S.tStep=0;
  _pickLock=false;
  $('#tarotHome').style.display='block';
  $('#tarotReading').style.display='none';
  $('#tarotResult').style.display='none';
  $('#tarotContent').innerHTML='';
  $('#tGrid').innerHTML='';
  $('#posBar').innerHTML='';
}

function saveTarot(){

  nav('archivio');
  toast('📚 Lettura salvata nell\'archivio ✨');
}

function initCompatSelects(){
  const keys=Object.keys(DB.segni);
  const opts=keys.map(k=>`<option value="${k}">${DB.segni[k].e} ${DB.segni[k].n}</option>`).join('');
  let p={};
  try{ p=JSON.parse(_lsGet(CFG.kProfilo)||'{}'); }catch(e){}
  $('#cUser').innerHTML='<option value="">— Seleziona —</option>'+opts;
  $('#cPartner').innerHTML='<option value="">— Seleziona —</option>'+opts;
  if(p.segno) $('#cUser').value=p.segno;

  $('#compatResult').style.display='none';
}

function calcCompat(){
  const u=$('#cUser').value, pa=$('#cPartner').value;
  if(!u||!pa){toast('⚠️ Seleziona entrambi i segni');return;}
  showAdGate('Affinità Cosmica', ()=>_doCalcCompat(u,pa));
}

function _doCalcCompat(u,pa){
  const su=DB.segni[u], sp=DB.segni[pa];
  if(!su||!sp){ toast('⚠️ Segno non valido'); return; }
  const compatRow=DB.compat[u]||{};
  const sc=u===pa?(68+Math.floor(Math.random()*15)):(compatRow[pa]??DB.compat[pa]?.[u]??50);

  let livello,nota,col;
  if(sc>=85){
  livello='Affinità Cosmica Profonda';col='var(--success)';
  nota=rnd([
  `${su.n} e ${sp.n} risuonano sulle stesse frequenze cosmiche. Questa connessione va oltre il razionale: è riconoscimento d'anima. Costruite qualcosa di grande insieme — le stelle sono dalla vostra parte.`,
  `Un'alchimia rara. ${su.n} porta ${su.el} e ${sp.n} porta ${sp.el}: insieme creano qualcosa di completo che nessuno dei due potrebbe creare da solo.`,
  `Le carte del cosmo li hanno segnati come compatibili in profondità. Non è fortuna — è affinità di valori, di ritmi, di visione del mondo. Curatela.`
  ]);
  }else if(sc>=70){
  livello='Buona Affinità';col='var(--gold)';
  nota=rnd([
  `${su.n} e ${sp.n} hanno terreno fertile su cui costruire. Le differenze esistono ma si complementano — l'uno porta ciò che l'altro non ha.`,
  `Connessione solida con potenziale di crescita. Le sfide che incontrate non sono ostacoli — sono opportunità di maturazione reciproca.`,
  `Buona base con potenziale reale. ${su.p} e ${sp.p} dialogano bene tra loro.`
  ]);
  }else if(sc>=55){
  livello='Affinità con Sfide';col='var(--warning)';
  nota=rnd([
  `Connessione che richiede lavoro consapevole. Le differenze tra ${su.n} e ${sp.n} sono reali — ma le differenze gestite con maturità arricchiscono più delle somiglianze.`,
  `Sfida stimolante. Non è la compatibilità più naturale, ma le coppie che superano le differenze costruiscono legami più profondi.`,
  `Terreno impervio ma fertile. Serve comunicazione continua e volontà autentica di incontrarsi a metà strada.`
  ]);
  }else{
  livello='Connessione Complessa';col='var(--error)';
  nota=rnd([
  `Correnti contrarie: si attrae e si contraddice. Non è impossibile — ma richiede una maturità eccezionale da entrambi.`,
  `Le energie di ${su.n} e ${sp.n} guardano in direzioni diverse. L'amore diventa una scelta quotidiana invece di un dono naturale.`,
  `Sfida autentica. Il cosmo li mette alla prova: chi sceglie di restare cresce come non avrebbe potuto da solo.`
  ]);
  }

  $('#compatResult').innerHTML=`
  <div class="compat-res">
  <div class="compat-signs">${su.s} 💕 ${sp.s}</div>
  <div class="compat-score" style="color:${col}">${sc}%</div>
  <div class="compat-level">${livello}</div>
  <div class="divider"></div>
  <p class="compat-text">${nota}</p>
  </div>
  `;
  $('#compatResult').style.display='block';
  playMysticSound(sc >= 70 ? 'chime' : 'bell');
  saveHistory('Compatibilità',''+su.n+' + '+sp.n+': '+sc+'%');
}

function saveHistory(tipo,dettaglio){
  try{
  let h=JSON.parse(_lsGet(CFG.kStorico)||'[]');
  h.unshift({tipo,dettaglio,segno:S.segno,data:new Date().toLocaleString('it-IT'),ts:Date.now()});
  if(h.length>60) h.pop();
  _lsSet(CFG.kStorico,JSON.stringify(h));
  }catch(e){}
}

function showArchivio(){
  let h=[];
  try{ h=JSON.parse(_lsGet(CFG.kStorico)||'[]'); }catch(e){}
  const list=$('#archList'), btn=$('#archClearBtn');
  if(h.length===0){
  list.innerHTML=`
  <div style="text-align:center;padding:30px 10px 20px">
  <div style="font-size:52px;margin-bottom:12px;opacity:.4">📿</div>
  <p style="color:var(--muted);font-size:13px;line-height:1.7;margin-bottom:18px">
  Il tuo archivio mistico è ancora vuoto.<br>
  Ogni lettura che esegui verrà custodita qui.
  </p>
  <button class="btn btn-sec" onclick="nav('tarot')" style="margin-bottom:8px">🃏 Inizia con i Tarocchi</button>
  <button class="btn btn-sec" onclick="nav('oroscopo')">🌙 Leggi l'Oroscopo</button>
  </div>`;
  btn.style.display='none';return;
  }
  btn.style.display='block';
  const icons={'Oroscopo':'🌙','Lettura Semplice':'🃏','Lettura Approfondita':'🔮','Compatibilità':'💕'};
  list.innerHTML=h.map(x=>`
  <div class="arch-item">
  <div class="arch-type">${icons[x.tipo]||'✨'} ${x.tipo}</div>
  <div class="arch-detail">${x.dettaglio}</div>
  <div class="arch-meta">${x.data}${x.segno?(' · '+(DB.segni[x.segno]?.n||x.segno)):''}</div>
  </div>
  `).join('');
}

function clearArch(){
  mysticaConfirm("Svuotare l'archivio mistico? Questa azione è irreversibile.", () => {
  _lsRemove(CFG.kStorico);
  showArchivio();
  toast('🗑️ Archivio svuotato');
  });
}

function initParticles(){
  const colors=['#d4af37','#d4af3780','#ffffff60'];
  const sizes=[2,3,2,1.5];
  for(let i=0;i<10;i++)
  setTimeout(()=>particle(rnd(sizes),rnd(colors),5+Math.random()*6),i*500);
  setInterval(()=>{
  if(Math.random()>.65) particle(rnd(sizes),rnd(colors),5+Math.random()*6);
  },2800);
}

function setNavTop(){
  const hdr=$('.header');
  if(!hdr) return;
  const hh=hdr.offsetHeight;
  document.documentElement.style.setProperty('--hdr-h',hh+'px');
  const c=$('.content');
  if(c) c.style.paddingTop=(hh+10)+'px';
}

(function(){
  let lastY=0, hidden=false;
  window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const hdr=$('.header');
  if(!hdr) return;
  const hh=hdr.offsetHeight;
  if(y>lastY && y>60 && !hidden){
  hdr.style.top=(-hh)+'px';
  hidden=true;
  } else if(y<lastY && hidden){
  hdr.style.top='0px';
  hidden=false;
  }
  lastY=y;
  },{passive:true});
})();

function filterAppContent(query) {
  query = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.dash-card');
  cards.forEach(card => {
  const text = card.innerText.toLowerCase();
  if (text.includes(query)) {
  card.style.display = 'flex';
  card.style.opacity = '1';
  } else {
  card.style.display = 'none';
  card.style.opacity = '0';
  }
  });

  document.querySelectorAll('.dash-title').forEach(title => {
  let next = title.nextElementSibling;
  let hasVisible = false;
  while (next && next.classList.contains('dash-grid')) {
  if (next.querySelector('.dash-card[style*="display: flex"]')) {
  hasVisible = true;
  break;
  }
  next = next.nextElementSibling;
  }
  title.style.display = (hasVisible || query === '') ? 'block' : 'none';
  });
}

const DB_AFFIRMAZIONI = [
  "La mia intuizione è una bussola infallibile.",
  "Il successo fluisce verso di me in modi inaspettati.",
  "Sono in perfetta armonia con i cicli dell'universo.",
  "Ogni sfida è un'opportunità di crescita spirituale.",
  "La mia luce interiore illumina il cammino.",
  "Attraggo solo energie positive e costruttive.",
  "Il passato è polvere stellare, il futuro è un cielo aperto.",
  "La saggezza degli antenati scorre nelle mie vene.",
  "Sono il creatore della mia realtà magica.",
  "L'abbondanza è il mio stato naturale.",
  "Il mio cuore è aperto ai messaggi del cosmo.",
  "Ogni respiro mi connette con l'infinito.",
  "La mia voce ha il potere di manifestare i miei desideri.",
  "Sono protetto e guidato dalle forze celesti.",
  "La bellezza risiede nella mia anima autentica."
];

function getMoonPhase(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 3) { year--; month += 12; }
  let c = 365.25 * year;
  let e = 30.6 * month;
  let jd = c + e + day - 694039.09; // Julian day
  jd /= 29.5305882; // Lunar month
  let b = parseInt(jd);
  jd -= b;
  let phase = Math.round(jd * 8);
  if (phase >= 8) phase = 0;

  const phases = [
  { name: "Luna Nuova", icon: "🌑" },
  { name: "Luna Crescente", icon: "🌒" },
  { name: "Primo Quarto", icon: "🌓" },
  { name: "Gibbosa Crescente", icon: "🌔" },
  { name: "Luna Piena", icon: "🌕" },
  { name: "Gibbosa Calante", icon: "🌖" },
  { name: "Ultimo Quarto", icon: "🌗" },
  { name: "Luna Calante", icon: "🌘" }
  ];
  return phases[phase];
}

function updateMoonWidget() {
  const phase = getMoonPhase(new Date());
  const iconEl = document.getElementById('moonIcon');
  const nameEl = document.getElementById('moonPhaseName');
  if (iconEl && nameEl) {
  iconEl.innerText = phase.icon;
  nameEl.innerText = phase.name;
  }
}

function showMoonInfo() {
  const phase = getMoonPhase(new Date());
  toast(`🌙 Fase Lunare: ${phase.name}. Un momento ideale per ${phase.name.includes('Crescente') ? 'iniziare nuovi progetti' : 'lasciare andare il superfluo'}.`);
}

function showDailyAffirmation() {
  const lastShow = _lsGet('mystica_last_affirmation');
  const today = new Date().toDateString();

  if (lastShow !== today) {
  const index = Math.floor(Math.random() * DB_AFFIRMAZIONI.length);
  document.getElementById('affirmationText').innerText = DB_AFFIRMAZIONI[index];
  document.getElementById('affirmationOverlay').classList.add('visible');
  document.getElementById('affirmationBox').classList.add('visible');
  _lsSet('mystica_last_affirmation', today);
  }
}

function closeAffirmation() {
  document.getElementById('affirmationOverlay').classList.remove('visible');
  document.getElementById('affirmationBox').classList.remove('visible');
  hapticFeedback('light');
}

function saveToDiary(tipo, titolo, contenuto) {
  try {
  let diary = JSON.parse(_lsGet('mystica_diary') || '[]');
  diary.unshift({
  tipo,
  titolo,
  contenuto,
  data: new Date().toLocaleString('it-IT'),
  ts: Date.now()
  });
  if (diary.length > 50) diary.pop();
  _lsSet('mystica_diary', JSON.stringify(diary));
  } catch(e) { console.error("Errore salvataggio diario:", e); }
}

function initAdvancedParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const createParticle = (x, y) => {
  const p = document.createElement('div');
  p.className = 'particle-reactive';
  const size = Math.random() * 3 + 1;
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  p.style.left = x + 'px';
  p.style.top = y + 'px';
  p.style.background = Math.random() > 0.5 ? 'var(--gold)' : '#fff';
  p.style.boxShadow = `0 0 ${size*2}px ${p.style.background}`;

  p.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
  p.style.setProperty('--ty', (Math.random() - 0.5) * 100 + 'px');

  const duration = Math.random() * 1.5 + 0.5;
  p.style.animation = `floatParticle ${duration}s ease-out forwards`;

  container.appendChild(p);
  setTimeout(() => p.remove(), duration * 1000);
  };

  window.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.15) return;
  createParticle(e.clientX, e.clientY);
  });

  window.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  for(let i=0; i<5; i++) createParticle(touch.clientX, touch.clientY);
  }, {passive: true});
}

window.addEventListener('popstate', function(event) {
  if (event.state) {
  if (event.state.type === 'section') {
  nav(event.state.view, true);
  } else if (event.state.type === 'oracolo') {
  _switchView('oracoli');
  _openOracoloPanel(event.state.oracoloId, true);
  }
  } else {

  _switchView('profilo');
  }
});

try{ window.history.replaceState({view: 'profilo', type: 'section'}, '', '#profilo'); }catch(e){}

/* ═══════════════════════════════════════════════
   ONBOARDING v2 — Interesse + WOW Screen + Consulente
   ═══════════════════════════════════════════════ */

const ONBOARD_KEY = 'myst_onboard_v1';
const WOW_KEY     = 'myst_wow_seen_v1';

/* ---------- ONBOARDING ---------- */
function showOnboarding(nome) {
  var el = document.getElementById('onboardingInteresse');
  if (!el) return;
  var msg = document.getElementById('onbWelcomeMsg');
  if (msg) msg.textContent = nome ? '✦ Benvenuto, ' + nome : 'Benvenuto in MYSTICA';
  el.style.display = 'flex';
}

function selectInterest(btn) {
  document.querySelectorAll('.onb-card').forEach(function(b){ b.classList.remove('selected'); });
  btn.classList.add('selected');
  var cont = document.getElementById('onbContinueBtn');
  if (cont) { cont.style.opacity = '1'; cont.style.pointerEvents = 'auto'; }
}

function completeOnboarding() {
  var sel = document.querySelector('.onb-card.selected');
  var interest = sel ? sel.dataset.interest : 'tutto';
  try { localStorage.setItem(ONBOARD_KEY, interest); } catch(e){}
  applyInterestPriority(interest);
  var el = document.getElementById('onboardingInteresse');
  if (el) { el.style.opacity='0'; el.style.transition='opacity .4s'; setTimeout(function(){ el.style.display='none'; el.style.opacity=''; }, 400); }
  showWowScreen();
}

function skipOnboarding() {
  try { localStorage.setItem(ONBOARD_KEY, 'tutto'); } catch(e){}
  var el = document.getElementById('onboardingInteresse');
  if (el) el.style.display = 'none';
  showWowScreen();
}

/* Riordina la home in base all'interesse scelto */
function applyInterestPriority(interest) {
  try {
    var sectionMap = {
      'divinazione': ['🃏 Divinazione','✨ Oracoli Antichi','🌌 Astrologia & Destino'],
      'astrologia':  ['🌌 Astrologia & Destino','🔯 Profilo Mistico','🃏 Divinazione'],
      'amore':       ['💜 Amore & Relazioni','🌌 Astrologia & Destino','🃏 Divinazione'],
      'spiritualita':['🧘 Mente & Spirito','✨ Oracoli Antichi','🌌 Astrologia & Destino'],
      'magia':       ['🌿 Magia & Rituali','✨ Oracoli Antichi','🃏 Divinazione']
    };
    // Store preference for dashboard reorder on next nav('profilo')
    try { localStorage.setItem('myst_interest', interest); } catch(e){}
  } catch(e) {}
}

/* ---------- WOW SCREEN ---------- */
var _arcaniMaggiori = [
  {n:'Il Matto',       e:'🃏', msg:`Ogni viaggio inizia con un passo verso l'ignoto. Oggi abbraccia l'incertezza con coraggio.`},
  {n:'Il Mago',        e:'⚗️', msg:`Hai tutti gli strumenti di cui hai bisogno. La tua volontà è la tua bacchetta magica.`},
  {n:'La Papessa',     e:'📖', msg:`Il silenzio conosce le risposte. Ascolta la voce interiore prima di agire.`},
  {n:`L'Imperatrice`, e:'🌹', msg:`Abbondanza e creatività fioriscono quando ti lasci nutrire dalla terra e dall'amore.`},
  {n:`L'Imperatore`,  e:'👑', msg:`Struttura e disciplina sono fondamenta di libertà. Costruisci oggi ciò che durerà.`},
  {n:'Il Papa',        e:'🗝️', msg:`La tradizione nasconde saggezze profonde. Cerca il maestro dentro e fuori di te.`},
  {n:'Gli Innamorati', e:'💑', msg:`Le scelte del cuore definiscono il cammino. Scegli con amore, non con paura.`},
  {n:'Il Carro',       e:'🏆', msg:`La vittoria appartiene a chi mantiene il controllo delle proprie forze opposte.`},
  {n:'La Forza',       e:'🦁', msg:`La vera forza non urla — si manifesta nella dolcezza e nella pazienza.`},
  {n:`L'Eremita`,     e:'🕯️', msg:`Ritirati dal rumore del mondo per trovare la tua luce interiore.`},
  {n:'La Ruota',       e:'☸️', msg:`I cicli girano. Ciò che sale deve scendere, ciò che cade tornerà a salire.`},
  {n:'La Giustizia',   e:'⚖️', msg:`Ogni azione porta il suo seme di conseguenza. Agisci con integrità.`},
  {n:`L'Appeso`,      e:'🔮', msg:`La resa è il portale verso una nuova prospettiva. Lascia andare ciò che non serve.`},
  {n:'La Morte',       e:'🦋', msg:`Ogni fine è un inizio travestito. La trasformazione è la legge dell'universo.`},
  {n:'La Temperanza',  e:'⚗️', msg:`L'alchimia della vita richiede equilibrio. Mescola con cura le tue energie.`},
  {n:'Il Diavolo',     e:'🔗', msg:`Riconosci le catene che porti volentieri. La libertà inizia dalla consapevolezza.`},
  {n:'La Torre',       e:'⚡', msg:`Ciò che crolla era costruito su basi false. Dal crollo nasce la verità.`},
  {n:'Le Stelle',      e:'⭐', msg:`Sei guidato dalla luce del cosmo. Confida nel tuo percorso con speranza aperta.`},
  {n:'La Luna',        e:'🌙', msg:`Le illusioni del subconscio chiedono attenzione. Non tutto è come appare.`},
  {n:'Il Sole',        e:'☀️', msg:`Chiarezza, gioia e vitalità illuminano il tuo giorno. Brilla senza riserve.`},
  {n:'Il Giudizio',    e:'📯', msg:`È il momento della resa dei conti e del risveglio. Ascolta la chiamata interiore.`},
  {n:'Il Mondo',       e:'🌍', msg:`Un ciclo si compie nella sua pienezza. Celebra quanto hai costruito e cresciuto.`}
];

var _fasi = [
  {e:'🌑',n:'Luna Nuova'},    {e:'🌒',n:'Luna Crescente'},
  {e:'🌓',n:'Primo Quarto'}, {e:'🌔',n:'Gibbosa Crescente'},
  {e:'🌕',n:'Luna Piena'},   {e:'🌖',n:'Gibbosa Calante'},
  {e:'🌗',n:'Ultimo Quarto'},{e:'🌘',n:'Luna Calante'}
];

var _energieGiorno = [
  'Il cosmo soffia venti di cambiamento. Resta aperto e adattati con grazia.',
  `Un'energia di protezione ti circonda. Fidati del tuo istinto oggi.`,
  'La creatività scorre forte. Esprimi chi sei senza filtri.',
  `Giornata di riflessione profonda. Le risposte vengono dall'interno.`,
  'Le connessioni umane portano doni inaspettati. Apri il cuore.',
  `Il momento favorisce l'azione decisa. Agisci su ciò che rimandi.`,
  'Energie lunari potenti amplificano le emozioni. Naviga con consapevolezza.',
  'Una sincronicità ti aspetta oggi. Presta attenzione ai segni.',
  'È il giorno ideale per rilasciare ciò che non ti appartiene più.',
  `L'abbondanza è vicina a chi si muove con fiducia e gratitudine.`
];

function _dailySeedN(salt) {
  var d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth()+1) * 100 + d.getDate() + (salt||0);
}
function _seededIdx(arr, seed) {
  return ((seed % arr.length) + arr.length) % arr.length;
}

function showWowScreen() {
  try {
    var raw = localStorage.getItem('myst_v3_profile');
    var p = raw ? JSON.parse(raw) : null;
    var nome = p ? p.name : 'Viandante';
    var segno = p ? (DB.segni[p.segno] || null) : null;

    // Arcano del giorno (seed giornaliero)
    var cardIdx = _seededIdx(_arcaniMaggiori, _dailySeedN(7));
    var carta = _arcaniMaggiori[cardIdx];

    // Luna
    var lunaIdx = _seededIdx(_fasi, _dailySeedN(3));
    var luna = _fasi[lunaIdx];

    // Numero guida (1-9, seed giornaliero)
    var num = (_dailySeedN(11) % 9) + 1;

    // Energia
    var energiaIdx = _seededIdx(_energieGiorno, _dailySeedN(5));

    // Popola
    var d = new Date();
    var dateStr = d.toLocaleDateString('it-IT', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

    document.getElementById('wowDate').textContent = dateStr;
    document.getElementById('wowName').textContent = nome;
    document.getElementById('wowCardEmoji').textContent = carta.e;
    document.getElementById('wowCardName').textContent = carta.n;
    document.getElementById('wowCardMsg').textContent = carta.msg;
    document.getElementById('wowMoonEmoji').textContent = luna.e;
    document.getElementById('wowMoonName').textContent = luna.n;
    document.getElementById('wowNum').textContent = num;
    document.getElementById('wowSegnoEmoji').textContent = segno ? segno.e : '✨';
    document.getElementById('wowSegnoName').textContent = segno ? segno.n : (p ? p.segno : '—');
    document.getElementById('wowEnergy').textContent = '"' + _energieGiorno[energiaIdx] + '"';

    var ws = document.getElementById('wowScreen');
    if (ws) { ws.style.display = 'flex'; }
  } catch(e) { console.warn('WOW screen error:', e); enterApp(); }
}

function enterApp() {
  var ws = document.getElementById('wowScreen');
  if (ws) { ws.style.opacity='0'; ws.style.transition='opacity .5s'; setTimeout(function(){ ws.style.display='none'; ws.style.opacity=''; }, 500); }
  try { burst(); } catch(e){}
}

/* Hook completeWelcome per lanciare onboarding dopo */
var _origCompleteWelcome = completeWelcome;
// Override dopo definizione — vedi initOnboardingFlow()
function initOnboardingFlow() {
  // Se profilo già salvato E onboarding già fatto: skip tutto
  var hasProfile  = !!localStorage.getItem('myst_v3_profile');
  var hasOnboard  = !!localStorage.getItem(ONBOARD_KEY);
  var wowSeenDate = localStorage.getItem(WOW_KEY);
  var todayStr    = new Date().toISOString().split('T')[0];

  if (hasProfile && hasOnboard) {
    // Mostra WOW screen solo una volta al giorno
    if (wowSeenDate !== todayStr) {
      localStorage.setItem(WOW_KEY, todayStr);
      setTimeout(showWowScreen, 600);
    }
    return;
  }

  if (hasProfile && !hasOnboard) {
    // Ha profilo ma non ha fatto onboarding interesse
    var raw = localStorage.getItem('myst_v3_profile');
    var p = null; try { p = JSON.parse(raw); } catch(e){}
    setTimeout(function(){ showOnboarding(p ? p.name : ''); }, 400);
    return;
  }
  // Nuovo utente: il modalWelcome gestisce la raccolta dati.
  // Dopo completeWelcome() hook mostra onboarding.
}

/* Patch completeWelcome per iniettare onboarding dopo */
/* patch rimossa: onboarding iniettato direttamente in completeWelcome */

/* ---------- CONSULENTE MISTICO ---------- */
var _consultTopicActive = 'amore';

function selectConsultTopic(btn) {
  document.querySelectorAll('.consult-topic').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  _consultTopicActive = btn.dataset.t;
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
  }, 1400);
}

function initApp(){
  if (window._mysticaInitDone) return;
  window._mysticaInitDone = true;
  updateMoonWidget();
  setTimeout(showDailyAffirmation, 1500);
  initAdvancedParticles();

  try{ populateWelcomeDateSelects(); }catch(e){ console.warn('populateWelcomeDateSelects error',e); }
  const todayStr=new Date().toISOString().split('T')[0];
  const minD='1900-01-01';
  ['#inpDate','#angelDate','#numDate'].forEach(id=>{
  const el=$(id);
  if(el){ el.max=todayStr; el.min=minD; }
  });

  ['#lunaDate','#planetiDate'].forEach(id=>{
  const el=$(id);
  if(el) el.max=todayStr;
  });

  loadProfile();
  refreshWisdom();
  // ═══ ONBOARDING FLOW ═══
  setTimeout(initOnboardingFlow, 800);
  initParticles();
  setNavTop();
  window.addEventListener('resize',setNavTop);

  const dreamDateEl=document.getElementById('eng-dream-date');
  if(dreamDateEl) dreamDateEl.value=new Date().toISOString().split('T')[0];
  setTimeout(renderDreamJournalList,100);
  setTimeout(grimorioRenderList,100);

  const astralDateEl=document.getElementById('astral-log-date');
  if(astralDateEl) astralDateEl.value=new Date().toISOString().split('T')[0];
  const astralTimeEl=document.getElementById('astral-log-time');
  if(astralTimeEl){ const n=new Date(); astralTimeEl.value=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0'); }
  setTimeout(astralRenderLogs,100);

  document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
  $$('.modal.open').forEach(m=>{
  if(m.id!=='modalWelcome') m.classList.remove('open');
  });
  }
  });

  document.addEventListener('touchstart', function(){}, {passive:true});

  if(window.visualViewport){
  window.visualViewport.addEventListener('resize', function(){
  const modal = $('.modal.open');
  if(modal) modal.scrollTop = 0;
  });
  }

  console.log('🔮 MYSTICA v15 — Freemium · GDPR · SEO · Analytics · Share · Rating');
  document.title = 'MYSTICA – Oracolo delle Stelle | Tarocchi, Oroscopo, I Ching in Italiano';
  initDelfiIcons();

  initPWA();


  updatePremiumUI();
  const advLock = document.getElementById('tarotAdvLock');
  if(advLock) advLock.style.display = isPremium() ? 'none' : 'block';

  // Toast di benvenuto se appena tornato da Stripe
  if(isPremium() && sessionStorage.getItem('mystica_stripe_welcome') !== 'done'){
    const wasJustActivated = sessionStorage.getItem(PREMIUM_KEY) === 'true';
    if(wasJustActivated){
      sessionStorage.setItem('mystica_stripe_welcome','done');
      setTimeout(()=>{
        if(typeof burst === 'function') burst();
        if(typeof toast === 'function') toast('⭐ Benvenuto nel Premium! L\'oracolo completo è tuo.');
      }, 1500);
    }
  }

  initCookieConsent();

  trackAppUse();

  if(typeof gtag !== 'undefined'){
  gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
  });

  if(_lsGet(COOKIE_KEY) === 'all') enableAnalytics();
  }

  const fpb = document.getElementById('footerPremiumBtn');
  if(fpb) fpb.style.display = isPremium() ? 'none' : 'block';

  document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
  closePremiumModal();
  closeLegal();
  }
  }, true);
}

const ORACOLI_AD_SEEN = new Set();

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
  if(!q){ showToast('Scrivi la tua domanda per la Pizia ✦'); return; }
  if(_delfiRitoSel < 0){ showToast('Scegli prima il rito di purificazione ✦'); return; }

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
/* ── FINE ORACOLO DI DELFI ── */

function openOracoloHome(id){

  if(typeof trackEvent!=='undefined') trackEvent('Oracle','open',id);

  if(!_adSeen.has('oracolo_'+id)){
  _adSeenAdd('oracolo_'+id);
  const labels={totem:'Animali Guida',angeli:'Angelologia',geomanzia:'Geomanzia',
  numerologia:'Numerologia',orespeschio:'Ore Specchio',luna:'Fasi Lunari',
  pianeti:'Transiti Planetari',rune:'Runologia',iching:'I Ching',libro:'Libro Risposte',
  wicca:'Stregoneria &amp; Wicca',alchimia:'Alchimia — Grande Opera',
  cabala:'Cabala — Albero della Vita',ermetismo:'Ermetismo — Tavola Smeraldina',
  negromanzia:'Negromanzia — Dialoghi con l\'Ombra',
  delfi:'Oracolo di Delfi — Apollo &amp; Pizia'};
  showAdGate(labels[id]||id, ()=>{ _switchView('oracoli'); _openOracoloPanel(id); });
  } else {
  _switchView('oracoli');
  _openOracoloPanel(id);
  }
}

function navMagia(panel){

  if(!_adSeen.has('magia')){
  _adSeenAdd('magia');
  const labels={bianca:'Magia Bianca',rossa:'Magia Rossa',nera:'Magia Nera',malocchio:'Il Malocchio'};
  showAdGate(labels[panel]||'Libri di Magia', ()=>{ _switchView('magia'); _openMagiaPanel(panel); });
  } else {
  _switchView('magia');
  _openMagiaPanel(panel);
  }
}

function _openMagiaPanel(panel){
  document.querySelectorAll('.magia-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.magia-tab').forEach(t=>t.classList.toggle('active', t.dataset.panel===panel));
  const el=document.getElementById('magiaPanel-'+panel);
  if(el) el.classList.add('active');
  if(panel==='sigilli') _renderEnciclopediaSVG();
}

function _renderEnciclopediaSVG(){
  const map={
    'svgSaturno':'saturno','svgGiove':'giove','svgMarte':'marte',
    'svgSole':'sole','svgVenere':'venere','svgMercurio':'mercurio','svgLuna':'luna'
  };
  Object.entries(map).forEach(([elId, geomKey])=>{
    const container=document.getElementById(elId);
    if(!container||container.innerHTML.trim()) return;
    const s=DB_SIGILLI_SALOMONE.find(x=>x.geomFn===geomKey);
    if(s) container.innerHTML=_generaSigilloSVG(s);
  });
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
  showAdGate(labels[id]||id, ()=>_openOracoloPanel(id));
  } else {
  _openOracoloPanel(id);
  }
}

function _openOracoloPanel(id, isBack = false){
  if(!isBack){
  try{ window.history.pushState({view: 'oracoli', oracoloId: id, type: 'oracolo'}, '', '#oracolo-' + id); }catch(e){}
  }
  hapticFeedback('mystical');
  $('#oracoliHome').style.display='none';
  document.querySelectorAll('[id^="oracolo-"]').forEach(el=>el.style.display='none');
  const target=$('#oracolo-'+id);
  if(target){
  target.style.display='block';

  if(id==='totem') resetTotem();
  if(id==='angeli') resetAngeli();
  if(id==='geomanzia') resetGeomanzia();
  if(id==='numerologia') resetNumerologia();
  if(id==='orespeschio') resetOreSpecchio();
  if(id==='luna') resetLuna();
  if(id==='pianeti') resetPianeti();
  if(id==='rune') resetRune();
  if(id==='iching') resetIching();
  if(id==='libro') resetLibro();
  if(id==='wicca') resetWicca();
  if(id==='alchimia') resetAlchimia();
  if(id==='cabala') resetCabala();
  if(id==='ermetismo') resetErmetismo();
  if(id==='negromanzia') resetNegromanzia();
  if(id==='bibliomanzia') resetBibliomanzia();
  if(id==='delfi'){ resetDelfi(); initDelfiIcons(); }
  }
}

function backToOracoli(){
  try{ window.history.back(); }catch(e){ nav('oracoli'); }
}

const DB_TOTEM = [
  {
  id:'aquila', name:'Aquila', emoji:'🦅', img:'./images/totem-aquila.webp',
  tribe:'Guardiano dell\'Alto',
  keywords:['Visione','Libertà','Autorità spirituale','Chiaroveggenza'],
  messaggio:'L\'Aquila ti chiama ad elevare lo sguardo oltre le preoccupazioni del momento. Sei dotato di una visione rara — quella capacità di vedere il quadro completo quando tutti gli altri vedono solo frammenti. Il tuo compito è usare questa visione per guidare, non per dominare. Vola alto, ma non dimenticare la terra sotto di te.',
  sfida:'La tua sfida è non isolarti nella tua visione superiore. L\'aquila deve imparare che la vera forza sta nel condividere ciò che vede con il branco, non nel volare sola nell\'infinito.',
  pregio:'La tua presenza porta chiarezza dove c\'è confusione. Quando parli, le persone si fermano ad ascoltare — anche quando non lo sanno ancora.'
  },
  {
  id:'lupo', name:'Lupo', emoji:'🐺', img:'./images/totem-lupo.webp',
  tribe:'Custode del Branco',
  keywords:['Lealtà','Intuizione','Insegnamento','Famiglia spirituale'],
  messaggio:'Il Lupo è l\'animale che ti guida attraverso le foreste oscure della vita. Sei un essere profondamente sociale che trova il suo senso nel legame con gli altri, ma hai anche un\'anima selvaggia che ha bisogno di spazio. La luna ti chiama: ascolta la tua intuizione più degli accordi sociali.',
  sfida:'Il Lupo a volte porta troppo peso del branco sulle spalle. Impara a ricevere aiuto quanto ne dai. Non devi proteggere tutti da solo.',
  pregio:'Sei un insegnante naturale. Le persone imparano da te non attraverso le parole ma attraverso ciò che incarni. La tua presenza trasforma.'
  },
  {
  id:'orso', name:'Orso', emoji:'🐻', img:'./images/totem-orso.webp',
  tribe:'Il Grande Guaritore',
  keywords:['Forza interiore','Guarigione','Introversione sacra','Cicli'],
  messaggio:'L\'Orso entra nella caverna del tuo essere per ricordarti che la vera forza nasce dal silenzio. Hai bisogno di periodi di raccoglimento per ritrovare te stesso — e queste "ibernazioni" non sono debolezze, sono il tuo modo di ricaricare un potere immenso.',
  sfida:'Fai attenzione alla tendenza a chiuderti al mondo nei momenti di stress. Il tuo ritiro interiore è sacro, ma c\'è un limite oltre il quale diventa isolamento.',
  pregio:'Sei un guaritore naturale. La tua energia è profondamente rassicurante — le persone si sentono al sicuro con te in modi che non riescono a spiegare.'
  },
  {
  id:'delfino', name:'Delfino', emoji:'🐬', img:'./images/totem-delfino.webp',
  tribe:'Messaggero delle Acque',
  keywords:['Gioia','Comunicazione','Intelligenza emotiva','Connessione'],
  messaggio:'Il Delfino porta il messaggio della gioia come pratica spirituale, non come stato d\'umore. Sei nato per connettere mondi diversi — sei un ponte tra le persone, tra le idee, tra le dimensioni dell\'esistenza. La tua intelligenza è più emotiva che razionale, e questo è il tuo superpotere.',
  sfida:'La tua sensibilità alle energie altrui può diventare un fardello se non impari a filtrare. Assorbi troppo degli altri — crea confini energetici chiari.',
  pregio:'Porti leggerezza dove c\'è pesantezza. Il tuo senso dell\'umorismo è un dono spirituale, non una frivolezza. Fai ridere le anime.'
  },
  {
  id:'serpente', name:'Serpente', emoji:'🐍',
  tribe:'Custode della Trasformazione',
  keywords:['Trasformazione','Saggezza ombra','Guarigione','Kundalini'],
  messaggio:'Il Serpente non striscia — danza. È l\'animale della trasformazione radicale, del rinnovarsi lasciando cadere ciò che non serve più. Sei in un periodo di muta: qualcosa di fondamentale nella tua vita sta cambiando pelle. Non resistere.',
  sfida:'La tua intensità può intimorire gli altri. Non tutti reggono la profondità che porti nelle conversazioni e nelle relazioni. Calibra la tua energia.',
  pregio:'Sei un alchimista delle crisi. Dove altri vedono disastri, tu vedi occasioni di trasformazione. Questa è una rara forma di saggezza.'
  },
  {
  id:'cervo', name:'Cervo', emoji:'🦌',
  tribe:'Il Cammino Gentile',
  keywords:['Grazia','Gentilezza come forza','Intuizione del cuore','Armonia'],
  messaggio:'Il Cervo ti insegna che la gentilezza non è debolezza — è una delle forme più evolute di forza. Il tuo cuore è la tua bussola più affidabile. Segui la via della grazia anche quando il mondo intorno a te sembra richiedere durezza.',
  sfida:'La tua sensibilità ai conflitti può portarti a evitare confronti necessari. Non tutte le tensioni vanno evitate — alcune vanno attraversate con coraggio gentile.',
  pregio:'La tua presenza calma le situazioni tese senza che tu faccia nulla di intenzionale. Sei un portatore di pace naturale.'
  },
  {
  id:'gufo', name:'Gufo', emoji:'🦉',
  tribe:'Veggente del Notturno',
  keywords:['Saggezza','Visione notturna','Verità nascosta','Magia'],
  messaggio:'Il Gufo vede nell\'oscurità ciò che il giorno nasconde. Sei attratto dai misteri, dalle domande profonde, dalle verità scomode che altri preferiscono ignorare. La tua saggezza è di tipo intuitivo — arriva in flash, in sogni, in momenti di silenzio.',
  sfida:'Fai attenzione a non diventare un osservatore distaccato della vita. La saggezza del Gufo serve quando viene condivisa, non trattenuta.',
  pregio:'Hai la capacità di vedere le motivazioni reali dietro le azioni umane. Questo dono, usato con compassione, fa di te un consigliore straordinario.'
  },
  {
  id:'leone', name:'Leone', emoji:'🦁',
  tribe:'Re del Cuore',
  keywords:['Coraggio','Creatività','Leadership','Generosità solare'],
  messaggio:'Il Leone governa con il cuore aperto, non con la forza bruta. Il tuo compito è imparare a leadership dal luogo della generosità — dare il tuo calore senza aspettare riconoscimento. Il sole non chiede gratitudine per brillare.',
  sfida:'L\'ego del Leone può oscurare il suo cuore. Quando cerchi riconoscimento a tutti i costi, perdi la tua vera grandezza. La tua luce brilla di più quando non ci pensi.',
  pregio:'La tua energia vitale è contagiosa. Quando sei pienamente presente, accendi qualcosa nelle persone che non sapevano di avere.'
  }
];

const TOTEM_MATRIX = [

  [[3,1,1,0,0,1,2,1],[0,2,1,3,2,0,1,0],[1,3,2,0,0,2,0,1],[1,0,1,0,1,2,0,3]],

  [[1,1,0,0,0,0,1,3],[3,1,0,0,1,0,2,1],[0,2,0,1,3,0,1,0],[0,1,2,1,0,3,1,0]],

  [[3,1,1,0,0,1,1,0],[1,1,0,0,1,1,0,3],[1,2,2,1,1,2,1,0],[0,1,0,2,2,0,3,1]],

  [[1,3,1,0,0,1,0,1],[0,0,2,3,1,2,0,0],[2,1,3,0,1,0,2,0],[0,0,0,1,0,1,0,3]],

  [[1,3,2,0,0,1,1,1],[3,0,0,0,1,0,2,0],[0,0,3,2,2,2,0,0],[2,1,0,1,2,0,1,2]]
];

let _totemAnswers = [];

function resetTotem(){
  _totemAnswers = [];
  for(let i=0;i<5;i++){
  const s=$('#totemStep'+i);
  if(s) s.style.display = i===0 ? 'block' : 'none';

  if(s) s.querySelectorAll('.totem-opt').forEach(b=>{b.disabled=false;b.style.opacity='1';});
  }
  $('#totemResult').style.display='none';
  $('#totemQuiz').style.display='block';
}

function totemAnswer(step, answerIdx){
  _totemAnswers[step] = answerIdx;

  const opts=$('#totemStep'+step).querySelectorAll('.totem-opt');
  opts.forEach((b,i)=>{
  b.style.opacity = i===answerIdx?'1':'0.4';
  b.disabled=true;
  });
  setTimeout(()=>{
  if(step<4){
  $('#totemStep'+step).style.display='none';
  $('#totemStep'+(step+1)).style.display='block';
  } else {
  _calcTotem();
  }
  }, 500);
}

function _calcTotem(){
  const TOTEM_IDS=['aquila','lupo','orso','delfino','serpente','cervo','gufo','leone'];
  const scores=new Array(8).fill(0);
  _totemAnswers.forEach((ans, q)=>{
  TOTEM_MATRIX[q][ans].forEach((v,t)=>scores[t]+=v);
  });

  const maxIdx = scores.indexOf(Math.max(...scores));
  const totem = DB_TOTEM.find(t=>t.id===TOTEM_IDS[maxIdx]) || DB_TOTEM[0];
  _showTotemResult(totem);
}

function _showTotemResult(t){
  $('#totemQuiz').style.display='none';
  const el=$('#totemResult');
  el.style.display='block';
  el.innerHTML=`
  <div class="totem-res">
  <div class="totem-img-container">${t.img ? `<img src="${t.img}" class="totem-img-hd">` : `<div class="totem-animal">${t.emoji}</div>`}</div>
  <div class="totem-name">${t.name}</div>
  <div class="totem-tribe">${t.tribe}</div>
  <div style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-bottom:16px">
  ${t.keywords.map(k=>`<span class="tag">✦ ${k}</span>`).join('')}
  </div>
  <div class="totem-msg">
  <h4>📜 Il Messaggio del Tuo Totem</h4>
  <p>${t.messaggio}</p>
  </div>
  <div class="totem-msg">
  <h4>⚠️ La Tua Sfida Spirituale</h4>
  <p>${t.sfida}</p>
  </div>
  <div class="totem-msg">
  <h4>✨ Il Tuo Dono Naturale</h4>
  <p>${t.pregio}</p>
  </div>
  <button class="btn btn-sec" onclick="resetTotem()" style="margin-top:6px">🔄 Rifai il Test</button>
  </div>
  `;
  burst();
  saveHistory('Totem', t.name + ' — ' + t.tribe);
}

const DB_ANGELI = [
  {n:'Vehuiah',       emoji:'👼', trono:'Serafino',  periodo:'20 Mar – 24 Mar', num:1,
   dominio:'Nuovi inizi, volontà, luce della creazione',
   missione:'Vehuiah è il primo Angelo, portatore della fiamma primordiale. Protegge i pionieri, coloro che aprono strade inesistenti. Se è il tuo Angelo, sei qui per iniziare qualcosa di nuovo — ogni volta che ti fermi, soffochi una parte di te.',
   preghiera:'Vehuiah, illumina il mio cammino nei momenti di oscurità e dammi il coraggio di iniziare quando ogni cosa intorno a me dice di attendere.'},
  {n:'Jeliel',        emoji:'👼', trono:'Serafino',  periodo:'25 Mar – 29 Mar', num:2,
   dominio:'Amore, fedeltà, armonia tra gli opposti',
   missione:'Jeliel supervisiona le unioni benedette — amorose, spirituali e creative. La tua presenza porta pace nelle relazioni conflittuali. Sei nato per essere un costruttore di ponti tra mondi e persone apparentemente incompatibili.',
   preghiera:'Jeliel, guida il mio cuore verso l\'amore che eleva e proteggimi dall\'amore che consuma senza nutrire.'},
  {n:'Sitael',        emoji:'👼', trono:'Serafino',  periodo:'30 Mar – 3 Apr', num:3,
   dominio:'Costruzione, struttura, prosperità materiale',
   missione:'Sitael è l\'Angelo degli architetti del mondo materiale. Se lo guida sei un costruttore — non necessariamente di edifici, ma di strutture: istituzioni, famiglie, progetti, legami duraturi. La tua sfida è costruire su fondamenta vere.',
   preghiera:'Sitael, aiutami a costruire ciò che dura, non ciò che brilla solo nel momento.'},
  {n:'Elemiah',       emoji:'👼', trono:'Serafino',  periodo:'4 Apr – 8 Apr', num:4,
   dominio:'Viaggio interiore, trasformazione, scoperta del sé',
   missione:'Elemiah protegge i viaggiatori — dell\'esterno e dell\'interno. Il tuo percorso di vita è marcato da cambiamenti significativi che all\'inizio sembrano ostacoli ma sono in realtà portali. Sei destinato a conoscere parti di te attraverso l\'esperienza diretta.',
   preghiera:'Elemiah, trasforma ogni mia crisi in un portale verso una versione più autentica di me stesso.'},
  {n:'Mahasiah',      emoji:'👼', trono:'Serafino',  periodo:'9 Apr – 13 Apr', num:5,
   dominio:'Pace, rettifica, apprendimento sacro',
   missione:'Mahasiah cura le ferite karmiche. Se è il tuo Angelo, porti con te il compito di risolvere qualcosa di lasciato irrisolto — sia in questa vita che in cicli precedenti. Hai una predisposizione naturale all\'apprendimento spirituale.',
   preghiera:'Mahasiah, aiutami a rettificare ciò che ho sbagliato e a imparare ciò che l\'anima mia è venuta a imparare.'},
  {n:'Lelahel',       emoji:'👼', trono:'Serafino',  periodo:'14 Apr – 18 Apr', num:6,
   dominio:'Arte, bellezza, scienza, guarigione',
   missione:'Lelahel è l\'Angelo che ispira gli artisti e i guaritori. Sei un canale per qualcosa di più grande — la tua creatività non è solo espressione personale, è guarigione collettiva. Quando crei, sani. Quando smetti di creare, ti ammali.',
   preghiera:'Lelahel, fa\' di me un canale puro della bellezza divina, affinché ciò che creo porti luce.'},
  {n:'Achaiah',       emoji:'👼', trono:'Serafino',  periodo:'19 Apr – 23 Apr', num:7,
   dominio:'Pazienza, scoperta, svelamento dei segreti della natura',
   missione:'Achaiah è l\'Angelo dei filosofi e degli scopritori. Sei attratto dai misteri profondi della realtà — la tua mente non si accontenta delle risposte di superficie. La pazienza è la tua virtù da coltivare: i grandi segreti si svelano solo ai cuori che sanno attendere.',
   preghiera:'Achaiah, dammi la pazienza di chi sa che la verità si svela nel suo tempo, non nel mio.'},
  {n:'Cahethel',      emoji:'👼', trono:'Serafino',  periodo:'24 Apr – 28 Apr', num:8,
   dominio:'Abbondanza, agricoltura, connessione con la terra',
   missione:'Cahethel benedice i campi e i raccolti — interiori ed esteriori. Se è il tuo Angelo, hai un legame sacro con la terra e con i cicli naturali. La tua prosperità viene quando sei in allineamento con i ritmi della natura, non quando li combatti.',
   preghiera:'Cahethel, aiutami a piantare i semi giusti nel momento giusto e a fidarmi del raccolto.'},
  {n:'Haziel',        emoji:'👼', trono:'Cherubino', periodo:'29 Apr – 3 Mag', num:9,
   dominio:'Misericordia, perdono, grazia divina',
   missione:'Haziel è l\'Angelo della misericordia universale. Il tuo compito spirituale riguarda il perdono — non come atto morale ma come liberazione personale. Ogni volta che perdoni, liberi te stesso da catene invisibili che ti hanno tenuto prigioniero.',
   preghiera:'Haziel, scioglia i nodi del mio cuore e donami la grazia di perdonare senza dimenticare la lezione.'},
  {n:'Aladiah',       emoji:'👼', trono:'Cherubino', periodo:'4 Mag – 8 Mag', num:10,
   dominio:'Protezione karmica, innocenza, grazia nelle prove',
   missione:'Aladiah protegge coloro che affrontano prove karmiche difficili. Se è il tuo Angelo, le difficoltà della tua vita non sono punizioni — sono opportunità di liberazione da debiti che l\'anima porta da lontano. Ogni sfida superata ti alleggerisce.',
   preghiera:'Aladiah, proteggimi nelle prove che il karma mi porta e aiutami a comprenderle invece di subirle.'},
  {n:'Lauviah',       emoji:'👼', trono:'Cherubino', periodo:'9 Mag – 13 Mag', num:11,
   dominio:'Vittoria, fama, rivelazione onirica',
   missione:'Lauviah è l\'Angelo dei sogni rivelatori e delle vittorie spirituali. Se è il tuo Angelo, i tuoi sogni sono messaggi — impara a ricordarli e decodificarli. Le tue intuizioni notturne sono spesso più accurate delle analisi diurne.',
   preghiera:'Lauviah, parla alla mia anima mentre il corpo riposa e portami le risposte che il giorno nasconde.'},
  {n:'Hahaiah',       emoji:'👼', trono:'Cherubino', periodo:'14 Mag – 18 Mag', num:12,
   dominio:'Rifugio interiore, interpretazione dei sogni, protezione',
   missione:'Hahaiah è il guardiano del santuario interiore. Se è il tuo Angelo, hai bisogno di spazio sacro — fisico e interiore — per funzionare pienamente. Il tuo potere si rigenera nella solitudine; le folle ti esauriscono.',
   preghiera:'Hahaiah, proteggimi nelle profondità del mio essere e mostrami come il silenzio interiore parla.'},
  {n:'Yezalel',       emoji:'👼', trono:'Cherubino', periodo:'19 Mag – 23 Mag', num:13,
   dominio:'Fedeltà, memoria, riconciliazione',
   missione:'Yezalel è l\'Angelo della memoria sacra e della fedeltà. Hai una relazione profonda con il passato — a volte un peso, a volte un dono. La tua missione è usare ciò che ricordi come saggezza, non come catena.',
   preghiera:'Yezalel, aiutami a portare con me i ricordi come saggezza e a liberarmi da quelli che mi tengono prigioniero.'},
  {n:'Mebahel',       emoji:'👼', trono:'Cherubino', periodo:'24 Mag – 28 Mag', num:14,
   dominio:'Giustizia, verità, liberazione dei perseguitati',
   missione:'Mebahel è il paladino della giustizia divina. Se è il tuo Angelo, hai un senso innato di ciò che è giusto o sbagliato che spesso contrasta con le convenzioni sociali. Sei chiamato a parlare la tua verità anche quando è scomoda.',
   preghiera:'Mebahel, dammi il coraggio di dire la verità e la saggezza di scegliere il momento giusto per farlo.'},
  {n:'Hariel',        emoji:'👼', trono:'Cherubino', periodo:'29 Mag – 2 Giu', num:15,
   dominio:'Purificazione, liberazione dalle dipendenze, chiarezza',
   missione:'Hariel purifica ciò che è diventato opaco. Se è il tuo Angelo, hai la capacità di vedere con chiarezza — ma questa chiarezza va prima applicata a te stesso. La tua evoluzione richiede il coraggio di guardare i tuoi pattern più oscuri.',
   preghiera:'Hariel, illumina le parti di me che ho paura di vedere e aiutami a trasformarle senza giudizio.'},
  {n:'Hekamiah',      emoji:'👼', trono:'Cherubino', periodo:'3 Giu – 7 Giu', num:16,
   dominio:'Lealtà, onore, leadership spirituale',
   missione:'Hekamiah è l\'Angelo dei leader e dei guardiani. Se è il tuo Angelo, sei chiamato a responsabilità di guida — non necessariamente in modo formale, ma come presenza che stabilizza e orienta chi ti è intorno.',
   preghiera:'Hekamiah, aiutami a guidare con l\'esempio e a portare sulle spalle solo il peso che mi spetta, non quello degli altri.'},
  {n:'Lauviah II',    emoji:'👼', trono:'Trono',     periodo:'8 Giu – 12 Giu', num:17,
   dominio:'Rivelazione, illuminazione, gnosi interiore',
   missione:'Questo secondo Lauviah governa l\'illuminazione interiore. Hai un\'attrazione naturale per il misticismo e per le esperienze di espansione della coscienza. La tua mente è un laboratorio alchemico.',
   preghiera:'Lauviah, apri le porte della percezione interiore e guidami attraverso i misteri della coscienza.'},
  {n:'Caliel',        emoji:'👼', trono:'Trono',     periodo:'13 Giu – 17 Giu', num:18,
   dominio:'Giustizia, chiarimento della verità, processi',
   missione:'Caliel è l\'Angelo della verità assoluta. Se è il tuo Angelo, hai una tolleranza zero per le menzogne — anche quelle bianche, anche quelle confortanti. Questa radicalità verso la verità è la tua forza e la tua sfida.',
   preghiera:'Caliel, guidami a discernere la verità dalla menzogna e a parlare con chiarezza senza crudeltà.'},
  {n:'Leuviah',       emoji:'👼', trono:'Trono',     periodo:'18 Giu – 22 Giu', num:19,
   dominio:'Intelligenza espansiva, accettazione del destino',
   missione:'Leuviah governa l\'accettazione intelligente. Non la rassegnazione passiva, ma la saggezza di riconoscere cosa possiamo cambiare e cosa dobbiamo abbracciare. Il tuo equilibrio interiore viene dall\'accettare la vita come maestra.',
   preghiera:'Leuviah, aiutami ad accettare ciò che non posso cambiare con grazia e a cambiare tutto il resto con coraggio.'},
  {n:'Pahaliah',      emoji:'👼', trono:'Trono',     periodo:'23 Giu – 27 Giu', num:20,
   dominio:'Redenzione, vocazione spirituale, moralità',
   missione:'Pahaliah chiama alla vocazione spirituale autentica. Se è il tuo Angelo, hai una missione che va oltre il personale. Qualcosa in te sa già — il compito è obbedire a quella voce interiore con meno paura.',
   preghiera:'Pahaliah, rivelami la mia vera vocazione e dammi il coraggio di viverla senza scuse.'},
  {n:'Nelchael',      emoji:'👼', trono:'Trono',     periodo:'28 Giu – 2 Lug', num:21,
   dominio:'Apprendimento esoterico, astronomia, scienze sacre',
   missione:'Nelchael guida i ricercatori delle scienze invisibili. Se è il tuo Angelo, sei naturalmente attratto dai saperi nascosti — astrologia, cabala, alchimia, simbolismo. Non è curiosità vana: è una vocazione cognitiva.',
   preghiera:'Nelchael, guidami nei labirinti del sapere esoterico e proteggimi dalle illusioni che si travestono da verità.'},
  {n:'Yeiayel',       emoji:'👼', trono:'Trono',     periodo:'3 Lug – 7 Lug', num:22,
   dominio:'Fama, fortuna, protezione dei viaggi',
   missione:'Yeiayel è l\'Angelo del destino favorevole. Se è il tuo Angelo, hai una qualità naturale che attira l\'attenzione e la fortuna — ma solo quando sei allineato con la tua vera essenza. Quando ti tradisci per compiacere, la fortuna si ritira.',
   preghiera:'Yeiayel, aiutami a rimanere fedele a me stesso anche quando la tentazione di compiacere il mondo è forte.'},
  {n:'Melahel',       emoji:'👼', trono:'Trono',     periodo:'8 Lug – 12 Lug', num:23,
   dominio:'Guarigione, piante medicinali, armonia con la natura',
   missione:'Melahel è l\'Angelo dei guaritori e dei botanici dell\'anima. Se è il tuo Angelo, hai un legame speciale con il mondo vegetale e con la guarigione naturale. Il tuo corpo è sensibile agli ambienti — cura il tuo spazio come un tempio.',
   preghiera:'Melahel, insegnami i segreti della guarigione naturale e aiutami a usare questo dono per servire.'},
  {n:'Haheuiah',      emoji:'👼', trono:'Trono',     periodo:'13 Lug – 17 Lug', num:24,
   dominio:'Protezione, esilio interiore, rifugio',
   missione:'Haheuiah protegge chi attraversa l\'esilio — geografico, spirituale, emotivo. Se è il tuo Angelo, conosci la sensazione di non appartenere. Questa "estraneità" non è un difetto: è il segno che sei qui a portare qualcosa di nuovo.',
   preghiera:'Haheuiah, trasforma il mio senso di non appartenere nella consapevolezza di essere un ponte tra mondi.'},
  {n:'Nith-Haiah',    emoji:'👼', trono:'Dominazione',periodo:'18 Lug – 22 Lug', num:25,
   dominio:'Saggezza esoterica, magia bianca, pace interiore',
   missione:'Nith-Haiah è l\'Angelo dei sapienti mistici. Se è il tuo Angelo, hai accesso naturale agli stati espansi di coscienza. Mediti facilmente, sogni vividamente, percepisci l\'invisibile. Il pericolo è perderti nel mondo interiore a discapito di quello esteriore.',
   preghiera:'Nith-Haiah, guidami nella saggezza esoterica e aiutami a radicarla nella vita quotidiana.'},
  {n:'Haaiah',        emoji:'👼', trono:'Dominazione',periodo:'23 Lug – 27 Lug', num:26,
   dominio:'Diplomazia, politica, segreti rivelati',
   missione:'Haaiah è l\'Angelo dei diplomatici e degli strateghi. Se è il tuo Angelo, hai un\'intelligenza politica naturale — capisci le strutture di potere e come navigarle. Questa capacità va usata per costruire, non per manipolare.',
   preghiera:'Haaiah, guidami nelle strutture del potere e aiutami a usare la strategia al servizio del bene comune.'},
  {n:'Yerathel',      emoji:'👼', trono:'Dominazione',periodo:'28 Lug – 1 Ago', num:27,
   dominio:'Propagazione della luce, civiltà, liberazione',
   missione:'Yerathel è l\'Angelo della civilizzazione e della diffusione della luce. Se è il tuo Angelo, hai qualcosa di importante da comunicare al mondo — un\'idea, un messaggio, un modo di essere che altri hanno bisogno di vedere incarnato.',
   preghiera:'Yerathel, aiutami a portare la mia luce nel mondo con coraggio e senza la paura del giudizio altrui.'},
  {n:'Seheiah',       emoji:'👼', trono:'Dominazione',periodo:'2 Ago – 6 Ago', num:28,
   dominio:'Longevità, protezione dalle malattie e dagli incidenti',
   missione:'Seheiah protegge la vita fisica e la salute. Se è il tuo Angelo, hai una missione a lungo termine — la tua vita è un investimento lento. Non cercare risultati rapidi: le fondamenta che stai costruendo diventeranno evidenti nel tempo.',
   preghiera:'Seheiah, proteggimi nelle avversità fisiche e aiutami a prendermi cura del tempio che è il mio corpo.'},
  {n:'Reyel',         emoji:'👼', trono:'Dominazione',periodo:'7 Ago – 11 Ago', num:29,
   dominio:'Liberazione spirituale, rivelazione, sconfiggere il male',
   missione:'Reyel è l\'Angelo della liberazione spirituale. Se è il tuo Angelo, sei qui per liberare — te stesso prima, gli altri dopo. Hai la capacità di dissolvere gli inganni e di mostrare la realtà con una chiarezza a volte brutale.',
   preghiera:'Reyel, libera la mia coscienza da ogni illusione che si spaccia per verità.'},
  {n:'Omael',         emoji:'👼', trono:'Dominazione',periodo:'12 Ago – 16 Ago', num:30,
   dominio:'Pazienza, moltiplicazione, regno animale',
   missione:'Omael benedice la moltiplicazione — di idee, di risorse, di connessioni vitali. Se è il tuo Angelo, hai un dono speciale con gli animali e la natura. La pazienza non è tua virtù naturale, ma è la chiave di volta della tua missione.',
   preghiera:'Omael, insegnami la pazienza dei cicli naturali e aiutami a moltiplicare ciò che è buono in me e intorno a me.'},
  {n:'Lecabel',       emoji:'👼', trono:'Dominazione',periodo:'17 Ago – 22 Ago', num:31,
   dominio:'Talento, scienze, risoluzione dei problemi',
   missione:'Lecabel è l\'Angelo del talento tecnico e dell\'intelligenza pratica. Se è il tuo Angelo, hai abilità naturali in qualche campo — scoprirle e svilupparle non è un capriccio, è la tua vocazione. Il talento non sfruttato è un\'offesa al dono ricevuto.',
   preghiera:'Lecabel, illumina il mio talento e guidami a svilupparlo al massimo delle sue possibilità.'},
  {n:'Vasariah',      emoji:'👼', trono:'Dominazione',periodo:'23 Ago – 27 Ago', num:32,
   dominio:'Clemenza, giustizia equilibrata, eloquenza',
   missione:'Vasariah è l\'Angelo della clemenza e dell\'eloquenza sacra. Se è il tuo Angelo, le parole sono il tuo strumento principale. Parlare con chiarezza, bellezza e verità è la tua forma di servizio spirituale.',
   preghiera:'Vasariah, fa\' delle mie parole ponti di comprensione, non muri di separazione.'},
  {n:'Yehuiah',       emoji:'👼', trono:'Virtù',     periodo:'28 Ago – 1 Set', num:33,
   dominio:'Subordinazione agli ordini divini, smascheramento dei traditori',
   missione:'Yehuiah è l\'Angelo che svela i tradimenti — esterni e interni. Se è il tuo Angelo, hai vissuto tradimenti significativi che ti hanno insegnato a distinguere chi vuole il tuo bene da chi vuole la tua energia. Questa sapienza è un dono.',
   preghiera:'Yehuiah, proteggimi dai tradimenti e aiutami a vedere chiaramente le intenzioni di chi mi circonda.'},
  {n:'Lehahiah',      emoji:'👼', trono:'Virtù',     periodo:'2 Set – 6 Set', num:34,
   dominio:'Calma, ordine, obbedienza alla legge divina',
   missione:'Lehahiah porta ordine dove c\'è caos. Se è il tuo Angelo, hai una capacità naturale di creare struttura e di portare calma in situazioni turbolente. La tua presenza stabilizza.',
   preghiera:'Lehahiah, aiutami a portare ordine al mio interno affinché si rifletta nel mio esterno.'},
  {n:'Chavakiah',     emoji:'👼', trono:'Virtù',     periodo:'7 Set – 11 Set', num:35,
   dominio:'Riconciliazione, eredità, armonia familiare',
   missione:'Chavakiah è l\'Angelo della pace familiare e delle eredità risanate. Se è il tuo Angelo, la tua famiglia di origine è centrale nella tua crescita — non necessariamente come fonte di gioia, ma come campo di trasformazione karmico.',
   preghiera:'Chavakiah, guarisci le ferite che mi porto dalla famiglia e aiutami a trasmettere benedizioni invece di traumi.'},
  {n:'Menadel',       emoji:'👼', trono:'Virtù',     periodo:'12 Set – 16 Set', num:36,
   dominio:'Lavoro, vocazione, liberazione dalla schiavitù del lavoro',
   missione:'Menadel è l\'Angelo della vocazione professionale autentica. Se è il tuo Angelo, il tuo lavoro non è separato dalla tua missione spirituale — sono la stessa cosa. Quando lavori con passione, sei in preghiera.',
   preghiera:'Menadel, guidami verso il lavoro che è vocazione e liberami dai lavori che soffocano il mio spirito.'},
  {n:'Aniel',         emoji:'👼', trono:'Virtù',     periodo:'17 Set – 21 Set', num:37,
   dominio:'Rottura delle abitudini negative, scienze, contemplazione',
   missione:'Aniel è l\'Angelo della rottura creativa. Se è il tuo Angelo, sei qui per rompere pattern — i tuoi prima, quelli del sistema dopo. Ogni tua crisi è in realtà una rottura di un pattern che aveva esaurito il suo compito.',
   preghiera:'Aniel, aiutami a rompere le abitudini che mi tengono piccolo e a costruire nuovi pattern che mi servano davvero.'},
  {n:'Haamiah',       emoji:'👼', trono:'Virtù',     periodo:'22 Set – 26 Set', num:38,
   dominio:'Rituali, cerimonie, ricerca del sacro',
   missione:'Haamiah è il guardiano dei riti sacri. Se è il tuo Angelo, hai bisogno di cerimonia e rituale nella tua vita — routine spirituali che strutturano il caos quotidiano. Il sacro non ti trova nel disordine: devi creare le condizioni per incontrarlo.',
   preghiera:'Haamiah, insegnami a creare spazi sacri nella quotidianità e a trattare ogni momento come un rito.'},
  {n:'Rehael',        emoji:'👼', trono:'Virtù',     periodo:'27 Set – 1 Ott', num:39,
   dominio:'Guarigione, paternità/maternità spirituale, rispetto',
   missione:'Rehael è l\'Angelo della guarigione attraverso l\'amore. Se è il tuo Angelo, sei un guaritore naturale — la tua presenza sana, le tue parole guariscono. Ma prima devi guarire la relazione con la tua famiglia di origine.',
   preghiera:'Rehael, sana la mia relazione con i miei genitori — reali o archetipi — affinché io possa dare senza ferite aperte.'},
  {n:'Yeiazal',       emoji:'👼', trono:'Virtù',     periodo:'2 Ott – 6 Ott', num:40,
   dominio:'Consolazione, memoria, arti',
   missione:'Yeiazal è l\'Angelo della consolazione e delle arti. Se è il tuo Angelo, la creatività è la tua medicina — non solo per te ma per chi ti circonda. In momenti di dolore, crei. In momenti di gioia, crei. È il tuo respiro.',
   preghiera:'Yeiazal, consolami nei momenti di dolore e fa\' della mia arte un balsamo per le anime ferite.'},
  {n:'Hahahel',       emoji:'👼', trono:'Principato',periodo:'7 Ott – 11 Ott', num:41,
   dominio:'Missione spirituale, fede incrollabile, ministero',
   missione:'Hahahel è l\'Angelo della fede in azione. Se è il tuo Angelo, hai una fede profonda — non necessariamente religiosa — nella vita, nel senso, nel cosmo. Questa fede è la tua armatura nei momenti più bui.',
   preghiera:'Hahahel, rafforza la mia fede quando il dubbio mi assale e ricordami che sono parte di un disegno più grande.'},
  {n:'Mikael',        emoji:'💙', trono:'Principato',periodo:'12 Ott – 16 Ott', num:42,
   dominio:'Ordine politico, lealtà, obbedienza alla volontà divina',
   missione:'Mikael (distinto dall\'Arcangelo) è l\'Angelo dell\'ordine cosmico. Se è il tuo Angelo, sei un portatore di struttura — aiuti a costruire sistemi giusti e duraturi. La tua sfida è non diventare rigido.',
   preghiera:'Mikael, aiutami a portare ordine nel caos con saggezza e flessibilità, non con rigidità.'},
  {n:'Veuliah',       emoji:'👼', trono:'Principato',periodo:'17 Ott – 21 Ott', num:43,
   dominio:'Prosperità, regno, vittoria sulle forze oscure',
   missione:'Veuliah governa la prosperità guadagnata con integrità. Se è il tuo Angelo, sei destinato a una certa forma di abbondanza — ma solo quando i tuoi valori sono allineati con le tue azioni. Il tuo successo è etico o non è.',
   preghiera:'Veuliah, guidami verso la prosperità che nasce dall\'integrità e proteggimi dalle tentazioni del successo facile.'},
  {n:'Yelaiah',       emoji:'👼', trono:'Principato',periodo:'22 Ott – 26 Ott', num:44,
   dominio:'Vittoria, coraggioso, energia marziale',
   missione:'Yelaiah è l\'Angelo del guerriero spirituale. Se è il tuo Angelo, hai un\'energia combattiva naturale che può diventare forza al servizio della giustizia oppure aggressività distruttiva. Scegli consapevolmente dove dirigerla.',
   preghiera:'Yelaiah, trasforma la mia energia combattiva in forza al servizio del bene e proteggimi dall\'aggressività senza causa.'},
  {n:'Sealiah',       emoji:'👼', trono:'Principato',periodo:'27 Ott – 31 Ott', num:45,
   dominio:'Motivazione, umiliazione degli orgogliosi, equilibrio',
   missione:'Sealiah è l\'Angelo dell\'equilibrio attraverso l\'umiltà. Se è il tuo Angelo, le cadute della tua vita non sono punizioni ma insegnamenti di equilibrio. Ogni volta che l\'ego si gonfia troppo, la vita ti riequilibra — è meglio farlo tu prima.',
   preghiera:'Sealiah, insegnami l\'umiltà come forza, non come vergogna, e aiutami a mantenere l\'equilibrio nelle vittorie.'},
  {n:'Ariel',         emoji:'🌿', trono:'Principato',periodo:'1 Nov – 5 Nov', num:46,
   dominio:'Percezione acuta, rivelazioni attraverso la natura',
   missione:'Ariel è l\'Angelo della natura rivelata. Se è il tuo Angelo, il mondo naturale ti parla in modo diretto e simbolico. Gli animali ti inviano messaggi, le piante ti guariscono, le montagne ti ricaricano. Ascolta più spesso.',
   preghiera:'Ariel, affina la mia percezione del sacro che si nasconde nella natura e insegnami a leggere i suoi messaggi.'},
  {n:'Asaliah',       emoji:'👼', trono:'Principato',periodo:'6 Nov – 10 Nov', num:47,
   dominio:'Contemplazione, giustizia divina, elevazione',
   missione:'Asaliah è l\'Angelo della contemplazione elevante. Se è il tuo Angelo, i momenti di quiete assoluta sono i più produttivi della tua vita. Le tue grandi intuizioni non vengono dall\'analisi ma dallo svuotamento.',
   preghiera:'Asaliah, guidami nell\'arte della contemplazione e aiutami a trovare le risposte nel silenzio.'},
  {n:'Mihael',        emoji:'👼', trono:'Principato',periodo:'11 Nov – 15 Nov', num:48,
   dominio:'Fertilità, fedeltà coniugale, pace nell\'unione',
   missione:'Mihael benedice le unioni fedeli e le famiglie armoniose. Se è il tuo Angelo, le tue relazioni più profonde sono il tuo percorso di crescita principale. Ciò che impari nell\'intimità non puoi impararlo altrove.',
   preghiera:'Mihael, benedici le mie relazioni più profonde e aiutami a costruire unioni dove entrambi cresciamo.'},
  {n:'Vehuel',        emoji:'👼', trono:'Arcangelo', periodo:'16 Nov – 20 Nov', num:49,
   dominio:'Elevazione, grandezza, benedizione e lode',
   missione:'Vehuel è l\'Angelo della grandezza interiore. Se è il tuo Angelo, sei destinato a qualcosa di grande — ma la tua sfida è non lasciare che questa consapevolezza si trasformi in arroganza. La vera grandezza è servizio, non trono.',
   preghiera:'Vehuel, aiutami a incarnare la mia grandezza interiore con umiltà e al servizio di qualcosa più grande di me.'},
  {n:'Daniel',        emoji:'👼', trono:'Arcangelo', periodo:'21 Nov – 25 Nov', num:50,
   dominio:'Eloquenza, manifesti i segni divini, decisioni',
   missione:'Daniel è l\'Angelo dell\'eloquenza sacra. Se è il tuo Angelo, la parola è la tua arte e la tua responsabilità. Ciò che dici ha effetti reali sulle persone — usala con intenzione e con cura, mai con negligenza.',
   preghiera:'Daniel, fa\' della mia voce uno strumento di chiarezza e trasformazione, mai di confusione o ferita.'},
  {n:'Hahasiah',      emoji:'👼', trono:'Arcangelo', periodo:'26 Nov – 30 Nov', num:51,
   dominio:'Medicina universale, segreti della natura, alchimia',
   missione:'Hahasiah è l\'alchimista divino. Se è il tuo Angelo, sei attratto dalla trasformazione della materia in spirito — sia in senso letterale (medicina, chimica) che metaforico. Ogni crisi è per te un laboratorio alchemico.',
   preghiera:'Hahasiah, insegnami l\'alchimia della trasformazione e aiutami a trovare la medicina giusta per le ferite dell\'anima.'},
  {n:'Imamiah',       emoji:'👼', trono:'Arcangelo', periodo:'1 Dic – 5 Dic', num:52,
   dominio:'Espiazione, riparazione degli errori, forza nei viaggi difficili',
   missione:'Imamiah è l\'Angelo della riparazione coraggiosa. Se è il tuo Angelo, sai cosa significa fare ammenda — e questa capacità di guardare i tuoi errori senza autodistruggerti è una delle tue virtù più rare.',
   preghiera:'Imamiah, aiutami a riparare ciò che ho rotto con coraggio e a imparare dagli errori senza esserne prigioniero.'},
  {n:'Nanael',        emoji:'👼', trono:'Arcangelo', periodo:'6 Dic – 10 Dic', num:53,
   dominio:'Comunicazione spirituale, scienze astratte, contemplazione',
   missione:'Nanael governa la comunicazione tra il visibile e l\'invisibile. Se è il tuo Angelo, hai naturalmente accesso a dimensioni della realtà che altri non percepiscono. Il tuo compito è portare quel sapere in forma comprensibile.',
   preghiera:'Nanael, apri i canali tra il mondo visibile e quello invisibile e aiutami a tradurre ciò che percepisco in saggezza utile.'},
  {n:'Nithael',       emoji:'👼', trono:'Arcangelo', periodo:'11 Dic – 15 Dic', num:54,
   dominio:'Eternità, giovinezza interiore, legittimità reale',
   missione:'Nithael è l\'Angelo dell\'eternità incarnata. Se è il tuo Angelo, hai una qualità senza tempo — un\'energia che non invecchia nell\'essenziale. La tua sfida è portare questa qualità nelle strutture temporali della vita concreta.',
   preghiera:'Nithael, aiutami a portare la qualità eterna che sento in me nelle strutture temporali della mia vita quotidiana.'},
  {n:'Mebahiah',      emoji:'👼', trono:'Arcangelo', periodo:'16 Dic – 20 Dic', num:55,
   dominio:'Moralità, chiarezza delle idee, fecondità intellettuale',
   missione:'Mebahiah nutre la mente con idee fertili. Se è il tuo Angelo, la tua mente genera idee più velocemente di quanto tu riesca a realizzarle. Il tuo compito è imparare a selezionare e portare a compimento.',
   preghiera:'Mebahiah, aiutami a selezionare le idee migliori tra le tante che genero e a portarle a realizzazione concreta.'},
  {n:'Poyel',         emoji:'👼', trono:'Arcangelo', periodo:'21 Dic – 25 Dic', num:56,
   dominio:'Fortuna, supporto, modestia nella ricchezza',
   missione:'Poyel è l\'Angelo della fortuna generosa. Se è il tuo Angelo, hai una qualità naturale di fare appello alla generosità degli altri — non per egoismo, ma perché sai ricevere come un talento spirituale. Ricevere con grazia è raro quanto dare.',
   preghiera:'Poyel, insegnami a ricevere la generosità altrui con grazia e a distribuire la mia fortuna con saggezza.'},
  {n:'Nemamiah',      emoji:'👼', trono:'Arcangelo', periodo:'26 Dic – 30 Dic', num:57,
   dominio:'Chiaroveggenza, guerrieri, cause giuste',
   missione:'Nemamiah è l\'Angelo delle cause giuste. Se è il tuo Angelo, non riesci a restare neutrale di fronte all\'ingiustizia. Questo impegno è la tua forza — fai attenzione che non diventi fanatismo.',
   preghiera:'Nemamiah, guidami nelle battaglie giuste e aiutami a riconoscere quando una causa chiede il mio fuoco e quando chiede la mia pace.'},
  {n:'Yeialel',       emoji:'👼', trono:'Arcangelo', periodo:'31 Dic – 4 Gen', num:58,
   dominio:'Forza mentale, volontà curativa, coraggio interiore',
   missione:'Yeialel è l\'Angelo della volontà curativa. Se è il tuo Angelo, hai una capacità speciale di guarire attraverso la forza di volontà e l\'intenzione consapevole. La tua mente ha potere diretto sulla tua biologia.',
   preghiera:'Yeialel, aiutami a usare la mia volontà per guarire me stesso e a comprendere i limiti di questa forza.'},
  {n:'Harahel',       emoji:'👼', trono:'Arcangelo', periodo:'5 Gen – 9 Gen', num:59,
   dominio:'Ricchezza intellettuale, archivi, biblioteche',
   missione:'Harahel è il guardiano della conoscenza accumulata. Se è il tuo Angelo, sei un conservatore e trasmettitore di sapere — sai che la vera ricchezza è nel conoscere, nel comprendere, nel condividere ciò che si è appreso.',
   preghiera:'Harahel, guidami verso il sapere che trasforma e aiutami a condividere ciò che so con generosità.'},
  {n:'Mitzrael',      emoji:'👼', trono:'Arcangelo', periodo:'10 Gen – 14 Gen', num:60,
   dominio:'Riparazione, guarigione delle malattie mentali, fedeltà',
   missione:'Mitzrael è l\'Angelo della guarigione delle ferite psichiche. Se è il tuo Angelo, hai vissuto o incontrato molte forme di sofferenza mentale ed emotiva. Questa familiarità con il dolore interiore è la base della tua capacità di comprendere e aiutare.',
   preghiera:'Mitzrael, guarisci le ferite che porto nella mente e nell\'anima e aiutami a usare questa guarigione per servire.'},
  {n:'Umabel',        emoji:'👼', trono:'Arcangelo', periodo:'15 Gen – 19 Gen', num:61,
   dominio:'Affinità con gli amici, astrologia, fisica',
   missione:'Umabel governa le amicizie sacre e le affinità elettive. Se è il tuo Angelo, le tue amicizie più profonde non sono casuali — sono incontri karmici. Coltivale come giardini: hanno bisogno di attenzione, acqua e luce.',
   preghiera:'Umabel, guidami verso le amicizie che mi elevano e aiutami a essere per gli altri l\'amico che vorrei avere.'},
  {n:'Iah-Hel',       emoji:'👼', trono:'Arcangelo', periodo:'20 Gen – 24 Gen', num:62,
   dominio:'Filosofia, saggezza universale, ritiro spirituale',
   missione:'Iah-Hel è l\'Angelo del ritiro spirituale necessario. Se è il tuo Angelo, hai cicli naturali di ritiro dal mondo che non sono fughe ma necessità di reintegrazione. Onora questi cicli invece di combatterli.',
   preghiera:'Iah-Hel, aiutami a onorare i miei cicli di ritiro e a emergere da essi rinnovato invece di colpevolizzato.'},
  {n:'Anauel',        emoji:'👼', trono:'Arcangelo', periodo:'25 Gen – 29 Gen', num:63,
   dominio:'Unità, protezione degli affari, percezione della santità',
   missione:'Anauel percepisce il sacro in tutto — anche nel lavoro, nel denaro, nelle strutture ordinarie. Se è il tuo Angelo, hai la capacità di trovare significato spirituale nelle cose più mondane. Non c\'è separazione tra sacro e profano per te.',
   preghiera:'Anauel, aiutami a trovare il sacro nel quotidiano e a portare questa consapevolezza in ogni mia azione.'},
  {n:'Mehiel',        emoji:'👼', trono:'Arcangelo', periodo:'30 Gen – 3 Feb', num:64,
   dominio:'Ispirazione, protezione dei letterati, forza vitale',
   missione:'Mehiel è l\'Angelo dell\'ispirazione e della scrittura sacra. Se è il tuo Angelo, le parole scritte hanno per te un peso e un potere speciali. Scrivere è per te un atto di guarigione, di chiarezza, di connessione con qualcosa di superiore.',
   preghiera:'Mehiel, ispira la mia penna e aiutami a scrivere ciò che l\'anima sa ma la mente ancora non ha formulato.'},
  {n:'Damabiah',      emoji:'👼', trono:'Angelo',    periodo:'4 Feb – 8 Feb', num:65,
   dominio:'Fonte di saggezza, mari, fortuna nelle imprese nautiche',
   missione:'Damabiah è l\'Angelo delle acque primordiali della saggezza. Se è il tuo Angelo, la tua intelligenza è di tipo fluido — non segue linee rette ma trova percorsi intorno agli ostacoli. L\'acqua non si spezza: si adatta.',
   preghiera:'Damabiah, insegnami la saggezza fluida delle acque e aiutami a trovare il percorso naturale intorno agli ostacoli.'},
  {n:'Manakel',       emoji:'👼', trono:'Angelo',    periodo:'9 Feb – 13 Feb', num:66,
   dominio:'Conoscenza del bene e del male, sonno guaritore',
   missione:'Manakel è il guardiano del discernimento morale. Se è il tuo Angelo, sai distinguere il bene dal male in modo quasi istintivo — quella voce interiore che ti avverte quando qualcosa non è allineato è la sua presenza. Fidatene.',
   preghiera:'Manakel, affina il mio discernimento e aiutami a fidarmi della voce interiore che mi guida verso il bene.'},
  {n:'Eyael',         emoji:'👼', trono:'Angelo',    periodo:'14 Feb – 18 Feb', num:67,
   dominio:'Trasformazione verso il sublime, piaceri della filosofia',
   missione:'Eyael è l\'Angelo della sublimazione. Se è il tuo Angelo, sei capace di trasformare qualunque esperienza — bella o brutta — in saggezza. Questa alchimia interiore è il tuo dono più grande.',
   preghiera:'Eyael, aiutami a sublimare ogni esperienza in saggezza e a trovare il significato anche nel dolore più incomprensibile.'},
  {n:'Habuhiah',      emoji:'👼', trono:'Angelo',    periodo:'19 Feb – 23 Feb', num:68,
   dominio:'Guarigione, natura, fertilità della terra',
   missione:'Habuhiah guarisce attraverso il ritorno alle origini. Se è il tuo Angelo, la natura è la tua farmacia e il tuo tempio. Periodi di disconnessione dalla natura ti indeboliscono più di quanto tu pensi.',
   preghiera:'Habuhiah, riconnettimi alle radici naturali della mia salute e aiutami a trovare nella terra la guarigione che cerco altrove.'},
  {n:'Rochel',        emoji:'👼', trono:'Angelo',    periodo:'24 Feb – 28 Feb', num:69,
   dominio:'Fama, ritrovo di oggetti perduti, successione',
   missione:'Rochel è l\'Angelo del ritrovamento — di oggetti, di persone, di parti di sé che credevi perse. Se è il tuo Angelo, hai una capacità speciale di recuperare ciò che sembrava andato per sempre.',
   preghiera:'Rochel, aiutami a ritrovare ciò che ho perso — oggetti, relazioni e parti di me stesso — e a riconoscere quando qualcosa è perso per sempre.'},
  {n:'Jabamiah',      emoji:'👼', trono:'Angelo',    periodo:'29 Feb – 4 Mar', num:70,
   dominio:'Alchimia, rigenerazione, parola creatrice',
   missione:'Jabamiah è l\'Angelo della parola creatrice primordiale. Se è il tuo Angelo, le tue affermazioni hanno un potere insolito — parli e le cose accadono più spesso di quanto ti aspetti. Scegli le tue parole come atti magici.',
   preghiera:'Jabamiah, aiutami a usare la parola come atto creativo e a costruire con le mie affermazioni la realtà che voglio abitare.'},
  {n:'Haiaiel',       emoji:'👼', trono:'Angelo',    periodo:'5 Mar – 9 Mar', num:71,
   dominio:'Armi della luce, vittoria sulla malvagità, coraggio',
   missione:'Haiaiel è il guerriero cosmico che protegge con la luce. Se è il tuo Angelo, sei qui per combattere battaglie spirituali — non fisiche. La tua arma è la verità; il tuo scudo, l\'integrità.',
   preghiera:'Haiaiel, armami con la luce della verità e aiutami a combattere le battaglie giuste con le armi giuste.'},
  {n:'Mumiah',        emoji:'👼', trono:'Angelo',    periodo:'10 Mar – 14 Mar', num:72,
   dominio:'Fine dei cicli, rinascita, alchimia della morte-rinascita',
   missione:'Mumiah governa le grandi fini e le grandi rinascite. Se è il tuo Angelo, sei un essere di soglie — arrivi nelle vite delle persone durante le transizioni importanti. La tua presenza accompagna le trasformazioni radicali.',
   preghiera:'Mumiah, aiutami ad abbracciare i finali come inizi travestiti e guidami attraverso le soglie della mia vita.'}
];

function resetAngeli(){
  $('#angeliForm').style.display='block';
  $('#angeliResult').style.display='none';
  $('#angelTime').value='';

  try{
  const p = JSON.parse(_lsGet(CFG.kProfilo)||'{}');
  const angelDateEl = $('#angelDate');
  if(angelDateEl){
  const maxD=new Date(); maxD.setFullYear(maxD.getFullYear()-10);
  angelDateEl.max = maxD.toISOString().split('T')[0];
  angelDateEl.min = '1900-01-01';
  if(p.date) angelDateEl.value = p.date;
  }
  }catch(e){}
}

function calcAngelo(){
  const dateVal = $('#angelDate').value;
  const timeVal = ($('#angelTime').value||'').trim();
  if(!dateVal){ toast('⚠️ Inserisci la data di nascita'); return; }

  const [yyyy,mm,dd] = dateVal.split('-').map(Number);
  const [hh,min] = timeVal ? timeVal.split(':').map(Number) : [12,0];
  const d = new Date(yyyy, mm-1, dd, hh||12, min||0, 0);
  if(isNaN(d.getTime())){ toast('⚠️ Data non valida'); return; }

  const giorno = d.getDate();
  const mese = d.getMonth() + 1; // 1-12
  const ora = d.getHours();

  const giornoAnno = Math.floor((d - new Date(d.getFullYear(),0,0)) / (1000*60*60*24));

  const fasciaOraria = Math.floor(ora/4); // 0-5
  const idxBase = Math.floor(((giornoAnno - 1) / 365) * 72);

  const aggiustamento = fasciaOraria % 3 === 0 ? 0 : (fasciaOraria % 3 === 1 ? 1 : -1);
  const idx = Math.max(0, Math.min(71, idxBase + aggiustamento));

  const angelo = DB_ANGELI[idx] || DB_ANGELI[0];
  _showAngeloResult(angelo, dateVal, timeVal);
}

function _showAngeloResult(a, dateVal, timeVal){
  $('#angeliForm').style.display='none';
  const el = $('#angeliResult');

  const [yyyy,mm,dd] = (dateVal||'2000-01-01').split('-').map(Number);
  const dataFmt = new Date(yyyy, mm-1, dd).toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'});
  const oraFmt = timeVal ? ` alle ore ${timeVal}` : '';

  el.innerHTML = `
  <div class="angel-res">
  <div class="angel-symbol">${a.emoji}</div>
  <div class="angel-name">${a.n}</div>
  <div class="angel-realm">${a.trono} · Angelo n. ${a.num}</div>
  <div class="angel-number">✦ Periodo: ${a.periodo} ✦</div>
  <p class="t-muted" style="margin-bottom:14px;font-size:11px">
  Nato/a il ${dataFmt}${oraFmt}
  </p>
  <div class="angel-block">
  <h4>🌟 Dominio Spirituale</h4>
  <p>${a.dominio}</p>
  </div>
  <div class="angel-block">
  <h4>📜 La Tua Missione con ${a.n}</h4>
  <p>${a.missione}</p>
  </div>
  <div class="angel-block">
  <h4>🙏 Preghiera / Invocazione</h4>
  <p style="font-style:italic;color:var(--muted)">"${a.preghiera}"</p>
  </div>
  <button class="btn btn-sec" onclick="resetAngeli()" style="margin-top:10px">🔄 Calcola di Nuovo</button>
  </div>
  `;
  el.style.display = 'block';
  burst();
  saveHistory('Angelologia', a.n + ' — ' + a.trono);
}

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

const DB_ORE = {

  '00:00':{ tipo:'Ora Specchio del Vuoto', intensita:10, emoji:'🌌', angelo:'Nemamiah', arcangelo:'Metatron',
  messaggio:'La mezzanotte è il punto zero — il momento in cui il velo tra i mondi è più sottile. Vedere 00:00 è un invito cosmico a fare silenzio totale e ascoltare il segreto che l\'universo sussurra solo nel buio più profondo. Sei all\'inizio assoluto: ogni possibilità esiste ancora in forma potenziale. Non scegliere ancora — stai nel vuoto fertile.',
  amore:'L\'amore che cerchi nasce da dentro. Svuotati delle aspettative e lascia che il sentimento vero emerga dal silenzio.',
  azione:'Meditazione nel buio. Scrivi una sola intenzione per domani prima di dormire.',
  rituale:'Accendi una candela bianca alle 00:00, tieni gli occhi chiusi per 3 minuti e poni una domanda all\'universo senza usare parole.' },

  '01:01':{ tipo:'Ora Specchio del Nuovo Inizio', intensita:8, emoji:'✨', angelo:'Elemiah', arcangelo:'Raffaele',
  messaggio:'Uno e Uno — dualità in specchio perfetto. Questo orario annuncia un nuovo ciclo che inizia nella solitudine consapevole. Non hai bisogno di nessuno per fare il primo passo — hai bisogno solo di te stesso, intero e presente. L\'universo ti dice: "Il tuo istinto ora è infallibile. Fidati della prima mossa."',
  amore:'Una persona del passato potrebbe riaffacciarsi. O è un inizio completamente nuovo. In entrambi i casi: sii presente, non strategico.',
  azione:'Agisci sulla prima idea genuina che hai avuto oggi. Non rimandare.',
  rituale:'Scrivi "IO INIZIO" su un foglio e tienilo sotto il cuscino questa notte.' },

  '02:02':{ tipo:'Ora Specchio della Connessione', intensita:7, emoji:'🌙', angelo:'Jeliel', arcangelo:'Gabriele',
  messaggio:'Due e Due — quattro energie che si incontrano. 02:02 vibra con la frequenza dell\'unione e della partnership. Qualcuno nella tua vita merita più attenzione di quanta gliene stai dando. O stai ricevendo un segnale che la persona giusta è più vicina di quanto pensi. Le relazioni che costruisci ora hanno radici profonde.',
  amore:'Il partner attuale o futuro è in questo momento pensando a te. La connessione è reale — coltivala con presenza.',
  azione:'Manda un messaggio sincero a qualcuno a cui tieni e che hai trascurato.',
  rituale:'Tieni in mano due cristalli (o due pietre qualsiasi) e visualizza la persona con cui vuoi connetterti profondamente.' },

  '03:03':{ tipo:'Ora della Trinità Creativa', intensita:8, emoji:'🎨', angelo:'Sitael', arcangelo:'Uriel',
  messaggio:'Il 3 è il numero della creazione — Padre, Madre, Figlio; Passato, Presente, Futuro; Mente, Corpo, Spirito. Vedere 03:03 è un richiamo urgente alla tua creatività sopita. Qualcosa dentro di te vuole essere espresso e tu stai rimandando. L\'universo ti sta dando un colpo di gomito: crea ora, perfeziona dopo.',
  amore:'Esprimi i tuoi sentimenti invece di tenerli dentro. Le parole non dette costruiscono muri invisibili.',
  azione:'Crea qualcosa — anche piccolo. Un disegno, una poesia di tre righe, una melodia fischiata.',
  rituale:'Tieni un diario accanto al letto: se ti svegli alle 3:03, scrivi immediatamente qualunque pensiero o immagine hai in mente.' },

  '04:04':{ tipo:'Ora della Fondazione', intensita:6, emoji:'🏛️', angelo:'Elemiah', arcangelo:'Uriel',
  messaggio:'04:04 porta l\'energia del Costruttore — disciplina, struttura, radici. L\'universo ti ricorda che i sogni grandi necessitano fondamenta serie. Stai costruendo qualcosa di importante, ma forse su sabbia invece che su roccia. Rivedi i tuoi piani non per rallentare, ma per renderli indistruttibili.',
  amore:'Una relazione stabile e duratura richiede impegno concreto, non solo sentimenti. Mostra il tuo amore con azioni consistenti.',
  azione:'Scrivi il piano concreto per qualcosa che stai procrastinando. Solo i dettagli pratici — quando, come, con cosa.',
  rituale:'Tieni i piedi scalzi sulla terra (o sul pavimento) per 4 minuti e senti la connessione con ciò che ti sostiene.' },

  '05:05':{ tipo:'Ora del Cambiamento', intensita:7, emoji:'🦋', angelo:'Mahasiah', arcangelo:'Raffaele',
  messaggio:'05:05 è la vibrazione del vento — cambiamento, libertà, movimento. Qualcosa nella tua vita sta per cambiare, o deve cambiare e tu stai resistendo. L\'universo ha già organizzato la prossima fase: il tuo compito è lasciarti portare invece di combattere la corrente. Il cambiamento che temi è la tua liberazione in costume.',
  amore:'Una trasformazione in amore è in atto. Non bloccare ciò che si muove — lascia che la relazione evolva verso la sua forma più autentica.',
  azione:'Fai oggi una cosa che hai sempre voluto fare ma non hai mai osato. Anche piccola.',
  rituale:'Apri una finestra, respira l\'aria esterna e visualizza tutto ciò che vuoi lasciare andare che si dissolve nel vento.' },

  '06:06':{ tipo:'Ora dell\'Amore', intensita:9, emoji:'💚', angelo:'Lelahel', arcangelo:'Raffaele',
  messaggio:'06:06 è la vibrazione venusiana dell\'amore in tutte le sue forme — romantico, familiare, universale. In questo momento sei chiamato a irradiare amore senza aspettarsi nulla in cambio. Qualcuno nella tua vita ha bisogno di cura e presenza. Sei anche tu, forse, in cerca di nutrimento emotivo. Ricorda: per ricevere amore devi prima aprirti a darlo.',
  amore:'Momento di picco per l\'energia romantica. Se sei solo, questo è il momento di uscire, di renderti visibile, di essere accessibile.',
  azione:'Fai qualcosa di bello per qualcuno senza dirlo. Un gesto anonimo di cura.',
  rituale:'Metti la mano sul cuore, chiudi gli occhi e ripeti tre volte: "Sono amato. Sono degno di amore. Irradio amore."' },

  '07:07':{ tipo:'Ora della Fortuna Spirituale', intensita:9, emoji:'🍀', angelo:'Achaiah', arcangelo:'Zadkiel',
  messaggio:'Il 7 è il numero più sacro in quasi tutte le tradizioni spirituali. Vedere 07:07 è un segnale fortissimo: sei allineato con il tuo percorso spirituale e l\'universo ti sta inviando una conferma. Le coincidenze che stai notando non sono casuali. I tuoi pensieri ora hanno potere creativo amplificato — usali con intenzione.',
  amore:'Una connessione karmica è vicina o si sta approfondendo. Qualcuno nella tua vita è qui per un motivo che va oltre il caso.',
  azione:'Dedica 7 minuti a qualcosa di puramente spirituale: meditazione, lettura, contemplazione della natura.',
  rituale:'Conta 7 cose per cui sei genuinamente grato in questo momento. Non cose generiche — 7 specifiche, dettagliate, sentite.' },

  '08:08':{ tipo:'Ora dell\'Abbondanza', intensita:8, emoji:'♾️', angelo:'Cahetel', arcangelo:'Metatron',
  messaggio:'08:08 — l\'8 è il simbolo dell\'infinito in piedi, il numero del potere cosmico e dell\'abbondanza karmica. Stai per entrare in un ciclo di raccolta: ciò che hai seminato con onestà e impegno è pronto per maturare. Non sabotare la tua abbondanza con pensieri di scarsità. Il flusso di prosperità è aperto — permettiti di ricevere.',
  amore:'L\'abbondanza vale anche in amore. Smetti di misurare e calcolare. Ama con tutto — riceverai indietro moltiplicato.',
  azione:'Identifica un\'area dove stai trattenendo te stesso dal ricevere e fai un atto simbolico di apertura.',
  rituale:'Scrivi sul palmo della mano sinistra un simbolo ∞ e tienilo lì per il giorno — ogni volta che lo vedi, pensa "sono in flusso con l\'abbondanza."' },

  '09:09':{ tipo:'Ora del Completamento', intensita:9, emoji:'🌌', angelo:'Haziel', arcangelo:'Gabriele',
  messaggio:'Il 9 è il numero del completamento cosmico — contiene tutti gli altri. Vedere 09:09 indica che qualcosa di importante nella tua vita si sta concludendo per liberare spazio a qualcosa di più grande. Non trattenere ciò che vuole andare. Ogni fine che accetti con grazia diventa l\'inizio più potente che tu abbia mai vissuto.',
  amore:'Un ciclo sentimentale si completa. Che sia con soddisfazione o con lutto, accettalo con pienezza.',
  azione:'Chiudi oggi qualcosa che hai lasciato in sospeso — una conversazione, un progetto, una relazione che hai rimandato di affrontare.',
  rituale:'Scrivi su carta tutto ciò che vuoi rilasciare e brucia il foglio in sicurezza, visualizzando la liberazione.' },

  '10:10':{ tipo:'Ora della Manifestazione', intensita:8, emoji:'⚡', angelo:'Aladiah', arcangelo:'Metatron',
  messaggio:'10:10 — Uno e Zero, l\'Uno e il Vuoto, il potere creativo puro. Questo è l\'orario della manifestazione: i tuoi pensieri si stanno trasformando in realtà più velocemente del solito. Sii scrupolosamente consapevole di cosa stai pensando in questo momento perché le sementi mentali di oggi sono i frutti di domani.',
  amore:'Visualizza chiaramente il tipo di amore e relazione che desideri. Non quello che temi di non meritare — quello che sai di meritare.',
  azione:'Scrivi la tua intenzione più importante come se fosse già accaduta: "Sono grato perché..."',
  rituale:'Tieni le mani aperte verso l\'alto per 10 minuti di silenzio e immagina che ciò che desideri stia già arrivando.' },

  '11:11':{ tipo:'Porta degli Angeli — Numero Maestro', intensita:11, emoji:'👼', angelo:'Lauviah', arcangelo:'Uriel',
  messaggio:'11:11 è la firma degli angeli nel tempo — il momento in cui il velo è talmente sottile che i tuoi cari passati, le guide spirituali e gli angeli guardiani possono farsi sentire con più forza. Questo non è un caso: sei stato guidato a guardare l\'orologio esattamente in questo momento. Esprimi un desiderio sincero, fai una preghiera, o semplicemente di\' grazie.',
  amore:'Gli angeli ti portano un messaggio d\'amore. Se hai perso qualcuno, sa che stai bene. Se cerchi amore, la guida c\'è.',
  azione:'Fermati completamente per 1 minuto. Non fare nulla. Ascolta solo.',
  rituale:'Scrivi un messaggio a qualcuno che non c\'è più o a una versione futura di te stesso. Tienilo sacro.' },

  '12:12':{ tipo:'Ora della Grazia Cosmica', intensita:9, emoji:'🌟', angelo:'Hahaiah', arcangelo:'Raffaele',
  messaggio:'12:12 — dodici ore complete, dodici apostoli, dodici mesi, dodici segni zodiacali. Questo è un numero di perfezione ciclica: sei esattamente dove devi essere nel tuo cammino. La grazia cosmica è con te oggi. Non devi guadagnarla — è un dono gratuito che arriva quando sei abbastanza silenzioso da riceverlo.',
  amore:'Grazia e facilità nelle relazioni. Questo non è il giorno dei conflitti — è il giorno della bellezza condivisa.',
  azione:'Fai qualcosa di bello per te stesso che normalmente rimandi per gli altri.',
  rituale:'Osserva 12 minuti di bellezza naturale — il cielo, un albero, una fiamma. Solo osserva, senza analizzare.' },

  '13:13':{ tipo:'Ora della Trasformazione', intensita:8, emoji:'🔄', angelo:'Jezalel', arcangelo:'Uriel',
  messaggio:'Il 13 è mal compreso: non è sfortuna ma trasformazione profonda. È il numero della Morte nei Tarocchi — non morte fisica, ma morte dell\'ego, delle abitudini, di ciò che non serve più. Vedere 13:13 è un invito a non aver paura del cambiamento radicale. Ciò che sta finendo era già superato.',
  amore:'Una trasformazione necessaria in amore. Quello che crolla stava limitandoti. Quello che emerge è più autentico.',
  azione:'Identifica una credenza su te stesso che ti limita e scrivila — poi cancellala con forza e scrivi il suo opposto.',
  rituale:'Riorganizza o libera uno spazio fisico: un cassetto, una cartella, un angolo. La pulizia esterna riflette quella interna.' },

  '14:14':{ tipo:'Ora della Libertà Saggia', intensita:7, emoji:'🦅', angelo:'Mebahel', arcangelo:'Gabriele',
  messaggio:'14:14 porta il 5 ridotto (1+4=5) — libertà, avventura, cambiamento — ma raddoppiato e bilanciato. Non si tratta di scappare ma di scegliere consapevolmente la propria direzione. Hai più libertà di quanta ne senti. L\'unica prigione vera è quella costruita dalle tue abitudini di pensiero.',
  amore:'Dai all\'altro e a te stesso la libertà di essere autenticamente se stessi. L\'amore vero non imprigiona — libera.',
  azione:'Fai oggi una scelta che senti tua al 100% — non influenzata dalle aspettative altrui.',
  rituale:'Vai in un posto aperto (un parco, un campo, una piazza) e cammina senza meta per 14 minuti.' },

  '15:15':{ tipo:'Ora della Magia Pratica', intensita:8, emoji:'⭐', angelo:'Hariel', arcangelo:'Zadkiel',
  messaggio:'15 ridotto è 6 — amore, armonia, casa — ma il 15 porta anche la vibrazione della magia pratica: la capacità di usare le energie sottili per creare risultati concreti. Non sei solo un sognatore — sei un creatore. Questo orario ti ricorda che hai più potere di quanto pensi per trasformare la tua realtà quotidiana.',
  amore:'Usa la magia del gesto: cucina per qualcuno, sistemalo la casa con intenzione, scegli i fiori. L\'amore si manifesta nei dettagli.',
  azione:'Fai una cosa concreta verso il tuo sogno principale — anche piccola. La magia è nell\'azione quotidiana costante.',
  rituale:'Accendi una candela verde o dorata con l\'intenzione di attrarre prosperità e benessere nella tua casa.' },

  '16:16':{ tipo:'Ora del Risveglio', intensita:8, emoji:'⚡', angelo:'Hekamiah', arcangelo:'Uriel',
  messaggio:'16 è il numero della Torre nei Tarocchi — rottura improvvisa di strutture che sembravano solide ma erano instabili. Vedere 16:16 non è negativo: è un avvertimento amorevole. Controlla cosa nella tua vita è costruito su fondamenta false. Meglio smantellarlo tu consapevolmente che aspettare che crolli da solo.',
  amore:'Esamina onestamente la tua relazione o la tua vita emotiva: ci sono zone di illusione che mantieni per paura?',
  azione:'Abbi il coraggio di dire una verità scomoda — a te stesso o a qualcuno che lo merita.',
  rituale:'Scrivi 3 cose che sai essere vere ma che fingi di non sapere. Tienile al sicuro — questa consapevolezza è potere.' },

  '17:17':{ tipo:'Ora della Stella — Speranza', intensita:9, emoji:'⭐', angelo:'Lauviah II', arcangelo:'Gabriele',
  messaggio:'17 è la Stella nei Tarocchi — la carta della speranza, del rinnovamento, della fede nel futuro. Vedere 17:17 dopo un periodo difficile è il segnale che il peggio è passato e che la luce sta tornando. Se stai bene, è la conferma che sei sulla strada luminosa. In entrambi i cases: la speranza non è ingenua, è cosmica.',
  amore:'Rinnovamento in amore. Le ferite stanno guarendo. Una nuova luce si accende in cuore.',
  azione:'Fai qualcosa che avevi smesso di fare perché avevi perso speranza. Riprendi il filo.',
  rituale:'Guarda le stelle o il cielo di notte per 17 minuti. Non pensare — solo meravigliati.' },

  '18:18':{ tipo:'Ora del Discernimento', intensita:7, emoji:'🌊', angelo:'Caliel', arcangelo:'Gabriele',
  messaggio:'18 è la Luna nei Tarocchi — illusione, confusione, ma anche profonda intuizione. Vedere 18:18 ti avverte: non tutto è come sembra in questo momento. Qualcuno o qualcosa intorno a te non è completamente trasparente. Non agire d\'impulso — aspetta che la nebbia si diradi prima di fare scelte importanti.',
  amore:'Attenzione ai fraintendimenti in amore. Non interpretare il silenzio dell\'altro basandoti sulle tue paure.',
  azione:'Prima di reagire a qualcosa che ti ha disturbato, aspetta 18 ore. Poi decidi se vale ancora la pena reagire.',
  rituale:'Fai un bagno o una doccia con intenzione di purificare i pensieri confusi. Lascia andare tutto con l\'acqua.' },

  '19:19':{ tipo:'Ora del Sole — Successo', intensita:9, emoji:'☀️', angelo:'Leuviah', arcangelo:'Raffaele',
  messaggio:'19 è il Sole nei Tarocchi — la carta del successo assoluto, della gioia, della vitalità. Vedere 19:19 è uno dei segnali più positivi: stai per (o stai vivendo) un periodo di luminosa realizzazione. Non nascondere la tua luce per non disturbare. Il tuo successo è permesso — anzi, è cosmicamente programmato.',
  amore:'Gioia piena in amore. Celebra ciò che hai e osati volere di più. Il sole non raziona la sua luce.',
  azione:'Celebra un tuo successo che hai minimizzato o tenuto per te. Condividilo.',
  rituale:'Esponiti alla luce solare per 19 minuti (con protezione) e visualizza la tua energia che si ricarica completamente.' },

  '20:20':{ tipo:'Ora del Giudizio — Rinascita', intensita:9, emoji:'🦋', angelo:'Pahaliah', arcangelo:'Metatron',
  messaggio:'20 è il Giudizio nei Tarocchi — non punizione, ma risveglio. Una chiamata che non puoi ignorare. Vedere 20:20 indica che sei al punto di non ritorno di una trasformazione: hai ascoltato abbastanza, sai abbastanza. Il momento di agire secondo la tua verità più autentica è ora. Il vecchio te ha esaurito il suo scopo.',
  amore:'Una decisione importante in amore non può essere rimandata ulteriormente. Il tuo cuore sa già la risposta.',
  azione:'Prendi una decisione che rimandi da troppo tempo. Qualunque essa sia, prendila oggi.',
  rituale:'Scrivi una lettera al tuo "vecchio sé" ringraziandolo e poi scrivi una lettera al "nuovo sé" che stai diventando.' },

  '21:21':{ tipo:'Ora del Mondo — Completamento Glorioso', intensita:10, emoji:'🌍', angelo:'Nelkhael', arcangelo:'Uriel',
  messaggio:'21 è il Mondo nei Tarocchi — la carta finale, la più alta, il completamento glorioso di un ciclo. Vedere 21:21 è raro e potente: indica che hai completato qualcosa di importante o che sei sul punto di farlo. Non c\'è carta nei Tarocchi che prometta più realizzazione piena di questa. Sii grato e preparati al prossimo grande ciclo.',
  amore:'Completamento e pienezza in amore. Una relazione raggiunge una nuova fase di maturità e gioia.',
  azione:'Riconosci ciò che hai completato negli ultimi mesi — anche se non ti sembra abbastanza. È abbastanza.',
  rituale:'Danza. Muovi il corpo in modo libero per 21 minuti — la celebrazione fisica del completamento.' },

  '22:22':{ tipo:'Ora del Maestro Costruttore — Numero Maestro', intensita:11, emoji:'🏗️', angelo:'Yeiayel', arcangelo:'Zadkiel',
  messaggio:'22:22 è la firma del Numero Maestro 22 — il Maestro Costruttore. Stai ricevendo un messaggio diretto dall\'universo: le tue visioni più grandi sono realizzabili. Non è il momento di sognare in piccolo. Quello che costruisci ora — con disciplina, amore e visione — durerà generazioni. Il potere cosmico del 22 è con te.',
  amore:'Costruisci una relazione basata su valori profondi, non solo emozioni passeggere. Cosa state edificando insieme?',
  azione:'Scrivi la tua visione più ambiziosa nella vita — non filtrarla per "realismo". Scrivi tutto.',
  rituale:'Metti le mani appoggiate su qualcosa che hai costruito (fisicamente o metaforicamente) e invia gratitudine per il lavoro fatto.' },

  '23:23':{ tipo:'Ora del Confine — Soglia Notturna', intensita:8, emoji:'🌙', angelo:'Melahel', arcangelo:'Gabriele',
  messaggio:'23:23 è l\'ultima ora specchio del giorno — stai al confine tra un giorno e l\'altro, tra il conosciuto e il misterioso. È il momento della revisione: come hai vissuto questo giorno? Cosa ti porti nel sonno? Il subconscio di stanotte elaborerà esattamente ciò che pianterai come seme prima di dormire.',
  amore:'Prima di dormire, pensa con amore alla persona più importante della tua vita. I sogni porteranno messaggi.',
  azione:'Fai un riepilogo del giorno: 3 cose belle e 1 cosa che miglioreresti domani. Solo una.',
  rituale:'Metti un bicchiere d\'acqua sul comodino e di\' a voce alta (o in mente): "Stanotte ricevo messaggi chiari e li ricorderò al risveglio."' },
};

const DB_ORE_INVERSE = {
  '01:10':{ tipo:'Ora Inversa — Intuizione Nascente', intensita:6, emoji:'🌱',
  messaggio:'Le ore inverse indicano qualcosa che sta emergendo dal tuo inconscio verso la coscienza. 01:10 porta il seme di una nuova comprensione che non ha ancora trovato le parole giuste. Sii paziente con te stesso: la chiarezza arriverà nei prossimi giorni.' },
  '02:20':{ tipo:'Ora Inversa — Partnership in Evoluzione', intensita:6, emoji:'🌊',
  messaggio:'02:20 segnala che una relazione o partnership nella tua vita sta attraversando un momento di transizione. Non è crisi — è crescita. Ciò che sembra instabile si sta riadattando a una forma più matura.' },
  '03:30':{ tipo:'Ora Inversa — Creatività in Gestazione', intensita:7, emoji:'🎭',
  messaggio:'03:30 indica un progetto creativo o un\'idea che è in fase di gestazione. Hai seminato qualcosa di bello e il processo sta avvenendo in silenzio. Non affrettare la nascita.' },
  '12:21':{ tipo:'Ora Palindroma — Rispecchiamento Totale', intensita:8, emoji:'🪞',
  messaggio:'12:21 è un palindromo — si legge uguale in entrambe le direzioni. Questo orario porta il messaggio di un rispecchiamento: quello che stai vivendo fuori è il riflesso esatto di quello che sta succedendo dentro. Cambia l\'interno e l\'esterno seguirà automaticamente.' },
  '10:01':{ tipo:'Ora Palindroma — Ritorno all\'Origine', intensita:7, emoji:'🔄',
  messaggio:'10:01 riporta all\'origine: stai tornando a qualcosa di essenziale che avevi lasciato andare. Non è un passo indietro — è un ritorno alle radici con la saggezza di tutto il cammino fatto.' },
};

function resetOreSpecchio(){
  $('#oreForm').style.display='block';
  $('#oreResult').style.display='none';
  $('#oreResult').innerHTML='';

  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  if($('#oreTime')) $('#oreTime').value = `${hh}:${mm}`;
}

function oreDetectNow(){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  $('#oreTime').value = `${hh}:${mm}`;
  calcOreSpecchio();
}

function calcOreSpecchio(){
  const val = ($('#oreTime').value||'').trim();
  if(!val){ toast('⚠️ Inserisci un orario'); return; }

  const [hRaw, mRaw] = val.split(':');
  const h = String(parseInt(hRaw)).padStart(2,'0');
  const m = String(parseInt(mRaw)).padStart(2,'0');
  const key = `${h}:${m}`;

  let data = DB_ORE[key] || DB_ORE_INVERSE[key] || null;
  let isMirror = !!DB_ORE[key];
  let isInverse = !!DB_ORE_INVERSE[key];

  const el = $('#oreResult');

  if(data){

  const intPercent = (data.intensita/11)*100;
  const masterBadge = data.intensita===11
  ? `<div class="ore-tipo-badge">✦ Numero Maestro — Energia Massima ✦</div>` : '';

  const angelsHtml = data.angelo ? `
  <div class="ore-angels">
  <div class="ore-angel-chip">
  <strong>Angelo</strong>${data.angelo}
  </div>
  ${data.arcangelo ? `<div class="ore-angel-chip"><strong>Arcangelo</strong>${data.arcangelo}</div>` : ''}
  </div>` : '';

  const extraBlocks = (data.amore || data.azione || data.rituale) ? `
  <div class="ore-block"><h4>💕 Messaggio in Amore</h4><p>${data.amore||''}</p></div>
  <div class="ore-block"><h4>⚡ Azione Consigliata</h4><p>${data.azione||''}</p></div>
  <div class="ore-block"><h4>🕯️ Rituale del Momento</h4><p>${data.rituale||''}</p></div>
  ` : '';

  el.innerHTML = `
  <div class="ore-res">
  <div style="font-size:40px;margin-bottom:4px">${data.emoji}</div>
  <div class="ore-clock-display">${h}:${m}</div>
  <div class="ore-tipo-badge">${data.tipo}</div>
  ${masterBadge}
  <div class="ore-energy-bar">
  <span class="ore-energy-label">Intensità</span>
  <div class="ore-energy-track">
  <div class="ore-energy-fill" style="width:${intPercent}%"></div>
  </div>
  <span class="ore-energy-val">${data.intensita}/11</span>
  </div>
  ${angelsHtml}
  <div class="ore-block"><h4>✨ Il Messaggio Spirituale</h4><p>${data.messaggio}</p></div>
  ${extraBlocks}
  <button class="btn btn-sec" onclick="resetOreSpecchio()" style="margin-top:10px">🔄 Altro Orario</button>
  </div>
  `;
  saveHistory('Ore Specchio', key + ' — ' + data.tipo);
  } else {

  const hh2 = String(hRaw).padStart(2,'0');
  const mm2 = String(mRaw).padStart(2,'0');
  const allDigits = hh2+mm2;
  const allSame = allDigits.split('').every(d=>d===allDigits[0]);
  const suggestions = Object.keys(DB_ORE).slice(0,8);

  el.innerHTML = `
  <div class="ore-not-mirror">
  <div style="font-size:36px;margin-bottom:10px">🕰️</div>
  <div class="ore-clock-display" style="font-size:38px">${h}:${m}</div>
  <p style="color:var(--muted);font-size:13px;line-height:1.7;margin:10px 0">
  Questo orario non è una classica ora specchio — ma ciò non significa che il tuo istinto abbia torto. L\'universo parla in molti dialetti. Prova uno degli orari specchio qui sotto, o fidati del momento che hai vissuto.
  </p>
  <p style="font-size:11px;color:var(--muted);margin-bottom:12px">✦ Ore Specchio Classiche</p>
  <div class="ore-suggestions">
  ${suggestions.map(s=>`<button class="ore-suggest-btn" onclick="$('#oreTime').value='${s}';calcOreSpecchio()">${s}</button>`).join('')}
  </div>
  <button class="btn btn-sec" onclick="resetOreSpecchio()" style="margin-top:14px">← Torna</button>
  </div>
  `;
  }

  $('#oreForm').style.display='none';
  el.style.display='block';
  burst();
}

const DB_LUNA = {
  'nuova': {
  nome:'Luna Nuova', emoji:'🌑', illuminazione:0,
  colore:'#3d2065', coloreBordo:'#6a3fa0',
  keyword:'Inizio · Intenzione · Semina',
  descrizione:'La Luna Nuova è il respiro trattenuto dell\'universo prima di una nuova espirazione. Il cielo è buio, l\'energia è tutta potenziale, non ancora manifestata. Questo è il momento più potente per piantare sementi intenzionali — non necessariamente fisiche, ma mentali, emotive, spirituali. Ciò che intendi con chiarezza durante la Luna Nuova ha un DNA cosmico particolarmente forte.',
  umore:'Energia bassa ma focalizzata. È normale sentirsi più introversi e riflessivi. Non combatterlo: questo raccoglimento è produttivo.',
  capelli:'❌ Evita tagli — la luna nuova ritarda la crescita. Ideale per trattamenti nutrienti in profondità.',
  piante:'✅ Semina in terra o pota le radici. Le radici assorbono nutrimento più facilmente.',
  progetti:'✅ Avvia nuovi progetti, firma contratti, lancia campagne. Il timing cosmico è dalla tua parte.',
  fa:['Meditare e impostare intenzioni chiare','Avviare nuovi progetti','Trattamenti di bellezza nutrienti','Semina in giardino','Scrivere nel diario i desideri'],
  nonFa:['Tagliare i capelli','Fare grandi confronti emotivi','Lanciare feste o eventi sociali importanti','Prendere decisioni impulsive'],
  rituale:'Scrivi 3 intenzioni su carta e tienile alla luce della luna (anche attraverso il vetro). Rileggile ad ogni fase successiva.'
  },
  'crescente': {
  nome:'Luna Crescente', emoji:'🌒', illuminazione:25,
  colore:'#1a3a1a', coloreBordo:'#4caf50',
  keyword:'Crescita · Azione · Costruzione',
  descrizione:'La Luna Crescente è la fase dell\'espansione e dell\'azione. Come la pianta che spinge verso la luce dopo la semina, ora è il momento di muoversi, costruire, agire sui piani fatti durante la Luna Nuova. L\'energia è in ascesa e con lei la tua vitalità, la tua motivazione e la tua capacità di attrarre ciò che hai intenzione di creare.',
  umore:'Energia in crescita, motivazione alta, ottimismo naturale. Il tuo corpo e la tua mente sono al massimo della ricettività alle nuove esperienze.',
  capelli:'✅ Taglio ideale per stimolare la crescita veloce. I capelli cresceranno più forti e rapidi.',
  piante:'✅ Irrigazione abbondante, concimazione. Le foglie e i fusti si sviluppano energicamente.',
  progetti:'✅ Implementa, esegui, espandi. Ogni azione ha una spinta cosmica aggiuntiva.',
  fa:['Tagliare i capelli per favorire la crescita','Iniziare nuove abitudini','Socializzare e creare connessioni','Investire e acquistare','Praticare sport intenso'],
  nonFa:['Rimandare azioni importanti','Sottrarsi alle opportunità','Diete restrittive — il corpo assorbe tutto','Stare in isolamento'],
  rituale:'Crea una lista di azioni concrete verso il tuo obiettivo principale e completa almeno una ogni giorno fino alla luna piena.'
  },
  'primo-quarto': {
  nome:'Primo Quarto', emoji:'🌓', illuminazione:50,
  colore:'#1a2a3a', coloreBordo:'#4a90d9',
  keyword:'Decisione · Sfida · Perseveranza',
  descrizione:'Il Primo Quarto è il momento della tensione creativa — metà del ciclo, il punto in cui incontri la resistenza. Le intenzioni della Luna Nuova vengono testate dalla realtà. Non mollare: questa resistenza non è un segnale che il progetto è sbagliato, è il test naturale che separa i semi forti da quelli deboli. Chi persevera ora raccoglie alla Luna Piena.',
  umore:'Tensione e determinazione. Potresti sentirti sfidato o frustrato. È normale: stai attraversando il momento critico del ciclo.',
  capelli:'✅ Taglio ideale per rinforzare la struttura. I capelli diventano più resistenti e folti.',
  piante:'✅ Irrigazione moderata. Rafforzare i supporti (tutori) per le piante rampicanti.',
  progetti:'✅ Affronta gli ostacoli a testa alta. Le decisioni difficili prese ora consolidano il futuro.',
  fa:['Prendere decisioni difficili rimaste in sospeso','Affrontare conversazioni scomode','Rinforzare abitudini nuove','Tagliare i capelli per volume','Esercizio fisico di forza'],
  nonFa:['Arrendersi di fronte agli ostacoli','Rimandare decisioni per paura','Evitare i conflitti necessari','Stagnare in zone di comfort'],
  rituale:'Identifica l\'ostacolo principale al tuo obiettivo e scrivi una strategia concreta per superarlo entro la luna piena.'
  },
  'gibbosa-crescente': {
  nome:'Luna Gibbosa Crescente', emoji:'🌔', illuminazione:75,
  colore:'#2a2a0a', coloreBordo:'#d4af37',
  keyword:'Raffinamento · Pazienza · Perfezione',
  descrizione:'La Luna Gibbosa Crescente è la fase della rifinitura — siamo quasi alla pienezza ma non ancora. L\'energia è alta ma c\'è ancora spazio per aggiustamenti. Questo è il momento per perfezionare i dettagli, non per grandi cambiamenti di rotta. Osserva ciò che hai costruito finora e chiediti: cosa può essere migliorato prima della manifestazione completa?',
  umore:'Anticipo e impazienza. Senti che qualcosa di grande si avvicina. Usa questo stato per rifinire invece di forzare.',
  capelli:'✅ Ottimo momento per trattamenti di lucentezza e volume.',
  piante:'✅ Irrigazione abbondante. I frutti e i fiori sono in fase di sviluppo accelerato.',
  progetti:'✅ Revisioni finali, test, correzioni. Non lanciare ancora — affina.',
  fa:['Revisionare e migliorare il lavoro','Pratiche di gratitudine per ciò che sta arrivando','Cura della bellezza e del corpo','Connessioni sociali significative','Organizzare e preparare'],
  nonFa:['Lanciare qualcosa di non ancora pronto','Fare grandi acquisti impulsivi','Iniziare nuovi cicli — aspetta la luna nuova','Trascurare i dettagli'],
  rituale:'Fai una lista di 3 cose che puoi migliorare nel tuo progetto principale prima che la luna sia piena.'
  },
  'piena': {
  nome:'Luna Piena', emoji:'🌕', illuminazione:100,
  colore:'#2a2000', coloreBordo:'#ffd700',
  keyword:'Manifestazione · Chiarezza · Culmine',
  descrizione:'La Luna Piena è il culmine del ciclo lunare — il momento in cui tutto ciò che è stato seminato, cresciuto e affinato raggiunge la sua espressione massima. Le emozioni sono amplificate, la chiarezza è massima (anche se a volte è dolorosa), e ciò che era nascosto viene portato alla luce. Le energie sono al picco — per il bene e per il caos. Sii consapevole.',
  umore:'Intensità emotiva alta. Potresti sentirti più sensibile, emotivo, ecstatico o agitato. Tutto è amplificato: anche la gioia e anche l\'ansia.',
  capelli:'✅ Taglio ideale per massimizzare la crescita. Massima potenza di crescita.',
  piante:'❌ Evita di seminare — non è il momento dell\'inizio. Raccogli i frutti maturi.',
  progetti:'✅ Lancia, presenta, celebra. Il massimo di visibilità cosmica per la tua manifestazione.',
  fa:['Lanciare progetti, prodotti, annunci importanti','Celebrare i traguardi','Tagliare i capelli per crescita massima','Raccogliere dal giardino','Rituali di gratitudine e liberazione'],
  nonFa:['Iniziare cose nuove — aspetta la luna nuova','Prendere decisioni in stati di forte agitazione emotiva','Confronti accesi — le emozioni distorcono la percezione','Stare da soli se hai tendenza alla solitudine depressiva'],
  rituale:'Scrivi su carta tutto ciò che vuoi rilasciare e bruciala (in sicurezza) alla luce della luna. Poi scrivi 3 cose per cui sei grato che si sono manifestate.'
  },
  'gibbosa-calante': {
  nome:'Luna Gibbosa Calante', emoji:'🌖', illuminazione:75,
  colore:'#2a1010', coloreBordo:'#c8a0a0',
  keyword:'Gratitudine · Condivisione · Distribuzione',
  descrizione:'Dopo il culmine della Luna Piena, inizia la fase di distribuzione. Come un frutto maturo che cade dall\'albero per nutrire la terra, ora è il momento di condividere ciò che hai ricevuto, imparato, creato. L\'energia calante invita alla generosità, alla gratitudine e al rilascio graduale di ciò che non serve più.',
  umore:'Energia in lieve calo ma senso di pienezza e soddisfazione. Momento ideale per la riflessione e la condivisione.',
  capelli:'🌗 Taglio neutro — né stimola né rallenta la crescita.',
  piante:'✅ Concimazione fogliare. Potatura leggera per ridistribuire le energie.',
  progetti:'✅ Condividi il tuo lavoro, ricevi feedback, distribuisci valore.',
  fa:['Condividere conoscenza e risorse','Riflettere sulle lezioni apprese','Dare feedback e riceverne','Donare ciò che non usi più','Diete detox moderate'],
  nonFa:['Fare grandi investimenti','Avviare nuove iniziative importanti','Stressarsi sui piccoli dettagli','Stare in conflitto con persone care'],
  rituale:'Dona qualcosa a qualcuno — un oggetto, un complimento sincero, del tempo. Il rilascio consapevole genera spazio per il prossimo ciclo.'
  },
  'ultimo-quarto': {
  nome:'Ultimo Quarto', emoji:'🌗', illuminazione:50,
  colore:'#2a1a0a', coloreBordo:'#ff8c00',
  keyword:'Rilascio · Pulizia · Revisione',
  descrizione:'L\'Ultimo Quarto è la fase della pulizia profonda — fisica, emotiva, mentale. Come il corpo che elimina le tossine, ora è il momento di liberarsi di tutto ciò che non ha servito il ciclo appena passato. Abitudini, relazioni, pensieri, oggetti: cosa puoi lasciare andare per arrivare alla prossima Luna Nuova più leggero?',
  umore:'Energia bassa, stanchezza possibile. Momento di introversione necessaria e salutare. Non combatterla con stimolanti — assecondala.',
  capelli:'❌ Evita il taglio — rallenta la crescita. Ideale per maschere nutrienti e trattamenti rigeneranti.',
  piante:'✅ Pota vigorosamente ciò che non serve. La potatura ora favorisce una ricrescita più forte al prossimo ciclo.',
  progetti:'✅ Chiudi, archivia, sistema. È il momento di completare l\'incompleto prima del nuovo ciclo.',
  fa:['Fare pulizie profonde (casa, ufficio, mente)','Eliminare ciò che non serve','Terminare progetti aperti','Riposo e recupero fisico','Digiuno o detox leggero'],
  nonFa:['Iniziare cose nuove — aspetta la luna nuova','Fare grandi acquisti','Prendere decisioni importanti mentre sei stanco','Tagliare i capelli'],
  rituale:'Fai una pulizia fisica di un ambiente (stanza, cassetto, cartella digitale) mentre visualizzi di liberarti anche del peso emotivo corrispondente.'
  },
  'calante': {
  nome:'Luna Calante', emoji:'🌘', illuminazione:25,
  colore:'#1a0a0a', coloreBordo:'#a03030',
  keyword:'Dissoluzione · Silenzio · Preparazione',
  descrizione:'La Luna Calante è il lungo respiro prima del silenzio della Luna Nuova. L\'energia è al suo minimo del ciclo — non è debolezza, è preparazione. Come la terra in inverno che sembra morta ma sta concentrando tutte le sue energie nelle radici, tu stai raccogliendo ciò che hai imparato per portarlo nel prossimo ciclo trasformato in saggezza.',
  umore:'Riflessivo, silenzioso, forse melanconico. Questo stato favorisce insight profondi se non si combatte. Stai con te stesso.',
  capelli:'❌ Evita il taglio — crescita lentissima. Perfetto per trattamenti di ristrutturazione profonda.',
  piante:'✅ Irrigazione minima. Periodo di riposo vegetativo. Rispetta la pausa.',
  progetti:'✅ Pianifica il prossimo ciclo. Rifletti, impara, riorganizza mentalmente.',
  fa:['Meditazione profonda','Journaling e riflessione','Trattamenti di bellezza nutrienti e rigeneranti','Riposo abbondante','Pianificare il prossimo ciclo'],
  nonFa:['Iniziative importanti','Tagli di capelli','Prendere decisioni vitali mentre sei esausto','Forzare produttività'],
  rituale:'Scrivi 3 lezioni apprese nell\'ultimo ciclo lunare (28 giorni). Cosa hai imparato su te stesso che non sapevi prima?'
  }
};

function getLunaPhase(date){
  const known = new Date('2024-01-11T00:00:00Z'); // Luna nuova di riferimento
  const msPerDay = 86400000;
  const lunation = 29.53058867;
  const diff = (date.getTime() - known.getTime()) / msPerDay;
  let phase = ((diff % lunation) + lunation) % lunation;
  let illuminazione = 0;
  let key = '';

  if(phase < 1.85){ key='nuova'; illuminazione=Math.round(phase/1.85*3); }
  else if(phase < 7.38){ key='crescente'; illuminazione=Math.round(3+(phase-1.85)/5.53*22); }
  else if(phase < 9.22){ key='primo-quarto'; illuminazione=Math.round(25+(phase-7.38)/1.84*25); }
  else if(phase < 14.77){ key='gibbosa-crescente'; illuminazione=Math.round(50+(phase-9.22)/5.55*25); }
  else if(phase < 16.61){ key='piena'; illuminazione=Math.round(95+(phase-14.77)/1.84*5); }
  else if(phase < 22.15){ key='gibbosa-calante'; illuminazione=Math.round(100-(phase-16.61)/5.54*25); }
  else if(phase < 24.00){ key='ultimo-quarto'; illuminazione=Math.round(75-(phase-22.15)/1.85*25); }
  else { key='calante'; illuminazione=Math.round(50-(phase-24.00)/5.53*47); }

  illuminazione = Math.max(0,Math.min(100,illuminazione));
  return { key, phase: parseFloat(phase.toFixed(2)), illuminazione };
}

function _renderLuna(date){
  const {key, phase, illuminazione} = getLunaPhase(date);
  const dati = DB_LUNA[key];
  if(!dati){ toast('❌ Errore calcolo lunare'); return; }

  const progressPercent = (phase/29.53)*100;
  const dateStr = date.toLocaleDateString('it-IT',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const faHtml = dati.fa.map(i=>`<li>${i}</li>`).join('');
  const nonFaHtml = dati.nonFa.map(i=>`<li>${i}</li>`).join('');

  const el = $('#lunaResult');
  el.innerHTML = `
  <div class="luna-res">
  <div class="luna-emoji-big">${dati.emoji}</div>
  <div class="luna-phase-name">${dati.nome}</div>
  <div class="luna-date-sub">${dateStr}</div>
  <div class="luna-illumination">Illuminazione: <span>${illuminazione}%</span> · Giorno del ciclo: <span>${Math.round(phase)+1}/29</span></div>
  <div class="luna-cycle-bar">
  <div class="luna-cycle-track"></div>
  <div class="luna-cycle-cursor" style="left:${progressPercent}%"></div>
  <div class="luna-cycle-labels">
  <span>🌑 Nuova</span><span>🌓 Q1</span><span>🌕 Piena</span><span>🌗 Q3</span><span>🌑 Nuova</span>
  </div>
  </div>
  <div class="num-kw" style="margin:12px auto;display:inline-block;border-color:${dati.coloreBordo};color:var(--gold)">${dati.keyword}</div>
  <div class="luna-block"><h4>🌙 Influenza del Momento</h4><p>${dati.descrizione}</p></div>
  <div class="luna-block"><h4>💭 Effetto sull'Umore</h4><p>${dati.umore}</p></div>
  <div class="luna-grid">
  <div class="luna-card"><div class="luna-card-ico">💇</div><div class="luna-card-title">Capelli</div><div class="luna-card-val">${dati.capelli}</div></div>
  <div class="luna-card"><div class="luna-card-ico">🌿</div><div class="luna-card-title">Piante</div><div class="luna-card-val">${dati.piante}</div></div>
  <div class="luna-card"><div class="luna-card-ico">💼</div><div class="luna-card-title">Progetti</div><div class="luna-card-val">${dati.progetti}</div></div>
  <div class="luna-card"><div class="luna-card-ico">✨</div><div class="luna-card-title">Rituale</div><div class="luna-card-val" style="font-size:10px">${dati.rituale.substring(0,50)}…</div></div>
  </div>
  <div class="luna-do-dont">
  <div class="luna-do"><h5>✓ FAI ORA</h5><ul>${faHtml}</ul></div>
  <div class="luna-dont"><h5>✗ EVITA</h5><ul>${nonFaHtml}</ul></div>
  </div>
  <div class="luna-block"><h4>🕯️ Rituale Consigliato</h4><p>${dati.rituale}</p></div>
  <button class="btn btn-sec" onclick="resetLuna()" style="margin-top:10px">🔄 Altra Data</button>
  </div>
  `;
  el.style.display='block';
  $('#lunaForm').style.display='none';
  burst();
  saveHistory('Fasi Lunari', dati.nome + ' (illuminazione '+illuminazione+'%)');
}

function calcLunaOggi(){
  _renderLuna(new Date());
}

function calcLunaData(){
  const val = $('#lunaDate').value;
  if(!val){ toast('⚠️ Seleziona una data'); return; }
  const [yyyy,mm,dd] = val.split('-').map(Number);
  _renderLuna(new Date(yyyy, mm-1, dd, 12, 0, 0));
}

function resetLuna(){
  $('#lunaResult').style.display='none';
  $('#lunaForm').style.display='block';
  const todayStr = new Date().toISOString().split('T')[0];
  const lunaDateEl = $('#lunaDate');
  if(lunaDateEl){
  lunaDateEl.value = todayStr;
  lunaDateEl.max = todayStr;
  lunaDateEl.min = '1900-01-01';
  }
}

const SEGNI = ['Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno','Acquario','Pesci'];
const SEGNI_EMOJI = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
const SEGNI_ELEM = ['🔥','🌍','💨','💧','🔥','🌍','💨','💧','🔥','🌍','💨','💧'];

function getJulianDay(date){
  const Y=date.getUTCFullYear(), M=date.getUTCMonth()+1, D=date.getUTCDate();
  const A=Math.floor(Y/100), B=2-A+Math.floor(A/4);
  return Math.floor(365.25*(Y+4716))+Math.floor(30.6001*(M+1))+D+B-1524.5;
}

function normDeg(d){ return ((d%360)+360)%360; }

function calcPlanetPos(JD){
  const T=(JD-2451545.0)/36525;
  const planets = {};

  const sunL = normDeg(280.46646+36000.76983*T);
  const sunM = normDeg(357.52911+35999.05029*T - 0.0001537*T*T);
  const sunMr = sunM*Math.PI/180;
  const sunEq = (1.914602-0.004817*T)*Math.sin(sunMr)+(0.019993-0.000101*T)*Math.sin(2*sunMr);
  planets.sole = { lon: normDeg(sunL+sunEq), retro:false };

  const moonL = normDeg(218.3165+481267.8813*T);
  planets.luna = { lon: normDeg(moonL), retro:false };

  const merL = normDeg(178.179+149474.0*T);

  const merSynodic = ((JD - 2451545.0) % 116 + 116) % 116;
  const merRetro = merSynodic >= 48 && merSynodic <= 69;
  planets.mercurio = { lon: normDeg(merL), retro: merRetro };

  const venL = normDeg(342.767+58518.0*T);
  const venSynodic = ((JD - 2451545.0) % 584 + 584) % 584;
  const venRetro = venSynodic >= 271 && venSynodic <= 313;
  planets.venere = { lon: normDeg(venL), retro: venRetro };

  const marL = normDeg(293.737+19141.0*T);
  const marSynodic = ((JD - 2451545.0) % 780 + 780) % 780;
  const marRetro = marSynodic >= 354 && marSynodic <= 426;
  planets.marte = { lon: normDeg(marL), retro: marRetro };

  const jupL = normDeg(34.4+3036.0*T);
  const jupSidereal = ((JD - 2451545.0) % 4333 + 4333) % 4333;
  const jupRetro = jupSidereal >= 1900 && jupSidereal <= 2020;
  planets.giove = { lon: normDeg(jupL), retro: jupRetro };

  const satL = normDeg(50.078+1223.0*T);
  const satSidereal = ((JD - 2451545.0) % 10759 + 10759) % 10759;
  const satRetro = satSidereal >= 4700 && satSidereal <= 4838;
  planets.saturno = { lon: normDeg(satL), retro: satRetro };

  const uraL = normDeg(314.055+429.0*T);
  const uraSidereal = ((JD - 2451545.0) % 30688 + 30688) % 30688;
  const uraRetro = uraSidereal >= 13500 && uraSidereal <= 13651;
  planets.urano = { lon: normDeg(uraL), retro: uraRetro };

  const netL = normDeg(304.349+219.0*T);
  const netSidereal = ((JD - 2451545.0) % 60182 + 60182) % 60182;
  const netRetro = netSidereal >= 26800 && netSidereal <= 26958;
  planets.nettuno = { lon: normDeg(netL), retro: netRetro };

  const pluL = normDeg(238.929+145.0*T);
  const pluSidereal = ((JD - 2451545.0) % 90520 + 90520) % 90520;
  const pluRetro = pluSidereal >= 40200 && pluSidereal <= 40360;
  planets.plutone = { lon: normDeg(pluL), retro: pluRetro };

  return planets;
}

function lonToSegno(lon){
  const idx = Math.floor(lon/30);
  const gradi = (lon%30).toFixed(1);
  return { idx, nome: SEGNI[idx], emoji: SEGNI_EMOJI[idx], elemento: SEGNI_ELEM[idx], gradi };
}

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

const DB_ICHING = {
  1:{ nome:'Il Creativo',          cinese:'乾', num:1,
  linee:[1,1,1,1,1,1], tri_inf:'111', tri_sup:'111',
  giudizio:'Grande successo grazie alla perseveranza. La forza creativa del cielo è con te — usala con saggezza e non con arroganza.',
  immagine:'Il cielo si muove con potente forza. Il saggio così si rafforza incessantemente.',
  significato:'L\'Esagramma 1 è la forza pura del Cielo — energia creativa allo stato assoluto. Sei in un momento di grande potenziale dove la tua volontà e la tua visione hanno il supporto cosmico. Ma il Creativo avverte: il drago che vola troppo in alto rischia la caduta. Usa il tuo potere con umiltà e perseveranza. Le grandi cose si costruiscono passo dopo passo, non in un colpo solo.',
  amore:'Energia maschile forte, passione intensa. Prenditi l\'iniziativa in amore — il momento è favorevole.',
  lavoro:'Periodo eccellente per leadership e nuove iniziative. I tuoi piani hanno forza cosmica.',
  consiglio:'Agisci con determinazione ma senza arroganza. La vera forza non ha bisogno di esibirsi.' },

  2:{ nome:'Il Ricettivo',          cinese:'坤', num:2,
  linee:[0,0,0,0,0,0], tri_inf:'000', tri_sup:'000',
  giudizio:'Successo supremo. La perseveranza di una giumenta porta fortuna. Il saggio non prende l\'iniziativa ma segue.',
  immagine:'La condizione della Terra è la ricettività. Il saggio porta il mondo con grande virtù.',
  significato:'Il Ricettivo è la risposta al Creativo — la Terra che accoglie il seme del Cielo. Non è passività: è la forza immensa della ricettività consapevole. In questo momento la tua potenza sta nel saper cedere, nell\'accogliere, nel seguire piuttosto che guidare. Come la terra che non sceglie quali semi ricevere ma li nutre tutti, apri te stesso alle possibilità senza forzare la direzione.',
  amore:'L\'amore fiorisce quando smetti di controllare. Lascia che la relazione si sviluppi al suo ritmo naturale.',
  lavoro:'Non è il momento di imporsi. Collabora, supporta, costruisci basi solide nell\'ombra.',
  consiglio:'La tua forza è nella capacità di ricevere. Non confondere la quiete con la debolezza.' },

  3:{ nome:'La Difficoltà Iniziale', cinese:'屯', num:3,
  linee:[1,0,0,0,1,0], tri_inf:'100', tri_sup:'010',
  giudizio:'Grande successo grazie alla perseveranza. Non agire da soli — cercare aiuto.',
  immagine:'Nuvole e tuono: difficoltà iniziale. Il saggio porta ordine dal caos.',
  significato:'Come il germoglio che spinge attraverso la terra dura, stai attraversando il momento più difficile di un nuovo inizio. Il disordine attuale non è il fallimento — è la nascita. Ogni grande progetto, relazione o fase della vita inizia con questo caos fertile. Non arrenderti ora: sei più vicino alla superficie di quanto pensi.',
  amore:'Gli inizi in amore sono sempre difficili. Le incomprensioni di oggi sono le basi della comprensione di domani.',
  lavoro:'Fase caotica ma generativa. Cerca mentori e alleati — non fare tutto da solo.',
  consiglio:'Persevera nel caos. Chi resiste nella difficoltà iniziale raccoglie i frutti più dolci.' },

  4:{ nome:'La Follia Giovanile',    cinese:'蒙', num:4,
  linee:[0,1,0,0,0,1], tri_inf:'001', tri_sup:'010',
  giudizio:'Successo. Non sono io che cerco il giovane stolto — è lui che mi cerca. La prima risposta è quella giusta.',
  immagine:'Una sorgente ai piedi del monte: la follia giovanile. Il saggio coltiva il carattere.',
  significato:'Questo esagramma parla dell\'apprendimento — e del riconoscere dove sei ancora un principiante. C\'è qualcosa che non sai e che devi imparare prima di procedere. Non è una critica: è una grazia. Il non sapere è il punto di partenza di ogni vera saggezza. Cerca un insegnamento, apri la mente, e ricorda che l\'umiltà intellettuale è una forma di coraggio.',
  amore:'Impara l\'arte dell\'amore invece di credere di saperla già. L\'apertura porta connessioni più profonde.',
  lavoro:'Momento di formazione. Investi nell\'apprendere prima di pretendere di insegnare.',
  consiglio:'Sii disposto a non sapere. Il principiante vede più possibilità dell\'esperto.' },

  5:{ nome:'L\'Attesa',              cinese:'需', num:5,
  linee:[1,1,1,0,1,0], tri_inf:'111', tri_sup:'010',
  giudizio:'Fiducia e luce. Perseveranza porta fortuna. È favorevole attraversare le grandi acque.',
  immagine:'Nuvole che salgono al cielo: l\'attesa. Il saggio mangia, beve e gioisce.',
  significato:'Il Cielo sopra l\'Acqua — l\'attesa del momento giusto. Non è indolenza: è la saggezza del contadino che sa che certe cose non si possono forzare. C\'è qualcosa che stai aspettando — un segnale, una risposta, una maturazione. L\'I Ching ti dice: hai fatto la tua parte. Ora fidati del processo e nutri te stesso nell\'attesa invece di consumarti nell\'ansia.',
  amore:'Non spingere. Lascia che i sentimenti maturino al loro ritmo. L\'ansia affossa ciò che stai aspettando.',
  lavoro:'Il progetto ha bisogno di più tempo. Usa quest\'attesa per prepararti meglio.',
  consiglio:'Mangia, bevi e sii presente nell\'attesa. Il momento giusto arriva per chi sa aspettare senza smettere di vivere.' },

  6:{ nome:'Il Conflitto',           cinese:'訟', num:6,
  linee:[0,1,0,1,1,1], tri_inf:'010', tri_sup:'111',
  giudizio:'Fiducia ma cautela nel mezzo. Fortuna nel fermarsi. Sfortuna nel portare avanti.',
  immagine:'Cielo e acqua si muovono in direzioni opposte: il conflitto. Il saggio riflette prima di agire.',
  significato:'L\'Acqua fluisce verso il basso, il Cielo sale — due forze opposte in conflitto. Sei in una situazione di tensione o disputa. L\'I Ching non dice che hai torto — dice che il conflitto aperto porta più danno della mediazione. Cerca una soluzione prima dello scontro diretto. Se la lite è inevitabile, scegli il momento con cura. Non portare questa questione fino in fondo: c\'è più da perdere che da guadagnare.',
  amore:'Una tensione irrisolta in amore. Parla prima di esplodere. Il dialogo ora vale più di mille silenzi.',
  lavoro:'Evita contenziosi legali o conflitti aperti se puoi. La mediazione è la via più produttiva.',
  consiglio:'La vittoria in un conflitto spesso costa più della sconfitta. Cerca il ponte, non la guerra.' },

  7:{ nome:'L\'Esercito',            cinese:'師', num:7,
  linee:[0,1,0,0,0,0], tri_inf:'010', tri_sup:'000',
  giudizio:'Perseveranza, un uomo maturo porta fortuna. Nessuna colpa.',
  immagine:'Acqua nella terra: l\'esercito. Il saggio aumenta le sue fila con magnanimità verso le persone.',
  significato:'Un solo Yang circondato da cinque Yin — il leader in mezzo al suo popolo. Questo esagramma parla di organizzazione, disciplina e la capacità di radunare forze disperse verso un obiettivo comune. Hai le risorse — umane o interiori — ma devono essere coordinate con saggezza. Uno sforzo collettivo ben diretto porta vittoria.',
  amore:'Una relazione che funziona quando c\'è leadership gentile e direzione condivisa.',
  lavoro:'Coordina le tue risorse. Un progetto di gruppo richiede un leader saggio — potresti essere tu.',
  consiglio:'Organizza prima di agire. La forza non coordinata si disperde; quella disciplinata muove montagne.' },

  8:{ nome:'L\'Unione',              cinese:'比', num:8,
  linee:[0,0,0,0,1,0], tri_inf:'000', tri_sup:'010',
  giudizio:'Fortuna. Indaga ancora l\'oracolo. Se sei tardivo nell\'unire, verrà sfortuna.',
  immagine:'Acqua sulla terra: l\'unione. I re fondavano stati e stringevano legami con i vassalli.',
  significato:'L\'Acqua scorre sulla Terra e le dà forma — l\'unione che crea struttura. Sei chiamato a costruire o consolidare alleanze genuine. C\'è qualcuno — o un gruppo — con cui l\'unione porta grande forza. Ma l\'I Ching avverte: agisci ora, non rimandare. Chi esita troppo nell\'unirsi agli altri arriva quando le porte sono già chiuse.',
  amore:'Momento favorevole per unire i cuori. Se stai considerando una scelta importante in amore, questo è il segnale.',
  lavoro:'Costruisci alleanze solide. Le collaborazioni nate ora avranno radici profonde.',
  consiglio:'Unisciti a ciò che è buono senza paura. L\'isolamento è la vera sfortuna.' },

  9:{ nome:'Il Potere del Piccolo',  cinese:'小畜', num:9,
  linee:[1,1,1,0,1,1], tri_inf:'111', tri_sup:'110',
  giudizio:'Successo. Dense nuvole ma nessuna pioggia dalla nostra pianura occidentale.',
  immagine:'Il vento soffia sul cielo: il potere del piccolo. Il saggio raffina la propria cultura.',
  significato:'Le nuvole si addensano ma la pioggia non cade ancora. Sei vicino alla manifestazione ma non ancora lì. Le piccole cose — i dettagli, le piccole azioni quotidiane, i gesti minimi — sono ciò che conta in questo momento. Non aspettare il grande gesto eroico. La cura e la costanza nel piccolo stanno costruendo qualcosa che presto si rivelerà grande.',
  amore:'I piccoli gesti quotidiani nutrono l\'amore più delle grandi dichiarazioni. Sii presente nei dettagli.',
  lavoro:'Affina il dettaglio, cura la comunicazione. I grandi risultati vengono dalla somma di piccole precisioni.',
  consiglio:'La grandezza si costruisce nel piccolo. Ogni goccia conta, anche se non vedi ancora l\'oceano.' },

  10:{ nome:'Il Comportamento',      cinese:'履', num:10,
  linee:[1,1,0,1,1,1], tri_inf:'011', tri_sup:'111',
  giudizio:'Calpestare la coda della tigre. Essa non morde. Successo.',
  immagine:'Il cielo sopra, il lago sotto: il comportamento. Il saggio distingue l\'alto dal basso e rafforza la volontà del popolo.',
  significato:'Cammini sulla coda della tigre — una situazione pericolosa che richiede estrema attenzione al comportamento. Non è la situazione in sé ad essere fatale: è il modo in cui ti muovi al suo interno. Grazia, consapevolezza, correttezza di comportamento — questi sono i tuoi strumenti. Tratta chiunque con rispetto, osserva le forme sociali, non forzare situazioni delicate.',
  amore:'Comportati con grazia e rispetto nella relazione. Le parole imprudenti ora possono fare danni profondi.',
  lavoro:'Rispetta le gerarchie e le convenzioni. Non è il momento di sfidare le regole non scritte.',
  consiglio:'La tigre non morde chi cammina con rispetto e consapevolezza. Ogni passo conta.' },

  11:{ nome:'La Pace',               cinese:'泰', num:11,
  linee:[1,1,1,0,0,0], tri_inf:'111', tri_sup:'000',
  giudizio:'Il piccolo se ne va, il grande viene. Fortuna e successo.',
  immagine:'Cielo e Terra si uniscono: la pace. Il sovrano divide e completa il corso del Cielo e della Terra.',
  significato:'Il Cielo scende, la Terra sale — le due forze si incontrano in armonia perfetta. Questo è uno degli esagrammi più benedetti dell\'I Ching: pace, prosperità, flusso naturale. Il periodo difficile è passato o sta passando. Entra in questo tempo di pace con gratitudine e usalo per costruire, non per dormire sugli allori. La pace non è statica — è il frutto di un equilibrio che richiede cura.',
  amore:'Armonia profonda in amore. Un periodo di grande dolcezza e comprensione reciproca.',
  lavoro:'Periodo di flusso e prosperità. I piani si realizzano con facilità. Investi in questo momento favorevole.',
  consiglio:'Goditi la pace e usala per costruire. Ogni periodo di armonia è il fondamento del prossimo ciclo.' },

  12:{ nome:'Il Ristagno',           cinese:'否', num:12,
  linee:[0,0,0,1,1,1], tri_inf:'000', tri_sup:'111',
  giudizio:'Il ristagno degli uomini malvagi. Non è favorevole la perseveranza del saggio.',
  immagine:'Cielo e Terra non si uniscono: il ristagno. Il saggio si ritira nella propria virtù per evitare difficoltà.',
  significato:'Il Cielo sale, la Terra scende — si allontanano invece di unirsi. Comunicazione bloccata, piani che non avanzano, sensazione di impotenza. Questo non è il momento delle grandi azioni: è il momento del ritiro strategico. Come il saggio che si ritira in se stesso durante i tempi difficili, usa questo periodo per rafforzare la tua integrità interiore. Il ristagno è temporaneo — l\'inverno precede sempre la primavera.',
  amore:'Comunicazione bloccata o distanza emotiva. Non forzare — crea spazio invece di colmarlo.',
  lavoro:'Rallentamento inevitabile. Usa questo tempo per rivedere la strategia, non per spingere inutilmente.',
  consiglio:'Il ritiro non è la sconfitta. Conserva le energie per quando il momento tornerà favorevole.' },

  13:{ nome:'La Comunità',           cinese:'同人', num:13,
  linee:[0,1,1,1,1,1], tri_inf:'101', tri_sup:'111',
  giudizio:'Comunità con gli uomini nella natura aperta — successo. Favorevole attraversare le grandi acque.',
  immagine:'Fuoco nel cielo: comunità. Il saggio organizza i clan e fa distinzioni tra le cose.',
  significato:'Il Fuoco sale verso il Cielo — la fiamma che unisce. Questo esagramma parla di comunità, di unione verso un obiettivo comune, di trovare i propri alleati spirituali. Non sei solo nel tuo cammino. C\'è un gruppo — reale o da costruire — che condivide la tua visione. L\'unione con le persone giuste moltiplica la forza di ognuno.',
  amore:'Amore fondato su valori condivisi e visione comune. Le anime affini si trovano.',
  lavoro:'Costruisci una comunità professionale autentica. Il lavoro di squadra ora porta risultati straordinari.',
  consiglio:'Cerca le tue tribù — le persone che capiscono senza bisogno di spiegazioni.' },

  14:{ nome:'Il Grande Avere',       cinese:'大有', num:14,
  linee:[1,1,1,1,0,1], tri_inf:'111', tri_sup:'101',
  giudizio:'Grande possesso — successo supremo.',
  immagine:'Fuoco nel cielo: grande possesso. Il saggio frena il male e promuove il bene.',
  significato:'Un solo Yin in posizione di rilievo circondato da cinque Yang — abbondanza e prosperità al culmine. Stai vivendo o ti avvicini a un periodo di grande abbondanza: materiale, relazionale, spirituale. L\'I Ching avverte però che la vera grandezza del Grande Avere sta in come si usa l\'abbondanza. Chi la usa per frenare il male e promuovere il bene la moltiplica; chi la trattiene per sé la perde.',
  amore:'Abbondanza in amore. Una relazione ricca di doni reciproci, generosità emotiva, calore.',
  lavoro:'Periodo di grande successo e riconoscimento. Usa l\'abbondanza con saggezza.',
  consiglio:'L\'abbondanza è un dono con una responsabilità allegata. Distribuisci ciò che ricevi.' },

  15:{ nome:'La Modestia',           cinese:'謙', num:15,
  linee:[0,0,1,0,0,0], tri_inf:'001', tri_sup:'000',
  giudizio:'Successo. Il saggio porta a termine.',
  immagine:'Un monte in mezzo alla terra: la modestia. Il saggio riduce ciò che è eccessivo e aumenta ciò che è insufficiente.',
  significato:'Il Monte si abbassa, la Terra si eleva — la modestia che livella. Questo è l\'unico esagramma in cui tutte e sei le linee portano fortuna, indipendentemente dalla posizione. La modestia autentica — non l\'umiltà performativa ma il genuino non-gonfiare-sé-stessi — è la qualità più potente che puoi portare in qualsiasi situazione. Chi si abbassa viene elevato; chi si gonfia viene deflato.',
  amore:'La modestia in amore crea spazio per l\'altro. Smetti di riempire tutto con te stesso e lascia emergere l\'altro.',
  lavoro:'Non vantarti dei tuoi successi — lascia che parlino da soli. La modestia apre porte che l\'arroganza chiude.',
  consiglio:'La vera grandezza non ha bisogno di proclamarsi.' },

  16:{ nome:'L\'Entusiasmo',         cinese:'豫', num:16,
  linee:[0,0,0,1,0,0], tri_inf:'000', tri_sup:'100',
  giudizio:'Favorevole nominare aiutanti e far muovere gli eserciti.',
  immagine:'Tuono sopra la terra: entusiasmo. I re antichi facevano musica per onorare il merito.',
  significato:'Un solo Yang che si leva sopra cinque Yin — come un tuono che risveglia la terra inerte. L\'entusiasmo autentico è energia contagiosa che mette le persone in movimento. Hai — o stai per avere — una scintilla che può ispirare gli altri. Non trattenerla. L\'I Ching dice che questo è il momento di nominare alleati, di muovere risorse, di portare gioia e celebrazione dove c\'era stasi.',
  amore:'La gioia è tornata o sta tornando. Celebra ciò che hai. L\'entusiasmo è un afrodisiaco.',
  lavoro:'Il tuo entusiasmo è il tuo asset principale ora. Contagia gli altri con la tua visione.',
  consiglio:'Lascia che la tua gioia autentica si esprima. Il mondo ha bisogno di persone che credono in qualcosa.' },

  17:{ nome:'Il Seguire',            cinese:'隨', num:17,
  linee:[0,1,1,0,0,1], tri_inf:'100', tri_sup:'011',
  giudizio:'Successo supremo. Perseveranza porta fortuna. Nessuna colpa.',
  immagine:'Tuono in mezzo al lago: seguire. Il saggio al tramonto entra per riposarsi.',
  significato:'Il Tuono si abbassa nel Lago — il forte segue il ciclo naturale e si ritira al tramonto. Seguire non è debolezza: è intelligenza adattiva. C\'è qualcosa — una persona, una situazione, un ritmo naturale — che vale la pena seguire invece di contraddire. Lascia che questo momento ti guidi invece di cercare sempre di guidare tu. Il riposo serale prepara l\'azione dell\'alba.',
  amore:'Lasciati guidare dal ritmo della relazione invece di controllarlo. Il seguire crea più intimità del dirigere.',
  lavoro:'Adattati al flusso esistente invece di imporre la tua direzione. Chi segue bene sa anche guidare meglio.',
  consiglio:'Il fiume non combatte le rive — le segue e trova il mare.' },

  18:{ nome:'Il Lavoro sul Corrotto', cinese:'蠱', num:18,
  linee:[0,1,1,0,0,1], tri_inf:'110', tri_sup:'001',
  giudizio:'Successo supremo. Favorevole attraversare le grandi acque. Prima del punto di partenza tre giorni, dopo il punto di partenza tre giorni.',
  immagine:'Vento ai piedi del monte: il corrotto. Il saggio stimola la gente e rafforza il suo spirito.',
  significato:'Qualcosa si è deteriorato — un sistema, una relazione, un\'abitudine — e ha bisogno di essere corretto alla radice. Non è il momento delle toppe superficiali: serve un\'analisi profonda di cosa ha portato alla corruzione e un intervento coraggioso. Come il chirurgo che deve fare del male per guarire, questo lavoro richiede determinazione. Ma chi lo fa con coscienza trova successo supremo.',
  amore:'Affrontare un pattern tossico o una dinamica disfunzionale nella relazione. Il cambiamento richiede coraggio.',
  lavoro:'Qualcosa non funziona nel sistema. Trovare la causa radice — non gestire i sintomi.',
  consiglio:'Non aver paura di guardare cosa non funziona. Il coraggio di vedere è il primo passo del cambiamento.' },

  19:{ nome:'L\'Avvicinarsi',        cinese:'臨', num:19,
  linee:[1,1,0,0,0,0], tri_inf:'011', tri_sup:'000',
  giudizio:'Successo supremo. Perseveranza porta fortuna. Quando arriva l\'ottavo mese vi sarà sfortuna.',
  immagine:'Terra sopra il lago: avvicinarsi. Il saggio è inesauribile nella sua intenzione di insegnare.',
  significato:'La Terra si avvicina al Lago — il grande si avvicina con benevolenza al piccolo. Stai entrando in un periodo di crescita e vicinanza favorevole: alle persone, alle opportunità, ai tuoi obiettivi. Qualcosa o qualcuno di importante si sta avvicinando a te. L\'I Ching avverte però: approfitta di questo momento espansivo perché non durerà per sempre.',
  amore:'Un avvicinamento importante — fisico, emotivo o relazionale. Non perdere questa finestra.',
  lavoro:'Periodo di espansione e avanzamento. Avvicinati ai tuoi obiettivi con fiducia.',
  consiglio:'Agisci ora mentre la finestra favorevole è aperta. Il momento passa.' },

  20:{ nome:'La Contemplazione',     cinese:'觀', num:20,
  linee:[0,0,0,0,1,1], tri_inf:'000', tri_sup:'110',
  giudizio:'L\'abluzione è stata fatta ma non ancora l\'offerta. Pieno di fiducia, guarda in alto.',
  immagine:'Il vento soffia sulla terra: la contemplazione. I re antichi visitavano le regioni del mondo.',
  significato:'Il Vento soffia sulla Terra, penetrando ovunque — la contemplazione che comprende tutto. Questo è il momento dell\'osservazione profonda, non dell\'azione. Prima di agire, guarda. Prima di decidere, contempla. Come il re che visita le regioni del suo regno per capirle, sei chiamato a espandere la tua visione. Ciò che vedi nel profondo cambierà ciò che farai in superficie.',
  amore:'Osserva la tua relazione dall\'esterno per un momento. Cosa vedi quando non sei in mezzo all\'emozione?',
  lavoro:'Fase di analisi e comprensione. Investi nell\'osservare prima di agire.',
  consiglio:'La comprensione vera precede l\'azione efficace. Contempla prima di muoverti.' },

  21:{ nome:'Il Mordere',            cinese:'噬嗑', num:21,
  linee:[1,0,0,1,0,1], tri_inf:'100', tri_sup:'101',
  giudizio:'Successo. È favorevole lasciare che la giustizia faccia il suo corso.',
  immagine:'Tuono e lampo: il mordere. I re antichi rendevano chiare le leggi e decretavano le pene.',
  significato:'Una bocca con qualcosa tra i denti che impedisce la chiusura — un ostacolo che deve essere eliminato per ristabilire l\'unione. C\'è qualcosa — un malinteso, un\'ingiustizia, un problema irrisolto — che si frappone tra te e ciò che desideri. Non ignorarlo: mordilo, affrontalo direttamente. La giustizia e la chiarezza sono i tuoi strumenti.',
  amore:'Un problema irrisolto sta impedendo la vera unione. Affrontalo con coraggio invece di aggirarlo.',
  lavoro:'Affronta direttamente l\'ostacolo o il conflitto che blocca il progresso. La decisione diretta porta avanti.',
  consiglio:'Non lasciare che il non detto si accumuli. Le questioni irrisolte crescono nell\'ombra.' },

  22:{ nome:'La Grazia',             cinese:'賁', num:22,
  linee:[1,0,0,1,1,0], tri_inf:'101', tri_sup:'001',
  giudizio:'Successo. Nelle piccole cose è favorevole agire.',
  immagine:'Fuoco ai piedi del monte: la grazia. Il saggio illumina le affermazioni ordinarie ma non osa decidere le controversie.',
  significato:'Il Fuoco illumina il Monte — la bellezza che rivela la forma. La Grazia parla dell\'estetica come veicolo di significato: non ornamento superficiale, ma forma che rivela l\'essenza. In questo momento puoi raggiungere molto attraverso la bellezza del gesto, la cura nella presentazione, la grazia nel comportamento. Ma ricorda: la grazia è il vestito della sostanza, non il suo sostituto.',
  amore:'La bellezza e la cura nei gesti d\'amore parlano più delle parole. Cura la forma della relazione.',
  lavoro:'La presentazione e la forma contano quanto il contenuto. Cura l\'estetica del tuo lavoro.',
  consiglio:'La forma è lo specchio dell\'essenza. Prenditi cura di come presenti te stesso al mondo.' },

  23:{ nome:'Lo Sgretolamento',      cinese:'剝', num:23,
  linee:[0,0,0,0,0,1], tri_inf:'000', tri_sup:'001',
  giudizio:'Non è favorevole intraprendere alcunché.',
  immagine:'La montagna si appoggia sulla terra: lo sgretolamento. Chi è in alto può essere generoso verso chi è in basso.',
  significato:'Cinque Yin erodono l\'unico Yang rimasto — le forze oscure hanno il sopravvento. Non è il momento dell\'azione, ma della conservazione. Come l\'albero che in autunno concentra la sua energia nelle radici, concentra la tua energia interiore e aspetta. Non avviare nulla di importante ora. La situazione esterna non è favorevole, ma chi protegge il proprio nucleo attraverserà questo periodo indenne.',
  amore:'Una relazione sotto pressione. Proteggi il nucleo di ciò che avete costruito.',
  lavoro:'Non è il momento per rischi o nuovi lanci. Conserva le risorse e aspetta il momento migliore.',
  consiglio:'Il saggio sa quando non agire. La conservazione dell\'energia è la sua forma più alta.' },

  24:{ nome:'Il Ritorno',            cinese:'復', num:24,
  linee:[1,0,0,0,0,0], tri_inf:'100', tri_sup:'000',
  giudizio:'Successo. Uscire e rientrare senza malattia. Gli amici vengono senza colpa. Tornare alla via.',
  immagine:'Il tuono nel cuore della terra: il ritorno. I re antichi chiudevano i passi nel tempo del solstizio.',
  significato:'Un Yang nasce alla base di sei Yin — il solstizio d\'inverno, il punto più buio in cui si germoglia la luce. Dopo un lungo periodo di ritiro, oscurità o perdita, il ritorno è iniziato. Non aspettarti un balzo immediato: la luce cresce lentamente e dolcemente. Ma è iniziata. Il ritorno a te stesso, ai tuoi valori, alla vita — ha già cominciato il suo cammino.',
  amore:'Un ritorno in amore — a un sentimento, a una persona o alla capacità di amare dopo una ferita.',
  lavoro:'Ripresa dopo un periodo difficile. La luce torna lentamente ma inesorabilmente.',
  consiglio:'Rispetta la lentezza del ritorno. La luce di gennaio è più preziosa di quella di luglio.' },

  25:{ nome:'L\'Innocenza',          cinese:'無妄', num:25,
  linee:[1,0,0,1,1,1], tri_inf:'100', tri_sup:'111',
  giudizio:'Successo supremo. Perseveranza porta fortuna. Se qualcuno non è retto vi sarà sfortuna.',
  immagine:'Sotto il cielo si muove il tuono: l\'innocenza. I re antichi facevano prosperare tutte le cose con rigoglio.',
  significato:'Il Cielo sopra il Tuono — azione spontanea e naturale allineata con la legge cosmica. L\'innocenza qui non è ingenuità ma purezza d\'intenzione: agire senza calcolo, senza secondi fini, senza aspettarsi un ritorno specifico. Quando agisci con questa purezza, le cose si allineano naturalmente. Il problema arriva quando pianifichi in modo troppo artificioso — la spontaneità è la tua protezione.',
  amore:'Ama senza calcolo. Lascia che i sentimenti siano puri e non strategici.',
  lavoro:'Agisci con integrità assoluta. L\'onestà è la tua migliore protezione e il tuo migliore investimento.',
  consiglio:'L\'innocenza non è stupidità — è il coraggio di essere autentici in un mondo di maschere.' },

  26:{ nome:'Il Grande Addomesticamento', cinese:'大畜', num:26,
  linee:[1,1,1,1,0,1], tri_inf:'111', tri_sup:'001',
  giudizio:'Perseveranza porta fortuna. Non mangiare in casa porta fortuna. Favorevole attraversare le grandi acque.',
  immagine:'Il cielo nel mezzo del monte: grande forza addomesticata. Il saggio apprende molti detti antichi per rafforzare il proprio carattere.',
  significato:'Il Monte trattiene il Cielo — la forza enorme che viene contenuta e accumulata. Come la diga che trattiene l\'acqua finché non è pronta a essere usata con precisione, stai accumulando una forza che ancora non hai liberato. Questo non è spreco — è saggezza. Il momento del rilascio arriverà e sarà tanto più potente quanto più a lungo hai trattenuto. Studia, apprendi, rafforzati.',
  amore:'Una relazione che accumula profondità e significato prima di esprimersi pienamente.',
  lavoro:'Accumula competenze e risorse prima di agire. La preparazione ora moltiplica i risultati.',
  consiglio:'La forza che si accumula in silenzio è la più potente.' },

  27:{ nome:'Le Commissure',         cinese:'頤', num:27,
  linee:[1,0,0,0,0,1], tri_inf:'100', tri_sup:'001',
  giudizio:'Perseveranza porta fortuna. Osserva il nutrimento e ciò con cui cerchi di riempire la bocca.',
  immagine:'Tuono ai piedi del monte: le commissure. Il saggio è attento alle proprie parole e moderato nel mangiare e bere.',
  significato:'La prima e l\'ultima linea Yang formano la mascella — il nutrimento. Questo esagramma riguarda cosa scegli di nutrire: il tuo corpo, la tua mente, la tua anima. Siamo ciò che mangiamo in ogni senso del termine: le parole che usiamo, i pensieri che coltiviamo, le relazioni che nutrono o svuotano. Esamina le tue fonti di nutrimento e chiedi: questo mi fortifica o mi indebolisce?',
  amore:'Nutri la relazione con cura e consapevolezza. Cosa stai dando e ricevendo davvero?',
  lavoro:'Prenditi cura delle fondamenta: salute, energia, risorse. Non puoi costruire su un fondamento esausto.',
  consiglio:'Sei responsabile di ciò che scegli di nutrire in te stesso. Scegli con saggezza.' },

  28:{ nome:'Il Grande Eccesso',     cinese:'大過', num:28,
  linee:[0,1,1,1,1,0], tri_inf:'011', tri_sup:'110',
  giudizio:'La trave maestra è piegata. Favorevole avere dove andare — successo.',
  immagine:'Il lago si alza sopra gli alberi: grande eccesso. Il saggio non sente paura nemmeno quando sta da solo.',
  significato:'La trave maestra si piega sotto un peso eccessivo — la situazione è critica ma non ancora rotta. C\'è un eccesso che deve essere affrontato: troppa pressione, troppa aspettativa, troppa rigidità in una struttura che non la regge. L\'azione è necessaria e urgente, ma non nel panico. Chi affronta questo momento con fermezza e coraggio trova una via d\'uscita.',
  amore:'Una situazione emotiva eccessiva — troppa intensità, troppa dipendenza, troppo controllo. Il bilanciamento è necessario.',
  lavoro:'Situazione critica che richiede intervento deciso. Non aspettare che la trave si rompa da sola.',
  consiglio:'Il coraggio nell\'eccesso è sapere quando e come ridurre il carico.' },

  29:{ nome:'Il Gorgo',              cinese:'坎', num:29,
  linee:[0,1,0,0,1,0], tri_inf:'010', tri_sup:'010',
  giudizio:'Pericolo raddoppiato. Se sei sincero hai successo nel cuore. Azione porta ricompensa.',
  immagine:'Acqua che scorre continuamente: il gorgo raddoppiato. Il saggio cammina nella virtù costante.',
  significato:'Acqua sopra Acqua — il pericolo che si raddoppia. Come il fiume che scorre inesorabilmente attraverso le gole più profonde, la tua salvezza non sta nel resistere al pericolo ma nel mantenerti integro mentre lo attraversi. L\'acqua non combatte la roccia — la scorre intorno. Mantieni la tua sincerità e il tuo centro in questa prova e uscirai dall\'altra parte.',
  amore:'Un periodo difficile in amore che mette alla prova la profondità del legame. Chi resta è reale.',
  lavoro:'Sfide serie che richiedono perseveranza e integrità. Non scorciatoie — solo onestà.',
  consiglio:'Come l\'acqua che scorre sempre verso il basso senza fermarsi, mantieni la direzione nella difficoltà.' },

  30:{ nome:'Il Fuoco Appiccicante', cinese:'離', num:30,
  linee:[1,0,1,1,0,1], tri_inf:'101', tri_sup:'101',
  giudizio:'Perseveranza porta fortuna. Prendersi cura della mucca porta fortuna.',
  immagine:'La luminosità si leva due volte: il fuoco appiccicante. Il saggio illumina i quattro angoli del mondo.',
  significato:'Il Fuoco che si attacca — luce che dipende da ciò che brucia. Come il fuoco che non può stare da solo ma ha bisogno di combustibile, stai attraversando un momento in cui la tua forza dipende dagli appoggi giusti. Trovare ciò a cui "appicciarsi" — un mentore, una struttura, una tradizione, un valore — è la tua priorità. Con il giusto appoggio, la tua luce illumina il mondo.',
  amore:'Una relazione che richiede cura e nutrimento costante per restare accesa. Il fuoco senza legna si spegne.',
  lavoro:'Trova il tuo ambiente giusto — il contesto che permette alla tua luce di brillare. Non brillare nel vuoto.',
  consiglio:'Anche la stella più brillante ha bisogno della propria orbita.' },

  31:{ nome:'L\'Influenza',          cinese:'咸', num:31,
  linee:[0,0,1,1,1,0], tri_inf:'001', tri_sup:'011',
  giudizio:'Successo. Perseveranza porta fortuna. Sposare una fanciulla porta fortuna.',
  immagine:'Sul monte c\'è un lago: l\'influenza. Il saggio accoglie le persone con apertura di mente.',
  significato:'Il Lago si appoggia sul Monte, rinfrescandolo — la dolce influenza. Questo è l\'esagramma del corteggiamento, dell\'attrazione reciproca, dell\'influenza che opera senza forza. Stai attirando o stai per attirare qualcuno o qualcosa attraverso la tua apertura e il tuo fascino naturale. L\'influenza efficace non è mai coercitiva — è la calamita che attrae ciò che gli è affine.',
  amore:'Attrazione forte e reciproca. L\'influenza naturale del cuore aperto. Momento favorevole per avvicinarsi.',
  lavoro:'La tua influenza naturale è il tuo strumento più potente. Ispira invece di imporre.',
  consiglio:'Chi apre il cuore attira; chi chiude il pugno respinge.' },

  32:{ nome:'La Durata',             cinese:'恆', num:32,
  linee:[0,1,1,1,0,0], tri_inf:'110', tri_sup:'100',
  giudizio:'Successo. Nessuna colpa. Perseveranza porta fortuna. Favorevole avere dove andare.',
  immagine:'Tuono e vento: la durata. Il saggio sta fermo e non muta direzione.',
  significato:'Il Tuono e il Vento si rafforzano a vicenda — la durata che nasce dal movimento costante, non dalla rigidità. La vera stabilità non è immobilità: è il ritmo costante che persevera attraverso le variazioni. Il matrimonio dura non perché non cambia, ma perché si adatta costantemente. Cosa nella tua vita merita questa dedizione duratura?',
  amore:'Il vero amore non è un sentimento eterno ma un impegno quotidianamente rinnovato. La durata si costruisce.',
  lavoro:'Perseveranza nel cammino scelto porta risultati che l\'incostanza non potrà mai raggiungere.',
  consiglio:'La costanza nel tempo è la magia più sottile e più potente.' },

  33:{ nome:'Il Ritiro',             cinese:'遯', num:33,
  linee:[0,0,1,1,1,1], tri_inf:'001', tri_sup:'111',
  giudizio:'Successo. Nel piccolo è favorevole la perseveranza.',
  immagine:'Sotto il cielo c\'è un monte: il ritiro. Il saggio mantiene a distanza le persone inferiori con dignità.',
  significato:'Il Monte sale ma il Cielo si ritira — il ritiro strategico come forma di saggezza. Non è fuga dalla realtà: è riconoscere quando l\'ambiente non è propizio e preservare le proprie energie. Come il saggio che si ritira in montagna nei tempi bui per tornare più forte, questo ritiro è un investimento nel futuro. Ritirati con grazia e dignità.',
  amore:'A volte la distanza crea la chiarezza necessaria. Un temporaneo ritiro può salvare una relazione.',
  lavoro:'Ritirati da una situazione che consuma senza nutrire. La riserva intelligente vale più dell\'esposizione.',
  consiglio:'Sapere quando ritirarsi è una delle competenze più rare e preziose.' },

  34:{ nome:'Il Grande Potere',      cinese:'大壯', num:34,
  linee:[1,1,1,1,0,0], tri_inf:'111', tri_sup:'100',
  giudizio:'Perseveranza porta fortuna.',
  immagine:'Il tuono nel cielo: grande potere. Il saggio non percorre nessun cammino che non sia conforme all\'ordine.',
  significato:'Quattro Yang forti alla base, due Yin in cima — il grande potere in ascesa. Hai una forza enorme a disposizione in questo momento. Ma la runa del Grande Potere avverte: la forza bruta usata senza saggezza si spezza come il corno del capro intrappolato nella rete. La vera manifestazione del grande potere è usarlo in modo che sia in armonia con la legge naturale.',
  amore:'Grande energia e passione. Attenzione a non schiacciare l\'altro con la forza del tuo carattere.',
  lavoro:'Forza e capacità al massimo. Ma usa il potere con saggezza — non abbatterti su ogni ostacolo.',
  consiglio:'La forza vera sa quando non usarsi.' },

  35:{ nome:'Il Progresso',          cinese:'晉', num:35,
  linee:[0,0,0,1,0,1], tri_inf:'000', tri_sup:'101',
  giudizio:'Il principe potente viene presentato con molti cavalli. In un giorno è ricevuto tre volte.',
  immagine:'La luce sorge sulla terra: il progresso. Il saggio illumina la propria brillante virtù.',
  significato:'Il Sole sorge sopra la Terra — avanzamento chiaro e riconoscimento visibile. Stai facendo o stai per fare progressi significativi che vengono riconosciuti dagli altri. La tua virtù e il tuo valore si stanno rendendo visibili. Non nasconderti in questo momento — lasciati vedere, presentati, avanza. Il riconoscimento che arriva è meritato.',
  amore:'Avanzamento positivo in amore — un passo avanti nella relazione che entrambi desideravate.',
  lavoro:'Progresso e riconoscimento professionale. Le tue capacità vengono finalmente viste.',
  consiglio:'Permettiti di essere visto. La luce non si scusa per brillare.' },

  36:{ nome:'L\'Oscuramento della Luce', cinese:'明夷', num:36,
  linee:[1,0,1,0,0,0], tri_inf:'101', tri_sup:'000',
  giudizio:'Nelle avversità è favorevole la perseveranza.',
  immagine:'La luce cala nella terra: oscuramento della luce. Il saggio governa le grandi moltitudini nascondendo la propria brillantezza.',
  significato:'Il Sole sprofonda nella Terra — la luce nascosta nell\'oscurità. Stai attraversando un periodo in cui le tue qualità non vengono riconosciute, o dove devi deliberatamente nascondere la tua brillantezza per sopravvivere in un ambiente ostile. Come l\'aquila che nasconde i suoi artigli nel volo, preserva la tua luce interiore mentre aspetti il momento di esprimerla. Non perdere la fiamma interna.',
  amore:'Un periodo in cui l\'amore si esprime in modo nascosto o non riconosciuto. Preserva il fuoco interiore.',
  lavoro:'Ambiente ostile che richiede discrezione. Nascondi le tue carte — non è il momento di mostrare tutto.',
  consiglio:'La luce che sopravvive nell\'oscurità è la più forte.' },

  37:{ nome:'La Famiglia',           cinese:'家人', num:37,
  linee:[1,0,1,0,1,1], tri_inf:'101', tri_sup:'110',
  giudizio:'Perseveranza della donna porta fortuna.',
  immagine:'Il vento viene dal fuoco: la famiglia. Il saggio nelle sue parole ha sostanza e nella sua condotta costanza.',
  significato:'Il Fuoco all\'interno, il Vento all\'esterno — il calore della famiglia che si irradia verso il mondo. Questo esagramma parla dell\'ordine che inizia nella cellula più piccola — la famiglia, il cerchio intimo — e si espande verso fuori. Cura la tua casa prima di voler curare il mondo. Le relazioni più vicine richiedono la tua attenzione più genuina.',
  amore:'La famiglia e il cerchio intimo sono il fondamento di tutto. Cura le radici per avere frutto.',
  lavoro:'Il tuo ambiente di lavoro è la tua famiglia professionale. Investire nelle relazioni porta stabilità.',
  consiglio:'L\'ordine nel piccolo crea l\'ordine nel grande. Inizia da casa tua.' },

  38:{ nome:'L\'Opposizione',        cinese:'睽', num:38,
  linee:[1,1,0,1,0,1], tri_inf:'101', tri_sup:'011',
  giudizio:'Nelle piccole cose fortuna.',
  immagine:'Fuoco sopra, lago sotto: l\'opposizione. Il saggio mantiene la propria individualità nonostante sia parte del tutto.',
  significato:'Il Fuoco sale, il Lago scende — due nature opposte che si allontanano. C\'è una divisione, un malinteso, o una differenza fondamentale di valori con qualcuno. L\'I Ching non dice che la divisione è sbagliata — a volte è naturale e necessaria. Ma nelle piccole cose è ancora possibile trovare un accordo. Non cercare l\'unione totale dove non è possibile: cerca i punti di contatto.',
  amore:'Differenze significative in amore. Accetta che l\'altro sia un individuo separato — non una tua estensione.',
  lavoro:'Differenze di visione in un team o partnership. Cerca i punti di accordo invece di risolvere tutto.',
  consiglio:'Nelle opposizioni si trovano le tensioni creative più fertili.' },

  39:{ nome:'L\'Impedimento',        cinese:'蹇', num:39,
  linee:[0,0,1,0,1,0], tri_inf:'001', tri_sup:'010',
  giudizio:'Favorevole il sudovest, sfavorevole il nordest. È favorevole vedere il grande uomo. Perseveranza porta fortuna.',
  immagine:'Acqua sul monte: l\'impedimento. Il saggio rivolge se stesso e coltiva la virtù.',
  significato:'Il Monte di fronte, l\'Acqua pericolo — l\'ostacolo che blocca il cammino. Hai davanti un impedimento reale. L\'I Ching non dice di combatterlo a testa bassa: dice di voltarsi e lavorare su te stesso. L\'ostacolo esterno spesso riflette un blocco interiore. Cerca un saggio consigliere, cambia direzione, o usa questo fermo forzato per rafforzare il tuo carattere.',
  amore:'Un ostacolo in amore — forse interno, non solo esterno. Cosa stai evitando di vedere in te stesso?',
  lavoro:'Un blocco serio che non si supera con la forza. Cerca un approccio alternativo o una guida.',
  consiglio:'Ogni impedimento è un insegnante travestito da ostacolo.' },

  40:{ nome:'La Liberazione',        cinese:'解', num:40,
  linee:[0,1,0,0,0,0], tri_inf:'100', tri_sup:'010',
  giudizio:'Favorevole il sudovest. Se non c\'è nessun posto dove andare, il ritorno porta fortuna. Se c\'è qualcosa da fare, farlo presto porta fortuna.',
  immagine:'Tuono e pioggia sorgono: la liberazione. Il saggio perdona gli errori e non punisce i crimini.',
  significato:'Il Tuono e la Pioggia sciolgono la tensione accumulata nell\'inverno — la liberazione dopo il blocco. Un periodo difficile si sta concludendo. La tensione si allenta, gli ostacoli si dissolvono, ciò che era congelato torna a scorrere. Perdona — te stesso e gli altri — e non portare con te il peso di ciò che è passato. La liberazione richiede il perdono come atto finale.',
  amore:'Liberazione da tensioni accumulate. Il perdono — dato o ricevuto — trasforma la relazione.',
  lavoro:'I blocchi si sciolgono. Riprendi il progresso con slancio ma senza rancori.',
  consiglio:'Il perdono non è dimenticare — è sciogliere il nodo che ti tiene prigioniero insieme all\'altro.' },

  41:{ nome:'La Diminuzione',        cinese:'損', num:41,
  linee:[1,1,0,0,0,1], tri_inf:'011', tri_sup:'001',
  giudizio:'Diminuzione con fiducia porta fortuna suprema. Nessuna colpa. Si può essere perseveranti.',
  immagine:'Il lago ai piedi del monte: la diminuzione. Il saggio controlla la collera e frena i desideri.',
  significato:'Il Lago sotto il Monte si riduce per nutrirlo — la diminuzione volontaria come atto di saggezza. A volte bisogna ridurre per crescere: ridurre le spese per rafforzare le fondamenta, ridurre i desideri per vedere più chiaramente ciò di cui si ha veramente bisogno. La diminuzione sincera porta beneficio supremo — ciò che doni dal cuore torna moltiplicato.',
  amore:'A volte dare meno ma con più sincerità nutre di più. Riduci la quantità, aumenta la qualità.',
  lavoro:'Riduci sprechi e dispersioni. Cosa potresti eliminare per rafforzare ciò che resta?',
  consiglio:'Meno è spesso la risposta più coraggiosa.' },

  42:{ nome:'L\'Aumento',            cinese:'益', num:42,
  linee:[1,1,0,0,1,1], tri_inf:'100', tri_sup:'110',
  giudizio:'Favorevole avere dove andare. Favorevole attraversare le grandi acque.',
  immagine:'Vento e tuono: aumento. Il saggio quando vede il bene lo imita; quando ha difetti li corregge.',
  significato:'Il Vento sopra, il Tuono sotto — si rafforzano a vicenda crescendo. L\'Aumento è il contrario della Diminuzione: le risorse, l\'energia e le opportunità si moltiplicano. È un periodo di espansione favorevole. Ma l\'I Ching avverte: l\'aumento porta frutto solo se si usano le risorse aggiuntive per correggere i propri difetti e imitare il bene che si vede. L\'espansione senza miglioramento interiore è vuota.',
  amore:'Crescita e approfondimento in amore. Il bene che si investe nella relazione viene amplificato.',
  lavoro:'Periodo di espansione favorevole. Gli investimenti ora rendono di più. Agisci con saggezza.',
  consiglio:'Usa l\'abbondanza per migliorare, non solo per possedere di più.' },

  43:{ nome:'Il Prorompere',         cinese:'夬', num:43,
  linee:[1,1,1,1,1,0], tri_inf:'111', tri_sup:'011',
  giudizio:'Risolutamente manifestare alla corte del re. Deve essere annunciato sinceramente. Pericolo.',
  immagine:'Il lago è salito al cielo: il prorompere. Il saggio distribuisce la ricchezza verso il basso e non si ferma nella propria virtù.',
  significato:'Cinque Yang spingono fuori l\'ultimo Yin — il momento decisivo della rottura. C\'è qualcosa che deve essere dichiarato pubblicamente, una decisione che non può essere più rinviata, un confronto necessario. Non con violenza ma con chiarezza e determinazione. Chi si afferma con onestà in questo momento non porta colpa su di sé.',
  amore:'Una dichiarazione o una decisione necessaria. Dire la verità con coraggio apre una nuova fase.',
  lavoro:'Il momento di esporre pubblicamente una situazione o prendere una posizione chiara è arrivato.',
  consiglio:'Il coraggio di dire la verità al momento giusto è l\'azione più liberatrice.' },

  44:{ nome:'Il Venire Incontro',    cinese:'姤', num:44,
  linee:[0,1,1,1,1,1], tri_inf:'110', tri_sup:'111',
  giudizio:'La donna è potente. Non sposare tale donna.',
  immagine:'Sotto il cielo c\'è il vento: il venire incontro. Il principe fa proclami e li invia ai quattro angoli.',
  significato:'Un solo Yin alla base di cinque Yang — qualcosa di apparentemente piccolo che può avere grande influenza. Una proposta inaspettata, un incontro casuale, o una piccola tentazione che sembra innocente ma ha radici profonde. L\'I Ching avverte di non farsi travolgere da ciò che viene incontro con troppa facilità. Discernimento e prudenza prima di abbracciare ciò che si offre.',
  amore:'Un incontro inaspettato o una proposta che sembra allettante. Valuta con attenzione prima di aprire.',
  lavoro:'Un\'opportunità che viene incontro spontaneamente. Valutala con cura — non tutto ciò che brilla è oro.',
  consiglio:'Discerni tra ciò che viene incontro con il giusto sforzo e ciò che viene troppo facilmente.' },

  45:{ nome:'Il Raccoglimento',      cinese:'萃', num:45,
  linee:[0,0,0,1,1,0], tri_inf:'000', tri_sup:'011',
  giudizio:'Successo. Il re si avvicina al suo tempio. Favorevole vedere il grande uomo.',
  immagine:'Il lago sopra la terra: il raccoglimento. Il saggio rinuova le armi e si prepara al pericolo.',
  significato:'Il Lago si forma sulla Terra raccogliendo le acque — la comunità che si riunisce attorno a un centro. Sei chiamato a radunare — persone, risorse, energie — attorno a un\'intenzione comune. C\'è forza nell\'unione consapevole. Allo stesso tempo l\'I Ching avverte: quando ci si raccoglie in grandi numeri, il pericolo aumenta. Preparati.',
  amore:'Radunate le energie verso la relazione. Un momento di riunione o rinnovamento del legame.',
  lavoro:'Raduna il tuo team, le tue risorse, le tue energie verso un obiettivo condiviso. L\'unione ora è potente.',
  consiglio:'Chi sa radunare le forze sa anche guidarle. Inizia dall\'intenzione chiara.' },

  46:{ nome:'Lo Spingere Verso l\'Alto', cinese:'升', num:46,
  linee:[0,1,1,0,0,0], tri_inf:'110', tri_sup:'000',
  giudizio:'Grande successo. Deve essere vista la persona eminente. Nessuna preoccupazione. Spedizione verso il sud porta fortuna.',
  immagine:'Nel mezzo della terra cresce il legno: spingere verso l\'alto. Il saggio con devozione accumula piccole cose per ottenere qualcosa di alto e grande.',
  significato:'Come il seme che germoglia nell\'oscurità della terra e spinge inesorabilmente verso la luce, stai attraversando una fase di crescita ascendente. Non è il salto di una lepre — è la crescita costante dell\'albero che cresce di un anello all\'anno. Piccoli progressi quotidiani, perseveranza nella direzione giusta, e la vetta che sembrava irraggiungibile si avvicina.',
  amore:'La relazione cresce lentamente ma solidamente. Non affrettare — ogni radice profonda porta un ramo più alto.',
  lavoro:'Avanzamento graduale e sicuro. La scalata lenta è quella che regge.',
  consiglio:'La coerenza quotidiana batte la brillantezza occasionale.' },

  47:{ nome:'L\'Esaurimento',        cinese:'困', num:47,
  linee:[0,1,0,1,1,0], tri_inf:'010', tri_sup:'011',
  giudizio:'Successo. Perseveranza. Il grande uomo porta fortuna. Nessuna colpa. Quando si hanno parole non si è creduti.',
  immagine:'Il lago senza acqua: l\'esaurimento. Il saggio mette la propria vita a rischio per raggiungere il proprio scopo.',
  significato:'Il Lago senz\'acqua — l\'esaurimento delle risorse. Sei in un momento di grande stanchezza o scarsità: le energie sono al minimo, le risorse sembrano esaurite, le parole non vengono credute. L\'I Ching ti dice che questo è il test del vero carattere. Non cercare di convincere gli altri con le parole ora — dimostra con le azioni chi sei. Il grande uomo porta fortuna proprio nell\'esaurimento.',
  amore:'Un momento di stanchezza emotiva nella relazione. Non forzare — recupera le energie prima di riprendere.',
  lavoro:'Risorse al minimo. Non disperdere le ultime energie in azioni inutili. Conserva e recupera.',
  consiglio:'Chi emerge dall\'esaurimento senza perdere la propria integrità è davvero forte.' },

  48:{ nome:'Il Pozzo',              cinese:'井', num:48,
  linee:[0,1,0,1,1,0], tri_inf:'110', tri_sup:'010',
  giudizio:'Il villaggio può essere cambiato, ma non il pozzo. Non c\'è perdita né guadagno. Vengono e vanno e attingono al pozzo.',
  immagine:'Acqua sopra il legno: il pozzo. Il saggio incoraggia il popolo a lavorare e lo esorta ad aiutarsi a vicenda.',
  significato:'Il Pozzo è la fonte inesauribile di risorse interiori — la saggezza che non si esaurisce, l\'acqua che si rinnova costantemente. Cosa rappresenta il tuo "pozzo"? Il talento, la saggezza, la connessione spirituale che puoi offrire agli altri e che non diminuisce nel darlo. Attingi con più coraggio alla tua fonte interiore.',
  amore:'L\'amore autentico è un pozzo — più vi si attinge, più si rinnova. Non aver paura di dare.',
  lavoro:'Le tue risorse interiori sono inesauribili se le curi. Identifica la tua fonte e attingici con costanza.',
  consiglio:'La vera abbondanza è interiore. Il tuo pozzo non si esaurisce mai se lo curi.' },

  49:{ nome:'La Rivoluzione',        cinese:'革', num:49,
  linee:[1,0,1,1,1,0], tri_inf:'101', tri_sup:'011',
  giudizio:'Solo nel tuo giorno sei creduto. Grande successo. Perseveranza porta fortuna.',
  immagine:'Fuoco nel lago: la rivoluzione. Il saggio ordina il calendario e chiarisce le stagioni.',
  significato:'Il Fuoco nel Lago — forze che si distruggono e si trasformano a vicenda. Una rivoluzione è in atto o è necessaria. Non la rivoluzione violenta, ma la trasformazione radicale di qualcosa che non può più continuare come prima. Come le stagioni che si rivoluzionano l\'una nell\'altra, questo cambiamento è cosmicamente necessario. Abbraccialo invece di resistergli.',
  amore:'Una trasformazione radicale nella relazione o nel modo di amare. La vecchia forma non funziona più.',
  lavoro:'Un cambiamento di paradigma nel lavoro. Non resistere — guida la trasformazione.',
  consiglio:'La rivoluzione più importante è sempre quella interiore.' },

  50:{ nome:'Il Calderone',          cinese:'鼎', num:50,
  linee:[0,1,1,1,0,1], tri_inf:'110', tri_sup:'101',
  giudizio:'Sublime fortuna. Successo.',
  immagine:'Sul legno c\'è il fuoco: il calderone. Il saggio consolida la propria posizione raddrizzando il destino.',
  significato:'Il Calderone sacro in cui si prepara il cibo degli dei — la trasformazione alchemica che nutre il corpo e lo spirito. Sei in un processo di trasformazione profonda dove le tue esperienze, anche le più crude, vengono "cotte" in saggezza. Non resistere al processo. Ciò che ora bruncia nell\'interno diventerà il nutrimento che offrirai al mondo.',
  amore:'Una relazione che trasforma entrambi. L\'amore come alchimia.',
  lavoro:'Un progetto di trasformazione profonda del tuo lavoro o della tua missione.',
  consiglio:'Lascia che la vita ti trasformi. Il calderone non giudica ciò che cuoce — lo rende nutriente.' },

  51:{ nome:'L\'Eccitante',          cinese:'震', num:51,
  linee:[1,0,0,1,0,0], tri_inf:'100', tri_sup:'100',
  giudizio:'Il tuono arriva — oh oh! Parole di riso e scherzo. Il tuono spaventa cento miglia, lui non lascia cadere il cucchiaio rituale.',
  immagine:'Il tuono si ripete: eccitante. Il saggio con timore e tremore mette in ordine la sua vita e si esamina.',
  significato:'Il Tuono che si raddoppia — lo shock del risveglio. Qualcosa di improvviso e forse sconvolgente sta arrivando o è appena arrivato. Lo shock cosmico — che sia una notizia, un evento inaspettato, o un risveglio interiore — non è punizione ma scossa necessaria. Chi mantiene la calma nel tuono e usa lo spavento per esaminare la propria vita trova in esso una benedizione.',
  amore:'Uno shock in amore che risveglia. Non ogni terremoto distrugge — alcuni liberano.',
  lavoro:'Un evento improvviso che scuote il sistema. Mantieni il centro mentre il terreno trema.',
  consiglio:'Lasciati svegliare dallo shock invece di correre a rimettere tutto come prima.' },

  52:{ nome:'La Quiete',             cinese:'艮', num:52,
  linee:[0,0,1,0,0,1], tri_inf:'001', tri_sup:'001',
  giudizio:'Tenere il dorso fermo. Non si coglie il proprio corpo. Va nel suo cortile e non vede le sue persone. Nessuna colpa.',
  immagine:'Due monti congiunti: la quiete. Il saggio non va oltre il suo ordine mentale.',
  significato:'Il Monte che si raddoppia — la quiete assoluta. Questo esagramma parla della meditazione come arte: l\'immobilità che non è paralisi ma presenza totale. In un mondo che chiede movimento costante, tu sei chiamato all\'arte del fermo. Come il monte che non cerca di essere il cielo, trova la tua potenza nell\'essere pienamente ciò che sei, esattamente dove sei.',
  amore:'Un momento di quiete necessaria in amore. La presenza silenziosa vale più di mille parole.',
  lavoro:'Fermati. Pensa. Poi agisci. Il saggio non spreca movimenti.',
  consiglio:'La quiete è il padre di ogni azione saggia.' },

  53:{ nome:'Lo Sviluppo Graduale',  cinese:'漸', num:53,
  linee:[0,0,1,0,1,1], tri_inf:'001', tri_sup:'110',
  giudizio:'La fanciulla va a marito. Fortuna. Perseveranza porta fortuna.',
  immagine:'Sul monte c\'è un albero: sviluppo graduale. Il saggio dimora nella virtù e migliora i costumi.',
  significato:'L\'albero che cresce lentamente sul monte — lo sviluppo graduale e sicuro. Come l\'oca selvatica che migra seguendo l\'ordine naturale delle stagioni, le cose importanti richiedono il loro tempo. Non forzare la maturazione. Ogni passo deve essere consolidato prima di fare il successivo. La fretta in questo momento crea radici superficiali.',
  amore:'Una relazione che cresce lentamente e solidamente è quella che dura. Non bruciare le tappe.',
  lavoro:'Sviluppo graduale e costante porta più lontano del balzo improvviso. Consolida ogni passo.',
  consiglio:'La lentezza consapevole è la più veloce delle strade.' },

  54:{ nome:'La Fanciulla che Sposa', cinese:'歸妹', num:54,
  linee:[0,1,1,0,0,1], tri_inf:'011', tri_sup:'100',
  giudizio:'Intraprendere qualcosa porta sfortuna. Nessun vantaggio.',
  immagine:'Sopra il lago c\'è il tuono: la fanciulla che sposa. Il saggio comprende il transitorio nel destino eterno.',
  significato:'Questo esagramma parla di un\'unione che avviene in condizioni non ideali — qualcosa che inizia sotto una cattiva stella o fuori dal tempo giusto. Non è il momento delle grandi azioni o degli impegni definitivi. La situazione ha in sé qualcosa di provvisorio. Sii cosciente delle limitazioni del momento senza buttarti a capofitto. La pazienza ora protegge.',
  amore:'Un\'unione o un inizio che porta con sé limitazioni. Procedi con consapevolezza delle condizioni reali.',
  lavoro:'Non è il momento per impegni definitivi o grandi lanci. Aspetta condizioni più favorevoli.',
  consiglio:'Riconosci le condizioni reali invece di idealizzarle. La chiarezza protegge.' },

  55:{ nome:'L\'Abbondanza',         cinese:'豐', num:55,
  linee:[1,0,0,1,0,1], tri_inf:'101', tri_sup:'100',
  giudizio:'Successo. Il re lo raggiunge. Non siate tristi — siate come il sole a mezzogiorno.',
  immagine:'Tuono e lampo arrivano insieme: abbondanza. Il saggio decide i processi e porta a esecuzione le pene.',
  significato:'Tuono e Lampo insieme — la pienezza al culmine. Stai vivendo o stai per vivere un momento di grande abbondanza, visibilità e potere. Come il sole a mezzogiorno — il momento di massima luminosità — questo è il tuo apice. Ma ogni mezzogiorno contiene già in sé il pomeriggio: l\'abbondanza ha il suo ciclo. Vivi questo momento nella sua pienezza senza trattenere.',
  amore:'Abbondanza e pienezza in amore. Un momento di picco nella relazione da vivere pienamente.',
  lavoro:'Il tuo momento di massima visibilità e riconoscimento. Non essere modesto — splendi.',
  consiglio:'Il sole a mezzogiorno non si scusa per la sua luminosità. Sii pieno in questo momento.' },

  56:{ nome:'Il Viandante',          cinese:'旅', num:56,
  linee:[0,0,1,1,0,1], tri_inf:'001', tri_sup:'101',
  giudizio:'Successo nel piccolo. Perseveranza porta fortuna al viandante.',
  immagine:'Il fuoco sul monte: il viandante. Il saggio è chiaro e cauto nell\'imporre pene.',
  significato:'Il Fuoco sopra il Monte — la luce del viandante che si muove senza dimora fissa. Sei in una fase di transizione, o ti trovi in un ambiente che non è il tuo. Come il viaggiatore saggio che sa come comportarsi in territorio straniero — con rispetto, flessibilità, e senza pretendere diritti che non gli appartengono — muoviti con leggerezza. Questo è un periodo di passaggio, non di radici.',
  amore:'Una fase di transizione in amore. Porta te stesso con leggerezza invece di esigere stabilità da ciò che è ancora in movimento.',
  lavoro:'Periodo di transizione professionale. Adattati all\'ambiente senza perdere il tuo centro.',
  consiglio:'Il viaggiatore saggio porta poca roba ma porta tutto sé stesso.' },

  57:{ nome:'Il Penetrante',         cinese:'巽', num:57,
  linee:[0,1,1,0,1,1], tri_inf:'110', tri_sup:'110',
  giudizio:'Successo nel piccolo. Favorevole avere dove andare. Favorevole vedere il grande uomo.',
  immagine:'I venti si seguono uno dopo l\'altro: il penetrante. Il saggio rinnova i propri comandi e porta a termine le proprie azioni.',
  significato:'Il Vento che si raddoppia — la penetrazione costante e gentile che supera ogni ostacolo. Come l\'acqua che non abbatte il masso ma lo scava con pazienza, la tua forza ora è nella costanza sottile. Piccole azioni ripetute con intenzione penetrano dove la forza bruta non arriva. Sii come il vento: instancabile, gentile, sempre in movimento.',
  amore:'La comunicazione gentile e costante penetra il cuore più dell\'eloquenza occasionale.',
  lavoro:'L\'influenza sottile e costante porta più risultati della forza diretta in questo momento.',
  consiglio:'La goccia che buca la roccia non è forte — è costante.' },

  58:{ nome:'Il Sereno',             cinese:'兌', num:58,
  linee:[0,1,1,0,1,1], tri_inf:'011', tri_sup:'011',
  giudizio:'Successo. Perseveranza porta fortuna.',
  immagine:'Laghi collegati: il sereno. Il saggio si unisce agli amici per la discussione e la pratica.',
  significato:'Due Laghi che si alimentano a vicenda — la gioia condivisa che si moltiplica. Questo è l\'esagramma della vera gioia: non il piacere solitario ma quello che nasce dall\'incontro autentico con l\'altro. La conversazione profonda, l\'amicizia genuina, lo studio condiviso — questi sono i laghi che si riempiono a vicenda. Investi nelle tue relazioni di qualità.',
  amore:'La vera gioia in amore nasce dalla condivisione autentica. Trova il Lago che si nutre del tuo.',
  lavoro:'La collaborazione giocosa e gioiosa è la più produttiva. Costruisci un ambiente di lavoro che nutre.',
  consiglio:'La gioia condivisa è l\'unica che non diminuisce con il dividerla.' },

  59:{ nome:'La Dispersione',        cinese:'渙', num:59,
  linee:[0,1,0,0,1,1], tri_inf:'010', tri_sup:'110',
  giudizio:'Successo. Il re si avvicina al suo tempio. Favorevole attraversare le grandi acque. Perseveranza porta fortuna.',
  immagine:'Il vento soffia sull\'acqua: la dispersione. I re antichi offrivano sacrifici al Signore.',
  significato:'Il Vento disperde l\'Acqua — lo scioglimento di ciò che si era indurito. Come il ghiaccio che si scioglie in primavera, qualcosa di rigido — un conflitto, un\'incomprensione, un egotismo — si sta sciogliendo o deve essere sciolto. La cerimonia, la bellezza, il rito — hanno il potere di sciogliere ciò che la forza non riesce a muovere.',
  amore:'Lo scioglimento di distanze e rigidità. Un momento di riconciliazione è possibile.',
  lavoro:'Sciogliere le tensioni accumulate nel team o nel progetto. La leggerezza porta più avanti della serietà forzata.',
  consiglio:'Ciò che si scioglie non è perso — è liberato.' },

  60:{ nome:'La Limitazione',        cinese:'節', num:60,
  linee:[1,1,0,0,1,0], tri_inf:'011', tri_sup:'010',
  giudizio:'Successo. Le limitazioni amare non possono essere perseverate.',
  immagine:'L\'acqua sopra il lago: la limitazione. Il saggio elabora il numero e la misura e discute la natura della virtù e della condotta.',
  significato:'L\'Acqua si riversa nel Lago fino a riempirlo — il limite che dà forma. Senza rive, il lago sarebbe una palude. I confini, le regole, le limitazioni scelte consapevolmente non tolgono libertà — la creano. Esamina i limiti nella tua vita: quali ti danno forma e forza? Quali ti imprigionano? La saggezza è nell\'imparare a distinguere.',
  amore:'I confini sani nella relazione sono la forma che permette all\'amore di crescere.',
  lavoro:'Struttura e disciplina come strumenti di libertà. I limiti giusti moltiplicano la creatività.',
  consiglio:'La forma contiene il contenuto. Senza forma, tutto si disperde.' },

  61:{ nome:'La Sincerità Interiore', cinese:'中孚', num:61,
  linee:[1,1,0,0,1,1], tri_inf:'011', tri_sup:'110',
  giudizio:'I maialini e i pesci. Fortuna. Favorevole attraversare le grandi acque. Perseveranza porta fortuna.',
  immagine:'Il vento soffia sul lago: sincerità interiore. Il saggio discute i casi penali per ritardare le esecuzioni.',
  significato:'Due linee Yin al centro, quattro Yang all\'esterno — il vuoto sincero nel mezzo. Come il nido vuoto dell\'uccello che aspetta, o il guscio dell\'uovo che contiene la vita, la sincerità interiore è lo spazio aperto che permette la vera connessione. Quando sei genuinamente sincero — anche con i "pesci e i maialini", i più semplici — la tua parola ha potere trasformativo.',
  amore:'La sincerità assoluta — anche vulnerabile — è la via più diretta al cuore dell\'altro.',
  lavoro:'L\'integrità interiore è visibile anche senza parole. Le persone sentono quando sei autentico.',
  consiglio:'La sincerità non è debolezza — è il coraggio di essere visibili.' },

  62:{ nome:'La Preponderanza del Piccolo', cinese:'小過', num:62,
  linee:[0,0,1,1,0,0], tri_inf:'001', tri_sup:'100',
  giudizio:'Successo. Perseveranza porta fortuna. Può essere fatto nelle piccole cose ma non nelle grandi.',
  immagine:'Sul monte c\'è il tuono: preponderanza del piccolo. Il saggio nelle azioni supera nell\'umiltà, nella perdita supera nell\'afflizione, nel risparmio supera nella thriftiness.',
  significato:'Il Tuono sopra il Monte — l\'uccello che vola troppo in alto è pericoloso. Questo non è il momento delle grandi ambizioni o delle imprese colossali: è il momento dell\'umiltà, dei piccoli passi, della cura nei dettagli. Le piccole cose fatte bene portano fortuna; le grandi intraprese ora portano sfortuna. Abbassati, avvicinati alla terra, cura ciò che è piccolo.',
  amore:'Non fare grandi gesti — fai piccole cose con grande attenzione. La presenza nei dettagli nutre.',
  lavoro:'Concentrati sulle piccole ottimizzazioni invece dei grandi lanci. Il piccolo ora è il grande di domani.',
  consiglio:'La grandezza si nasconde nel piccolo curato con maestria.' },

  63:{ nome:'Dopo il Compimento',    cinese:'既濟', num:63,
  linee:[1,0,1,0,1,0], tri_inf:'101', tri_sup:'010',
  giudizio:'Successo nel piccolo. Perseveranza porta fortuna. All\'inizio fortuna, alla fine disordine.',
  immagine:'Acqua sopra al fuoco: dopo il compimento. Il saggio pensa al disastro e si prepara in anticipo.',
  significato:'Fuoco e Acqua in perfetto equilibrio alternato — l\'ordine raggiunto. Ma è l\'unico esagramma dove ogni linea è al suo posto — e proprio per questo è instabile. La perfezione contiene in sé il germe del declino. Dopo ogni compimento inizia già il nuovo disordine. Non dormire sugli allori: usa il momento di perfezione per prepararti alla prossima sfida.',
  amore:'Un momento di armonia raggiunta. Godila pienamente ma non darla per scontata.',
  lavoro:'Un obiettivo raggiunto. Celebra — poi rivolgi già l\'attenzione al prossimo ciclo.',
  consiglio:'Il saggio non si ferma al compimento — usa la perfezione come trampolino.' },

  64:{ nome:'Prima del Compimento',  cinese:'未濟', num:64,
  linee:[0,1,0,1,0,1], tri_inf:'010', tri_sup:'101',
  giudizio:'Successo. Ma se la piccola volpe attraversa quasi l\'acqua e bagna la propria coda, non c\'è niente di favorevole.',
  immagine:'Il fuoco sopra l\'acqua: prima del compimento. Il saggio è attento nel distinguere le cose.',
  significato:'Fuoco e Acqua non si toccano ancora — tutto è in divenire. Il contrario di 63: ogni linea è fuori posto, eppure l\'I Ching termina con questo esagramma. Perché il "prima del compimento" è il luogo della più grande possibilità. Tutto è ancora aperto. La piccola volpe che attraversa quasi il guado deve stare attenta fino alla fine. Non rilassarti prima di essere arrivato — l\'ultima fase è la più critica.',
  amore:'Una relazione ancora in formazione. La cura fino all\'ultimo passo è quella che porta al compimento.',
  lavoro:'Un progetto quasi completato. Non perdere attenzione nell\'ultima fase — è la più critica.',
  consiglio:'Prima del compimento risiede tutta la potenza del possibile. Il mondo inizia prima della fine.' },
};

let _ichingLinesData = []; // ogni elemento: 6|7|8|9

function ichingThrowAnimated(){
  if(_ichingLinesData.length >= 6 || _ichingLock) return;
  _ichingLock=true;

  const coinsContainer = $('#ichingCoinsContainer');
  const throwInfo = $('#ichingThrowInfo');
  const coin1 = $('#ichingCoin1');
  const coin2 = $('#ichingCoin2');
  const coin3 = $('#ichingCoin3');

  coinsContainer.style.display = 'flex';
  throwInfo.style.display = 'block';
  throwInfo.textContent = '🪙 Lanciando le monete...';

  coin1.classList.add('flipping');
  coin2.classList.add('flipping');
  coin3.classList.add('flipping');

  const result1 = Math.random() < 0.5 ? 2 : 3; // 2=Croce, 3=Testa
  const result2 = Math.random() < 0.5 ? 2 : 3;
  const result3 = Math.random() < 0.5 ? 2 : 3;
  const sum = result1 + result2 + result3; // 6,7,8,9

  setTimeout(() => {

  coin1.classList.remove('flipping');
  coin2.classList.remove('flipping');
  coin3.classList.remove('flipping');

  coin1.innerHTML = `<div class="iching-coin-inner"><span class="iching-coin-result">${result1 === 3 ? '🔴' : '⚪'}</span></div>`;
  coin2.innerHTML = `<div class="iching-coin-inner"><span class="iching-coin-result">${result2 === 3 ? '🔴' : '⚪'}</span></div>`;
  coin3.innerHTML = `<div class="iching-coin-inner"><span class="iching-coin-result">${result3 === 3 ? '🔴' : '⚪'}</span></div>`;

  throwInfo.textContent = `Risultato: ${result1} + ${result2} + ${result3} = ${sum}`;

  setTimeout(() => {

  coinsContainer.style.display = 'none';
  throwInfo.style.display = 'none';

  coin1.classList.remove('flipping');
  coin2.classList.remove('flipping');
  coin3.classList.remove('flipping');
  coin1.innerHTML = '<div class="iching-coin-inner">☯</div>';
  coin2.innerHTML = '<div class="iching-coin-inner">☯</div>';
  coin3.innerHTML = '<div class="iching-coin-inner">☯</div>';

  _ichingLinesData.push(sum);
  const n = _ichingLinesData.length;

  _renderIchingLine(sum, n);

  const ordinals = ['1ª','2ª','3ª','4ª','5ª','6ª'];
  if(n < 6){
  $('#ichingThrowLabel').textContent = `🪙 Lancia le Monete — ${ordinals[n]} linea`;
  $('#ichingProgress').textContent   = `Linee generate: ${n} / 6`;
  setTimeout(()=>{ _ichingLock=false; }, 400);
  } else {
  $('#ichingThrowBtn').style.display = 'none';
  $('#ichingProgress').textContent   = 'Esagramma completo ✦';
  setTimeout(_renderIchingResult, 500);
  }
  }, 1200); // Mostra risultati per 1.2 secondi
  }, 800); // Attendi fine animazione
}

function ichingThrow(){
  ichingThrowAnimated();
}

function resetIching(){
  _ichingLinesData = [];
  _ichingLock = false;
  const resultEl = $('#ichingResult');
  resultEl.style.display = 'none';
  resultEl.innerHTML = '';
  $('#ichingForm').style.display   = 'block';
  $('#ichingQuestion').value = '';
  $('#ichingLines').innerHTML = '';
  $('#ichingThrowLabel').textContent = '🪙 Lancia le Monete — 1ª linea';
  $('#ichingProgress').textContent   = 'Linee generate: 0 / 6';
  $('#ichingThrowBtn').style.display = 'block';
}

function _throwThreeCoins(){
  let sum = 0;
  for(let i=0;i<3;i++) sum += Math.random()<0.5 ? 2 : 3;
  return sum; // 6=yin mut, 7=yang stab, 8=yin stab, 9=yang mut
}

let _ichingLock=false;

function _renderIchingLine(val, num){

  const isYang    = val === 7 || val === 9;
  const isMutante = val === 6 || val === 9;
  const label     = isYang
  ? (isMutante ? 'Yang mutante ○' : 'Yang ━━━')
  : (isMutante ? 'Yin mutante ✕'  : 'Yin ━ ━');
  const typeClass = isMutante ? 'changing' : (isYang ? 'yang' : 'yin');

  const graphic = isYang
  ? `<div class="iching-bar yang ${isMutante?'changing':''}"></div>`
  : `<div class="iching-bar yin-left ${isMutante?'changing':''}"></div>
  <div style="width:10px"></div>
  <div class="iching-bar yin-right ${isMutante?'changing':''}"></div>`;

  const lineEl = document.createElement('div');
  lineEl.className = 'iching-line';
  lineEl.innerHTML = `
  <span class="iching-line-num">${num}</span>
  <div class="iching-line-graphic">${graphic}</div>
  <span class="iching-line-type ${typeClass}">${label}</span>
  `;
  $('#ichingLines').appendChild(lineEl);
}

function _linesToHexNum(lines){

  const pattern = lines.map(v => (v===7||v===9) ? 1 : 0); // [basso→alto]

  for(const [num, hex] of Object.entries(DB_ICHING)){
  if(hex.linee.every((l,i) => l === pattern[i])) return parseInt(num);
  }
  return 1; // fallback
}

function _getMutatedHex(lines){
  const mutated = lines.map(v => {
  if(v===9) return 0; // yang mut → diventa yin
  if(v===6) return 1; // yin mut → diventa yang
  return v===7 ? 1 : 0;
  });
  for(const [num, hex] of Object.entries(DB_ICHING)){
  if(hex.linee.every((l,i) => l === mutated[i])) return parseInt(num);
  }
  return null;
}

function _hexLineSVG(lines, small=false){

  const size = small ? 'small' : '';
  return lines.map((l,i)=>{
  const graphic = l===1
  ? `<div class="iching-hex-bar yang"></div>`
  : `<div class="iching-hex-bar yin-l"></div><div style="width:8px"></div><div class="iching-hex-bar yin-r"></div>`;
  return `<div class="iching-hex-line">${graphic}</div>`;
  }).reverse().join(''); // visualizzato dal 6 al 1 (dall'alto al basso)
}

function _renderIchingResult(){
  const lines    = _ichingLinesData;
  const hexNum   = _linesToHexNum(lines);
  const hex      = DB_ICHING[hexNum];
  const question = ($('#ichingQuestion').value||'').trim();

  const mutLines    = lines.filter(v=>v===6||v===9);
  const hasMutanti  = mutLines.length > 0;
  const hexNum2     = hasMutanti ? _getMutatedHex(lines) : null;
  const hex2        = hexNum2 ? DB_ICHING[hexNum2] : null;

  const triInf = TRIGRAMMI[hex.tri_inf] || {};
  const triSup = TRIGRAMMI[hex.tri_sup] || {};

  const mutantiHtml = hasMutanti ? (() => {
  const msgs = lines.map((v,i)=>{
  if(v!==6 && v!==9) return '';
  const tipo = v===9 ? 'Yang mutante' : 'Yin mutante';
  return `<li style="margin-bottom:6px"><strong style="color:var(--gold);font-family:'Cinzel',serif;font-size:10px">Linea ${i+1} — ${tipo}</strong><br>
  <span style="font-size:12px;color:var(--text)">Questa linea è in trasformazione: porta un cambiamento specifico nel significato complessivo. ${v===9?'La forza Yang si trasforma in ricettività — rallenta l\'azione e ascolta.':'La ricettività Yin si trasforma in forza — è il momento di agire.'}</span></li>`;
  }).filter(Boolean).join('');
  return `
  <div class="iching-changing-notice">
  <h4>🔄 Linee Mutanti — Il Cambiamento in Atto</h4>
  <p>Il tuo esagramma contiene ${mutLines.length} linea/e mutante/i. Questo indica una situazione in rapido cambiamento. L\'esagramma primario descrive la situazione attuale; quello secondario mostra dove stai andando.</p>
  <ul style="margin:10px 0 0;padding-left:16px">${msgs}</ul>
  </div>`;
  })() : '';

  const hex2Html = hex2 ? `
  <div class="iching-second-hex">
  <div style="font-family:'Cinzel',serif;font-size:10px;color:var(--muted);letter-spacing:1.5px;margin-bottom:10px">✦ ESAGRAMMA SECONDARIO — DOVE VAI</div>
  <div class="iching-hex-display" style="width:60px;margin:0 auto 6px">${_hexLineSVG(hex2.linee)}</div>
  <div class="iching-hex-number">Esagramma ${hex2.num}</div>
  <div class="iching-hex-name">${hex2.nome}</div>
  <div class="iching-hex-chinese">${hex2.cinese}</div>
  <p style="font-size:12px;color:var(--muted);line-height:1.6;margin:8px 0 0">${hex2.significato.substring(0,180)}…</p>
  </div>` : '';

  const domandaHtml = question
  ? `<div class="geo-question-shown" style="margin-bottom:14px">❓ "${question}"</div>` : '';

  const el = $('#ichingResult');
  el.innerHTML = `
  <div class="iching-res">
  ${domandaHtml}
  <div class="iching-hex-display">${_hexLineSVG(hex.linee)}</div>
  <div class="iching-hex-number">Esagramma ${hex.num} · ${hex.cinese}</div>
  <div class="iching-hex-name">${hex.nome}</div>
  <div class="iching-hex-subtitle">Il Libro dei Mutamenti</div>

  <div class="iching-trigrams">
  <div class="iching-trigram">
  <div class="iching-trigram-label">TRIGRAMMA SUP.</div>
  <div class="iching-trigram-name">${triSup.cinese||''} ${triSup.nome||''}</div>
  <div class="iching-trigram-elem">${triSup.elem||''}</div>
  </div>
  <div class="iching-trigram">
  <div class="iching-trigram-label">TRIGRAMMA INF.</div>
  <div class="iching-trigram-name">${triInf.cinese||''} ${triInf.nome||''}</div>
  <div class="iching-trigram-elem">${triInf.elem||''}</div>
  </div>
  </div>

  <div class="iching-block">
  <h4>📜 Il Giudizio</h4>
  <p style="font-style:italic;color:var(--muted)">"${hex.giudizio}"</p>
  </div>
  <div class="iching-block">
  <h4>🖼️ L'Immagine</h4>
  <p style="font-style:italic;color:var(--muted)">"${hex.immagine}"</p>
  </div>
  <div class="iching-block">
  <h4>✨ Il Significato</h4>
  <p>${hex.significato}</p>
  </div>
  <div class="iching-block">
  <h4>💕 In Amore</h4>
  <p>${hex.amore}</p>
  </div>
  <div class="iching-block">
  <h4>💼 Nel Lavoro</h4>
  <p>${hex.lavoro}</p>
  </div>
  <div class="iching-block">
  <h4>🌟 Il Consiglio</h4>
  <p style="font-style:italic;color:var(--muted)">"${hex.consiglio}"</p>
  </div>
  ${mutantiHtml}
  ${hex2Html}
  <button class="btn btn-sec" onclick="resetIching()" style="margin-top:10px">🔄 Nuova Consultazione</button>
  </div>
  `;

  el.style.display = 'block';
  $('#ichingForm').style.display = 'none';
  burst();
  saveHistory('I Ching', `Esgr. ${hex.num} — ${hex.nome}${hasMutanti?' → '+hex2?.nome:''}`);
}

const DB_MAGIA = {
  bianca: [
  { t:'Purificazione con Sale e Acqua', scopo:'Rimuovere energie stagnanti dall\'ambiente o dal corpo.', mat:'Sale marino, acqua di sorgente, ciotola di vetro, candela bianca.', proc:'Sciogli 1 cucchiaio di sale nell\'acqua. Accendi la candela, recita 3 volte: <em>"Come l\'acqua scorre, ogni ombra si dissolve"</em>. Aspergi l\'ambiente o le mani visualizzando luce bianca. Lascia asciugare.', nota:'Ripeti ogni luna nuova.' },
  { t:'Benedizione della Casa con Salvia Bianca', scopo:'Purificare e proteggere gli spazi domestici.', mat:'Salvia bianca secca, campanello, incensiere resistente.', proc:'Apri finestre. Accendi la salvia, parti da nord-est e muovi in senso orario suonando il campanello ogni 3 passi. Recita: <em>"Luce e pace a questo luogo, via il peso, resta il fuoco sacro"</em>.' },
  { t:'Amuleto di Quarzo Trasparente', scopo:'Talismano di protezione e chiarezza mentale.', mat:'Cristallo di quarzo, cordino bianco, olio di lavanda.', proc:'Tieni il cristallo 5 min respirando. Aggiungi 1 goccia di lavanda, lega il cordino pronunciando il tuo nome e intento. Indossalo a sinistra o sotto il cuscino.' },
  { t:'Rituale di Guarigione con Lavanda e Camomilla', scopo:'Rilassamento profondo e recupero energetico.', mat:'Lavanda, camomilla, tazza bianca, acqua calda.', proc:'Prepara l\'infuso. Prima di bere, posa le mani sulla tazza, visualizza calore dorato nel petto. Bevi lentamente ripetendo: <em>"Il mio corpo sa guarire"</em>.' },
  { t:'Cerchio di Luce per Intenzioni', scopo:'Lancio etico di un desiderio con purezza d\'intento.', mat:'5 candele bianche, carta naturale, penna blu.', proc:'Disponi le candele in cerchio. Scrivi l\'intento al presente. Accendi partendo da est, gira il foglio al centro 3 volte. Lascia consumare o spegni con le dita.' },
  { t:'Carica Lunare dei Cristalli', scopo:'Rigenerare e purificare le pietre energetiche.', mat:'Cristalli, panno di seta, finestra esposta alla luna.', proc:'Pulisci i cristalli con il panno. Esponili alla luna piena tutta la notte. Al mattino, ringrazia e riponili.' },
  { t:'Bagno di Riconnessione Terrestre', scopo:'Radicamento e equilibrio emotivo profondo.', mat:'Argilla, sale grosso, oli essenziali di cedro e patchouli.', proc:'Sciogli nel bagno tiepido. Immergiti 15 min visualizzando radici che scendono nei piedi. Esci lentamente, asciugati senza fretta.' },
  { t:'Offerta agli Antenati', scopo:'Onorare la linea ancestrale e ricevere guida.', mat:'Acqua fresca, pane, candela bianca, foto o simbolo familiare.', proc:'Disponi gli oggetti su un altarino. Accendi la candela, versa l\'acqua a terra recitando: <em>"A chi è venuto prima, gratitudine e rispetto"</em>. Lascia 1 ora, poi smaltisci.' },
  { t:'Meditazione del Respiro Bianco', scopo:'Calma mentale e chiarezza interiore.', mat:'Luogo tranquillo, timer, candela.', proc:'Siediti, accendi la candela. Inspira 4 sec, trattieni 4, espira 6. Ripeti 10 cicli. Visualizza ogni respiro come luce che lava i pensieri.' },
  { t:'Rituale di Gratitudine Solare', scopo:'Attrarre abbondanza etica e riconoscere i doni.', mat:'Carta gialla, penna dorata, sole del mattino.', proc:'Scrivi 5 cose per cui sei grato/a. Esponi al sole 10 min. Piega la carta verso di te e conservala nel portafoglio.' },
  { t:'Protezione con Sale alle Soglie', scopo:'Barriera energetica domestica permanente.', mat:'Sale grosso, scopa, ciotolina.', proc:'Versa il sale lungo la soglia esterna. Ripassa con la scopa verso l\'esterno recitando: <em>"Solo ciò che è benedetto entra"</em>. Rifai ogni settimana.' },
  { t:'Infuso di Chiarezza Mentale', scopo:'Focus e decisione consapevole.', mat:'Rosmarino, menta, acqua, miele.', proc:'Prepara l\'infuso. Prima di bere, guarda il vapore e chiedi: <em>"Cosa devo vedere chiaramente?"</em>. Bevi lentamente, annota le intuizioni.' },
  { t:'Cerchio di Pace Familiare', scopo:'Armonia nelle relazioni domestiche.', mat:'4 candele bianche, foto di famiglia, camomilla secca.', proc:'Disponi le candele ai 4 angoli del tavolo. Accendile, spargi la camomilla al centro. Recita una preghiera o intenzione di pace. Lascia spegnere.' },
  { t:'Pulizia Energetica con Suono', scopo:'Rompere ristagni vibratori negli spazi.', mat:'Campana tibetana o ciotola, bacchetta.', proc:'Percorri le stanze in senso orario. Suona lentamente, lascia che le vibrazioni riempiano ogni angolo. Concentrati sul silenzio tra un suono e l\'altro.' },
  { t:'Rituale della Nuova Alba', scopo:'Rinascita dopo un periodo difficile.', mat:'Candela gialla, foglio, penna, acqua.', proc:'Scrivi ciò che lasci andare. Brucia il foglio in sicurezza. Accendi la candela, versa l\'acqua a terra dicendo: <em>"Rinasco con il sole"</em>.' },
  { t:'Amuleto di Erbe Sacre', scopo:'Protezione portatile per la vita quotidiana.', mat:'Sacchetto di lino, alloro, iperico, salvia.', proc:'Riempi il sacchetto, chiudilo con 3 nodi. Tienilo nella borsa o sotto il materasso. Rinova le erbe ogni 3 mesi.' },
  { t:'Meditazione del Cuore Aperto', scopo:'Compassione, perdono e apertura emotiva.', mat:'Candela rosa, cuscino.', proc:'Fissa la fiamma. Inspira amore, espira perdono. Ripeti: <em>"Accolgo, rilascio, amo"</em>. 10 minuti al giorno per 7 giorni.' },
  { t:'Rituale di Ringraziamento alla Natura', scopo:'Riconnessione ecologica e spirituale.', mat:'Frutta secca, acqua, albero o giardino.', proc:'Offri il cibo alla terra, versa l\'acqua alle radici. Ringrazia ad alta voce. Resta in silenzio 5 min ascoltando i suoni naturali.' },
  { t:'Pulizia del Sonno con Lavanda', scopo:'Sogni lucidi e riposo profondo rigenerante.', mat:'Sacchetto di lavanda, federa, candela blu.', proc:'Infila il sacchetto nella federa. Accendi la candela prima di dormire, spegnila recitando: <em>"La notte custodisce il mio riposo"</em>.' },
  { t:'Cerchio di Luce Globale', scopo:'Invio di energia positiva a tutto il mondo.', mat:'1 candela bianca, mappa, penna.', proc:'Traccia un cerchio sulla mappa intorno alla tua zona. Accendi la candela al centro. Visualizza luce che si espande. Recita: <em>"Pace e luce a tutti gli esseri"</em>.' },
  { t:'Acqua di Luna Piena', scopo:'Carica purificatrice per uso quotidiano.', mat:'Caraffa di vetro, acqua di sorgente.', proc:'Esponi la caraffa alla luna piena tutta la notte. Al mattino usa per aspergere viso e mani recitando: <em>"Luce che lava e rigenera"</em>.' },
  { t:'Meditazione dell\'Albero', scopo:'Radicamento e pazienza interiore.', mat:'Albero o pianta grande, cuscino.', proc:'Siediti vicino all\'albero. Visualizza radici che scendono dai tuoi piedi, rami che salgono dalle spalle. Respira in silenzio per 10 min.' },
  { t:'Cerchio di Sale Protettivo', scopo:'Scudo temporaneo durante pratiche spirituali.', mat:'Sale grosso, gesso.', proc:'Traccia un cerchio a terra intorno a te. Siediti dentro. Recita: <em>"Nessuna energia esterna mi tocca"</em>. Sciogli il cerchio dopo la pratica.' },
  { t:'Pulizia con Acqua e Limone', scopo:'Freschezza energetica rapida per ambienti.', mat:'2 limoni, acqua, spruzzatore.', proc:'Mescola il succo con l\'acqua. Spruzza negli angoli della stanza. <em>"Asprezza che pulisce, freschezza che rimane"</em>.' },
  { t:'Benedizione del Cibo', scopo:'Gratitudine e nutrimento consapevole.', mat:'Pasto, candela piccola.', proc:'Prima di mangiare, posa le mani sul piatto. Recita: <em>"Gratitudine per la terra, per le mani, per questo nutrimento"</em>.' },
  { t:'Rituale della Piuma Bianca', scopo:'Leggerezza e messaggi d\'intuizione.', mat:'Piuma trovata, nastro bianco.', proc:'Lega il nastro alla piuma. Tienila sulla scrivania. <em>"Leggerezza che guida, vento che porta chiarezza"</em>.' },
  { t:'Meditazione della Stella Polare', scopo:'Direzione e costanza nei momenti di crisi.', mat:'Cielo notturno o immagine della stella, coperta.', proc:'Fissa la stella. Inspira direzione, espira confusione. Ripeti: <em>"So dove vado, anche al buio"</em>.' },
  { t:'Carica Solare degli Oggetti', scopo:'Infondere vitalità e impulso all\'azione.', mat:'Oggetti da caricare, sole mattutino.', proc:'Esponi gli oggetti 30 min al sole. Toccali: <em>"Energia che attiva, volontà che si muove"</em>.' },
  { t:'Rituale del Respiro delle Stelle', scopo:'Espansione mentale e senso di appartenenza.', mat:'Luogo buio, timer.', proc:'Inspira visualizzando galassie, espira i tuoi limiti. 7 cicli. Recita: <em>"Sono parte del tutto"</em>.' },
  { t:'Benedizione delle Chiavi', scopo:'Protezione durante gli spostamenti quotidiani.', mat:'Chiavi, olio di rosmarino.', proc:'Aggiungi una goccia di olio al portachiavi. Recita: <em>"Apri porte sicure, chiudi vie pericolose"</em>.' },
  { t:'Cerchio di Erbe Fresche', scopo:'Armonia domestica quotidiana continua.', mat:'Menta, basilico, timo freschi.', proc:'Disponi le erbe a corona sul tavolo. Ricambiale quando appassiscono. <em>"Freschezza che protegge"</em>.' },
  { t:'Meditazione del Vuoto Bianco', scopo:'Reset mentale completo.', mat:'Cuscino, candela spenta.', proc:'Chiudi gli occhi. Immagina un foglio bianco. Ogni pensiero che arriva viene cancellato da una spugna luminosa. 10 min.' },
  { t:'Rituale della Rugiada', scopo:'Purezza e nuovo inizio all\'alba.', mat:'Bicchierino, erba con rugiada mattutina.', proc:'Raccogli gocce di rugiada. Toccaci polsi e fronte. <em>"Grazia che scende, rinnovamento che sale"</em>.' },
  { t:'Protezione con Specchio Tascabile', scopo:'Riflettere energie disturbanti in situazioni caotiche.', mat:'Specchio tascabile, panno.', proc:'Tieni lo specchio in borsa, chiuso. In situazioni caotiche, aprilo per 1 sec verso l\'esterno. <em>"Rifletto, non assorbo"</em>.' },
  { t:'Cerchio di Respiro Condiviso', scopo:'Sincronia energetica con persone care.', mat:'Nessuno.', proc:'Seduti fronte a fronte. Respira all\'unisono per 2 min. <em>"Stesso ritmo, stessa vibrazione"</em>.' },
  { t:'Rituale della Pietra Levigata', scopo:'Sviluppare pazienza e costanza.', mat:'Sasso liscio, tasca.', proc:'Portalo in tasca. Ogni volta che lo tocchi, respira 3 volte profondamente. <em>"Lento ma costante"</em>.' },
  { t:'Benedizione del Letto', scopo:'Sonno profondo riparatore.', mat:'Lavanda secca, lenzuola.', proc:'Spargi la lavanda tra le lenzuola. Recita: <em>"Riposo che rigenera, sogni che guidano"</em>.' },
  { t:'Meditazione del Respiro Radice', scopo:'Stabilità emotiva e radicamento.', mat:'Sedia o tappetino.', proc:'Inspira dal basso addome, espira sentendo la schiena. 10 cicli. <em>"Radici profonde, tronco saldo"</em>.' },
  { t:'Rituale del Vento Messaggero', scopo:'Liberare pensieri pesanti all\'aria aperta.', mat:'Luogo aperto, foglietto, penna.', proc:'Scrivi la preoccupazione. Lascia che il vento la porti via. <em>"Vado, vento, portalo via"</em>.' },
  { t:'Cerchio di Chiusura Serale', scopo:'Bilancio della giornata e pace notturna.', mat:'Candela piccola, diario.', proc:'Scrivi 3 cose fatte e 3 da lasciare andare. Spegni la candela. <em>"Giorno chiuso, notte custodisce"</em>.' }
  ],
  rossa: [
  { t:'Attrazione con Rosa e Miele', scopo:'Aprire il cuore a nuove connessioni amorose.', mat:'Rosa rossa, miele, ciotola, filo rosso.', proc:'Immergi 3 petali nel miele recitando: <em>"Attraggo amore che rispetta e fiorisce"</em>. Lega col filo, tieni nascosto. Rinova ogni 14 giorni.' },
  { t:'Specchio dell\'Amore', scopo:'Potenziare stima e comunicazione di coppia.', mat:'Specchio, 2 fogli, candela rossa.', proc:'Scrivi 3 qualità dell\'altro. Mettili sotto lo specchio. Accendi la candela, guarda il riflesso: <em>"Vedo te, vedi me, l\'amore specchia verità"</em>.' },
  { t:'Passione con Cannella', scopo:'Risvegliare vitalità, creatività e desiderio.', mat:'Stecca e polvere di cannella, olio di sesamo, ciotola.', proc:'Mescola polvere e olio. Traccia un cerchio sul petto. Respira 5 volte visualizzando fuoco dorato. Lava via con acqua tiepida.' },
  { t:'Legame del Filo Rosso', scopo:'Simboleggiare un patto amoroso consensuale.', mat:'Filo rosso, 2 perline.', proc:'Annoda il filo ai polsi reciproci o tieni le estremità. Recita: <em>"Non lego, non costringo. Solo ciò che è vero, resta"</em>. Indossa fino a consumo naturale.' },
  { t:'Bagno di Fiori e Zenzero', scopo:'Rimuovere blocchi emotivi che ostacolano l\'amore.', mat:'Petali di rosa, zenzero grattugiato, sale rosa.', proc:'Prepara il bagno. Immergiti recitando: <em>"Il cuore si apre, la paura si scioglie"</em>. Asciuga all\'aria.' },
  { t:'Rituale di Autostima allo Specchio', scopo:'Rafforzare il valore personale e l\'amore di sé.', mat:'Specchio, rossetto rosso, candela.', proc:'Disegna un cuore sullo specchio. Accendi la candela. Ripeti 10 volte: <em>"Sono degno/a di amore e rispetto"</em>. Bacia lo specchio.' },
  { t:'Incenso di Venere', scopo:'Attrazione e armonia nelle relazioni.', mat:'Rosa, sandalo, miele, carboncino.', proc:'Brucia il composto. Passa il fumo attorno al corpo e alla camera. Recita: <em>"Venere guida il mio cuore"</em>.' },
  { t:'Rituale della Mela Rossa', scopo:'Rinforzare un legame sentimentale esistente.', mat:'Mela rossa, ago, filo rosso.', proc:'Infila il filo nella mela 3 volte legandolo. Condividi la mela con il partner. Seppellisci i semi in terra fertile.' },
  { t:'Candela dell\'Incontro', scopo:'Prepararsi energeticamente a un nuovo amore.', mat:'Candela rossa, olio di rosa, foglio.', proc:'Scrivi le qualità che cerchi. Ungi la candela, accendila. Visualizza l\'incontro. Spegni con le dita dopo 15 min.' },
  { t:'Rituale del Profumo Personale', scopo:'Magnetismo, presenza e attrazione naturale.', mat:'Olio base, goccia di ylang-ylang, patchouli.', proc:'Miscela i oli. Applicalo ai polsi e al collo. Respira profondamente dicendo: <em>"La mia energia attira ciò che è giusto"</em>.' },
  { t:'Specchio di Riconciliazione', scopo:'Guarire conflitti e tensioni di coppia.', mat:'2 candele rosse, acqua, specchio.', proc:'Accendi le candele ai lati dello specchio. Versa l\'acqua in un bicchiere al centro. Bevete insieme recitando: <em>"L\'acqua lava, l\'amore resta"</em>.' },
  { t:'Rituale della Lettera d\'Amore', scopo:'Esprimere sentimenti repressi con coraggio.', mat:'Carta rossa, penna, sigillo di cera.', proc:'Scrivi senza filtri. Sigilla la lettera. Tienila 7 notti sotto il cuscino. Poi inviala o bruciala in sicurezza.' },
  { t:'Bagno di Passione Notturna', scopo:'Risvegliare la sensualità e la forza del corpo.', mat:'Petali di garofano, vino rosso, cannella.', proc:'Prepara il bagno. Immergiti lentamente. Bevi un sorso di vino. Visualizza il corpo che si riappropria della sua forza.' },
  { t:'Rituale del Nodo d\'Amore', scopo:'Stabilizzare e rafforzare un legame nel tempo.', mat:'Corda rossa, 3 nodi.', proc:'Fai il primo nodo per il passato, il secondo per il presente, il terzo per il futuro. Conserva la corda in un cassetto intimo.' },
  { t:'Incantesimo del Cioccolato', scopo:'Portare dolcezza e connessione emotiva.', mat:'Cioccolato fondente, menta, candela rosa.', proc:'Sciogli il cioccolato. Aggiungi menta. Mangia lentamente guardando la candela. Ringrazia il corpo per la gioia.' },
  { t:'Rituale della Rosa sotto il Cuscino', scopo:'Sogni d\'amore e chiarimenti interiori.', mat:'Rosa secca, sacchetto di velluto.', proc:'Metti la rosa nel sacchetto. Posizionala sotto il cuscino per 3 notti consecutive. Annota i sogni al risveglio.' },
  { t:'Cerchio di Attrazione Sociale', scopo:'Aumentare carisma e creare nuove amicizie.', mat:'5 candele rosa, incenso dolce.', proc:'Disponi le candele a stella. Brucia l\'incenso. Cammina al centro visualizzando sorrisi e conversazioni leggere.' },
  { t:'Rituale del Braccialetto di Corallo', scopo:'Protezione e attrazione dell\'energia vitale.', mat:'Perline di corallo (o vetro rosso), filo rosso.', proc:'Infila 13 perline. Indossa al polso destro. Recita: <em>"La mia energia brilla senza consumarsi"</em>.' },
  { t:'Meditazione del Cuore Ardente', scopo:'Equilibrio armonioso tra passione e ragione.', mat:'Cuscino, candela rossa.', proc:'Fissa la fiamma. Inspira calore, espira chiarezza. 10 min. Ripeti: <em>"Amo con fuoco, scelgo con mente"</em>.' },
  { t:'Rituale di Chiusura Amorosa Etica', scopo:'Lasciare andare una relazione con rispetto.', mat:'Foto o oggetto, candela bianca, acqua.', proc:'Accendi la candela. Ringrazia per ciò che è stato. Versa l\'acqua sull\'oggetto o foto. Lascia asciugare, poi conservalo o seppelliscilo in pace.' },
  { t:'Sguardo di Connessione', scopo:'Creare intimità non verbale profonda.', mat:'Partner consenziente, candela.', proc:'Seduti fronte a fronte. 2 min di contatto visivo senza parlare. Respirate insieme. <em>"Vedo te, mi vedi"</em>.' },
  { t:'Diario del Cuore', scopo:'Esplorare il proprio mondo emotivo.', mat:'Quaderno, penna rossa.', proc:'Per 7 sere scrivi cosa desideri in amore, cosa temi, cosa offri. Rileggi e integra le risposte.' },
  { t:'Olio di Rosmarino e Rosa', scopo:'Chiarezza mentale e apertura del cuore.', mat:'Olio vettore, essenza di rosmarino e rosa.', proc:'Miscela. Massaggia tempie e petto prima di incontri sociali. <em>"Mente chiara, cuore aperto"</em>.' },
  { t:'Balzo di Cuore', scopo:'Liberare la timidezza attraverso il movimento.', mat:'Musica ritmata, spazio libero.', proc:'5 min di ballo libero senza giudicarti. Lascia che il corpo parli. Ringrazia il corpo alla fine.' },
  { t:'Lettera al Sé Amante', scopo:'Autocompassione e cura di sé.', mat:'Carta, penna.', proc:'Scrivi come parleresti al tuo amore ideale, ma rivolgendoti a te stesso/a. Custodisci e rileggi nei momenti di dubbio.' },
  { t:'Cerchio delle Mani', scopo:'Supporto e connessione di gruppo.', mat:'Persone consenzienti.', proc:'Mani unite al centro. 3 respiri sincronizzati. <em>"Uniti nel rispetto, liberi nell\'amore"</em>.' },
  { t:'Rituale del Tè Condiviso', scopo:'Armonia quotidiana nella coppia o con amici.', mat:'Tè, 2 tazze.', proc:'Preparate insieme. Bevete in silenzio per 2 min. Parla solo di gratitudine reciproca.' },
  { t:'Specchio del Desiderio', scopo:'Chiarire ciò che cerchi davvero in amore.', mat:'Specchio, penna lavabile.', proc:'Scrivi sul vetro 3 qualità relazionali che vuoi. Guarda il riflesso mentre le pronunci. Cancella con acqua.' },
  { t:'Bagno di Rose e Latte', scopo:'Tenerezza, accoglienza e apertura emotiva.', mat:'Latte tiepido, petali di rosa.', proc:'Immergiti. Visualizza il calore che scioglie le difese. <em>"Accolgo, sono accolto/a"</em>.' },
  { t:'Rituale della Promessa Silenziosa', scopo:'Impegno interiore verso se stessi in amore.', mat:'Nessuno.', proc:'Mano sul cuore. Ripeti mentalmente 3 volte ciò che prometti a te stesso/a in amore. Senti il peso sacro del gesto.' },
  { t:'Pietra del Cuore', scopo:'Ancoraggio emotivo nella vita quotidiana.', mat:'Quarzo rosa o diaspro, tasca.', proc:'Tienila a contatto con la pelle. Ogni volta che la tocchi, respira lentamente: <em>"Sono sicuro/a nell\'amare"</em>.' },
  { t:'Danza della Luna Piena', scopo:'Espressione emotiva ciclica e liberazione.', mat:'Spazio aperto, musica soft.', proc:'10 min di movimento lento seguendo il respiro. Lascia che il corpo racconti ciò che le parole non dicono.' },
  { t:'Rituale del Perdono Reciproco', scopo:'Alleggerire il carico relazionale.', mat:'2 fogli, candela.', proc:'Ognuno scrive un piccolo risentimento. Scambiate i fogli. Bruciateli insieme: <em>"Lascio andare, scelgo pace"</em>.' },
  { t:'Profilo Energetico di Coppia', scopo:'Sincronia e consapevolezza condivisa.', mat:'Diario condiviso.', proc:'Ogni domenica scrivete 1 cosa che vi ha uniti e 1 da migliorare. Leggete ad alta voce.' },
  { t:'Rituale del Primo Sguardo', scopo:'Rinnovare l\'attrazione nella quotidianità.', mat:'Partner.', proc:'Entrate nella stanza come se fosse la prima volta. Osservate per 30 sec senza parlare. Sorridete.' },
  { t:'Candela della Volontà d\'Amare', scopo:'Scelta consapevole e libera di amare.', mat:'Candela rossa.', proc:'Accendi la candela. Recita: <em>"Amo perché scelgo, non perché devo"</em>. Lascia bruciare 15 min.' },
  { t:'Bagno di Rinnovamento Sociale', scopo:'Apertura a nuove connessioni umane.', mat:'Sale, agrumi.', proc:'Strofinaci polsi e caviglie. <em>"Porto leggerezza, incontro chi risuona"</em>.' },
  { t:'Rituale della Parola Gentile', scopo:'Nutrire le relazioni con apprezzamento concreto.', mat:'Nessuno.', proc:'3 volte al giorno, esprimi una parola specifica di apprezzamento a qualcuno. Osserva l\'effetto sulle relazioni.' },
  { t:'Specchio dell\'Accettazione', scopo:'Amare il sé reale con le sue imperfezioni.', mat:'Specchio, luce morbida.', proc:'Guarda il volto. Nomina 3 imperfezioni e trasformale mentalmente in tratti unici. <em>"Sono completo/a così"</em>.' },
  { t:'Cerchio di Chiusura Amorosa', scopo:'Gratitudine per ciò che è stato.', mat:'Fiore secco, ciotola.', proc:'Spezza il fiore con rispetto. <em>"Grazie per ciò che hai insegnato. Vado avanti con rispetto"</em>. Conserva o restituisci alla terra.' }
  ],
  nera: [
  { t:'Scongiuro contro Malocchio', scopo:'Neutralizzare invidie e energie negative ricevute.', mat:'Olio d\'oliva, acqua, ciotola, ago di ferro.', proc:'Riempi d\'acqua, versa 3 gocce d\'olio. Se l\'olio si disperde, è assorbito. Se forma bolle, immergi l\'ago: <em>"Ciò che è lanciato si spezza"</em>. Versa in terra lontana.' },
  { t:'Legame Difensivo', scopo:'Fermare energia nociva proveniente dall\'esterno.', mat:'Filo nero, sasso scuro, candela nera, foglio.', proc:'Scrivi ciò da fermare. Avvolgi nel filo: <em>"Ciò che nuoce resta fermo"</em>. Appoggia il sasso. Tieni chiuso fino a risoluzione, poi brucia.' },
  { t:'Lavoro con l\'Ombra', scopo:'Integrare paure negate e aspetti nascosti di sé.', mat:'Diario, penna nera, candela grigia.', proc:'In luna calante, scrivi 3 cose evitate. Leggi ad alta voce. Rispondi: <em>"Cosa mi insegnano?"</em>. Conserva. Ripeti ogni 3 mesi.' },
  { t:'Rituale di Chiusura', scopo:'Chiudere cicli tossici in modo definitivo.', mat:'Foglio, forbici, sacchetto nero, terra.', proc:'Scrivi la situazione. Taglia in 4. Metti nel sacchetto: <em>"Ciò che è finito resta chiuso"</em>. Seppellisci o tieni in luogo buio.' },
  { t:'Specchio di Difesa', scopo:'Scudo energetico contro intenzioni negative altrui.', mat:'Specchio cornice nera, sale, cordino.', proc:'Cospargi i bordi di sale. Posiziona verso la fonte di disturbo. Tocca il vetro: <em>"La mia soglia è sacra"</em>. Rinnova sale ogni luna piena.' },
  { t:'Cerchio di Ferro', scopo:'Barriera fisica e simbolica di protezione della casa.', mat:'Chiodi o oggetti di ferro, sale.', proc:'Disponi gli oggetti lungo il perimetro di casa. Versa sale dietro. Recita: <em>"Il ferro taglia, il sale purifica"</em>. Controlla mensilmente.' },
  { t:'Rituale di Silenzio', scopo:'Neutralizzare pettegolezzi e voci false.', mat:'Ago, filo nero, pezzo di stoffa.', proc:'Cuci la stoffa chiudendola: <em>"Le bocche si chiudono, la verità resta"</em>. Conserva in cassaforte o cassetto bloccato.' },
  { t:'Bagno di Scarico Energetico', scopo:'Rimuovere pesi e residui energetici accumulati.', mat:'Sale nero, carbone attivo, aceto, acqua.', proc:'Sciogli nel bagno. Immergiti visualizzando il nero che esce dai pori. Esci, sciacqua con acqua dolce. Non riutilizzare l\'acqua.' },
  { t:'Rituale della Corda Tagliata', scopo:'Staccarsi definitivamente da dipendenze emotive.', mat:'Corda di iuta, forbici, candela nera.', proc:'Tieni la corda rappresentante il legame. Tagliala al centro: <em>"Io mi scelgo, il resto si dissolve"</em>. Brucia i pezzi in sicurezza.' },
  { t:'Protezione Notturna con Aglio', scopo:'Scudo energetico durante il sonno.', mat:'3 spicchi d\'aglio, sacchetto di tela.', proc:'Metti gli spicchi nel sacchetto. Appendilo alla testiera del letto. Recita: <em>"La notte è mia, ciò che è oscuro resta fuori"</em>. Sostituisci quando appassiscono.' },
  { t:'Rituale di Ritorno al Mittente', scopo:'Rimandare energia negativa senza ritorsione attiva.', mat:'Specchio rivolto verso l\'esterno, sale, acqua.', proc:'Posiziona lo specchio verso la porta o finestra. Versa sale e acqua alla base: <em>"Ciò che è mio torna, ciò che non è mio si ferma"</em>.' },
  { t:'Lavoro con la Terra Nera', scopo:'Radicamento e guarigione dopo traumi profondi.', mat:'Terra scura, vaso, semi di basilico.', proc:'Pianta i semi nella terra. Ogni volta che annaffi, dì: <em>"Ciò che è marcio nutre, ciò che è vivo cresce"</em>. Osserva la germinazione.' },
  { t:'Rituale della Chiave Chiusa', scopo:'Bloccare intrusioni fisiche ed energetiche.', mat:'Vecchia chiave, ceralacca nera, nastro.', proc:'Sigilla la chiave con la cera. Legala con il nastro. Tienila vicino alla porta d\'ingresso: <em>"Ciò che non è invitato, non entra"</em>.' },
  { t:'Meditazione dell\'Abisso', scopo:'Accettazione del vuoto e preparazione alla rinascita.', mat:'Luogo buio, tappetino, campana.', proc:'Siediti al buio. Suona la campana. Ascolta il silenzio che segue. Non opporre resistenza al vuoto. Resta 15 min.' },
  { t:'Rituale del Nome Nascosto', scopo:'Protezione profonda dell\'identità e dell\'essenza.', mat:'Carta, penna, scatola di legno.', proc:'Scrivi il tuo nome completo. Piega la carta 3 volte verso di te. Mettila nella scatola: <em>"Ciò che è mio resta nascosto"</em>. Conserva al sicuro.' },
  { t:'Cerchio di Cenere', scopo:'Purificazione profonda dopo un conflitto o rottura.', mat:'Cenere di legno o erbe, gesso.', proc:'Traccia un cerchio a terra. Stai al centro. Visualizza il conflitto trasformarsi in cenere. Esci dal cerchio senza guardare indietro.' },
  { t:'Rituale del Pugno Chiuso', scopo:'Affermazione di confine personale con forza.', mat:'Nessuno — solo intenzione e corpo.', proc:'Chiudi il pugno destro. Stringi forte 10 sec. Rilascia: <em>"Il mio limite è legge"</em>. Ripeti 3 volte. Senti la fermezza nel corpo.' },
  { t:'Offerta alla Notte', scopo:'Rispetto e onore per l\'oscurità necessaria.', mat:'Acqua scura, pane nero, candela spenta.', proc:'Esponi gli oggetti al buio per 1 ora. Non accendere fiamme. Ringrazia l\'oscurità per il riposo e la protezione. Riponi al mattino.' },
  { t:'Rituale della Pietra Pesante', scopo:'Scarico fisico di stress emotivo accumulato.', mat:'Sasso levigato, acqua corrente.', proc:'Tieni il sasso, trasferiscigli il peso emotivo. Gettalo in un fiume o mare: <em>"L\'acqua porta via ciò che non serve"</em>. Non recuperarlo.' },
  { t:'Trasformazione dell\'Ombra in Luce', scopo:'Alchimia interiore — integrare luce e oscurità.', mat:'Candela nera e bianca, specchio.', proc:'Accendi entrambe. Guarda il riflesso: <em>"Ciò che è oscuro mi insegna, ciò che è chiaro mi guida"</em>. Spegni la nera, lascia la bianca. Conserva la cera fusa come talismano.' },
  { t:'Diario della Rabbia', scopo:'Trasmutare la collera in energia consapevole.', mat:'Quaderno, penna.', proc:'Scrivi tutto senza filtro. Strappa la pagina. Brucia in sicurezza. <em>"Fuoco che pulisce, non distrugge"</em>.' },
  { t:'Rituale del Confinamento', scopo:'Delimitare spazi emotivi e confini personali.', mat:'Gesso o nastro.', proc:'Traccia una linea a terra. <em>"Qui finisco io, lì inizi tu"</em>. Oltrepassa solo con consenso reciproco.' },
  { t:'Bagno di Assenzio', scopo:'Protezione e chiarezza severa.', mat:'Assenzio secco, acqua.', proc:'Prepara un decotto, filtra e aggiungilo al bagno. <em>"Amarezza che sveglia, lucidità che protegge"</em>.' },
  { t:'Cerchio di Pietre Scure', scopo:'Ancoraggio in momenti di crisi intensa.', mat:'7 pietre levigate nere o grigie.', proc:'Disponi le pietre in cerchio attorno a te. Toccale una a una. <em>"Stabilità, peso, presenza"</em>.' },
  { t:'Rituale del Silenzio Interiore', scopo:'Spegnere le voci interne negative.', mat:'Cuffie o luogo silenzioso.', proc:'5 min di silenzio totale. Quando arriva il pensiero negativo, visualizzalo dissolversi in polvere. Non reagire.' },
  { t:'Scudo di Cenere e Sale', scopo:'Protezione quotidiana rapida.', mat:'Ciotolina, cenere, sale.', proc:'Mescola. Tocca fronte e petto. <em>"Cenere assorbe, sale sigilla"</em>. Lava le mani dopo.' },
  { t:'Rituale della Soglia Invisibile', scopo:'Barriera mentale in luoghi stressanti.', mat:'Nessuno.', proc:'Prima di entrare in un luogo stressante, immagina un vetro spesso tra te e l\'esterno. <em>"Vedo, non assorbo"</em>.' },
  { t:'Bagno di Aceto e Sale', scopo:'Rimuovere legami energetici non voluti.', mat:'Aceto bianco, sale grosso.', proc:'Sciogli in un catino. Lava mani e piedi. <em>"Ciò che non ho scelto, scivola via"</em>.' },
  { t:'Meditazione del Drago Interiore', scopo:'Risvegliare la forza protettiva interiore.', mat:'Cuscino, musica bassa.', proc:'Visualizza un drago nero che dorme nel petto. Sveglialo con il respiro profondo. <em>"Proteggo, non attacco"</em>.' },
  { t:'Rituale della Parola Tagliente', scopo:'Affermare i confini con fermezza.', mat:'Specchio.', proc:'Guarda il riflesso. Di\' ad alta voce: <em>"No. Basta. Non ora."</em>. Ripeti finché non senti fermezza nel corpo.' },
  { t:'Cerchio di Ombra Consapevole', scopo:'Accettare le parti difficili di sé.', mat:'Candela spenta, diario.', proc:'Scrivi 3 tratti che giudichi negativamente. Accanto, scrivi come possono proteggerti. Integra le risposte.' },
  { t:'Bagno di Carbone Attivo', scopo:'Detox energetico intenso.', mat:'Polvere di carbone, acqua tiepida.', proc:'Mescola e versa in un catino. Immergi mani e braccia. <em>"Assorbe, non trattiene"</em>. Risciacqua abbondantemente.' },
  { t:'Rituale della Chiave che Gira', scopo:'Chiudere porte energetiche indesiderate.', mat:'Chiave reale.', proc:'Tienila in mano. Gira in senso antiorario 3 volte. <em>"Porta chiusa, chiave mia"</em>. Mettila in tasca.' },
  { t:'Meditazione del Vuoto Protettivo', scopo:'Creare spazio tra stimolo e reazione.', mat:'Sedia.', proc:'Inspira 4, trattieni 4, espira 6. Nel vuoto tra espirazione e inspirazione, di\': <em>"Scelgo io"</em>.' },
  { t:'Rituale del Sale alle Finestre', scopo:'Protezione ambientale continua.', mat:'Sale, 4 piattini.', proc:'Posa i piattini sui davanzali. <em>"Vento passa, pesantezza resta fuori"</em>. Cambia il sale quando diventa umido.' },
  { t:'Cerchio di Respiro Nero', scopo:'Scarico immediato di tensioni.', mat:'Nessuno.', proc:'Espira forte dalla bocca 3 volte, come se soffiassi via polvere nera. Inspira normalmente. Ripeti 5 cicli.' },
  { t:'Rituale della Terra che Assorbe', scopo:'Restituire il peso emotivo alla natura.', mat:'Vaso con terra, foglio.', proc:'Scrivi il tuo peso su carta. Seppellisci. <em>"La terra trasforma, io resto leggero"</em>. Annaffia la terra.' },
  { t:'Meditazione del Confine di Fuoco', scopo:'Difesa attiva senza aggressione.', mat:'Candela rossa.', proc:'Fissa la fiamma. Visualizza un cerchio di fuoco basso attorno a te. <em>"Chi entra con rispetto, resta. Chi entra con forza, si ferma"</em>.' },
  { t:'Rituale del Nome Tagliato', scopo:'Staccarsi da identità e ruoli imposti da altri.', mat:'Carta, forbici.', proc:'Scrivi il nome o l\'etichetta che altri ti hanno dato. Taglia in 4. <em>"Io decido chi sono"</em>. Brucia o getta.' },
  { t:'Cerchio di Chiusura Oscura', scopo:'Concludere un ciclo protettivo con intenzione.', mat:'Candela nera, sale.', proc:'Accendi la candela. Versa il sale attorno. <em>"Ciclo chiuso, difesa sciolta, pace resta"</em>. Spegni, conserva la cera.' }
  ],
  malocchio: [
  { t:'👁️ Come Riconoscerlo', scopo:'Segnali fisici, ambientali ed emotivi da osservare.', mat:'Solo consapevolezza e attenzione.', proc:'<strong>Fisici:</strong> Mal di testa persistente, stanchezza insolita, insonnia, senso di pesantezza.<br><strong>Ambientali:</strong> Piante che appassiscono senza motivo, oggetti che si rompono, animali domestici irrequieti.<br><strong>Emotivi:</strong> Ansia ingiustificata, irritabilità, sensazione di essere costantemente osservati.<br><em>⚠️ Escudi sempre cause mediche o psicologiche prima di ricorrere a pratiche spirituali.</em>' },
  { t:'🔍 Test Olio e Acqua', scopo:'Verifica tradizionale della presenza di malocchio.', mat:'Piatto fondo, acqua, olio vergine d\'oliva.', proc:'Versa acqua nel piatto. Aggiungi 3 gocce di olio al centro. Se l\'olio si allarga normalmente = assente. Se forma bollicine o "occhi" = possibile presenza. Ripeti 3 volte per conferma.' },
  { t:'✂️ Rimozione con Forbici e Sale', scopo:'Tagliare energeticamente il legame del malocchio.', mat:'Forbici, sale, candela, foglio.', proc:'Scrivi "INVIDIA" sul foglio. Versa sale sopra. Apri e chiudi le forbici 3 volte recitando: <em>"Si taglia ciò che è stato lanciato, ciò che è mio resta integro"</em>. Brucia il foglio in sicurezza.' },
  { t:'🌿 Bagno di Erbe Amare', scopo:'Sciogliere il peso del malocchio attraverso l\'acqua.', mat:'Assenzio, rosmarino, ruta, sale nero.', proc:'Prepara un decotto con le erbe, filtra e aggiungilo al bagno. Immergiti 15 min visualizzando il nero che scende via. Risciacqua con acqua pulita. Non riutilizzare l\'acqua del bagno.' },
  { t:'🕯️ Candela Rivelatrice', scopo:'Lettura della fiamma e scioglimento tramite fuoco.', mat:'Candela grigia o nera.', proc:'Accendi la candela. Fiamma alta e stabile = assenza. Fiamma tremante con cera che "piange" = carico presente. Lasciala consumare completamente. Seppellisci i residui di cera in terra.' },
  { t:'🛡️ Cornetto di Corallo', scopo:'Amuleto tradizionale di protezione continua.', mat:'Cornetto di corallo o ceramica rossa, cordino rosso.', proc:'Indossa al lato sinistro o tienilo nella borsa. Purificalo passandolo nel fumo di salvia. <em>"Protegge senza offendere"</em>. Non regalarlo — perde il potere protettivo.' },
  { t:'🌊 Scioglimento con Acqua Corrente', scopo:'Restituzione etica del malocchio al ciclo naturale.', mat:'Ciotola, acqua, 3 sassi, limone.', proc:'Sfrega il limone su polsi e collo. Aggiungi i sassi nell\'acqua. Recita: <em>"L\'acqua lava, la pietra assorbe, la natura riprende il ciclo"</em>. Versa l\'acqua lontano da casa.' },
  { t:'🌙 Sale ai Davanzali', scopo:'Prevenzione notturna del malocchio.', mat:'4 ciotoline, sale grosso.', proc:'Posiziona una ciotolina su ogni davanzale di casa. <em>"Soglia chiusa, sonno sacro"</em>. Sostituisci quando il sale diventa grigio o umido.' },
  { t:'📿 Respiro del Campo Protettivo', scopo:'Costruire un campo energetico personale stabile.', mat:'Luogo silenzioso.', proc:'Inspira 4 sec visualizzando una sfera dorata che si espande, trattieni 4, espira 6 compattandola. 9 cicli al giorno. Pratica per 21 giorni consecutivi per risultati duraturi.' },
  { t:'⚖️ Restituzione Etica alla Luce', scopo:'Liberarsi senza alimentare la ritorsione.', mat:'Specchio, panno nero, candela bianca.', proc:'Copri lo specchio con il panno. Accendi la candela. Recita: <em>"Ciò che non mi appartiene torna alla luce, non alla fonte"</em>. Scopri lo specchio lentamente. Lava il panno al sole.' },
  { t:'📖 Nota Storica ed Etica', scopo:'Contesto culturale e orientamento responsabile.', mat:'Sola lettura e riflessione.', proc:'<strong>Origine:</strong> Il malocchio è documentato nelle culture mediterranee, mediorientali e sudamericane come proiezione inconscia di invidia o ammirazione intensa.<br><strong>Etica:</strong> Nessuna tradizione evoluta insegna a lanciare il malocchio consapevolmente. Il vero potere è nella protezione, non nella ritorsione.<br><strong>Consiglio pratico:</strong> Se un malessere persiste nonostante le pratiche, rivolgiti sempre a un professionista medico o psicologico. La magia è complemento, non sostituto.' }
  ]
};

let _magiaInited = false;

function initMagia(){
  if(_magiaInited) return;
  _magiaInited = true;

  ['bianca','rossa','nera','malocchio'].forEach(tipo => {
  const container = $('#magiaList-'+tipo);
  if(!container) return;
  const rituali = DB_MAGIA[tipo];
  const accentColors = { bianca:'var(--gold-dim)', rossa:'#c05050', nera:'#606080', malocchio:'#1a6b90' };
  container.innerHTML = rituali.map((r,i) => `
  <div class="magia-ritual" onclick="toggleRituale(this)">
  <div class="magia-ritual-head">
  <span class="magia-ritual-num">${String(i+1).padStart(2,'0')}</span>
  <span class="magia-ritual-title">${r.t}</span>
  <span class="magia-ritual-toggle">▾</span>
  </div>
  <div class="magia-ritual-body">
  <div class="magia-field">
  <div class="magia-field-label">🎯 Scopo</div>
  <div class="magia-field-text">${r.scopo}</div>
  </div>
  <div class="magia-field">
  <div class="magia-field-label">🧿 Materiali</div>
  <div class="magia-field-text">${r.mat}</div>
  </div>
  <div class="magia-field">
  <div class="magia-field-label">📜 Procedura</div>
  <div class="magia-field-text">${r.proc}</div>
  </div>
  ${r.nota ? `<div class="magia-field"><div class="magia-field-label">✦ Nota</div><div class="magia-field-text">${r.nota}</div></div>` : ''}
  </div>
  </div>
  `).join('');
  });

  const magiaView = document.getElementById('view-magia');
  if (magiaView) {
  magiaView.querySelectorAll('.magia-tab').forEach(tab => {
  tab.addEventListener('click', () => {
  magiaView.querySelectorAll('.magia-tab').forEach(t => t.classList.remove('active'));
  magiaView.querySelectorAll('.magia-panel').forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  const targetPanel = magiaView.querySelector('#magiaPanel-'+tab.dataset.panel);
  if (targetPanel) targetPanel.classList.add('active');
  });
  });
  }
}

function toggleRituale(el){
  el.classList.toggle('open');
}

const DB_LIBRO = [
  { risposta:'Sì',                   sub:'Le forze dell\'universo sostengono questa direzione. Procedi con fiducia.' },
  { risposta:'Assolutamente sì',     sub:'Non c\'è dubbio. Il momento è tuo — agisci.' },
  { risposta:'Sì, se ci credi',      sub:'La tua fede è il catalizzatore. Più credi, più si manifesta.' },
  { risposta:'Non ora',              sub:'Il momento non è ancora maturo. La pazienza è saggezza.' },
  { risposta:'No',                   sub:'Questa direzione non è per te. Fidati di questa risposta.' },
  { risposta:'Aspetta',              sub:'Qualcosa di più chiaro si rivelerà presto. Trattieni l\'azione.' },
  { risposta:'Sì, ma con cautela',   sub:'La strada è aperta, ma cammina con gli occhi attenti.' },
  { risposta:'Senza dubbio',         sub:'L\'universo ha già risposto prima che tu chiedessi.' },
  { risposta:'È possibile',          sub:'La possibilità esiste — sei tu a doverla alimentare.' },
  { risposta:'Forse',                sub:'La risposta dipende dalle scelte che farai oggi.' },
  { risposta:'Concentrati',          sub:'La dispersione è il tuo ostacolo. Un passo alla volta.' },
  { risposta:'Lascia andare',        sub:'Ciò a cui ti aggrappi ti sta fermando. Apri le mani.' },
  { risposta:'Fidati di te',         sub:'La risposta che cerchi è già dentro di te. Ascoltala.' },
  { risposta:'Chiedi di nuovo',      sub:'La mente non è ancora chiara. Torna quando c\'è silenzio.' },
  { risposta:'Il tempo dirà',        sub:'Questa domanda ha bisogno di tempo per svelare la sua risposta.' },
  { risposta:'Decisamente no',       sub:'Questa porta è chiusa. Ne troverai un\'altra più adatta.' },
  { risposta:'Non di questo passo',  sub:'La direzione è giusta, ma la velocità va cambiata.' },
  { risposta:'Stai sbagliando strada', sub:'Fermati. Guarda intorno — c\'è un percorso diverso che ti aspetta.' },
  { risposta:'È già scritto',        sub:'Ciò che deve accadere accadrà. Non combattere il flusso.' },
  { risposta:'Conta su di esso',     sub:'Questa è una certezza. Puoi costruirci sopra.' },
  { risposta:'Trasformati',          sub:'La risposta non riguarda la situazione fuori, ma chi sei dentro.' },
  { risposta:'Il coraggio ti serve', sub:'Sai già cosa fare. Ti manca solo il coraggio di farlo.' },
  { risposta:'Non è il momento',     sub:'L\'universo dice aspetta. Non cedere all\'impazienza.' },
  { risposta:'Segui il cuore',       sub:'La logica ti confonde qui. Il cuore sa la strada.' },
  { risposta:'Sì, presto',           sub:'Ciò che desideri si sta avvicinando. Rimani aperto.' },
  { risposta:'Quasi certamente',     sub:'Le probabilità sono dalla tua parte. Continua.' },
  { risposta:'Non ancora',           sub:'Il frutto non è maturo. Arriverà il momento giusto.' },
  { risposta:'Guarda dentro',        sub:'La risposta esterna che cerchi nasce da un cambiamento interiore.' },
  { risposta:'Vai avanti',           sub:'Non guardare indietro. Il passo davanti a te è quello giusto.' },
  { risposta:'Fermati e rifletti',   sub:'L\'azione ora porterebbe rimpianti. La riflessione è il tuo potere.' },
  { risposta:'Con ogni probabilità', sub:'I segnali indicano di sì. Fidati del processo.' },
  { risposta:'Solo tu puoi saperlo', sub:'Questa risposta non appartiene al libro. Appartiene a te.' },
  { risposta:'Le stelle dicono sì',  sub:'L\'energia cosmica sostiene questa intenzione in questo momento.' },
  { risposta:'Il momento è tuo',     sub:'Non aspettare che qualcuno ti dia il permesso. Agisci.' },
  { risposta:'Cambia prospettiva',   sub:'Visto da un altro angolo, la risposta sarà chiara.' },
  { risposta:'Nella quiete troverai', sub:'Smetti di cercare fuori. Silenzia il rumore.' },
  { risposta:'Non dipende da te',    sub:'Alcune cose non si controllano. Impara a lasciare che siano.' },
  { risposta:'Sii paziente',         sub:'La virtù più difficile è la più necessaria. Aspetta con fede.' },
  { risposta:'Il destino guida',     sub:'Ciò che sembra casuale ha un disegno. Fidati.' },
  { risposta:'Riprova tra poco',     sub:'Le condizioni cambieranno presto. La prossima risposta sarà diversa.' },
  { risposta:'Con determinazione',   sub:'La volontà è tutto ciò che ti manca. Radunala.' },
  { risposta:'Non cedere',           sub:'Il momento di difficoltà passerà. Tieni duro.' },
  { risposta:'Abbandona il dubbio',  sub:'Il dubbio è l\'unico vero ostacolo. Scegli la fede.' },
  { risposta:'Sì, se agisci ora',    sub:'La finestra è aperta ma non per sempre. Muoviti.' },
  { risposta:'Ascolta il silenzio',  sub:'Nelle pause tra i pensieri si nasconde la risposta.' },
  { risposta:'Certo come il sole',   sub:'Non c\'è forza che possa impedire ciò che è destinato.' },
  { risposta:'Impossibile ora',      sub:'Non è questo il momento. La vita ti sta preparando per qualcosa di meglio.' },
  { risposta:'Libera te stesso',     sub:'Sei tu la prigione e la chiave. Scegli di aprire.' },
  { risposta:'Il nuovo ti aspetta',  sub:'Ciò che ti tiene nel passato ti impedisce il futuro.' },
  { risposta:'Rallenta',             sub:'La fretta è il tuo nemico in questo momento. Respira.' },
  { risposta:'Sì, con tutto il cuore', sub:'Quando è un sì pieno, lo senti nelle ossa. È questo.' },
  { risposta:'Cambia approccio',     sub:'Lo stesso metodo non porta risultati diversi. Prova altrove.' },
  { risposta:'La risposta ti sorprenderà', sub:'Ciò che stai cercando arriverà in una forma inaspettata.' },
  { risposta:'Sì, ma non come immagini', sub:'Il risultato ci sarà — ma diverso da ciò che hai in testa.' },
  { risposta:'Non complicare',       sub:'La risposta è più semplice di quanto pensi. Smetti di cercare complessità.' },
  { risposta:'Conta i tuoi doni',    sub:'Stai guardando ciò che manca. Guarda invece ciò che hai.' },
  { risposta:'Esprimilo',            sub:'Il silenzio non porta da nessuna parte qui. Parla.' },
  { risposta:'Cura te stesso prima', sub:'Non puoi dare ciò che non hai. Ricarica la tua fonte.' },
  { risposta:'Il passo è piccolo',   sub:'Non serve un salto enorme. Un piccolo passo oggi è sufficiente.' },
  { risposta:'Apri la mente',        sub:'La tua risposta è limitata dalla tua prospettiva. Espandila.' },
  { risposta:'Non ora, ma presto',   sub:'L\'universo ti dice aspetta, non mai.' },
  { risposta:'Sii onesto con te',    sub:'La risposta che temi è quella che già conosci.' },
  { risposta:'Il passato non conta', sub:'Non trascinare ciò che è finito. Oggi è il tuo foglio bianco.' },
  { risposta:'Rischia',              sub:'La vita premia il coraggio. Il momento di osare è questo.' },
  { risposta:'Non rischiare ora',    sub:'Conserva le energie. La prudenza è la tua alleata.' },
  { risposta:'Guarisci prima',       sub:'Portare ferite aperte in nuove situazioni le moltiplica.' },
  { risposta:'Condividi il peso',    sub:'Non devi portare questo da solo. Chiedi aiuto.' },
  { risposta:'La risposta è in te',  sub:'Ogni volta che hai cercato fuori, la risposta era dentro.' },
  { risposta:'Sì, fortemente sì',    sub:'Questa è una delle risposte più chiare che potevi ricevere.' },
  { risposta:'Lascia che sia',       sub:'Non ogni cosa deve essere risolta. Alcune vanno solo vissute.' },
  { risposta:'Il tuo istinto ha ragione', sub:'Quella voce che senti non mente. Ascoltala.' },
  { risposta:'Unisciti agli altri',  sub:'La solitudine non è la risposta qui. Cerca connessione.' },
  { risposta:'Stai crescendo',       sub:'Ciò che senti come difficoltà è in realtà crescita.' },
  { risposta:'La crisi porta doni',  sub:'Nel momento più difficile si nasconde la trasformazione.' },
  { risposta:'Ringrazia e vai avanti', sub:'La gratitudine apre la prossima porta.' },
  { risposta:'Non perdere la speranza', sub:'Anche quando tutto sembra buio, la luce esiste.' },
  { risposta:'È già in cammino',     sub:'Ciò che desideri si sta avvicinando a te in questo momento.' },
  { risposta:'No, non ancora',       sub:'La risposta è no oggi. Domani potrebbe essere diverso.' },
  { risposta:'Il coraggio premia',   sub:'Chi osa in questo momento raccoglierà il frutto.' },
  { risposta:'Sì, con amore',        sub:'La tua intenzione pura è la forza che muove montagne.' },
  { risposta:'Proteggiti',           sub:'Non ogni porta aperta va attraversata. Discernimento.' },
  { risposta:'Dì la verità',         sub:'Il silenzio qui costa più della verità scomoda.' },
  { risposta:'Perdona',              sub:'Il rancore non punisce chi ti ha fatto male. Punisce te.' },
  { risposta:'Riparti da zero',      sub:'A volte il gesto più coraggioso è ricominciare.' },
  { risposta:'Abbonda di grazia',    sub:'Come tratti questa situazione dice chi sei veramente.' },
  { risposta:'Il ciclo si chiude',   sub:'Questa fase della tua vita volge al termine. Una nuova inizia.' },
  { risposta:'Sì, è tempo',          sub:'Hai aspettato abbastanza. Il momento è questo.' },
  { risposta:'Non è per te',         sub:'Alcune cose non sono destinate a te. Ed è una benedizione.' },
  { risposta:'Tutto a suo tempo',    sub:'L\'universo ha il suo orologio. Fidati del ritmo.' },
  { risposta:'Porta pazienza',       sub:'Ciò che si costruisce lentamente dura più a lungo.' },
  { risposta:'Il cambiamento viene', sub:'Non resistere — accoglilo come un\'onda.' },
  { risposta:'Radica le fondamenta', sub:'Prima di costruire in alto, rafforza ciò che sta sotto.' },
  { risposta:'Vola oltre i confini', sub:'I limiti che vedi sono nella mente, non nella realtà.' },
  { risposta:'Confida nell\'amore',  sub:'L\'amore — per te stesso e per gli altri — è sempre la risposta giusta.' },
  { risposta:'Sì, con determinazione', sub:'Non fermarti. La forza è dalla tua parte.' },
  { risposta:'Ancora un po\'',       sub:'Sei vicino — più di quanto pensi. Non mollare.' },
  { risposta:'Sì, dall\'inizio',     sub:'Questo progetto, questa relazione, questo passo: vai.' },
  { risposta:'Il segreto è il silenzio', sub:'La risposta emergerà nel silenzio, non nel rumore.' },
  { risposta:'La luna sa',           sub:'Ascolta i cicli — sia in cielo che in te.' },
  { risposta:'Rinasce tutto',        sub:'Nulla finisce davvero. Ogni fine è un travestimento di un inizio.' },
  // ── POSITIVE (25) ──
  { risposta:'È il tuo momento',     sub:'Le stelle si sono allineate per te. Non sprecare questo istante.' },
  { risposta:'Abbondanza in arrivo', sub:'Ciò che hai seminato con fatica sta per dare frutti straordinari.' },
  { risposta:'La fortuna ti cerca',  sub:'Non sei tu a inseguire la fortuna — è lei che ha trovato il tuo indirizzo.' },
  { risposta:'Sì, con gioia',        sub:'Non solo accadrà — accadrà in un modo che ti farà sorridere.' },
  { risposta:'Il meglio deve ancora venire', sub:'Quello che hai vissuto finora era solo il prologo.' },
  { risposta:'Tutto si sistema',     sub:'Le tessere stanno cadendo al loro posto, anche quelle che sembravano rotte.' },
  { risposta:'Meriti questo',        sub:'Non è fortuna cieca — è il riconoscimento di chi hai scelto di essere.' },
  { risposta:'Apri le braccia',      sub:'Ciò che arriva è più grande di ciò che avevi chiesto.' },
  { risposta:'La porta è già aperta', sub:'Stai già sulla soglia. Basta un passo.' },
  { risposta:'Sì, con certezza assoluta', sub:'Questa è la risposta più chiara che l\'universo sappia dare.' },
  { risposta:'Costruisci ora',       sub:'Le fondamenta sono solide. È tempo di alzare i muri.' },
  { risposta:'Il vento è a favore',  sub:'Tutto ciò che muovi adesso andrà lontano — molto lontano.' },
  { risposta:'Celebra in anticipo',  sub:'Il risultato è già deciso. Inizia a festeggiare prima che arrivi.' },
  { risposta:'Sì, ogni dubbio è falso', sub:'Quella voce che ti frena non conosce la verità che l\'universo conosce.' },
  { risposta:'La vittoria è tua',    sub:'Non si tratta di se — ma di quando. Ed è presto.' },
  { risposta:'Fidati del percorso',  sub:'Ogni apparente deviazione ti stava portando esattamente qui.' },
  { risposta:'Il cielo è dalla tua parte', sub:'In questo preciso momento cosmico, le forze superiori tifano per te.' },
  { risposta:'Sì, e in grande',      sub:'Non solo avverrà — avverrà in misura superiore alle tue aspettative.' },
  { risposta:'Il cambiamento è dono', sub:'Quello che sembrava uno stravolgimento è in realtà una benedizione.' },
  { risposta:'Vai a occhi chiusi',   sub:'Non hai bisogno di vedere il percorso intero. Il primo passo è sufficiente.' },
  { risposta:'È già tuo',            sub:'Nell\'universo invisibile esiste già. Sta per manifestarsi nel visibile.' },
  { risposta:'Il coraggio vince',    sub:'Il momento in cui hai paura è esattamente il momento di agire.' },
  { risposta:'Sì, senza riserve',    sub:'Nessuna clausola, nessun ma. Un sì pieno, rotondo, definitivo.' },
  { risposta:'L\'amore risponde',    sub:'Qualunque cosa tu abbia chiesto, la risposta passa attraverso l\'amore.' },
  { risposta:'Nuova alba',           sub:'Un capitolo magnifico sta per cominciare. Tieni gli occhi spalancati.' },
  // ── NEGATIVE (15) ──
  { risposta:'Non è il tuo tempo',   sub:'L\'universo ti ferma non per punirti, ma per proteggerti da ciò che non vedi.' },
  { risposta:'Qualcosa non torna',   sub:'Un elemento della situazione ti sfugge. Prima di agire, cerca cosa.' },
  { risposta:'Rallenta o pagherai',  sub:'La fretta in questo momento costa più di quanto sei disposto a spendere.' },
  { risposta:'Non fidarti di tutti', sub:'Qualcuno vicino a te non ha le tue stesse intenzioni. Osserva bene.' },
  { risposta:'Il terreno cede',      sub:'Ciò su cui stai costruendo non è stabile come credi.' },
  { risposta:'Rimpianto in agguato', sub:'Se procedi adesso senza riflettere, te ne pentirai.' },
  { risposta:'No, e non cedere',     sub:'Ogni pressione che senti per andare avanti è il segnale per fermarsi.' },
  { risposta:'La risposta è perdita', sub:'Qualcosa andrà perso. Accettarlo ora fa meno male che scoprirlo dopo.' },
  { risposta:'Stai cercando nel posto sbagliato', sub:'L\'energia che stai investendo qui non porta dove pensi.' },
  { risposta:'Attenzione ai falsi amici', sub:'Non tutti i sorrisi intorno a te sono sinceri. Discernimento.' },
  { risposta:'Il prezzo è troppo alto', sub:'Quello che vorresti ottenere costerà più di quanto sei pronto a dare.' },
  { risposta:'Fermati — ora',        sub:'Continuare su questa strada porta a conseguenze che oggi potresti evitare.' },
  { risposta:'No, con certezza',     sub:'Non c\'è ambiguità. La risposta è no, e insistere peggiora tutto.' },
  { risposta:'Il passato ritorna',   sub:'Una questione che credevi risolta sta per bussare di nuovo alla porta.' },
  { risposta:'Non è quello che sembra', sub:'L\'apparenza ti inganna. Dietro a questa situazione c\'è ben altro.' },
  // ── CATASTROFICHE (10) ──
  { risposta:'Il baratro si avvicina', sub:'Le forze oscure convergono. Solo una scelta radicale può cambiare il corso.' },
  { risposta:'Tutto crolla',         sub:'Ciò che hai costruito è sul punto di dissolversi. Mettiti al riparo.' },
  { risposta:'Il destino ha deciso', sub:'Alcune cose non si possono più evitare. La ruota ha già girato.' },
  { risposta:'Il tradimento è certo', sub:'Qualcuno che chiami alleato ti ha già voltato le spalle. Scoprirai presto chi.' },
  { risposta:'Ciò che temi accadrà', sub:'Il presagio che porti nel petto non è paranoia. Preparati.' },
  { risposta:'La fine si avvicina',  sub:'Una fase della tua vita sta per chiudersi in modo brusco e definitivo.' },
  { risposta:'Niente sarà come prima', sub:'Un evento imminente cambierà ogni cosa. Non c\'è ritorno.' },
  { risposta:'Il buio precede l\'alba — ma è buio', sub:'Non illuderti: la notte che stai per attraversare sarà lunga e dura.' },
  { risposta:'Sei solo',             sub:'In questo momento nessuno può portare questo peso con te. Solo tu.' },
  { risposta:'Brucia tutto',         sub:'A volte l\'universo chiede di distruggere tutto per ricostruire qualcosa di vero.' },
];

let _libroUltimaRisposta = -1;

function _libroShowScreen(id){
  ['libroScreenCover','libroScreenIstruzioni','libroScreenDomanda','libroScreenRisposta'].forEach(s=>{
    const el=$('#'+s);
    if(el) el.style.display = s===id ? 'block' : 'none';
  });
}

function libroGotoIstruzioni(){
  hapticFeedback();
  _libroShowScreen('libroScreenIstruzioni');
}

function libroGotoDomanda(){
  hapticFeedback();
  _libroShowScreen('libroScreenDomanda');
  setTimeout(()=>{ const inp=$('#libroDomanda'); if(inp) inp.focus(); },300);
}

function resetLibro(){
  hapticFeedback();
  const inp=$('#libroDomanda');
  if(inp) inp.value='';
  _libroShowScreen('libroScreenCover');
}

function apriLibro(){
  hapticFeedback();
  let idx;
  do { idx=Math.floor(Math.random()*DB_LIBRO.length); } while(idx===_libroUltimaRisposta && DB_LIBRO.length>1);
  _libroUltimaRisposta=idx;
  const r=DB_LIBRO[idx];
  const paginaNum=Math.floor(Math.random()*380)+12;

  const testo = $('#libroRispostaTesto');
  const sub   = $('#libroRispostaSub');
  if(testo) testo.textContent = r.risposta;
  if(sub)   sub.textContent   = r.sub || '';

  _libroShowScreen('libroScreenRisposta');
  burst();
  const domanda=($('#libroDomanda')&&$('#libroDomanda').value||'').trim();
  saveHistory('Libro delle Risposte', r.risposta + (domanda ? ` — "${domanda}"` : ''));
}

function altraRisposta(){
  hapticFeedback();
  const risposta=$('#libroScreenRisposta');
  if(risposta){ risposta.style.opacity='0'; risposta.style.transition='opacity .25s'; }
  setTimeout(()=>{
    let idx;
    do { idx=Math.floor(Math.random()*DB_LIBRO.length); } while(idx===_libroUltimaRisposta && DB_LIBRO.length>1);
    _libroUltimaRisposta=idx;
    const r=DB_LIBRO[idx];
    const testo=$('#libroRispostaTesto');
    const sub=$('#libroRispostaSub');
    if(testo) testo.textContent=r.risposta;
    if(sub)   sub.textContent=r.sub||'';
    if(risposta){ risposta.style.opacity='1'; }
  },280);
}


let _astraleInited = false;
let _thetaCtx = null, _thetaOscL = null, _thetaOscR = null, _thetaGain = null, _thetaPlaying = false;

function initAstrale() {
  if (_astraleInited) return;
  _astraleInited = true;

  const progressFill = document.querySelector('#view-astrale .astral-progress-fill');
  if (progressFill) {
  window.addEventListener('scroll', () => {
  const view = document.getElementById('view-astrale');
  if (!view || !view.classList.contains('active')) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.max(0, Math.min(100, (scrollTop / max) * 100)) : 0;
  progressFill.style.width = pct + '%';
  }, { passive: true });
  }

  const astraleView = document.getElementById('view-astrale');
  const pills = astraleView ? astraleView.querySelectorAll('.astral-toc-pill') : [];
  const chapters = astraleView ? astraleView.querySelectorAll('.astral-chapter') : [];
  if (chapters.length && pills.length) {
  const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
  if (e.isIntersecting) {
  const idx = Array.from(chapters).indexOf(e.target);
  pills.forEach((p, i) => p.classList.toggle('active', i === idx));
  }
  });
  }, { root: null, rootMargin: '0px 0px -55% 0px', threshold: 0.15 });
  chapters.forEach(ch => obs.observe(ch));
  }
}

function scrollChapter(id) {
  const target = document.getElementById('a' + id);
  if (!target) return;
  const offset = target.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

function toggleTheta() {
  const btn = document.getElementById('thetaPlayBtn');
  const viz = document.getElementById('thetaViz');
  const freq = parseFloat(document.getElementById('thetaFreq').value);
  const vol = parseFloat(document.getElementById('thetaVol').value);

  if (_thetaPlaying) {

  try {
  if (_thetaGain && _thetaCtx) _thetaGain.gain.setTargetAtTime(0, _thetaCtx.currentTime, 0.12);
  setTimeout(() => {
  try { _thetaOscL.stop(); _thetaOscR.stop(); } catch(e){}
  try { _thetaCtx.close(); } catch(e){}
  }, 200);
  } catch(e){}
  _thetaCtx = null; _thetaOscL = null; _thetaOscR = null; _thetaGain = null;
  _thetaPlaying = false;
  if (btn) { btn.textContent = '▶ Avvia'; btn.classList.remove('playing'); }
  if (viz) viz.classList.remove('active');
  BgMusic.unduckFromTheta(); // ripristina volume musica mistica
  } else {

  try {
  _thetaCtx = new (window.AudioContext || window.webkitAudioContext)();
  _thetaGain = _thetaCtx.createGain();
  _thetaGain.gain.value = 0;
  _thetaGain.connect(_thetaCtx.destination);
  const merger = _thetaCtx.createChannelMerger(2);
  merger.connect(_thetaGain);
  _thetaOscL = _thetaCtx.createOscillator();
  _thetaOscR = _thetaCtx.createOscillator();
  _thetaOscL.type = 'sine'; _thetaOscR.type = 'sine';
  _thetaOscL.frequency.value = 150;
  _thetaOscR.frequency.value = 150 + freq;
  _thetaOscL.connect(merger, 0, 0);
  _thetaOscR.connect(merger, 0, 1);
  _thetaOscL.start(); _thetaOscR.start();
  _thetaGain.gain.setTargetAtTime(vol, _thetaCtx.currentTime, 0.2);
  _thetaPlaying = true;
  if (btn) { btn.textContent = '⏸ Pausa'; btn.classList.add('playing'); }
  if (viz) viz.classList.add('active');
  } catch(err) { console.error('Web Audio error:', err); }
  }
}

function updateThetaVol() {
  const vol = parseFloat(document.getElementById('thetaVol').value);
  if (_thetaGain && _thetaCtx && _thetaCtx.state === 'running') {
  _thetaGain.gain.setTargetAtTime(vol, _thetaCtx.currentTime, 0.05);
  }
}

function changeThetaFreq() {
  if (_thetaPlaying) { toggleTheta(); setTimeout(toggleTheta, 150); }
}

window.addEventListener('beforeunload', () => {
  if (_thetaCtx && _thetaCtx.state !== 'closed') try { _thetaCtx.close(); } catch(e){}
});

const DB_WICCA_SABBAT = [
  {
  nome:'Yule', data:'21 Dicembre', emoji:'❄️',
  elemento:'Terra & Fuoco',
  sotto:'Solstizio d\'Inverno — Il Sole Rinasce',
  desc:'Yule celebra il Solstizio d\'Inverno, la notte più lunga dell\'anno. Da questo momento il Sole rinasce: la luce torna, lenta ma inesorabile. È il tempo del raccoglimento, dell\'introspezione profonda e della speranza che germoglia nel buio. Le streghe accendono fuochi per richiamare il calore del Sole che si risveglia.',
  colori:['Rosso','Verde','Oro','Bianco'],
  erbe:['Agrifoglio','Vischio','Abete','Cannella'],
  cristalli:['Rubino','Granato','Quarzo Chiaro'],
  rituale:'Accendi una candela rossa o dorata al tramonto. Siediti in silenzio e visualizza un seme di luce che cresce nel tuo petto. Ringrazia l\'oscurità per ciò che ti ha insegnato. Recita: "La luce rinasce, la speranza cresce."'
  },
  {
  nome:'Imbolc', data:'2 Febbraio', emoji:'🌱',
  elemento:'Fuoco',
  sotto:'Festa di Brigid — Il Risveglio della Primavera',
  desc:'Imbolc segna il primo soffio della primavera. La terra è ancora fredda ma sotto la superficie i semi si muovono. È la festa della dea Brigid — patrona della poesia, della guarigione e della fucina. Il fuoco sacro si riaccende. Le streghe purificano le case e benedicono i semi che pianteranno.',
  colori:['Bianco','Giallo','Rosa Pallido'],
  erbe:['Lavanda','Rosmarino','Menta Piperita','Basilico'],
  cristalli:['Ametista','Quarzo Rosa','Tormalina Bianca'],
  rituale:'Prepara una candela bianca e circondala con petali di lavanda. Scrivi su un foglio ciò che vuoi far germogliare nella tua vita. Brucia il foglio alla fiamma: i tuoi desideri salgono con il fumo verso il cielo.'
  },
  {
  nome:'Ostara', data:'21 Marzo', emoji:'🌸',
  elemento:'Aria',
  sotto:'Equinozio di Primavera — Equilibrio e Rinascita',
  desc:'Ostara è l\'equinozio primaverile: luce e buio si bilanciano perfettamente per un momento, poi la luce prevale. La dea della primavera risveglia la terra con i suoi passi. Uova e lepri — simboli di fertilità — adornano gli altari. È il tempo degli inizi, della semina intenzionale e del rinnovarsi.',
  colori:['Verde','Giallo','Lavanda','Bianco'],
  erbe:['Borragine','Violetta','Tarassaco','Dragoncello'],
  cristalli:['Avventurina Verde','Calcite Gialla','Acquamarina'],
  rituale:'Dipingi un uovo con simboli delle tue intenzioni. Tienilo tra le mani, trasferigli la tua energia. Seppelliscilo in terra o riponilo sull\'altare per 13 giorni come incubatore dei tuoi desideri.'
  },
  {
  nome:'Beltane', data:'1 Maggio', emoji:'🔥',
  elemento:'Fuoco',
  sotto:'La Grande Unione — Fuoco e Vita',
  desc:'Beltane è la festa del fuoco, della fertilità e dell\'unione sacra. I falò venivano accesi sulle colline, il bestiame passava tra le fiamme per purificarsi. È la notte più magica dell\'anno — il velo tra i mondi è sottile. Ogni cosa è in fiore. L\'energia vitale è al massimo: usala per manifestare con forza.',
  colori:['Rosso','Bianco','Verde Brillante'],
  erbe:['Biancospino','Edera','Rosa Rossa','Achillea'],
  cristalli:['Rubino','Carneola','Granato'],
  rituale:'Accendi un grande falò o una candela rossa. Salta symbolicamente le fiamme dicendo: "Lascio il vecchio, abbraccio il nuovo." Danza intorno al fuoco o alla fiamma. Lascia che il calore purifichi e carichi.'
  },
  {
  nome:'Litha', data:'21 Giugno', emoji:'☀️',
  elemento:'Fuoco & Aria',
  sotto:'Solstizio d\'Estate — Il Sole al Culmine',
  desc:'Litha è il Solstizio d\'Estate, il giorno più lungo dell\'anno. Il Sole è al massimo del suo potere. La vegetazione è rigogliosa, il mondo pulsa di vita. Ma da oggi la luce inizia a calare, un millimetro al giorno. È il momento delle erbe magiche — raccolte a mezzanotte del solstizio hanno potere straordinario.',
  colori:['Oro','Giallo','Arancio','Bianco Caldo'],
  erbe:['Iperico','Lavanda','Camomilla','Achillea','Felce'],
  cristalli:['Citrino','Topazio Dorato','Ambra','Corniola'],
  rituale:'Al sorgere del sole, porta le mani aperte verso la luce e assorbi la sua energia per un minuto. Poi porta le mani al petto: "Porto questa luce dentro di me. Sono pieno/a di vita, chiarezza e forza."'
  },
  {
  nome:'Lammas', data:'1 Agosto', emoji:'🌾',
  elemento:'Terra',
  sotto:'Lughnasadh — Il Primo Raccolto',
  desc:'Lammas, o Lughnasadh, è la festa del primo raccolto. Il grano viene tagliato e il pane sacro viene cotto. È un tempo di gratitudine per ciò che si è manifestato — ma anche di consapevolezza che bisogna dare qualcosa per ricevere. Il dio del grano si sacrifica affinché la vita continui.',
  colori:['Oro','Marrone','Arancio','Giallo Grano'],
  erbe:['Grano','Mais','Girasole','Salvia'],
  cristalli:['Corniola','Occhio di Tigre','Diaspro Giallo'],
  rituale:'Tieni in mano un chicco di grano o una spiga. Ringrazia per ciò che hai ricevuto quest\'anno. Poi identifica qualcosa che devi lasciare andare per fare spazio: scrivi su carta e bruciala.'
  },
  {
  nome:'Mabon', data:'21 Settembre', emoji:'🍂',
  elemento:'Terra',
  sotto:'Equinozio d\'Autunno — Equilibrio e Resa dei Conti',
  desc:'Mabon è l\'equinozio autunnale — di nuovo l\'equilibrio tra luce e buio, ma ora è l\'oscurità che prende il sopravvento. È il secondo raccolto: tempo di bilanci, gratitudine e preparazione al buio. Come la natura si ritira, anche noi siamo chiamati a raccogliere i frutti del nostro lavoro e a fare pace con ciò che non ha germogliato.',
  colori:['Bordeaux','Oro Scuro','Arancio Bruciato','Marrone'],
  erbe:['Salvia','Rosmarino','Maggiorana','Noce Moscata'],
  cristalli:['Ametista Scura','Tormalina Nera','Diaspro Rosso'],
  rituale:'Prepara un pasto con frutti di stagione. Prima di mangiare, nomina tre cose per cui sei grato/a e tre cose che hai imparato. Scrivi tutto. È un bilancio sacro dell\'anno.'
  },
  {
  nome:'Samhain', data:'31 Ottobre', emoji:'🕯️',
  elemento:'Spirito',
  sotto:'La Notte dei Morti — Il Velo è Sottile',
  desc:'Samhain è il capodanno celtico e la festa più sacra del calendario wicca. Il velo tra il mondo dei vivi e quello dei morti è al suo punto più sottile. Gli antenati possono comunicare. È un tempo di onorare chi è andato, di fare i conti con la nostra ombra e con la morte come parte del ciclo. La magia divinatoria è potentissima questa notte.',
  colori:['Nero','Arancio','Viola','Rosso Scuro'],
  erbe:['Artemisia','Salvia Nera','Assenzio','Melagrana'],
  cristalli:['Ossidiana','Labradorite','Fluorite Viola','Agata Nera'],
  rituale:'Accendi una candela nera e una bianca. Posa una foto o un oggetto di un defunto amato. Siediti in silenzio e invitalo a comunicare nel modo che vuole — un pensiero, un ricordo improvviso, un sogno stanotte.'
  }
];

const DB_WICCA_CORRISPONDENZE = {
  amore:{
  nome:'Amore & Connessione', emoji:'💕',
  elemento:'💧 Acqua', pianeta:'♀ Venere', giorno:'Venerdì',
  colori:'Rosa, Rosso, Rame',
  erbe:'Rosa, Basilico, Rosmarino, Ibisco',
  cristalli:'Quarzo Rosa, Rodocrosite, Kunzite',
  luna:'Luna Crescente o Luna Piena',
  ora:'Ora di Venere (alba o 1h dopo tramonto)',
  direzione:'Ovest (elemento Acqua)',
  divinita:'Afrodite, Iside, Freya, Hathor',
  desc_magia:'La magia d\'amore wicca non forza la volontà di nessuno — attrae ciò che risuona con la tua vibrazione. Lavora sul tuo cuore, non su quello degli altri. Purifica prima te stesso, poi lascia che la similitudine attraga la similitudine.',
  rituale:'Al venerdì di luna crescente, accendi una candela rosa. Tieni un quarzo rosa tra le mani e visualizza il tuo cuore che si apre come un fiore. Non nominare una persona specifica — definisci la qualità dell\'amore che vuoi: "Attiro un amore rispettoso, profondo e autentico."',
  invocazione:'Dolce Venere, dea dell\'amore che tutto abbraccia, apri il mio cuore e lascia che l\'amore autentico trovi la sua strada fino a me. Non per forza, ma per armonia. Non per bisogno, ma per abbondanza. ☽ Così sia ☾'
  },
  protezione:{
  nome:'Protezione & Scudo', emoji:'🛡️',
  elemento:'🔥 Fuoco & 🌍 Terra', pianeta:'♂ Marte, ♄ Saturno', giorno:'Martedì o Sabato',
  colori:'Nero, Bianco, Argento',
  erbe:'Aglio, Rosmarino, Salvia, Pepe Nero, Assenzio',
  cristalli:'Ossidiana Nera, Occhio di Falco, Tormalina Nera, Pietra del Sole',
  luna:'Luna Calante o Luna Nuova',
  ora:'Mezzanotte o Ora di Saturno',
  direzione:'Nord (elemento Terra) per radicamento; Sud (Fuoco) per bruciare il negativo',
  divinita:'Hecate, Morrigan, Ares, Saturno',
  desc_magia:'La protezione magica crea uno scudo energetico intorno alla tua aura e al tuo spazio. Non attacca — riflette o assorbe. Il lavoro più efficace è regolare: una pulizia settimanale vale più di un grande rituale mensile.',
  rituale:'Crea un sacchetto di protezione: sale grosso, ossidiana, foglia di salvia secca, e un capello tuo. Sigilla con fil nero. Mettilo vicino alla porta d\'ingresso o sotto il tuo letto. Ogni luna nuova, rinnovane l\'intenzione.',
  invocazione:'Hecate, guardiana dei crocevia, colei che vede nell\'oscurità — avvolgi la mia casa e la mia anima nel tuo mantello oscuro. Nessuna energia che non mi appartiene può toccarmi. Il mio spazio è sacro. ☽ Così sia ☾'
  },
  prosperita:{
  nome:'Prosperità & Abbondanza', emoji:'🌿',
  elemento:'🌍 Terra', pianeta:'♃ Giove', giorno:'Giovedì',
  colori:'Verde, Oro, Bronzo',
  erbe:'Menta, Basilico, Cannella, Fieno Greco, Alloro',
  cristalli:'Avventurina Verde, Citrino, Pirite, Giada',
  luna:'Luna Crescente (da Nuova a Piena)',
  ora:'Ora di Giove (1h dopo alba)',
  direzione:'Nord (elemento Terra, radici e risorse materiali)',
  divinita:'Demetra, Giove, Lakshmi, Cerridwen',
  desc_magia:'La prosperità wicca non è solo denaro — è abbondanza in senso ampio: energia, opportunità, salute, creatività. Il principio chiave è la gratitudine: riconoscere ciò che già hai attira altro. La magia lavora con il tuo sistema di credenze, non contro di esso.',
  rituale:'Al giovedì, prendi una moneta verde o dorata. Tienila tra le mani e visualizza prosperità che scorre verso di te come acqua. Mettila in un sacchetto con menta secca e cannella. Portalo con te o tienilo nel cassetto dove tieni i soldi.',
  invocazione:'Grande Madre Terra, fonte di ogni abbondanza — apri i canali dell\'abbondanza nella mia vita. Ricevo con gratitudine ciò che mi appartiene. Merito prosperità, salute e opportunità. La mia vita è terreno fertile. ☽ Così sia ☾'
  },
  guarigione:{
  nome:'Guarigione & Salute', emoji:'💊',
  elemento:'💧 Acqua & 💨 Aria', pianeta:'☽ Luna, ☿ Mercurio', giorno:'Lunedì o Mercoledì',
  colori:'Blu, Verde, Bianco, Turchese',
  erbe:'Lavanda, Camomilla, Calendula, Echinacea, Iperico',
  cristalli:'Ametista, Avventurina Verde, Calcite Blu, Fluorite',
  luna:'Luna Crescente per guarire; Luna Calante per rimuovere malattia',
  ora:'Alba (aria fresca) o mezzogiorno (luce solare)',
  direzione:'Est (Aria, respiro e guarigione) e Ovest (Acqua, purificazione)',
  divinita:'Brigid, Asclepio, Iside, Kuan Yin',
  desc_magia:'La guarigione magica non sostituisce la medicina — la integra. Lavora su corpo, mente e spirito come un sistema unitario. L\'intenzione guarisce perché il corpo e la mente si influenzano reciprocamente. Usala sempre in aggiunta alle cure appropriate.',
  rituale:'In un bagno tiepido, sciogli sale himalayano e gocce di olio di lavanda. Visualizza l\'acqua che assorbe tutto ciò che ti indebolisce — dolore fisico, stress, stanchezza. Quando esci, immagina che l\'acqua porti via tutto. Risciacquati con acqua fresca.',
  invocazione:'Brigid, dea della guarigione e del fuoco sacro — infondi la tua luce curativa nel mio corpo e nella mia anima. Ogni cellula di me è capace di guarigione profonda. Mi rinnovo, mi allineo, mi risano. ☽ Così sia ☾'
  },
  divinazione:{
  nome:'Divinazione & Visione', emoji:'🔮',
  elemento:'💨 Aria & 💧 Acqua', pianeta:'☽ Luna, ☿ Mercurio', giorno:'Lunedì o Mercoledì',
  colori:'Viola, Argento, Indaco, Bianco',
  erbe:'Artemisia, Lavanda, Mirra, Incenso, Alloro',
  cristalli:'Labradorite, Ametista, Fluorite Viola, Quarzo Latteo',
  luna:'Luna Piena (massima visione) o Luna Nuova (misteri nascosti)',
  ora:'Mezzanotte o Tre del mattino (ore di confine)',
  direzione:'Ovest (acque dell\'intuizione e dell\'inconscio)',
  divinita:'Hecate, Circe, Morgan le Fay, Hermes',
  desc_magia:'La divinazione wicca non predice un futuro fisso — rivela le correnti energetiche del momento presente e le loro probabili direzioni. La vera visione non bypassa il libero arbitrio: ti mostra dove sei, non dove devi essere.',
  rituale:'Prima di qualsiasi pratica divinatoria, brucia artemisia o lavanda. Siediti in silenzio per 3 minuti. Tocca il tuo strumento divinatorio con entrambe le mani e recita: "Sono uno specchio pulito. La verità mi parla chiaramente." Poi procedi.',
  invocazione:'Hecate Triformis, dea delle visioni e dei segreti — apri i miei occhi interiori. Che le nebbie del futuro si diradino quanto è necessario per la mia guida. Visione chiara, cuore aperto, mente quieta. ☽ Così sia ☾'
  },
  trasformazione:{
  nome:'Trasformazione & Rinascita', emoji:'🦋',
  elemento:'🔥 Fuoco & 💧 Acqua', pianeta:'♇ Plutone, ♂ Marte', giorno:'Martedì o Lunedì',
  colori:'Nero, Viola Scuro, Rosso Sangue, Argento',
  erbe:'Assenzio, Artemisia, Salvia Nera, Dragoncello, Incenso',
  cristalli:'Labradorite, Ossidiana Arcobaleno, Malachite, Sugilite',
  luna:'Luna Calante (per lasciar andare) + Luna Nuova (per rinascere)',
  ora:'Tramonto (soglia tra due stati)',
  direzione:'Il centro — perché la trasformazione non ha direzione, è un processo circolare',
  divinita:'Hécate, Kali, Morrigan, Baba Yaga, Fenice',
  desc_magia:'La trasformazione è la magia più profonda e più esigente. Richiede la morte simbolica di qualcosa — un\'identità, un pattern, una relazione, una credenza — per permettere la rinascita. Non si può portare tutto nel nuovo capitolo: la scelta di cosa lasciare è essa stessa l\'atto magico.',
  rituale:'Scrivi su carta ciò che vuoi trasformare — non ciò che vuoi eliminare, ma il suo opposto desiderato. Brucia la carta. Tieni la cenere nel palmo per un momento: questa è l\'energia grezza della trasformazione. Poi disperdila al vento.',
  invocazione:'Grande Madre della Trasformazione — ho paura di ciò che devo lasciare andare, ma mi fido del tuo fuoco. Brucia ciò che non serve più. Dalle ceneri, nuovo germoglio. Sono pronto/a alla rinascita. ☽ Così sia ☾'
  }
};

let _wiccaSelIntent = 0;
const _wiccaIntentKeys = ['amore','protezione','prosperita','guarigione','divinazione','trasformazione'];

function _wiccaCalcSabbat(){
  const oggi = new Date();
  const anno = oggi.getFullYear();

  const sabbatDates = [
  { idx:0, month:11, day:21 },  // Yule
  { idx:1, month:1,  day:2  },  // Imbolc
  { idx:2, month:2,  day:21 },  // Ostara
  { idx:3, month:4,  day:1  },  // Beltane
  { idx:4, month:5,  day:21 },  // Litha
  { idx:5, month:7,  day:1  },  // Lammas
  { idx:6, month:8,  day:21 },  // Mabon
  { idx:7, month:9,  day:31 }   // Samhain
  ];

  const dates = sabbatDates.map(s => {
  const d = new Date(anno, s.month, s.day);
  return { idx: s.idx, date: d };
  });

  let corrente = null, prossimo = null;
  for(let i = dates.length - 1; i >= 0; i--){
  if(dates[i].date <= oggi){
  corrente = dates[i];
  prossimo = dates[(i + 1) % dates.length];
  break;
  }
  }

  if(!corrente){
  corrente = dates[dates.length - 1]; // Yule dell'anno scorso
  prossimo = dates[0];
  }

  const sab = DB_WICCA_SABBAT[corrente.idx];

  let prossimoDate = prossimo.date;
  if(prossimoDate < oggi) prossimoDate = new Date(anno + 1, prossimoDate.getMonth(), prossimoDate.getDate());
  const giorniMancanti = Math.ceil((prossimoDate - oggi) / (1000*60*60*24));
  const prossimoSab = DB_WICCA_SABBAT[prossimo.idx];

  return { corrente: sab, prossimo: prossimoSab, giorniMancanti };
}

function wiccaSelIntent(idx){
  _wiccaSelIntent = idx;
  for(let i=0;i<6;i++){
  const t=$('#wiccaTab'+i);
  if(t) t.classList.toggle('active', i===idx);
  }
}

function resetWicca(){
  $('#wiccaForm').style.display='block';
  $('#wiccaResult').style.display='none';
  $('#wiccaDomanda').value='';
  _wiccaSelIntent = 0;
  for(let i=0;i<6;i++){
  const t=$('#wiccaTab'+i);
  if(t) t.classList.toggle('active', i===0);
  }

  const { corrente, prossimo, giorniMancanti } = _wiccaCalcSabbat();
  const box = $('#wiccaSabbatBox');
  if(box){
  const kwHtml = corrente.colori.map(c=>`<span class="num-kw">${c}</span>`).join('');
  box.innerHTML = `
  <span class="wicca-sabbat-icon">${corrente.emoji}</span>
  <div class="wicca-sabbat-label">✦ Sabbat in corso ✦</div>
  <div class="wicca-sabbat-name">${corrente.nome}</div>
  <div class="wicca-sabbat-date">${corrente.sotto}</div>
  <div class="wicca-sabbat-desc">${corrente.desc}</div>
  <div class="num-keywords" style="margin-top:10px">${kwHtml}</div>
  <div class="wicca-countdown">Prossimo: ${prossimo.nome} ${prossimo.emoji} — tra ${giorniMancanti} giorni</div>
  `;
  }
}

function calcWicca(){
  const intentKey = _wiccaIntentKeys[_wiccaSelIntent];
  const corr = DB_WICCA_CORRISPONDENZE[intentKey];
  if(!corr){ toast('⚠️ Seleziona un\'intenzione'); return; }
  const domanda = ($('#wiccaDomanda').value||'').trim();

  const domandaHtml = domanda
  ? `<div class="geo-question-shown" style="margin-bottom:14px">🌙 "${domanda}"</div>` : '';

  const el = $('#wiccaResult');
  el.innerHTML = `
  <div class="wicca-res">
  <div style="text-align:center;margin-bottom:14px">
  <div style="font-size:48px;filter:drop-shadow(0 0 16px #d4af3770);animation:logoGlow 4s infinite;margin-bottom:8px">${corr.emoji}</div>
  <div style="font-family:'Cinzel',serif;font-size:18px;color:var(--gold);letter-spacing:1.5px;margin-bottom:4px">${corr.nome}</div>
  <div class="wicca-element-badge">${corr.elemento} &nbsp;·&nbsp; ${corr.pianeta} &nbsp;·&nbsp; ${corr.giorno}</div>
  </div>
  ${domandaHtml}
  <div class="wicca-corr-grid">
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">🎨</span>
  <span class="wicca-corr-clabel">Colori</span>
  <span class="wicca-corr-value">${corr.colori}</span>
  </div>
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">🌿</span>
  <span class="wicca-corr-clabel">Erbe &amp; Spezie</span>
  <span class="wicca-corr-value">${corr.erbe}</span>
  </div>
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">💎</span>
  <span class="wicca-corr-clabel">Cristalli</span>
  <span class="wicca-corr-value">${corr.cristalli}</span>
  </div>
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">🌙</span>
  <span class="wicca-corr-clabel">Fase Lunare</span>
  <span class="wicca-corr-value">${corr.luna}</span>
  </div>
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">⏰</span>
  <span class="wicca-corr-clabel">Ora Planetaria</span>
  <span class="wicca-corr-value">${corr.ora}</span>
  </div>
  <div class="wicca-corr-item">
  <span class="wicca-corr-icon">🧿</span>
  <span class="wicca-corr-clabel">Divinità Invocabili</span>
  <span class="wicca-corr-value">${corr.divinita}</span>
  </div>
  </div>
  <div class="wicca-block">
  <h4>🌿 Comprensione Magica</h4>
  <p>${corr.desc_magia}</p>
  </div>
  <div class="wicca-block">
  <h4>🕯️ Rituale Suggerito</h4>
  <p>${corr.rituale}</p>
  </div>
  <div class="wicca-invocazione">${corr.invocazione}</div>
  </div>
  <div class="btn-grp" style="margin-top:14px">
  <button class="btn btn-sec" onclick="resetWicca()">🔄 Nuova Lettura</button>
  <button class="btn" onclick="saveHistory('Stregoneria &amp; Wicca','${corr.nome}: ${corr.elemento} · ${corr.giorno}')">💾 Salva</button>
  </div>
  `;
  $('#wiccaForm').style.display='none';
  $('#wiccaResult').style.display='block';
  burst();
}

const DB_ALCHIMIA = [
  {
  key:'nigredo', stage:'🌑 Nigredo', sottotitolo:'Crisi, Dissoluzione & Oscurità Creativa',
  pianeta:'Saturno', metallo:'Piombo', colore:'Nero', erba:'Assenzio', simbolo:'🜔',
  desc:'La Nigredo è la prima e più difficile fase della Grande Opera. Il piombo dell\'ego viene disciolto nel crogiolo dell\'esperienza. Non è una crisi — è una gestazione. Come il compost trasforma i rifiuti in nutrimento, la nigredo trasforma il dolore in saggezza. Le tue ombre emergono non per tormentarti, ma per essere riconosciute, integrate e trasmutate. Il Mago non fugge dalla nigredo: ci nuota dentro, sicuro che ogni dissoluzione precede una rinascita più autentica.',
  luci:'Profondità interiore rara, capacità di stare nel disagio senza fuggire, onestà brutale con se stessi, terreno fertile per la trasformazione.',
  ombre:'Rischio di identificarsi con la crisi, auto-sabotaggio, depressione se non si vede la luce alla fine del processo.',
  prescrizione:'Scrivi su carta le 3 cose che stai dissolvendoti da te. Bruciala in sicurezza mentre dici: "Consegno questo al fuoco che trasforma." Sepoli le ceneri. La dissoluzione è già quasi completata.',
  meditazione:'Siediti nel buio per 10 minuti. Respira la notte. Senti il vuoto non come assenza ma come potenziale assoluto. Sei nel grembo del cambiamento.',
  arcano:'Il Giudizio — La chiamata alla resurrezione'
  },
  {
  key:'albedo', stage:'🌕 Albedo', sottotitolo:'Purificazione, Chiarezza & Luce Lunare',
  pianeta:'Luna', metallo:'Argento', colore:'Bianco', erba:'Iperico', simbolo:'🜁',
  desc:'L\'Albedo è la fase dell\'alba — dopo la notte della nigredo, la luce comincia a filtrare. La purificazione non è cancellazione del passato: è la chiarezza che emerge quando il fango si è depositato e l\'acqua torna trasparente. Stai sviluppando una mente e un cuore più puri, capaci di vedere la realtà senza i filtri delle proiezioni e delle paure. La luna illumina nell\'albedo — la saggezza intuitiva, il riflesso, il femminino sacro in ciascuno.',
  luci:'Chiarezza mentale e emotiva crescente, purificazione degli intenti, affinamento dell\'intuizione, capacità di vedere i pattern nelle situazioni.',
  ombre:'Tendenza al perfezionismo spirituale, illusione di aver "completato" il lavoro interiore troppo presto, rigidità nel voler mantenere la purezza raggiunta.',
  prescrizione:'Medita con una candela bianca. Visualizza una pioggia argentata che lava via le ultime scorie. Di\': "Ciò che è puro risplende. Ciò che è impuro si scioglie nella luce." Bevi un bicchiere d\'acqua lentamente, come atto sacro di purificazione.',
  meditazione:'Guarda la luna la sera. Lascia che la sua luce entri dagli occhi. Senti il femminino cosmico — in te, oltre te. Nota cosa emerge nel silenzio lunare.',
  arcano:'La Luna — Il riflesso che svela l\'inconscio'
  },
  {
  key:'citrinitas', stage:'🌞 Citrinitas', sottotitolo:'Risveglio Solare, Intuizione & Direzione',
  pianeta:'Sole', metallo:'Oro', colore:'Giallo', erba:'Calendula', simbolo:'🜂',
  desc:'La Citrinitas è il risveglio del sole interiore — la fase in cui l\'oro comincia a brillare attraverso il materiale grezzo. L\'intuizione diventa profetica. Le connessioni si illuminano di significato. Le decisioni diventano più chiare perché sei sempre più allineato con il tuo scopo autentico. Questa è la fase dei veggenti e dei creatori — chi ha attraversato il buio della nigredo e la purezza dell\'albedo porta ora una luce che non abbaglia ma illumina. Il tuo sentiero personale emerge nitido.',
  luci:'Intuizione solare eccezionale, direzione chiara, energia creativa al massimo, capacità di vedere connessioni invisibili agli altri, carisma naturale.',
  ombre:'Gonfiore dell\'ego spirituale, isolamento chi non comprende la tua visione, impazienza con chi si trova in fasi più oscure.',
  prescrizione:'10 minuti di luce mattutina diretta sul viso. Visualizza una sfera solare liquida che scende dal capo al cuore. Scrivi 1 intenzione solare della tua giornata. Agiscila entro mezzogiorno.',
  meditazione:'Contempla una fiamma a distanza. Senti il suo calore. Nota il momento in cui la fiamma e la tua consapevolezza diventano la stessa cosa. Questo è l\'oro interiore.',
  arcano:'Il Sole — La pienezza della coscienza illuminata'
  },
  {
  key:'rubedo', stage:'🔴 Rubedo', sottotitolo:'Unione dei Contrari, Realizzazione & La Pietra Filosofale',
  pianeta:'Marte + Venere', metallo:'Rame + Oro', colore:'Rosso', erba:'Rosa rossa', simbolo:'🜍',
  desc:'La Rubedo è il coronamento della Grande Opera — l\'unione sacra di tutti i contrari: luce e ombra, maschile e femminile, conscio e inconscio, spirituale e materiale. La Pietra Filosofale non è un oggetto ma uno stato di essere: la realizzazione che la totalità che cerchi fuori è già dentro di te. Chi raggiunge la rubedo non diventa perfetto — diventa intero. E l\'interezza è il compimento del viaggio alchemico. Il rosso è il colore del sangue vivente, dell\'amore incarnato, della vita vissuta pienamente.',
  luci:'Integrazione profonda degli opposti interiori, compassione totale, capacità di trasformare chiunque incontri, realizzazione autentica del proprio scopo.',
  ombre:'Nessuna vera ombra in questa fase — solo il rischio di credere che sia definitiva. La Grande Opera si ripete in spirale, a livelli sempre più profondi.',
  prescrizione:'Accendi una candela rossa. Siediti con le mani giunte — una mano per il maschile, una per il femminile in te. Respira profondamente. Dichiarazione: "Sono intero. La luce e l\'ombra in me si abbracciano." Condividi un gesto concreto di amore incarnato con qualcuno oggi.',
  meditazione:'Visualizza te stesso abbracciato da te stesso — passato, presente e futuro fusi in un unico momento di compassione totale. Questo è il Rebis — il doppio che è uno.',
  arcano:'Il Mondo — La realizzazione del ciclo completo'
  }
];

let _alchStage = 0;
function alchSelStage(i){
  _alchStage = i;
  for(let k=0;k<4;k++) document.getElementById('alchTab'+k)?.classList.toggle('active',k===i);
}
function alchRandom(){
  _alchStage = Math.floor(Math.random()*4);
  alchSelStage(_alchStage);
  calcAlchimia();
}
function calcAlchimia(){
  const domanda = ($('#alchDomanda')?.value||'').trim();
  const d = DB_ALCHIMIA[_alchStage];
  showAdGate('Alchimia — '+d.stage, ()=>{
  const domHtml = domanda ? `<div class="geo-question-shown">❓ "${domanda}"</div>` : '';
  $('#alchResult').innerHTML = `
  <div style="text-align:center;padding:12px 0">
  <div style="font-size:64px;margin-bottom:8px;filter:drop-shadow(0 0 20px #d4af3760);animation:lunaFloat 4s ease-in-out infinite">${d.stage.split(' ')[0]}</div>
  <div style="font-family:'Cinzel',serif;font-size:22px;color:var(--gold);letter-spacing:2px">${d.stage.split(' ').slice(1).join(' ')}</div>
  <div style="font-size:11px;color:var(--muted);letter-spacing:2px;margin:4px 0">${d.sottotitolo}</div>
  <div style="font-family:'Cinzel',serif;font-size:28px;color:var(--gold);margin:8px 0;text-shadow:0 0 20px #d4af3760">${d.simbolo}</div>
  </div>
  <div class="luna-grid" style="margin-bottom:14px">
  <div class="luna-card"><div class="luna-card-ico">🪐</div><div class="luna-card-title">Pianeta</div><div class="luna-card-val"><strong>${d.pianeta}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">⚙️</div><div class="luna-card-title">Metallo</div><div class="luna-card-val"><strong>${d.metallo}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🎨</div><div class="luna-card-title">Colore</div><div class="luna-card-val"><strong>${d.colore}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🌿</div><div class="luna-card-title">Erba</div><div class="luna-card-val"><strong>${d.erba}</strong></div></div>
  </div>
  ${domHtml}
  <div class="geo-block"><h4>🔥 La Tua Fase</h4><p>${d.desc}</p></div>
  <div class="geo-block"><h4>✨ Doni di questa Fase</h4><p>${d.luci}</p></div>
  <div class="geo-block"><h4>⚠️ Ombre da Integrare</h4><p>${d.ombre}</p></div>
  <div class="geo-block" style="border-left-color:#c8b4ff"><h4 style="color:#c8b4ff">📜 Prescrizione Ermetica</h4><p>${d.prescrizione}</p></div>
  <div class="geo-block" style="border-left-color:#c8b4ff"><h4 style="color:#c8b4ff">🧘 Meditazione</h4><p>${d.meditazione}</p></div>
  <div style="text-align:center;padding:10px;background:#0b0520;border:1px solid var(--gold-dim);border-radius:12px;margin-bottom:10px">
  <div style="font-size:10px;color:var(--muted);font-family:'Cinzel',serif;letter-spacing:1.5px;margin-bottom:5px">ARCANO ASSOCIATO</div>
  <div style="color:var(--gold);font-family:'Cinzel',serif;font-size:13px">${d.arcano}</div>
  </div>
  <div class="btn-grp">
  <button class="btn btn-sec" onclick="resetAlchimia()">🔄 Nuova Fase</button>
  <button class="btn" onclick="saveHistory('Alchimia','${d.stage}');toast('💾 Salvato nel grimorio')">💾 Salva</button>
  </div>
  `;
  $('#alchResult').style.display='block';
  $('#alchForm').style.display='none';
  burst();
  saveHistory('Alchimia', d.stage);
  });
}
function resetAlchimia(){
  $('#alchForm').style.display='block';
  $('#alchResult').style.display='none';
  if($('#alchDomanda')) $('#alchDomanda').value='';
}

const DB_CABALA = [
  { key:'keter', nome:'Keter', trad:'Corona', num:1, pianeta:'Nettuno/Urano', arcangelo:'Metatron', colore:'Bianco brillante', simbolo:'👑',
  desc:'La corona inconscia. Keter è la volontà pura oltre il pensiero — il primo impulso dell\'Infinito a manifestarsi. Rappresenta il punto dove l\'essere si tocca con il non-essere, dove la coscienza individuale tocca l\'oceano cosmico. In questo momento sei chiamato a contattare il livello più profondo della tua intenzione, al di là di ogni desiderio ego-centrico. Cosa vuoi davvero, a un livello così fondamentale da non poter essere spiegato?',
  luci:'Connessione con il Divino, volontà pura, ispirazione trascendente, capacità di essere canale di luce superiore.',
  ombre:'Disconnessione dalla realtà materiale, difficoltà a incarnare le visioni elevate, tendenza all\'astrazione spirituale senza azione concreta.',
  meditazione:'Siediti in silenzio totale. Non cercare nulla. Non meditare su qualcosa — lascia che la meditazione avvenga da sola. Respira nel punto tra le sopracciglia. Sei già arrivato.' },
  { key:'chochmah', nome:'Chochmah', trad:'Sapienza', num:2, pianeta:'Urano', arcangelo:'Raziel', colore:'Grigio perlato', simbolo:'⚡',
  desc:'Chochmah è la lampada dell\'intuizione — il primo flash di conoscenza pura, prima che la mente la ordini in concetti. È il momento dell\'aha! cosmico. Non è una comprensione lenta: è un lampo. In questo momento sei invitato a fidarti delle intuizioni improvvise, delle visioni che arrivano senza spiegazione logica. L\'universo ti parla attraverso il codice del saggio silenzioso.',
  luci:'Intuizione profetica, genialità creativa, accesso diretto alla conoscenza superiore, innovazione radicale.',
  ombre:'Idee troppo avanzate per essere capite dagli altri, difficoltà a radicare le visioni nella pratica, salti cognitivi che escludono chi non può seguire.',
  meditazione:'Visualizza un fulmine silenzioso nel cielo della mente. Non analizzarlo. Non describerlo. Lasciati attraversare dalla sua luce. Poi scrivi 3 parole chiave — le prime che vengono, senza filtro.' },
  { key:'binah', nome:'Binah', trad:'Comprensione', num:3, pianeta:'Saturno', arcangelo:'Tzaphqiel', colore:'Nero/Amaranto', simbolo:'🏛️',
  desc:'Binah è la Grande Madre — la struttura che dà forma all\'informe. È la comprensione profonda che emerge dalla meditazione lunga, non dalla riflessione rapida. Come l\'acqua che assume la forma del contenitore, Binah ti chiede di esaminare i confini della tua vita: cosa ti contiene, cosa ti struttura, cosa ti limita per proteggerti. I limiti di Binah non sono prigioni — sono il grembo che permette la nascita.',
  luci:'Comprensione profonda dei pattern della vita, saggezza femminile e ricettiva, capacità di contenere e nutrire ciò che cresce, struttura come protezione.',
  ombre:'Eccessiva rigidità strutturale, paura del cambiamento che rompe le forme, melanconia saturnia, difficoltà ad accettare la fluidità della vita.',
  meditazione:'Disegna un triangolo nell\'aria con il dito. Siediti dentro quel triangolo immaginario. Cosa ti contiene? Cosa protegge il tuo spazio sacro? Ringrazia i confini che ti permettono di esistere.' },
  { key:'chesed', nome:'Chesed', trad:'Misericordia', num:4, pianeta:'Giove', arcangelo:'Tzadqiel', colore:'Azzurro profondo', simbolo:'💙',
  desc:'Chesed è la misericordia infinita — l\'espansione dell\'amore divino senza condizioni. Giove porta abbondanza, generosità, la grazia che trabocca. In questo momento sei invitato ad espandere il tuo cuore oltre i confini della paura, del risentimento e della scarsità. Chesed ti dice: c\'è abbastanza — abbastanza amore, abbastanza risorse, abbastanza spazio. La generosità che dai torna moltiplicata. Il perdono è il regalo più grande che puoi farti.',
  luci:'Generosità genuina, compassione senza condizioni, espansione della coscienza, leadership benevola, abbondanza naturale.',
  ombre:'Eccesso di espansione senza discernimento, generosità che diventa codipendenza, difficoltà a porre confini sani, idealismo ingenuo.',
  meditazione:'Apri le braccia completamente. Espira lentamente. Visualizza un onda blu di calore che si espande dal tuo petto e avvolge tutto intorno a te. Ogni persona che vedi oggi, desiderale il bene mentalmente.' },
  { key:'gevurah', nome:'Gevurah', trad:'Rigore/Forza', num:5, pianeta:'Marte', arcangelo:'Qamael', colore:'Rosso scuro', simbolo:'⚔️',
  desc:'Gevurah è la spada della giustizia — la forza necessaria per tagliare ciò che non serve, per dire no con potere, per mantenere l\'integrità sotto pressione. Questo non è crudeltà: è la chirurgia sacra che salva. Cosa nella tua vita richiede un taglio netto? Quale accordo, relazione, abitudine o pensiero stai mantenendo per paura quando dovresti liberartene con rispetto e fermezza? Gevurah ti dà la forza.',
  luci:'Disciplina autentica, coraggio di fare scelte difficili, integrità sotto pressione, capacità di proteggere ciò che è sacro.',
  ombre:'Rigidità eccessiva, giudizio severo verso se stessi e gli altri, uso della forza senza misericordia, perfezionismo che paralizza.',
  meditazione:'Stringi i pugni con tutta la forza. Tienili stretti per 10 secondi. Poi rilascia completamente. Senti la differenza. Cosa devi lasciare andare con questa stessa energia di rilascio?' },
  { key:'tiferet', nome:'Tiferet', trad:'Bellezza', num:6, pianeta:'Sole', arcangelo:'Raphael', colore:'Giallo oro', simbolo:'☀️',
  desc:'Tiferet è il cuore dell\'Albero — il centro di armonia e bellezza dove tutti i contrari si equilibrano. È la sephirah del Cristo, di Buddha, di ogni essere che ha trovato la via di mezzo tra rigore e misericordia, tra ascesa e discesa, tra il cielo e la terra. In questo momento sei invitato a trovare il tuo centro — il luogo in te dove gli opposti non si combattono ma si danzano. Sei equilibrio in movimento.',
  luci:'Armonia autentica, compassione equilibrata, centro stabile in mezzo al caos, bellezza come via spirituale, capacità di mediazione.',
  ombre:'Tendenza al compromesso per mantenere l\'armonia artificiale, difficoltà a stare nella tensione necessaria alla crescita.',
  meditazione:'Metti entrambe le mani sul cuore. Respira in sync — 4 dentro, 4 fuori. Unisci nel cuore il cielo (testa) e la terra (piedi). Ripeti mentalmente: "Sono equilibrio in movimento."' },
  { key:'netzach', nome:'Netzach', trad:'Vittoria/Eternità', num:7, pianeta:'Venere', arcangelo:'Haniel', colore:'Verde smeraldo', simbolo:'💚',
  desc:'Netzach è il regno dell\'emozione, dell\'arte e dell\'istinto — la victoria della vita che persiste nonostante tutto. Venere porta bellezza, piacere, desiderio, la forza creativa che non si arrende. In questo momento sei chiamato a onorare i tuoi desideri profondi — non a scusarti per essi. Cosa ti muove davvero? Cosa ti fa sentire vivo, bello, desiderante? Netzach ti dice che il desiderio autentico è sacro.',
  luci:'Passione creativa inesauribile, connessione con la natura e la bellezza, emozioni come carburante spirituale, persistenza che sorpassa gli ostacoli.',
  ombre:'Eccesso emotivo, incapacità di posticipare la gratificazione, dipendenza da esperienze di picco, perdita di direzione nel mare delle emozioni.',
  meditazione:'Cammina lentamente, scalzo se possibile. Senti ogni passo a terra. Cosa ti trattiene nel camminare? Cosa ti spinge avanti? Lascia che il corpo risponda senza filtri mentali.' },
  { key:'hod', nome:'Hod', trad:'Splendore', num:8, pianeta:'Mercurio', arcangelo:'Michael', colore:'Arancione', simbolo:'🟠',
  desc:'Hod è lo splendore dell\'intelletto — Mercurio che porta chiarezza, linguaggio, comunicazione, logica e la magia delle parole. La tua mente ora è un\'arma raffinata: usala. Hod ti chiede di portare la luce della ragione nelle aree oscure della tua vita, di articolare ciò che finora era solo sentito, di fare la mappa del territorio interiore con parole precise. Scrivi. Parla. Articola la tua verità con chiarezza cristallina.',
  luci:'Chiarezza mentale eccezionale, comunicazione potente, capacità di vedere i pattern logici, scrittura e linguaggio come strumenti magici.',
  ombre:'Intellettualizzazione delle emozioni, arroganza cognitiva, difficoltà a vivere ciò che si capisce, critiche eccessive verso se stessi e gli altri.',
  meditazione:'Scrivi una domanda che ti perseguita. Rispondi con 3 frasi logiche. Poi con 3 frasi intuitive. Confrontale senza giudizio. Cosa emerge tra i due linguaggi?' },
  { key:'yesod', nome:'Yesod', trad:'Fondamento', num:9, pianeta:'Luna', arcangelo:'Gabriel', colore:'Viola', simbolo:'🌙',
  desc:'Yesod è il fondamento immaginale — il filtro tra il mondo spirituale e il materiale, la luna che riflette il sole, il luogo dei sogni e dell\'immaginazione. Qui risiede il tuo inconscio personale, la tua storia di vita emotiva, i pattern ancestrali. In questo momento il tuo inconscio ti sta comunicando qualcosa di importante. Presta attenzione ai sogni, alle sincronicità, alle immagini spontanee. Il velo è sottile.',
  luci:'Ricettività psichica, connessione con i sogni e i simboli, intuizione emotiva profonda, immaginazione creativa come strumento spirituale.',
  ombre:'Instabilità lunare, eccessiva permeabilità alle energie altrui, difficoltà a distinguere reale da immaginario, cicli emotivi non integrati.',
  meditazione:'Prima di dormire, visualizza una porta davanti a te. Non aprirla. Siediti davanti ad essa. Osserva il colore, la forma, cosa senti da dietro. Annota appena svegli.' },
  { key:'malkuth', nome:'Malkuth', trad:'Regno', num:10, pianeta:'Terra', arcangelo:'Sandalphon', colore:'Citrino/Oliva', simbolo:'🌍',
  desc:'Malkuth è il regno manifesto — il punto dove l\'eterno si fa carne, dove il divino si tocca con le mani. È la sephirah della terra, del corpo, del momento presente. Tutti i percorsi dell\'Albero convergono qui: nella tua vita quotidiana, nel tuo corpo, nel tuo lavoro, nelle tue relazioni reali. Non esiste spiritualità autentica che non si incarni. La realtà materiale è sacra. Sei già dove devi essere.',
  luci:'Incarnazione autentica, presenza totale nel corpo e nella realtà, capacità di manifestare i sogni in forma concreta, gratitudine per il materiale.',
  ombre:'Eccessivo attaccamento al materiale, dimenticare la dimensione spirituale dell\'esistenza, reattività alle circostanze senza distanza interiore.',
  meditazione:'Tocca 5 oggetti fisici intorno a te. Per ognuno: nominalo, senti il peso, la temperatura, la trama. Sei qui. Il sacro non è altrove. La realtà è sacra.' }
];

let _kabSeph = 0;
function kabSelSeph(i){
  _kabSeph = i;
  for(let k=0;k<10;k++) document.getElementById('kabTab'+k)?.classList.toggle('active',k===i);
}
function kabRandom(){
  _kabSeph = Math.floor(Math.random()*10);
  kabSelSeph(_kabSeph);
  calcCabala();
}
function calcCabala(){
  const d = DB_CABALA[_kabSeph];
  showAdGate('Cabala — '+d.nome, ()=>{
  $('#cabalaResult').innerHTML = `
  <div style="text-align:center;padding:12px 0">
  <div style="font-size:56px;margin-bottom:8px;filter:drop-shadow(0 0 20px #d4af3760)">${d.simbolo}</div>
  <div style="font-family:'Cinzel',serif;font-size:24px;color:var(--gold);letter-spacing:2px">${d.nome}</div>
  <div style="font-size:12px;color:var(--muted);letter-spacing:2px;margin:3px 0">${d.trad.toUpperCase()}</div>
  <div style="display:inline-block;background:#d4af3720;border:1px solid var(--gold-dim);color:var(--gold);font-family:'Cinzel',serif;font-size:11px;padding:3px 14px;border-radius:10px;margin:8px 0;letter-spacing:1px">Sephirah ${d.num} · ${d.pianeta}</div>
  </div>
  <div class="luna-grid" style="margin-bottom:14px">
  <div class="luna-card"><div class="luna-card-ico">👼</div><div class="luna-card-title">Arcangelo</div><div class="luna-card-val"><strong>${d.arcangelo}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🎨</div><div class="luna-card-title">Colore</div><div class="luna-card-val"><strong>${d.colore}</strong></div></div>
  </div>
  <div class="geo-block"><h4>🌌 Il Messaggio della Sephirah</h4><p>${d.desc}</p></div>
  <div class="geo-block"><h4>✨ Doni</h4><p>${d.luci}</p></div>
  <div class="geo-block"><h4>⚠️ Sfide da Integrare</h4><p>${d.ombre}</p></div>
  <div class="geo-block" style="border-left-color:#c8b4ff"><h4 style="color:#c8b4ff">🧘 Meditazione Kabbalistica</h4><p>${d.meditazione}</p></div>
  <div class="btn-grp">
  <button class="btn btn-sec" onclick="resetCabala()">🔄 Altra Sephirah</button>
  <button class="btn" onclick="saveHistory('Cabala','${d.nome} — ${d.trad}');toast('💾 Salvato nel grimorio')">💾 Salva</button>
  </div>
  `;
  $('#cabalaResult').style.display='block';
  $('#cabalaForm').style.display='none';
  burst();
  saveHistory('Cabala', d.nome + ' — ' + d.trad);
  });
}
function resetCabala(){
  $('#cabalaForm').style.display='block';
  $('#cabalaResult').style.display='none';
}

const DB_ERMETISMO = [
  { key:'mentalismo', nome:'🧠 Il Mentalismo', sub:'L\'Intero è Mente. L\'universo è mentale.',
  chiave:'Osservazione', pianeta:'Saturno', elemento:'Spirito',
  desc:'Il Principio del Mentalismo afferma che la realtà è fondamentalmente mentale — non nel senso che "tutto è solo nella tua testa", ma nel senso cosmico che la Mente è il substrato di tutto ciò che esiste. I tuoi pensieri non sono reazioni alla realtà: sono co-creatori della realtà. Ogni pensiero ripetuto diventa una credenza. Ogni credenza diventa un filtro. Ogni filtro crea la tua versione del mondo. Cambia il pensiero dominante, cambi il tuo universo.',
  pratica:'Prima di ogni decisione importante oggi, ferma e chiedi: "Quale pensiero sta creando questa situazione? È questo il pensiero che voglio seminare?" Rivedi un problema con un pensiero opposto e osserva cosa cambia nella tua percezione.',
  frasi:['"Il tutto è mente — l\'Universo è mentale."','Il pensiero precede la realtà come il seme precede l\'albero.','Cambia il pensiero dominante: cambia il tuo mondo.']
  },
  { key:'corrispondenza', nome:'🔁 La Corrispondenza', sub:'Come in alto, così in basso. Come dentro, così fuori.',
  chiave:'Speculazione', pianeta:'Mercurio', elemento:'Aria',
  desc:'Il Principio della Corrispondenza è la chiave maestra dell\'ermetismo — la comprensione che i piani dell\'esistenza si rispecchiano l\'uno nell\'altro. Il macrocosmo è riflesso nel microcosmo. Ciò che avviene nell\'universo avviene in te. Ciò che avviene in te si manifesta nel mondo. Quando vedi un pattern nella natura, stai guardando il tuo pattern interiore. Quando osservi i tuoi pattern interiori, stai leggendo il libro dell\'universo.',
  pratica:'Scegli un fenomeno naturale che osservi oggi (pioggia, vento, crescita di una pianta, maree). Trova con attenzione il parallelo esatto nella tua vita interiore. Scrivi 3 corrispondenze precise. Questo è il linguaggio dell\'universo.',
  frasi:['"Come sopra, così sotto. Come dentro, così fuori."','Il tuo stato interiore è lo specchio del tuo universo esterno.','Leggi la natura e leggi te stesso — sono lo stesso testo.']
  },
  { key:'vibrazione', nome:'🌊 La Vibrazione', sub:'Nulla riposa — tutto si muove. Tutto vibra.',
  chiave:'Risonanza', pianeta:'Venere', elemento:'Acqua',
  desc:'Il Principio della Vibrazione afferma che tutto nell\'universo è in costante movimento — dalla roccia apparentemente immobile (che vibra a frequenza molecolare) alla coscienza più elevata. Non esiste stato fisso. La differenza tra densità e leggerezza, tra gioia e depressione, tra chiarezza e confusione è una questione di frequenza vibratoria. La buona notizia: puoi cambiare la tua frequenza. La tua voce, il tuo corpo, i tuoi pensieri sono tutti strumenti di accordatura.',
  pratica:'Scegli una parola che hai detto molte volte oggi — una con forte carica emotiva. Ripetila lentamente 10 volte, poi rapidamente 10 volte. Nota come la stessa parola cambia la tua energia interna. Poi scegli una parola di alta frequenza ("gratitudine", "abbondanza", "luce") e fai lo stesso.',
  frasi:['"Nulla è in stato di quiete — tutto si muove, tutto vibra."','Sintonizza la tua frequenza sulla realtà che vuoi attirare.','La voce, il respiro, il pensiero: tutti strumenti per alzare la vibrazione.']
  },
  { key:'polarita', nome:'⚖️ La Polarità', sub:'Tutto è duale. Gli opposti sono identici in natura.',
  chiave:'Trasmutazione', pianeta:'Marte', elemento:'Fuoco',
  desc:'Il Principio della Polarità rivela che gli opposti che sembrano in guerra sono in realtà gli estremi dello stesso continuum. Caldo e freddo sono "temperatura" — diversa in grado, identica in natura. Amore e odio sono entrambi "attaccamento" — uno verso, uno contro. Bene e male sono entrambi "forza morale". Questa comprensione libera: non devi distruggere l\'ombra, devi trasmutarla. Il maestro ermetico non combatte gli opposti: li trasforma alzando la frequenza.',
  pratica:'Prendi il tuo problema più pressante. Identifica il suo opposto esatto. Poi trova il punto di mezzo — la tensione creativa tra i due poli. Infine: cosa diventa il problema quando lo vedi come una dualità da integrare invece che un ostacolo da eliminare?',
  frasi:['"Tutto è duale. Tutto ha i suoi poli. Gli opposti sono identici in natura."','Non combattere la tua ombra — trasmutala alzando la sua frequenza.','Ogni negazione contiene la sua affermazione nascosta.']
  },
  { key:'ritmo', nome:'🔄 Il Ritmo', sub:'Tutto scorre dentro e fuori. Tutto ha le sue maree.',
  chiave:'Neutralizzazione', pianeta:'Luna', elemento:'Terra',
  desc:'Il Principio del Ritmo rivela che tutto segue cicli — dentro e fuori, su e giù, avanzamento e ritiro. Non esistono periodi eternamente buoni o eternamente cattivi: esistono fasi di un ciclo che si ripete in spirale. Il maestro ermetico non si oppone al ritmo — lo naviga. Quando la marea sale, avanza. Quando si ritira, recupera le forze. La resistenza ai cicli naturali è la fonte di gran parte della sofferenza umana.',
  pratica:'Osserva il tuo ciclo energetico delle prossime 24 ore. Nota i picchi e le valli. Pianifica le azioni importanti nei momenti di alta marea. Usa i momenti di bassa marea per nutrirti, riposare, riflettere. Non forzare il ritmo — cavalcalo.',
  frasi:['"Tutto scorre dentro e fuori. Tutto ha le sue maree."','Non nuotare contro la corrente — impara a navigarla con intelligenza.','Ogni ritiro è preparazione per il prossimo avanzamento.']
  },
  { key:'causa', nome:'⚙️ Causa ed Effetto', sub:'Ogni causa ha il suo effetto. Ogni effetto la sua causa.',
  chiave:'Responsabilità', pianeta:'Sole', elemento:'Fuoco',
  desc:'Il Principio di Causa ed Effetto — il più scomodo dei sette — afferma che nulla accade per caso. Ogni risultato ha una causa. Ogni situazione in cui ti trovi è il frutto di cause precedenti — alcune tue, alcune ereditate, alcune collettive. Questo non è un giudizio: è una liberazione. Se hai contribuito a creare la situazione, puoi contribuire a trasformarla. Il maestro ermetico smette di essere effetto delle circostanze e impara a diventare causa consapevole della propria vita.',
  pratica:'Scegli un risultato concreto che vuoi nella tua vita entro 30 giorni. Risali a ritroso: quale azione quotidiana, praticata ogni giorno, genererebbe quel risultato? Inizia quella azione oggi. Non domani. Oggi.',
  frasi:['"Ogni causa ha il suo effetto. Ogni effetto la sua causa."','Non sei vittima delle circostanze: sei causa dei tuoi risultati.','Il presente è il futuro che hai creato ieri. Il domani è quello che crei adesso.']
  },
  { key:'genere', nome:'⚛️ Il Genere', sub:'Il genere è in tutto. Il maschile e il femminile operano in tutto.',
  chiave:'Integrazione', pianeta:'Giove', elemento:'Spirito',
  desc:'Il Principio del Genere non riguarda il sesso biologico: riguarda le due polarità fondamentali della coscienza — il maschile (attivo, proiettivo, logico) e il femminile (ricettivo, contenitivo, intuitivo) — presenti in tutti gli esseri. La creatività autentica nasce dall\'unione sacra di queste due polarità in te. Quando usi solo la tua parte attiva, esaurisci le risorse senza ricarica. Quando usi solo la ricettiva, accumuli senza manifestare. Il maestro integra entrambe.',
  pratica:'Fai oggi un\'azione maschile-attiva (progetta qualcosa di concreto, prendi una decisione, esegui un piano) e un\'azione femminile-ricettiva (ascolta senza rispondere, medita senza obiettivo, accetta un\'emozione senza trasformarla). Poi uniscile in un gesto consapevole.',
  frasi:['"Il genere si manifesta in tutto — il maschile e il femminile sono principi, non limitazioni."','Crei davvero solo quando maschile e femminile danzano insieme in te.','Ricevi come il femminile. Agisci come il maschile. Sii come l\'Uno.']
  }
];

let _herPrincipio = 0;
function herSelPrincipio(i){
  _herPrincipio = i;
  for(let k=0;k<7;k++) document.getElementById('herTab'+k)?.classList.toggle('active',k===i);
}
function herRandom(){
  _herPrincipio = Math.floor(Math.random()*7);
  herSelPrincipio(_herPrincipio);
  calcErmetismo();
}
function calcErmetismo(){
  const d = DB_ERMETISMO[_herPrincipio];
  showAdGate('Ermetismo — '+d.nome, ()=>{
  const frasiHtml = d.frasi.map(f=>`<div style="padding:8px 12px;background:#09040f;border-left:3px solid var(--gold-dim);border-radius:0 8px 8px 0;margin-bottom:6px;font-style:italic;color:var(--muted);font-size:12.5px">${f}</div>`).join('');
  $('#hermetResult').innerHTML = `
  <div style="text-align:center;padding:12px 0">
  <div style="font-family:'Cinzel',serif;font-size:22px;color:var(--gold);letter-spacing:1px">${d.nome}</div>
  <div style="font-size:11px;color:var(--muted);letter-spacing:2px;margin:5px 0;font-style:italic">"${d.sub}"</div>
  <div class="luna-grid" style="margin:12px 0">
  <div class="luna-card"><div class="luna-card-ico">🔑</div><div class="luna-card-title">Chiave</div><div class="luna-card-val"><strong>${d.chiave}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🪐</div><div class="luna-card-title">Pianeta</div><div class="luna-card-val"><strong>${d.pianeta}</strong></div></div>
  </div>
  </div>
  <div class="geo-block"><h4>📜 Il Principio</h4><p>${d.desc}</p></div>
  <div class="geo-block" style="border-left-color:#c8b4ff"><h4 style="color:#c8b4ff">⚙️ Pratica Quotidiana</h4><p>${d.pratica}</p></div>
  <div style="margin-bottom:14px">${frasiHtml}</div>
  <div class="btn-grp">
  <button class="btn btn-sec" onclick="resetErmetismo()">🔄 Altro Principio</button>
  <button class="btn" onclick="saveHistory('Ermetismo','${d.nome}');toast('💾 Salvato nel grimorio')">💾 Salva</button>
  </div>
  `;
  $('#hermetResult').style.display='block';
  $('#hermetForm').style.display='none';
  burst();
  saveHistory('Ermetismo', d.nome);
  });
}
function resetErmetismo(){
  $('#hermetForm').style.display='block';
  $('#hermetResult').style.display='none';
}

const DB_NEGROMANZIA = [
  { key:'antenate', reame:'👵 Antenate & Guide Familiari', sottotitolo:'Memorie di Sangue e Saggezza Trasmessa',
  elemento:'Terra', pianeta:'Luna Nera', colore:'Grigio cenere', erba:'Salvia', ora:'03:00–05:00',
  desc:'Il regno degli Antenati è il più accessibile e il più sicuro dei piani eterei. Le guide familiari non sono entità pericolose — sono i sapienti del tuo albero genealogico, coloro che ti hanno preceduto e che portano una saggezza acquisita attraverso le stesse sfide che stai affrontando. Chiamarli non è evocazione — è memoria. Le loro risposte arrivano come ricordi spontanei, sogni chiari, sensazioni di familiarità. Il confine tra i mondi è più sottile di quanto pensi, e il sangue è il filo che lo attraversa.',
  ritualeEtico:'Accendi una candela bianca (non nera — è un dialogo d\'amore, non di potere). Metti sul tavolo un oggetto appartenuto a un antenato, o una sua fotografia. Nomina ad alta voce 3 antenati — il nome, se lo conosci. Offri un bicchiere d\'acqua fresca. Siediti in silenzio per 10 minuti. Ascolta. Le risposte potrebbero non venire subito: arriveranno nei sogni o come pensieri spontanei.',
  protezione:'Inizia sempre con: "Chiedo di essere visitato solo da antenati che mi vogliono bene e che operano per il mio più alto bene." Non invocare i morti recenti (aspetta almeno 1 anno). Chiudi sempre il rituale ringraziando e spegnendo la candela.',
  avvertenze:'Questa pratica è memoria e onore — non è magia nera. Se senti resistenza emotiva intensa, interrompi e riprendi in un altro momento. Non praticare in stati di lutto acuto non elaborato.'
  },
  { key:'luoghi', reame:'🏚️ Genius Loci & Spiriti della Terra', sottotitolo:'Custodi dei Luoghi e Memoria dei Posti',
  elemento:'Terra', pianeta:'Saturno', colore:'Verde muschio', erba:'Rosmarino', ora:'Tramonto',
  desc:'Ogni luogo ha una memoria. Le case vecchie, i boschi, le chiese, i crocevia — tutti portano l\'impronta energetica degli eventi e delle coscienze che li hanno abitati. Il Genius Loci è lo spirito custode di un luogo — non necessariamente personale o benevolo, ma fondamentalmente territoriale. Dialogare con esso significa chiedere rispetto e permesso prima di agire in uno spazio. Chi entra in luoghi antichi senza questo riconoscimento porta via con sé ciò che il luogo decide di affidare — non sempre ciò che voleva.',
  ritualeEtico:'Entra nel luogo lentamente. Fermati sulla soglia. Senti il silenzio. Poi di\' ad alta voce (o mentalmente): "Chiedo il permesso di entrare in questo spazio con rispetto." Porta un\'offerta piccola: una moneta, un seme, una pietra raccolta altrove. Tocca un elemento naturale (pietra, albero, terra) e lascia che il luogo ti parli attraverso le sensazioni fisiche. Quando esci, ringrazia.',
  protezione:'Non prendere nulla da luoghi antichi senza chiedere mentalmente il permesso. Se senti oppressione o disagio, allontanati senza creare resistenza. Non provocare, non ridicolizzare, non sfidare le energie di un luogo.',
  avvertenze:'Pratica di rispetto, non di potere. Non cercare spiriti di luoghi oscuri per curiosità o brivido — le energie dei luoghi difficili vanno onorate da distanza sicura, non contattate direttamente.'
  },
  { key:'memorie', reame:'📜 Echi & Memorie Non Risolte', sottotitolo:'Questioni Sospese che Chiedono Chiusura',
  elemento:'Acqua', pianeta:'Nettuno', colore:'Blu notte', erba:'Lavanda', ora:'Mezzanotte',
  desc:'Non tutti i "contatti" con il piano sottile sono entità — molti sono echi. Memorie cristallizzate in emotività non risolta che continuano a vibrare in un luogo o in una persona come un disco rotto. I famigerati "fantasmi" di molte tradizioni sono spesso questo: pattern emozionali senza un\'anima cosciente, che ripetono meccanicamente la loro ultima registrazione forte. La negromanzia etica in questo contesto non evoca — libera. Porta presenza e compassione verso ciò che non riesce a finire.',
  ritualeEtico:'Scrivi su carta la domanda non detta — la cosa che senti sospesa, irrisolta, che "aleggia" in una situazione o luogo. Bruciala in un contenitore sicuro. Mentre brucia, di\': "Ciò che era sospeso ora trova la sua forma definitiva. Ciò che non era detto ora è ascoltato. Il ciclo si chiude." Non cercare risposte immediate — lascia che il fumo porti via il peso. Seppelli le ceneri.',
  protezione:'Lavora con una sola situazione alla volta. Non aprire più di un echo contemporaneamente. Se senti emergere emozioni intense, fermati — hai già contattato ciò che cerchi, anche se non lo vedi.',
  avvertenze:'Questa è terapia energetica, non spiritismo. Se hai lutti irrisolti, questo rituale può amplificarli — considera di lavorare con un terapeuta in parallelo se il dolore è recente o intenso.'
  },
  { key:'transizione', reame:'🕊️ Guardiani della Soglia', sottotitolo:'Chi Accompagna nei Passaggi e nei Cambiamenti',
  elemento:'Aria', pianeta:'Urano', colore:'Argento', erba:'Iperico', ora:'Alba',
  desc:'Ogni passaggio importante della vita — un cambiamento di lavoro, una relazione che finisce, un trasloco, una malattia, una guarigione — ha i suoi Guardiani della Soglia. Sono le forze che presidiano i confini tra una fase e l\'altra della vita, che assicurano che la transizione avvenga correttamente. Non sono entità da invocare: sono presenze da onorare e riconoscere. Quando li onori consapevolmente, i passaggi si fanno più fluidi, le morti simboliche meno dolorose, le rinascite più potenti.',
  ritualeEtico:'Traccia un cerchio intorno a te con gesso bianco o sale grosso. Al centro metti un oggetto che rappresenta la transizione che stai vivendo — qualcosa che appartiene alla fase che si chiude. Siediti nel cerchio. Respira 4-7-8 per 5 cicli. Non cercare di evocare: senti semplicemente la soglia. Cosa finisce? Cosa inizia? Lascia che il Guardiano ti dia il suo sigillo — un\'immagine, una sensazione, una parola. Poi togli l\'oggetto dal cerchio e ponilo all\'esterno. Esci dal cerchio.',
  protezione:'Chiudi sempre il cerchio quando finisci (muoviti in senso antiorario). Non lasciare il cerchio aperto anche se sembrava non succedere nulla. Il Guardiano ha già lavorato nella tua assenza.',
  avvertenze:'Lavora con un solo passaggio alla volta. Se hai paura intensa, non procedere — la paura crea blocchi che il rituale non può superare. Elabora la paura prima, poi ritorna al rito.'
  }
];

let _necroReame = 0;
function necroSelReame(i){
  _necroReame = i;
  for(let k=0;k<4;k++) document.getElementById('necroTab'+k)?.classList.toggle('active',k===i);
}
function necroRandom(){
  _necroReame = Math.floor(Math.random()*4);
  necroSelReame(_necroReame);
  calcNegromanzia();
}
function calcNegromanzia(){
  const domanda = ($('#necroDomanda')?.value||'').trim();
  const d = DB_NEGROMANZIA[_necroReame];
  showAdGate('Negromanzia — '+d.reame.split(' ').slice(1).join(' '), ()=>{
  const domHtml = domanda ? `<div class="geo-question-shown">❓ "${domanda}"</div>` : '';
  $('#necroResult').innerHTML = `
  <div style="text-align:center;padding:12px 0">
  <div style="font-size:56px;margin-bottom:8px;filter:drop-shadow(0 0 20px #7a5ea060)">${d.reame.split(' ')[0]}</div>
  <div style="font-family:'Cinzel',serif;font-size:20px;color:var(--gold);letter-spacing:1.5px">${d.reame.split(' ').slice(1).join(' ')}</div>
  <div style="font-size:11px;color:var(--muted);letter-spacing:1.5px;margin:4px 0">${d.sottotitolo}</div>
  </div>
  <div class="luna-grid" style="margin-bottom:14px">
  <div class="luna-card"><div class="luna-card-ico">🌿</div><div class="luna-card-title">Elemento</div><div class="luna-card-val"><strong>${d.elemento}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🌑</div><div class="luna-card-title">Pianeta</div><div class="luna-card-val"><strong>${d.pianeta}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">🎨</div><div class="luna-card-title">Colore</div><div class="luna-card-val"><strong>${d.colore}</strong></div></div>
  <div class="luna-card"><div class="luna-card-ico">⏰</div><div class="luna-card-title">Ora</div><div class="luna-card-val"><strong>${d.ora}</strong></div></div>
  </div>
  ${domHtml}
  <div class="geo-block"><h4>🕯️ Il Reame</h4><p>${d.desc}</p></div>
  <div class="geo-block" style="border-left-color:#c8b4ff"><h4 style="color:#c8b4ff">📜 Rituale di Ascolto Etico</h4><p>${d.ritualeEtico}</p></div>
  <div class="geo-block" style="border-left-color:#4ade80"><h4 style="color:#4ade80">🛡️ Protezione</h4><p>${d.protezione}</p></div>
  <div class="geo-block" style="border-left-color:#f87171"><h4 style="color:#f87171">⚠️ Avvertenze</h4><p>${d.avvertenze}</p></div>
  <div class="btn-grp">
  <button class="btn btn-sec" onclick="resetNegromanzia()">🔄 Altro Reame</button>
  <button class="btn" onclick="saveHistory('Negromanzia','${d.reame.split(' ').slice(1).join(' ')}');toast('💾 Salvato nel grimorio')">💾 Salva</button>
  </div>
  `;
  $('#necroResult').style.display='block';
  $('#necroForm').style.display='none';
  burst();
  saveHistory('Negromanzia', d.reame.split(' ').slice(1).join(' '));
  });
}
function resetNegromanzia(){
  $('#necroForm').style.display='block';
  $('#necroResult').style.display='none';
  if($('#necroDomanda')) $('#necroDomanda').value='';
}

/* ── BIBLIOMANZIA & TASSEOMANZIA ── */
let _biblioMode = 0; // 0=bibliomanzia, 1=tasseomanzia

function resetBibliomanzia(){
  _biblioMode = 0;
  const f=$('#biblioForm'); if(f) f.style.display='block';
  const r=$('#biblioResult'); if(r){ r.style.display='none'; r.innerHTML=''; }
  ['biblioTab0','biblioTab1'].forEach((id,i)=>{
    const t=$('#'+id); if(t) t.classList.toggle('active', i===0);
  });
  const d=$('#biblioDesc');
  if(d) d.innerHTML='La <b>Bibliomanzia</b> consiste nell\'aprire un libro sacro o di saggezza a una pagina casuale per ricevere un messaggio dall\'universo.';
}

function selBiblioMode(mode){
  _biblioMode = mode;
  ['biblioTab0','biblioTab1'].forEach((id,i)=>{
    const t=$('#'+id); if(t) t.classList.toggle('active', i===mode);
  });
  const d=$('#biblioDesc');
  if(!d) return;
  if(mode===0){
    d.innerHTML='La <b>Bibliomanzia</b> consiste nell\'aprire un libro sacro o di saggezza a una pagina casuale per ricevere un messaggio dall\'universo.';
  } else {
    d.innerHTML='La <b>Tasseomanzia</b> legge i fondi di tè o caffè come mappa simbolica dell\'anima. Concentrati sulla tua domanda, poi premi per rivelare i simboli.';
  }
}

function calcBiblioTasseo(){
  const frasi_biblio = [
    {titolo:'📖 Libro della Saggezza', testo:'Ogni cosa ha il suo tempo e la sua stagione sotto il cielo. Questo momento richiede pazienza e fiducia nel processo naturale della vita.'},
    {titolo:'📖 Upanishad', testo:'L\'Atman è Brahman — il tuo Sé profondo è tutt\'uno con l\'universo. Ciò che cerchi fuori è già dentro di te.'},
    {titolo:'📖 Tao Tê Ching', testo:'Il Tao che può essere detto non è l\'eterno Tao. Agisci senza forzare. La via dell\'acqua supera la roccia senza sforzo.'},
    {titolo:'📖 I Ching — Mutamento', testo:'Il cambiamento è l\'unica costante. Abbandona la resistenza e lascia che la trasformazione avvenga naturalmente.'},
    {titolo:'📖 Vangelo di Tommaso', testo:'Conosci ciò che è davanti a te, e ciò che è nascosto ti sarà rivelato. La luce è dentro di te.'},
    {titolo:'📖 Corpus Hermeticum', testo:'Come in alto, così in basso. Le forze cosmiche rispecchiano la tua situazione interiore. Osserva i segni.'},
    {titolo:'📖 Libro dei Salmi', testo:'Il Signore è il mio pastore, nulla mi mancherà. Attraversa la valle oscura sapendo di non essere solo.'},
    {titolo:'📖 Bhagavad Gita', testo:'Esegui il tuo dovere senza attaccarti ai frutti dell\'azione. L\'azione giusta porta la sua ricompensa nel momento giusto.'},
  ];
  const simboli_tasseo = [
    {simbolo:'🐍', nome:'Serpente', significato:'Trasformazione profonda in atto. Lascia andare la vecchia pelle — una nuova versione di te sta emergendo.'},
    {simbolo:'🦅', nome:'Aquila', significato:'Visione d\'insieme. Sei chiamato a elevarti sopra le preoccupazioni quotidiane per vedere la situazione dall\'alto.'},
    {simbolo:'🌙', nome:'Luna Crescente', significato:'Nuovi inizi e crescita intuitiva. Fidati dei tuoi sogni e delle sensazioni notturne nelle prossime settimane.'},
    {simbolo:'⚓', nome:'Ancora', significato:'Stabilità e radicamento. È il momento di costruire fondamenta solide, non di vagare.'},
    {simbolo:'🌺', nome:'Fiore', significato:'Fioritura imminente. Qualcosa che hai coltivato con cura sta per sbocciare in modo inaspettato e bellissimo.'},
    {simbolo:'🔑', nome:'Chiave', significato:'La risposta che cerchi è più vicina di quanto pensi. Una porta si sta aprendo — riconosci l\'opportunità.'},
    {simbolo:'💧', nome:'Goccia d\'Acqua', significato:'Emozioni da elaborare. Permettiti di sentire pienamente — le lacrime e la gioia portano entrambe chiarezza.'},
    {simbolo:'⭐', nome:'Stella a cinque punte', significato:'Protezione spirituale e guida superiore. Non sei solo in questo cammino — forze benigne ti accompagnano.'},
    {simbolo:'🏔️', nome:'Montagna', significato:'Una sfida importante da affrontare. La fatica della salita è reale, ma dalla vetta la vista cambierà tutto.'},
    {simbolo:'🌊', nome:'Onda', significato:'Un\'ondata di cambiamento è in arrivo. Impara a cavalcarla piuttosto che resisterle.'},
  ];
  const r=$('#biblioResult');
  const f=$('#biblioForm');
  if(!r) return;
  let html='';
  if(_biblioMode===0){
    const item=frasi_biblio[Math.floor(Math.random()*frasi_biblio.length)];
    html=`<div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.3);border-radius:14px;padding:20px;text-align:center">
      <div style="font-size:28px;margin-bottom:12px">📖</div>
      <div style="font-family:'Cinzel',serif;color:var(--gold);font-size:13px;margin-bottom:14px;letter-spacing:1px">${item.titolo}</div>
      <p style="font-family:'Crimson Pro',Georgia,serif;font-style:italic;font-size:16px;line-height:1.8;color:var(--text)">"${item.testo}"</p>
      <div style="margin-top:18px;font-size:10px;color:var(--muted);letter-spacing:3px">✦ ✦ ✦</div>
    </div>
    <button class="btn btn-sec" onclick="resetBibliomanzia()" style="margin-top:14px">🔄 Nuova Pagina</button>`;
  } else {
    const item=simboli_tasseo[Math.floor(Math.random()*simboli_tasseo.length)];
    const extra=simboli_tasseo[Math.floor(Math.random()*simboli_tasseo.length)];
    html=`<div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.3);border-radius:14px;padding:20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">${item.simbolo}</div>
      <div style="font-family:'Cinzel',serif;color:var(--gold);font-size:14px;margin-bottom:12px">${item.nome}</div>
      <p style="font-size:14px;line-height:1.7;color:var(--text);margin-bottom:16px">${item.significato}</p>
      <div style="border-top:1px solid rgba(212,175,55,0.2);padding-top:14px;margin-top:4px">
        <div style="font-size:11px;color:var(--muted);margin-bottom:8px;letter-spacing:1px">SIMBOLO SECONDARIO</div>
        <div style="font-size:28px;margin-bottom:6px">${extra.simbolo}</div>
        <div style="font-family:'Cinzel',serif;color:var(--gold);font-size:12px;margin-bottom:8px">${extra.nome}</div>
        <p style="font-size:13px;line-height:1.6;color:var(--muted)">${extra.significato}</p>
      </div>
    </div>
    <button class="btn btn-sec" onclick="resetBibliomanzia()" style="margin-top:14px">☕ Nuova Lettura</button>`;
  }
  if(f) f.style.display='none';
  r.innerHTML=html;
  r.style.display='block';
}

const DB_SIGILLI_SALOMONE = [
  {
  pianeta: 'SATURNO',
  simbolo: '♄',
  nome: 'Sigillo di Saturno',
  keywords: ['protezione','disciplina','saggezza','tempo','karma','limite','struttura','perseveranza','vecchio','meditazione','silenzio','solitudine'],
  descrizione: 'Il Sigillo di Saturno governa la disciplina, la saggezza antica e la protezione dalle influenze negative. Inciso nel piombo o tracciato in inchiostro nero, dona costanza e capacità di superare le prove del tempo.',
  mantra: 'Per Saturnum, fundamentum aeternum',
  colore: '#6b6b8a',
  geomFn: 'saturno'
  },
  {
  pianeta: 'GIOVE',
  simbolo: '♃',
  nome: 'Sigillo di Giove',
  keywords: ['ricchezza','abbondanza','prosperità','fortuna','successo','denaro','crescita','espansione','onore','gloria','vittoria','autorità'],
  descrizione: 'Il Sigillo di Giove attira ricchezza, prosperità e onori. È il talismano dell\'abbondanza e della giustizia divina, da incidere su lamine di stagno o disegnare in inchiostro blu durante l\'ora di Giove.',
  mantra: 'Iuppiter omnipotens, dator bonorum',
  colore: '#4a7fbf',
  geomFn: 'giove'
  },
  {
  pianeta: 'MARTE',
  simbolo: '♂',
  nome: 'Sigillo di Marte',
  keywords: ['coraggio','forza','vittoria','battaglia','passione','azione','difesa','potere','volontà','guerra','energia','determinazione'],
  descrizione: 'Il Sigillo di Marte conferisce coraggio, forza fisica e vittoria nelle battaglie della vita. Tradizionalmente inciso su ferro durante l\'ora di Marte, protegge dai nemici e accende la volontà.',
  mantra: 'Mars potens, vincere et superare',
  colore: '#c84a3a',
  geomFn: 'marte'
  },
  {
  pianeta: 'SOLE',
  simbolo: '☉',
  nome: 'Sigillo del Sole',
  keywords: ['successo','gloria','illuminazione','salute','vitalità','carisma','leadership','luce','splendore','fama','autorità','re','centro','cuore'],
  descrizione: 'Il Sigillo del Sole irradia successo, gloria e vitalità. Inciso sull\'oro o tracciato in inchiostro giallo, dona carisma, salute radiosa e favori dai potenti. Sigillo della suprema luce.',
  mantra: 'Sol invictus, lux mundi',
  colore: '#e6b800',
  geomFn: 'sole'
  },
  {
  pianeta: 'VENERE',
  simbolo: '♀',
  nome: 'Sigillo di Venere',
  keywords: ['amore','bellezza','seduzione','armonia','arte','piacere','romanticismo','desiderio','attrazione','passione','tenerezza','grazia','femminile'],
  descrizione: 'Il Sigillo di Venere apre i cuori e attira amore, bellezza e armonia. Inciso sul rame con inchiostro verde, è il talismano per relazioni felici, riconciliazioni e seduzione benevola.',
  mantra: 'Venus dea, amoris flamma',
  colore: '#3da88e',
  geomFn: 'venere'
  },
  {
  pianeta: 'MERCURIO',
  simbolo: '☿',
  nome: 'Sigillo di Mercurio',
  keywords: ['comunicazione','intelligenza','viaggio','commercio','studio','scrittura','parola','intelletto','astuzia','apprendimento','contratto','messaggio','idea'],
  descrizione: 'Il Sigillo di Mercurio aguzza l\'intelletto, favorisce la comunicazione e protegge i viaggi. Inciso sull\'argento-mercurio o tracciato in inchiostro arancione, è essenziale per studiosi e mercanti.',
  mantra: 'Mercurius velox, sermo et sapientia',
  colore: '#d97a3a',
  geomFn: 'mercurio'
  },
  {
  pianeta: 'LUNA',
  simbolo: '☾',
  nome: 'Sigillo della Luna',
  keywords: ['intuizione','sogno','psichismo','divinazione','emozione','famiglia','casa','madre','ciclo','mistero','notte','acqua','femminile','medianità'],
  descrizione: 'Il Sigillo della Luna risveglia l\'intuizione, i sogni profetici e i poteri psichici. Inciso sull\'argento durante la luna crescente, protegge il viaggiatore notturno e amplifica la medianità.',
  mantra: 'Luna mater, regina noctis',
  colore: '#b8a8d4',
  geomFn: 'luna'
  }
];

function _generaSigilloSVG(sigillo){
  const c = sigillo.colore;
  const sym = sigillo.simbolo;
  let inner = '';
  switch(sigillo.geomFn){
  case 'saturno':

  inner = `
  <polygon points="100,15 170,55 170,135 100,175 30,135 30,55" fill="none" stroke="${c}" stroke-width="2"/>
  <polygon points="100,40 145,65 145,125 100,150 55,125 55,65" fill="none" stroke="${c}" stroke-width="1.2"/>
  <path d="M100,45 L135,135 L55,80 L145,80 L65,135 Z" fill="none" stroke="${c}" stroke-width="1.4" opacity=".7"/>
  `;
  break;
  case 'giove':

  inner = `
  <circle cx="100" cy="95" r="80" fill="none" stroke="${c}" stroke-width="2"/>
  <rect x="40" y="35" width="120" height="120" fill="none" stroke="${c}" stroke-width="1.5" transform="rotate(45 100 95)"/>
  <path d="M100,20 L110,90 L180,95 L110,100 L100,170 L90,100 L20,95 L90,90 Z" fill="${c}" opacity=".25"/>
  `;
  break;
  case 'marte':

  inner = `
  <circle cx="100" cy="95" r="78" fill="none" stroke="${c}" stroke-width="2"/>
  <polygon points="100,30 145,160 30,80 170,80 55,160" fill="none" stroke="${c}" stroke-width="1.6"/>
  <circle cx="100" cy="95" r="40" fill="none" stroke="${c}" stroke-width="1" opacity=".6"/>
  `;
  break;
  case 'sole':

  let rays = '';
  for(let i=0; i<12; i++){
  const a = (i*30) * Math.PI/180;
  const x1 = 100 + Math.cos(a)*45;
  const y1 = 95 + Math.sin(a)*45;
  const x2 = 100 + Math.cos(a)*82;
  const y2 = 95 + Math.sin(a)*82;
  rays += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${c}" stroke-width="2"/>`;
  }
  inner = `
  ${rays}
  <circle cx="100" cy="95" r="42" fill="none" stroke="${c}" stroke-width="2.5"/>
  <circle cx="100" cy="95" r="6" fill="${c}"/>
  `;
  break;
  case 'venere':

  inner = `
  <circle cx="100" cy="95" r="78" fill="none" stroke="${c}" stroke-width="2"/>
  <circle cx="100" cy="95" r="55" fill="none" stroke="${c}" stroke-width="1" opacity=".5"/>
  <polygon points="100,30 130,150 25,75 175,75 70,150" fill="none" stroke="${c}" stroke-width="1.6"/>
  `;
  break;
  case 'mercurio':

  inner = `
  <circle cx="100" cy="95" r="78" fill="none" stroke="${c}" stroke-width="2"/>
  <path d="M100,30 Q60,60 100,95 Q140,130 100,160" fill="none" stroke="${c}" stroke-width="1.6"/>
  <path d="M100,30 Q140,60 100,95 Q60,130 100,160" fill="none" stroke="${c}" stroke-width="1.6"/>
  <line x1="100" y1="20" x2="100" y2="170" stroke="${c}" stroke-width="1" opacity=".5"/>
  `;
  break;
  case 'luna':

  inner = `
  <circle cx="100" cy="95" r="78" fill="none" stroke="${c}" stroke-width="2"/>
  <path d="M 130 50 A 55 55 0 1 0 130 140 A 40 40 0 1 1 130 50 Z" fill="${c}" opacity=".35" stroke="${c}" stroke-width="1.5"/>
  <circle cx="55" cy="50" r="2" fill="${c}"/>
  <circle cx="40" cy="90" r="1.5" fill="${c}"/>
  <circle cx="50" cy="135" r="2" fill="${c}"/>
  <circle cx="160" cy="160" r="1.5" fill="${c}"/>
  `;
  break;
  }
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="95" r="88" fill="none" stroke="${c}" stroke-width="1" opacity=".4"/>
  ${inner}
  <text x="100" y="108" text-anchor="middle" font-family="serif" font-size="36" fill="${c}" opacity=".95">${sym}</text>
  </svg>
  `;
}

function _scoreSigillo(testo, sigillo){
  if(!testo) return 0;
  const t = testo.toLowerCase();
  let score = 0;
  sigillo.keywords.forEach(k=>{
  if(t.includes(k)) score += 10;

  else if(k.length>4 && t.includes(k.slice(0,4))) score += 3;
  });
  return score;
}

function trovaSigilloSalomone(){
  const intento = ($('#sigilloIntento')?.value||'').trim();
  const nome = ($('#sigilloNome')?.value||'').trim();
  if(!intento || !nome){
  if(typeof toast === 'function') toast('🔯 Inserisci nome e intenzione');
  else alert('Inserisci nome e intenzione');
  return;
  }
  if(typeof showAdGate === 'function'){
  showAdGate('Sigillo di Salomone', ()=> _renderSigillo(intento, nome));
  } else {
  _renderSigillo(intento, nome);
  }
}

function _renderSigillo(intento, nome){

  const ranking = DB_SIGILLI_SALOMONE.map(s=>({s, score:_scoreSigillo(intento, s)}));
  let best = ranking.sort((a,b)=>b.score-a.score)[0];
  let sigillo;
  if(best && best.score > 0){
  sigillo = best.s;
  } else {

  const idx = nome.split('').reduce((a,c)=>a+c.charCodeAt(0),0) % DB_SIGILLI_SALOMONE.length;
  sigillo = DB_SIGILLI_SALOMONE[idx];
  }

  if($('#sigilloTitolo')) $('#sigilloTitolo').textContent = '✦ ' + sigillo.nome + ' ✦';
  if($('#sigilloSVG')) $('#sigilloSVG').innerHTML = _generaSigilloSVG(sigillo);
  if($('#sigilloPianeta')) $('#sigilloPianeta').textContent = sigillo.pianeta;
  if($('#sigilloDescrizione')) $('#sigilloDescrizione').textContent = sigillo.descrizione;
  if($('#sigilloMantra')) $('#sigilloMantra').textContent = '« ' + sigillo.mantra + ' »';

  $('#sigilloForm').style.display = 'none';
  $('#sigilloResult').style.display = 'block';
  if(typeof burst === 'function') burst();
  if(typeof saveHistory === 'function') saveHistory('Sigillo di Salomone', sigillo.nome + ' — ' + intento);
}

function resetSigillo(){
  if($('#sigilloForm')) $('#sigilloForm').style.display = 'block';
  if($('#sigilloResult')) $('#sigilloResult').style.display = 'none';
  if($('#sigilloIntento')) $('#sigilloIntento').value = '';
  if($('#sigilloNome')) $('#sigilloNome').value = '';
}

(function registerSW(){
  if(!('serviceWorker' in navigator)) return;

  // Mostra banner aggiornamento con supporto skipWaiting
  function showUpdateBanner(newWorker){
    const existing = document.getElementById('_sw-update-banner');
    if(existing) existing.remove();
    const banner = document.createElement('div');
    banner.id = '_sw-update-banner';
    banner.style.cssText = `
      position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
      background:linear-gradient(135deg,#2a1a4e,#1a0a3e);
      border:1px solid var(--gold,#d4af37);
      color:var(--gold,#d4af37);
      padding:12px 18px; border-radius:12px;
      display:flex; align-items:center; gap:12px;
      font-family:'Cinzel',serif; font-size:13px;
      box-shadow:0 4px 20px rgba(212,175,55,0.3);
      z-index:99999; white-space:nowrap;
      animation: fadeInUp 0.4s ease;
    `;
    banner.innerHTML = `
      <span>✨ MYSTICA aggiornata!</span>
      <button id="_sw-reload-btn" style="
        background:var(--gold,#d4af37); color:#1a0a3e;
        border:none; border-radius:8px;
        padding:6px 14px; cursor:pointer;
        font-family:'Cinzel',serif; font-size:12px; font-weight:700;
      ">Ricarica ora</button>
      <button onclick="this.parentElement.remove()" style="
        background:transparent; color:var(--gold,#d4af37);
        border:none; cursor:pointer; font-size:16px; padding:0 2px;
      ">✕</button>
    `;
    document.body.appendChild(banner);
    // Ricarica sicura: skipWaiting → controllerchange → reload
    // I dati localStorage (premium, preferenze) NON vengono toccati
    document.getElementById('_sw-reload-btn').addEventListener('click', function(){
      if(newWorker && newWorker.state !== 'activated'){
        newWorker.postMessage({type:'SKIP_WAITING'});
      }
      navigator.serviceWorker.addEventListener('controllerchange', function(){
        window.location.reload();
      }, {once:true});
      // Fallback se controllerchange non arriva entro 800ms
      setTimeout(function(){ window.location.reload(); }, 800);
    });
  }

  navigator.serviceWorker.register('./sw.js', {scope:'./'})
    .then(reg => {
      // Se c'è già un worker in attesa (es. tab riaperta senza ricarica)
      if(reg.waiting){ showUpdateBanner(reg.waiting); }
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if(!nw) return;
        nw.addEventListener('statechange', () => {
          if(nw.state === 'installed' && navigator.serviceWorker.controller){
            showUpdateBanner(nw);
          }
        });
      });
      // Controlla aggiornamenti ogni 60s (utile per sessioni lunghe)
      setInterval(()=>{ reg.update().catch(()=>{}); }, 60000);
    })
    .catch(err => console.warn('[MYSTICA SW]', err));
})();

async function mysticaCheckUpdate(){
  const btn = document.getElementById('check-update-btn');
  if(btn){ btn.textContent = '⏳ Controllo in corso...'; btn.disabled = true; }
  try{
    if(!('serviceWorker' in navigator)){
      if(btn){ btn.textContent = '🔄 Controlla nuovi aggiornamenti'; btn.disabled = false; }
      alert('Service Worker non supportato su questo browser.');
      return;
    }
    let reg = await navigator.serviceWorker.getRegistration('./');
    if(!reg){
      // SW non ancora registrato — tenta la registrazione al volo
      try {
        reg = await navigator.serviceWorker.register('./sw.js', {scope:'./'});
        await new Promise(r => setTimeout(r, 1500)); // attendi attivazione
        reg = await navigator.serviceWorker.getRegistration('./');
      } catch(regErr) { /* ignora */ }
    }
    if(!reg){
      if(btn){ btn.textContent = '🔄 Controlla nuovi aggiornamenti'; btn.disabled = false; }
      alert('⚠️ Service Worker non disponibile.\nAssicurati di usare MYSTICA online (non offline) e ricarica la pagina.');
      return;
    }
    // Se c'è già un worker in attesa, mostra subito il banner
    if(reg.waiting){
      if(btn){ btn.textContent = '🔄 Controlla nuovi aggiornamenti'; btn.disabled = false; }
      // Trigger reload diretto
      reg.waiting.postMessage({type:'SKIP_WAITING'});
      navigator.serviceWorker.addEventListener('controllerchange', ()=> window.location.reload(), {once:true});
      setTimeout(()=> window.location.reload(), 800);
      return;
    }
    await reg.update();
    // Dopo l'update, controlla se c'è installing/waiting
    if(reg.waiting || reg.installing){
      if(btn){ btn.textContent = '✅ Aggiornamento trovato!'; }
      // Il banner apparirà automaticamente via statechange
    } else {
      if(btn){ btn.textContent = '✅ Sei già aggiornato!'; btn.disabled = false; }
      setTimeout(()=>{
        if(btn){ btn.textContent = '🔄 Controlla nuovi aggiornamenti'; btn.disabled = false; }
      }, 3000);
    }
  } catch(e){
    if(btn){ btn.textContent = '🔄 Controlla nuovi aggiornamenti'; btn.disabled = false; }
    console.warn('[MYSTICA Update]', e);
  }
}

const DISCLAIMER_KEY = 'mystica_disclaimer_v1';

function showFirstLaunchDisclaimer(){
  try{
  if(_lsGet(DISCLAIMER_KEY) === 'accepted') return;
  const ov = document.createElement('div');
  ov.id = 'firstLaunchDisclaimer';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(5,2,15,.96);z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)';
  ov.innerHTML = `
  <div style="max-width:480px;background:linear-gradient(180deg,#140c24,#0a0514);border:1.5px solid var(--gold-dim);border-radius:18px;padding:28px;text-align:center;box-shadow:0 0 40px rgba(212,175,55,.25)">
  <div style="font-size:48px;margin-bottom:12px">🔮</div>
  <h2 style="color:var(--gold);font-family:'Cinzel',serif;font-size:18px;letter-spacing:2px;margin-bottom:16px">BENVENUTO IN MYSTICA</h2>
  <div style="text-align:left;font-size:13px;color:var(--text);line-height:1.7;margin-bottom:18px">
  <p style="margin-bottom:12px"><strong style="color:var(--gold)">⚠️ Avviso importante</strong></p>
  <p style="margin-bottom:10px">MYSTICA è un'app di <strong>intrattenimento esoterico</strong>. Tarocchi, oroscopi, sigilli, rituali e tutti i contenuti hanno <strong>esclusivamente scopo ricreativo e di riflessione personale</strong>.</p>
  <p style="margin-bottom:10px">I contenuti <strong>non sostituiscono</strong> consulenze mediche, psicologiche, legali o finanziarie professionali.</p>
  <p style="margin-bottom:10px">L'app è destinata a un pubblico di <strong>età 16+</strong>.</p>
  <p style="font-size:11px;color:var(--muted);margin-top:14px">Continuando accetti la <a onclick="document.getElementById('firstLaunchDisclaimer').remove();showLegal('privacy')" style="color:var(--gold);cursor:pointer;text-decoration:underline">Privacy Policy</a> e i <a onclick="document.getElementById('firstLaunchDisclaimer').remove();showLegal('termini')" style="color:var(--gold);cursor:pointer;text-decoration:underline">Termini di Servizio</a>.</p>
  </div>
  <button id="disclaimerAcceptBtn" style="width:100%;background:linear-gradient(135deg,var(--gold),var(--gold-dim));color:#0a0514;border:none;border-radius:12px;padding:14px;font-family:'Cinzel',serif;font-size:13px;letter-spacing:2px;font-weight:700;cursor:pointer">✨ ACCETTO ED ENTRO</button>
  </div>
  `;
  document.body.appendChild(ov);
  document.getElementById('disclaimerAcceptBtn').onclick = ()=>{
  _lsSet(DISCLAIMER_KEY, 'accepted');
  ov.remove();
  };
  }catch(e){ console.warn('disclaimer err:', e); }
}

window.addEventListener('DOMContentLoaded', ()=>{ setTimeout(showFirstLaunchDisclaimer, 200); });

const COOKIE_KEY = 'mystica_cookie_consent_v1';

function initCookieConsent(){
  try{
  const choice = _lsGet(COOKIE_KEY);
  if(!choice){

  setTimeout(()=>{
  const b = document.getElementById('cookieBanner');
  if(b) b.classList.add('show');
  }, 800);
  }
  }catch(e){ console.warn('cookie consent init:', e); }
}

function cookieAcceptAll(){
  try{
  _lsSet(COOKIE_KEY, 'all');
  const b = document.getElementById('cookieBanner');
  if(b) b.classList.remove('show');
  if(typeof enableAnalytics === 'function') enableAnalytics();
  if(typeof toast === 'function') toast('🍪 Grazie! Cookie attivati');
  }catch(e){}
}

function cookieRejectAll(){
  try{
  _lsSet(COOKIE_KEY, 'essential');
  const b = document.getElementById('cookieBanner');
  if(b) b.classList.remove('show');
  if(typeof toast === 'function') toast('🔒 Solo cookie essenziali');
  }catch(e){}
}

function showCookieSettings(){
  const b = document.getElementById('cookieBanner');
  if(b) b.classList.add('show');
}

function enableAnalytics(){

  try{ if(typeof gtag === 'function') gtag('consent','update',{'analytics_storage':'granted'}); }catch(e){}
}

const LEGAL_TEXTS = {
  privacy: {
  title: '🔒 Privacy Policy',
  body: `
  <p><strong>Ultimo aggiornamento: Giugno 2026</strong></p>
  <p style="margin-top:10px"><strong>1. Titolare del trattamento</strong><br>
  MYSTICA è sviluppata da <em>PetroCorporation</em>. Per contattarci scrivi a: <a href="mailto:info@mysticaoracoli.it" style="color:var(--gold)">info@mysticaoracoli.it</a></p>

  <p style="margin-top:10px"><strong>2. Dati raccolti</strong><br>
  MYSTICA raccoglie e conserva <strong>localmente sul tuo dispositivo</strong> (tramite localStorage) le seguenti informazioni:
  <ul style="margin:6px 0 6px 18px">
  <li>Nome o pseudonimo che inserisci</li>
  <li>Data di nascita (per calcolare il tuo segno zodiacale)</li>
  <li>Letture e consultazioni salvate volontariamente</li>
  <li>Preferenze di consenso cookie</li>
  </ul>
  <strong>Questi dati non lasciano mai il tuo dispositivo</strong> e non vengono inviati a server esterni.</p>

  <p style="margin-top:10px"><strong>3. Cookie e analytics</strong><br>
  Se attivi i cookie opzionali, raccogliamo statistiche anonime aggregate (Google Analytics) per migliorare l'app. Puoi revocare il consenso in ogni momento dal footer ("Cookie").</p>

  <p style="margin-top:10px"><strong>4. I tuoi diritti (GDPR)</strong><br>
  Hai diritto di accesso, rettifica, cancellazione e portabilità dei tuoi dati. Per cancellare tutto: vai su <em>Profilo → Reset</em> oppure svuota i dati del sito dalle impostazioni del browser.</p>

  <p style="margin-top:10px"><strong>5. Minori</strong><br>
  L'app è destinata a un pubblico di età <strong>16 anni o superiore</strong>. Non raccogliamo consapevolmente dati di minori di 16 anni.</p>

  <p style="margin-top:10px"><strong>6. Disclaimer</strong><br>
  I contenuti di MYSTICA (tarocchi, oroscopi, sigilli, rituali, ecc.) sono offerti <strong>esclusivamente a scopo di intrattenimento e crescita personale</strong>. Non sostituiscono consulenze mediche, psicologiche, legali o finanziarie professionali.</p>
  `
  },
  termini: {
  title: '📜 Termini di Servizio',
  body: `
  <p><strong>Ultimo aggiornamento: Giugno 2026</strong></p>

  <p style="margin-top:10px"><strong>1. Accettazione</strong><br>
  Utilizzando MYSTICA accetti i presenti Termini di Servizio. Se non li accetti, ti preghiamo di non utilizzare l'app.</p>

  <p style="margin-top:10px"><strong>2. Natura dei contenuti</strong><br>
  MYSTICA è un'app di <strong>intrattenimento esoterico</strong>. Tutti gli oracoli, le letture dei tarocchi, gli oroscopi, i sigilli, i rituali, le interpretazioni dei sogni e le pratiche descritte sono offerti come stimolo alla riflessione personale e <strong>non hanno alcun valore scientifico, medico, psicologico o predittivo verificato</strong>.</p>

  <p style="margin-top:10px"><strong>3. Limitazioni di responsabilità</strong><br>
  L'utilizzo dei contenuti è a tua esclusiva discrezione. PetroCorporation non si assume alcuna responsabilità per decisioni prese sulla base delle interpretazioni offerte dall'app. Per problemi di salute, psicologici o finanziari, rivolgiti a professionisti qualificati.</p>

  <p style="margin-top:10px"><strong>4. Acquisti Premium</strong><br>
  L'eventuale acquisto del piano Premium (3,99€) sblocca funzionalità aggiuntive per sempre con un pagamento unico. I pagamenti sono gestiti da <strong>Stripe</strong> in modo sicuro. Per richieste di rimborso scrivi a <a href="mailto:info@mysticaoracoli.it" style="color:var(--gold)">info@mysticaoracoli.it</a> entro 14 giorni dall'acquisto.</p>

  <p style="margin-top:10px"><strong>5. Proprietà intellettuale</strong><br>
  Tutti i contenuti, le illustrazioni dei tarocchi, i testi e il design sono protetti da copyright © PetroCorporation 2025-2026. Sono vietate la riproduzione e la redistribuzione senza autorizzazione scritta.</p>

  <p style="margin-top:10px"><strong>6. Modifiche</strong><br>
  Ci riserviamo il diritto di modificare questi Termini. Le modifiche saranno comunicate tramite l'app stessa.</p>

  <p style="margin-top:10px"><strong>7. Foro competente</strong><br>
  Per ogni controversia è competente il foro di residenza del titolare, salvo disposizioni inderogabili di legge.</p>
  `
  }
};

function showLegal(tipo){
  const data = LEGAL_TEXTS[tipo];
  if(!data) return;
  const modal = document.getElementById('modalLegal');
  const title = document.getElementById('modalLegalTitle');
  const body = document.getElementById('modalLegalBody');
  if(title) title.textContent = data.title;
  if(body) body.innerHTML = data.body;
  if(modal) modal.classList.add('open');
}

function shareApp(){
  const url = window.location.href.split('#')[0];
  const shareData = {
  title: 'MYSTICA — Oracolo delle Stelle',
  text: '🔮 Ho scoperto MYSTICA, un\'app mistica con tarocchi, oroscopo, rune e rituali. Prova anche tu!',
  url: url
  };
  try{
  if(navigator.share){
  navigator.share(shareData).catch(()=>{});
  } else if(navigator.clipboard){
  navigator.clipboard.writeText(url).then(()=>{
  if(typeof toast === 'function') toast('🔗 Link copiato negli appunti');
  });
  } else {

  prompt('Copia questo link e condividilo:', url);
  }
  }catch(e){
  if(typeof toast === 'function') toast('Errore nella condivisione');
  }
}

/* ── trackAppUse ─────────────────────────────────────────────── */
function trackAppUse(){
  try{
    const key='MYSTICA_USAGE';
    const data=JSON.parse(localStorage.getItem(key)||'{}');
    const today=new Date().toISOString().split('T')[0];
    data.lastOpen=today;
    data.opens=(data.opens||0)+1;
    data.days=data.days||[];
    if(!data.days.includes(today)){
      data.days.push(today);
      if(data.days.length>90) data.days=data.days.slice(-90);
    }
    localStorage.setItem(key,JSON.stringify(data));
  }catch(e){}
}

/* ── Back button: chiude pannelli overlay prima di uscire ────── */
(function initBackButtonGuard(){
  // Pannelli overlay identificati da selettore + funzione di chiusura
  const overlays=[
    {sel:'#angeli-sezione',   close:()=>{ if(window.MysticaAngeli) window.MysticaAngeli.chiudi(); }},
    {sel:'#rituali-tradizione',close:()=>{ if(window.MysticaRituali) window.MysticaRituali.chiudi(); }},
  ];

  function anyOverlayOpen(){
    return overlays.some(o=>{
      const el=document.getElementById(o.sel.replace('#',''));
      return el && el.style.display!=='none' && el.style.display!=='';
    });
  }

  function closeTopOverlay(){
    for(let i=overlays.length-1;i>=0;i--){
      const el=document.getElementById(overlays[i].sel.replace('#',''));
      if(el && el.style.display!=='none' && el.style.display!==''){
        overlays[i].close();
        return true;
      }
    }
    return false;
  }

  // Ogni volta che apriamo un overlay, spingiamo uno stato "overlay"
  // intercettando MysticaAngeli.apri e MysticaRituali.apri
  function patchOverlayOpen(objGetter, name){
    const MAX_WAIT=3000, step=100; let elapsed=0;
    const tid=setInterval(()=>{
      const obj=objGetter();
      if(obj && typeof obj.apri==='function'){
        clearInterval(tid);
        const orig=obj.apri.bind(obj);
        obj.apri=function(...args){
          orig(...args);
          try{ window.history.pushState({overlay:name},'','#'+name); }catch(e){}
        };
      }
      elapsed+=step;
      if(elapsed>=MAX_WAIT) clearInterval(tid);
    },step);
  }

  patchOverlayOpen(()=>window.MysticaAngeli,'angeli');
  patchOverlayOpen(()=>window.MysticaRituali,'rituali');

  // Intercetta il popstate: se un overlay è aperto, lo chiude invece di uscire
  const _origPopstate=window.onpopstate;
  window.addEventListener('popstate',function(e){
    if(closeTopOverlay()){
      // Blocchiamo la navigazione indietro — rimaniamo nell'app
      try{ window.history.pushState(null,'',window.location.href.split('#')[0]+'#home'); }catch(err){}
      return;
    }
    // Nessun overlay: comportamento originale (naviga tra le sezioni)
  });
})();

function initPWA(){
  // Nascondi il pulsante di installazione finché il browser non segnala disponibilità
  const btn = document.getElementById('pwa-footer-btn');
  if(btn) btn.style.display = 'none';

  // Gestisci l'evento appinstalled
  window.addEventListener('appinstalled', ()=>{
    if(btn) btn.style.display = 'none';
    _deferredInstallPrompt = null;
    if(typeof toast === 'function') toast('✨ MYSTICA installata con successo!');
  });
}

let _deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  _deferredInstallPrompt = e;
  const btn = document.getElementById('pwa-footer-btn');
  if(btn) btn.style.display = 'block';
});

function mysticaInstall(){
  if(_deferredInstallPrompt){
  _deferredInstallPrompt.prompt();
  _deferredInstallPrompt.userChoice.then((choice)=>{
  if(choice.outcome === 'accepted' && typeof toast === 'function'){
  toast('✨ Mystica installata!');
  }
  _deferredInstallPrompt = null;
  });
  } else {

  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  if(isIOS){
  alert('Per installare MYSTICA su iOS:\n\n1. Tocca l\'icona Condividi 􀈂 in Safari\n2. Scorri e tocca "Aggiungi a Home"\n3. Conferma "Aggiungi"\n\n✨ MYSTICA sarà sulla tua schermata home.');
  } else {
  alert('Per installare MYSTICA:\n\n• Chrome/Edge: menu ⋮ → "Installa app"\n• Firefox: menu ⋮ → "Installa"\n\n✨');
  }
  }
}

function _mysticaCollectKeys(){

  const keys = [];
  try{
  for(let i=0;i<localStorage.length;i++){
  const k = localStorage.key(i);
  if(!k) continue;
  if(k.startsWith('myst_') || k.startsWith('mystica_')) keys.push(k);
  }
  }catch(e){}
  return keys;
}

function mysticaExportBackup(){
  try{
  const keys = _mysticaCollectKeys();
  const data = {};
  keys.forEach(k => { try{ data[k] = localStorage.getItem(k); }catch(e){} });
  const payload = {
  app: 'MYSTICA',
  version: APP_VERSION,
  exportedAt: new Date().toISOString(),
  data: data
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `mystica-backup-${today}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ try{ document.body.removeChild(a); URL.revokeObjectURL(url); }catch(e){} }, 100);
  if(typeof toast === 'function') toast('💾 Backup scaricato!');
  }catch(e){
  console.warn('export err', e);
  if(typeof toast === 'function') toast('⚠️ Errore durante il backup');
  }
}

function mysticaTriggerImport(){
  const inp = document.getElementById('mysticaImportFile');
  if(inp){ inp.value = ''; inp.click(); }
}

function mysticaImportBackup(ev){
  const file = ev && ev.target && ev.target.files && ev.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
  try{
  const payload = JSON.parse(e.target.result);
  if(!payload || payload.app !== 'MYSTICA' || !payload.data){
  if(typeof toast === 'function') toast('⚠️ File non valido');
  return;
  }
  const keys = Object.keys(payload.data);
  if(!keys.length){
  if(typeof toast === 'function') toast('⚠️ Backup vuoto');
  return;
  }
  const ok = confirm(`Ripristinare il backup?\n\n📦 ${keys.length} elementi salvati\n📅 ${payload.exportedAt ? payload.exportedAt.slice(0,10) : 'data sconosciuta'}\n\n⚠️ I dati attuali verranno sovrascritti.`);
  if(!ok) return;

  _mysticaCollectKeys().forEach(k => { try{ localStorage.removeItem(k); }catch(e){} });

  let count = 0;
  keys.forEach(k => {
  try{
  if(k.startsWith('myst_') || k.startsWith('mystica_')){
  localStorage.setItem(k, payload.data[k]);
  count++;
  }
  }catch(e){}
  });
  if(typeof toast === 'function') toast(`✅ Ripristinati ${count} elementi. Ricarico…`);
  setTimeout(()=> location.reload(), 1200);
  }catch(err){
  console.warn('import err', err);
  if(typeof toast === 'function') toast('⚠️ File non valido o corrotto');
  }
  };
  reader.readAsText(file);
}

window.addEventListener('DOMContentLoaded', ()=>{
  try{
  const vEl = document.getElementById('appVersionLabel');
  if(vEl) vEl.textContent = `v${APP_VERSION} · build ${APP_BUILD_DATE}`;
  const yEl = document.getElementById('appYearLabel');
  if(yEl) yEl.textContent = APP_YEAR_RANGE;
  }catch(e){}

  try{ if(typeof populateWelcomeDateSelects === 'function') populateWelcomeDateSelects(); }catch(e){}
});

window.addEventListener('load', ()=>{
  try{
  const dSel = document.getElementById('wDay');
  if(dSel && (!dSel.dataset.filled || dSel.options.length <= 1)){
  populateWelcomeDateSelects();
  }
  }catch(e){}
});

const BgMusic = (function(){
  let ctx = null;
  let isPlaying = false;
  let oscillators = [];
  let gainNode = null;
  let arpeggioTimer = null;

  function _getAudioContext() {
  try {
  if (typeof getAudioCtx === 'function') {
  const externalCtx = getAudioCtx();
  if (externalCtx) return externalCtx;
  }
  if (!ctx) {
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return ctx;
  } catch (e) {
  console.warn("AudioContext non avviabile in questa fase, bypassato per evitare blocchi:", e);
  return null;
  }
  }

  function play() {
  if (isPlaying) return;
  try {
  const audioCtx = _getAudioContext();
  if (!audioCtx) {
  isPlaying = true; // Evita loop ma permette al codice successivo dell'app di scorrere
  return;
  }

  if (audioCtx.state === 'suspended') {
  audioCtx.resume().catch(e => console.warn("Ripresa audio sospesa:", e));
  }

  isPlaying = true;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 3); // Volume soft
  gainNode.connect(audioCtx.destination);

  const baseFreqs = [110, 165, 220, 330];
  baseFreqs.forEach((freq) => {
  try {
  const osc = audioCtx.createOscillator();
  const oscGain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), audioCtx.currentTime);
  oscGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
  osc.connect(oscGain);
  oscGain.connect(gainNode);
  osc.start(audioCtx.currentTime);
  oscillators.push(osc);
  } catch(e) {}
  });

  _startArpeggio();
  } catch (err) {
  console.error("Errore silenziato in play() per garantire la stabilità dell'app:", err);
  isPlaying = true;
  }
  }

  function _startArpeggio() {
  if (!isPlaying) return;
  try {
  const audioCtx = _getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const scale = [440, 523.25, 587.33, 659.25, 783.99, 880];
  const randomFreq = scale[Math.floor(Math.random() * scale.length)];

  const osc = audioCtx.createOscillator();
  const oscGain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(randomFreq, now);

  oscGain.gain.setValueAtTime(0, now);
  oscGain.gain.linearRampToValueAtTime(0.01, now + 0.15);
  oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

  osc.connect(oscGain);
  if (gainNode) oscGain.connect(gainNode);

  osc.start(now);
  osc.stop(now + 2.6);

  arpeggioTimer = setTimeout(_startArpeggio, 2000 + Math.random() * 2000);
  } catch (err) {
  console.warn("Errore isolato nell'arpeggio:", err);
  }
  }

  function stop() {
  if (!isPlaying) return;
  isPlaying = false;
  if (arpeggioTimer) clearTimeout(arpeggioTimer);

  try {
  if (gainNode) {
  const audioCtx = _getAudioContext();
  const now = audioCtx ? audioCtx.currentTime : 0;
  gainNode.gain.cancelScheduledValues(now);
  gainNode.gain.linearRampToValueAtTime(0, now + 0.5);

  setTimeout(() => {
  oscillators.forEach(osc => { try { osc.stop(); } catch(e){} });
  oscillators = [];
  gainNode = null;
  }, 600);
  }
  } catch(e) {
  oscillators.forEach(osc => { try { osc.stop(); } catch(e){} });
  oscillators = [];
  }
  }

  function toggle() {
  if (isPlaying) stop();
  else play();
  }

  function duckForTheta() {
  try {
  if (gainNode) {
  const audioCtx = _getAudioContext();
  if (audioCtx) gainNode.gain.linearRampToValueAtTime(0.005, audioCtx.currentTime + 0.5);
  }
  } catch(e) {}
  }

  function unduckFromTheta() {
  try {
  if (gainNode) {
  const audioCtx = _getAudioContext();
  if (audioCtx) gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 0.5);
  }
  } catch(e) {}
  }

  return {
  init: function() {},
  play: play,
  stop: stop,
  toggle: toggle,
  duckForTheta: duckForTheta,
  unduckFromTheta: unduckFromTheta,
  get isPlaying() { return isPlaying; },
  status: function() { return isPlaying; }
  };
})();

const DREAM_KEY    = 'myst_dream_journal_v1';
const GRIMORIO_KEY = 'myst_grimorio_v1';
const ASTRAL_KEY   = 'myst_astral_logs_v1';

let _dreamEmo = null;

function dreamSelectEmo(emo, el){
  _dreamEmo = emo;
  document.querySelectorAll('.dream-emo-chip').forEach(c => c.classList.remove('active'));
  if(el) el.classList.add('active');
}

function renderDreamJournalList(){
  const list = document.getElementById('dreamJournalList');
  const wrap = document.getElementById('dreamJournalListWrap');
  const cnt  = document.getElementById('dreamJournalCount');
  if(!list) return;
  let entries = [];
  try{ entries = JSON.parse(_lsGet(DREAM_KEY)||'[]'); }catch(e){}
  if(!cnt) cnt; else cnt.textContent = entries.length;
  if(!entries.length){ if(wrap) wrap.style.display='none'; return; }
  if(wrap) wrap.style.display='block';
  list.innerHTML = entries.map((e,i)=>`
  <div class="diary-item" style="position:relative">
  <span class="diary-date">${e.date||''} ${e.lucid?'· 🌙 Lucido':''} · Intensità ${e.intensity||5}/10 ${e.emo?'· '+e.emo:''}</span>
  <span class="diary-content" style="display:block;margin-top:5px">${(e.nota||'').replace(/\n/g,'<br>')}</span>
  <button onclick="dreamDeleteEntry(${i})" style="position:absolute;top:10px;right:10px;background:transparent;border:none;color:#f87171;font-size:14px;cursor:pointer">✕</button>
  </div>
  `).join('');
}

function engDreamJournal(){
  hapticFeedback();
  const date  = (document.getElementById('eng-dream-date')||{}).value || new Date().toISOString().split('T')[0];
  const nota  = ((document.getElementById('eng-dream-nota')||{}).value||'').trim();
  const intensity = parseInt((document.getElementById('eng-dream-intensity')||{}).value||5);
  const lucid = (document.getElementById('eng-dream-lucido')||{}).checked;
  const res   = document.getElementById('eng-r-dream');
  if(!nota){ toast('📓 Scrivi qualcosa sul tuo sogno prima di sigillarlo'); return; }
  let entries = [];
  try{ entries = JSON.parse(_lsGet(DREAM_KEY)||'[]'); }catch(e){}
  entries.unshift({ date, nota, intensity, lucid, emo: _dreamEmo, ts: Date.now() });
  try{ _lsSet(DREAM_KEY, JSON.stringify(entries)); }catch(e){}
  if(res) res.innerHTML = `<div class="eng-r-block" style="margin-top:10px"><p>✨ Sigillato nel diario onirico — ${date}</p></div>`;

  const notaEl = document.getElementById('eng-dream-nota');
  if(notaEl) notaEl.value = '';
  const intEl = document.getElementById('eng-dream-intensity');
  if(intEl){ intEl.value=5; const lbl=document.getElementById('dreamIntensityLabel'); if(lbl) lbl.textContent='5 / 10'; }
  const lucEl = document.getElementById('eng-dream-lucido');
  if(lucEl) lucEl.checked = false;
  document.querySelectorAll('.dream-emo-chip').forEach(c=>c.classList.remove('active'));
  _dreamEmo = null;
  renderDreamJournalList();
}

function dreamDeleteEntry(i){
  let entries=[];
  try{ entries=JSON.parse(_lsGet(DREAM_KEY)||'[]'); }catch(e){}
  entries.splice(i,1);
  try{ _lsSet(DREAM_KEY,JSON.stringify(entries)); }catch(e){}
  renderDreamJournalList();
}

function dreamClearAll(){
  if(!confirm('Eliminare tutte le voci del diario onirico?')) return;
  try{ _lsSet(DREAM_KEY,'[]'); }catch(e){}
  renderDreamJournalList();
}

function grimorioRenderList(){
  const list = document.getElementById('grimorioList');
  const wrap = document.getElementById('grimorioListWrap');
  const cnt  = document.getElementById('grimorioCount');
  if(!list) return;
  let entries=[];
  try{ entries=JSON.parse(_lsGet(GRIMORIO_KEY)||'[]'); }catch(e){}
  if(cnt) cnt.textContent = entries.length;
  if(!entries.length){ if(wrap) wrap.style.display='none'; return; }
  if(wrap) wrap.style.display='block';
  list.innerHTML = entries.map((e,i)=>`
  <div class="diary-item" style="position:relative">
  <span class="diary-date">${new Date(e.ts||Date.now()).toLocaleDateString('it-IT')}</span>
  <span class="diary-content" style="display:block;margin-top:5px">${(e.nota||'').replace(/\n/g,'<br>')}</span>
  <button onclick="grimorioDeleteEntry(${i})" style="position:absolute;top:10px;right:10px;background:transparent;border:none;color:#f87171;font-size:14px;cursor:pointer">✕</button>
  </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   SPAZIO & ELEMENTI — Erbe, Purificazione, Feng Shui
   ═══════════════════════════════════════════════════ */
const _spazioState = { erbe: null, rit: null, stanza: null, elem: null };

const _erbeDB = {
  purificazione:{ ico:'🌿', piante:[{n:'Salvia bianca',d:'La regina della purificazione. Brucia fasci durante il smudging, muoviti in senso antiorario partendo dall\'angolo più buio.',p:'Saturno/Luna',s:'Autunno'},{n:'Palo Santo',d:'Legno sacro sudamericano. Brucia per 30 secondi, poi spegni e lascia diffondere il fumo aromatico.',p:'Sole',s:'Tutto l\'anno'},{n:'Verbena',d:'Erba di Venere per purificare l\'acqua rituale. Infusi negli angoli della stanza in ciotoline di legno.',p:'Venere',s:'Estate'}], rituale:'Apri tutte le finestre. Inizia dall\'angolo est della stanza. Muovi il fascio fumante in senso antiorario fermandoti in ogni angolo per tre respiri. Termina al centro, intenzione chiara: "Questo spazio è pulito, protetto, armonioso."' },
  protezione:{ ico:'🛡️', piante:[{n:'Rosmarino',d:'Protegge la casa e purifica al contempo. Appendi fasci essiccati sopra le porte d\'ingresso.',p:'Sole/Marte',s:'Primavera/Estate'},{n:'Aglio',d:'Protezione potentissima contro le energie negative. Trecce di aglio sui davanzali o agli ingressi.',p:'Marte',s:'Estate'},{n:'Angelica',d:'Radice di protezione celestiale. Polvere sparsa sulle soglie delle porte.',p:'Sole',s:'Estate'}], rituale:'La notte di Luna piena, posiziona un cristallo di ossidiana nera al centro di ogni stanza. Disegna un cerchio immaginario intorno alla casa con polvere di sale. Recita a ogni soglia: "Nulla di nocivo attraversa questa porta."' },
  amore:{ ico:'💕', piante:[{n:'Rosa rossa',d:'Petali freschi sparsi nei letti d\'amore. Acqua di rose come spray energetico per la camera da letto.',p:'Venere',s:'Estate'},{n:'Ylang ylang',d:'Olio essenziale dell\'amore romantico. Due gocce sul termosifone diffondono il profumo sensuale.',p:'Venere/Luna',s:'Primavera'},{n:'Menta piperita',d:'Stimola l\'attrazione e apre il cuore. Metti foglie fresche in ciotole d\'acqua nella camera.',p:'Venere/Mercurio',s:'Estate'}], rituale:'Il venerdì sera (giorno di Venere), prepara un bagno con petali di rosa, tre gocce di ylang ylang, un pizzico di sale rosa dell\'Himalaya. Immergi il corpo dichiarando: "Il mio cuore è aperto, il mio amore è libero."' },
  prosperità:{ ico:'🌾', piante:[{n:'Basilico',d:'L\'erba della prosperità per eccellenza. Tieni una pianta viva in cucina o nell\'ufficio. Mai lasciarlo appassire.',p:'Marte/Giove',s:'Estate'},{n:'Cannella',d:'Stecche di cannella agli ingressi attraggono abbondanza. L\'aroma stimola la mente creativa.',p:'Sole',s:'Autunno/Inverno'},{n:'Menta verde',d:'Foglie nel portafoglio o nel cassetto dei soldi per attrarre flusso economico.',p:'Mercurio',s:'Estate'}], rituale:'Ogni giovedì (giorno di Giove), posiziona una ciotola verde con monete, basilico fresco e una stecca di cannella nell\'angolo sud-est della casa. Tocca gli oggetti dichiarando: "L\'abbondanza scorre verso di me e attraverso di me."' },
  chiarezza:{ ico:'🔮', piante:[{n:'Lavanda',d:'Calma la mente che non si ferma. Cuscini di lavanda sotto il guanciale per sogni lucidi e visioni chiare.',p:'Mercurio',s:'Estate'},{n:'Mirra',d:'Resina per meditazione profonda. Il profumo rallenta le onde cerebrali portando stati meditativi.',p:'Saturno/Luna',s:'Inverno'},{n:'Limone',d:'Olio essenziale di limone diffuso durante lo studio aumenta la concentrazione del 54% (studi scientifici).',p:'Sole/Mercurio',s:'Tutto l\'anno'}], rituale:'La notte di Luna nuova, siedi al centro della stanza con una candela bianca. Brucia lavanda e mirra. Tieni un cristallo di quarzo ialino tra i palmi. Rimani in silenzio per 11 minuti chiedendo chiarezza su una sola domanda.' },
  guarigione:{ ico:'💚', piante:[{n:'Camomilla',d:'Guarigione gentile e anti-infiammatoria. Infusi per bevanda calmante o impacchi sulle zone dolenti.',p:'Sole/Venere',s:'Estate'},{n:'Echinacea',d:'Stimola le difese naturali. Pianta viva sul davanzale per mantenere l\'energia di salute nell\'ambiente.',p:'Marte',s:'Estate'},{n:'Melissa',d:'Il "tonico del cuore". Diffusa come essenza crea un campo di guarigione emotiva nella stanza.',p:'Giove/Luna',s:'Estate'}], rituale:'La domenica mattina (giorno del Sole), prepara un bagno con infuso di camomilla, foglie di melissa e cristalli di selenite ai quattro angoli della vasca. Immagina durante il bagno una luce verde che avvolge ogni cellula del tuo corpo.' },
  coraggio:{ ico:'🔥', piante:[{n:'Dragoncello',d:'Erba del drago per il coraggio in battaglia. Un rametto in tasca durante situazioni difficili.',p:'Marte',s:'Estate'},{n:'Pepe nero',d:'Spezia di Marte. Bruciato su carbone vivo per purificare la paura e rafforzare la volontà.',p:'Marte',s:'Tutto l\'anno'},{n:'Timo',d:'Il timo fu portato dai cavalieri come simbolo di coraggio. Infuso come tè prima delle sfide importanti.',p:'Venere/Marte',s:'Estate'}], rituale:'Il martedì (giorno di Marte), lit una candela rossa. Tieni un cristallo di corniola nel pugno chiuso. Dichiara tre volte: "Ho la forza, ho il coraggio, ho la volontà." Soffia la candela e porta il cristallo con te.' },
  intuizione:{ ico:'🌙', piante:[{n:'Artemisia',d:'Erba sacra della Luna e della profezia. Piccoli fasci sotto il cuscino per sogni profetici vividi.',p:'Luna',s:'Autunno'},{n:'Gelsomino',d:'Fiore della chiaroveggenza notturna. Olio essenziale da diffondere durante la meditazione.',p:'Giove/Luna',s:'Estate'},{n:'Salvia divinatoria',d:'La Salvia divinorum della tradizione sciamanica. Bruciata durante le sessioni di lettura per aprire il terzo occhio.',p:'Luna/Nettuno',s:'Autunno'}], rituale:'Ogni notte di Luna calante, siediti in direzione nord. Brucia artemisia. Tieni un\'ametista sulla fronte per 11 minuti. Annota immediatamente ogni immagine, sensazione, parola che emerge. Il diario dei sogni è il tuo strumento.' },
};

const _purifDB = {
  fuoco:{ tit:'Purificazione con il Fuoco', ico:'🕯️', passi:['Procurati una candela bianca vergine e un portacandele sicuro.','Accendi la candela al centro della stanza da purificare. Porta la fiamma a ogni angolo senza spegnerla.','Dichiara: "Il fuoco trasforma e libera. Tutto ciò che non serve viene dissolto."','Lascia bruciare la candela completamente (mai spegnerla con il soffio — usa un spegnicandele).','Raccogli i resti della candela e seppelliscili fuori casa o buttali in un cestino lontano da casa.'] },
  suono:{ tit:'Purificazione con il Suono', ico:'🔔', passi:['Usa un campanello tibetano, un diapason o batti le mani 3 volte in ogni angolo.','Inizia dall\'angolo nord-est della stanza, muoviti in senso orario.','In ogni angolo, suona fino a quando il suono si spegne naturalmente — aspetta il silenzio completo.','Muoviti verso il centro della stanza e suona tre volte più forte dichiarando: "Lo spazio è purificato."','Il suono rompe i campi energetici stagnanti — la frequenza riorganizza le molecole dell\'aria.'] },
  sale:{ tit:'Purificazione con il Sale', ico:'🧂', passi:['Usa sale grosso marino (non sale da cucina raffinato iodato).','Posiziona piccole ciotole di sale negli angoli della stanza da purificare.','Traccia una linea sottile di sale sulle soglie di ingresso e sui davanzali delle finestre.','Lascia il sale in posa per 24 ore — assorbe le energie negative come una spugna.','Dopo 24 ore, raccogli il sale e buttalo fuori casa. Non riutilizzarlo mai.'] },
  acqua:{ tit:'Purificazione con l\'Acqua', ico:'💧', passi:['Prepara acqua purificata in una ciotola. Aggiungi un pizzico di sale e foglie di alloro.','Lascia il composto alla luce della luna per una notte intera (acqua lunare).','Con un ramoscello di rosmarino intinto nell\'acqua, spuzza ogni angolo della stanza.','Puoi aggiungere 3-5 gocce di olio essenziale di salvia o eucalipto.','Termina spruzzando te stesso dalla testa ai piedi. L\'acqua purificata porta chiarezza.'] },
  aria:{ tit:'Purificazione con l\'Aria', ico:'🌬️', passi:['Apri tutte le finestre e le porte per creare una corrente d\'aria naturale.','Prepara un incenso a base di resine naturali: mirra, franchincenso, copal o benzoino.','Porta il fumo di incenso in ogni angolo con movimenti lenti e intenzionali, muovendoti in senso antiorario.','Utilizza un ventaglio di piume per dirigere il fumo verso gli angoli alti, dove l\'energia ristagna di più.','Lascia entrare aria fresca per almeno 20 minuti dopo il rituale.'] },
  cristalli:{ tit:'Purificazione con i Cristalli', ico:'💎', passi:['Scegli i cristalli giusti: quarzo ialino (universale), ossidiana nera (protezione), ametista (spiritualità).','Prima di usarli, purifica i cristalli stessi sotto acqua corrente o al sole per 4 ore.','Posiziona un cristallo in ogni angolo della stanza: questo crea una griglia energetica.','Collega mentalmente i cristalli con la visualizzazione di una luce dorata che unisce i quattro punti.','Ricarica i cristalli ogni Luna piena mettendoli sotto la luce lunare tutta la notte.'] },
};

const _fengshuiDB = {
  ingresso:{ ico:'🚪', bagua:'Nord — Acqua — Carriera', colori:'Nero, blu scuro, bianco', elementi_s:['Specchio rotondo sopra la porta','Piante in alto che "accolgono" il Qi','Illuminazione brillante sul nome della porta','Tappeto rosso o arancione davanti alla soglia'], elementi_no:['Disordine nell\'ingresso blocca il Qi','Specchi che riflettono direttamente la porta principale','Scarpe sparse (disperdono l\'energia)','Colori troppo scuri che bloccano il flusso'], consiglio:'L\'ingresso è la bocca della casa: il Qi entra da qui. Tieni sempre questo spazio luminoso, pulito e accogliente. Una pianta di bambù o un cristallo di quarzo rosa ben visibile moltiplicano l\'energia positiva.' },
  camera:{ ico:'🛏️', bagua:'Sud-Ovest — Terra — Amore e Relazioni', colori:'Rosa, rosso, bianco, beige', elementi_s:['Letto con testata solida contro un muro pieno','Coppia di oggetti (lampade, comodini) per l\'amore','Colori caldi e sensuali per le tende','Cristalli di quarzo rosa o ametista accanto al letto'], elementi_no:['Specchi che riflettono il letto (disturbano il sonno)','Elettronica accesa (TV, computer) in camera','Letto sotto una finestra (Qi instabile)','Disordine sotto il letto (blocchi emotivi)'], consiglio:'La camera è il santuario del riposo e dell\'amore. Il letto non deve essere in linea diretta con la porta. Elimina tutto ciò che non è relativo al sonno, al relax o all\'intimità.' },
  cucina:{ ico:'🍳', bagua:'Sud — Fuoco — Fama e Reputazione', colori:'Verde, rosso, giallo, arancione', elementi_s:['Cucina sempre pulita — simbolo di prosperità','Frutta fresca sul piano di lavoro','Piante aromatiche sul davanzale (basilico, rosmarino)','Piano cottura non di fronte alla porta'], elementi_no:['Piano cottura di fronte alla porta (Qi troppo veloce)','Coltelli esposti sul piano (Sha Qi — energia tagliente)','Cestino dei rifiuti vicino al piano cottura','Cucina disordinata e grassa (blocca l\'abbondanza)'], consiglio:'In Feng Shui la cucina rappresenta la prosperità della famiglia. Il fornello è l\'elemento più sacro — tienilo sempre pulito. Se vedi la porta mentre cucini (Sha Qi), posiziona uno specchio piccolo sul fornello.' },
  lavoro:{ ico:'💻', bagua:'Nord — Acqua — Carriera', colori:'Blu, verde, nero, grigio chiaro', elementi_s:['Scrivania in posizione di comando: vedi la porta, schiena al muro pieno','Pianta sul lato sinistro della scrivania (Tigre Verde — fortuna)','Illuminazione naturale dal lato sinistro','Un cristallo di pirite (oro) per la prosperità professionale'], elementi_no:['Scrivania di fronte al muro (Qi bloccato — blocco creativo)','Schiena alla porta (stress, paranoia, difficoltà con colleghi)','Disordine di carte (mente caotica)','Cactus sulla scrivania (relazioni lavorative difficili)'], consiglio:'La posizione della scrivania è tutto. La "posizione di comando" (seduto di fronte alla porta, schiena a una parete solida) è la più potente per la carriera. Se non è possibile, metti uno specchio per vedere la porta.' },
  bagno:{ ico:'🚿', bagua:'Associato all\'Acqua — gestisce la ricchezza', colori:'Bianco, celeste, verde acqua', elementi_s:['Copriwater sempre chiuso (la ricchezza non scivola via)','Finestra con ventilazione naturale','Specchi puliti e interi (frammenti portano energia frammentata)','Piante igrofile (felci, pothos) che purificano l\'aria'], elementi_no:['Copriwater aperto (perde ricchezza e Qi)','Perdite d\'acqua non riparate (dispersione energetica)','Disordine di cosmetici e prodotti','Bagno direttamente opposto alla porta d\'ingresso o alla camera'], consiglio:'In Feng Shui il bagno è una zona di drenaggio — l\'energia tende a uscire. La regola fondamentale è: copriwater sempre chiuso, porta del bagno sempre chiusa. Una pianta verde dentro riequilibra il flusso.' },
  salotto:{ ico:'🛋️', bagua:'Centro — Terra — Salute e Famiglia', colori:'Giallo, beige, verde, arancione', elementi_s:['Divano con schiena al muro (non fluttuante in mezzo alla stanza)','Disposizione circolare o a ferro di cavallo dei posti (favorisce conversazione)','Piante rigogliose agli angoli (Qi vitale)','Colori caldi e accoglienti per creare armonia'], elementi_no:['Divano di fronte alla porta (Qi troppo diretto)','Specchio che riflette il divano (raddoppia le preoccupazioni)','Angoli vuoti e bui (Sha Qi stagnante)','Troppi oggetti aguzzi (cactus, sculture con punte)'], consiglio:'Il salotto è il cuore pulsante della casa — il luogo della famiglia e degli ospiti. L\'armonia qui si irradia ovunque. Una fontana d\'acqua sul lato nord attiva il flusso del Qi e porta prosperità.' },
};

const _elementiDB = {
  legno:{ ico:'🌱', ec:'#50c880', yin_yang:'Yang crescente', stagione:'Primavera', direzione:'Est', colori:'Verde, azzurro', pianeta:'Giove', organi:'Fegato, Cistifellea', qualita:'Crescita, flessibilità, creatività, compassione', squilibrio:'Frustrazione, rabbia, rigidità mentale, stagnazione', potenzia:'Aggiungi piante vive, legno naturale, forme rettangolari, colori verdi. Guarda verso est al mattino.', ciclo:'Genera il Fuoco, è generato dall\'Acqua. Viene controllato dal Metallo.' },
  fuoco:{ ico:'🔥', ec:'#f87171', yin_yang:'Yang al massimo', stagione:'Estate', direzione:'Sud', colori:'Rosso, arancione, viola', pianeta:'Marte', organi:'Cuore, Intestino tenue', qualita:'Gioia, passione, carisma, calore umano', squilibrio:'Ansia, insonnia, agitazione, eccessiva eccitabilità', potenzia:'Candele accese, lampade, triangoli, cristalli rossi (rubino, granato). Guarda verso sud a mezzogiorno.', ciclo:'Genera la Terra, è generato dal Legno. Viene controllato dall\'Acqua.' },
  terra:{ ico:'🌍', ec:'#d4af37', yin_yang:'Equilibrio', stagione:'Fine estate / transizione', direzione:'Centro', colori:'Giallo, ocra, marrone', pianeta:'Saturno', organi:'Milza, Stomaco, Pancreas', qualita:'Stabilità, nutrimento, radicamento, fiducia', squilibrio:'Preoccupazione cronica, difficoltà digestive, dipendenza dagli altri', potenzia:'Ceramica, terracotta, cristalli gialli (citrino, topazio). Oggetti bassi e solidi. Stare scalzi sulla terra.', ciclo:'Genera il Metallo, è generata dal Fuoco. Viene controllata dal Legno.' },
  metallo:{ ico:'⚙️', ec:'#c0c0c0', yin_yang:'Yin crescente', stagione:'Autunno', direzione:'Ovest', colori:'Bianco, grigio, oro, argento', pianeta:'Venere', organi:'Polmoni, Intestino crasso', qualita:'Chiarezza, precisione, giustizia, capacità di lasciare andare', squilibrio:'Tristezza, malinconia, difficoltà respiratorie, eccessivo controllo', potenzia:'Oggetti metallici, forme circolari, cristalli bianchi (quarzo, opale). Musica armoniosa.', ciclo:'Genera l\'Acqua, è generato dalla Terra. Viene controllato dal Fuoco.' },
  acqua:{ ico:'💧', ec:'#60b8f0', yin_yang:'Yin al massimo', stagione:'Inverno', direzione:'Nord', colori:'Nero, blu profondo, grigio scuro', pianeta:'Mercurio/Luna', organi:'Reni, Vescica', qualita:'Saggezza, profondità, adattabilità, volontà', squilibrio:'Paura, isolamento, mancanza di volontà, blocco creativo', potenzia:'Fontane d\'acqua, acquari, forme ondulate, cristalli blu (acquamarina, lapislazzuli). Silenzio meditativo.', ciclo:'Genera il Legno, è generata dal Metallo. Viene controllata dalla Terra.' },
};

function spazioSelectErbe(intent, el){
  hapticFeedback();
  document.querySelectorAll('#spazioErbeGrid .spazio-intent-btn').forEach(b=>b.classList.remove('active-spazio'));
  el.classList.add('active-spazio');
  _spazioState.erbe = intent;
}

function spazioSelectRit(rit, el){
  hapticFeedback();
  document.querySelectorAll('#spazioRitGrid .spazio-rit-btn').forEach(b=>b.classList.remove('active-rit'));
  el.classList.add('active-rit');
  _spazioState.rit = rit;
}

function fsSelectStanza(stanza, el){
  hapticFeedback();
  document.querySelectorAll('#spazioStanzeGrid .spazio-stanza-btn').forEach(b=>b.classList.remove('active-stanza'));
  el.classList.add('active-stanza');
  _spazioState.stanza = stanza;
}

function spazioSelectElem(elem, el){
  hapticFeedback();
  document.querySelectorAll('#spazioElemGrid .spazio-elem-btn').forEach(b=>b.classList.remove('active-elem'));
  el.classList.add('active-elem');
  _spazioState.elem = elem;
}

function engErbe(){
  hapticFeedback();
  const res = document.getElementById('eng-r-erbe');
  const intent = _spazioState.erbe;
  if(!intent){ toast('🌿 Scegli prima un intento'); return; }
  const d = _erbeDB[intent];
  if(!d){ res.innerHTML='<p>Dati non trovati.</p>'; res.classList.add('visible'); return; }
  res.innerHTML = `<div class="eng-r-block"><h4>${d.ico} Erbe per ${intent.charAt(0).toUpperCase()+intent.slice(1)}</h4>
    ${d.piante.map(p=>`<p><strong style="color:var(--gold)">${p.n}</strong> <span style="font-size:10px;color:var(--muted)">· ${p.p} · ${p.s}</span><br>${p.d}</p>`).join('<hr style="border-color:#2a174840;margin:8px 0">')}
  </div>
  <div class="eng-r-block"><h4>🕯️ Rituale Completo</h4><p>${d.rituale}</p></div>`;
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function engPurifSpazio(){
  hapticFeedback();
  const res = document.getElementById('eng-r-purif');
  const rit = _spazioState.rit;
  if(!rit){ toast('🕯️ Scegli prima un metodo di purificazione'); return; }
  const d = _purifDB[rit];
  res.innerHTML = `<div class="eng-r-block"><h4>${d.ico} ${d.tit}</h4>
    ${d.passi.map((p,i)=>`<p><strong style="color:var(--gold)">${i+1}.</strong> ${p}</p>`).join('')}
  </div>`;
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function engFengshui(){
  hapticFeedback();
  const res = document.getElementById('eng-r-fengshui');
  const stanza = _spazioState.stanza;
  if(!stanza){ toast('🌬️ Seleziona prima una stanza'); return; }
  const d = _fengshuiDB[stanza];
  res.innerHTML = `<div class="eng-r-block">
    <h4>${d.ico} Feng Shui — ${stanza.charAt(0).toUpperCase()+stanza.slice(1)}</h4>
    <p><strong style="color:var(--gold)">Bagua:</strong> ${d.bagua}</p>
    <p><strong style="color:var(--gold)">Colori:</strong> ${d.colori}</p>
  </div>
  <div class="eng-r-block"><h4>✅ Cosa aggiungere</h4>${d.elementi_s.map(e=>`<p>• ${e}</p>`).join('')}</div>
  <div class="eng-r-block"><h4>❌ Cosa evitare</h4>${d.elementi_no.map(e=>`<p>• ${e}</p>`).join('')}</div>
  <div class="eng-r-block"><h4>💡 Consiglio Maestro</h4><p>${d.consiglio}</p></div>`;
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function engElementi(){
  hapticFeedback();
  const res = document.getElementById('eng-r-elementi');
  const elem = _spazioState.elem;
  if(!elem){ toast('☯️ Seleziona prima un elemento'); return; }
  const d = _elementiDB[elem];
  res.innerHTML = `<div class="eng-r-block">
    <h4>${d.ico} Elemento ${elem.charAt(0).toUpperCase()+elem.slice(1)}</h4>
    <p><strong style="color:var(--gold)">Stagione:</strong> ${d.stagione} &nbsp;·&nbsp; <strong style="color:var(--gold)">Direzione:</strong> ${d.direzione}</p>
    <p><strong style="color:var(--gold)">Pianeta:</strong> ${d.pianeta} &nbsp;·&nbsp; <strong style="color:var(--gold)">Organi:</strong> ${d.organi}</p>
    <p><strong style="color:var(--gold)">Colori:</strong> ${d.colori}</p>
  </div>
  <div class="eng-r-block"><h4>✨ Qualità</h4><p>${d.qualita}</p></div>
  <div class="eng-r-block"><h4>⚠️ Squilibrio</h4><p>${d.squilibrio}</p></div>
  <div class="eng-r-block"><h4>🔮 Come potenziarlo</h4><p>${d.potenzia}</p></div>
  <div class="eng-r-block"><h4>☯️ Ciclo degli Elementi</h4><p>${d.ciclo}</p></div>`;
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

/* ═══════════════════════════════════════════════════
   STRUMENTI — Pendolo animato + Japamala
   ═══════════════════════════════════════════════════ */

/* ── Japamala ─────────────────────────────────────── */
let _malaCount = 0;
const MALA_TOTAL = 108;

function engMalaInc(){
  hapticFeedback();
  if(_malaCount >= MALA_TOTAL){ toast('🙏 Ciclo completato! Ricomincia per un nuovo giro.'); return; }
  _malaCount++;
  const pct = (_malaCount / MALA_TOTAL * 100).toFixed(1);
  document.getElementById('eng-mala-n').textContent = _malaCount;
  document.getElementById('eng-mala-of').textContent = _malaCount + ' / ' + MALA_TOTAL;
  const bar = document.getElementById('eng-mala-bar');
  if(bar) bar.style.width = pct + '%';
  if(_malaCount === MALA_TOTAL){
    const mantra = (document.getElementById('eng-mala-mantra')||{}).value||'il tuo mantra';
    toast('🙏 108 perle completate! Il ciclo di "' + mantra.slice(0,30) + '" è sigillato.');
    if(typeof saveHistory === 'function') saveHistory('Japamala','108 ripetizioni — ' + mantra.slice(0,40));
  }
}

function engMalaReset(){
  hapticFeedback();
  _malaCount = 0;
  document.getElementById('eng-mala-n').textContent = '0';
  document.getElementById('eng-mala-of').textContent = '0 / 108';
  const bar = document.getElementById('eng-mala-bar');
  if(bar) bar.style.width = '0%';
}

/* ── Pendolo ─────────────────────────────────────── */
const _pendolo = {
  animId: null,
  angle: 0,
  omega: 0,
  mode: 'static',   // 'static' | 'si' | 'no' | 'forse' | 'irregolare'
  t: 0,
  answer: null
};

function pendoloDrawStatic(){
  const canvas = document.getElementById('pendoloCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, pivotY = 18;
  const L = 140, angle = _pendolo.angle || 0;
  const bx = cx + Math.sin(angle) * L;
  const by = pivotY + Math.cos(angle) * L;

  ctx.clearRect(0, 0, W, H);

  // Sfondo radiale
  const bg = ctx.createRadialGradient(cx, H*0.4, 10, cx, H*0.4, 110);
  bg.addColorStop(0, 'rgba(42,23,72,0.25)');
  bg.addColorStop(1, 'rgba(10,5,20,0)');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Punto di attacco (perno)
  ctx.beginPath();
  ctx.arc(cx, pivotY, 5, 0, Math.PI*2);
  ctx.fillStyle = '#d4af37';
  ctx.shadowColor = 'rgba(212,175,55,0.8)';
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Filo
  const grad = ctx.createLinearGradient(cx, pivotY, bx, by);
  grad.addColorStop(0, 'rgba(212,175,55,0.9)');
  grad.addColorStop(1, 'rgba(180,130,30,0.6)');
  ctx.beginPath();
  ctx.moveTo(cx, pivotY);
  ctx.lineTo(bx, by);
  ctx.strokeStyle = grad;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Cristallo (pendolo)
  const r = 13;
  const glowColor = _pendolo.mode === 'si' ? 'rgba(80,220,120,0.7)'
    : _pendolo.mode === 'no' ? 'rgba(248,113,113,0.7)'
    : _pendolo.mode === 'forse' ? 'rgba(140,100,220,0.7)'
    : _pendolo.mode === 'irregolare' ? 'rgba(255,180,50,0.7)'
    : 'rgba(212,175,55,0.5)';

  ctx.shadowColor = glowColor;
  ctx.shadowBlur = 18;

  // Forma cristallo (rombo allungato)
  ctx.beginPath();
  ctx.moveTo(bx, by - r*1.4);
  ctx.lineTo(bx + r*0.7, by);
  ctx.lineTo(bx, by + r*0.6);
  ctx.lineTo(bx - r*0.7, by);
  ctx.closePath();
  const cGrad = ctx.createRadialGradient(bx - r*0.2, by - r*0.3, 1, bx, by, r*1.2);
  cGrad.addColorStop(0, '#f0e0ff');
  cGrad.addColorStop(0.4, '#c8a0f0');
  cGrad.addColorStop(1, '#7a3db8');
  ctx.fillStyle = cGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(212,175,55,0.8)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Linee di riflesso sul cristallo
  ctx.beginPath();
  ctx.moveTo(bx - r*0.3, by - r*0.8);
  ctx.lineTo(bx + r*0.1, by - r*0.2);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Traccia oscillazione (solo se in movimento)
  if(_pendolo.mode !== 'static' && Math.abs(_pendolo.angle) > 0.02){
    ctx.beginPath();
    ctx.arc(cx, pivotY, L, Math.PI/2 - 0.35, Math.PI/2 + 0.35);
    ctx.strokeStyle = 'rgba(212,175,55,0.1)';
    ctx.lineWidth = 28;
    ctx.stroke();
  }
}

function _pendoloAnimate(){
  _pendolo.t += 0.04;
  const amp = 0.38;

  if(_pendolo.mode === 'si'){
    // Oscillazione laterale (sì)
    _pendolo.angle = amp * Math.sin(_pendolo.t * 2.2) * Math.exp(-_pendolo.t * 0.012);
  } else if(_pendolo.mode === 'no'){
    // Oscillazione con sfasamento (no) — asse diverso
    _pendolo.angle = amp * 0.6 * Math.sin(_pendolo.t * 1.8 + Math.PI/4) * Math.exp(-_pendolo.t * 0.01);
  } else if(_pendolo.mode === 'forse'){
    // Circolare — alterna asse
    _pendolo.angle = amp * 0.5 * Math.sin(_pendolo.t * 1.4) + amp * 0.3 * Math.cos(_pendolo.t * 2.1);
    _pendolo.angle *= Math.exp(-_pendolo.t * 0.008);
  } else if(_pendolo.mode === 'irregolare'){
    // Movimenti caotici
    _pendolo.angle = amp * 0.4 * (Math.sin(_pendolo.t * 3.1) + Math.sin(_pendolo.t * 1.7 + 1.2) * 0.5);
    _pendolo.angle *= Math.exp(-_pendolo.t * 0.015);
  }

  // Ritorna a zero piano piano
  const decay = Math.exp(-_pendolo.t * 0.012);
  if(decay < 0.05 && _pendolo.animId){
    _pendolo.angle = 0;
    pendoloDrawStatic();
    // Mostra risposta dopo che il pendolo si ferma
    if(_pendolo.answer) _pendoloShowAnswer(_pendolo.answer);
    _pendolo.animId = null;
    const btnFerma = document.getElementById('pendolo-btn-ferma');
    if(btnFerma) btnFerma.style.display = 'none';
    return;
  }

  pendoloDrawStatic();
  _pendolo.animId = requestAnimationFrame(_pendoloAnimate);
}

function _pendoloShowAnswer(ans){
  const res = document.getElementById('pendolo-result');
  if(!res) return;
  const map = {
    si:         { ico:'↔️', col:'#4ade80', tit:'SÌ — Energia in Accordo',    txt:'Il pendolo oscilla lateralmente: risposta positiva. L\'universo è allineato con la tua intenzione. Agisci con fiducia.' },
    no:         { ico:'↕️', col:'#f87171', tit:'NO — Resistenza Energetica',  txt:'Il pendolo oscilla verticalmente: risposta negativa. C\'è una forza contraria. Rifletti sull\'ostacolo prima di procedere.' },
    forse:      { ico:'🔄', col:'#b88fe0', tit:'FORSE — Energia Non Definita', txt:'Il pendolo ruota circolarmente: il momento non è ancora maturo per una risposta. Aspetta, medita, poi richiedi.' },
    irregolare: { ico:'🌀', col:'#fbbf24', tit:'CHIEDI DI NUOVO',              txt:'Interferenza energetica rilevata. Purifica lo spazio, fai tre respiri profondi e ripeti la consultazione.' }
  };
  const d = map[ans] || map.forse;
  res.innerHTML = `<div style="text-align:center;padding:10px 0">
    <div style="font-size:36px;margin-bottom:8px">${d.ico}</div>
    <div style="font-family:'Cinzel',serif;font-size:14px;color:${d.col};letter-spacing:1px;margin-bottom:10px">${d.tit}</div>
    <p style="font-size:13.5px;line-height:1.7;color:var(--text);margin:0">${d.txt}</p>
  </div>`;
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function pendoloConsulta(){
  hapticFeedback();
  const domanda = ((document.getElementById('pendolo-domanda')||{}).value||'').trim();
  if(!domanda){ toast('🔮 Scrivi prima la tua domanda'); return; }

  // Cancella animazione precedente
  if(_pendolo.animId){ cancelAnimationFrame(_pendolo.animId); _pendolo.animId = null; }
  const res = document.getElementById('pendolo-result');
  if(res){ res.classList.remove('visible'); res.innerHTML = ''; }

  // Scegli risposta casuale pesata
  const outcomes = ['si','si','si','no','no','forse','forse','irregolare'];
  const ans = outcomes[Math.floor(Math.random() * outcomes.length)];
  _pendolo.answer = ans;
  _pendolo.mode = ans;
  _pendolo.t = 0;
  _pendolo.angle = 0;

  const btnFerma = document.getElementById('pendolo-btn-ferma');
  if(btnFerma) btnFerma.style.display = 'flex';

  // Avvia animazione
  _pendolo.animId = requestAnimationFrame(_pendoloAnimate);

  if(typeof saveHistory === 'function') saveHistory('Pendolo', domanda.slice(0,60));
}

function pendoloFerma(){
  if(_pendolo.animId){ cancelAnimationFrame(_pendolo.animId); _pendolo.animId = null; }
  _pendolo.angle = 0;
  pendoloDrawStatic();
  const btnFerma = document.getElementById('pendolo-btn-ferma');
  if(btnFerma) btnFerma.style.display = 'none';
  if(_pendolo.answer) _pendoloShowAnswer(_pendolo.answer);
}

/* ═══════════════════════════════════════════════════
   OROSCOPO MENSILE — Database 12 segni × 12 mesi
   ═══════════════════════════════════════════════════ */
const DB_ORO_MESE = {
  ariete:{
    1:{titolo:"Gennaio — Il Risveglio del Guerriero",generale:"Marte ti spinge fuori dall'inerzia invernale con un'energia che pochi altri segni sanno gestire. Gennaio è il mese della chiarezza: capisci cosa vuoi davvero e tagli ciò che ti trattiene. Non tutti apprezzeranno la tua franchezza.",amore:"In amore il mese porta tensioni ma anche chiarimenti necessari. Una conversazione difficile che hai rimandato non può più aspettare. Se sei in coppia, il partner ha qualcosa da dirti — ascolta prima di reagire. Single: un incontro stimolante, ma non precipitare.",lavoro:"Opportunità professionali concrete si presentano nella seconda metà del mese. La tua velocità di decisione è un vantaggio, ma un collega potrebbe frenarsi ai tuoi piani. Documenta tutto per iscritto.",salute:"Il sistema immunitario è sotto pressione. Stai esagerando con l'attività fisica o con il lavoro? Il corpo manda segnali — questa volta ascoltali prima che diventino impossibili da ignorare.",fortuna:"⚡ Energia alta ma instabile. Evita investimenti rischiosi nei primi 15 giorni. La seconda metà porta stabilità."},
    2:{titolo:"Febbraio — La Fiamma e il Ghiaccio",generale:"Venere transita in posizione complessa per te: attira ma anche complica. È un mese di paradossi — vuoi vicinanza ma ti irrita la dipendenza. Lavora su questa contraddizione invece di proiettarla sugli altri.",amore:"Il giorno di San Valentino può essere magnifico o disastroso: dipende da quanto sei disposto a mostrare la tua vulnerabilità. L'Ariete ama intensamente ma fatica ad ammetterlo. Questo febbraio, ammettilo.",lavoro:"Il mese porta un'offerta o un cambiamento inaspettato. Non rifiutare per paura del nuovo — è esattamente ciò che stai cercando sotto l'irascibilità di superficie.",salute:"Emicranie e tensioni cervicali tipiche dell'Ariete sotto stress. Reduci caffè e schermi la sera. Il sonno che perdi ora lo paghi a maggio.",fortuna:"💕 Il 14 è un giorno di potere per te. I numeri 9 e 18 ti accompagnano questo mese."},
    3:{titolo:"Marzo — Il Tuo Compleanno Cosmico",generale:"Il Sole entra in Ariete e tutto si illumina. È il tuo mese di potere, il momento in cui le energie dell'universo si allineano con la tua natura. Sfruttalo per iniziare, non per finire.",amore:"La passione è al massimo. Attenzione però: ciò che inizia di impulso a marzo spesso brucia veloce. Se vuoi qualcosa di duraturo, costruiscilo con un po' di pazienza — il che per l'Ariete è già un atto eroico.",lavoro:"Nuovi inizi professionali favoriti. Il coraggio che mostri questo mese determina l'assetto dei prossimi sei. Non sprecare l'energia su battaglie già perse.",salute:"Mese eccellente fisicamente. Approfitta per instaurare nuove routine di allenamento che reggeranno per tutto l'anno.",fortuna:"🌟 Il tuo mese migliore. Tutto ciò che inizi ora ha il vento cosmico in poppa."},
    4:{titolo:"Aprile — La Prova della Perseveranza",generale:"Il fuoco si stabilizza. Aprile chiede all'Ariete di fare qualcosa di insolito: resistere. I progetti avviati a marzo richiedono ora la fase noiosa — eseguire, correggere, ripetere. Ce la fai?",amore:"Relazioni in costruzione: il fascino dell'inizio è passato, arriva la realtà quotidiana. Per chi regge questo passaggio, il legame diventa solido. Per chi scappa, era solo un abbaglio.",lavoro:"Il mese porta frutti concreti se hai lavorato bene a marzo. Se invece hai seminato conflitti, li raccogli adesso. Un chiarimento con un superiore è necessario.",salute:"Attenzione alle articolazioni — il tipo di allenamento intenso che l'Ariete ama in questo mese può portare infortuni. Riscaldamento non è opzionale.",fortuna:"🌱 Fortuna moderata ma stabile. Meglio consolidare che espandere."},
    5:{titolo:"Maggio — L'Energia si Accumula",generale:"Marte cambia posizione e la tua carica energetica sale di livello. Maggio è il mese in cui tutto sembra possibile — e in effetti molto lo è, se canalizzi l'energia invece di disperderla.",amore:"Un incontro o una riconciliazione significativa. L'Ariete in maggio è irresistibile: spontaneo, appassionato, presente. Usa questo picco di magnetismo con intenzione.",lavoro:"Progetto importante prende slancio. Una persona influente nota il tuo lavoro — non sabotarti con l'impazienza proprio adesso che le cose si muovono.",salute:"Energia eccellente. Attenzione a non sopravvalutare le tue capacità fisiche: il corpo Ariete in maggio dice sempre di sì anche quando dovrebbe dire no.",fortuna:"⭐ Mese positivo. Il numero 3 porta fortuna in situazioni decisive."},
    6:{titolo:"Giugno — Le Acque si Agitano",generale:"L'estate porta complessità relazionali. Il Sole in Gemelli crea dinamiche comunicative che l'Ariete, abituato alla semplicità, trova frustranti. Rallenta prima di parlare.",amore:"Mese ambivalente in amore. Chi è in coppia affronta un momento di verifica: siete ancora sulla stessa strada? È una domanda scomoda ma necessaria. Non rimandare la risposta.",lavoro:"Possibili tensioni con colleghi o clienti. La tua diretta è apprezzata ma questo mese serve anche diplomazia. Il messaggio giusto detto nel modo sbagliato diventa un problema inutile.",salute:"Sistema nervoso sotto pressione. Medita, cammina, stacca dai dispositivi la sera. Il cervello Ariete ha bisogno di silenzio più spesso di quanto ammetta.",fortuna:"🌊 Mese instabile. Evita decisioni finanziarie importanti nella prima metà."},
    7:{titolo:"Luglio — Il Riposo del Guerriero",generale:"Il Cancro porta le energie verso l'interno e la casa. Per l'Ariete, abituato all'esterno e all'azione, luglio può sembrare uno stop forzato. Non lo è: è il momento di nutrire le radici.",amore:"La famiglia e le relazioni intime richiedono attenzione. Un vecchio conflitto familiare torna a galla — affrontarlo adesso con maturità ti libera da un peso che porti da troppo tempo.",lavoro:"Mese di revisione e pianificazione, non di lancio. Usa luglio per costruire la struttura di ciò che lancerai a settembre. La mente Ariete odia questo ma ne beneficia enormemente.",salute:"Zona stomaco e digestione sensibile. Mangia in pace, non di corsa. Idratazione fondamentale nei giorni più caldi.",fortuna:"🏠 Fortuna nella sfera domestica e familiare. Evita rischi in ambito professionale."},
    8:{titolo:"Agosto — Il Leone Porta la Luce",generale:"Il Sole in Leone è amico del tuo fuoco: agosto ti ricarica, ti regala visibilità e opportunità sociali. È il mese della festa, della creatività, del vivere pienamente.",amore:"Romance e passione al top. Se sei single, agosto porta incontri memorabili — non aspettarti però necessariamente qualcosa di duraturo. Se sei in coppia, una vacanza insieme rinvigorisce il legame.",lavoro:"Opportunità di visibilità professionale. Un evento, una presentazione, un contatto importante — agosto porta i palcoscenici che l'Ariete ama. Preparati.",salute:"Eccellente. Approfitta per attività all'aperto, sole (con protezione), mare. Il corpo Ariete in agosto è al massimo della vitalità.",fortuna:"☀️ Mese d'oro. Tutto ciò che fai con passione e creatività porta risultati."},
    9:{titolo:"Settembre — Il Ritorno all'Azione",generale:"La fine dell'estate e il rientro alle routine. La Vergine porta precisione e critica — l'Ariete impara (a fatica) a rallentare e correggere. Settembre è il mese del rientro, e tu sai sempre come fare rientri in grande stile.",amore:"Comunicazione fondamentale questo mese. Ciò che non viene detto accumula tensione. Parla prima che la Vergine critica di settembre trasformi un malinteso in un muro.",lavoro:"Mese di grande produttività se ti disciplini. La Vergine nel cielo ti aiuta a sistemare i dettagli che hai sempre trascurato. Un progetto importante si avvicina alla conclusione.",salute:"Attenzione all'intestino — la Vergine governa questa zona e settembre porta sensibilità digestiva. Alimentazione regolare e meno stress a tavola.",fortuna:"📋 Fortuna nel lavoro metodico e nei dettagli. Non improvvisare nelle scelte importanti."},
    10:{titolo:"Ottobre — Bilanciare il Fuoco",generale:"La Bilancia porta il tema dell'equilibrio — una parola che l'Ariete conosce ma raramente pratica. Ottobre ti chiede di considerare il punto di vista degli altri. Non ti chiede di cedere: ti chiede di capire.",amore:"Mese di riavvicinamenti e riequilibri. Venere in Bilancia porta armonia nelle relazioni — ma solo se sei disposto a fare la tua parte. Un gesto di apertura vale più di cento discussioni vinte.",lavoro:"Partnership e collaborazioni favoriti. Lavora in tandem invece di procedere in solitaria — ottobre dimostra che due teste sono meglio di una, anche per l'Ariete.",salute:"Sistema renale e lombare da monitorare. Attenzione alla schiena — specialmente se stai sotto stress lavorativo.",fortuna:"⚖️ Equilibrio è la parola chiave. La fortuna sorride a chi sa mediare."},
    11:{titolo:"Novembre — Le Profondità dello Scorpione",generale:"Lo Scorpione porta intensità emotiva che l'Ariete non sempre sa dove mettere. Novembre è un mese di trasformazione profonda — qualcosa finisce per fare spazio a qualcosa di meglio. Lascia andare.",amore:"Mese intenso e a tratti oscuro in amore. Gelosie, non-detti, dinamiche di potere emergeranno. Non è il momento di fare finta che vada tutto bene — ma nemmeno di esplodere. Scegli l'onestà con calma.",lavoro:"Trasformazioni professionali. Un ciclo si chiude — un contratto, una collaborazione, una fase. La fine fa spazio al meglio che arriva a dicembre.",salute:"Zona pelvica e ormonale sensibile. Riposo adeguato e riduzione delle tossine (alcol, cibo spazzatura) aiutano il corpo a gestire il periodo di transizione.",fortuna:"🦂 Mese di chiusura karmica. Ciò che lasci andare ora torna moltiplicato in forma migliore."},
    12:{titolo:"Dicembre — La Freccia verso il Futuro",generale:"Il Sagittario porta visione, ottimismo e voglia di espandersi. Dicembre è il mese in cui l'Ariete ritrova l'entusiasmo cosmico e inizia già a pianificare l'anno nuovo con la sua inconfondibile energia.",amore:"Leggerezza e gioia nelle relazioni. Il periodo festivo porta calore umano genuino. Approfitta per consolidare i legami che contano e allontanarti senza rimpianti da chi prende più di quanto dia.",lavoro:"Bilancio dell'anno e proiezione del prossimo. Hai fatto molto — riconoscilo. Impara dagli errori senza auto-flagellarti. Gennaio ti aspetta con nuove sfide.",salute:"Attenzione agli eccessi festivi. Il fegato dell'Ariete regge bene ma non è invincibile. Bilancia le celebrazioni con momenti di riposo reale.",fortuna:"🏹 Dicembre porta fortuna espansiva. Il Sagittario amplifica la tua naturale capacità di osare."}
  },
  toro:{
    1:{titolo:"Gennaio — La Radice Invernale",generale:"Il Toro in gennaio è come un seme sotto la neve: silenzioso, potente, in attesa. Non è immobilismo — è raccolta. Usi questo mese per pianificare con la precisione che ti contraddistingue.",amore:"Un legame si consolida o si rivela per quello che è davvero. Gennaio porta verità nelle relazioni — alcune confortanti, altre meno. La stabilità che cerchi deve partire da te.",lavoro:"Revisione finanziaria del periodo festivo. È il momento di sistemare i conti, rivedere i contratti, riorganizzare le priorità. La tua capacità di gestione materiale è al massimo.",salute:"Gola e tiroide sensibili nei mesi freddi. Tieni il collo coperto, evita sbalzi termici, integra con vitamina D.",fortuna:"🌱 Fortuna nel consolidamento. Evita investimenti speculativi — preferisci il sicuro."},
    2:{titolo:"Febbraio — Venere Danza per Te",generale:"Il tuo pianeta Venere è favorevole: il fascino del Toro è irresistibile questo mese. C'è però una tendenza alla pigrizia che può costare cara — non tutto può aspettare la comodità del momento giusto.",amore:"Mese romantico e sensuale. Se sei in coppia, il legame si arricchisce di intimità nuova. Se sei single, Venere porta l'incontro che non ti aspetti — forse proprio perché smetti di cercarlo.",lavoro:"Opportunità finanziaria concreta si presenta. Valutala con calma — non con l'entusiasmo degli altri, ma con la tua analisi metodica. Quella valutazione spesso fa la differenza.",salute:"Sistema linfatico da supportare. Muoviti ogni giorno anche moderatamente. Il Toro che non si muove in inverno accumula tossine.",fortuna:"💜 Venere porta fortuna materiale e relazionale. Il venerdì è il tuo giorno di potere."},
    3:{titolo:"Marzo — Il Risveglio dei Sensi",generale:"Primavera e il Toro si ridestate insieme — è una sincronia cosmica. La natura si risveglia e tu con lei: nuovi progetti, nuovi desideri, nuova energia che non sentivi da mesi.",amore:"Periodo di fioritura romantica. La sensualità primaverile è il tuo elemento naturale. Lasciati travolgere da ciò che è bello — sei fatto per godere.",lavoro:"Nuovo ciclo lavorativo favorevole. Marzo porta riconoscimento per ciò che hai costruito con pazienza. Non è un caso: hai lavorato duramente per questo momento.",salute:"Il corpo vuole muoversi finalmente. Passeggiate nella natura, giardinaggio, qualsiasi attività all'aperto: il Toro primavera ricarica col contatto con la terra.",fortuna:"🌸 Fioritura su tutti i fronti. Il numero 6 porta fortuna nelle scelte importanti."},
    4:{titolo:"Aprile — La Terra si Solidifica",generale:"Aprile è il tuo mese più potente del primo semestre. Il Sole transita in Toro e tutta la tua energia rallentata dell'inverno trova espressione. Costruisci — è ciò che sai fare meglio di tutti.",amore:"Il tuo carisma è al massimo. In amore questo mese porta profondità — non la passione superficiale ma la connessione reale. Sii presente: non sul telefono, non in testa altrove.",lavoro:"Mese eccellente per tutto ciò che riguarda denaro, proprietà, contratti. Le stelle favoriscono la firma di accordi importanti nella seconda metà di aprile.",salute:"Benessere fisico notevole. Approfitta per instaurare abitudini alimentari sane che reggeranno per il semestre.",fortuna:"⭐ Il tuo mese migliore del primo semestre. Agisci con intenzione."},
    5:{titolo:"Maggio — Il Compleanno del Toro",generale:"Il Sole è ancora in Toro all'inizio del mese — il tuo compleanno cosmico porta con sé una chiarezza rara. Sai chi sei, cosa vuoi, dove stai andando. Questo è il potere della tua stagione.",amore:"Periodo magnifico per l'amore. La tua presenza fisica e emotiva è magnetica. Un legame già solido si approfondisce ulteriormente. Single: questo è il momento in cui l'amore vero bussa.",lavoro:"Finanze in miglioramento. Un progetto portato avanti con costanza mostra finalmente i suoi frutti economici. Non spendere prima di ricevere.",salute:"Eccellente vitalità. Voce e sistema vocale al top — se canti, reciti o parli in pubblico, questo è il momento per brillare.",fortuna:"🌿 Mese di abbondanza. La terra ti restituisce ciò che hai seminato con cura."},
    6:{titolo:"Giugno — L'Estate del Pensiero",generale:"I Gemelli portano velocità mentale che può disorientare il Toro, amante della costanza. Giugno spinge fuori dalla comfort zone comunicativa. Parla di più. Muoviti di più. Esci dalla routine.",amore:"Comunicazione come chiave romantica. Il partner ha bisogno di dialogo — non solo di stabilità materiale. Condividi pensieri, paure, sogni. È ciò che cementa davvero.",lavoro:"Connessioni professionali importanti. Una conversazione casuale diventa un'opportunità concreta. Il networking che il Toro tende a trascurare questo mese porta risultati reali.",salute:"Sistema nervoso da supportare: sei abitudinario e i cambiamenti di giugno possono stressarti. Tecniche di respirazione e meditazione breve come ancora di stabilità.",fortuna:"🌊 Mese di scambi e connessioni. La fortuna arriva attraverso le persone."},
    7:{titolo:"Luglio — Il Cancro Nutre le Radici",generale:"Il Cancro è un segno affine al Toro — entrambi amate la casa, la famiglia, il nutrimento. Luglio porta un profondo senso di appartenenza. Le radici si rafforzano.",amore:"La famiglia e la casa diventano spazio sacro dell'amore. Un momento di intimità domestica — cucinare insieme, riorganizzare gli spazi, prendersi cura dei piccoli dettagli — vale più di qualsiasi gesto romantico esterno.",lavoro:"Mese favorevole per il lavoro da casa o per tutto ciò che riguarda immobili e proprietà. Un affare legato alla terra o alla casa può presentarsi.",salute:"Stomaco e digestione: zona di sensibilità per il Cancro, ma il Toro in luglio può risentirne per empatia energetica. Mangia cibi semplici, di stagione, preparati con cura.",fortuna:"🏠 La fortuna si concentra nella sfera domestica e familiare."},
    8:{titolo:"Agosto — Il Sole Dora il Toro",generale:"Leone e Toro sono in sestile — è un'energia favorevole. Agosto porta visibilità, divertimento, creatività. Il Toro esce dalla sua routine e scopre quanto può brillare quando si concede.",amore:"Periodo romantico e solare. Una vacanza condivisa trasforma il legame. Se sei single, agosto porta incontri in ambienti naturali e sensuali — tutto ciò che il Toro ama.",lavoro:"Creatività al top. Proponi idee audaci — il Leonardo di Caprio che è in te emerge quando c'è abbastanza luce intorno.",salute:"Goditi il sole ma proteggi la pelle — il Toro ha costituzione robusta ma la fotosensibilità aumenta in alcuni periodi.",fortuna:"☀️ Mese di piacere e abbondanza. Il lusso moderato è permesso e si restituisce."},
    9:{titolo:"Settembre — Il Lavoro Riprende",generale:"La Vergine e il Toro condividono l'amore per i risultati concreti. Settembre è il mese in cui il Toro è più produttivo: testa bassa, lavoro fatto bene, soddisfazione tangibile alla fine.",amore:"Comunicazione pratica e gesti concreti d'amore. Non le parole ma i fatti: il partner che prenoti, il problema che risolvi, il dettaglio che ricordi. Questo è il tuo linguaggio d'amore autentico.",lavoro:"Eccellente per tutto ciò che richiede metodo, precisione e costanza. Un progetto complesso si avvicina alla conclusione con successo.",salute:"Intestino da curare — la Vergine governa questa zona. Fermenti lattici, fibre, acqua e meno stres a tavola.",fortuna:"📋 La fortuna premia il lavoro sistematico e la cura dei dettagli."},
    10:{titolo:"Ottobre — La Bilancia Porta l'Arte",generale:"Venere è il pianeta della Bilancia e il tuo: ottobre è doppiamente venereo. Arte, bellezza, armonia, relazioni — tutto si illumina. È uno dei tuoi mesi migliori dell'anno.",amore:"Magnifico. Venere in Bilancia porta il romanticismo più raffinato dell'anno. Un anniversario celebrato ora diventa indimenticabile. Un incontro per i single: elegante, sensuale, profondo.",lavoro:"Collaborazioni e partnership favoriti. La tua affidabilità diventa il fondamento di un'alleanza professionale importante.",salute:"Il corpo è in equilibrio. Il tuo innato senso estetico si estende al benessere fisico: mangi bene, ti muovi con piacere.",fortuna:"🎨 Il tuo secondo mese migliore dell'anno. La bellezza attira abbondanza."},
    11:{titolo:"Novembre — Le Trasformazioni Necessarie",generale:"Scorpione e Toro sono opposti zodiacali — novembre porta tensione creativa. Ciò che il Toro vuole mantenere, lo Scorpione lo mette in discussione. La trasformazione è scomoda ma necessaria.",amore:"Dinamiche di potere emergono. Non è il momento di essere passivi — è il momento di dire ciò che vuoi davvero da una relazione. La crisi di novembre può diventare il fondamento di qualcosa di molto più solido.",lavoro:"Trasformazioni finanziarie. Un cambio di rotta professionale che rimandavi si presenta come inevitabile. Affronta il cambiamento invece di resistere.",salute:"Sistema riproduttivo e ormonale da monitorare. Attenzione a non accumulare tensioni — il Toro tende a somatizzare nella zona collo-tiroide.",fortuna:"🦂 Mese di morte e rinascita. Lascia andare ciò che non serve più."},
    12:{titolo:"Dicembre — La Festa del Piacere",generale:"Il Sagittario porta espansione e gioia. Il Toro, amante del bello e del buono, sa come celebrare. Dicembre è il tuo mese dei piaceri consapevoli — non eccessi, ma godimento autentico.",amore:"Calore e intimità familiare al top. Il Natale è il momento in cui il Toro esprime il suo linguaggio d'amore migliore: la tavola preparata con cura, il regalo pensato mesi prima, la casa che profuma.",lavoro:"Bilancio positivo se hai lavorato con costanza. I frutti economici dell'anno si raccolgono. Pianifica il budget del nuovo anno con anticipo — è la tua forza.",salute:"Attenzione agli eccessi gastronomici — il Toro non ha mai un freno naturale a tavola in dicembre. Un pasto frugale ogni tanto equilibra i bagordi.",fortuna:"🎄 Fortuna nella generosità e nel condividere. Dona e ricevi in egual misura."}
  },
  gemelli:{
    1:{titolo:"Gennaio — Mente in Movimento",generale:"I Gemelli in gennaio sono come antenne che captano segnali da tutte le direzioni. Il problema è la dispersione: troppe idee, nessuna eseguita. Scegli una cosa e portala avanti.",amore:"La comunicazione è il tuo dono romantico — usala. Un messaggio scritto con cura, una conversazione notturna profonda, un piano improvvisato: questi sono i tuoi atti d'amore.",lavoro:"Nuovi contatti professionali nel corso del mese. Il networking dei Gemelli è prodigioso — uno di questi nuovi contatti sarà fondamentale entro giugno.",salute:"Sistema nervoso sotto stress post-festivo. Riduci la caffeina, regola il sonno, stacca i dispositivi un'ora prima di dormire.",fortuna:"🧩 Fortuna nei dettagli e nelle comunicazioni. Il numero 5 ti accompagna."},
    2:{titolo:"Febbraio — Le Parole che Curano",generale:"Mercurio nel cielo porta agilità comunicativa. Ciò che dici questo mese ha un peso insolito — in positivo e in negativo. Scegli le parole con più attenzione del solito.",amore:"Un chiarimento atteso porta sollievo. L'amore dei Gemelli è verbale — senza parole, senza intimità. Questo mese, di' ciò che provi senza il filtro dell'ironia.",lavoro:"Scrittura, presentazioni, corsi, formazione: tutto ciò che riguarda la comunicazione è favorito. Una proposta creativa sorprende positivamente.",salute:"Polmoni e vie respiratorie da curare nei mesi freddi. Respira profondamente. Stai probabilmente respirando in modo superficiale per via dello stress.",fortuna:"💬 La parola giusta al momento giusto cambia le sorti. Sceglila con cura."},
    3:{titolo:"Marzo — Il Vento Primaverile",generale:"La primavera è il tuo elemento: aria, movimento, cambiamento. Marzo porta una serie di eventi rapidi che possono sembrare caotici ma che stanno costruendo qualcosa di importante.",amore:"Incontri numerosi, conversazioni stimolanti. Attenzione però: i Gemelli in primavera si innamorano facilmente della possibilità di qualcuno — assicurati che sia la persona reale, non la proiezione.",lavoro:"Mese eccellente per lanci, presentazioni, contratti di comunicazione. La tua vivacità mentale impressiona chi di dovere.",salute:"Energia alta ma irregolare. Impara a riposare prima di esaurire il serbatoio — non dopo.",fortuna:"🌬️ Il vento porta novità. Sii pronto a coglierle al volo senza esitare."},
    4:{titolo:"Aprile — La Scelta Necessaria",generale:"La dispersione dei Gemelli viene messa a dura prova da Saturno. Aprile chiede: tra tutte le cose che stai facendo, quale conta davvero? Non puoi portare avanti tutto — scegli.",amore:"Un bivio sentimentale. Non necessariamente drammatico, ma reale: continui con superficialità o ti impegni davvero? La risposta che dai ad aprile si vede a ottobre.",lavoro:"Un progetto richiede focus totale. Delega ciò che puoi. La qualità su uno vale più della mediocrità su dieci.",salute:"Tensioni alle spalle e alle mani — le zone del Gemelli sotto stress. Stretching quotidiano e pause dal computer.",fortuna:"⚖️ Fortuna in chi sa scegliere. Chi non sceglie non vince."},
    5:{titolo:"Maggio — Il Tuo Compleanno Cosmico",generale:"Il Sole entra in Gemelli e il mondo si illumina del tuo colore. Maggio porta il meglio di te: brillantezza, curiosità, capacità di vedere connessioni che gli altri non vedono.",amore:"Magnetismo romantico al top. Sei irresistibile quando sei nel tuo elemento. La leggerezza non è superficialità — è il tuo modo di mettere a proprio agio le persone.",lavoro:"Il mese più produttivo dell'anno per i Gemelli. Tutto ciò che riguarda comunicazione, media, scrittura, insegnamento, networking porta risultati eccellenti.",salute:"Vitalità eccezionale. Anche la voce è al top — se hai qualcosa da dire in pubblico, fallo adesso.",fortuna:"🌟 Il tuo mese cosmico. L'universo ti sorride — corrispondi."},
    6:{titolo:"Giugno — L'Eco del Sé",generale:"Il Cancro porta introspezione in un segno che preferisce l'esterno. Giugno chiede ai Gemelli di fare qualcosa di insolito: stare fermi e ascoltare il silenzio interiore.",amore:"Vulnerabilità come atto d'amore. Il partner ha bisogno di vedere la tua parte meno brillante, meno ironica, più vera. È rischioso — ma è esattamente ciò che approfondisce il legame.",lavoro:"Riorganizzazione interna favorita. Invece di lanciare nuovi progetti, perfeziona quelli esistenti. È il momento di approfondire, non di espandere.",salute:"Stomaco e sistema digestivo sensibili. Mangiare in fretta è il tuo default — questo mese rallenta. I Gemelli che mangiano di corsa poi soffrono di acidi.",fortuna:"🏠 Fortuna nella casa e nella famiglia. Gli investimenti domestici rendono."},
    7:{titolo:"Luglio — Il Caldo e il Dubbio",generale:"Il caldo estivo mette il turbo alla mente dei Gemelli — ma anche al dubbio. Luglio può portare indecisione su grandi temi. Non è debolezza: stai raccogliendo tutte le variabili prima di decidere.",amore:"Un periodo di riflessione sentimentale. Non è crisi — è elaborazione. I Gemelli hanno bisogno di periodici momenti di distanza interiore per poi tornare con più chiarezza.",lavoro:"Mese tranquillo lavorativamente. Usa le ferie per ricaricare la mente creativa — il Gemelli esaurito produce idee banali.",salute:"Attenzione alla dispersione energetica estiva: eccesso di attività sociali, poco sonno, irregolarità alimentare. Il corpo tiene traccia di tutto.",fortuna:"🌊 Mese di introspezione. La fortuna è in ciò che scopri su te stesso."},
    8:{titolo:"Agosto — La Creatività Esplode",generale:"Leone e Gemelli sono in sestile — un'energia festosa e creativa. Agosto porta performance, divertimento, show. Il Gemelli in agosto è la star della festa.",amore:"Romanticismo giocoso e leggero. Agosto non è il mese del grande impegno sentimentale — è il mese della bellezza del momento presente. Vivilo.",lavoro:"Creatività e progetti speciali. Se sei artista, scrittore, creativo di qualsiasi tipo, agosto porta ispirazione autentica.",salute:"Eccellente fisicamente. Il calore fa bene al sistema nervoso dei Gemelli, stranamente.",fortuna:"☀️ Fortuna nel divertimento e nella creatività. Sì a tutto ciò che è bello."},
    9:{titolo:"Settembre — La Mente Riprende il Controllo",generale:"La Vergine e i Gemelli condividono Mercurio come pianeta guida — settembre porta acutezza analitica raramente eguagliata. La tua mente in settembre è un bisturi.",amore:"Comunicazione precisa e onesta. Non nasconderti dietro la leggerezza — questo mese porta chiarimenti profondi nelle relazioni.",lavoro:"Eccellente per tutto ciò che richiede analisi, scrittura tecnica, negoziazione. Un contratto o un accordo si chiude con soddisfazione.",salute:"Intestino da curare — il Gemelli in settembre è soggetto a coliti nervose. Meno stress, pasti regolari, probiotici.",fortuna:"📊 La fortuna premia l'analisi e la precisione. Fai i conti prima di decidere."},
    10:{titolo:"Ottobre — Le Relazioni Fioriscono",generale:"La Bilancia porta equilibrio e armonia — una boccata d'aria fresca per il Gemelli spesso in sovraccaprima. Ottobre è il mese in cui le relazioni diventano il centro della vita.",amore:"Periodo romantico favorevolissimo. Le stelle di ottobre portano incontri significativi per i single e rinnovamento per le coppie. La bellezza è dappertutto — apriti a vederla.",lavoro:"Collaborazioni e team vincenti. Il Gemelli in tandem con il giusto partner professionale produce risultati che da solo non raggiungerebbe mai.",salute:"Equilibrio psicofisico notevole. Approfitta per instaurare abitudini salutari che porterai nell'inverno.",fortuna:"🍂 Fortuna nelle relazioni e nelle partnership. Scegli bene con chi stai."},
    11:{titolo:"Novembre — Il Velo si Assottiglia",generale:"Scorpione porta profondità oscura che il Gemelli affronta con curiosità intellettuale. Novembre è il mese in cui il leggero incontra il pesante — e scopre che il pesante non fa così paura.",amore:"Intensità emotiva insolita. Il Gemelli sperimenta sentimenti più profondi del solito — non resistervi. La profondità in amore non è soffocamento: è pienezza.",lavoro:"Trasformazioni. Ciò che non funzionava professionalmentesi mostra per quello che è. È il momento di cambiare, non di resistere.",salute:"Sistema nervoso particolarmente sensibile. La meditazione — anche breve — è il farmaco più efficace.",fortuna:"🦂 Fortuna nelle trasformazioni. Chi non teme il cambiamento vince questo mese."},
    12:{titolo:"Dicembre — La Freccia della Mente",generale:"Sagittario e Gemelli sono opposti zodiacali — dicembre porta espansione là dove c'è abitualmente movimento dispersivo. Il Gemelli impara a mirare invece di sparare in tutte le direzioni.",amore:"Relazioni che volano alto. I legami che reggono dicembre reggono tutto. Un viaggio di coppia o un progetto condiviso sigilla il legame.",lavoro:"Bilancio dell'anno e visione del futuro. I Gemelli pianificatori sono quelli che hanno più successo — dicembre è il momento di essere quel Gemelli.",salute:"Fegato da proteggere nei festeggiamenti. Mantieni un appuntamento fisso con il movimento ogni giorno, anche mini.",fortuna:"🎯 Chi mira bene in dicembre colpisce il bersaglio a gennaio. Punta alto."}
  },

  cancro:{
    1:{titolo:"Gennaio — Le Acque Ghiacciate",generale:"La Luna, tua sovrana, è in tensione con Saturno per tutto il mese. Quello che senti in gennaio non è malinconia passeggera: è una resa dei conti con qualcosa che hai evitato troppo a lungo. La corazza che indossi da mesi si sta incrinando. Preparati a fare i conti con te stesso.",amore:"Presagio oscuro: un legame che credevi solido mostra crepe profonde. Non è colpa tua — o forse lo è in parte. Una parola non detta a novembre torna come un'accusa silenziosa. Se sei single, l'isolamento emotivo di questo mese è reale e pesa come un macigno.",lavoro:"Stagnazione totale. Le idee ci sono ma i corridoi sono bloccati. Un superiore che credevi alleato ti ignora sistematicamente. Non è il momento di fare mosse audaci: tieni la testa bassa e documenta tutto.",salute:"⚠️ Sistema immunitario al minimo storico. Freddori che diventano qualcosa di più lungo. Il corpo del Cancro in gennaio sotto pressione lunare non perdona gli eccessi. Riposo, non farmaci.",fortuna:"🖤 Mese di presagi cupi. Evita contratti, firme e investimenti. La Luna storta non perdona le imprudenze di gennaio."},
    2:{titolo:"Febbraio — Il Disgelo Interiore",generale:"Qualcosa si allenta. Non è ancora primavera emotiva — ma la morsa di gennaio si allenta di qualche grado. Venere transita favorevole e porta con sé un calore inaspettato. Ricevi questo dono senza diffidenza, Cancro: non tutto ciò che arriva morbido nasconde un'insidia.",amore:"Una conversazione che riapre tutto. Qualcuno che non sentivi da tempo si rifà vivo — le sue intenzioni sono genuine questa volta. Se sei in coppia, febbraio è il mese in cui riscoprite qualcosa che avevate dimenticato di avere. Non sprecare questo momento.",lavoro:"Lento miglioramento. Un progetto bloccato riceve finalmente il via libera. Non festeggiare troppo presto ma il peggio di gennaio è passato. Una collaborazione inaspettata con qualcuno che stimavi da lontano.",salute:"Meglio di gennaio ma ancora fragile. Il sistema nervoso parasimpatico ha bisogno di silenzio vero — non social, non serie TV. Silenzio autentico almeno venti minuti al giorno.",fortuna:"🌙 La Luna torna amica. Piccoli segni positivi che prefigurano una primavera migliore del previsto."},
    3:{titolo:"Marzo — Il Tradimento delle Aspettative",generale:"Marzo sembra promettente. E per questo è il mese più pericoloso per il Cancro. Apri il cuore troppo in fretta, ti fidi troppo presto, pianifichi su fondamenta ancora umide. Marte in posizione aggressiva porta conflitti che non ti aspetti esattamente quando abbassavi la guardia.",amore:"⚠️ Attenzione massima. Una figura romantica che sembra perfetta cela qualcosa di irrisolto. Il tuo sesto senso — il più potente dello zodiaco — ti manda segnali che stai ignorando. Ascoltalo. Una delusione evitabile diventa inevitabile solo se scegli di non vedere.",lavoro:"Un collega o un socio non sta giocando a carte scoperte. Marzo porta tradimenti professionali subdoli — non drammatici, ma corrosivi. Proteggi le tue idee, non condividere troppo in questa fase.",salute:"Emicranie e disturbi del sonno tipici del Cancro sotto stress di Marte. Il corpo elabora le emozioni attraverso il sistema digerente. Guarda cosa mangi e — soprattutto — perché.",fortuna:"⚡ Fortuna instabile e ingannevole. Ciò che sembra un'opportunità dorata potrebbe rivelarsi un'esca. Verifica prima di saltare."},
    4:{titolo:"Aprile — La Rinascita Autentica",generale:"Dopo il tradimento di marzo, aprile porta qualcosa di raro: una chiarezza dolorosa ma liberatoria. Sai finalmente chi ti è accanto per davvero. La Luna nuova in Ariete all'inizio del mese segna un reset potente. È il momento di ricominciare — stavolta con occhi aperti.",amore:"Straordinario per chi ha superato la prova di marzo. Il legame che regge le tempeste si rivela come la roccia che cercavi. Per i single: un incontro autentico, niente fuochi d'artificio ma una solidità che senti nelle ossa. Questo potrebbe essere importante.",lavoro:"Rinascita professionale concreta. Un progetto che sembrava morto torna in vita con nuova energia. La tua tenacia — quella silenziosa del Cancro — viene finalmente riconosciuta da chi conta davvero.",salute:"Eccellente. Il corpo risponde bene al risveglio emotivo. Ritrovi voglia di muoverti, di cucinare, di prenderti cura di te. Approfitta per instaurare abitudini che dureranno.",fortuna:"🌸 Mese di rinascita autentica. La fortuna premia chi ha attraversato il buio senza cedere."},
    5:{titolo:"Maggio — L'Abbondanza Silenziosa",generale:"Maggio porta una calma che al Cancro spesso fa paura — perché sei abituato a navigare le tempeste, non le acque piatte. Eppure questa quiete è reale e meritata. Il Sole in Toro crea un'armonia profonda con la tua natura: nutrimento, casa, radici. È il momento di fermarsi e godersi ciò che hai costruito.",amore:"Dolcezza autentica. Il mese porta piccoli gesti quotidiani che valgono più di qualsiasi dichiarazione romantica. Una cena cucinata con cura, una mano presa senza ragione, un messaggio al momento giusto. L'amore del Cancro in maggio è puro e concreto.",lavoro:"Produttività alta e soddisfazione genuina. Ciò che fai a maggio ha un valore che senti dentro. Non il riconoscimento esterno — la soddisfazione interiore di fare bene le cose. È la tua forma più alta.",salute:"Ottima. Pancia felice, mente riposata. Attenzione solo a non isolarti nel benessere — il Cancro in periodo positivo tende a costruire un guscio dorato che poi diventa prigione.",fortuna:"🌿 Abbondanza discreta e duratura. Non cercare colpi grossi — la fortuna questo mese è nel quotidiano."},
    6:{titolo:"Giugno — Il Richiamo delle Acque",generale:"Il Sole si avvicina al tuo segno e tu lo senti nel sangue settimane prima. Giugno è il mese della transizione: sei ancora in attesa del tuo momento ma l'energia si concentra come acqua che sale. Un'intuizione potente arriva nella seconda settimana — non ignorarla.",amore:"Intensità crescente. Chi ti ama lo dimostra in modo inaspettato questo mese. Una sorpresa romantica che non avresti mai previsto. Per i single: l'estate si apre con un incontro che ha tutto il profumo di qualcosa di vero. Non scappare.",lavoro:"Momento di visibilità. Qualcosa che hai fatto nei mesi precedenti torna alla luce nel momento giusto. Un riconoscimento tardivo ma sincero. Preparati per le opportunità di luglio con la struttura che costruisci adesso.",salute:"Il calore fa bene al tuo corpo acquatico. Nuota se puoi — è la cura ancestrale del Cancro. Il sistema linfatico risponde bene al movimento in acqua.",fortuna:"🌊 Le maree si alzano. Tutto ciò che hai seminato da gennaio comincia a dare i primi frutti visibili."},
    7:{titolo:"Luglio — Il Tuo Regno",generale:"Il Sole entra in Cancro e il mondo si piega alla tua intuizione. Luglio è il tuo mese di potere assoluto — quello in cui la tua sensibilità, che gli altri vedono come debolezza, diventa il tuo superpotere. Senti cose che gli altri non percepiscono nemmeno. Usa questo dono.",amore:"🌟 Magnifico. L'amore in luglio per il Cancro è totale, viscerale, trasformativo. Un legame raggiunge la sua massima profondità. Per chi è solo: l'incontro che aspettavi da anni. Non è un caso che arrivi ora — è il cosmo che ti restituisce ciò che hai dato.",lavoro:"Autorità naturale. Le persone si rivolgono a te per guida e intuizione. Un'opportunità professionale importante si presenta — non esitare. Il Cancro in luglio ha tutto il coraggio necessario.",salute:"Al massimo della vitalità. Il sistema immunitario, così fragile in inverno, ora è una fortezza. Sfrutta questo picco per iniziare qualcosa di fisicamente impegnativo.",fortuna:"👑 Il tuo mese d'oro. Tutto ciò che inizi ora porta il sigillo del tuo potere massimo. Agisci."},
    8:{titolo:"Agosto — Il Prezzo del Potere",generale:"Dopo il trionfo di luglio, agosto porta la fattura. Il Leone domina il cielo e la sua luce abbagliante mette in ombra la tua natura lunare. Senti il contrasto in modo fisico: stanchezza improvvisa, malinconia senza causa, voglia di sparire. Non combatterla — è necessaria.",amore:"Un raffreddamento improvviso che spaventa. Non è la fine — è il ciclo naturale del Cancro: alta marea e bassa marea. Chi ti ama capisce questo ritmo. Chi pretende costanza senza mai comprendere la tua complessità non merita di stare al tuo fianco.",lavoro:"Rallentamento e possibili incomprensioni con chi aveva preso troppo spazio durante il tuo potere di luglio. Riacquista i confini con fermezza. Qualcuno ha male interpretato la tua generosità di luglio come debolezza.",salute:"⚠️ Attenzione al sistema linfatico e agli stati infiammatori. Il Cancro dopo il picco di luglio ha bisogno di recupero reale. Fermarsi non è arrendersi.",fortuna:"🌑 Mese di luna calante. Consolida, non espandere. La fortuna premia chi sa riposare senza sensi di colpa."},
    9:{titolo:"Settembre — Il Lavoro Nascosto",generale:"La Vergine porta ordine in un cielo che agosto aveva lasciato disordinato. Settembre è il mese del lavoro silenzioso — quello che non vede nessuno ma che costruisce le fondamenta dei prossimi sei mesi. Il Cancro in settembre è un ingegnere invisibile. E va bene così.",amore:"Amore pratico e solido. Non romanticismo — presenza. Risolvi un problema concreto per chi ami: questo è il gesto più potente che puoi fare. Una crisi superata insieme rafforza il legame più di mille serate perfette.",lavoro:"Eccellente per la pianificazione, l'organizzazione, il recupero di situazioni lasciate in sospeso. Un documento importante, un progetto da sistemare, un dettaglio che fa la differenza tra il mediocre e l'ottimo.",salute:"Intestino e stomaco sotto i riflettori — zona sensibile del Cancro amplificata dalla Vergine. Alimentazione pulita e ritmi regolari sono medicine più potenti di qualsiasi integratore.",fortuna:"📋 La fortuna premia il metodo e la cura dei dettagli. Non improvvisare nelle scelte importanti di questo mese."},
    10:{titolo:"Ottobre — Il Gelo dell'Anima",generale:"Ottobre porta un freddo emotivo che il Cancro sente in anticipo. La Bilancia nel cielo porta equilibrio negli altri ma genera uno strano senso di sospensione in te — come se il mondo andasse avanti e tu fossi fermo a guardare. Non è depressione: è un necessario letargo interiore.",amore:"⚠️ Mese pericoloso per le illusioni romantiche. Una persona che compare nella tua vita a ottobre porta con sé bagagli non dichiarati. Il tuo sesto senso urla — questa volta davvero non ignorarlo. Per chi è in coppia: un non-detto che si accumula diventa una parete di vetro.",lavoro:"Tensioni con figure di autorità. Ottobre porta scontri di potere che il Cancro, allergico ai conflitti diretti, gestisce male se non si prepara. Sii chiaro sui tuoi limiti prima che qualcuno li scavalchi.",salute:"Melanconia autunnale più profonda del solito. Non è stagionale — è un segnale del corpo che chiede attenzione psicologica. Parla con qualcuno di cui ti fidi. Il silenzio non cura il Cancro.",fortuna:"🍂 Mese di presagi ambigui. Ciò che sembra perdita può essere liberazione. Attendi gennaio per vedere il disegno completo."},
    11:{titolo:"Novembre — La Trasformazione Necessaria",generale:"Lo Scorpione e il Cancro sono fratelli di acqua — e quando il Sole entra nello Scorpione, il Cancro sente un risveglio profondo. Novembre porta la trasformazione che ottobre aveva solo annunciato. Qualcosa muore questo mese — e deve farlo. Ciò che nasce al suo posto è incomparabilmente migliore.",amore:"Profondo e travolgente. Un legame raggiunge un livello di intimità che non avevi mai conosciuto — o si spezza definitivamente lasciando spazio a qualcosa di più vero. Non c'è via di mezzo per il Cancro a novembre. Il cuore sa già cosa scegliere.",lavoro:"Trasformazioni professionali radicali. Una porta si chiude in modo brusco — e tre si aprono appena oltre. Il coraggio di novembre è il tuo investimento per il 2025.",salute:"Energia trasformativa alta ma bruciante. Il sistema ormonale e immunitario lavorano intensamente. Supporta il corpo con riposo, caldo, cibi nutrienti. Novembre non è un mese da affrontare a digiuno.",fortuna:"🦂 Fortuna karmicamente potente. Chiudi conti aperti, perdona dove puoi, lascia andare il resto. Quello che rimane è oro."},
    12:{titolo:"Dicembre — Il Porto Sicuro",generale:"Il ciclo si chiude. Dicembre porta il Cancro a casa — non solo fisicamente, ma emotivamente. Dopo un anno di maree, tempeste e rinascite, dicembre offre il dono più prezioso: la pace del cuore. Non è assenza di problemi — è la capacità ritrovata di starci dentro senza annegare.",amore:"Calore autentico e festivo. La casa del Cancro in dicembre è il luogo più accogliente dello zodiaco. Chi entra dentro le tue mura sente qualcosa di raro: di essere davvero visto e accolto. Questo è il tuo dono più grande — usalo.",lavoro:"Bilancio positivo per chi ha lavorato con integrità. Un riconoscimento di fine anno — economico o simbolico — arriva quando meno te lo aspetti. Pianifica già da ora le mosse di gennaio.",salute:"Buona. Attenzione agli eccessi festivi che il Cancro usa come anestesia emotiva. La gioia vera non si trova nel cibo compulsivo — si trova nella connessione con le persone giuste.",fortuna:"🏠 La fortuna si concentra nella casa, nella famiglia, nelle radici. Investi in ciò che nutre davvero."}
  },

  leone:{
    1:{titolo:"Gennaio — Il Re Deposto",generale:"Il Leone in gennaio è come un sole d'inverno: c'è, brilla, ma senza calore. Il cielo di Saturno ti mette sotto pressione con la sua austerità glaciale. Dopo i festeggiamenti di dicembre, la realtà di gennaio arriva come un secchio d'acqua fredda. Il tuo ego — il più vulnerabile dello zodiaco quando è ferito — incassa colpi duri.",amore:"Una critica del partner tocca un nervo scoperto. Hai bisogno di ammirazione come di aria — e questo mese ne ricevi poca. Non reagire con il silenzio punitivo che è la tua arma preferita: quella mossa ha già distrutto troppe cose preziose in passato.",lavoro:"⚠️ Umiliazione professionale possibile. Un progetto su cui avevi scommesso la tua reputazione riceve un no o un'accoglienza fredda. Non è la fine — è una correzione necessaria. La lezione di gennaio vale oro se riesci a non difenderti.",salute:"Sistema cardiovascolare da monitorare — il Leone sotto stress accumula tensione al cuore in senso sia fisico che emotivo. Muoviti ogni giorno. Il corpo del Leone fermo diventa una prigione.",fortuna:"❄️ Mese di umiltà forzata. La fortuna non ti sorride in gennaio — ti insegna. Differenza fondamentale."},
    2:{titolo:"Febbraio — Il Fuoco Sotto la Cenere",generale:"Qualcosa si risveglia. Non ancora il ruggito pieno — ma il fuoco sotto la cenere di gennaio comincia a pulsare. Venere e Mercurio creano un momento di grazia comunicativa che il Leone sa sfruttare meglio di chiunque. La tua naturale magnetismo torna online.",amore:"Mese di seduzione sottile. Non il Leone da palcoscenico — il Leone intimo, quello che pochi conoscono. Una conversazione notturna svela qualcosa di te che sorprende persino te stesso. Il partner vede un lato nuovo e si avvicina con curiosità.",lavoro:"Recupero. Le idee che a gennaio sembravano spente ritrovano luce. Una persona influente ti rivaluta. Non spingere troppo forte ancora — lascia che le cose si muovano da sole. Il tuo momento è vicino ma non è ancora questo.",salute:"Graduale miglioramento. Petto e schiena — le zone del Leone — tornano a distendersi. Introduci una routine mattutina anche breve: il Leone che inizia bene la giornata domina il resto.",fortuna:"🕯️ Piccoli segnali di ripresa. La fortuna torna a riconoscerti — timidamente, ma torna."},
    3:{titolo:"Marzo — Il Ritorno della Fiamma",generale:"Eccolo. Il Leone che era sopito a gennaio e febbraio esplode in marzo con tutta la sua forza solare. Marte in posizione di fuoco attiva il tuo istinto da leader in modo quasi spaventoso per chi ti sta intorno. Sei irresistibile, carismatico, convinto. E hai ragione ad esserlo.",amore:"🌟 Straordinario. Marzo è il mese in cui il Leone innamora, seduce, conquista. La tua energia fisica e la tua presenza scenica sono al massimo assoluto. Chi ti incrocia in marzo non si dimentica facilmente. Per chi è in coppia: un picco di passione che riscrive la storia recente.",lavoro:"Trionfo. Tutto ciò che avevi pianificato da gennaio trova il suo momento. Una presentazione, un lancio, una proposta — qualunque cosa tu faccia adesso ha il crisma del successo. La tua ora è arrivata.",salute:"Energia vulcanica. Il corpo del Leone a marzo è una macchina da guerra. Approfitta per installare abitudini sportive che reggano per tutto l'anno.",fortuna:"🔥 Mese d'oro. Tutto ciò che tocchi con passione autentica si trasforma. Agisci senza rimandare."},
    4:{titolo:"Aprile — La Prova del Carattere",generale:"Il trionfo di marzo lascia il posto alla prova di aprile. Saturno in quadratura testa la solidità di ciò che hai costruito. Non tutto regge — e la cosa giusta da fare è accettarlo senza trasformare la revisione in dramma. Il Leone che supera aprile senza perdere la dignità emerge più forte.",amore:"Tensioni nate dall'eccesso di ego di marzo. Hai brillato tanto — forse troppo, senza lasciare spazio all'altro. Aprile chiede al Leone qualcosa di eroico: fare un passo indietro consapevole. Non perdi potere cedendo terreno — lo guadagni.",lavoro:"Complicazioni burocratiche o resistenze inattese rallentano i piani. Un collaboratore su cui contavi si rivela meno affidabile del previsto. Non è catastrofe — è filtro. Chi regge aprile merita il tuo investimento.",salute:"Attenzione alla schiena lombare — il Leone sotto pressione di Saturno accumula tensione proprio lì. Stretching, camminate, niente sedute prolungate.",fortuna:"⚖️ Fortuna nella pazienza. Chi non si precipita in aprile raccoglie a maggio."},
    5:{titolo:"Maggio — Il Crollo Finanziario",generale:"⚠️ Mese di avvertimento serio. Il Toro governa le finanze e Urano al suo interno porta sconvolgimenti economici improvvisi. Il Leone — che spende con la generosità di un re — si trova improvvisamente a fare i conti con la realtà dei numeri. Un colpo finanziario inaspettato cambia i piani.",amore:"Paradossalmente stabile in amore nonostante il caos finanziario. Il partner che rimane accanto a te questo mese lo fa per ragioni autentiche — non per la tua abbondanza. È una rivelazione dolorosa e preziosa allo stesso tempo.",lavoro:"Il problema finanziario nasce da una decisione professionale affrettata. Rivedi i contratti, taglia le spese superflue, non fare nuovi debiti. Questo mese insegna al Leone l'arte della gestione — materia che tendeva a ignorare.",salute:"Stress finanziario si traduce in disturbi fisici concreti: insonnia, tensione alla mandibola, tachicardia. Il corpo del Leone porta i problemi irrisolti nel petto. Affronta la situazione invece di evitarla.",fortuna:"🚨 Mese di allerta economica. Non firmare nulla di importante. Non prestare denaro. Non fare scommesse di nessun tipo."},
    6:{titolo:"Giugno — Il Respiro Prima del Trionfo",generale:"Dopo maggio, giugno porta una quiete necessaria. Non è entusiasmante — ma è il respiro prima del salto. Il Leone impaziente vuole già il prossimo picco, ma il cosmo gli chiede di aspettare ancora qualche settimana. Usa questo tempo per riorganizzare, riposare, prepararti.",amore:"Romanticismo discreto e autentico. Non i grandi gesti da palcoscenico che il Leone adora — la qualità del tempo condiviso. Una serata semplice vale più di mille cene stellate se sei davvero presente.",lavoro:"Pianificazione per luglio e agosto. Il lavoro di fondamenta che fai ora non si vede — ma si sente eccome quando arriva il momento. Costruisci alleanze strategiche con calma.",salute:"Discreta ma non eccezionale. Il calore estivo porta benefici alla tua natura solare — esci, prenditi il sole (con protezione), lascia che la luce ti ricostituisca.",fortuna:"🌤️ Mese di preparazione. La fortuna sorride a chi si prepara prima che l'opportunità bussa."},
    7:{titolo:"Luglio — Il Dominio Lunare",generale:"Il Cancro governa luglio e la sua energia lunare crea in te uno strano effetto: sei attratto verso l'interno mentre tutta la tua natura ti spinge verso il fuori. Questo conflitto produce qualcosa di raro nel Leone — profondità emotiva autentica. Non è scomodo: è una scoperta.",amore:"Mese di intimità insolita per il Leone. Lasci cadere le maschere e mostri la tua vulnerabilità — forse per la prima volta da molto tempo. La persona accanto a te vede qualcosa che non aveva mai visto. È spaventoso. È bellissimo.",lavoro:"Lavoro sottotraccia con risultati che si vedranno ad agosto. Luglio per il Leone è il mese delle fondamenta — non del palcoscenico. Accettalo senza drammi.",salute:"Energia più bassa del solito. Il Leone che rallenta in luglio non è malato — si sta preparando. Sonno abbondante, alimentazione ricca, meno alcol.",fortuna:"🌙 La fortuna è nel silenzio e nell'ascolto. Non in agosto ma grazie a ciò che scopri su te stesso ora."},
    8:{titolo:"Agosto — IL TUO MESE",generale:"🌟🌟🌟 Il Sole entra in Leone e il cosmo intero si inchina. Agosto è la tua celebrazione cosmica — il mese in cui sei più te stesso di qualsiasi altro periodo dell'anno. La tua luce non è arroganza: è il dono che fai al mondo quando sei pieno. Irradia senza scuse.",amore:"Leggendario. Il Leone innamorato ad agosto è lo spettacolo più bello dello zodiaco. Passione, generosità, grandiosità — tutto al massimo assoluto. Il partner si sente il centro dell'universo. Per i single: agosto porta l'incontro che racconta agli amici per anni.",lavoro:"Trionfo assoluto. Tutto ciò che tocchi in agosto porta il tuo marchio di fuoco. Un riconoscimento importante, un'opportunità che sembrava impossibile, una promozione o un contratto da sogno. Il cielo è letteralmente il limite.",salute:"Eccezionale. L'energia solare diretta ti ricarica come nient'altro sa fare. Sei al massimo fisico, mentale, emotivo. Approfitta per fare quella cosa che rimandavi.",fortuna:"☀️☀️☀️ Il mese più fortunato dell'anno. Il cosmo vuole che tu vinca — corrispondi con la tua migliore versione."},
    9:{titolo:"Settembre — Il Giorno Dopo la Festa",generale:"Dopo il trionfo di agosto, settembre porta l'inevitabile: il ritorno alla normalità. Il Leone lo vive come una caduta verticale anche quando è solo un passo indietro. La Vergine critica e analitica nel cielo graffia il tuo orgoglio in mille piccoli modi quotidiani. Nessuno ti celebra più come ad agosto — e lo senti.",amore:"Una critica del partner arriva proprio quando sei più fragile post-agosto. Non è un attacco — è una verità che aveva aspettato il momento giusto. Ascoltala senza ruggire. Il Leone che sa ricevere il feedback cresce enormemente.",lavoro:"Burocrazia, dettagli, correzioni. Tutto ciò che il Leone detesta. La Vergine di settembre smonta i castelli di agosto pezzo per pezzo per ricostruirli meglio. Collabora invece di resistere.",salute:"Calo di energia post-estivo più marcato del solito. Il corpo dopo il picco di agosto ha bisogno di integrazione. Vitamine, sonno regolare, meno adrenalina.",fortuna:"📉 Mese di ridimensionamento necessario. La fortuna non scompare — cambia forma. Cercala nei dettagli, non nei grandi gesti."},
    10:{titolo:"Ottobre — La Nebbia dell'Autunno",generale:"Ottobre è astrattamente il mese meno adatto al Leone: meno luce, temperature in calo, le energie che si retraggono. La Bilancia porta un'armonia che non è la tua — troppo diplomatica, troppo mediata. Ti senti fuori posto nel tuo stesso anno.",amore:"Un periodo di ambiguità romantica. Qualcosa tra te e il partner è rimasto in sospeso da settembre — e ottobre non porta naturalmente la chiarezza. Hai bisogno di fare quella conversazione che stai evitando da settimane.",lavoro:"Mediocre. Nessuna catastrofe ma nessun trionfo. Collaborazioni che richiedono compromessi che il Leone fa a fatica. Un progetto avanza a rilento per motivi che non dipendono da te.",salute:"Vitalità nella media. Attenzione alla schiena — il Leone che perde l'entusiasmo porta tutto il peso sulla colonna vertebrale. Postura e movimento come medicine.",fortuna:"🍂 Mese ordinario. La fortuna non ti cerca — devi cercarla tu. E questa volta è nei piccoli sì quotidiani."},
    11:{titolo:"Novembre — Il Fuoco nell'Oscurità",generale:"Lo Scorpione porta oscurità — e il Leone, che è luce pura, si ritrova in un territorio scomodo. Ma novembre nasconde un dono paradossale: quando la tua luce brilla nel buio, brilla dieci volte più forte. La tua presenza in novembre vale il doppio di qualsiasi altro mese.",amore:"Intensità emotiva che il Leone non è abituato a gestire. Lo Scorpione porta alla luce ciò che era nascosto in una relazione. Non è piacevole — ma è necessario. Il legame che sopravvive a questo mese è forgiato nella verità.",lavoro:"Trasformazioni radicali. Una struttura che sembrava stabile si rivela precaria. Il Leone che abbraccia il cambiamento invece di resistere si trova in una posizione di vantaggio straordinario a dicembre.",salute:"Sistema circolatorio e cardiovascolare particolarmente sensibile. Novembre chiede al Leone di rallentare. Non farlo è una scelta rischiosa.",fortuna:"🦂 Fortuna nelle trasformazioni coraggiose. Chi non ha paura del buio vince questo mese."},
    12:{titolo:"Dicembre — Il Re Torna a Casa",generale:"Il ciclo si chiude con il Leone nella sua posizione più umana: in mezzo alla gente che ama, celebrato non per ciò che ha fatto ma per ciò che è. Dicembre è il mese in cui il Leone scopre che la vera regalità non ha bisogno di pubblico.",amore:"Calore e magnificenza. La casa del Leone in dicembre è il luogo dove tutti vogliono stare. La tua generosità naturale si esprime nel modo più puro. Un gesto grandioso verso chi ami lascia un'impronta indelebile.",lavoro:"Bilancio trionfale per chi ha attraversato l'anno con dignità. Un riconoscimento importante arriva nelle ultime settimane. Pianifica il 2025 con la visione che solo il Leone sa avere.",salute:"Eccellente vitalità natalizia. Attenzione agli eccessi — il Leone non ha freno quando è felice. Un bicchiere in meno è un regalo che fai al tuo cuore.",fortuna:"👑 Il re torna sul trono. Dicembre chiude l'anno con la dignità che ti appartiene."}
  },

  vergine:{
    1:{titolo:"Gennaio — La Macchina si Rimette in Moto",generale:"La Vergine in gennaio è nel suo elemento: liste da fare, obiettivi da impostare, abitudini da correggere. Mentre il resto dello zodiaco si trascina fuori dal letargo festivo, tu sei già operativa al 90%. Saturno ti sorride — hai lavorato bene e il cosmo lo sa.",amore:"Discreto ma solido. Non il romanticismo travolgente che altri segni cercano — la presenza quotidiana, la cura nei dettagli, il ricordarsi delle piccole cose. È questo il tuo linguaggio d'amore. Chi lo capisce è degno di te.",lavoro:"Eccellente. Gennaio è il tuo mese di pianificazione e nessuno pianifica meglio della Vergine. Un progetto importante prende forma nella prima settimana. Le basi che poni ora reggono per tutto l'anno.",salute:"Ottima. La Vergine che mangia bene, dorme regolare e si muove è quasi indistruttibile. Gennaio porta la motivazione per installare le abitudini che gli altri segni abbandonano entro il 20 del mese.",fortuna:"📋 La fortuna premia chi inizia l'anno con metodo. Il tuo approccio sistematico è il tuo vantaggio competitivo."},
    2:{titolo:"Febbraio — Il Corpo Manda il Conto",generale:"⚠️ Presagio di salute da non ignorare. La Vergine tende ad accumulare stress somatizzandolo in silenzio per mesi — e febbraio è il momento in cui il corpo presenta la fattura. Non è un crollo ma un avvertimento serio. Quello che ignori adesso torna moltiplicato in estate.",amore:"Distanza emotiva con il partner. Non è crisi — è stanchezza accumulata. La Vergine in modalità problem-solving dimentica di essere anche una persona che ha bisogno di calore. Il partner lo sente. Fermati e guardalo davvero.",lavoro:"Complicazioni burocratiche e rallentamenti frustranti. Un errore di qualcun altro ricade sulle tue spalle. La tua capacità di gestire i dettagli salva la situazione ma il costo personale è alto.",salute:"🚨 Zona intestino e sistema nervoso in allerta. Non ignorare i sintomi fisici — la Vergine che li ignora si trova in pronto soccorso a marzo. Medico, non web-diagnosi.",fortuna:"⚠️ Mese di avvertimento. La fortuna si nasconde dietro uno stress test. Supera il test e febbraio diventa una svolta."},
    3:{titolo:"Marzo — Il Disastro Relazionale",generale:"Marte entra in quadratura con il tuo segno e porta una tensione relazionale che non riesci a gestire con la tua solita precisione logica. Le persone non funzionano come spreadsheet. Questo mese lo impari nel modo peggiore: un conflitto che esplode in modo del tutto sproporzionato a causa di parole dette con troppa precisione e troppo poca gentilezza.",amore:"💥 Mese catastrofico per le relazioni. La tua tendenza alla critica — che tu chiami onestà — raggiunge un livello che l'altro non riesce più a reggere. Una lite furiosa porta alla luce qualcosa di irrisolto da mesi. Non è la fine ma è un punto di non ritorno: o si affronta davvero o si finge per anni.",lavoro:"Conflitti con colleghi causati da un tuo standard di perfezione che nessuno riesce a raggiungere. La tua frustrazione è comprensibile — ma la stai comunicando nel modo sbagliato. Un superiore ti fa notare che l'efficacia non basta: serve anche la relazione.",salute:"Nervosismo acuto, tic nervosi, disturbi del sonno. Il corpo della Vergine sotto conflitto relazionale si manifesta nell'intestino e nella pelle. Riduci le aspettative sugli altri — è medicina più potente di qualsiasi integratore.",fortuna:"💥 Mese di rottura necessaria. Le macerie di marzo sono il materiale con cui costruisci qualcosa di più onesto ad aprile."},
    4:{titolo:"Aprile — La Ricostruzione Metodica",generale:"Dopo il caos di marzo, la Vergine fa la cosa che sa fare meglio: analizza, capisce, corregge. Aprile è il mese della ricostruzione intelligente. Non stai rattoppando — stai riprogettando. E su questo nessuno ti batte.",amore:"La crisi di marzo ha ripulito l'aria. Una conversazione onesta — questa volta con meno perfezione e più umanità — riporta una qualità di contatto che non sentivi da mesi. Impari che la vulnerabilità non è un difetto da correggere.",lavoro:"Eccellente. La mente analitica della Vergine ad aprile è in stato di grazia. Un problema complesso che tutti hanno evitato viene smontato e risolto da te in modo che lascia tutti senza parole.",salute:"Graduale recupero. L'intestino si stabilizza quando si stabilizza la mente. Fermenti lattici, alimentazione regolare, meno caffè. Il corpo risponde velocemente quando lo ascolti.",fortuna:"🔧 La fortuna è nel metodo. Chi ripara con intelligenza ad aprile non rompe più a maggio."},
    5:{titolo:"Maggio — La Mediocrità che Brucia",generale:"Maggio è il mese più frustrante per la Vergine non perché vada male — ma perché non va abbastanza bene. Sei una perfezionista e la mediocrità ti corrode dall'interno. I risultati ci sono ma sotto le aspettative. Il cosmo ti chiede qualcosa di difficile: accettare il sufficiente senza sentirti fallita.",amore:"Piatto. Non problemi evidenti — solo una quotidianità che ha perso lo smalto. La Vergine che si annoia in amore comincia a cercare difetti da correggere. Attenzione: non tutti i problemi che vedi esistono fuori dalla tua testa.",lavoro:"Produttività nella media ma sotto il tuo standard personale. Un progetto che speravi concluso ha ancora tre settimane di ritardo. La frustrazione è reale — gestiscila senza scaricarla su chi lavora con te.",salute:"Sistema nervoso ancora sensibile. Maggio porta allergie primaverili più intense del solito per la Vergine. Attenzione anche agli occhi — ore eccessive davanti agli schermi.",fortuna:"😐 Mese grigio. Non perdere ma non vincere. A volte il cosmo ti chiede di stare fermo — accettalo."},
    6:{titolo:"Giugno — I Presagi si Addensano",generale:"Qualcosa nell'aria di giugno non quadra. La tua sensibilità analitica captano segnali che non sai ancora decodificare: una conversazione che si interrompe quando arrivi, un messaggio senza risposta, una dinamica che si è spostata senza annuncio. Non è paranoia — la Vergine vede ciò che gli altri si perdono. Presta attenzione.",amore:"⚠️ Un segreto nell'area relazionale. Non necessariamente un tradimento — ma qualcosa che non ti viene detto. La tua capacità di leggere tra le righe è al massimo in giugno. Ciò che scopri potrebbe cambiare le cose.",lavoro:"Instabilità professionale con origine esterna: ristrutturazioni, cambiamenti decisi sopra la tua testa, colleghi che parlano senza informarti. Posizionati strategicamente prima che qualcuno decida per te.",salute:"Fegato e sistema ormonale da supportare. Giugno porta stanchezza cronica che la Vergine maschera con più lavoro — meccanismo pericoloso. Riposo non è pigrizia.",fortuna:"🌩️ Presagi ambigui. Ciò che sembra stabilità potrebbe essere la quiete prima del temporale. Preparati senza allarmarti."},
    7:{titolo:"Luglio — Il Crollo Mentale",generale:"⚠️ Il mese più difficile dell'anno per la Vergine. Il calore estivo, che già non è il tuo ambiente naturale, si combina con un accumulo di stress mentale che raggiunge il punto di saturazione. La mente analitica che è il tuo dono diventa il tuo carnefice: pensieri ossessivi, rimuginio notturno, incapacità di staccare.",amore:"Il partner soffre della tua assenza emotiva — sei fisicamente presente ma mentalmente altrove. Luglio porta risentimenti che covavano da mesi. Una conversazione importante viene rinviata ancora una volta — e ogni rinvio costa.",lavoro:"Errori insoliti causati dall'esaurimento mentale. La Vergine stanca sbaglia — e si odia per questo, entrando in un circolo vizioso. Riconosci i segnali di burnout prima che diventino invalidanti.",salute:"🚨 Allerta esaurimento nervoso. Luglio è il mese in cui il corpo della Vergine si ferma se non lo fermi tu prima. Ferie vere, non ferie di lavoro. Senza telefono. Senza urgenze.",fortuna:"🖤 Il mese peggiore dell'anno. La fortuna non ti cerca — stai usando tutta la tua energia per sopravvivere. Tieniti in piedi. Agosto cambia tutto."},
    8:{titolo:"Agosto — L'Ombra del Leone",generale:"Il Leone domina il cielo e la Vergine si trova nell'ombra del segno più appariscente dello zodiaco. Per una persona che preferisce la sostanza allo spettacolo, questo è paradossalmente sollievo. Agosto ti permette di lavorare nell'invisibilità — e il lavoro invisibile della Vergine è sempre il migliore.",amore:"Recupero lento ma reale dopo luglio. Il partner vede il tuo sforzo di essere presente e lo apprezza. Non è ancora il meglio — ma la direzione è giusta. Un gesto concreto vale più di mille parole.",lavoro:"Produttività silenziosa ad alto rendimento. Mentre gli altri sono in vacanza, tu costruisci le fondamenta di settembre. Nessuno lo sa — ma a settembre tutti vedranno i risultati.",salute:"Graduale recupero da luglio. Il corpo si riprende più velocemente della mente — ascolta i segnali di entrambi. Mare o montagna: qualsiasi contatto con la natura è medicina.",fortuna:"🌿 La fortuna torna nell'invisibilità. Ciò che costruisci in silenzio ad agosto rende il doppio a settembre."},
    9:{titolo:"Settembre — IL TUO TRIONFO",generale:"🌟🌟🌟 Il Sole entra in Vergine e tutto si illumina della tua luce precisa, intelligente, reale. Settembre è il tuo mese di potere assoluto — quello in cui la tua capacità di analisi, organizzazione e cura dei dettagli viene riconosciuta come il superpotere che è sempre stata. Sei irraggiungibile questo mese.",amore:"Magnetismo insolito per un segno che non si pensa seduttivo. La tua competenza, la tua chiarezza, la tua presenza concreta sono irresistibili per chi sa davvero cosa vuole. Un incontro o un rinnovo di legame che porta qualcosa di autentico e duraturo.",lavoro:"Eccezionale. Tutto ciò che hai costruito in silenzio da agosto trova la sua luce. Un riconoscimento importante, un progetto che funziona esattamente come l'avevi pianificato, una promozione che era stata rimandata. Il mese in cui la perfezione viene finalmente premiata.",salute:"Al massimo dell'anno. La Vergine a settembre è una macchina perfetta: dorme, mangia, si muove con la precisione di chi sa esattamente di cosa ha bisogno.",fortuna:"⭐⭐⭐ Il mese d'oro della Vergine. Tutto ciò che fai con cura e intenzione porta risultati straordinari. Non sprecare questo momento."},
    10:{titolo:"Ottobre — Il Lento Tramonto",generale:"Dopo settembre, ottobre porta una graduale decelerazione. La Bilancia porta nel cielo un'energia relazionale che la Vergine fatica a gestire — troppo emotiva, troppo poco concreta. Senti la perdita di slancio come una sconfitta quando è semplicemente il cambio di stagione.",amore:"Il partner chiede più spazio emotivo di quanto tu sia abituata a dare. Una richiesta che ti sembra irrazionale ma che è del tutto legittima. Ottobre insegna alla Vergine che l'amore non si ottimizza: si abita.",lavoro:"Rallentamento fisiologico dopo il picco di settembre. Nuovi progetti in attesa di approvazione. Una collaborazione promettente ma ancora da valutare con attenzione — non tutto ciò che sembra efficiente è anche affidabile.",salute:"Discreta. Attenzione alla zona intestinale che reagisce al cambio stagionale. Cibi caldi, rituali serali, meno stimolazione serale.",fortuna:"🍂 Mese di transizione. Consolida ciò che hai vinto a settembre invece di cercare nuovi obiettivi."},
    11:{titolo:"Novembre — Il Fuoco che Purifica",generale:"Lo Scorpione porta una trasformazione che la Vergine subisce più che sceglie. Qualcosa che credevi risolto e archiviato torna a galla con una violenza inaspettata. Non è una ricaduta — è il cosmo che vuole che tu finisca davvero il lavoro invece di schematizzarlo.",amore:"Una verità difficile emerge in modo brusco. Qualcosa che il partner tratteneva da mesi esce in modo non diplomatico. La tua reazione determina il futuro di questa relazione — scegli tra la difesa automatica e l'ascolto reale.",lavoro:"Trasformazioni obbligate. Un sistema che avevi costruito con cura viene smontato da forze esterne. La rabbia è comprensibile. Ma la Vergine che si adatta è più potente della Vergine che resiste.",salute:"Sistema immunitario sotto pressione emotiva. Novembre chiede alla Vergine di smettere di controllare il corpo e iniziare ad ascoltarlo. C'è differenza.",fortuna:"🔥 Fortuna nella resa. Chi lascia andare il controllo in novembre trova libertà che non sapeva di desiderare."},
    12:{titolo:"Dicembre — La Pace dell'Artigiano",generale:"Il ciclo si chiude con la Vergine in pace — non la pace estatica del Sagittario, ma la pace profonda di chi ha lavorato bene. Guardi l'anno indietro con occhio critico — come sempre — ma questa volta riconosci anche cosa ha funzionato. E funzionava molto più di quanto ammetti.",amore:"Calore discreto e autentico. Il periodo festivo porta la Vergine nella sua modalità migliore: organizzare, curare, creare ambienti belli per chi ama. Questo è il tuo linguaggio d'amore più puro.",lavoro:"Bilancio solido. L'anno ha portato risultati concreti — non sempre visibili agli altri, ma reali. Pianifica gennaio con la precisione che ti è propria.",salute:"Buona. Attenzione alla tendenza natalizia a saltare le routine che ti hanno tenuto in equilibrio. Il corpo della Vergine ha bisogno di struttura anche nelle feste.",fortuna:"🌾 La fortuna premia chi ha lavorato con cura tutto l'anno. Il raccolto è proporzionale alla semina."}
  },

  bilancia:{
    1:{titolo:"Gennaio — Il Peso dell'Indecisione",generale:"La Bilancia entra nell'anno sospesa tra possibilità. Il problema? Le possibilità sono troppe e nessuna si impone con forza. Gennaio porta una paralisi decisionale che gli altri segni non capiscono — per loro sei semplicemente lenta. In realtà stai elaborando ogni variabile. Ma il tempo passa e le porte si chiudono.",amore:"Insoddisfazione silenziosa. Non è colpa del partner — è la tua incapacità di dire cosa vuoi davvero. Gennaio porta il momento della verità: o esprimi i tuoi bisogni o ti abitui all'insoddisfazione. Nessuna delle due è una buona opzione.",lavoro:"Stagnazione causata dalla tua stessa esitazione. Un'opportunità professionale concreta ti è stata presentata a dicembre — e stai ancora valutando. Attenzione: qualcun altro sta decidendo mentre tu pensi.",salute:"Schiena lombare tesa — zona che la Bilancia porta il peso delle decisioni rinviate. Muoviti. Il corpo in movimento aiuta la mente a scegliere.",fortuna:"⚖️ La fortuna non aspetta chi si ferma a soppesare troppo. Gennaio chiede una scelta, non la scelta perfetta."},
    2:{titolo:"Febbraio — Venere Torna a Casa",generale:"Il tuo pianeta guida Venere entra in posizione di forza e febbraio si trasforma. L'aria che respiravi a gennaio — pesante, stagnante — si muove. Sei di nuovo nel tuo elemento: bellezza, connessione, armonia. Non è magia — è il tuo momento di grazia naturale.",amore:"🌹 Straordinario. La Bilancia innamorata a febbraio è uno dei fenomeni più belli dello zodiaco. La tua capacità di creare bellezza nei momenti condivisi raggiunge il picco. Il giorno di San Valentino è fatto per te — non sprecarlo.",lavoro:"Opportunità attraverso le relazioni. Un contatto che coltivavi con pazienza sboccia in qualcosa di concreto. La tua capacità di costruire ponti tra persone diverse porta un risultato professionale che non avresti mai raggiunto da sola.",salute:"Ottima. Venere favorevole porta benessere fisico e luminosità. La pelle della Bilancia a febbraio brilla letteralmente — è il pianeta che lavora.",fortuna:"💜 Il mese dell'amore è il tuo mese di potere. Tutto ciò che coinvolge relazioni e bellezza porta risultati eccellenti."},
    3:{titolo:"Marzo — Il Vento della Primavera",generale:"Marzo porta un'energia espansiva che la Bilancia sa cavalcare meglio di quasi ogni altro segno. Sei un segno d'aria e il vento di primavera ti è familiare. Un'idea che sembrava impossibile a gennaio ora ha tutta l'energia necessaria per decollare.",amore:"Romanticismo vivace e leggero. La Bilancia in primavera è magnetica — la tua grazia naturale si amplifica con la luce crescente. Un incontro inaspettato o un salto di qualità in una relazione già esistente.",lavoro:"Eccellente per collaborazioni, negoziazioni, presentazioni. La tua capacità di trovare il punto di equilibrio tra posizioni opposte è il tuo asset professionale più prezioso — e questo mese viene visto e riconosciuto.",salute:"Energica e vivace. Approfitta per iniziare un'attività fisica che porti estetica e piacere insieme — danza, yoga, nuoto. Il corpo della Bilancia risponde meglio quando il movimento è anche bello.",fortuna:"🌸 Mese di grande apertura. Le porte che bussi a marzo si aprono. Bussa."},
    4:{titolo:"Aprile — La Crisi di Identità",generale:"⚠️ Aprile porta un terremoto interiore che nessuno vede dall'esterno. Saturno in quadratura pone la domanda più destabilizzante per la Bilancia: chi sei quando non stai piacendo a qualcuno? La tua identità è costruita su specchi — e aprile rompe alcuni di quegli specchi.",amore:"Una conversazione che mette in discussione le fondamenta. Non necessariamente la fine — ma la ristrutturazione inevitabile. La Bilancia scopre che l'armonia a cui mirava era in parte artificio. Costruire qualcosa di reale richiede prima di smontare l'ornamento.",lavoro:"Conflitto di valori. Ti viene chiesto di fare qualcosa che va contro il tuo senso di giustizia. La tua risposta a questo momento definisce chi sei professionalmente per i prossimi anni.",salute:"Squilibrio ormonale e stanchezza surrenale. Il corpo della Bilancia reagisce alla crisi identitaria con spossatezza profonda. Non è pigrizia — è il sistema che si riorganizza.",fortuna:"💔 Mese di rottura degli specchi. Doloroso — ma necessario per vedere finalmente il tuo volto vero."},
    5:{titolo:"Maggio — La Bellezza Come Rifugio",generale:"Dopo aprile, la Bilancia trova rifugio in ciò che sa fare meglio: creare bellezza. Maggio porta un periodo di grazia estetica e creativa che funziona come guarigione. Non stai evitando i problemi — stai ricostituendo le forze in modo elegante.",amore:"Dolcezza e cura reciproca. Il mese porta piccoli rituali condivisi che sanano ciò che aprile aveva incrinato. Una serata perfetta non risolve tutto — ma dimostra che ci sei, che vuoi esserci.",lavoro:"Creatività al top. Tutto ciò che richiede estetica, design, comunicazione persuasiva porta risultati eccellenti. Un progetto visivo o comunicativo ti mette sotto i riflettori in modo piacevole.",salute:"Buona. Il bello cura la Bilancia — letteralmente. Circondati di cose belle, suoni piacevoli, spazi ordinati. È terapia, non vanità.",fortuna:"🌺 Fortuna nel bello e nell'armonia. Investi in ciò che porta piacere — torna in dividendi energetici."},
    6:{titolo:"Giugno — Il Prezzo dell'Armonia",generale:"La Bilancia paga un prezzo alto per l'armonia che difende: la propria verità taciuta. Giugno porta alla luce il costo di anni di diplomazia. Qualcosa che hai inghiottito, accettato, sorriso sopra — torna come un nodo alla gola. Non puoi piacere a tutti per sempre.",amore:"⚠️ Tensione alta causata da bisogni non espressi. Il partner non è un lettore di menti — se non dici cosa vuoi, non può darti quello che vuoi. Giugno porta la conversazione scomoda che avresti dovuto fare a marzo.",lavoro:"Problemi con figure di autorità causati dal tuo stesso silenzio strategico. Hai accettato troppe cose senza negoziare — ora qualcuno ha preso le tue concessioni come standard fissi. Riprendi terreno con calma ma con chiarezza.",salute:"Sistema endocrino e reni — zone della Bilancia — sotto pressione emotiva. Idratazione, meno sale, meno conflitti ingeriti senza elaborazione.",fortuna:"⚡ Mese di regolamento di conti silenziosi. La fortuna premia chi smette di rinviare le verità difficili."},
    7:{titolo:"Luglio — L'Oscurità Dietro il Sorriso",generale:"Il Cancro porta emozioni che la Bilancia, abituata all'equilibrio mentale, fatica a gestire. Luglio è il mese in cui il tuo sorriso diplomatico si incrina sotto il peso di quello che senti davvero. Non è debolezza — è umanità. Ma la Bilancia che non ha imparato a vivere nelle emozioni soffre questo mese in modo sproporzionato.",amore:"Una malinconia senza causa precisa si insinua nella relazione. Il partner la vede ma non sa come aiutarti — e tu non sai come spiegarla. È il mese in cui la Bilancia deve imparare che non tutto ha spiegazione razionale.",lavoro:"Mese di bassa energia lavorativa. L'entusiasmo non c'è — e si vede. Non forzare: lavoro eseguito senza energia dalla Bilancia è lavoro eseguito male.",salute:"Psicologicamente difficile. Luglio porta quella forma di tristezza senza oggetto che la Bilancia conosce ma raramente ammette. Cerca supporto — da un amico, da un professionista, da qualcuno che sappia ascoltare.",fortuna:"🌑 Mese di luna oscura interiore. Non agire — osserva. La chiarezza arriva quando smetti di cercarla."},
    8:{titolo:"Agosto — Il Tepore Ritrovato",generale:"Dopo il buio di luglio, agosto porta luce — quella calda e generosa del Leone. Per la Bilancia, che ama la bellezza e il calore umano, agosto è un respiro di sollievo. Non il tuo mese di potere — ma un mese in cui ti senti di nuovo te stessa.",amore:"Leggerezza e gioia. Agosto porta la versione migliore della Bilancia in amore: spiritosa, presente, bella. Una vacanza condivisa o un'esperienza nuova riaccende la scintilla.",lavoro:"Discreta produttività. Il caldo invita alla socialità professionale — eventi, connessioni, collaborazioni informali che diventano concrete a settembre.",salute:"Buona. La luce estiva fa bene alla Bilancia — i suoi ritmi circadiani sono calibrati sul sole. Dormi di meno ma meglio. Esci ogni mattina prima del lavoro.",fortuna:"☀️ Fortuna nel piacere condiviso. Le relazioni coltivate ad agosto rendono molto in autunno."},
    9:{titolo:"Settembre — La Preparazione al Trono",generale:"Settembre è il mese della preparazione. Il tuo momento si avvicina — ottobre — e la Vergine analitica nel cielo ti aiuta a mettere ordine dove c'era caos. La Bilancia che arriva a ottobre preparata conquista — quella che arriva impreparata spreca il suo mese di potere.",amore:"Comunicazione chiara e costruttiva. Settembre porta conversazioni importanti che sistemano dinamiche rimaste in sospeso. Non è romanticismo — è la fondamenta su cui costruire il romanticismo di ottobre.",lavoro:"Pianificazione strategica ad alto rendimento. Le partnership che costruisci in settembre fioriscono in ottobre. Il tuo talento negoziale trova spazio in una trattativa complessa.",salute:"Molto buona. Il corpo della Bilancia risponde al ritmo autunnale con energia renovata. Un nuovo regime alimentare iniziato adesso porta benefici visibili entro dicembre.",fortuna:"🍂 La fortuna si prepara. Settembre è l'anticamera di ottobre — non sprecarla."},
    10:{titolo:"Ottobre — IL TUO REGNO",generale:"🌟🌟🌟 Il Sole entra in Bilancia e il mondo diventa il posto che hai sempre immaginato: armonioso, bello, giusto. Ottobre è il tuo mese cosmico — quello in cui la tua visione di come dovrebbero andare le cose si materializza con una precisione che lascia tutti a bocca aperta. Sei al culmine.",amore:"Magnifico oltre ogni aspettativa. La Bilancia innamorata a ottobre è la versione più completa di sé: elegante, passionale, profonda, divertente. Un legame raggiunge un livello di connessione raro. Per chi è single: l'incontro di ottobre ha tutto il potenziale per durare anni.",lavoro:"Trionfo nelle collaborazioni, nelle negoziazioni, in tutto ciò che richiede intelligenza relazionale. Un accordo importante si chiude a condizioni favorevoli. Il tuo talento per trovare soluzioni che soddisfano tutti porta un riconoscimento che aspettavi da tempo.",salute:"Al massimo assoluto. La Bilancia a ottobre è radiosa — fisicamente, mentalmente, spiritualmente. Ogni aspetto della salute risponde in modo ottimale.",fortuna:"⭐⭐⭐ Il tuo mese d'oro. Il cosmo ti mette al centro — rispondi con la tua piena presenza. Agisci, ama, scegli. Ottobre non si ripete."},
    11:{titolo:"Novembre — La Caduta Dalla Grazia",generale:"⚠️ Dopo ottobre, novembre porta una caduta che la Bilancia vive in modo sproporzionatamente doloroso. Lo Scorpione nel cielo porta oscurità e intensità emotiva che il tuo segno non ama e non sa gestire. Quello che a ottobre sembrava risolto mostra a novembre le sue crepe nascoste.",amore:"Crisi intensa causata da qualcosa che è emerso dall'ombra. Una gelosia, un vecchio fantasma, una verità nascosta — lo Scorpione porta tutto alla luce nel modo più brutale. Il legame che sopravvive a novembre è fatto di acciaio.",lavoro:"Scontri di potere che la Bilancia, abituata alla mediazione, trova estenuanti. Qualcuno in ufficio gioca sporco. La tua tendenza a voler mantenere l'armonia ti mette in svantaggio di fronte a chi non ha scrupoli.",salute:"Surreni e sistema ormonale sotto pressione. La Bilancia che ha brillato troppo a ottobre paga il conto a novembre con affaticamento surrenale. Riposo non negoziabile.",fortuna:"🦂 Mese di resa dei conti. Ciò che era costruito sull'apparenza crolla. Ciò che era reale regge. Scopri la differenza."},
    12:{titolo:"Dicembre — Il Dono dell'Equilibrio",generale:"Il ciclo si chiude con la Bilancia che ritrova il suo equilibrio — non quello artificiale di chi evita i conflitti, ma quello autentico di chi li ha attraversati e ha scelto dove stare. Dicembre porta una pace guadagnata che sa di dignità.",amore:"Calore autenticato. Il periodo festivo trova la Bilancia in pace con la propria relazione — imperfetta, reale, scelta. Non l'armonia da copertina che inseguivi — qualcosa di molto più prezioso.",lavoro:"Bilancio positivo. L'anno ha portato crescita relazionale e professionale. Le collaborazioni costruite con pazienza si consolidano. Pianifica il 2025 con la consapevolezza di chi sa negoziare.",salute:"Buona. Attenzione alla tendenza festiva a esagerare per senso estetico — la tavola bella non deve diventare un eccesso. Il corpo della Bilancia vuole piacere, non punizione.",fortuna:"⚖️ La fortuna dell'anno si bilancia. Ciò che hai dato torna — in forme che non ti aspettavi ma che riconosci come giuste."}
  },

  scorpione:{
    1:{titolo:"Gennaio — Il Potere si Accumula",generale:"Lo Scorpione in gennaio è come magma sotto la crosta: invisibile, silenzioso, incandescente. Mentre gli altri segni fanno buoni propositi che dimenticheranno entro febbraio, tu stai già eseguendo. Plutone ti benedice con una chiarezza spietata su cosa vuoi e cosa sei disposto a fare per ottenerlo.",amore:"Intensità magnetica che disorienta chi ti sta accanto. Il tuo silenzio di gennaio viene letto come distanza — in realtà è concentrazione. Un cenno, una parola, un gesto deliberato vale più di mille conversazioni vuote. Chi ti conosce lo sa. Chi non lo sa, impara.",lavoro:"Pianificazione strategica di livello superiore. Stai vedendo mosse che altri non vedono ancora. Non rivelare i tuoi piani — non ancora. La tua forza questo mese è nell'invisibilità.",salute:"Potente ma da proteggere nelle zone sensibili: sistema riproduttivo e sistema immunitario. Il freddo di gennaio non perdona chi si crede invincibile. Anche lo Scorpione ha i suoi punti deboli.",fortuna:"🦂 Il potere si accumula nell'ombra. Ciò che costruisci in silenzio a gennaio diventa l'arma di maggio."},
    2:{titolo:"Febbraio — L'Ossessione",generale:"⚠️ Febbraio porta una trappola sottile per lo Scorpione: l'ossessione. Venere attiva i tuoi desideri più profondi e la tua mente — già incline all'intensità — rischia di fissarsi su qualcosa o qualcuno in modo sproporzionato. La linea tra dedizione e ossessione è sottile. Questo mese la attraversi almeno una volta.",amore:"Pericolosamente intenso. Senti qualcosa in modo così totale che spaventa anche te. Se l'oggetto del tuo desiderio corrisponde, febbraio è indimenticabile. Se non corrisponde, il rischio di autodistruzione emotiva è reale. Scegli le battaglie con lucidità.",lavoro:"L'ossessione si riversa anche sul lavoro — potresti lavorare troppo su qualcosa che non merita così tanta energia. Un collega manipolatore cerca di usare la tua intensità a proprio vantaggio. Vedi oltre.",salute:"Sistema nervoso e surreni sotto pressione da eccesso di intensità. Il corpo dello Scorpione esaurito da ossessione si manifesta con insonnia profonda e tensione mandibolare. Lascia andare qualcosa.",fortuna:"🌑 Mese di avvertimento. La fortuna non premia l'ossessione — premia la presenza. Torna nel corpo."},
    3:{titolo:"Marzo — La Trasformazione Violenta",generale:"Qualcosa muore a marzo — e deve farlo. Plutone in azione diretta porta una trasformazione che lo Scorpione conosce nel profondo delle ossa: la fine come inizio, la distruzione come creazione. Non è metafora. Qualcosa di concreto nella tua vita si spezza in marzo — e lo spazio vuoto che lascia è esattamente della forma giusta per ciò che arriverà.",amore:"Una separazione, una rottura, un addio definitivo a qualcosa che non funzionava più. Fa male come fa male sempre — ma lo Scorpione sa che il dolore autentico porta trasformazione reale. Chi rimane dopo marzo è chi vale.",lavoro:"Cambiamento radicale e obbligato. Un ruolo finisce, una struttura si smonta, un'alleanza si dissolve. Non è il crollo — è la rinascita che si prepara. La fenice non si trasforma senza bruciare.",salute:"Il corpo partecipa alla trasformazione — possibili sintomi fisici che accompagnano il processo emotivo. Non sopprimerli con farmaci. Lasciali parlare e poi lascia andare.",fortuna:"🔥 Mese di morte e rinascita cosmica. Chi attraversa il fuoco di marzo emerge con poteri che non sapeva di avere."},
    4:{titolo:"Aprile — Il Tradimento",generale:"⚠️ Presagio oscuro. Qualcuno di cui ti fidavi — una persona nel tuo cerchio più interno — non è chi pensavi. Aprile porta una rivelazione che lo Scorpione vive come conferma di una diffidenza mai del tutto sopita. La domanda non è se ti tradiscono — è come rispondi quando succede.",amore:"Un segreto emerso cambia le coordinate. Non necessariamente un tradimento romantico — ma qualcosa di nascosto che ridisegna il perimetro di fiducia. La tua reazione rivela il tuo livello di evoluzione: vendetta o trasformazione. Scegli.",lavoro:"Un alleato professionale gioca a doppio gioco. I segnali c'erano da gennaio — li hai ignorati perché non volevi vederli. Aprile li rende impossibili da ignorare. Agisci con precisione chirurgica, non con rabbia cieca.",salute:"Zona solare tesa — il corpo dello Scorpione tradito si contrae. Attenzione all'ipertensione da rabbia repressa. Scarica l'energia in modo fisico: corsa, sport di contatto, qualsiasi cosa che muova il corpo.",fortuna:"🗡️ La fortuna premia la risposta intelligente al tradimento — non quella emotiva. Chi mantiene il controllo vince."},
    5:{titolo:"Maggio — La Ricostruzione Oscura",generale:"Dopo aprile, lo Scorpione non piange — costruisce. Maggio è il mese in cui la tua capacità di sopravvivere all'impossibile diventa la tua risorsa più potente. Ciò che ti ha distrutto ti ha anche rivelato dove eri vulnerabile. Non ripeti l'errore.",amore:"Lento ma reale. Chi è rimasto dopo aprile merita fiducia — costruiscila mattone per mattone, senza fretta. Lo Scorpione che ama dopo una ferita lo fa con una profondità che pochi segni conoscono.",lavoro:"Ripresa strategica. Le alleanze si riconfigurano. Nuove figure entrano nel tuo perimetro professionale — valutale con il tempo che meritano, non con la diffidenza residua di aprile.",salute:"Recupero graduale. Il sistema immunitario dello Scorpione è resiliente ma non infinito. Supportalo con cibi ricchi, sonno profondo, meno tossine.",fortuna:"⚗️ Fortuna nell'alchimia. Chi trasforma il veleno in medicina a maggio diventa indistruttibile."},
    6:{titolo:"Giugno — Le Rivelazioni",generale:"Giugno porta informazioni. Lo Scorpione — il più intuitivo dello zodiaco — riceve segnali da più direzioni simultaneamente. Alcune rivelazioni sono attese, altre spiazzanti. La tua capacità di tenere la complessità senza franare è messa alla prova.",amore:"Qualcosa che non sapevi su una persona cara emerge a giugno. Non è sempre negativo — a volte la rivelazione è quanto qualcuno ti ami davvero. Apri gli occhi per vedere entrambe le possibilità.",lavoro:"Informazioni riservate che cambiano lo scenario professionale. Sei nella posizione privilegiata di chi sa — usa questo vantaggio con saggezza, non con vendetta.",salute:"Fieno e sistema linfatico da supportare. Giugno porta per lo Scorpione una sorta di claustrofobia energetica: hai bisogno di spazio vero. Mare, natura, silenzio lontano dalle città.",fortuna:"🔮 La fortuna è nell'informazione che altri non hanno. Usala con intelligenza, non con crudeltà."},
    7:{titolo:"Luglio — Il Potere dell'Ombra Estiva",generale:"Il caldo estivo porta gli altri segni verso l'esterno — e lo Scorpione verso le profondità. Luglio è il mese in cui la tua intensità, che d'estate sembra fuori luogo, diventa in realtà una risorsa straordinaria. Mentre gli altri si disperdono nelle vacanze, tu consolidi.",amore:"Intensità piena. Un'estate diversa da tutte le altre — un legame che raggiunge profondità che il caldo normalmente non porta. La passione dello Scorpione a luglio è un fenomeno naturale come un temporale estivo: inevitabile, potente, purificante.",lavoro:"Produttività silenziosa ad alto rendimento. Luglio è il mese in cui lavori con meno distrazioni e più concentrazione. Un progetto strategico avanza silenziosamente verso il suo obiettivo.",salute:"Eccellente fisicamente. Il calore fa bene al sistema circolatorio dello Scorpione. Nuota, muoviti, lascia che il corpo si prenda la sua parte di estate.",fortuna:"🌊 La fortuna è nelle acque profonde. Chi si avventura oltre la superficie vince."},
    8:{titolo:"Agosto — La Frustrazione del Leone",generale:"Il Leone domina agosto con la sua luce abbagliante — e lo Scorpione, creatura di ombra e profondità, sente l'insofferenza di chi è costretto a stare sotto una luce che non gli appartiene. Agosto porta frustrazione sociale: sorrisi che costano, conversazioni superficiali che esauriscono.",amore:"Il contrasto tra la tua intensità e la leggerezza estiva crea tensioni. Il partner vuole divertimento — tu vuoi connessione vera. Non è incompatibilità: è un momento di negoziazione su cosa siete l'uno per l'altro.",lavoro:"Lento e dispersivo. Il contesto estivo non è il tuo elemento. Limita le riunioni, difendi il tuo tempo, lavora in profondità su una cosa sola piuttosto che a metà su molte.",salute:"Surreni affaticati dall'eccesso di stimoli sociali. Lo Scorpione esausto da agosto ha bisogno di solitudine reale — non isolamento, ma spazio di recupero autentico.",fortuna:"😤 Mese di sopravvivenza. Non perdere — ma non guadagnare. Tieni la posizione e aspetta settembre."},
    9:{titolo:"Settembre — La Strategia si Affina",generale:"Settembre porta la chiarezza che agosto aveva nebbiato. La Vergine analitica nel cielo crea una sinergia potente con la tua intelligenza strategica. Vedi tutto — le mosse degli altri, le tue vulnerabilità, le opportunità camuffate da ostacoli. Sei in modalità scacchi.",amore:"Comunicazione precisa e costruttiva. Settembre porta la conversazione importante che rimandavi da mesi. Non emotiva — lucida. E la lucidità, per lo Scorpione, è la forma di amore più autentica.",lavoro:"Eccellente per la pianificazione tattica. Un piano complesso si affina nei dettagli. Una mossa professionale importante viene eseguita con la precisione di un orologio svizzero.",salute:"Ottima. Il corpo dello Scorpione risponde bene al cambio stagionale — l'autunno è il suo elemento naturale. Energia in aumento progressivo verso novembre.",fortuna:"♟️ La fortuna premia la strategia. Chi ha pianificato bene a settembre vince a novembre."},
    10:{titolo:"Ottobre — Il Velo si Assottiglia",generale:"Ottobre è il mese sacro allo Scorpione — il momento in cui il confine tra i mondi si assottiglia e la tua sensibilità psichica raggiunge il picco. Senti cose che altri non percepiscono. Hai visioni, intuizioni, sogni carichi di significato. Non ignorarli.",amore:"Profondità emotiva straordinaria. Un legame tocca un livello di intimità psichica rara — la sensazione di conoscersi da sempre, di capirsi senza parole. Per chi è solo: un incontro a ottobre porta con sé qualcosa di karmico. Presta attenzione.",lavoro:"Intuizioni professionali al massimo. Senti dove sta andando il mercato, il team, il progetto prima che i dati lo confermino. Fidati di questo senso — ha sempre ragione.",salute:"Sistema nervoso e ghiandole endocrine particolarmente sensibili. Ottobre per lo Scorpione è sacro — trattalo con rispetto. Rituali, silenzio, sonno abbondante.",fortuna:"🌙 Il velo è sottile. La fortuna arriva da mondi che non vedi ma senti. Ascolta i segnali."},
    11:{titolo:"Novembre — IL TUO POTERE ASSOLUTO",generale:"🌟🌟🌟 Il Sole entra in Scorpione e il cosmo consegna nelle tue mani il potere che hai guadagnato attraverso ogni trasformazione, ogni ferita, ogni morte e rinascita dell'anno. Novembre è il tuo mese di dominio — non sulla vita degli altri, ma sulla tua. Sei al culmine di ciò che puoi essere.",amore:"Travolgente e totale. L'amore dello Scorpione a novembre è come guardare nell'abisso — infinito, spaventoso, magnifico. Un legame raggiunge una fusione emotiva che altri segni non conoscono nemmeno come concetto. Per i single: chi incontra uno Scorpione a novembre non se ne dimentica mai.",lavoro:"Potere trasformativo. Hai la capacità di cambiare le cose in profondità — non di modificarle in superficie. Un progetto, un team, una situazione che sembrava immobile si trasforma sotto la tua guida. È magia — ma è magia che lavora.",salute:"Al massimo dell'anno. L'energia plutonica di novembre è il carburante più potente che lo Scorpione conosca. Invincibile, resiliente, rigenerato.",fortuna:"💀🌹 Il mese del tuo potere cosmico. Agisci con la consapevolezza di chi sa che il tempo è dalla sua parte. Novembre è tuo."},
    12:{titolo:"Dicembre — La Quiete del Predatore",generale:"Dopo il trionfo di novembre, dicembre porta allo Scorpione la quiete del predatore sazio. Hai conquistato ciò che volevi — ora riposi. Non pigrizia: reintegrazione. Il ciclo si chiude e tu lo fai con la consapevolezza di chi ha attraversato fuoco, acqua e ombra e ne è uscito più potente.",amore:"Calore profondo e silenzioso. Le feste trovano lo Scorpione in una rara modalità aperta: generoso, presente, capace di gioia senza secondi fini. Chi ti ama capisce quanto sia prezioso questo momento.",lavoro:"Bilancio di potere. L'anno ha portato trasformazioni radicali — alcune dolorose, tutte necessarie. Pianifica il prossimo anno con la visione di chi ha imparato a vedere nell'oscurità.",salute:"Buona. Attenzione a non trascinare nel nuovo anno vecchi veleni non elaborati. Dicembre è il mese della purificazione finale.",fortuna:"🦂 La fortuna dell'anno si distilla in saggezza. Non oro — conoscenza. E la conoscenza dello Scorpione vale più dell'oro."}
  },

  sagittario:{
    1:{titolo:"Gennaio — L'Entusiasmo Pericoloso",generale:"Il Sagittario entra nell'anno come un cavallo che ha rotto il recinto: pieno di energia, privo di direzione, pericolosamente ottimista. Giove amplifica ogni impulso e il rischio di gennaio è fare promesse che non puoi mantenere, lanciare progetti senza basi, bruciare ponti per la smania di muoverti.",amore:"Dichiarazioni eccessive che spaventano. La tua intensità entusiastica viene letta come pressione dall'altro. Rallenta. Non ogni connessione deve diventare immediatamente un'epopea.",lavoro:"⚠️ Attenzione agli impegni presi d'impulso. Un accordo firmato a gennaio senza leggere i dettagli porta complicazioni a giugno. Il Sagittario che rallenta a leggere i contratti è il Sagittario che non piange a luglio.",salute:"Energia altissima ma mal distribuita. Il corpo ti porta a fare troppo troppo in fretta — infortuni da eccesso di entusiasmo fisico sono il rischio del mese. Riscaldati prima di correre.",fortuna:"⚡ Fortuna presente ma instabile. Il tuo ottimismo attrae opportunità — il tuo eccesso le brucia. Dosa."},
    2:{titolo:"Febbraio — Il Confinamento Insopportabile",generale:"Febbraio è il mese che il Sagittario odia di più: freddo, corto, grigio, senza l'energia di gennaio né la speranza di marzo. Il tuo spirito libero si sente in gabbia. Quella gabbia è reale — ma è anche temporanea. Usare questo mese per riflettere invece di scappare è l'unica mossa intelligente.",amore:"Irrequietezza che il partner percepisce come distacco. Non sei davvero distante — sei solo intrappolato nel tuo bisogno di movimento. Spiega questo invece di sparire. La fuga è il tuo meccanismo di difesa preferito — e il più distruttivo.",lavoro:"Stagnazione professionale che ti corrode. Niente sembra muoversi. Niente sembra abbastanza grande. Il problema non è il lavoro — sei tu che hai bisogno di un orizzonte più ampio. Inizia a costruirlo invece di aspettarlo.",salute:"Sistema nervoso irrequieto. Il Sagittario bloccato fisicamente si ammala più spesso — il corpo esprime il bisogno di libertà con sintomi concreti. Muoviti ogni giorno, anche solo camminando.",fortuna:"🧊 Mese di gelo. Non cercare grandi colpi — concentrati sul non perdere ciò che hai."},
    3:{titolo:"Marzo — Il Fuoco Torna",generale:"Eccolo. La primavera sblocca l'energia del Sagittario come aprire una diga. Marzo porta un'esplosione di vitalità, idee, possibilità — tutto ciò che febbraio aveva compresso esplode verso l'esterno con una forza che travolge anche chi ti vuole bene. Non essere caotico: sii direzionale.",amore:"Magnetismo travolgente. La tua energia di marzo è irresistibile — sei entusiasta, generoso, avventuroso. Proponi qualcosa di nuovo al partner. Un viaggio, un'esperienza, una conversazione su un futuro diverso. Il Sagittario che invita al movimento è il Sagittario che seduce.",lavoro:"Lancio di idee brillanti con timing perfetto. Un progetto che covavi da febbraio trova finalmente il suo momento. La tua visione a lungo termine impressiona chi aveva dubitato di te.",salute:"Esplosione di vitalità. Approfitta per iniziare un'attività all'aperto che diventi abitudine — il Sagittario che si muove nella natura è il Sagittario più felice e più sano.",fortuna:"🏹 La freccia scoccata a marzo colpisce il bersaglio ad agosto. Mira bene."},
    4:{titolo:"Aprile — Il Prezzo dell'Ottimismo Cieco",generale:"⚠️ La catastrofe di aprile ha un nome: troppa fiducia. Il Sagittario crede nel meglio degli altri, nell'abbondanza dell'universo, nel lieto fine garantito — e a volte ha ragione. Ma aprile porta la volta in cui ha torto. Una scommessa sbagliata, una fiducia mal riposta, una decisione presa con il cuore invece che con la testa.",amore:"Una scelta sentimentale fatta d'impulso a gennaio o febbraio mostra le sue conseguenze ad aprile. Non è la fine del mondo — ma fa male quanto ne hai il potere. Il Sagittario ferito diventa filosofo o fuggitivo: scegli il filosofo.",lavoro:"Una decisione professionale affrettata porta conseguenze concrete e costose. Il contratto di gennaio si rivela problematico. Non cercare colpevoli fuori — la lezione è interna.",salute:"Fegato da proteggere — la zona più sensibile del Sagittario, sede del suo pianeta Giove. Aprile porta eccessi che il fegato paga. Meno alcol, meno grassi, più acqua.",fortuna:"💸 Mese di pagamento del conto karmico. Chi ha esagerato a gennaio paga ad aprile. Chi ha dosato, esce indenne."},
    5:{titolo:"Maggio — La Ripresa dell'Avventuriero",generale:"Il Sagittario non rimane mai a lungo nel pantano. Maggio porta la ripresa con la velocità tipica del tuo segno: niente lunghi lutti, niente rimuginii infiniti — si impara, si sistema e si va avanti. Questa non è superficialità: è una delle tue qualità più preziose.",amore:"Recupero leggero e genuino. Il Sagittario che ha sbagliato sa fare una cosa che pochi segni riescono: chiedere scusa in modo diretto e ricominciare senza portarsi il peso del passato. Il partner lo apprezza.",lavoro:"Rimbalzo professionale. Nuove idee nascono dalle ceneri di aprile — spesso migliori delle originali perché temerate dall'esperienza. Un incontro importante apre un percorso inedito.",salute:"Buona. Il corpo riprende vigore con il caldo. Attenzione alle anche e alle cosce — zone del Sagittario sotto stress prolungato.",fortuna:"🌱 La fortuna dell'avventuriero: non la stabilità ma la capacità di trovare opportunità ovunque."},
    6:{titolo:"Giugno — L'Irrequietezza Pericolosa",generale:"Il caldo estivo alle porte porta nel Sagittario una forma di febbre vagabonda quasi patologica. Tutto ciò che hai — il lavoro, la relazione, la casa, la routine — sembra improvvisamente troppo piccolo. Questa sensazione è reale ma non è un segnale di cambiamento: è la tua paura dell'impegno travestita da intuizione cosmica.",amore:"⚠️ Rischio di sabotaggio inconsapevole. Stai cercando difetti nella relazione non perché ci siano ma perché l'intimità ti spaventa più di qualsiasi avventura. Il partner non ha colpe — hai paura. Ammettilo invece di fuggire.",lavoro:"Distrazione totale. Giugno è il mese in cui il Sagittario guarda fuori dalla finestra invece di lavorare. Non è pigrizia — è eccesso di orizzonti mentali. Scegli uno e seguilo fino in fondo.",salute:"Sistema nervoso irrequieto. L'inquietudine di giugno si manifesta fisicamente con tensione alle gambe e al sistema sciatico. Cammina. Corri. Muovi il corpo per muovere la mente.",fortuna:"🌪️ Fortuna instabile per chi non riesce a stare fermo. La freccia che non parte non colpisce mai."},
    7:{titolo:"Luglio — L'Estate del Sagittario",generale:"🌟 Luglio è il mese in cui il Sagittario torna a essere se stesso: libero, solare, avventuroso, generoso. Il Cancro nel cielo porta emozioni più profonde del solito — e questa combinazione con il tuo fuoco crea qualcosa di raro: entusiasmo con radici.",amore:"Magnifico. L'estate porta il Sagittario nella sua modalità romantica migliore: spontaneo, divertente, presente. Un viaggio di coppia o un'avventura condivisa crea un ricordo che dura anni.",lavoro:"Produttività festosa. I progetti estivi avanzano con la leggerezza del Sagittario in vacanza — paradossalmente più efficaci dei progetti invernali sofferti. La gioia è il tuo stato ottimale di lavoro.",salute:"Eccellente. Il tuo elemento naturale è l'estate — il corpo esulta. Attenzione solo al sole diretto sulle anche e alla schiena.",fortuna:"🌞 Mese di grande apertura. Tutto ciò che cerchi con gioia autentica a luglio arriva."},
    8:{titolo:"Agosto — La Stella del Fuoco",generale:"Leone e Sagittario sono entrambi di fuoco — agosto porta una sinergia potente tra questi due. Sei brillante, visibile, irresistibile. Non c'è il picco assoluto del Leone — ma il Sagittario ad agosto ha qualcosa che il Leone non ha: l'avventura nell'anima.",amore:"Straordinario. L'estate al culmine porta incontri che sembrano usciti da un romanzo. Per chi è in coppia: il desiderio si rinnova come a luglio non era ancora riuscito. Per i single: agosto porta l'incontro che porta via.",lavoro:"Visibilità professionale alta. Idee audaci vengono accolte con entusiasmo. Una proposta ambiziosa — quella che tenevi nel cassetto per paura — trova il momento perfetto per essere lanciata.",salute:"Al meglio fisicamente. Il Sagittario in piena estate è una forza della natura. Non esagerare con il sole e con l'alcol — il fegato non regge agosto infinitamente.",fortuna:"🔥 Due fuochi nel cielo portano fortuna doppia. Agisci con coraggio — l'universo ti copre le spalle."},
    9:{titolo:"Settembre — Il Rientro Forzato",generale:"Settembre porta il Sagittario a terra con una brusquezza che fa male. La fine dell'estate per te non è un cambio stagionale — è un lutto. Il rientro alla routine, alle responsabilità, alle scadenze viene vissuto come una violenza. Questa reazione è reale ma va gestita.",amore:"Il partner che non ha il tuo stesso rapporto con la libertà fatica a capire la tua tristezza di settembre. Comunicalo invece di farne una colpa sua. Non è colpa sua che tu ami l'estate più di qualsiasi altra cosa.",lavoro:"Produttività bassa nella prima metà del mese. Lento recupero nella seconda. Non forzare — il corpo e la mente del Sagittario hanno bisogno di una settimana di transizione prima di tornare operativi.",salute:"Calo energetico post-estate più marcato del solito. Il fegato raccoglie i conti di luglio e agosto. Depurazione leggera, sonno regolare, meno stimolanti.",fortuna:"📉 Mese di atterraggio. La fortuna non scompare — cambia quota. Dal volo libero alla camminata stabile."},
    10:{titolo:"Ottobre — La Filosofia come Salvezza",generale:"Ottobre porta il Sagittario verso la sua natura più profonda: il filosofo. Smesso di correre, smesso di volare, rimasto con se stesso, il Sagittario scopre che le domande grandi — il senso, la direzione, il perché — sono più interessanti delle risposte piccole della quotidianità.",amore:"Un legame che porta scambio intellettuale e spirituale si rivela prezioso come non mai. Il Sagittario innamorato di una mente è il Sagittario più fedele dello zodiaco. Cerca il dialogo.",lavoro:"Ideazione e strategia a lungo termine. Non il momento dei dettagli — quello della visione. Un'idea di ottobre si realizza concretamente nell'anno successivo.",salute:"Discreta. Il sistema muscolare delle anche e delle cosce — zona del Sagittario — chiede stretching regolare. L'autunno tende a irrigidire il corpo del fuoco.",fortuna:"📚 La fortuna è nella saggezza. Chi impara qualcosa di importante a ottobre prende la decisione giusta a novembre."},
    11:{titolo:"Novembre — L'Ombra dello Scorpione",generale:"Novembre è il mese più scomodo per il Sagittario: lo Scorpione nel cielo porta profondità, intensità e oscurità che il tuo spirito solare trova oppressive. Ma c'è un dono nascosto — chi sopporta l'oscurità dello Scorpione emerge con una chiarezza nuova su cosa vuole davvero.",amore:"Intensità insolita per un segno che preferisce la leggerezza. Un momento di verità con il partner rivela quanto sia profondo il legame — o quanto sia superficiale. Non c'è via di mezzo a novembre.",lavoro:"Trasformazioni professionali che non hai scelto. Adattati velocemente — è la tua forza. Il Sagittario flessibile trova sempre il sentiero anche quando la mappa è sbagliata.",salute:"Sistema immunitario da supportare. Il cambio energetico di novembre stanca il Sagittario più di altri. Vitamina C, sonno, meno alcol.",fortuna:"🦂 La fortuna è nel coraggio di guardare in faccia ciò che hai evitato. Novembre premia il Sagittario coraggioso."},
    12:{titolo:"Dicembre — IL TUO REGNO COSMICO",generale:"🌟🌟🌟 Il Sole entra in Sagittario e l'universo intero si espande. Dicembre è il tuo mese di trionfo — non il trionfo del guerriero o del re, ma il trionfo dell'avventuriero che ha visto più lontano di tutti e ha avuto ragione. Sei nel tuo pieno splendore.",amore:"La tua generosità di dicembre non ha eguali nello zodiaco. Ami in grande — gesti enormi, parole che arrivano al cuore, la capacità di far sentire l'altro come la persona più speciale dell'universo. È il tuo regalo di natale.",lavoro:"Tutto ciò che hai lanciato nell'anno trova la sua forma definitiva. Dicembre porta il Sagittario al riconoscimento meritato — non sempre sotto forma di soldi, spesso sotto forma di rispetto e visibilità.",salute:"Vitale e festoso. Attenzione solo al fegato — il tuo punto debole — durante i festeggiamenti. Un giorno di riposo ogni tre di festa è la regola del saggio.",fortuna:"🏹🌟 Il tuo mese cosmico. La fortuna viaggia alla velocità delle tue frecce — punta in alto, più in alto che puoi. Dicembre è il momento in cui l'impossibile diventa possibile."}
  },
  capricorno:{
    1:{titolo:"Gennaio — Il Muro di Pietra",generale:"Saturno ti osserva con la soddisfazione fredda di chi sa già come andrà a finire. Gennaio 2025 è il mese della riscossione: tutto ciò che hai seminato negli ultimi anni — nel bene e nel male — arriva a scadenza. Per chi ha lavorato con disciplina, c'è una fondamenta solida. Per chi ha costruito sull'illusione: gennaio non è gentile.",amore:"Il partner sente la tua distanza emotiva come un muro di granito. Non è mancanza d'amore — è la tua armatura attivata. Ma le armature proteggono anche dal calore. Gennaio porta una conversazione difficile che non puoi rimandare ancora.",lavoro:"Un'autorità superiore — un capo, un'istituzione, una struttura — ti mette alla prova. Non combatterla frontalmente: usa la tua intelligenza strategica. Il Capricorno che sopravvive a gennaio emerge più forte di chiunque altro.",salute:"Le ossa e le articolazioni risentono del freddo di gennaio più che in altri segni. Il Capricorno porta il peso del mondo sulle spalle — letteralmente. Cura la schiena, il collo, le ginocchia.",fortuna:"🪨 Non è un mese di fortuna — è un mese di costruzione. Ogni sacrificio di gennaio è un mattone per il futuro."},
    2:{titolo:"Febbraio — Il Disgelo che non Arriva",generale:"Febbraio porta promesse di cambiamento che il Capricorno sa non fidarsi. Hai imparato a non celebrare troppo presto — e questa saggezza ti salva da delusioni che distruggerebbero altri segni. Ma attenzione: la diffidenza cronica può trasformarsi in cecità alle opportunità reali.",amore:"Venere crea un tepore che senti ma rifiuti di mostrare. Il risultato: il partner che ti ama si sente respinto da qualcosa che non capisce. Il Capricorno che impara a mostrarsi vulnerabile a febbraio fa la cosa più coraggiosa dell'anno.",lavoro:"Un progetto che sembrava sepolto torna a galla in forma diversa. Non è la seconda chance — è la prima opportunità vera. Il tuo istinto a valutare nel lungo periodo ti porta a vedere ciò che gli altri ignorano.",salute:"Sistema circolatorio da supportare nei mesi freddi. Il Capricorno tende all'anemia da sforzo — troppo consumo, troppo poco nutrimento emotivo e fisico. Ferro, sonno, calore.",fortuna:"❄️ Fortuna nascosta sotto la superficie. Chi sa scavare nel freddo trova i minerali più preziosi."},
    3:{titolo:"Marzo — La Montagna si Muove",generale:"Primavera: la parola che il Capricorno pronuncia con più sollievo. Marzo porta movimento dove c'era stasi, calore dove c'era gelo, possibilità dove c'era solo calcolo. Non ti trasformi — ti svegli. E un Capricorno sveglio è una forza della natura.",amore:"Il partner finalmente vede la parte di te che tieni nascosta d'inverno: la tenerezza scomoda, la generosità discreta, il Capricorno che dietro l'armatura ha un cuore che ama in modo assoluto e permanente. Mostrala. Vale la pena.",lavoro:"Avanzamento professionale concreto e meritato. Non è fortuna — è il risultato di tutto ciò che hai costruito silenziosamente negli ultimi sei mesi. Qualcuno se ne accorge finalmente. Accetta il riconoscimento senza minimizzare.",salute:"Recupero fisico dopo i mesi duri. Il corpo del Capricorno in primavera risponde meglio di qualsiasi regime: attività fisica all'aperto, sole, uscita dall'isolamento invernale.",fortuna:"⛰️ La vetta che sembrava irraggiungibile ad inizio anno si avvicina. Continua a salire."},
    4:{titolo:"Aprile — Il Costo del Controllo",generale:"⚠️ Aprile porta un avviso cosmico preciso: il bisogno di controllo del Capricorno sta per costarti qualcosa di importante. Stai stringendo le redini così forte da soffocare ciò che ami — una relazione, un progetto, te stesso. Rilasciare non è sconfitto: è evoluzione.",amore:"Un conflitto in amore ha la stessa radice: vuoi gestire invece di vivere. Il partner si sente un progetto invece di una persona. Aprile chiede al Capricorno la cosa più difficile: affidarsi senza garanzie.",lavoro:"Un errore di calcolo — raro per te, ma possibile — porta conseguenze che potevi evitare. Non devastanti, ma scomode abbastanza da ferire l'orgoglio. Impara dalla variabile che non avevi considerato.",salute:"Tensione mascellare e dentale — il Capricorno porta lo stress nel corpo in modi specifici. Stai stringendo i denti anche di notte? Il corpo sa già ciò che la mente non ammette.",fortuna:"⚠️ Fortuna nella flessibilità. Chi rigge ad aprile senza piegarsi un poco si spezza."},
    5:{titolo:"Maggio — L'Ambizione Risvegliata",generale:"🌟 Eccolo. Il mese in cui l'ambizione del Capricorno trova finalmente un terreno fertile. Maggio porta aperture professionali, riconoscimenti differiti, opportunità che sembravano bloccate per mesi o anni. Il cielo finalmente lavora con te invece che contro.",amore:"Un legame che si era cristallizzato torna a respirare. Non tutto si risolve — ma si scioglie qualcosa di importante. Il Capricorno in amore a maggio è capace di una tenerezza rara e preziosa che sorprende anche sé stesso.",lavoro:"Il momento della raccolta. Una proposta importante, una promozione, un riconoscimento concreto che era in gestazione. Saturno premia chi non ha mollato quando tutto sembrava fermo.",salute:"Recupero pieno. Maggio porta energia stabile — non l'esplosione di un segno di fuoco, ma la solidità di una montagna in primavera. Sfruttala per costruire abitudini fisiche durature.",fortuna:"⭐⭐ Uno dei mesi migliori dell'anno. Agisci sui piani che hai curato in silenzio."},
    6:{titolo:"Giugno — L'Estate Scomoda",generale:"Il Capricorno e l'estate hanno un rapporto complicato. Il tuo segno è fatto di freddo, struttura, disciplina — il caldo scioglie confini che preferiresti mantenere. Giugno porta situazioni sociali intense che mettono a disagio il tuo istinto di controllo.",amore:"Atmosfera estiva che favorisce la spontaneità — esattamente ciò che ti disturba. Il partner vuole leggerezza e avventura: puoi dargliela senza sentirti perduto? Quella che chiami perdita di controllo si chiama vacanza.",lavoro:"Rallentamento estivo che il Capricorno vive con frustrazione. Non tutti condividono il tuo ritmo — impara a lavorare con chi lavora diversamente invece di giudicarlo.",salute:"Circolazione e pressione da monitorare nei giorni più caldi. Il Capricorno non è un segno estivo — idratazione e riposo pomeridiano non sono debolezze, sono intelligenza.",fortuna:"🌊 Fortuna nelle relazioni sociali. Un incontro informale apre porte che nessun piano formale avrebbe aperto."},
    7:{titolo:"Luglio — L'Oscurità a Luglio",generale:"🚨 Luglio porta un periodo di crisi profonda per il Capricorno — non catastrofe, ma confronto inevitabile con limiti che hai ignorato. Qualcosa che non funzionava da mesi raggiunge il punto di rottura. È necessario. Non è punizione — è correzione.",amore:"Una verità scomoda emergerà in superficie. Hai costruito la relazione attorno alla stabilità invece che all'intimità? Le fondamenta reggono — ma le pareti sono fredde. Luglio porta la conversazione che o trasforma o conclude.",lavoro:"Crisi gestionale: un progetto, un team, una struttura mostra crepe che non puoi più ignorare. Il tuo istinto è nascondere il problema e risolverlo in silenzio — questa volta non basta.",salute:"Corpo sotto pressione. Il sistema linfatico e le articolazioni risentono del calore estivo e dello stress accumulato. Rallenta. Non è opzionale.",fortuna:"🌑 Mese difficile. La fortuna è nell'onestà con sé stessi — chi affronta la verità di luglio emerge più forte."},
    8:{titolo:"Agosto — La Solidità tra il Caos",generale:"Leone e Capricorno sono l'opposto nello zodiaco — ma agosto porta un equilibrio insolito. Il Leone vuole brillare: tu vuoi costruire. Mentre gli altri danzano nel fuoco estivo, tu poni le fondamenta del prossimo semestre. E quando l'estate finirà, sarai l'unico ad avere qualcosa di solido.",amore:"La relazione ritrova stabilità dopo luglio. Non è romanticismo estivo — è il legame profondo e duraturo che solo il Capricorno sa costruire. Il partner sente che può contare su di te in modo assoluto. Non è poco.",lavoro:"Pianificazione strategica del secondo semestre. Mentre il mondo è in vacanza, il Capricorno lavora su ciò che nessuno vede ancora. Settembreottobre raccoglieranno ciò che semini adesso.",salute:"Discreta. Agosto porta stanchezza accumulata — programma almeno dieci giorni di riposo reale. Il Capricorno che non si ferma mai paga sempre il conto.",fortuna:"🏗️ Fortuna nel lavoro silenzioso. Chi costruisce quando gli altri si riposano si trova avanti quando tutti tornano."},
    9:{titolo:"Settembre — Il Trionfo del Metodo",generale:"🌟🌟 Settembre è il mese del Capricorno: rientro, struttura, disciplina, risultati. Mentre gli altri faticano a tornare alla routine, tu sei già operativo a piena velocità — perché non hai mai davvero smesso. Le pianificazioni di agosto si traducono in avanzamenti concreti.",amore:"Il partner si rende conto di quanto sia rara la solidità che offri. In un mondo di relazioni fragili e temporanee, il Capricorno è chi rimane. Questo mese, il valore di questa qualità viene finalmente riconosciuto.",lavoro:"Trionfo professionale. Un progetto importante raggiunge la fase decisiva. Una proposta che sembrava impossibile trova le condizioni giuste. Il tuo metodo — che molti trovano lento — produce risultati che nessuna scorciatoia avrebbe portato.",salute:"Eccellente. Il corpo del Capricorno risponde magnificamente all'autunno — la sua stagione naturale. Energia stabile, mente lucida, resistenza al massimo.",fortuna:"⭐⭐⭐ Il tuo mese di potere. Tutto ciò che pianifichi a settembre con metodo porta frutti certi."},
    10:{titolo:"Ottobre — La Costruzione dell'Eredità",generale:"Ottobre porta il Capricorno verso le domande più profonde: cosa stai costruendo che duri più di te? Non è morbosità — è la natura del tuo segno. Il Capricorno non lavora per il presente: costruisce per decenni. Ottobre è il mese in cui questa visione si fa più nitida.",amore:"Un legame che ha attraversato le crisi dell'anno emerge come qualcosa di solido e reale. Il Capricorno in amore a ottobre sa cosa vuole e perché — una chiarezza che pochi altri segni raggiungono.",lavoro:"Consolidamento di ciò che è stato costruito. Non il momento dei lanci audaci — quello della rifinitura. Un mentore o una figura senior porta una prospettiva che cambia la tua visione strategica.",salute:"Articolazioni e ossa da curare con l'arrivo del freddo. Vitamina D, calcio, stretching quotidiano. Il corpo del Capricorno è forte ma inflassibile — lavora sulla mobilità.",fortuna:"🏛️ Fortuna nella pazienza. Chi sa aspettare ottobre vede le opportunità che chi corre non ha mai visto."},
    11:{titolo:"Novembre — Il Presagio Oscuro",generale:"⚠️ Novembre porta un avvertimento cosmico per il Capricorno: stai sacrificando la vita per il lavoro? Stai costruendo l'eredità mentre perdi chi ami? Saturno è un maestro severo — ma anche lui sa che una vita fatta solo di mattoni è una prigione perfetta. Ascolta l'avvertimento prima che diventi lezione.",amore:"Un momento di verità relazionale. Chi hai messo in secondo piano per troppo tempo manda un segnale che non puoi ignorare. Non è un ultimatum — è ancora una richiesta. Rispondile.",lavoro:"Tensioni gerarchiche o strutturali. Un cambiamento organizzativo che non hai scelto ti obbliga ad adattarti. Il Capricorno che si adatta senza perdere la visione a lungo termine è imbattibile.",salute:"Malinconia autunnale più profonda del solito. Il corpo porta il peso emotivo accumulato nell'anno. Non è debolezza — è segnale. Cerca calore umano, non solo efficienza.",fortuna:"🌑 Un ciclo si chiude. La fortuna è nella saggezza di lasciare andare ciò che ha già dato tutto."},
    12:{titolo:"Dicembre — IL REGNO DI SATURNO",generale:"🌟🌟🌟 Il Sole entra in Capricorno e Saturno ti consegna le chiavi dell'anno. Dicembre è il tuo mese sacro — non di festa e fuochi d'artificio, ma di profonda soddisfazione per ciò che hai costruito. Mentre il mondo celebra il caos natalizio, tu conti i risultati concreti di dodici mesi di lavoro. E i conti tornano.",amore:"Il partner capisce finalmente la natura del tuo amore: non parole, non gesti teatrali — fondamenta. La casa sicura in mezzo alla tempesta. Dicembre porta una riconciliazione, una stabilizzazione, o una conferma che il legame è costruito per durare.",lavoro:"Riconoscimento finale dell'anno. Non sempre è clamoroso — spesso è la silenziosa soddisfazione di un traguardo raggiunto contro ogni previsione. Il Capricorno che ha lavorato tutto l'anno in silenzio raccoglie dicembre con dignità.",salute:"Il freddo ti appartiene — dicembre porta energia stabile e radicata. Festeggia con moderazione. Il corpo sa già che a gennaio ricomincia.",fortuna:"🪐 Il pianeta Saturno ti corona. La fortuna del Capricorno non è mai casuale — è esattamente proporzionale a ciò che hai costruito. Dicembre è il momento della verità: e la verità è che hai lavorato bene."}
  }
};

// Per gli altri segni usiamo un generatore intelligente basato sui dati giornalieri
// (Acquario aggiunto manualmente qui sotto)

const _ACQUARIO_MESE = {
    1:{titolo:"Gennaio — La Rivolta Interiore",generale:"Urano inizia l'anno con un cortocircuito elettrico nel sistema nervoso dell'Acquario: hai idee grandiose, visioni di cambiamento radicale, piani che rivoluzionerebbero tutto — e zero capacità di metterli in pratica. Gennaio è il mese della frustrazione creativa. La distanza tra ciò che immagini e ciò che esiste ti corrode.",amore:"L'isolamento emotivo dell'Acquario raggiunge il picco a gennaio. Non è che non ami — è che il tuo modo di amare non assomiglia a quello che gli altri si aspettano. Il partner non riesce a capirti e tu non riesci a spiegarlo. Risultato: silenzio incompreso da entrambe le parti.",lavoro:"Le tue idee innovative vengono fraintese o respinte da strutture troppo lente per comprenderle. L'Acquario di gennaio si sente un genio circondato da mediocri — e forse ha anche ragione. Ma l'arroganza intellettuale non apre porte.",salute:"Sistema nervoso sovraccarico. Gennaio porta insonnia, pensieri circolari, irrequietezza mentale che il corpo amplifica. Meno schermi, meno stimoli, più silenzio.",fortuna:"⚡ Fortuna instabile come l'elettricità di Urano. Brillante a tratti, blackout improvvisi."},
    2:{titolo:"Febbraio — Il Tuo Compleanno Cosmico",generale:"🌟🌟 Il Sole entra in Acquario e il cosmo si sintonizza sulla tua frequenza. Febbraio è il tuo mese — non di festa, ma di potere. La tua visione del futuro che a gennaio sembrava strampalata comincia a sembrare profetica. Qualcosa nella realtà ti dà ragione.",amore:"Il magnetismo dell'Acquario al suo picco: sei affascinante, originale, imprevedibile nel modo migliore. Chi ti ama ti ama di più questo mese. Chi non ti capisce si avvicina incuriosito. Per i single: febbraio porta l'incontro con qualcuno che finalmente parla la tua lingua.",lavoro:"Riconoscimento della tua visione innovativa. Un'idea che portavi avanti in solitudine trova finalmente sostenitori. La tua capacità di vedere avant trova il suo momento.",salute:"Energia mentale al massimo. Attenzione alla tendenza a trascurare il corpo mentre la mente galoppa — il fisico esiste anche per l'Acquario.",fortuna:"✨✨ Il tuo mese di potere. Le stelle ti guardano con favore — usa questa finestra per avanzare ciò che conta."},
    3:{titolo:"Marzo — Il Fuoco delle Idee",generale:"La primavera porta al l'Acquario un'ondata di entusiasmo collettivo che la tua natura solitaria trova travolgente. Sei coinvolto, ispirato, circondato da persone che condividono la tua visione — temporaneamente. Goditi questa finestra di connessione senza aspettarti che duri.",amore:"Un legame che si era raffreddato torna a scaldarsi in modo inaspettato. Non è nostalgia — è evoluzione. Entrambi siete cambiati abbastanza da poter provare di nuovo in modo diverso.",lavoro:"Collaborazioni brillanti. L'Acquario in gruppo a marzo produce risultati che da solo non avrebbe mai raggiunto — anche se faticherà ad ammettere quanto gli altri abbiano contribuito.",salute:"Primavera che rivitalizza il sistema nervoso. Attività fisica all'aperto, aria nuova, cambio di ambiente — tutto questo nutre l'Acquario che si era chiuso nell'inverno.",fortuna:"🌬️ Vento favorevole. Le idee seminate a febbraio trovano terreno fertile."},
    4:{titolo:"Aprile — La Trappola della Distanza",generale:"⚠️ Aprile porta una crisi silenziosa e pericolosa per l'Acquario: la disconnessione emotiva che usi come meccanismo di difesa sta diventando un modo di vivere permanente. Non sei distaccato per scelta filosofica — sei distaccato perché hai paura. E aprile porta questa verità in superficie.",amore:"Il partner arriva al limite. Non è una scena drammatica — è peggio: un silenzio freddo, una distanza crescente, la sensazione che stiate vivendo in parallelo invece che insieme. L'Acquario che non interviene ad aprile rischia di perdere qualcosa di irrecuperabile.",lavoro:"Conflitti con autorità o strutture rigide. La tua insofferenza alle regole ti porta a scontri inutili che danneggiano solo te. Scegli con cura le battaglie — non ogni sistema va smontato.",salute:"Circolazione e sistema linfatico da sostenere. L'Acquario che si isola emotivamente si isola anche fisicamente — il corpo risponde con affaticamento.",fortuna:"🌑 Fortuna bassa. Il karma dell'isolamento si presenta il conto."},
    5:{titolo:"Maggio — Il Ritorno alla Connessione",generale:"Dopo aprile, maggio porta una scelta fondamentale: restare nell'isolamento confortevole o uscire verso il mondo scomodo e necessario. L'Acquario che sceglie di connettersi trova un mese straordinario. Quello che si chiude resta nel loop.",amore:"Una conversazione importante — forse la più importante dell'anno — chiarisce o conclude. Non c'è via di mezzo a maggio: l'Acquario decide cosa vuole e lo dice. Per la prima volta, forse, senza le pareti di vetro.",lavoro:"Breakthrough professionale per chi ha tenuto duro. Un progetto innovativo trova finalmente il suo pubblico giusto. La visione a lungo termine che tutti trovavano strana si dimostra corretta.",salute:"Recupero progressivo. Il corpo dell'Acquario reagisce bene alla primavera inoltrata — energia in risalita, sistema nervoso più stabile.",fortuna:"⭐ Fortuna nella connessione. Chi si apre a maggio raccoglie ciò che l'isolamento di aprile aveva bloccato."},
    6:{titolo:"Giugno — L'Estate dell'Acquario",generale:"🌟 Giugno porta l'Acquario nel suo momento sociale migliore dell'anno. Il calore allenta le difese, l'energia collettiva dell'estate ti trascina fuori dall'isolamento intellettuale, e per qualche settimana sei quello che gli altri non si aspettano: presente, caloroso, pienamente qui.",amore:"Straordinario. L'Acquario di giugno è magnetico in modo insolito — non per l'eccentric appeal del solito, ma per una presenza emotiva autentica che raramente mostri. Il partner si innamora di nuovo. I single fanno incontri che cambiano prospettive.",lavoro:"Networking produttivo. Gli eventi estivi, i contatti informali, le conversazioni casuali — tutto porta connessioni professionali che nessun piano formale avrebbe generato.",salute:"Al meglio. Il sole e il calore nutrono l'Acquario più di qualsiasi regime — sei un essere elettrico e l'estate ti ricarica.",fortuna:"⚡✨ Uno dei mesi migliori. La tua frequenza è alta — chi si sintonizza porta opportunità reali."},
    7:{titolo:"Luglio — Il Crollo Improvviso",generale:"🚨 Luglio porta un collasso che nessuno aveva previsto — nemmeno tu, che di solito vedi tutto. Non è catastrofe esterna: è il momento in cui tutto ciò che hai costruito sulla distanza emotiva mostra le crepe. Un rapporto importante, un progetto ambizioso, o la tua stessa salute mentale manda un segnale impossibile da ignorare.",amore:"Una crisi relazionale che arriva senza preavviso — almeno in apparenza. In realtà i segnali c'erano da mesi, ma l'Acquario non li ha letti o li ha ignorati. Luglio porta la resa dei conti. Affrontarla con onestà è l'unica via.",lavoro:"Un progetto su cui avevi scommesso subisce un arresto brusco. Non è la fine — ma richiede una revisione radicale delle assunzioni di base. La tua capacità di reinventare si mette alla prova.",salute:"Sistema nervoso esaurito. Il caldo estivo amplifica l'ansia dell'Acquario in un modo che sorprende anche te. Rallenta. Non è debolezza — è necessità.",fortuna:"🌑🌑 Il mese più difficile dell'anno. La fortuna è nella resilienza."},
    8:{titolo:"Agosto — La Ricostruzione Silenziosa",generale:"Dopo luglio, agosto è il mese in cui l'Acquario fa ciò che sa fare meglio: reinventarsi. Non con fanfare — in silenzio, con quella capacità urana di guardare le macerie e vedere già la struttura nuova. Gli altri sono in vacanza. Tu sei in laboratorio.",amore:"Riparazione lenta ma genuina. Il legame che ha vacillato a luglio si rimette in piedi — non come prima, ma in una forma più onesta. L'Acquario che accetta la vulnerabilità ad agosto costruisce qualcosa di raro.",lavoro:"Pianificazione del secondo semestre con visione rinnovata. L'idea che emerge dalle ceneri di luglio è più solida dell'originale. Urano porta l'innovazione attraverso la rottura.",salute:"Recupero progressivo. Il corpo torna alla normalità — nutri il sistema nervoso con riposo, non con stimolazione.",fortuna:"🔧 Fortuna nell'adattamento. Chi si reinventa ad agosto emerge a settembre con un vantaggio invisibile."},
    9:{titolo:"Settembre — Il Profeta Confermato",generale:"🌟🌟 Settembre porta l'Acquario al riconoscimento intellettuale e professionale che merita. Quelle idee che tutti trovavano troppo avanti? Settembre le convalida. Quella visione del futuro che sembrava utopica? Diventa strategia condivisa. Non sei strano — sei in anticipo.",amore:"Equilibrio relazionale ritrovato dopo un'estate intensa. Il partner capisce finalmente la tua natura e smette di lottarle contro — o lo fa e la relazione si chiarisce definitivamente. In ogni caso, settembre porta verità.",lavoro:"Momento di massima efficacia professionale. La tua capacità di analisi sistemica, di vedere connessioni che gli altri non vedono, trova il suo campo di applicazione perfetto. Un riconoscimento concreto è possibile.",salute:"Ottima. L'autunno riattiva le energie mentali dell'Acquario — la tua stagione più produttiva.",fortuna:"✨✨✨ Il cielo è favorevole. Chi ha tenuto duro attraverso l'estate raccoglie ora."},
    10:{titolo:"Ottobre — L'Isolamento Filosofico",generale:"Ottobre porta l'Acquario verso la dimensione che ama di più: il pensiero astratto, le domande fondamentali, la solitudine intellettuale come scelta consapevole. Non è crisi — è la tua modalità naturale autunnale. Godila, ma non dimenticare che il mondo reale ha bisogno di te.",amore:"Il partner sente la tua mente vagare verso orizzonti lontani. Non è abbandono — è la tua natura. Comunicalo invece di lasciare che venga interpretato come distacco.",lavoro:"Ideazione a lungo termine. Non il momento dei dettagli operativi — quello della visione. Un'intuizione di ottobre diventa la strategia dell'anno prossimo.",salute:"Sistema nervoso che chiede riposo profondo. L'autunno porta stanchezza mentale nell'Acquario — rispettala invece di ignorarla.",fortuna:"📡 Fortuna nelle idee. Un pensiero che sembra astratto porta una soluzione concreta inaspettata."},
    11:{titolo:"Novembre — Il Gelo che Prepara",generale:"⚠️ Novembre porta un presagio sottile per l'Acquario: stai diventando così indipendente da essere irraggiungibile? La tua libertà è sacra — ma c'è una differenza tra libertà e isolamento. Novembre ti porta di fronte a questa linea sottile.",amore:"Una distanza che si è formata nell'anno rischia di diventare permanente. Non per scelta — per inerzia. L'Acquario che non agisce a novembre si sveglia a gennaio con un vuoto che non sa come riempire.",lavoro:"Tensioni con strutture o colleghi che non condividono la tua visione. La frustrazione è reale — ma trasformarla in cinismo sarebbe un errore irreversibile.",salute:"Fragilità del sistema immunitario nei mesi freddi. L'Acquario che si isola non riceve il nutrimento energetico del contatto umano — e il corpo lo avverte.",fortuna:"🌬️ Vento freddo. La fortuna è nel coraggio di restare connesso invece di fuggire nell'astrazione."},
    12:{titolo:"Dicembre — IL VISIONARIO CORONATO",generale:"🌟🌟🌟 Dicembre porta l'Acquario alla sua risoluzione annuale: hai visto giusto, hai resistito, hai reinventato quando era necessario. Non il trionfo rumoroso del Leone né la soddisfazione silenziosa del Capricorno — il tuo è il trionfo del visionario che sa già dove andrà il 2026 mentre tutti celebrano il 2025.",amore:"Un legame che ha attraversato le turbolenze dell'anno emerge come qualcosa di raro: una relazione con qualcuno che ama davvero la tua mente eccentrica e il tuo cuore nascosto. Non sprecare questo.",lavoro:"Riconoscimento finale del tuo contributo innovativo. Non sempre viene dai posti attesi — spesso è una persona che ti scrive di come la tua idea ha cambiato qualcosa. Vale più di qualsiasi premio.",salute:"Stabile e radicata come può esserlo l'Acquario in dicembre. Festeggia con chi ti fa bene. Evita chi ti prosciuga.",fortuna:"⚡🌟 Urano ti sorprende con un colpo di scena finale positivo. L'anno si chiude con una rivelazione che apre il prossimo."}
};

// Inietta Acquario nel DB_ORO_MESE a runtime
if(typeof DB_ORO_MESE !== 'undefined') DB_ORO_MESE['acquario'] = _ACQUARIO_MESE;

const _PESCI_MESE = {
  1:{
    titolo:"Gennaio — Il Velo Sacro",
    generale:"Gennaio porta i Pesci in un luogo familiare e pericoloso: la nebbia. Non la nebbia come confusione, ma come velo sacro tra te e la realtà. La tua intuizione tocca vette che altri non possono nemmeno immaginare — senti cose che non sono ancora accadute, percepisci emozioni altrui come fossero tue. Ma questo dono ha un prezzo. Il confine tra te e il mondo si assottiglia pericolosamente, e il rischio di perderti non è metafora: è una trappola concreta. Stai attento a chi assorbi in questo mese. Non tutti meritano di entrare nel tuo oceano interiore.",
    amore:"La connessione emotiva di questo mese è quasi sovrannaturale — senti l'altro anche quando non parla. Ma attenzione: stai amando la persona reale o il fantasma che hai costruito nella tua mente? Gennaio tende a farti innamorare di un'idea più che di un essere umano in carne e ossa. Se sei solo, la solitudine si fa acuta come una lama. Resistila senza fuggire in amori impossibili.",
    lavoro:"Creatività elevata, concentrazione bassa. Non è il momento per i dettagli o per le scadenze rigide — il tuo cervello viaggia su frequenze che le tabelle Excel non contemplano. Sfrutta questo mese per idee, visioni, brainstorming. I progetti che sembrano 'troppo folli' adesso potrebbero essere quelli che salveranno la situazione tra sei mesi. Lascia che gli altri gestiscano i numeri.",
    salute:"Il sistema nervoso è in stato di ipersensibilità. Rumori, luci, conflitti — tutto amplificato. Proteggi il tuo spazio fisico con la stessa cura con cui proteggeresti un luogo sacro. Il sonno è la tua medicina più potente questo mese: non sacrificarlo per niente e per nessuno. Occhio ai liquidi — idratazione ma anche eccessi.",
    fortuna:"⭐⭐⭐ — La luna nuova del mese attiva il tuo settore delle risorse nascoste. Qualcosa che avevi dimenticato torna. Un vecchio contatto, un'opportunità archiviata, un talento sopito. Tieniti pronto a cogliere ciò che riemerge dal fondo."
  },
  2:{
    titolo:"Febbraio — IL TRIONFO DEI PESCI",
    generale:"🌟🌟🌟 IL TRIONFO DEI PESCI. Febbraio è il tuo mese — il cosmo si inchina all'ultimo e più profondo segno dello zodiaco. Mentre il sole attraversa la tua casa, sei investito da una luce che raramente tocchi: chiarezza. Non la chiarezza fredda della Vergine o la certezza granitica del Capricorno — la tua è una chiarezza oceanica, dove tutto si vede attraverso l'acqua trasparente. Sei nel pieno del tuo potere mistico. Le decisioni prese in questo periodo hanno un peso cosmico che va oltre la logica ordinaria. Non sprecare questo momento.",
    amore:"Febbraio è il mese in cui l'amore dei Pesci diventa leggenda. La tua capacità di amare — totalmente, senza riserve, con una profondità che spaventa — si esprime al massimo. Se sei in coppia, questo è il mese per riaccendere qualcosa che sembrava perduto. Se sei solo, potresti incontrare qualcuno che ti cambia completamente. Non difenderti. Apri ogni porta.",
    lavoro:"Il tuo mese di potere porta riconoscimenti inattesi. Qualcuno finalmente vede quello che fai — non solo i risultati misurabili, ma il valore intangibile che porti: creatività, empatia, visione. Una proposta o un'opportunità potrebbero arrivare da dove meno te lo aspetti. Dì sì prima di pensare troppo.",
    salute:"Energia in ascesa. Il corpo risponde bene a qualsiasi cura tu voglia iniziare — nuova routine, nuovo approccio alimentare, nuova pratica di movimento. Il sistema immunitario è forte. Hai una finestra di vitalità: usala per stabilire abitudini che vuoi portare nel resto dell'anno.",
    fortuna:"🌟🌟🌟🌟 — Il picco dell'anno per i Pesci. Massima fortuna nelle questioni creative, spirituali e relazionali. Anche il lato materiale sorride: non è il momento di esitare davanti alle opportunità. Il cosmo è dalla tua parte questa settimana più che in qualsiasi altra dell'anno."
  },
  3:{
    titolo:"Marzo — La Caduta nel Sogno",
    generale:"⚠️ LA CADUTA NEL SOGNO. Marzo porta una trappola sottile e bellissima: tutto sembra possibile. L'entusiasmo di febbraio crea una scia di ottimismo che, se non gestita, diventa una fuga dalla realtà. I Pesci in marzo rischiano di costruire castelli di sabbia emotivi — progetti grandiosi iniziati e abbandonati, relazioni intensissime che evaporano in poche settimane, promesse fatte con tutto il cuore ma senza le basi per mantenerle. Il pericolo non è la malevolenza ma l'autoingannoinquieto: sei così bravo a vivere nel possibile che il reale ti sembra troppo piccolo.",
    amore:"Attenzione alle infatuazioni di marzo — possono essere travolgenti e false allo stesso tempo. Non confondere intensità con profondità. Una persona che ti fa sentire 'vivo come mai' in questo mese potrebbe rivelarsi un miraggio a maggio. Rallenta. Osserva. Chiedi alla tua parte razionale di parlare, anche se la trovi noiosa.",
    lavoro:"Il rischio di dispersione è alto. Hai tre idee brillanti, sei progetti in cantiere, dieci conversazioni stimolanti — e nulla che avanza concretamente. Il tuo talento creativo è un oceano che deve scorrere in un alveo preciso, altrimenti allaga tutto. Scegli una cosa. Una sola. E portala a termine prima di aprire la prossima.",
    salute:"Marzo porta tentazioni di evasione — alcol, eccessi alimentari, fughe digitali, dipendenze soft. Non come dramma ma come scivolamento graduale: una sera diventa un'abitudine, un'abitudine diventa una necessità. Occhio ai campanelli d'allarme. Il corpo sa quando sta compensando qualcosa.",
    fortuna:"⭐⭐ — Fortuna discontinua. Ottima nelle questioni artistiche e spirituali, deludente nei settori pratici. Non firmare contratti importanti senza rileggere tutto due volte. Non fidarti di chi ti fa promesse molto generose in questo mese."
  },
  4:{
    titolo:"Aprile — Il Sacrificio",
    generale:"🗡️ IL SACRIFICIO. Aprile è il mese più oscuro dell'anno per i Pesci — non per eventi drammatici esterni, ma per un meccanismo interno che si attiva con puntualità cosmica: l'annullamento di sé. Aprile ti chiede di dare. Ancora. Di più. Fino a quando non rimane nulla. La tua natura compassionevole — che è il tuo dono più raro — diventa la tua vulnerabilità più grande. Qualcuno si approfitterà della tua generosità. Qualcun altro ti esaurirà senza nemmeno rendersene conto. Il sacrificio è nobile solo quando è scelto. In aprile, assicurati che le tue porte stiano aprendosi tu, e non siano state forzate.",
    amore:"Il mese porta dinamiche di dipendenza affettiva al limite del tossico. Potresti trovarti a fare tutto tu — dare, sostenere, salvare — mentre l'altro riceve in silenzio. O peggio, potresti essere tu quello che riceve senza accorgertene. In entrambi i casi, aprile richiede una domanda scomoda: questa relazione ti nutre o ti svuota?",
    lavoro:"Sfruttamento sottile sul lavoro. La tua disponibilità, la tua flessibilità, la tua capacità di adattarti vengono usate senza gratitudine. Forse non succede con malevolenza — ma succede. Impara a dire 'no' anche una sola volta questo mese, in modo chiaro e senza scuse. Sarà liberatorio.",
    salute:"Stanchezza profonda, non solo fisica. L'esaurimento empatico è reale e invalidante quanto quello fisico. Se senti di non riuscire a 'staccare' dai problemi degli altri — se porti il peso altrui come fosse tuo — stai andando verso un burnout emotivo. Priorità assoluta: ritiro e silenzio.",
    fortuna:"⭐ — Mese povero per la fortuna materiale. Non investire, non rischiare, non fare grandi mosse finanziarie. Aprile per i Pesci è un mese di pagamento karmico — quello che hai seminato in periodi passati di disattenzione arriva ora il conto."
  },
  5:{
    titolo:"Maggio — Il Risveglio",
    generale:"Maggio segna un risveglio — fragile, incerto, ma reale. Dopo il buio di aprile, qualcosa in te ha fatto il punto. Non sei ancora in piena forma, ma la direzione è cambiata. L'energia torna a salire con cautela, come una marea che cresce senza clamore. Il rischio di maggio è la fretta: dopo un periodo di stanchezza, la prima ondata di vitalità porta la tentazione di compensare, di recuperare, di buttarsi su tutto ciò che è stato rimandato. Non farlo. La ripresa dei Pesci in maggio è solida solo se è graduale.",
    amore:"Maggio porta una dolcezza inaspettata. Una conversazione che sblocca qualcosa, un gesto che non ti aspettavi, un momento di connessione autentica dopo settimane di rumore. Se sei in coppia, questo è il mese per ricominciare a parlare davvero. Se sei solo, l'energia relazionale migliora — qualcuno di cui ti sei accorto da poco merita un secondo sguardo.",
    lavoro:"Buone notizie su un progetto che sembrava bloccato. Le carte si rimescolano in modo favorevole — non in modo clamoroso, ma solido. Qualcuno in posizione di potere nota il tuo lavoro. Preparati a presentare il meglio di te con chiarezza e concretezza: la finestra è aperta ma breve.",
    salute:"Il corpo riprende vita. L'appetito torna, il sonno migliora, l'umore sale. È il momento di reintrodurre movimento fisico con dolcezza — nulla di estremo, ma qualcosa di costante. La natura — acqua, verde, aria aperta — ti ricarica in modo diretto questo mese. Usala.",
    fortuna:"⭐⭐⭐ — Ripresa fortunata su tutti i fronti. Le situazioni bloccate si sbloccano. Piccole vincite o sorprese positive in ambito finanziario. Il karma dei mesi difficili comincia a bilanciare il conto."
  },
  6:{
    titolo:"Giugno — L'Illusione Dorata",
    generale:"Giugno porta l'illusione più bella e più pericolosa dell'anno: tutto sembra perfetto. Il sole, il calore, le relazioni che fioriscono, i progetti che sembrano procedere da soli — una superficie dorata sopra acque che non hai ancora esplorato. I Pesci in giugno sono a rischio di un errore classico: scambiare la stagione con la realtà. Non è che le cose vadano male — è che la bontà del momento ti rende meno vigile. Le decisioni prese con superficialità in giugno si pagano in autunno. Goditi il calore, ma non spegnere il radar.",
    amore:"La stagione porta euforia romantica. Incontri piacevoli, flirt leggeri, relazioni che sembrano facili e luminose. Attenzione: l'intensità emotiva di giugno può farti credere che qualcosa di superficiale sia profondo. Distingui tra chi ti diverte e chi ti conosce. Sono cose molto diverse.",
    lavoro:"Mese produttivo in superficie, ma con una distrazione di fondo che rallenta i risultati veri. La collaborazione funziona bene — le energie di squadra sono positive. Evita però di delegare troppe responsabilità o di lasciare troppo in mano agli altri: la tua supervisione rimane necessaria.",
    salute:"Buona energia, ma attenzione ai ritmi sregolati estivi. Sonno ridotto, alimentazione disordinata, eccessi sociali — tutto sembra innocuo quando ci si sente bene, ma il corpo dei Pesci è più sensibile della media. Giugno è il mese in cui si piantano i semi dell'esaurimento estivo.",
    fortuna:"⭐⭐⭐ — Fortuna discreta ma non eccezionale. Buona per i rapporti sociali e lavorativi. Nella finanza, niente di eclatante: piccoli guadagni, nessuna perdita grave. Il momento migliore del mese è nella seconda metà."
  },
  7:{
    titolo:"Luglio — Il Crollo della Maschera",
    generale:"🚨 IL CROLLO DELLA MASCHERA. Luglio è il mese più duro dell'anno per i Pesci. La realtà — quella che hai evitato, dilazionato, nascosto sotto strati di sogno e speranza — irrompe senza chiedere permesso. Non è una punizione cosmica: è la resa dei conti necessaria. Tutto ciò che non hai affrontato in primavera si presenta adesso, concentrato, urgente, impossibile da ignorare. Una relazione che reggeva sull'illusione si rompe o si trasforma radicalmente. Un progetto che procedeva su promesse vagas collassa. Una verità su te stesso emerge e fa male. Il dolore di luglio è reale — ma è anche l'unico che guarisce davvero.",
    amore:"Luglio porta crisi relazionali acute. Non necessariamente la fine — ma una scossa profonda che rimette in discussione le basi. Una conversazione che avevi evitato non può più aspettare. Se la relazione è solida, supererà questo passaggio più forte. Se reggeva su convenienza o abitudine, luglio lo rivela con brutalità. Preparati a sentire verità scomode da chi ami.",
    lavoro:"Pressioni professionali al massimo. Scadenze, conflitti, aspettative che non riesci a soddisfare. Il tuo approccio intuitivo e creativo viene messo alla prova da richieste concrete e misurabili. Non è il momento di fuggire nel vago — devi essere preciso, puntuale, affidabile anche quando non ti viene naturale. La credibilità si gioca adesso.",
    salute:"Il sistema nervoso è sotto pressione massima. Insonnia, ansia, tensioni fisiche che non sai dove collocare. Il corpo dei Pesci porta il peso emotivo nei muscoli, nelle articolazioni, nello stomaco. Priorità assoluta: non isolarti. Parla. Con qualcuno di fiducia, con un professionista, con chiunque possa aiutarti a mettere in parole quello che senti.",
    fortuna:"⭐ — Fortuna quasi assente. Non è il momento per rischi, investimenti o decisioni importanti. Le energie cosmiche sono concentrate sulla resa dei conti, non sull'espansione. Tieni la testa bassa e aspetta che il mese passi."
  },
  8:{
    titolo:"Agosto — La Deriva Mistica",
    generale:"Agosto porta i Pesci in uno stato di deriva mistica — un territorio che solo voi conoscete davvero. Dopo il trauma di luglio, il sistema si disconnette in modo difensivo e creativo allo stesso tempo: sei presente ma non sei qui, partecipi ma osservi dall'esterno, senti tutto ma ti muovi come in un sogno. Questo stato — che gli altri chiamano 'strano' o 'distante' — è in realtà il tuo sistema di riparazione interiore. La creatività esplode in modo quasi incontrollabile: musica, arte, scrittura, visioni. Lasciala fluire. Ma tieni un filo che ti riporti alla riva.",
    amore:"Agosto porta connessioni intense e fugaci — incontri che sembrano eterni in due settimane, emozioni che bruciano come stelle cadenti. Non cercare di trasformare ogni scintilla in qualcosa di permanente. Questo mese è fatto per sentire, non per costruire. Goditi la bellezza del momento senza attaccarti al risultato.",
    lavoro:"La mente creativa è al massimo — le idee arrivano senza filtro, spesso di notte, spesso in modo non lineare. Trascrivile, catturale, non lasciarle evaporare. Non è il mese dei risultati pratici, ma è il mese in cui nascono i progetti che porteranno risultati a novembre e dicembre. Semina adesso.",
    salute:"Il corpo ha bisogno di acqua — letteralmente e metaforicamente. Idratazione abbondante, nuoto, bagni, pioggia. L'elemento acqua è la tua medicina agosto. Evita ambienti chiusi e soffocanti. L'aria condizionata ti debilita più della media. Cerca l'aria aperta, anche di notte.",
    fortuna:"⭐⭐ — Fortuna nelle questioni creative e spirituali, mediocre nel pratico. Intuizioni fortunate che, se ascoltate, portano lontano. Ma le intuizioni dei Pesci in agosto vanno agite entro 24 ore — dopo evaporano."
  },
  9:{
    titolo:"Settembre — La Resa dei Conti",
    generale:"🗡️ LA RESA DEI CONTI DI SETTEMBRE. Settembre riporta i Pesci al mondo reale con una brusca doccia fredda. La deriva mistica di agosto si chiude, la nebbia si dirada, e quello che rimane è spesso più complicato di quello che si era lasciato in luglio. Settembre porta verità scomode che emergono da soli — conversazioni inevitabili, rivelazioni che non avevi cercato, specchi che non puoi girare dall'altra parte. La buona notizia: i Pesci che affrontano settembre con onestà escono dal mese con una chiarezza che non avevano da anni. La cattiva: richiede coraggio che di solito preferisci non dover usare.",
    amore:"Settembre porta chiarimenti definitivi. Una relazione che era in zona grigia trova una risposta — in un senso o nell'altro. Non cercare di rimandare ancora: la nebbia si è già diradata e entrambi sapete la verità. Il coraggio di dire e di sentire quello che è reale è l'unica cosa che può salvare ciò che vale la pena salvare.",
    lavoro:"Valutazioni e bilanci professionali. Il tuo rendimento degli ultimi mesi viene misurato — non sempre in modo favorevole. Settembre richiede responsabilità concreta: non puoi più nasconderti dietro le intenzioni o le idee brillanti. I risultati tangibili parlano più forte di tutto il resto. È il momento di dimostrare, non di promettere.",
    salute:"La salute migliora rispetto ai mesi scorsi, ma richiede attenzione attiva. Settembre è il mese giusto per iniziare controlli medici rimandati, per ascoltare sintomi trascurati, per prendere sul serio qualcosa che hai minimizzato. Il corpo parla chiaramente in questo periodo — abbi il coraggio di ascoltarlo.",
    fortuna:"⭐⭐ — Fortuna mista. Le situazioni oneste e genuine ricevono sostegno cosmico. Quelle costruite su basi fragili crollano. La fortuna di settembre premia solo chi affronta la realtà a viso aperto."
  },
  10:{
    titolo:"Ottobre — La Rinascita Silenziosa",
    generale:"Ottobre porta qualcosa di raro e prezioso per i Pesci: la rinascita silenziosa. Dopo mesi di turbolenze, crolli e rese dei conti, ottobre arriva come l'alba dopo la notte più lunga. Non è un trionfo clamoroso — i Pesci non funzionano così. È una trasformazione che avviene nell'ombra, nella quiete, nel profondo. Senti qualcosa di cambiato dentro di te che ancora non sai nominare. Una vecchia paura che non pesa più come prima. Una certezza che non avevi mai avuto. Una pace che non cerchi di spiegare. Ottobre è il mese in cui diventi la versione di te che stavi cercando da inizio anno.",
    amore:"Il cuore si apre in modo diverso — più consapevole, meno disperato. Se sei in coppia, ottobre porta una maturità relazionale nuova: meno bisogno di conferme, più capacità di stare. Se sei solo, la solitudine di questo mese ha una qualità diversa — non è vuoto, è spazio. E in quello spazio potrebbe arrivare qualcuno che non assomiglia a nessuno di quelli che hai amato prima.",
    lavoro:"Chiarezza professionale finalmente raggiunta. Sai cosa vuoi, sai cosa non vuoi, sai dove stai andando. Ottobre è il mese giusto per prendere decisioni lavorative che avevi rimandato: cambiamenti, proposte, nuovi percorsi. L'energia è più stabile che mai — usala per costruire qualcosa che duri.",
    salute:"La salute mentale migliora in modo evidente. L'ansia di fondo che accompagnava i mesi estivi si allenta. Il corpo risponde bene a routine moderate e costanti. Non strafare: la guarigione dei Pesci è lenta e profonda, non rapida e superficiale. Rispetta i tuoi tempi.",
    fortuna:"⭐⭐⭐ — Fortuna in crescita, specialmente nella seconda metà del mese. Intuizioni di ottobre particolarmente affidabili: se qualcosa ti sembra giusto, probabilmente lo è. Un incontro o un'opportunità in campo artistico o spirituale porta benefici inaspettati."
  },
  11:{
    titolo:"Novembre — Il Velo si Assottiglia",
    generale:"⚠️ IL VELO SI ASSOTTIGLIA. Novembre porta i Pesci in territorio sovrannaturale — non è una metafora. Il confine tra il mondo visibile e quello che percepisci al di là di esso diventa quasi trasparente. Sogni carichi di significato, intuizioni che si realizzano, presagi che non sai ignorare. Questa ipersensibilità è potente e destabilizzante allo stesso tempo. Novembre può portare grandi illuminazioni — o grandi crisi d'identità, a seconda di quanto sei radicato. Il rischio non è l'oscurità che arriva dall'esterno: è quella che emerge dall'interno, quella che pensavi di aver già elaborato e che invece era solo sepolta.",
    amore:"Novembre porta ossessioni emotive e attaccamenti malsani — o li rivela per quello che sono davvero. Qualcosa che ti sembrava risolto riemerge con una forza che non ti aspettavi. Una persona del passato, un rimpianto, un desiderio non detto. Non lasciare che il velo sottile di novembre ti faccia confondere passato e presente. Quello che era finito, è finito per una ragione.",
    lavoro:"Il mese porta distrazioni profonde e difficoltà di concentrazione. La mente vaga, i progetti avanzano a singhiozzo. Non è il momento per iniziare cose nuove: è il momento per chiudere, concludere, sistemare. Fai una lista delle cose in sospeso e affrontale una per una. Il senso di ordine esterno aiuterà l'ordine interno.",
    salute:"Novembre è pericoloso per la salute mentale dei Pesci più sensibili. Malinconia profonda, stati d'umore che cambiano senza preavviso, un senso di pesantezza difficile da scuotere. Non minimizzare questi segnali. Non è 'solo novembre' — è il tuo sistema che chiede aiuto. Parla con qualcuno. Esci. Muoviti. Luce, persone, movimento: i tre antidoti.",
    fortuna:"⭐ — Fortuna bassa nelle questioni pratiche. Alta — paradossalmente — nelle intuizioni e nelle visioni. Novembre porta messaggi: che tu li ascolti o li ignori dipende solo da te."
  },
  12:{
    titolo:"Dicembre — IL RITIRO SACRO",
    generale:"🌊 IL RITIRO SACRO. Dicembre chiude il cerchio — e per i Pesci, l'ultimo mese dell'anno ha una qualità che nessun altro segno conosce: la pace del ritorno. Siete il dodicesimo segno, quello che porta in sé tracce di tutti gli altri, quello che ha vissuto tutto e sa che tutto passa. Dicembre non è trionfante come per il Sagittario o strutturato come per il Capricorno. È silenzioso. Profondo. Necessario. Il ritiro di dicembre non è sconfitta — è preparazione. State raccogliendo le energie per quello che sta per iniziare. State lasciando andare quello che non serve portare nel nuovo anno. Siete, come sempre, in quel luogo tra una cosa e l'altra dove solo voi sapete stare.",
    amore:"Dicembre porta una tenerezza speciale — non la passione bruciante di altri mesi, ma qualcosa di più quieto e duraturo. La vicinanza fisica e emotiva con chi ami ha una qualità diversa: più consapevole, più grata. Se c'è qualcosa di non detto, dicembre è il mese per dirlo — con gentilezza, con coraggio, senza aspettare l'anno nuovo.",
    lavoro:"Il mese è ottimo per tirare le somme e pianificare. Non per grandi slanci operativi, ma per la riflessione strategica. Cosa ha funzionato? Cosa vuoi portare avanti? Cosa lasci andare? Le risposte che trovi in dicembre sono affidabili — la mente dei Pesci in questo periodo è sorprendentemente lucida proprio perché non ha fretta.",
    salute:"Dicembre richiede riposo, calore e nutrimento — fisico e spirituale. Non sentirti in colpa per aver bisogno di più silenzio degli altri, di più solitudine, di più lentezza. È la tua natura. Rispettarla non è debolezza: è saggezza. Il corpo ha bisogno di chiudere l'anno con delicatezza.",
    fortuna:"⭐⭐⭐ — La fortuna di dicembre per i Pesci non arriva con fanfare. Arriva silenziosa: una porta che si apre all'improvviso, una conversazione che cambia tutto, un'intuizione che orienta il 2026 nella direzione giusta. Tieniti in ascolto. Le cose più importanti di questo mese non fanno rumore."
  }
};

// Inietta Pesci nel DB_ORO_MESE a runtime
if(typeof DB_ORO_MESE !== 'undefined') DB_ORO_MESE['pesci'] = _PESCI_MESE;

// Per gli altri segni usiamo un generatore intelligente basato sui dati giornalieri
function _getMeseDB(segno, mese){
  if(DB_ORO_MESE[segno] && DB_ORO_MESE[segno][mese]) return DB_ORO_MESE[segno][mese];
  // Generatore per segni non ancora nel DB esteso
  const sg = DB.segni[segno];
  const mesiNomi = ['','Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const pianeti = {cancro:'Luna',leone:'Sole',vergine:'Mercurio',bilancia:'Venere',scorpione:'Plutone',sagittario:'Giove',capricorno:'Saturno',acquario:'Urano',pesci:'Nettuno'};
  const planetaSegno = pianeti[segno] || sg.p;
  const seed = (segno.charCodeAt(0)*31 + mese*7) % 100;
  const temiMese = [
    ['Il Risveglio','Il Movimento','La Chiarezza','L\'Azione','La Costruzione','Il Culmine'],
    ['La Revisione','La Profondità','La Trasformazione','L\'Integrazione','Il Bilancio','La Rinascita']
  ];
  const temaA = temiMese[0][mese % 6];
  const temaB = temiMese[1][mese % 6];
  const ore = DB.oroscopo[segno];
  const pickR = (arr, s) => arr[s % arr.length];
  return {
    titolo: `${mesiNomi[mese]} — ${temaA} del ${sg.n}`,
    generale: `${planetaSegno} governa questo mese portando al ${sg.n} un'energia orientata verso ${temaA.toLowerCase()}. È un periodo in cui i temi di ${temaB.toLowerCase()} emergono con particolare forza. ${pickR(ore.amore, seed+3).split('.')[0]}. Usa questa energia con saggezza.`,
    amore: `${pickR(ore.amore, seed)} ${pickR(ore.amore, seed+5)}`,
    lavoro: `${pickR(ore.lavoro, seed+1)} ${pickR(ore.lavoro, seed+4)}`,
    salute: `${pickR(ore.salute, seed+2)} ${pickR(ore.salute, seed+6)}`,
    fortuna: `${pickR(ore.fortuna, seed+3)}`
  };
}

/* ── Tab switcher Oroscopo Giorno/Mese ─────────────────────── */
function oroSwitchTab(which){
  const btnG = document.getElementById('oroTabGiorno');
  const btnM = document.getElementById('oroTabMese');
  const panG = document.getElementById('oroPannelloGiorno');
  const panM = document.getElementById('oroPannelloMese');
  if(!btnG || !btnM) return;

  const activeStyle = 'padding:10px;border-radius:12px;font-family:Cinzel,serif;font-size:12px;font-weight:700;letter-spacing:1px;cursor:pointer;border:2px solid var(--gold);background:linear-gradient(135deg,#2a1748,#160d30);color:var(--gold);box-shadow:0 0 12px rgba(212,175,55,0.25);transition:all .2s';
  const inactiveStyle = 'padding:10px;border-radius:12px;font-family:Cinzel,serif;font-size:12px;font-weight:700;letter-spacing:1px;cursor:pointer;border:2px solid rgba(42,23,72,0.8);background:rgba(42,23,72,0.3);color:var(--muted);transition:all .2s';

  if(which === 'giorno'){
    btnG.style.cssText = activeStyle;
    btnM.style.cssText = inactiveStyle;
    if(panG) panG.style.display='block';
    if(panM) panM.style.display='none';
  } else {
    btnM.style.cssText = activeStyle;
    btnG.style.cssText = inactiveStyle;
    if(panG) panG.style.display='none';
    if(panM) panM.style.display='block';
    initOroMeseSelector();
  }
}

/* ── Inizializza la griglia di selezione segno per l'oroscopo mensile ── */
function initOroMeseSelector(){
  const mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const now = new Date();
  const meseNome = mesiNomi[now.getMonth()] + ' ' + now.getFullYear();
  const dateEl = document.getElementById('oroMeseDate');
  if(dateEl) dateEl.textContent = meseNome;

  // Resetta: mostra selettore, nascondi risultato
  const selector = document.getElementById('oroMeseSelector');
  const cont = document.getElementById('oroMeseContent');
  if(selector) selector.style.display='block';
  if(cont){ cont.style.display='none'; cont.innerHTML=''; }

  // Costruisce la griglia dei 12 segni
  const grid = document.getElementById('oroMeseSegniGrid');
  if(!grid) return;
  const segniOrder = ['ariete','toro','gemelli','cancro','leone','vergine','bilancia','scorpione','sagittario','capricorno','acquario','pesci'];
  grid.innerHTML = segniOrder.map(key => {
    const sg = DB.segni[key];
    if(!sg) return '';
    return `<button onclick="oroMeseSelezionaSegno('${key}')" style="
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      gap:4px;padding:10px 6px;border-radius:12px;cursor:pointer;
      border:1px solid rgba(212,175,55,0.25);
      background:rgba(42,23,72,0.4);
      color:var(--gold);transition:all .2s;
      font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.5px;
      line-height:1.2;
      ">
      <span style="font-size:22px">${sg.s}</span>
      <span>${sg.n}</span>
    </button>`;
  }).join('');
}

/* ── Seleziona un segno e mostra l'oroscopo mensile ── */
function oroMeseSelezionaSegno(segnoKey){
  hapticFeedback();
  const selector = document.getElementById('oroMeseSelector');
  const cont = document.getElementById('oroMeseContent');
  if(!cont) return;

  const mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const now = new Date();
  const meseIdx = now.getMonth() + 1;
  const meseNome = mesiNomi[meseIdx - 1];
  const anno = now.getFullYear();

  const sg = DB.segni[segnoKey];
  if(!sg) return;
  const d = _getMeseDB(segnoKey, meseIdx);

  // Nascondi selettore, mostra risultato
  if(selector) selector.style.display='none';
  cont.style.display='block';

  // Immagine del segno (file jpg presenti nella cartella)
  const imgFile = './images/zodiaco-verticale/' + segnoKey + '.webp';

  cont.innerHTML = `
  <div style="text-align:center;padding:10px 0 20px">
    <img src="${imgFile}" alt="${sg.n}"
      style="width:100%;max-width:320px;border-radius:16px;
             box-shadow:0 0 28px rgba(212,175,55,0.35);
             border:1px solid rgba(212,175,55,0.3);
             margin-bottom:14px;display:block;margin-left:auto;margin-right:auto"
      onerror="this.style.display='none'">
    <div style="font-size:40px;filter:drop-shadow(0 0 14px rgba(212,175,55,0.6));margin-bottom:6px">${sg.s}</div>
    <div style="font-family:'Cinzel',serif;font-size:20px;color:var(--gold);letter-spacing:3px;text-transform:uppercase">${sg.n}</div>
    <div style="font-size:12px;color:var(--muted);margin-top:6px;font-family:'Cinzel',serif;letter-spacing:1px">${meseNome} ${anno}</div>
    <div style="font-size:11px;color:rgba(212,175,55,0.6);margin-top:4px">${d.titolo}</div>
  </div>
  <div class="horosec"><h4>✨ Panoramica del Mese</h4><p>${d.generale}</p></div>
  <div class="horosec"><h4>💕 Amore &amp; Relazioni</h4><p>${d.amore}</p></div>
  <div class="horosec"><h4>💼 Lavoro &amp; Finanze</h4><p>${d.lavoro}</p></div>
  <div class="horosec"><h4>🌿 Salute &amp; Benessere</h4><p>${d.salute}</p></div>
  <div class="horosec" style="border-left-color:#d4af37"><h4>🌟 Fortuna del Mese</h4><p>${d.fortuna}</p></div>
  <div style="text-align:center;margin-top:18px">
    <button class="btn btn-sec" style="font-size:11px;margin-bottom:10px"
      onclick="shareResult('oroscopo_mese','Oroscopo ${sg.n} — ${meseNome}','Scopri cosa dicono le stelle questo mese...')">📲 Condividi</button>
    <br>
    <button onclick="initOroMeseSelector()" style="
      background:transparent;border:1px solid rgba(212,175,55,0.3);
      color:var(--muted);border-radius:10px;padding:8px 16px;
      font-family:'Cinzel',serif;font-size:11px;cursor:pointer;margin-top:8px;
      ">← Cambia segno</button>
  </div>
  <p style="font-size:10px;color:#4a4262;text-align:center;margin-top:10px">✦ L'oracolo mensile si aggiorna ogni primo del mese ✦</p>
  `;
}

function engSalvaGrimorio(){
  hapticFeedback();
  const nota = ((document.getElementById('eng-grimorio-nota')||{}).value||'').trim();
  const res  = document.getElementById('eng-r-grimorio');
  if(!nota){ toast('📓 Scrivi qualcosa prima di sigillare'); return; }
  let entries=[];
  try{ entries=JSON.parse(_lsGet(GRIMORIO_KEY)||'[]'); }catch(e){}
  entries.unshift({ nota, ts: Date.now() });
  try{ _lsSet(GRIMORIO_KEY, JSON.stringify(entries)); }catch(e){}
  if(res) res.innerHTML=`<div class="eng-r-block" style="margin-top:10px"><p>📓 Sigillato nel Grimorio ✨</p></div>`;
  const el = document.getElementById('eng-grimorio-nota');
  if(el) el.value='';
  grimorioRenderList();
}

function grimorioDeleteEntry(i){
  let entries=[];
  try{ entries=JSON.parse(_lsGet(GRIMORIO_KEY)||'[]'); }catch(e){}
  entries.splice(i,1);
  try{ _lsSet(GRIMORIO_KEY,JSON.stringify(entries)); }catch(e){}
  grimorioRenderList();
}

function grimorioClearAll(){
  if(!confirm('Eliminare tutte le pagine del grimorio?')) return;
  try{ _lsSet(GRIMORIO_KEY,'[]'); }catch(e){}
  grimorioRenderList();
}

function astralRenderLogs(){
  const list = document.getElementById('astralLogList');
  const wrap = document.getElementById('astralLogListWrap');
  const cnt  = document.getElementById('astralLogCount');
  if(!list) return;
  let entries=[];
  try{ entries=JSON.parse(_lsGet(ASTRAL_KEY)||'[]'); }catch(e){}
  if(cnt) cnt.textContent = entries.length;
  if(!entries.length){ if(wrap) wrap.style.display='none'; return; }
  if(wrap) wrap.style.display='block';
  list.innerHTML = entries.map((e,i)=>`
  <div class="diary-item" style="position:relative">
  <span class="diary-date">${e.date||''} ${e.time||''} · ${e.tech||''} · Stato emotivo: ${e.emo||5}/10</span>
  ${e.visione?`<span class="diary-content" style="display:block;margin-top:5px">${e.visione.replace(/\n/g,'<br>')}</span>`:''}
  <button onclick="astralDeleteLog(${i})" style="position:absolute;top:10px;right:10px;background:transparent;border:none;color:#f87171;font-size:14px;cursor:pointer">✕</button>
  </div>
  `).join('');
}

function astralSaveLog(){
  hapticFeedback();
  const date     = (document.getElementById('astral-log-date')||{}).value||'';
  const time     = (document.getElementById('astral-log-time')||{}).value||'';
  const tech     = (document.getElementById('astral-log-tech')||{}).value||'';
  const sensaz   = ((document.getElementById('astral-log-sensazioni')||{}).value||'').trim();
  const visione  = ((document.getElementById('astral-log-visione')||{}).value||'').trim();
  const emo      = (document.getElementById('astral-log-emo')||{}).value||5;
  const note     = ((document.getElementById('astral-log-note')||{}).value||'').trim();
  const res      = document.getElementById('astral-log-result');
  if(!visione && !sensaz){ toast('🌌 Descrivi almeno le sensazioni o la visione'); return; }
  let entries=[];
  try{ entries=JSON.parse(_lsGet(ASTRAL_KEY)||'[]'); }catch(e){}
  entries.unshift({ date, time, tech, sensaz, visione, emo, note, ts: Date.now() });
  try{ _lsSet(ASTRAL_KEY, JSON.stringify(entries)); }catch(e){}
  if(res) res.innerHTML=`<div class="eng-r-block" style="margin-top:10px"><p>🌌 Esperienza sigillata nel Diario di Bordo ✨</p></div>`;
  astralRenderLogs();
}

function astralDeleteLog(i){
  let entries=[];
  try{ entries=JSON.parse(_lsGet(ASTRAL_KEY)||'[]'); }catch(e){}
  entries.splice(i,1);
  try{ _lsSet(ASTRAL_KEY,JSON.stringify(entries)); }catch(e){}
  astralRenderLogs();
}

function astralClearLogs(){
  if(!confirm('Eliminare tutti i log astrali?')) return;
  try{ _lsSet(ASTRAL_KEY,'[]'); }catch(e){}
  astralRenderLogs();
}

const ONIRO_ARCHETYPE = {
  acqua:  { arc:'Archetipo delle Emozioni & Inconscio', hint:'L\'acqua riflette il tuo stato emotivo profondo. La calma indica equilibrio; il mare in tempesta rivela emozioni represse che cercano espressione.' },
  volo:   { arc:'Archetipo della Libertà & Trascendenza', hint:'Volare in sogno simboleggia il desiderio di liberarsi dai vincoli. L\'altezza a cui voli indica il grado di aspirazone spirituale.' },
  casa:   { arc:'Archetipo del Sé & della Psiche', hint:'La casa è la tua psiche. Ogni stanza è un aspetto di te: soffitta = mente superiore, cantina = inconscio, cucina = nutrimento emotivo.' },
  animali:{ arc:'Archetipo degli Istinti & Guide Totemiche', hint:'Gli animali nel sogno portano messaggi istintivi. Il loro comportamento rispecchia una parte di te o una qualità che devi integrare.' },
  caduta: { arc:'Archetipo della Perdita di Controllo', hint:'Cadere indica ansia da prestazione o paura del fallimento. Il punto da cui cadi e come finisce rivela la natura della paura.' },
  inseguimento:{ arc:'Archetipo della Fuga & dell\'Ombra', hint:'Fuggire in sogno significa evitare qualcosa nella veglia: un\'emozione, una situazione, una parte di sé che non si vuole affrontare.' },
  morte:  { arc:'Archetipo della Trasformazione', hint:'La morte in sogno raramente è letterale: simboleggia la fine di un ciclo, una trasformazione profonda o il lasciar andare qualcosa.' },
  luce:   { arc:'Archetipo dell\'Illuminazione & del Sé Superiore', hint:'La luce rappresenta consapevolezza, guida divina e risveglio. La sua direzione e intensità indicano la fonte della rivelazione.' }
};
let _oniroSym = null;

function oniroSelectSymbol(sym, el){
  _oniroSym = sym;
  document.querySelectorAll('.oniro-sym-btn').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  const prev = document.getElementById('oniro-sym-preview');
  const arc  = document.getElementById('oniro-sym-archetipo');
  const hint = document.getElementById('oniro-sym-hint');
  const data = ONIRO_ARCHETYPE[sym];
  if(prev && data){
  prev.style.display='block';
  if(arc)  arc.textContent  = data.arc;
  if(hint) hint.textContent = data.hint;
  }
}

function engOniro(){
  hapticFeedback();
  const sogno = ((document.getElementById('eng-sogno-t')||{}).value||'').trim();
  const res   = document.getElementById('eng-r-oniro');
  if(!sogno){ toast('🌙 Descrivi il tuo sogno prima di decifrarlo'); return; }
  const data  = _oniroSym ? ONIRO_ARCHETYPE[_oniroSym] : null;
  const arcLabel = data ? data.arc : 'Archetipo Universale';
  const arcHint  = data ? data.hint : 'Il sogno porta un messaggio simbolico unico per te.';
  const interp   = [
  `Il tuo sogno parla attraverso il linguaggio dell'${arcLabel}.`,
  arcHint,
  `Le immagini che hai vissuto — "${sogno.slice(0,80).replace(/\n/g,' ')}${sogno.length>80?'…':''}" — sono specchi dell'anima, non eventi letterali.`,
  `Chiediti: quale parte della tua vita quotidiana risuona con queste immagini? Cosa stai evitando, desiderando o integrando?`
  ].join(' ');
  if(res) res.innerHTML=`
  <div class="eng-r-block" style="margin-top:10px">
  <p style="font-family:'Cinzel',serif;font-size:11px;color:var(--gold);margin-bottom:8px">${arcLabel.toUpperCase()}</p>
  <p>${interp}</p>
  </div>
  `;
}

function toggleBgMusic() {
  try {

  if (!BgMusic.isPlaying) {

  if (!_audioCtx) {
  try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  if (_audioCtx && _audioCtx.state === 'suspended') {
  _audioCtx.resume().catch(()=>{});
  }
  BgMusic.play();
  } else {
  BgMusic.stop();
  }

  const btn = document.getElementById('musicBtn');
  const mainBtn = document.getElementById('mainAudioBtn');
  if (BgMusic.isPlaying) {
  if (btn) btn.classList.add('playing');
  if (mainBtn) { mainBtn.textContent = '🔇 DISATTIVA MUSICA MISTICA'; }
  } else {
  if (btn) btn.classList.remove('playing');
  if (mainBtn) { mainBtn.textContent = '🔊 ATTIVA MUSICA MISTICA'; }
  }
  } catch(e) {
  console.warn('toggleBgMusic error:', e);
  }
}

function dismissRating(){
  const prompt = document.getElementById('ratingPrompt');
  if(prompt) prompt.classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  if (typeof initApp === 'function') {
    setTimeout(initApp, 300);
  } else {
    console.log("Mystica avviata correttamente.");
  }
});
