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



(function(){
  let _magiaInitPatched=false;
  const _oldInitMagia=window.initMagia;
  window.initMagia=function(){ if(_magiaInitPatched) return; _magiaInitPatched=true; try{ if(typeof _oldInitMagia==='function') _oldInitMagia(); }catch(e){} };
  const _oldToggleRituale=window.toggleRituale;
  window.toggleRituale=function(el){ try{ if(!el) return; document.querySelectorAll('.magia-ritual').forEach(x=>{ if(x!==el) x.classList.remove('open'); }); el.classList.toggle('open'); try{ el.scrollIntoView({behavior:'smooth', block:'start'}); }catch(_){ try{ el.scrollIntoView(); }catch(__){} } }catch(e){ try{ if(typeof _oldToggleRituale==='function') return _oldToggleRituale(el); }catch(_){} } };
})();
