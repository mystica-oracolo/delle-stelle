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

