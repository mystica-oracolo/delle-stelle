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
