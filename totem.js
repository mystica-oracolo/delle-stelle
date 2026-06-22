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

