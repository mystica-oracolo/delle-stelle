
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
  const startTop=-6+Math.random()*30;
  const startLeft=-6+Math.random()*45;
  const dx=(60+Math.random()*55)+'vw';
  const dy=(75+Math.random()*55)+'vh';
  p.style.cssText=`
  top:${startTop}%;
  left:${startLeft}%;
  width:${size}px;height:${size}px;
  background:${color};
  box-shadow:0 0 ${size*3}px ${size}px ${color};
  --dx:${dx};--dy:${dy};
  animation-duration:${dur}s;
  animation-delay:${Math.random()*dur}s;
  `;
  $('#particles').appendChild(p);
  setTimeout(()=>p.remove(),(dur+6)*1000);
}
function shootingStar(){
  const s=document.createElement('div');
  s.className='shooting-star';
  const startTop=-8+Math.random()*25;
  const startLeft=-10+Math.random()*30;
  const distVw=75+Math.random()*45;
  const distVh=85+Math.random()*55;
  const dxPx=distVw/100*window.innerWidth;
  const dyPx=distVh/100*window.innerHeight;
  const ang=Math.atan2(dyPx,dxPx)*180/Math.PI;
  const dur=0.85+Math.random()*0.6;
  s.style.cssText=`
  top:${startTop}%;
  left:${startLeft}%;
  --dx:${distVw}vw;--dy:${distVh}vh;--ang:${ang}deg;
  animation-duration:${dur}s;
  `;
  $('#particles').appendChild(s);
  setTimeout(()=>s.remove(),(dur+1)*1000);
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
  // Nascondi sempre il card e popola i campi, anche se segno non ancora riconosciuto
  const _editCard=$('#cardEditProfilo');
  if(_editCard) _editCard.style.display='none';
  if($('#inpName'))      $('#inpName').value=p.name||'';
  if($('#inpDate'))      $('#inpDate').value=p.date||'';
  if($('#inpGender'))    $('#inpGender').value=p.gender||'';
  if($('#inpInterests')) $('#inpInterests').value=p.interests||'';

  // Self-healing: se il segno manca o non esiste in DB, ricalcolalo dalla data
  if(!DB.segni[p.segno] && p.date){
    p.segno = segnoFromDate(p.date);
    try{ _lsSet(CFG.kProfilo, JSON.stringify(p)); }catch(e){}
  }
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

  S.segno=p.segno;
}

const _memStore = {};
let _useLS = (function(){
  try{ localStorage.setItem('__t__','1'); localStorage.removeItem('__t__'); return true; }
  catch(e){ return false; }
})();

function _lsGet(key){
  if(_useLS){ try{ return localStorage.getItem(key); }catch(e){ _useLS=false; } }
  try{ const v=sessionStorage.getItem(key); if(v!==null) return v; }catch(e){}
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
  try{ sessionStorage.setItem(CFG.kProfilo,JSON.stringify(p)); }catch(e){}
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
  const genderEl=document.getElementById('wGender');
  const gender=genderEl ? genderEl.value : '';
  const p={name,date,segno,gender};
  _lsSet(CFG.kProfilo,JSON.stringify(p));
  try{ sessionStorage.setItem(CFG.kProfilo,JSON.stringify(p)); }catch(e){}

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
    // Nuovo utente: apre il modal welcome via JS
    // Mostra anche la card di profilo come fallback visivo
    const editCard = document.getElementById('cardEditProfilo');
    if(editCard) editCard.style.display = 'block';
    document.getElementById('modalWelcome').classList.add('open');
    document.getElementById('app').style.visibility='visible';
    return;
  }
  try{
  const p=JSON.parse(raw);
  applyProfile(p);
  $('#modalWelcome').classList.remove('open');
  document.getElementById('app').style.visibility='visible';
  }catch(e){ _lsRemove(CFG.kProfilo); document.getElementById('modalWelcome').classList.add('open'); document.getElementById('app').style.visibility='visible'; }
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
  const colors=['#d4af37','#d4af37cc','#ffffffcc','#ffffff'];
  const sizes=[2,3,2.5,1.8];
  for(let i=0;i<18;i++)
  setTimeout(()=>particle(rnd(sizes),rnd(colors),5+Math.random()*6),i*200);
  setInterval(()=>{
  if(Math.random()>.15) particle(rnd(sizes),rnd(colors),5+Math.random()*6);
  },650);
  setInterval(()=>{
  if(Math.random()>.55) shootingStar();
  },4500);
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



/* ===== Lazy chunk loader ===== */
window._loadedChunks = window._loadedChunks || {};
function _loadChunk(name){
  if(window._loadedChunks[name]) return window._loadedChunks[name];
  var p = new Promise(function(resolve, reject){
    var s = document.createElement('script');
    s.src = name + '.js';
    s.onload = function(){ resolve(); };
    s.onerror = function(){ reject(new Error('Errore caricamento ' + name)); };
    document.body.appendChild(s);
  });
  window._loadedChunks[name] = p;
  return p;
}


/* ===== Stub di lazy-load: queste funzioni vengono sostituite con l'implementazione reale al primo utilizzo ===== */


// chunk: tarocchi.js
function startTarot(...args){ return _loadChunk('tarocchi').then(()=> window.startTarot.apply(window,args)); }
function _doStartTarot(...args){ return _loadChunk('tarocchi').then(()=> window._doStartTarot.apply(window,args)); }
function _rr(...args){ return _loadChunk('tarocchi').then(()=> window._rr.apply(window,args)); }
function drawCardBack(...args){ return _loadChunk('tarocchi').then(()=> window.drawCardBack.apply(window,args)); }
function drawCardFront(...args){ return _loadChunk('tarocchi').then(()=> window.drawCardFront.apply(window,args)); }
function _initCardBacks(...args){ return _loadChunk('tarocchi').then(()=> window._initCardBacks.apply(window,args)); }
function pickCard(...args){ return _loadChunk('tarocchi').then(()=> window.pickCard.apply(window,args)); }
function showResult(...args){ return _loadChunk('tarocchi').then(()=> window.showResult.apply(window,args)); }
function buildInterpret(...args){ return _loadChunk('tarocchi').then(()=> window.buildInterpret.apply(window,args)); }
function buildSynthesis(...args){ return _loadChunk('tarocchi').then(()=> window.buildSynthesis.apply(window,args)); }
function resetTarot(...args){ return _loadChunk('tarocchi').then(()=> window.resetTarot.apply(window,args)); }
function saveTarot(...args){ return _loadChunk('tarocchi').then(()=> window.saveTarot.apply(window,args)); }

// chunk: consulente.js
function selectConsultTopic(...args){ return _loadChunk('consulente').then(()=> window.selectConsultTopic.apply(window,args)); }
function openConsulente(...args){ return _loadChunk('consulente').then(()=> window.openConsulente.apply(window,args)); }
function _detectKeywords(...args){ return _loadChunk('consulente').then(()=> window._detectKeywords.apply(window,args)); }
function _detectSoggetto(...args){ return _loadChunk('consulente').then(()=> window._detectSoggetto.apply(window,args)); }
function _getRispostaKeyword(...args){ return _loadChunk('consulente').then(()=> window._getRispostaKeyword.apply(window,args)); }
function runConsulente(...args){ return _loadChunk('consulente').then(()=> window.runConsulente.apply(window,args)); }

// chunk: oracoli.js
function initDelfiIcons(...args){ return _loadChunk('oracoli').then(()=> window.initDelfiIcons.apply(window,args)); }
function resetDelfi(...args){ return _loadChunk('oracoli').then(()=> window.resetDelfi.apply(window,args)); }
function selRito(...args){ return _loadChunk('oracoli').then(()=> window.selRito.apply(window,args)); }
function consultaDelfi(...args){ return _loadChunk('oracoli').then(()=> window.consultaDelfi.apply(window,args)); }
function openOracoloHome(...args){ return _loadChunk('oracoli').then(()=> window.openOracoloHome.apply(window,args)); }
function navMagia(...args){ return _loadChunk('oracoli').then(()=> window.navMagia.apply(window,args)); }
function _openMagiaPanel(...args){ return _loadChunk('oracoli').then(()=> window._openMagiaPanel.apply(window,args)); }
function _renderEnciclopediaSVG(...args){ return _loadChunk('oracoli').then(()=> window._renderEnciclopediaSVG.apply(window,args)); }
function openOracolo(...args){ return _loadChunk('oracoli').then(()=> window.openOracolo.apply(window,args)); }
function _openOracoloPanel(...args){ return _loadChunk('oracoli').then(()=> window._openOracoloPanel.apply(window,args)); }
function backToOracoli(...args){ return _loadChunk('oracoli').then(()=> window.backToOracoli.apply(window,args)); }

// chunk: totem.js
function resetTotem(...args){ return _loadChunk('totem').then(()=> window.resetTotem.apply(window,args)); }
function totemAnswer(...args){ return _loadChunk('totem').then(()=> window.totemAnswer.apply(window,args)); }
function _calcTotem(...args){ return _loadChunk('totem').then(()=> window._calcTotem.apply(window,args)); }
function _showTotemResult(...args){ return _loadChunk('totem').then(()=> window._showTotemResult.apply(window,args)); }

// chunk: angeli.js
function resetAngeli(...args){ return _loadChunk('angeli').then(()=> window.resetAngeli.apply(window,args)); }
function calcAngelo(...args){ return _loadChunk('angeli').then(()=> window.calcAngelo.apply(window,args)); }
function _showAngeloResult(...args){ return _loadChunk('angeli').then(()=> window._showAngeloResult.apply(window,args)); }

// chunk: geomanzia.js
function resetGeomanzia(...args){ return _loadChunk('geomanzia').then(()=> window.resetGeomanzia.apply(window,args)); }
function geoTapRow(...args){ return _loadChunk('geomanzia').then(()=> window.geoTapRow.apply(window,args)); }
function geoCalcFigura(...args){ return _loadChunk('geomanzia').then(()=> window.geoCalcFigura.apply(window,args)); }

// chunk: numerologia.js
function resetNumerologia(...args){ return _loadChunk('numerologia').then(()=> window.resetNumerologia.apply(window,args)); }
function numSelectTab(...args){ return _loadChunk('numerologia').then(()=> window.numSelectTab.apply(window,args)); }
function numReduce(...args){ return _loadChunk('numerologia').then(()=> window.numReduce.apply(window,args)); }
function calcSentiero(...args){ return _loadChunk('numerologia').then(()=> window.calcSentiero.apply(window,args)); }
function calcDestino(...args){ return _loadChunk('numerologia').then(()=> window.calcDestino.apply(window,args)); }
function _showNumResult(...args){ return _loadChunk('numerologia').then(()=> window._showNumResult.apply(window,args)); }

// chunk: ore-specchio.js
function resetOreSpecchio(...args){ return _loadChunk('ore-specchio').then(()=> window.resetOreSpecchio.apply(window,args)); }
function oreDetectNow(...args){ return _loadChunk('ore-specchio').then(()=> window.oreDetectNow.apply(window,args)); }
function calcOreSpecchio(...args){ return _loadChunk('ore-specchio').then(()=> window.calcOreSpecchio.apply(window,args)); }

// chunk: luna.js
function getLunaPhase(...args){ return _loadChunk('luna').then(()=> window.getLunaPhase.apply(window,args)); }
function _renderLuna(...args){ return _loadChunk('luna').then(()=> window._renderLuna.apply(window,args)); }
function calcLunaOggi(...args){ return _loadChunk('luna').then(()=> window.calcLunaOggi.apply(window,args)); }
function calcLunaData(...args){ return _loadChunk('luna').then(()=> window.calcLunaData.apply(window,args)); }
function resetLuna(...args){ return _loadChunk('luna').then(()=> window.resetLuna.apply(window,args)); }
function getJulianDay(...args){ return _loadChunk('luna').then(()=> window.getJulianDay.apply(window,args)); }
function normDeg(...args){ return _loadChunk('luna').then(()=> window.normDeg.apply(window,args)); }
function calcPlanetPos(...args){ return _loadChunk('luna').then(()=> window.calcPlanetPos.apply(window,args)); }
function lonToSegno(...args){ return _loadChunk('luna').then(()=> window.lonToSegno.apply(window,args)); }

// chunk: pianeti.js
function calcAspetti(...args){ return _loadChunk('pianeti').then(()=> window.calcAspetti.apply(window,args)); }
function resetPianeti(...args){ return _loadChunk('pianeti').then(()=> window.resetPianeti.apply(window,args)); }
function calcPianeti(...args){ return _loadChunk('pianeti').then(()=> window.calcPianeti.apply(window,args)); }
function calcPianetiData(...args){ return _loadChunk('pianeti').then(()=> window.calcPianetiData.apply(window,args)); }
function _renderPianeti(...args){ return _loadChunk('pianeti').then(()=> window._renderPianeti.apply(window,args)); }

// chunk: rune.js
function resetRune(...args){ return _loadChunk('rune').then(()=> window.resetRune.apply(window,args)); }
function runeSelectMode(...args){ return _loadChunk('rune').then(()=> window.runeSelectMode.apply(window,args)); }
function runeDraw(...args){ return _loadChunk('rune').then(()=> window.runeDraw.apply(window,args)); }
function _runeRandom(...args){ return _loadChunk('rune').then(()=> window._runeRandom.apply(window,args)); }
function _runeDrawSingola(...args){ return _loadChunk('rune').then(()=> window._runeDrawSingola.apply(window,args)); }
function _runeDrawTre(...args){ return _loadChunk('rune').then(()=> window._runeDrawTre.apply(window,args)); }

// chunk: iching.js
function ichingThrowAnimated(...args){ return _loadChunk('iching').then(()=> window.ichingThrowAnimated.apply(window,args)); }
function ichingThrow(...args){ return _loadChunk('iching').then(()=> window.ichingThrow.apply(window,args)); }
function resetIching(...args){ return _loadChunk('iching').then(()=> window.resetIching.apply(window,args)); }
function _throwThreeCoins(...args){ return _loadChunk('iching').then(()=> window._throwThreeCoins.apply(window,args)); }
function _renderIchingLine(...args){ return _loadChunk('iching').then(()=> window._renderIchingLine.apply(window,args)); }
function _linesToHexNum(...args){ return _loadChunk('iching').then(()=> window._linesToHexNum.apply(window,args)); }
function _getMutatedHex(...args){ return _loadChunk('iching').then(()=> window._getMutatedHex.apply(window,args)); }
function _hexLineSVG(...args){ return _loadChunk('iching').then(()=> window._hexLineSVG.apply(window,args)); }
function _renderIchingResult(...args){ return _loadChunk('iching').then(()=> window._renderIchingResult.apply(window,args)); }

// chunk: rituali.js
function initMagia(...args){ return _loadChunk('rituali').then(()=> window.initMagia.apply(window,args)); }
function toggleRituale(...args){ return _loadChunk('rituali').then(()=> window.toggleRituale.apply(window,args)); }
function _libroShowScreen(...args){ return _loadChunk('rituali').then(()=> window._libroShowScreen.apply(window,args)); }
function libroGotoIstruzioni(...args){ return _loadChunk('rituali').then(()=> window.libroGotoIstruzioni.apply(window,args)); }
function libroGotoDomanda(...args){ return _loadChunk('rituali').then(()=> window.libroGotoDomanda.apply(window,args)); }
function resetLibro(...args){ return _loadChunk('rituali').then(()=> window.resetLibro.apply(window,args)); }
function apriLibro(...args){ return _loadChunk('rituali').then(()=> window.apriLibro.apply(window,args)); }
function altraRisposta(...args){ return _loadChunk('rituali').then(()=> window.altraRisposta.apply(window,args)); }
function initAstrale(...args){ return _loadChunk('rituali').then(()=> window.initAstrale.apply(window,args)); }
function scrollChapter(...args){ return _loadChunk('rituali').then(()=> window.scrollChapter.apply(window,args)); }
function toggleTheta(...args){ return _loadChunk('rituali').then(()=> window.toggleTheta.apply(window,args)); }
function updateThetaVol(...args){ return _loadChunk('rituali').then(()=> window.updateThetaVol.apply(window,args)); }
function changeThetaFreq(...args){ return _loadChunk('rituali').then(()=> window.changeThetaFreq.apply(window,args)); }
function _wiccaCalcSabbat(...args){ return _loadChunk('rituali').then(()=> window._wiccaCalcSabbat.apply(window,args)); }
function wiccaSelIntent(...args){ return _loadChunk('rituali').then(()=> window.wiccaSelIntent.apply(window,args)); }
function resetWicca(...args){ return _loadChunk('rituali').then(()=> window.resetWicca.apply(window,args)); }
function calcWicca(...args){ return _loadChunk('rituali').then(()=> window.calcWicca.apply(window,args)); }
function alchSelStage(...args){ return _loadChunk('rituali').then(()=> window.alchSelStage.apply(window,args)); }
function alchRandom(...args){ return _loadChunk('rituali').then(()=> window.alchRandom.apply(window,args)); }
function calcAlchimia(...args){ return _loadChunk('rituali').then(()=> window.calcAlchimia.apply(window,args)); }
function resetAlchimia(...args){ return _loadChunk('rituali').then(()=> window.resetAlchimia.apply(window,args)); }
function kabSelSeph(...args){ return _loadChunk('rituali').then(()=> window.kabSelSeph.apply(window,args)); }
function kabRandom(...args){ return _loadChunk('rituali').then(()=> window.kabRandom.apply(window,args)); }
function calcCabala(...args){ return _loadChunk('rituali').then(()=> window.calcCabala.apply(window,args)); }
function resetCabala(...args){ return _loadChunk('rituali').then(()=> window.resetCabala.apply(window,args)); }
function herSelPrincipio(...args){ return _loadChunk('rituali').then(()=> window.herSelPrincipio.apply(window,args)); }
function herRandom(...args){ return _loadChunk('rituali').then(()=> window.herRandom.apply(window,args)); }
function calcErmetismo(...args){ return _loadChunk('rituali').then(()=> window.calcErmetismo.apply(window,args)); }
function resetErmetismo(...args){ return _loadChunk('rituali').then(()=> window.resetErmetismo.apply(window,args)); }
function necroSelReame(...args){ return _loadChunk('rituali').then(()=> window.necroSelReame.apply(window,args)); }
function necroRandom(...args){ return _loadChunk('rituali').then(()=> window.necroRandom.apply(window,args)); }
function calcNegromanzia(...args){ return _loadChunk('rituali').then(()=> window.calcNegromanzia.apply(window,args)); }
function resetNegromanzia(...args){ return _loadChunk('rituali').then(()=> window.resetNegromanzia.apply(window,args)); }
function resetBibliomanzia(...args){ return _loadChunk('rituali').then(()=> window.resetBibliomanzia.apply(window,args)); }
function selBiblioMode(...args){ return _loadChunk('rituali').then(()=> window.selBiblioMode.apply(window,args)); }
function calcBiblioTasseo(...args){ return _loadChunk('rituali').then(()=> window.calcBiblioTasseo.apply(window,args)); }
function _generaSigilloSVG(...args){ return _loadChunk('rituali').then(()=> window._generaSigilloSVG.apply(window,args)); }
function _scoreSigillo(...args){ return _loadChunk('rituali').then(()=> window._scoreSigillo.apply(window,args)); }
function trovaSigilloSalomone(...args){ return _loadChunk('rituali').then(()=> window.trovaSigilloSalomone.apply(window,args)); }
function _renderSigillo(...args){ return _loadChunk('rituali').then(()=> window._renderSigillo.apply(window,args)); }
function resetSigillo(...args){ return _loadChunk('rituali').then(()=> window.resetSigillo.apply(window,args)); }

// chunk: extra.js
function dreamSelectEmo(...args){ return _loadChunk('extra').then(()=> window.dreamSelectEmo.apply(window,args)); }
function renderDreamJournalList(...args){ return _loadChunk('extra').then(()=> window.renderDreamJournalList.apply(window,args)); }
function engDreamJournal(...args){ return _loadChunk('extra').then(()=> window.engDreamJournal.apply(window,args)); }
function dreamDeleteEntry(...args){ return _loadChunk('extra').then(()=> window.dreamDeleteEntry.apply(window,args)); }
function dreamClearAll(...args){ return _loadChunk('extra').then(()=> window.dreamClearAll.apply(window,args)); }
function grimorioRenderList(...args){ return _loadChunk('extra').then(()=> window.grimorioRenderList.apply(window,args)); }
function spazioSelectErbe(...args){ return _loadChunk('extra').then(()=> window.spazioSelectErbe.apply(window,args)); }
function spazioSelectRit(...args){ return _loadChunk('extra').then(()=> window.spazioSelectRit.apply(window,args)); }
function fsSelectStanza(...args){ return _loadChunk('extra').then(()=> window.fsSelectStanza.apply(window,args)); }
function spazioSelectElem(...args){ return _loadChunk('extra').then(()=> window.spazioSelectElem.apply(window,args)); }
function engErbe(...args){ return _loadChunk('extra').then(()=> window.engErbe.apply(window,args)); }
function engPurifSpazio(...args){ return _loadChunk('extra').then(()=> window.engPurifSpazio.apply(window,args)); }
function engFengshui(...args){ return _loadChunk('extra').then(()=> window.engFengshui.apply(window,args)); }
function engElementi(...args){ return _loadChunk('extra').then(()=> window.engElementi.apply(window,args)); }
function engMalaInc(...args){ return _loadChunk('extra').then(()=> window.engMalaInc.apply(window,args)); }
function engMalaReset(...args){ return _loadChunk('extra').then(()=> window.engMalaReset.apply(window,args)); }
function pendoloDrawStatic(...args){ return _loadChunk('extra').then(()=> window.pendoloDrawStatic.apply(window,args)); }
function _pendoloAnimate(...args){ return _loadChunk('extra').then(()=> window._pendoloAnimate.apply(window,args)); }
function _pendoloShowAnswer(...args){ return _loadChunk('extra').then(()=> window._pendoloShowAnswer.apply(window,args)); }
function pendoloConsulta(...args){ return _loadChunk('extra').then(()=> window.pendoloConsulta.apply(window,args)); }
function pendoloFerma(...args){ return _loadChunk('extra').then(()=> window.pendoloFerma.apply(window,args)); }
function _getMeseDB(...args){ return _loadChunk('extra').then(()=> window._getMeseDB.apply(window,args)); }
function oroSwitchTab(...args){ return _loadChunk('extra').then(()=> window.oroSwitchTab.apply(window,args)); }
function initOroMeseSelector(...args){ return _loadChunk('extra').then(()=> window.initOroMeseSelector.apply(window,args)); }
function oroMeseSelezionaSegno(...args){ return _loadChunk('extra').then(()=> window.oroMeseSelezionaSegno.apply(window,args)); }
function engSalvaGrimorio(...args){ return _loadChunk('extra').then(()=> window.engSalvaGrimorio.apply(window,args)); }
function grimorioDeleteEntry(...args){ return _loadChunk('extra').then(()=> window.grimorioDeleteEntry.apply(window,args)); }
function grimorioClearAll(...args){ return _loadChunk('extra').then(()=> window.grimorioClearAll.apply(window,args)); }
function astralRenderLogs(...args){ return _loadChunk('extra').then(()=> window.astralRenderLogs.apply(window,args)); }
function astralSaveLog(...args){ return _loadChunk('extra').then(()=> window.astralSaveLog.apply(window,args)); }
function astralDeleteLog(...args){ return _loadChunk('extra').then(()=> window.astralDeleteLog.apply(window,args)); }
function astralClearLogs(...args){ return _loadChunk('extra').then(()=> window.astralClearLogs.apply(window,args)); }
function oniroSelectSymbol(...args){ return _loadChunk('extra').then(()=> window.oniroSelectSymbol.apply(window,args)); }
function engOniro(...args){ return _loadChunk('extra').then(()=> window.engOniro.apply(window,args)); }
function toggleBgMusic(...args){ return _loadChunk('extra').then(()=> window.toggleBgMusic.apply(window,args)); }
function dismissRating(...args){ return _loadChunk('extra').then(()=> window.dismissRating.apply(window,args)); }

// ═══ AUTO-INIT ═══
// initApp() non veniva chiamata da nessun file esterno.
// core.js viene caricato con defer, quindi il DOM è già pronto
// quando questo codice gira — ma usiamo la guardia readyState
// per sicurezza assoluta (es. cache SW che serve il file velocissimo).
(function(){
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ if(typeof initApp==='function') initApp(); });
  } else {
    if(typeof initApp==='function') initApp();
  }
})();


(function(){
  function safeQuery(sel, root){ try { return (root||document).querySelector(sel); } catch(e){ return null; } }
  function safeById(id){ try { return document.getElementById(id); } catch(e){ return null; } }
  function safeScrollTop(){ try { window.scrollTo({top:0, behavior:"smooth"}); } catch(e){ try { window.scrollTo(0,0); } catch(_){} } }
  function safeScrollInto(el){ if(!el) return; try { el.scrollIntoView({behavior:"smooth", block:"start"}); } catch(e){ try { el.scrollIntoView(); } catch(_){} } }
  const oldNavMagia = window.navMagia;
  window.navMagia = function(v, isBack=false){
    try { if (typeof oldNavMagia === 'function') return oldNavMagia(v, isBack); }
    catch(e){ console.warn('navMagia fallback', e); }
    try { if(!isBack) safeScrollTop(); } catch(e){}
    const fn = {bianca:'navMagiabianca', rossa:'navMagiarossa', nera:'navMagianera', malocchio:'navMagiamalocchio'}[v];
    if(fn && typeof window[fn]==='function') return window[fn]();
  };
  const oldInitMagia = window.initMagia;
  window.initMagia = function(){
    try {
      if (window.__mysticaMagiaInited) return;
      window.__mysticaMagiaInited = true;
      if (typeof oldInitMagia === 'function') oldInitMagia();
      const view = safeById('view-magia');
      if(!view) return;
      const tabs = view.querySelectorAll('.magia-tab');
      const panels = view.querySelectorAll('.magia-panel');
      tabs.forEach(tab => tab.addEventListener('click', () => {
        try{
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          const target = safeQuery('.magia-panel[data-tab="' + (tab.dataset.panel||'') + '"]', view);
          if(target) target.classList.add('active');
        }catch(e){ console.warn('magia tab error', e); }
      }));
    } catch(e){ console.warn('initMagia fallback', e); }
  };
  const oldToggleRituale = window.toggleRituale;
  window.toggleRituale = function(el){
    try {
      if(!el) return;
      const cards = document.querySelectorAll('.magia-ritual');
      const isOpen = el.classList.contains('open');
      cards.forEach(c => { if(c !== el) c.classList.remove('open'); });
      el.classList.toggle('open');
      if(!isOpen){
        safeScrollInto(el);
      }
      return;
    } catch(e){
      console.warn('toggleRituale fallback', e);
      try { if(typeof oldToggleRituale === 'function') return oldToggleRituale(el); } catch(_){}
    }
  };
  ['bianca','rossa','nera','malocchio'].forEach(k=>{
    const name = 'navMagia'+k;
    if(typeof window[name] !== 'function') return;
    const orig = window[name];
    window[name] = function(){
      try { const r = orig.apply(this, arguments); safeScrollTop(); return r; }
      catch(e){ console.warn(name+' fallback', e); safeScrollTop(); }
    };
  });
})();

