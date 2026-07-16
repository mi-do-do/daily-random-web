const app = document.querySelector('#app');

const foods = [
  ['김치찌개','한식','뜨끈하고 든든한 국물이 필요한 날이에요.'],['된장찌개','한식','구수하고 편안한 한 끼가 잘 어울려요.'],['제육볶음','한식','매콤하게 기운을 끌어올리기 좋은 메뉴예요.'],['불고기','한식','달짝지근한 양념으로 든든하게 채워봐요.'],['삼겹살','한식','오늘은 제대로 굽는 맛이 필요한 날이에요.'],['갈비탕','한식','맑고 진한 국물로 속을 따뜻하게 달래봐요.'],['부대찌개','한식','푸짐하고 자극적인 국물이 당기는 날이에요.'],['콩나물국밥','한식','가볍지만 속이 풀리는 한 그릇이에요.'],['닭갈비','한식','매콤한 철판 감성으로 분위기를 바꿔봐요.'],['보쌈','한식','부드러운 고기와 쌈 조합이 든든한 선택이에요.'],['감자탕','한식','푸짐한 뼈와 얼큰한 국물로 채워봐요.'],['잡채','한식','고소하고 부드러운 당면 한 접시가 잘 어울려요.'],['닭볶음탕','한식','매콤한 양념과 포근한 감자가 잘 맞아요.'],['육회','한식','신선하고 고소한 한 접시가 당기는 날이에요.'],['삼계탕','한식','부드러운 닭고기와 따뜻한 국물이 잘 어울려요.'],['냉면','한식','시원한 면 한 그릇으로 깔끔하게 가봐요.'],
  ['짜장면','중식','오늘은 고민 없이 익숙한 맛으로 가도 좋아요.'],['짬뽕','중식','칼칼한 국물이 생각나는 날에 딱이에요.'],['탕수육','중식','바삭하고 달콤한 메뉴로 기분을 올려봐요.'],['마라탕','중식','입맛을 깨우는 강한 한 방이 필요한 순간이에요.'],['마파두부','중식','얼얼하고 고소한 맛이 밥과 잘 어울려요.'],['볶음밥','중식','간단하지만 확실하게 든든한 선택이에요.'],['깐풍기','중식','바삭한 닭고기와 매콤달콤한 소스가 잘 맞아요.'],['우육면','중식','진한 고기 국물과 면으로 든든하게 가봐요.'],
  ['초밥','일식','가볍지만 기분 좋은 한 끼로 추천해요.'],['돈까스','일식','바삭한 튀김옷과 든든한 한 접시가 좋아요.'],['우동','일식','부드러운 면과 따뜻한 국물이 편안한 선택이에요.'],['규동','일식','짭조름한 소고기 덮밥으로 빠르게 든든해져요.'],['가츠동','일식','돈까스와 달걀 덮밥 조합은 실패하기 어려워요.'],['야키소바','일식','짭짤하고 고소한 볶음면으로 즐겨봐요.'],['카레라이스','일식','진한 카레 한 접시면 오늘 식사는 정리돼요.'],['텐동','일식','바삭한 튀김과 달큰한 소스가 잘 어울려요.'],
  ['파스타','양식','조금 다른 분위기의 식사를 하고 싶은 날이에요.'],['스테이크','양식','스스로에게 제대로 된 한 끼를 줘도 좋아요.'],['피자','양식','나눠 먹어도 혼자 즐겨도 좋은 선택이에요.'],['리조또','양식','부드럽고 고소한 한 그릇이 잘 어울려요.'],['오믈렛','양식','가볍지만 기분 좋은 식사로 괜찮아요.'],['그라탱','양식','치즈가 녹아든 따뜻한 메뉴가 필요한 날이에요.'],['라자냐','양식','겹겹이 진한 소스와 치즈가 든든한 선택이에요.'],['바비큐립','양식','오늘은 조금 과감한 고기 메뉴도 괜찮아요.'],
  ['떡볶이','분식','매콤달콤하게 기분 전환이 필요한 날 같아요.'],['김밥','분식','간단하지만 은근히 든든한 메뉴예요.'],['라면','분식','간단하지만 확실히 만족스러운 한 그릇이에요.'],['라볶이','분식','분식 감성을 제대로 채우기 좋은 날이에요.'],['순대','분식','쫄깃하고 고소한 분식 조합이 떠오르는 날이에요.'],['튀김','분식','바삭한 한 입으로 허전함을 채워봐요.'],['어묵탕','분식','따뜻한 국물과 간단한 식사가 필요해 보여요.'],['칼국수','분식','담백한 국물과 면이 편안하게 맞을 거예요.'],
  ['햄버거','패스트푸드','빠르고 확실하게 배를 채우기 좋은 선택이에요.'],['치킨','패스트푸드','바삭한 한 입으로 하루를 마무리해봐요.'],['핫도그','패스트푸드','간단하지만 기분 좋은 길거리 감성이 있어요.'],['타코','패스트푸드','손에 들고 가볍게 즐기기 좋은 메뉴예요.'],['부리토','패스트푸드','한 손에 든든함을 꽉 채우는 선택이에요.'],['케밥','패스트푸드','고기와 채소를 빠르게 챙기기 좋아요.'],['프렌치후라이','패스트푸드','짭짤하고 바삭한 간단 메뉴가 당기는 날이에요.'],
  ['샌드위치','가벼운식사','부담 없이 깔끔하게 먹고 싶을 때 좋아요.'],['포케','가벼운식사','신선하고 든든한 한 그릇으로 균형을 맞춰봐요.'],['요거트볼','가벼운식사','가볍고 산뜻하게 채우고 싶은 날이에요.'],['아보카도토스트','가벼운식사','깔끔하면서도 든든한 브런치 느낌이 좋아요.'],['월남쌈','가벼운식사','신선하고 가벼운 식감이 필요한 날이에요.'],['쌀국수','가벼운식사','맑은 국물과 향긋한 면으로 부담 없이 가봐요.'],['반미','가벼운식사','바삭한 빵과 산뜻한 속재료가 기분을 바꿔줘요.'],['연어덮밥','가벼운식사','깔끔하고 든든한 한 그릇이 잘 어울려요.']
].map(([name,category,message]) => ({name,category,message,image:`assets/food/${name}.jpg`}));

const state = { route:'home', history:[], foodCategory:'전체', recent:[], fortuneMode:'띠별 운세', fortuneSign:'쥐띠', fortuneYear:'1996년' };
const zodiacs = ['쥐띠','소띠','호랑이띠','토끼띠','용띠','뱀띠','말띠','양띠','원숭이띠','닭띠','개띠','돼지띠'];
const stars = ['염소자리 (12/22~1/19)','물병자리 (1/20~2/18)','물고기자리 (2/19~3/20)','양자리 (3/21~4/19)','황소자리 (4/20~5/20)','쌍둥이자리 (5/21~6/21)','게자리 (6/22~7/22)','사자자리 (7/23~8/22)','처녀자리 (8/23~9/22)','천칭자리 (9/23~10/22)','전갈자리 (10/23~11/22)','사수자리 (11/23~12/21)'];

function layout(title, content, canBack=true) {
  app.innerHTML = `<header class="topbar"><button class="icon-button" data-back ${canBack?'':'disabled'} aria-label="뒤로 가기">‹</button><h1>${title}</h1><button class="icon-button" data-home aria-label="홈">⌂</button></header>${content}<div class="ad-slot">AdSense 광고 영역</div>`;
  app.querySelector('[data-back]')?.addEventListener('click', goBack);
  app.querySelector('[data-home]')?.addEventListener('click', () => navigate('home'));
}
function navigate(route, push=true) { if(push && state.route !== route) state.history.push(state.route); state.route=route; render(); scrollTo(0,0); }
function goBack(){ navigate(state.history.pop() || 'home', false); }
function optionList(items, selected){ return items.map(x=>`<option ${x===selected?'selected':''}>${x}</option>`).join(''); }

function home(){
  layout('일상 랜덤', `<main class="screen"><section class="hero"><div class="eyebrow">매일의 고민에 유쾌한 답</div><h2>오늘의 선택,<br>가볍게 맡겨보세요</h2><p>먹을 것부터 내기와 짧은 게임까지. 필요한 순간 바로 꺼내 쓰는 일상 도구예요.</p><button class="primary hero-action" data-food>오늘 메뉴 바로 추천</button></section><section class="grid">
    ${menu('운세보기','띠별·별자리 간이 운세','★','#e5aa27','fortune')}${menu('단위변환기','길이·무게·속도·부피','↔','#168b72','unit')}${menu('랜덤게임','Unity 연출로 즐기는 추첨','◆','#3479d6','unityGames')}${menu('오늘의 게임','Unity로 즐기는 30초 게임','●','#6744c7','unityDaily')}
  </section></main>`, false);
  app.querySelector('[data-food]').onclick=()=>navigate('food');
  app.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>navigate(b.dataset.route));
}
function menu(title,desc,symbol,color,route){return `<button class="menu-card" style="--accent:${color}" data-route="${route}"><span class="symbol">${symbol}</span><strong>${title}</strong><small>${desc}</small></button>`}

function unityGames(){unityView('랜덤게임','games','사다리타기·레이싱·룰렛·카드 뽑기')}
function unityDaily(){unityView('오늘의 게임','daily','들어갈 때마다 달라지는 30초 미니게임')}
function unityView(title,route,description){
  layout(title,`<main class="unity-screen"><section class="unity-intro"><div><span>UNITY PLAY</span><strong>${title}</strong><small>${description}</small></div><button class="secondary" data-reload>게임 다시 불러오기</button></section><section class="unity-frame-shell"><div class="unity-loading">Unity 게임을 준비하고 있어요...</div><iframe class="unity-frame" title="${title}" src="unity/index.html?route=${route}" allow="autoplay; fullscreen; gamepad" allowfullscreen></iframe></section></main>`);
  const frame=app.querySelector('.unity-frame');frame.addEventListener('load',()=>app.querySelector('.unity-loading')?.classList.add('hidden'));
  app.querySelector('[data-reload]').onclick=()=>{const src=frame.src;frame.src='about:blank';setTimeout(()=>frame.src=src,80)};
}

function food(){
  const cats=['전체','한식','중식','일식','양식','분식','패스트푸드','가벼운식사'];
  layout('오늘 뭐 먹지',`<main class="screen"><section class="card dark"><div class="eyebrow">FOOD PICK</div><h2>메뉴 고민은 여기서 끝</h2><p>카테고리만 고르면 고양이 셰프가 오늘의 한 끼를 가져와요.</p></section><section class="card"><h3>카테고리</h3><div class="chips">${cats.map(c=>`<button class="chip ${c===state.foodCategory?'active':''}" data-cat="${c}">${c}</button>`).join('')}</div></section><section class="card"><h3>준비는 끝났어요</h3><p>최근 결과는 잠시 제외해 같은 메뉴가 반복되는 일을 줄였어요.</p><button class="primary green wide" data-reveal>결과 보기</button></section></main>`);
  app.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{state.foodCategory=b.dataset.cat;food()});
  app.querySelector('[data-reveal]').onclick=pickFood;
}
function pickFood(){
  let pool=foods.filter(f=>state.foodCategory==='전체'||f.category===state.foodCategory).filter(f=>!state.recent.includes(f.name));
  if(!pool.length){state.recent=[];pool=foods.filter(f=>state.foodCategory==='전체'||f.category===state.foodCategory)}
  const picked=pool[Math.floor(Math.random()*pool.length)]; state.recent.push(picked.name); if(state.recent.length>8)state.recent.shift(); state.pickedFood=picked;
  playVideo('assets/video/food_run_cat.mp4','고양이 셰프가 음식을 가져오는 중',()=>foodResult(picked));
}
function playVideo(src,caption,done){
  const overlay=document.createElement('div');
  overlay.className='media-stage';
  overlay.innerHTML=`<div class="media-loading" data-video-loading>영상 준비 중...</div><video playsinline preload="auto"><source src="${src}" type="video/mp4"></video><div class="media-caption">${caption}</div><button class="media-start" data-video-start>영상 재생</button><button class="media-skip" data-video-skip>건너뛰기</button>`;
  document.body.appendChild(overlay);

  const v=overlay.querySelector('video');
  const loading=overlay.querySelector('[data-video-loading]');
  const startButton=overlay.querySelector('[data-video-start]');
  let finished=false;
  const safetyTimer=setTimeout(finish,20000);

  function finish(){
    if(finished)return;
    finished=true;
    clearTimeout(safetyTimer);
    v.pause();
    overlay.remove();
    const flash=document.createElement('div');
    flash.className='flash';
    document.body.appendChild(flash);
    setTimeout(()=>{flash.remove();done()},480);
  }

  const beginPlayback=()=>{
    startButton.classList.remove('visible');
    v.play().catch(()=>startButton.classList.add('visible'));
  };
  v.addEventListener('loadeddata',()=>loading.classList.add('hidden'));
  v.addEventListener('playing',()=>{loading.classList.add('hidden');startButton.classList.remove('visible')});
  v.addEventListener('ended',finish);
  v.addEventListener('error',()=>{loading.textContent='영상을 불러오지 못해 결과로 이동합니다.';setTimeout(finish,900)});
  startButton.addEventListener('click',beginPlayback);
  overlay.querySelector('[data-video-skip]').addEventListener('click',finish);
  v.load();
  beginPlayback();
}
function foodResult(f){
  state.route='foodResult'; layout('오늘의 추천',`<main class="screen"><section class="card"><img class="food-photo" src="${f.image}" alt="${f.name}" onerror="this.style.display='none'"><span class="result-badge">${f.category}</span><h2 class="result-name">${f.name}</h2><p>${f.message}</p><button class="primary wide" data-again>다시 추천받기</button><button class="secondary wide" style="margin-top:8px" data-change>카테고리 바꾸기</button></section></main>`);
  app.querySelector('[data-again]').onclick=pickFood; app.querySelector('[data-change]').onclick=food;
}

function fortune(){
  const isZodiac=state.fortuneMode==='띠별 운세';
  layout('운세보기',`<main class="screen"><section class="card dark"><div class="eyebrow">FORTUNE CARD</div><h2>오늘의 흐름을 한 장에</h2><p>기준을 선택하면 날짜와 생년 정보를 조합한 간이 운세를 보여드려요.</p></section><section class="card"><div class="field"><label>운세 종류</label><select data-mode>${optionList(['띠별 운세','별자리 운세'],state.fortuneMode)}</select></div><div class="field"><label>${isZodiac?'띠':'별자리'}</label><select data-sign>${optionList(isZodiac?zodiacs:stars,state.fortuneSign)}</select></div>${isZodiac?`<div class="field"><label>출생 연도</label><select data-year>${optionList(yearsForZodiac(state.fortuneSign),state.fortuneYear)}</select></div>`:''}<button class="primary wide" data-fortune>결과 보기</button></section></main>`);
  app.querySelector('[data-mode]').onchange=e=>{state.fortuneMode=e.target.value;state.fortuneSign=state.fortuneMode==='띠별 운세'?'쥐띠':stars[0];fortune()};
  app.querySelector('[data-sign]').onchange=e=>{state.fortuneSign=e.target.value;if(isZodiac)state.fortuneYear=yearsForZodiac(e.target.value)[0];fortune()};
  app.querySelector('[data-year]')?.addEventListener('change',e=>state.fortuneYear=e.target.value);
  app.querySelector('[data-fortune]').onclick=()=>playVideo('assets/video/fortune_cat.mp4','점괘 분석 중',fortuneCard);
}
function yearsForZodiac(sign){const idx=zodiacs.indexOf(sign);const out=[];for(let y=new Date().getFullYear();y>=new Date().getFullYear()-120;y--)if(((y-4)%12+12)%12===idx)out.push(`${y}년`);return out}
function fortuneCard(){
  state.fortuneResults=['오늘','이번 주','이번 달','올해'].map(period=>buildFortune(period));
  state.route='fortuneCard';layout('운세 카드',`<main class="screen fortune-reveal-screen"><section class="card dark fortune-guide"><h2>카드를 터치하세요</h2><p>카드가 뒤집히면 오늘부터 올해까지의 흐름이 공개됩니다.</p></section><div class="fortune-stage"><button type="button" class="fortune-card" data-flip aria-label="운세 카드 뒤집기"><span class="fortune-inner"><span class="fortune-face fortune-front" aria-hidden="true"><span class="fortune-glyph">✦</span><strong>오늘의 운세</strong><small>${fortuneProfile()}</small><em>TOUCH</em></span><span class="fortune-face fortune-back"><span><b>✦</b><strong>운세를 확인했어요</strong><p>결과를 펼치는 중...</p></span></span></span></button></div><button class="secondary wide fortune-reveal-retry" data-retry>다시 보기</button></main>`);
  scrollTo(0,0);
  const flipCard=app.querySelector('[data-flip]');
  const flipInner=flipCard.querySelector('.fortune-inner');
  let revealComplete=false;
  const showDetails=()=>{
    if(revealComplete)return;
    revealComplete=true;
    fortuneDetails();
  };
  flipCard.addEventListener('click',()=>{
    if(flipCard.dataset.revealing==='true')return;
    flipCard.dataset.revealing='true';
    flipCard.classList.add('flipped');
    flipCard.setAttribute('aria-label','운세 결과를 펼치는 중');
    flipInner.addEventListener('animationend',showDetails,{once:true});
    setTimeout(showDetails,900);
  });
  app.querySelector('[data-retry]').onclick=fortune;
}

function fortuneDetails(){
  state.route='fortuneDetails';
  const results=state.fortuneResults||['오늘','이번 주','이번 달','올해'].map(period=>buildFortune(period));
  layout('운세 결과',`<main class="screen fortune-results"><section class="fortune-summary"><div class="fortune-star">✦</div><div><span>${state.fortuneMode}</span><h2>${fortuneProfile()}</h2><p>선택한 정보와 기간별 흐름을 조합한 간이 운세입니다.</p></div></section><section class="fortune-period-grid">${results.map(result=>`<article class="fortune-period"><header><span>${result.period}</span><b>${result.score}점</b></header><h3>${result.title}</h3><p>${result.message}</p><footer><span>행운 색 ${result.color}</span><span>행운 숫자 ${result.number}</span></footer></article>`).join('')}</section><button class="primary wide fortune-retry" data-retry>다시 보기</button></main>`);
  scrollTo(0,0);
  app.querySelector('[data-retry]').onclick=fortune;
}

function fortuneProfile(){return state.fortuneMode==='띠별 운세'?`${state.fortuneSign} · ${state.fortuneYear}`:state.fortuneSign}
function positiveMod(value,modulus){const result=value%modulus;return result<0?result+modulus:result}
function periodDate(period){
  const now=new Date();const date=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if(period==='이번 주'){const mondayOffset=(date.getDay()+6)%7;date.setDate(date.getDate()-mondayOffset+3)}
  if(period==='이번 달')date.setDate(Math.min(15,new Date(date.getFullYear(),date.getMonth()+1,0).getDate()));
  if(period==='올해')return new Date(date.getFullYear(),6,1);
  return date;
}
function buildFortune(period){return state.fortuneMode==='띠별 운세'?buildEasternFortune(period):buildWesternFortune(period)}
function buildEasternFortune(period){
  const target=periodDate(period);const birthBranch=Math.max(0,zodiacs.indexOf(state.fortuneSign));const birthYear=parseInt(state.fortuneYear,10)||target.getFullYear();const birthStem=positiveMod(birthYear-4,10);
  let targetStem,targetBranch;
  if(period==='올해'){const pillarYear=target<new Date(target.getFullYear(),1,4)?target.getFullYear()-1:target.getFullYear();targetStem=positiveMod(pillarYear-4,10);targetBranch=positiveMod(pillarYear-4,12)}
  else{const anchor=new Date(2019,0,27);const dayIndex=positiveMod(Math.round((target-anchor)/86400000),60);targetStem=dayIndex%10;targetBranch=dayIndex%12}
  let score=58,relation='평운';
  const isPair=(...pairs)=>pairs.some(([a,b])=>(birthBranch===a&&targetBranch===b)||(birthBranch===b&&targetBranch===a));
  if(isPair([0,1],[2,11],[3,10],[4,9],[5,8],[6,7])){score+=22;relation='육합'}
  else if(positiveMod(birthBranch-targetBranch,12)===6){score-=24;relation='충'}
  else if([[8,0,4],[2,6,10],[11,3,7],[5,9,1]].some(group=>group.includes(birthBranch)&&group.includes(targetBranch))){score+=16;relation='삼합'}
  else if(isPair([0,7],[1,6],[2,5],[3,4],[8,11],[9,10])){score-=12;relation='해'}
  else if(birthBranch===targetBranch){score+=7;relation='동기'}
  const birthElement=Math.floor(birthStem/2),targetElement=Math.floor(targetStem/2);const colors=['초록','빨강','황금','은색','파랑'];
  if(positiveMod(targetElement+1,5)===birthElement){score+=9;relation+='·상생'}else if(positiveMod(birthElement+1,5)===targetElement)score-=3;
  score=Math.max(20,Math.min(94,score));const number=positiveMod(targetBranch+birthStem+score,9)+1;
  const advice=relation.includes('충')||relation.includes('해')?'대화는 단정적인 표현을 줄이고 지출은 보수적으로 잡으세요.':relation.includes('육합')||relation.includes('삼합')?'사람을 통해 기회가 들어오므로 제안과 연락을 열어두세요.':score>=65?'중요한 일을 먼저 처리하면 흐름을 살리기 좋아요.':'익숙한 일부터 차분히 정리하면 실수를 줄일 수 있어요.';
  return fortuneResult(period,score,`${relation}의 흐름`,advice,colors[targetElement],number);
}
function buildWesternFortune(period){
  const target=periodDate(period);const names=stars.map(sign=>sign.split(' ')[0]);const signIndex=Math.max(0,names.indexOf(state.fortuneSign.split(' ')[0]));
  const day=Math.floor((target-new Date(target.getFullYear(),0,0))/86400000);const periodWeight={'오늘':0,'이번 주':11,'이번 달':29,'올해':53}[period];
  const cycles=[365.24,27.32,87.97,224.7,686.98,4332.6,10759];const bodies=['태양','달','수성','금성','화성','목성','토성'];const aspects=[0,60,90,120,180];
  let total=0,strongest={power:0,body:'태양',aspect:'중립각',index:0};const natal=signIndex*30+15;
  cycles.forEach((cycle,index)=>{const longitude=positiveMod((day+periodWeight+index*37)/cycle*360,360);let difference=Math.abs(longitude-natal);if(difference>180)difference=360-difference;let best=0;aspects.forEach((angle,i)=>{if(Math.abs(difference-angle)<Math.abs(difference-aspects[best]))best=i});const orb=Math.abs(difference-aspects[best]);const allowed=index<2?9:7;const values=[1,.8,-1,1.15,-1.1];const influence=orb>allowed?0:values[best]*(1-orb/allowed);total+=influence*[1.2,.8,1,1.4,1.3,1.8,1.7][index];if(Math.abs(influence)>strongest.power)strongest={power:Math.abs(influence),body:bodies[index],aspect:['합','육각','사각','삼각','대립'][best],index}}
  );
  const score=Math.max(20,Math.min(95,Math.round(58+total*5.2)));const colors=['빨강','초록','노랑','은색','주황','베이지','하늘','자주','보라','남색','청록','연보라'];const number=positiveMod(signIndex+strongest.index+score+periodWeight,9)+1;
  const advice=strongest.body==='금성'?'관계와 소비에서 감정적인 결정보다 한 번 더 확인하세요.':strongest.body==='수성'?'연락과 문서는 보내기 전에 다시 확인하면 유리해요.':strongest.body==='화성'?'행동력은 좋지만 과열되지 않도록 속도를 조절하세요.':score>=65?'새로운 제안과 배움에 마음을 열어두세요.':'생활 리듬을 먼저 정리하면 판단력이 안정돼요.';
  return fortuneResult(period,score,`${strongest.body} ${strongest.aspect}의 흐름`,advice,colors[positiveMod(signIndex+strongest.index,12)],number);
}
function fortuneResult(period,score,basis,advice,color,number){
  const title=score>=82?'상승 기운이 뚜렷해요':score>=68?'좋은 흐름이 우세해요':score>=55?'순서가 중요한 시기예요':score>=42?'확인을 우선할 때예요':'큰 결정은 신중하게';
  const flow=score>=68?'준비한 일을 밀어보기 좋습니다.':score>=55?'무난하지만 선택의 순서가 중요합니다.':score>=42?'변수가 있으니 속도보다 확인을 우선하세요.':'충돌 가능성이 있어 결정을 한 번 더 검토하세요.';
  return{period,score,title,message:`${basis}. ${flow} ${advice}`,color,number};
}

const units={길이:{m:1,km:1000,cm:.01,mm:.001,inch:.0254,ft:.3048},무게:{kg:1,g:.001,lb:.453592,oz:.0283495},부피:{L:1,mL:.001,'m³':1000,'컵':.24,'큰술':.015},속도:{'km/h':1,'m/s':3.6,mph:1.609344,knot:1.852},온도:{'°C':'c','°F':'f','K':'k'}};
function unit(){state.unitType ||= '길이';const list=Object.keys(units[state.unitType]);state.from ||= list[0];state.to ||= list[1];if(!list.includes(state.from)){state.from=list[0];state.to=list[1]}
  layout('단위변환기',`<main class="screen"><section class="card dark"><div class="eyebrow">UNIT CONVERTER</div><h2>필요한 단위를 바로</h2><p>숫자를 입력하면 기다리지 않고 즉시 변환해요.</p></section><section class="card"><div class="field"><label>종류</label><select data-type>${optionList(Object.keys(units),state.unitType)}</select></div><div class="row"><div class="field"><label>변환 전</label><select data-from>${optionList(list,state.from)}</select></div><button class="swap" data-swap>⇄</button><div class="field"><label>변환 후</label><select data-to>${optionList(list,state.to)}</select></div></div><div class="field"><label>값</label><input inputmode="decimal" data-value value="${state.unitValue||1}"></div><section class="card dark"><small>변환 결과</small><h2 data-output></h2></section></section></main>`);calcUnit();
  app.querySelector('[data-type]').onchange=e=>{state.unitType=e.target.value;state.from=null;unit()};app.querySelector('[data-from]').onchange=e=>{state.from=e.target.value;calcUnit()};app.querySelector('[data-to]').onchange=e=>{state.to=e.target.value;calcUnit()};app.querySelector('[data-value]').oninput=e=>{state.unitValue=e.target.value;calcUnit()};app.querySelector('[data-swap]').onclick=()=>{[state.from,state.to]=[state.to,state.from];unit()};
}
function calcUnit(){const value=parseFloat(app.querySelector('[data-value]')?.value)||0;let result;if(state.unitType==='온도'){const c=state.from==='°C'?value:state.from==='°F'?(value-32)*5/9:value-273.15;result=state.to==='°C'?c:state.to==='°F'?c*9/5+32:c+273.15}else result=value*units[state.unitType][state.from]/units[state.unitType][state.to];app.querySelector('[data-output]').textContent=`${result.toLocaleString(undefined,{maximumFractionDigits:6})} ${state.to}`}

function randomMenu(){layout('랜덤게임',`<main class="screen"><section class="card dark"><div class="eyebrow">RANDOM GAME LAB</div><h2>우연을 조금 더 재미있게</h2><p>여럿이 함께 지켜보는 네 가지 추첨 게임이에요.</p></section><section class="grid">${menu('사다리타기','경로를 따라 결과 확인','▼','#ff6542','ladder')}${menu('레이싱','끝까지 바뀌는 순위','▶','#168b72','race')}${menu('룰렛','직접 적고 돌리는 원판','○','#e5aa27','roulette')}${menu('카드 뽑기','숨겨진 숫자와 당첨','■','#6744c7','cards')}</section></main>`);app.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>navigate(b.dataset.route))}
function gameShell(title,body){layout(title,`<main class="screen">${body}</main>`)}
function numberOptions(min,max,unit,selected){return Array.from({length:max-min+1},(_,i)=>{const value=min+i;return `<option value="${value}" ${value===selected?'selected':''}>${value}${unit}</option>`}).join('')}
function roulette(){
  state.rouletteSlotCount ||= 4;state.rouletteItems ||= ['커피 사기','간식 사기','설거지','통과'];
  while(state.rouletteItems.length<state.rouletteSlotCount)state.rouletteItems.push(`항목 ${state.rouletteItems.length+1}`);state.rouletteItems=state.rouletteItems.slice(0,state.rouletteSlotCount);
  const colors=['#ff6542','#e5aa27','#168b72','#6744c7','#3479d6','#df4f83','#4b9b52','#d97826','#655fba','#2b9ba7'];const step=100/state.rouletteSlotCount;const gradient=state.rouletteItems.map((_,i)=>`${colors[i%colors.length]} ${i*step}% ${(i+1)*step}%`).join(',');
  gameShell('룰렛',`<section class="card dark"><h2>룰렛 항목</h2><p>칸 수를 고르고 각 칸에 원하는 내용을 입력하세요.</p><div class="field"><label>룰렛 칸 수</label><select data-slot-count>${numberOptions(2,10,'칸',state.rouletteSlotCount)}</select></div><div class="option-input-grid">${state.rouletteItems.map((item,i)=>`<label><span>${i+1}번</span><input data-wheel-item="${i}" value="${item}"></label>`).join('')}</div></section><section class="game-board"><div class="roulette-pointer">▼</div><div class="roulette" data-wheel style="background:conic-gradient(${gradient})"></div><div class="roulette-legend">${state.rouletteItems.map((item,i)=>`<span><i style="background:${colors[i%colors.length]}"></i>${item}</span>`).join('')}</div><div class="status" data-status>원판을 돌려보세요</div></section><button class="primary wide" data-spin>룰렛 돌리기</button>`);
  app.querySelector('[data-slot-count]').onchange=e=>{state.rouletteItems=[...app.querySelectorAll('[data-wheel-item]')].map(x=>x.value);state.rouletteSlotCount=+e.target.value;roulette()};
  app.querySelectorAll('[data-wheel-item]').forEach(input=>input.oninput=()=>state.rouletteItems[+input.dataset.wheelItem]=input.value||`항목 ${+input.dataset.wheelItem+1}`);
  app.querySelector('[data-spin]').onclick=()=>{const winner=Math.floor(Math.random()*state.rouletteSlotCount);const turn=1440+(360-winner*360/state.rouletteSlotCount-180/state.rouletteSlotCount);app.querySelector('[data-wheel]').style.transform=`rotate(${turn}deg)`;app.querySelector('[data-status]').textContent='돌아가는 중...';setTimeout(()=>app.querySelector('[data-status]').textContent=`결과: ${state.rouletteItems[winner]}`,3250)};
}
function cards(){
  state.cardDrawCount ||= 6;
  gameShell('카드 뽑기',`<section class="card dark"><h2>당첨 카드를 찾아보세요</h2><p>카드 수를 고르세요. 꽝은 다시 고를 수 있고 당첨을 찾으면 모두 공개돼요.</p><div class="field"><label>카드 수</label><select data-card-count>${numberOptions(2,10,'장',state.cardDrawCount)}</select></div></section><section class="game-board"><div class="cards" style="--card-columns:${state.cardDrawCount<=4?2:3}">${Array.from({length:state.cardDrawCount},(_,i)=>`<button class="draw-card" data-card="${i}" aria-label="${i+1}번 카드"><span>?</span></button>`).join('')}</div><div class="status" data-status>카드 한 장을 선택하세요</div></section><button class="secondary wide" data-reset>다시 섞기</button>`);
  const winner=Math.floor(Math.random()*state.cardDrawCount);app.querySelector('[data-card-count]').onchange=e=>{state.cardDrawCount=+e.target.value;cards()};
  app.querySelectorAll('[data-card]').forEach(b=>b.onclick=()=>{if(b.classList.contains('revealed'))return;if(+b.dataset.card===winner){app.querySelectorAll('[data-card]').forEach((x,i)=>{x.classList.add('revealed');x.querySelector('span').textContent=i===winner?'당첨':'꽝';x.disabled=true});app.querySelector('[data-status]').textContent='당첨! 모든 카드가 공개됐어요.'}else{b.classList.add('revealed');b.querySelector('span').textContent='꽝';b.disabled=true;app.querySelector('[data-status]').textContent='아직 당첨 카드가 남아 있어요.'}});app.querySelector('[data-reset]').onclick=cards;
}
function ladder(){
  state.ladderCount ||= 4;state.ladderNames ||= Array.from({length:8},(_,i)=>`참가자 ${i+1}`);state.ladderResults ||= Array.from({length:8},(_,i)=>i===0?'당첨':`결과 ${i+1}`);
  gameShell('사다리타기',`<section class="card dark"><h2>실시간 사다리</h2><p>참가자와 결과를 입력한 뒤 한 명씩 눌러 경로를 확인하세요.</p><div class="field"><label>참가자 수</label><select data-ladder-count>${numberOptions(2,8,'명',state.ladderCount)}</select></div><div class="ladder-input-head"><b>참가자</b><b>결과</b></div><div class="ladder-inputs">${Array.from({length:state.ladderCount},(_,i)=>`<input data-ladder-name="${i}" value="${state.ladderNames[i]}"><input data-ladder-result="${i}" value="${state.ladderResults[i]}">`).join('')}</div></section><button class="primary wide" data-ladder-start>사다리 시작</button>`);
  app.querySelector('[data-ladder-count]').onchange=e=>{state.ladderCount=+e.target.value;ladder()};app.querySelectorAll('[data-ladder-name]').forEach(input=>input.oninput=()=>state.ladderNames[+input.dataset.ladderName]=input.value||`참가자 ${+input.dataset.ladderName+1}`);app.querySelectorAll('[data-ladder-result]').forEach(input=>input.oninput=()=>state.ladderResults[+input.dataset.ladderResult]=input.value||`결과 ${+input.dataset.ladderResult+1}`);app.querySelector('[data-ladder-start]').onclick=()=>ladderPlay();
}
function ladderPlay(){
  const count=state.ladderCount;const names=state.ladderNames.slice(0,count);const results=state.ladderResults.slice(0,count);const mapping=[...Array(count).keys()];for(let i=count-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[mapping[i],mapping[j]]=[mapping[j],mapping[i]]}
  state.ladderMapping=mapping;const rungCount=12+count;const rungs=Array.from({length:rungCount},(_,i)=>({col:Math.floor(Math.random()*(count-1)),top:9+(i+1)*(78/(rungCount+1))}));
  gameShell('사다리타기',`<section class="card dark"><h2>누구부터 내려갈까요?</h2><p>결과는 미리 공개됩니다. 참가자를 누르면 경로가 한 명씩 연결돼요.</p></section><section class="game-board ladder-stage"><div class="ladder-choice-row">${names.map((name,i)=>`<button data-ladder-pick="${i}"><b>${String.fromCharCode(65+i)}</b><span>${name}</span></button>`).join('')}</div><div class="ladder-web" style="--ladder-count:${count}"><div class="ladder-verticals">${Array.from({length:count},()=>'<i></i>').join('')}</div>${rungs.map(rung=>`<i class="ladder-rung" style="--rung-col:${rung.col};top:${rung.top}%"></i>`).join('')}<div class="ladder-token" data-ladder-token>●</div></div><div class="ladder-result-row" style="--ladder-count:${count}">${results.map((result,i)=>`<span><b>${i+1}</b>${result}</span>`).join('')}</div><div class="status" data-status>위 참가자를 한 명 선택하세요</div></section><button class="secondary wide" data-reset>새 사다리 만들기</button>`);
  const token=app.querySelector('[data-ladder-token]');let running=false;app.querySelectorAll('[data-ladder-pick]').forEach(button=>button.onclick=()=>{if(running||button.disabled)return;running=true;const start=+button.dataset.ladderPick,end=mapping[start];token.style.transition='none';token.style.left=`${(start+.5)*100/count}%`;token.style.top='0';token.style.opacity='1';requestAnimationFrame(()=>requestAnimationFrame(()=>{token.style.transition='left 2.4s cubic-bezier(.35,.05,.25,1), top 2.4s linear';token.style.left=`${(end+.5)*100/count}%`;token.style.top='94%'}));app.querySelector('[data-status]').textContent=`${names[start]} 경로를 따라가는 중...`;setTimeout(()=>{button.disabled=true;button.classList.add('done');app.querySelector('[data-status]').textContent=`${names[start]} → ${results[end]}`;running=false},2500)});app.querySelector('[data-reset]').onclick=ladder;
}
function race(){
  state.raceCarCount ||= 4;state.raceNames ||= Array.from({length:7},(_,i)=>`참가자 ${i+1}`);const colors=['#ef4438','#3184df','#59af4b','#e6b52d','#8f55d9','#e35d9a','#21a4a8'];
  gameShell('레이싱',`<section class="card dark"><h2>세로 스피드 레이싱</h2><p>차량 수와 이름을 정하면 가속과 감속으로 순위가 끝까지 바뀝니다.</p><div class="field"><label>차량 수</label><select data-race-count>${numberOptions(2,7,'대',state.raceCarCount)}</select></div><div class="option-input-grid">${state.raceNames.slice(0,state.raceCarCount).map((name,i)=>`<label><span style="color:${colors[i]}">${i+1}번</span><input data-race-name="${i}" value="${name}"></label>`).join('')}</div></section><section class="game-board"><div class="race-rank" data-rank>${state.raceNames.slice(0,state.raceCarCount).map((name,i)=>`<span><b>${i+1}</b><i style="background:${colors[i]}"></i>${name}</span>`).join('')}</div><div class="race-track"><div class="finish"></div>${colors.slice(0,state.raceCarCount).map((color,i)=>`<div class="car" style="--car-color:${color};background:${color};left:${8+i*(84/Math.max(1,state.raceCarCount-1))}%" data-car="${i}">${i+1}</div>`).join('')}</div><div class="status" data-status>경주 준비 완료</div></section><button class="primary wide" data-race>경주 시작</button>`);
  app.querySelector('[data-race-count]').onchange=e=>{state.raceCarCount=+e.target.value;race()};app.querySelectorAll('[data-race-name]').forEach(input=>input.oninput=()=>state.raceNames[+input.dataset.raceName]=input.value||`참가자 ${+input.dataset.raceName+1}`);app.querySelector('[data-race]').onclick=e=>{e.currentTarget.disabled=true;runRace(state.raceCarCount,colors)};
}
function runRace(count,colors){
  const cars=[...app.querySelectorAll('[data-car]')];let tick=0,finish=[];const progress=Array(count).fill(12);const status=app.querySelector('[data-status]');status.textContent='출발!';
  const updateRank=()=>{const order=[...Array(count).keys()].sort((a,b)=>progress[b]-progress[a]);app.querySelector('[data-rank]').innerHTML=order.map((i,rank)=>`<span><b>${finish.includes(i)?finish.indexOf(i)+1:rank+1}</b><i style="background:${colors[i]}"></i>${state.raceNames[i]}</span>`).join('')};
  const timer=setInterval(()=>{tick++;cars.forEach((car,i)=>{if(finish.includes(i))return;const event=Math.random();let gain=5+Math.random()*11;if(event<.08)gain+=24;if(event>.94)gain=Math.max(1,gain-10);progress[i]=Math.min(395,progress[i]+gain);car.style.bottom=`${progress[i]}px`;const base=8+i*(84/Math.max(1,count-1));car.style.left=`${Math.max(3,Math.min(91,base+(Math.random()-.5)*8))}%`;if(progress[i]>=395){finish.push(i);car.textContent=`${finish.length}위`;car.classList.add('finished')}});updateRank();if(finish.length===count||tick>90){clearInterval(timer);if(finish.length<count)[...Array(count).keys()].filter(i=>!finish.includes(i)).sort((a,b)=>progress[b]-progress[a]).forEach(i=>finish.push(i));status.textContent=`우승: ${state.raceNames[finish[0]]}!`;app.querySelector('[data-race]').disabled=false}},150);
}

function daily(){const games=[dailyNumbers,dailyOdd,dailyReaction,dailyMemory,dailyMath,dailySafe,dailyTarget,dailyTiming];let next;do{next=Math.floor(Math.random()*games.length)}while(games.length>1&&next===state.lastDailyGame);state.lastDailyGame=next;state.currentDailyGame=games[next];games[next]()}
function dailyButtons(replay){return `<div class="daily-record" data-daily-record>완료하면 이 기기의 이전 기록과 최고 기록을 비교해드려요.</div><div class="daily-actions"><button class="secondary wide" data-again>같은 게임 다시하기</button><button class="secondary wide" data-other>다른 게임</button></div>`}
function bindDailyButtons(replay){app.querySelector('[data-again]').onclick=replay;app.querySelector('[data-other]').onclick=daily}
function finishDailyRecord(game,score,lowerIsBetter,unit){
  const key=`daily-random-record-${game}`;let saved={plays:0,best:null,last:null};
  try{saved={...saved,...JSON.parse(localStorage.getItem(key)||'{}')}}catch{}
  const previous=saved.last;const isBest=saved.best===null||(lowerIsBetter?score<saved.best:score>saved.best);
  saved.plays+=1;saved.last=score;if(isBest)saved.best=score;
  try{localStorage.setItem(key,JSON.stringify(saved))}catch{}
  const format=value=>`${Number(value).toFixed(unit==='초'?2:0)}${unit}`;
  const record=app.querySelector('[data-daily-record]');if(!record)return;
  record.innerHTML=`<strong>${isBest?'새 최고 기록!':'기록 저장 완료'}</strong><span>${previous===null?'첫 기록':`이전 ${format(previous)}`} · 이번 ${format(score)} · 최고 ${format(saved.best)} · 누적 ${saved.plays}회</span>`;
  record.classList.add('complete');
}
function dailyNumbers(){
  const values=Array.from({length:16},(_,i)=>i+1).sort(()=>Math.random()-.5);let next=1,start=performance.now();gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>숫자 순서 찾기</h2><p>1부터 16까지 순서대로 빠르게 누르세요.</p></section><section class="game-board"><div class="daily-grid daily-grid-4">${values.map(value=>`<button data-number="${value}">${value}</button>`).join('')}</div><div class="status" data-status>NEXT 1</div></section>${dailyButtons()}`);app.querySelectorAll('[data-number]').forEach(button=>button.onclick=()=>{if(+button.dataset.number!==next){app.querySelector('[data-status]').textContent=`${next}을(를) 찾아보세요`;return}button.disabled=true;button.classList.add('cleared');next++;if(next===17){const seconds=(performance.now()-start)/1000;app.querySelector('[data-status]').textContent=`완료! ${seconds.toFixed(2)}초`;finishDailyRecord('numbers',seconds,true,'초')}else app.querySelector('[data-status]').textContent=`NEXT ${next}`});bindDailyButtons(dailyNumbers)
}
function dailyReaction(){gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>반응속도 테스트</h2><p>신호가 초록색으로 바뀌는 순간 터치하세요.</p></section><section class="game-board" style="display:grid;place-items:center"><button class="primary" style="width:210px;height:210px;border-radius:50%" data-tap>준비</button><div class="status" data-status></div></section>${dailyButtons()}`);let ready=false,start;const b=app.querySelector('[data-tap]');b.onclick=()=>{if(!ready){app.querySelector('[data-status]').textContent='아직이에요!';return}const ms=Math.round(performance.now()-start);b.textContent=`${ms}ms`;app.querySelector('[data-status]').textContent=ms<250?'번개 같은 반응이에요!':'한 번 더 도전해보세요.';ready=false;b.disabled=true;finishDailyRecord('reaction',ms,true,'ms')};setTimeout(()=>{if(!b.isConnected)return;ready=true;start=performance.now();b.textContent='지금!';b.style.background='#168b72'},1200+Math.random()*2200);bindDailyButtons(dailyReaction)}
function dailyMemory(){let seq=Array.from({length:5},()=>1+Math.floor(Math.random()*9));gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>숫자 기억력</h2><p>3초 동안 숫자를 기억하세요.</p></section><section class="game-board" style="display:grid;place-items:center"><h2 style="font-size:46px" data-seq>${seq.join(' ')}</h2><input inputmode="numeric" data-answer style="display:none;min-height:54px;text-align:center;font-size:24px"><div class="status" data-status></div></section>${dailyButtons()}`);const sequenceLabel=app.querySelector('[data-seq]');setTimeout(()=>{if(!sequenceLabel.isConnected)return;sequenceLabel.style.display='none';const input=app.querySelector('[data-answer]');input.style.display='block';input.focus();input.oninput=()=>{if(input.value.length!==5)return;const correct=input.value===seq.join('');app.querySelector('[data-status]').textContent=correct?'정답! 기억력이 선명해요.':'아쉽지만 다음에는 맞힐 수 있어요.';input.disabled=true;finishDailyRecord('memory',correct?1:0,false,'점')}},3000);bindDailyButtons(dailyMemory)}
function dailyOdd(){const odd=Math.floor(Math.random()*25),start=performance.now();gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>다른 색 찾기</h2><p>아주 조금 다른 타일 하나를 찾아보세요.</p></section><section class="game-board"><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:7px">${Array.from({length:25},(_,i)=>`<button data-odd="${i}" style="aspect-ratio:1;border:0;background:${i===odd?'#52a889':'#479d80'}"></button>`).join('')}</div><div class="status" data-status></div></section>${dailyButtons()}`);app.querySelectorAll('[data-odd]').forEach(b=>b.onclick=()=>{if(+b.dataset.odd!==odd){app.querySelector('[data-status]').textContent='다른 칸을 찾아보세요.';return}const seconds=(performance.now()-start)/1000;app.querySelector('[data-status]').textContent='정답! 눈썰미가 좋네요.';app.querySelectorAll('[data-odd]').forEach(x=>x.disabled=true);finishDailyRecord('odd',seconds,true,'초')});bindDailyButtons(dailyOdd)}
function dailyMath(){
  let round=0,mistakes=0,start=performance.now();gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>빠른 계산</h2><p>정답을 골라 10문제를 풀어보세요.</p></section><section class="game-board daily-center"><div class="daily-equation" data-equation></div><div class="daily-answer-grid" data-answers></div><div class="status" data-status>QUESTION 1 / 10</div></section>${dailyButtons()}`);const nextQuestion=()=>{if(round===10){const seconds=(performance.now()-start)/1000;app.querySelector('[data-status]').textContent=`완료! ${seconds.toFixed(2)}초 · 실수 ${mistakes}회`;finishDailyRecord('math',seconds+mistakes*3,true,'초');return}const a=2+Math.floor(Math.random()*18),b=2+Math.floor(Math.random()*12),multiply=Math.random()<.35;const answer=multiply?a*b:a+b;app.querySelector('[data-equation]').textContent=`${a} ${multiply?'×':'+'} ${b}`;const options=new Set([answer]);while(options.size<4)options.add(Math.max(1,answer-6+Math.floor(Math.random()*13)));app.querySelector('[data-answers]').innerHTML=[...options].sort(()=>Math.random()-.5).map(value=>`<button data-answer="${value}">${value}</button>`).join('');app.querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{if(+button.dataset.answer===answer){round++;app.querySelector('[data-status]').textContent=`QUESTION ${Math.min(10,round+1)} / 10`;nextQuestion()}else{mistakes++;button.disabled=true}})};nextQuestion();bindDailyButtons(dailyMath)
}
function dailySafe(){
  const bombs=new Set;while(bombs.size<6)bombs.add(Math.floor(Math.random()*25));let safe=0,lives=3,finished=false,start=performance.now();gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>안전 칸 찾기</h2><p>폭탄을 피해 안전한 칸 10개를 찾으세요. 기회는 3번이에요.</p></section><section class="game-board"><div class="daily-grid daily-grid-5">${Array.from({length:25},(_,i)=>`<button data-safe="${i}">?</button>`).join('')}</div><div class="status" data-status>SAFE 0 / 10 · LIFE 3</div></section>${dailyButtons()}`);app.querySelectorAll('[data-safe]').forEach(button=>button.onclick=()=>{if(finished)return;button.disabled=true;if(bombs.has(+button.dataset.safe)){lives--;button.textContent='×';button.classList.add('danger')}else{safe++;button.textContent='✓';button.classList.add('cleared')}const status=app.querySelector('[data-status]');status.textContent=`SAFE ${safe} / 10 · LIFE ${lives}`;if(safe>=10){finished=true;status.textContent='CLEAR! 안전한 길을 찾았어요.';finishDailyRecord('safe',(performance.now()-start)/1000,true,'초')}if(lives<=0){finished=true;status.textContent='BOOM! 다음 판에 다시 도전하세요.'}});bindDailyButtons(dailySafe)
}
function dailyTarget(){
  let hits=0,target=Math.floor(Math.random()*25),start=performance.now();gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>목표물 추적</h2><p>위치를 바꾸는 목표물을 15번 빠르게 누르세요.</p></section><section class="game-board"><div class="daily-grid daily-grid-5">${Array.from({length:25},(_,i)=>`<button data-target="${i}"></button>`).join('')}</div><div class="status" data-status>HIT 0 / 15</div></section>${dailyButtons()}`);const paint=()=>app.querySelectorAll('[data-target]').forEach((button,i)=>{button.textContent=i===target?'●':'';button.classList.toggle('target',i===target)});app.querySelectorAll('[data-target]').forEach(button=>button.onclick=()=>{if(+button.dataset.target!==target||hits>=15)return;hits++;app.querySelector('[data-status]').textContent=hits>=15?'완료! 목표물 15개 명중':`HIT ${hits} / 15`;if(hits>=15){finishDailyRecord('target',(performance.now()-start)/1000,true,'초');app.querySelectorAll('[data-target]').forEach(x=>x.disabled=true);return}target=Math.floor(Math.random()*25);paint()});paint();bindDailyButtons(dailyTarget)
}
function dailyTiming(){
  let attempts=0,total=0;gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>타이밍 탭</h2><p>왕복하는 마커가 가운데 영역에 올 때 터치하세요.</p></section><section class="game-board daily-center"><div class="timing-track"><i></i><b data-marker></b></div><button class="primary timing-button" data-timing>지금 터치</button><div class="status" data-status>ATTEMPT 1 / 5</div></section>${dailyButtons()}`);const marker=app.querySelector('[data-marker]'),timingButton=app.querySelector('[data-timing]');timingButton.onclick=()=>{if(attempts>=5)return;const track=marker.parentElement.getBoundingClientRect(),rect=marker.getBoundingClientRect();const center=(rect.left+rect.width/2-track.left)/track.width;const score=Math.max(0,Math.round(100-Math.abs(center-.5)*200));total+=score;attempts++;app.querySelector('[data-status]').textContent=attempts>=5?`결과 ${total} / 500점`:`${score}점 · ATTEMPT ${attempts+1} / 5`;if(attempts>=5){timingButton.disabled=true;finishDailyRecord('timing',total,false,'점')}};bindDailyButtons(dailyTiming)
}

function render(){({home,food,fortune,fortuneCard,fortuneDetails,unit,random:randomMenu,roulette,cards,ladder,race,daily,unityGames,unityDaily}[state.route]||home)()}
render();

if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('service-worker.js');
