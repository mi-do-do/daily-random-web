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
    ${menu('운세보기','띠별·별자리 간이 운세','★','#e5aa27','fortune')}${menu('단위변환기','길이·무게·속도·부피','↔','#168b72','unit')}${menu('랜덤게임','여럿이 함께하는 추첨','◆','#3479d6','random')}${menu('오늘의 게임','매번 달라지는 30초 게임','●','#6744c7','daily')}
  </section></main>`, false);
  app.querySelector('[data-food]').onclick=()=>navigate('food');
  app.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>navigate(b.dataset.route));
}
function menu(title,desc,symbol,color,route){return `<button class="menu-card" style="--accent:${color}" data-route="${route}"><span class="symbol">${symbol}</span><strong>${title}</strong><small>${desc}</small></button>`}

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
  const seed=[...`${new Date().toISOString().slice(0,10)}${state.fortuneMode}${state.fortuneSign}${state.fortuneYear}`].reduce((a,c)=>a+c.charCodeAt(0),0);
  const tones=['서두르기보다 순서를 지키면 흐름이 좋아집니다.','작은 제안을 먼저 건네면 뜻밖의 기회가 열립니다.','익숙한 선택보다 한 걸음 다른 방향이 유리합니다.','정리하지 못한 일을 마무리할수록 마음이 가벼워집니다.'];
  state.fortune={title:['차분한 전환의 날','기회가 가까운 날','관계가 풀리는 날','집중력이 빛나는 날'][seed%4],body:tones[(seed*7)%4],score:72+(seed%24)};
  state.route='fortuneCard';layout('운세 카드',`<main class="screen"><section class="card dark" style="text-align:center"><h2>카드를 터치하세요</h2><p>뒤집는 순간 오늘의 흐름이 공개됩니다.</p></section><button type="button" class="fortune-card" data-flip aria-label="운세 카드 뒤집기"><span class="fortune-inner"><span class="fortune-face fortune-front" aria-hidden="true">✦</span><span class="fortune-face fortune-back"><span><strong>${state.fortune.title}</strong><p>${state.fortune.body}</p><b>오늘의 흐름 ${state.fortune.score}점</b></span></span></span></button><button class="secondary wide" data-retry>다시 보기</button></main>`);
  const flipCard=app.querySelector('[data-flip]');
  flipCard.addEventListener('click',()=>flipCard.classList.add('flipped'));
  app.querySelector('[data-retry]').onclick=fortune;
}

const units={길이:{m:1,km:1000,cm:.01,mm:.001,inch:.0254,ft:.3048},무게:{kg:1,g:.001,lb:.453592,oz:.0283495},부피:{L:1,mL:.001,'m³':1000,'컵':.24,'큰술':.015},속도:{'km/h':1,'m/s':3.6,mph:1.609344,knot:1.852},온도:{'°C':'c','°F':'f','K':'k'}};
function unit(){state.unitType ||= '길이';const list=Object.keys(units[state.unitType]);state.from ||= list[0];state.to ||= list[1];if(!list.includes(state.from)){state.from=list[0];state.to=list[1]}
  layout('단위변환기',`<main class="screen"><section class="card dark"><div class="eyebrow">UNIT CONVERTER</div><h2>필요한 단위를 바로</h2><p>숫자를 입력하면 기다리지 않고 즉시 변환해요.</p></section><section class="card"><div class="field"><label>종류</label><select data-type>${optionList(Object.keys(units),state.unitType)}</select></div><div class="row"><div class="field"><label>변환 전</label><select data-from>${optionList(list,state.from)}</select></div><button class="swap" data-swap>⇄</button><div class="field"><label>변환 후</label><select data-to>${optionList(list,state.to)}</select></div></div><div class="field"><label>값</label><input inputmode="decimal" data-value value="${state.unitValue||1}"></div><section class="card dark"><small>변환 결과</small><h2 data-output></h2></section></section></main>`);calcUnit();
  app.querySelector('[data-type]').onchange=e=>{state.unitType=e.target.value;state.from=null;unit()};app.querySelector('[data-from]').onchange=e=>{state.from=e.target.value;calcUnit()};app.querySelector('[data-to]').onchange=e=>{state.to=e.target.value;calcUnit()};app.querySelector('[data-value]').oninput=e=>{state.unitValue=e.target.value;calcUnit()};app.querySelector('[data-swap]').onclick=()=>{[state.from,state.to]=[state.to,state.from];unit()};
}
function calcUnit(){const value=parseFloat(app.querySelector('[data-value]')?.value)||0;let result;if(state.unitType==='온도'){const c=state.from==='°C'?value:state.from==='°F'?(value-32)*5/9:value-273.15;result=state.to==='°C'?c:state.to==='°F'?c*9/5+32:c+273.15}else result=value*units[state.unitType][state.from]/units[state.unitType][state.to];app.querySelector('[data-output]').textContent=`${result.toLocaleString(undefined,{maximumFractionDigits:6})} ${state.to}`}

function randomMenu(){layout('랜덤게임',`<main class="screen"><section class="card dark"><div class="eyebrow">RANDOM GAME LAB</div><h2>우연을 조금 더 재미있게</h2><p>여럿이 함께 지켜보는 네 가지 추첨 게임이에요.</p></section><section class="grid">${menu('사다리타기','경로를 따라 결과 확인','▼','#ff6542','ladder')}${menu('레이싱','끝까지 바뀌는 순위','▶','#168b72','race')}${menu('룰렛','직접 적고 돌리는 원판','○','#e5aa27','roulette')}${menu('카드 뽑기','숨겨진 숫자와 당첨','■','#6744c7','cards')}</section></main>`);app.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>navigate(b.dataset.route))}
function gameShell(title,body){layout(title,`<main class="screen">${body}</main>`)}
function roulette(){state.rouletteItems ||= ['커피 사기','간식 사기','설거지','통과'];gameShell('룰렛',`<section class="card dark"><h2>룰렛 항목</h2><p>쉼표로 구분해서 원하는 내용을 입력하세요.</p><div class="field"><input data-items value="${state.rouletteItems.join(', ')}"></div></section><section class="game-board"><div class="roulette-pointer">▼</div><div class="roulette" data-wheel></div><div class="status" data-status>원판을 돌려보세요</div></section><button class="primary wide" data-spin>룰렛 돌리기</button>`);app.querySelector('[data-spin]').onclick=()=>{state.rouletteItems=app.querySelector('[data-items]').value.split(',').map(x=>x.trim()).filter(Boolean);const turn=1440+Math.random()*1440;app.querySelector('[data-wheel]').style.transform=`rotate(${turn}deg)`;app.querySelector('[data-status]').textContent='돌아가는 중...';setTimeout(()=>app.querySelector('[data-status]').textContent=`결과: ${state.rouletteItems[Math.floor(Math.random()*state.rouletteItems.length)]}`,3250)}}
function cards(){gameShell('카드 뽑기',`<section class="card dark"><h2>당첨 카드를 찾아보세요</h2><p>꽝은 다시 고를 수 있고 당첨을 찾으면 모두 공개돼요.</p></section><section class="game-board"><div class="cards">${Array.from({length:6},(_,i)=>`<button class="draw-card" data-card="${i}"><span>?</span></button>`).join('')}</div><div class="status" data-status>카드 한 장을 선택하세요</div></section><button class="secondary wide" data-reset>다시 섞기</button>`);let winner=Math.floor(Math.random()*6);app.querySelectorAll('[data-card]').forEach(b=>b.onclick=()=>{if(+b.dataset.card===winner){app.querySelectorAll('[data-card]').forEach((x,i)=>{x.classList.add('revealed');x.querySelector('span').textContent=i===winner?'당첨':'꽝'});app.querySelector('[data-status]').textContent='당첨! 모든 카드가 공개됐어요.'}else{b.classList.add('revealed');b.querySelector('span').textContent='꽝';app.querySelector('[data-status]').textContent='아직 당첨 카드가 남아 있어요.'}});app.querySelector('[data-reset]').onclick=cards}
function ladder(){gameShell('사다리타기',`<section class="card dark"><h2>실시간 사다리</h2><p>참가자를 누르면 숨겨진 경로가 하나씩 공개돼요.</p></section><section class="game-board"><div class="ladder"><button class="ladder-runner" data-run>●<br><small>A</small></button></div><div class="status" data-status>A를 눌러 출발하세요</div></section><button class="secondary wide" data-reset>새 사다리</button>`);app.querySelector('[data-run]').onclick=e=>{e.currentTarget.style.transform=`translate(${(Math.floor(Math.random()*4)-1.5)*65}px, 240px)`;app.querySelector('[data-status]').textContent='경로 생성 중...';setTimeout(()=>app.querySelector('[data-status]').textContent='도착! 결과와 연결됐어요.',2450)};app.querySelector('[data-reset]').onclick=ladder}
function race(){const colors=['#ef4438','#3184df','#59af4b','#e6b52d'];gameShell('레이싱',`<section class="card dark"><h2>세로 스피드 레이싱</h2><p>가속과 감속으로 순위가 끝까지 바뀝니다.</p></section><section class="game-board"><div class="race-track"><div class="finish"></div>${colors.map((c,i)=>`<div class="car" style="background:${c};left:${10+i*24}%" data-car="${i}">${i+1}번</div>`).join('')}</div><div class="status" data-status>경주 준비 완료</div></section><button class="primary wide" data-race>경주 시작</button>`);app.querySelector('[data-race]').onclick=()=>runRace(colors.length)}
function runRace(count){const cars=[...app.querySelectorAll('[data-car]')];let t=0,finish=[];app.querySelector('[data-status]').textContent='출발!';const timer=setInterval(()=>{t++;cars.forEach((c,i)=>{if(finish.includes(i))return;const current=parseFloat(c.style.bottom)||12;const boost=Math.random()<.12?25:0;c.style.bottom=`${Math.min(292,current+4+Math.random()*13+boost)}px`;c.style.left=`${Math.max(5,Math.min(82,10+i*24+(Math.random()-.5)*14))}%`;if(parseFloat(c.style.bottom)>=292){finish.push(i);c.textContent=`${finish.length}위`;}});if(finish.length===count||t>70){clearInterval(timer);app.querySelector('[data-status]').textContent=`우승: ${finish.length?finish[0]+1:1}번 차량!`}},180)}

function daily(){const games=[dailyReaction,dailyMemory,dailyOdd];(games[new Date().getDate()%games.length])()}
function dailyReaction(){gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>반응속도 테스트</h2><p>신호가 초록색으로 바뀌는 순간 터치하세요.</p></section><section class="game-board" style="display:grid;place-items:center"><button class="primary" style="width:210px;height:210px;border-radius:50%" data-tap>준비</button><div class="status" data-status></div></section><button class="secondary wide" data-again>같은 게임 다시하기</button>`);let ready=false,start;const b=app.querySelector('[data-tap]');b.onclick=()=>{if(!ready){app.querySelector('[data-status]').textContent='아직이에요!';return}const ms=Math.round(performance.now()-start);b.textContent=`${ms}ms`;app.querySelector('[data-status]').textContent=ms<250?'번개 같은 반응이에요!':'한 번 더 도전해보세요.';ready=false};setTimeout(()=>{ready=true;start=performance.now();b.textContent='지금!';b.style.background='#168b72'},1200+Math.random()*2200);app.querySelector('[data-again]').onclick=dailyReaction}
function dailyMemory(){let seq=Array.from({length:5},()=>1+Math.floor(Math.random()*9));gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>숫자 기억력</h2><p>3초 동안 숫자를 기억하세요.</p></section><section class="game-board" style="display:grid;place-items:center"><h2 style="font-size:46px" data-seq>${seq.join(' ')}</h2><input inputmode="numeric" data-answer style="display:none;min-height:54px;text-align:center;font-size:24px"><div class="status" data-status></div></section><button class="secondary wide" data-again>같은 게임 다시하기</button>`);setTimeout(()=>{app.querySelector('[data-seq]').style.display='none';const input=app.querySelector('[data-answer]');input.style.display='block';input.focus();input.oninput=()=>{if(input.value.length===5)app.querySelector('[data-status]').textContent=input.value===seq.join('')?'정답! 기억력이 선명해요.':'아쉽지만 다음에는 맞힐 수 있어요.'}},3000);app.querySelector('[data-again]').onclick=dailyMemory}
function dailyOdd(){const odd=Math.floor(Math.random()*25);gameShell('오늘의 게임',`<section class="card dark"><div class="eyebrow">TODAY'S 30 SEC</div><h2>다른 색 찾기</h2><p>아주 조금 다른 타일 하나를 찾아보세요.</p></section><section class="game-board"><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:7px">${Array.from({length:25},(_,i)=>`<button data-odd="${i}" style="aspect-ratio:1;border:0;background:${i===odd?'#52a889':'#479d80'}"></button>`).join('')}</div><div class="status" data-status></div></section><button class="secondary wide" data-again>같은 게임 다시하기</button>`);app.querySelectorAll('[data-odd]').forEach(b=>b.onclick=()=>app.querySelector('[data-status]').textContent=+b.dataset.odd===odd?'정답! 눈썰미가 좋네요.':'다른 칸을 찾아보세요.');app.querySelector('[data-again]').onclick=dailyOdd}

function render(){({home,food,fortune,unit,random:randomMenu,roulette,cards,ladder,race,daily}[state.route]||home)()}
render();

if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('service-worker.js');
