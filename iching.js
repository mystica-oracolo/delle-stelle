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

