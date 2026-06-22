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

