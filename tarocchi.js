function startTarot(){

  if(S.tMode === 'approfondita' && !isPremium()){
  requirePremium(()=>startTarot());
  return;
  }

  _doStartTarot();
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

