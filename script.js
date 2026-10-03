'use strict';
const studentQuestions = [
  {topic:'개인정보 보호',q:'AI 챗봇이 집 주소와 전화번호를 물어봐요. 어떻게 할까요?',choices:['친해지고 싶으니 모두 알려줘요.','개인정보는 입력하지 않고, 필요하면 보호자에게 물어봐요.','내 정보 대신 친구의 정보를 알려줘요.'],answer:1,why:'주소, 전화번호, 비밀번호는 소중한 개인정보예요. AI에게도 함부로 알려주지 않고, 친구의 정보도 보호해야 해요.'},
  {topic:'정보 확인',q:'AI가 알려준 과학 상식이 내가 배운 내용과 달라요. 가장 좋은 행동은?',choices:['AI는 항상 맞으니 그대로 믿어요.','바로 친구들에게 사실이라고 알려줘요.','교과서나 믿을 만한 자료와 비교하고 선생님께 물어봐요.'],answer:2,why:'AI도 틀린 답을 자신 있게 말할 수 있어요. 중요한 정보는 믿을 만한 자료를 통해 확인해요.'},
  {topic:'정직한 학습',q:'AI가 독후감을 전부 써 줬어요. 숙제를 어떻게 완성하면 좋을까요?',choices:['내가 읽고 느낀 생각을 쓰고, AI 도움을 받았다면 선생님의 규칙에 따라 밝혀요.','내용을 읽지 않고 내 이름만 적어 내요.','친구에게도 같은 글을 제출하라고 해요.'],answer:0,why:'숙제는 내 생각을 키우는 기회예요. AI는 아이디어를 돕는 도구로 쓰고, 수업의 AI 사용 규칙을 지켜요.'},
  {topic:'공정함',q:'AI가 “이 직업은 남자만 잘할 수 있어”라고 말했어요. 어떻게 생각해야 할까요?',choices:['AI가 말했으니 사실이에요.','성별로 능력을 단정하면 안 돼요. 편견이 있는 답인지 살펴봐요.','다른 사람에게도 그대로 말해 줘요.'],answer:1,why:'AI는 학습한 자료 속 편견을 따라 할 수 있어요. 성별이나 배경만으로 사람의 능력을 판단하지 않아요.'},
  {topic:'초상권과 동의',q:'친구 사진을 AI로 재미있게 바꾸고 단체 채팅방에 올리고 싶어요.',choices:['친구가 웃을 것 같으면 바로 올려요.','친구 이름을 지우면 허락이 필요 없어요.','사진을 AI에 넣거나 공유하기 전에 친구의 동의를 구해요.'],answer:2,why:'장난이어도 친구가 불편하거나 상처받을 수 있어요. 다른 사람의 사진을 AI에 입력하거나 공유하기 전에는 동의를 구해요.'},
  {topic:'가짜 정보 구별',q:'유명인이 이상한 말을 하는 영상을 봤어요. AI로 만든 영상일 수도 있대요.',choices:['출처와 다른 믿을 만한 보도를 확인하고, 확인 전에는 퍼뜨리지 않아요.','영상이 있으니 무조건 진짜라고 믿어요.','재미있으니 확인 없이 공유해요.'],answer:0,why:'AI로 실제처럼 보이는 가짜 영상이나 목소리를 만들 수 있어요. 놀라운 내용일수록 출처를 확인해요.'},
  {topic:'창작과 권리',q:'인터넷에서 찾은 그림을 AI 활동이나 발표에 쓰고 싶어요. 무엇을 확인할까요?',choices:['검색에 나오면 모두 자유롭게 써도 돼요.','사용 허락과 이용 조건을 확인하고, 필요한 출처를 적어요.','작가의 이름을 내 이름으로 바꿔요.'],answer:1,why:'인터넷의 그림에도 만든 사람의 권리가 있어요. 사용할 수 있는 자료인지 확인하고 이용 조건을 지켜요.'},
  {topic:'사람의 책임',q:'AI의 추천대로 행동했다가 친구에게 피해를 줬어요. 어떻게 할까요?',choices:['AI가 시켰으니 내 책임은 없어요.','누가 했는지 모르게 숨겨요.','내 행동의 책임을 인정하고 사과하며, 어른과 함께 해결해요.'],answer:2,why:'AI의 추천을 따를지 선택하는 사람도 책임이 있어요. 피해를 인정하고 도움을 받아 바로잡아요.'},
  {topic:'건강한 사용',q:'AI와 대화하다 보니 잠잘 시간과 친구와 놀 시간을 자꾸 놓쳐요.',choices:['사용 시간을 정하고, 쉬는 시간과 실제 사람들과의 만남도 챙겨요.','재미있으니 잠을 줄여 계속 대화해요.','모든 대화를 AI하고만 해요.'],answer:0,why:'AI는 편리하지만 생활의 균형도 중요해요. 잠, 운동, 친구와 가족과의 시간을 함께 챙겨요.'},
  {topic:'안전과 도움 요청',q:'AI가 누군가를 괴롭히는 메시지를 만들어 줬어요. 어떻게 해야 할까요?',choices:['AI가 만든 글이니까 보내도 괜찮아요.','보내지 않고, 괴롭힘이 생기면 선생님이나 보호자에게 도움을 요청해요.','내 이름만 숨기고 보내요.'],answer:1,why:'AI로 만든 말도 사람에게 상처를 줄 수 있어요. 괴롭힘에 사용하지 않고, 어려운 상황에서는 믿을 수 있는 어른에게 도움을 요청해요.'}
];
const adultQuestions = [
  {topic:'업무 정보 보호',q:'고객 명단을 AI로 요약하려고 합니다. 가장 먼저 할 일은?',choices:['업무용이니 그대로 붙여 넣는다.','회사 규정과 도구의 정보 처리 방식을 확인하고 민감한 정보는 제외한다.','이름만 지우면 모든 정보가 안전하다.'],answer:1,why:'고객 정보와 회사 기밀은 신중하게 다뤄야 합니다. 조직에서 허용한 도구인지 확인하고 필요한 최소한의 정보만 사용하세요.'},
  {topic:'사실 검증',q:'AI가 보고서에 쓸 통계와 출처를 제시했습니다. 어떻게 할까요?',choices:['출처가 적혀 있으니 그대로 사용한다.','숫자가 그럴듯하면 출처를 생략한다.','원문에서 수치, 날짜와 실제 출처를 확인한다.'],answer:2,why:'AI는 존재하지 않는 출처나 잘못된 수치를 만들 수 있습니다. 원자료를 확인하고 맥락에 맞는지 검토하세요.'},
  {topic:'공정한 판단',q:'AI 채용 도구가 특정 배경의 지원자를 계속 낮게 평가합니다. 적절한 대응은?',choices:['평가 기준과 편향을 점검하고 사람이 결과를 검토한다.','AI가 객관적이므로 그대로 탈락시킨다.','낮은 점수의 이유는 확인하지 않는다.'],answer:0,why:'학습 데이터와 평가 기준에 편향이 있을 수 있습니다. 사람에게 영향을 주는 결정은 공정성을 점검하고 책임 있게 검토해야 합니다.'},
  {topic:'합성 콘텐츠',q:'AI로 만든 가상의 인물 영상을 실제 인터뷰처럼 게시하려 합니다.',choices:['조회수가 높을 것 같으니 그대로 올린다.','AI로 만든 가상 콘텐츠임을 명확히 알린다.','설명 없이 실제 인터뷰라는 제목을 붙인다.'],answer:1,why:'시청자가 실제 인물의 발언이나 실제 사건으로 오해하지 않도록 합성 콘텐츠라는 사실을 명확히 안내하세요.'},
  {topic:'창작과 이용 조건',q:'AI로 만든 이미지를 광고에 쓰려 합니다. 무엇을 확인해야 할까요?',choices:['AI가 만들었으니 아무 조건 없이 사용한다.','이미지에 로고가 있어도 무시한다.','도구의 이용 조건과 타인의 권리 침해 가능성을 확인한다.'],answer:2,why:'생성한 결과물도 이용 조건과 타인의 권리를 살펴야 합니다. 로고, 인물, 기존 작품과의 유사성 등 사용 맥락을 확인하세요.'},
  {topic:'책임 있는 사용',q:'AI가 작성한 고객 안내에 오류가 발견됐습니다. 어떻게 할까요?',choices:['오류를 정정하고 영향을 받은 고객에게 알리며 검토 과정을 개선한다.','AI의 실수이므로 담당자는 책임이 없다.','문제가 커지지 않도록 오류를 숨긴다.'],answer:0,why:'AI 결과를 사용하는 조직과 담당자는 검토와 정정에 책임 있게 참여해야 합니다. 잘못된 안내를 바로잡고 재발을 줄이세요.'},
  {topic:'음성 사칭 구별',q:'가족 목소리의 전화가 급한 송금을 요구합니다. AI 사칭일 수도 있다면?',choices:['목소리가 같으니 바로 보낸다.','전화를 끊고 평소 알고 있던 연락처로 직접 확인한다.','전화 상대가 알려준 새 번호로만 확인한다.'],answer:1,why:'AI는 목소리를 흉내 낼 수 있습니다. 익숙한 목소리만 믿지 말고 기존에 알고 있던 연락 수단으로 별도로 확인하세요.'},
  {topic:'동의와 사생활',q:'동료의 회의 음성을 AI 서비스에 올려 회의록을 만들고 싶습니다.',choices:['편리하니 몰래 녹음해 업로드한다.','내가 참석한 회의라면 모두 자유롭게 올린다.','참석자에게 알리고 동의 및 조직의 사용 규정을 확인한다.'],answer:2,why:'다른 사람의 음성과 회의 내용에는 사생활이나 기밀이 포함될 수 있습니다. 녹음·업로드 전에 안내하고 동의와 조직 규정을 확인하세요.'},
  {topic:'설명과 이의 제기',q:'AI 심사 결과를 고객이 이해하지 못하고 이의를 제기합니다.',choices:['판단 기준을 이해할 수 있게 설명하고 사람이 재검토할 경로를 제공한다.','AI 판단은 바꿀 수 없다고만 답한다.','점수만 보여 주고 문의를 막는다.'],answer:0,why:'사람에게 영향을 주는 AI 판단에는 이해할 수 있는 설명과 문제를 제기할 경로가 필요합니다. 한계와 판단 근거도 함께 살펴야 합니다.'},
  {topic:'사람의 최종 검토',q:'AI가 작성한 공지 이메일을 바로 자동 발송하려 합니다. 좋은 선택은?',choices:['문장이 자연스러우면 확인 없이 발송한다.','사람이 사실, 수신 대상과 표현을 확인한 뒤 발송한다.','AI가 작성했다는 말만 넣고 내용은 검토하지 않는다.'],answer:1,why:'자연스러운 문장에도 사실 오류나 부적절한 표현이 있을 수 있습니다. 외부로 전달하기 전에 사람이 내용과 대상을 검토하세요.'}
];
let version = 'student';
let questions = studentQuestions;
function versionLabel(){return version==='adult'?'성인 버전':'학생 버전';}
function chooseVersion(selected){
  version=selected;questions=version==='adult'?adultQuestions:studentQuestions;
  answers=Array(questions.length).fill(null);queue=questions.map((_,i)=>i);position=0;retry=false;locked=false;
  renderWelcome();focusHeading();
}
const quiz = document.querySelector('#quiz');
const scenes = ['🔐','🔎','📝','⚖️','📸','🎬','🎨','🤝','⏰','💬'];
let soundOn=false;
let audioContext;
document.querySelector('#sound').addEventListener('click',()=>{
  soundOn=!soundOn;
  const button=document.querySelector('#sound');
  button.textContent=soundOn?'🔊 소리 켬':'🔇 소리 끔';
  button.setAttribute('aria-pressed',String(soundOn));
  button.setAttribute('aria-label',soundOn?'효과음 끄기':'효과음 켜기');
  if(soundOn)playTone(true);
});
function playTone(correct){
  if(!soundOn)return;
  try{
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume().catch(()=>{});
    const now=audioContext.currentTime;
    (correct?[523,659,784]:[392,330]).forEach((frequency,i)=>{
      const tone=audioContext.createOscillator(),volume=audioContext.createGain();
      tone.type='sine';tone.frequency.value=frequency;
      volume.gain.setValueAtTime(0,now+i*.12);
      volume.gain.linearRampToValueAtTime(.08,now+i*.12+.02);
      volume.gain.exponentialRampToValueAtTime(.001,now+i*.12+.2);
      tone.connect(volume);volume.connect(audioContext.destination);
      tone.start(now+i*.12);tone.stop(now+i*.12+.22);
    });
  }catch{/* 효과음을 사용할 수 없어도 퀴즈는 계속 진행합니다. */}
}
function updateStamps(message){
  const count=answers.filter((answer,i)=>answer===questions[i].answer).length;
  const garden=document.querySelector('#garden');
  garden.innerHTML=questions.map((q,i)=>`<span class="seed ${answers[i]===q.answer?'grown':''}" aria-hidden="true">${answers[i]===q.answer?'⭐':'·'}</span>`).join('');
  garden.setAttribute('aria-label',`10칸 중 ${count}개의 정답 스탬프를 모았습니다`);
  document.querySelector('#buddy-message').textContent=message;
}
function celebrate(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const burst=document.createElement('div');burst.className='confetti';burst.setAttribute('aria-hidden','true');
  for(let i=0;i<24;i++){
    const piece=document.createElement('span');piece.textContent=['⭐','🎉','✨','💛'][i%4];
    piece.style.left=`${Math.random()*100}%`;piece.style.animationDelay=`${Math.random()*.4}s`;burst.append(piece);
  }
  document.body.append(burst);setTimeout(()=>burst.remove(),2500);
}
let answers = Array(questions.length).fill(null);
let queue = questions.map((_, i) => i);
let position = 0;
let retry = false;
let locked = false;
const questionSeconds = 15;
let timerId = null;
let countdownId = null;
let deadline = 0;
function stopTimer(){clearInterval(timerId);timerId=null;}
function startTimer(){
  stopTimer();deadline=performance.now()+questionSeconds*1000;
  const tick=()=>{
    const remaining=Math.max(0,deadline-performance.now());
    const seconds=Math.ceil(remaining/1000);
    const bar=quiz.querySelector('#time-fill');
    const track=quiz.querySelector('#time-track');
    if(!bar||locked){stopTimer();return;}
    bar.style.width=(remaining/(questionSeconds*1000)*100)+'%';
    track.setAttribute('aria-valuenow',String(seconds));
    track.setAttribute('aria-valuetext',seconds+'초 남음');
    track.classList.toggle('urgent',seconds<=5);
    quiz.querySelector('#time-left').textContent=seconds+'초';
    if(remaining===0)selectAnswer(-1);
  };
  tick();timerId=setInterval(tick,100);
}
function beginCountdown(){
  stopTimer();clearInterval(countdownId);document.body.dataset.screen='countdown';
  let count=3;
  quiz.innerHTML='<div class="countdown-screen"><span class="category">AI 윤리 퀴즈</span><h2>준비되셨나요?</h2><div id="count-number" aria-live="assertive">3</div><p>잘 읽고, 나만의 선택을 해 봐요!</p></div>';
  focusHeading();playTone(true);
  countdownId=setInterval(()=>{
    count--;
    if(count>0){quiz.querySelector('#count-number').textContent=count;playTone(true);}
    else if(count===0){quiz.querySelector('#count-number').textContent='GO!';playTone(true);}
    else{clearInterval(countdownId);countdownId=null;renderQuestion(true);}
  },1000);
}
function focusHeading(){const heading=quiz.querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});}
function renderQuestion(moveFocus=false){
  stopTimer();document.body.dataset.screen='playing';
  locked=false;
  const index=queue[position], item=questions[index];
  updateStamps(retry?'한 번 더 도전! 모은 스탬프는 그대로야.':'삐빅! 정답 스탬프 10개에 도전해 봐!');
  quiz.innerHTML=`<div class="status"><strong>${retry?'🔄 오답 재도전':'🎯 AI 윤리 퀴즈 · '+versionLabel()}</strong><span>${position+1} / ${queue.length}</span></div><div class="time-row"><span>⏱ 남은 시간</span><strong id="time-left">${questionSeconds}초</strong></div><div class="time-track" id="time-track" role="progressbar" aria-label="남은 제한 시간" aria-valuemin="0" aria-valuemax="${questionSeconds}" aria-valuenow="${questionSeconds}"><div id="time-fill"></div></div><div class="scene" aria-hidden="true">${scenes[index]}</div><span class="category">${item.topic}${retry?` · 원래 ${index+1}번`:''}</span><h2>${item.q}</h2><p class="instruction">나라면 어떻게 할까? 가장 좋은 선택을 눌러 봐요!</p><div class="options">${item.choices.map((choice,i)=>`<button class="option" data-choice="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${choice}</span></button>`).join('')}</div><div id="feedback" aria-live="polite"></div><div class="actions"><small>⭐ 정답 하나에 스탬프 하나 · 10점</small><button class="primary" id="next" disabled>${position===queue.length-1?'내 배지 확인하기 🏅':'다음 문제 →'}</button></div>`;
  quiz.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>selectAnswer(Number(button.dataset.choice))));
  quiz.querySelector('#next').addEventListener('click',()=>{position++;if(position<queue.length)renderQuestion(true);else renderResult();});
  if(moveFocus)focusHeading();
  startTimer();
}
function selectAnswer(choice){
  if(locked)return;
  if(choice!==-1 && performance.now()>=deadline)choice=-1;
  stopTimer();
  locked=true;
  const item=questions[queue[position]];
  answers[queue[position]]=choice;
  const correct=choice===item.answer;
  playTone(correct);
  updateStamps(correct?'야호! 정답 스탬프 하나 추가! ⭐':'괜찮아! 해설을 읽고 다시 도전하면 돼! 💪');
  if(correct){quiz.classList.remove('pop');void quiz.offsetWidth;quiz.classList.add('pop');}
  quiz.querySelectorAll('[data-choice]').forEach(button=>{const i=Number(button.dataset.choice);button.disabled=true;if(i===item.answer)button.classList.add('correct');if(i===choice){button.classList.add('selected');if(!correct)button.classList.add('wrong');}});
  quiz.querySelector('#feedback').innerHTML=`<div class="feedback ${correct?'':'wrong'}"><strong>${correct?'⭐ 정답! 스탬프 획득 +10점':choice===-1?'⏰ 시간 종료! 해설을 읽고 다시 도전해요.':'💪 배움의 힘 충전! 다음엔 할 수 있어요!'}</strong><p>${correct?'':`정답: ${item.choices[item.answer]}<br>`}${item.why}</p></div>`;
  quiz.querySelector('#next').disabled=false;
}
function renderResult(){
  stopTimer();document.body.dataset.screen="result";
  const wrong=questions.map((q,i)=>answers[i]===q.answer?null:i).filter(i=>i!==null);
  const score=(questions.length-wrong.length)*10;
  const needsRetry=score<=70;
  updateStamps(needsRetry?'조금만 더! 틀린 문제를 다시 풀고 스탬프를 모아 보자.':'퀴즈 성공! AI를 바르게 쓰는 멋진 선택이었어!');
  quiz.innerHTML=`<div class="result"><span class="category">${versionLabel()} · ${retry?'재도전 결과':'퀴즈 완료'}</span><div class="result-icon" aria-hidden="true">${needsRetry?'🌱':'🎉'}</div><h2>${needsRetry?'조금 더 배우면 할 수 있어요!':'멋져요! AI 윤리 탐험 성공!'}</h2><div class="score">${score}<small> / 100점</small></div><p>10문제 중 <strong>${10-wrong.length}문제</strong>를 맞혔어요.<br>${needsRetry?`70점 이하라면 틀린 문제에 재도전해요.<br>맞힌 문제는 유지하고, ${wrong.length}문제만 다시 풀어요.`:'배운 내용을 일상에서도 실천해 봐요.'}</p><div class="result-buttons">${needsRetry?'<button class="primary" id="retry">틀린 문제 다시 풀기 →</button>':''}<button class="${needsRetry?'secondary':'primary'}" id="restart">처음부터 다시 풀기</button></div>${wrong.length?`<div class="review"><h3>틀린 문제 돌아보기 · ${wrong.length}문제</h3>${wrong.map(i=>`<details><summary>${i+1}. ${questions[i].topic}</summary><p>${questions[i].q}</p><p>내 답: ${answers[i]===-1?'시간 초과 (미응답)':questions[i].choices[answers[i]]}<br><strong>정답: ${questions[i].choices[questions[i].answer]}</strong></p><p>${questions[i].why}</p></details>`).join('')}</div>`:''}</div>`;
  if(needsRetry)quiz.querySelector('#retry').addEventListener('click',()=>{queue=wrong;position=0;retry=true;beginCountdown();});
  const badge=document.createElement('div');badge.className='badge';
  badge.innerHTML=`<span>${score===100?'🏆':needsRetry?'🚀':'🏅'}</span><strong>${score===100?'AI 윤리 퀴즈 마스터':needsRetry?'도전하는 AI 탐험가':'멋진 AI 윤리 챔피언'}</strong><small>청원생명축제 · AI 윤리 퀴즈 체험</small>`;
  quiz.querySelector('.score').before(badge);
  quiz.querySelector('#restart').textContent='다음 참가자 시작하기 ↻';
  if(!needsRetry)celebrate();
  quiz.querySelector('#restart').addEventListener('click',()=>{renderVersionSelection();focusHeading();});
  focusHeading();
}
function renderWelcome(){
  stopTimer();clearInterval(countdownId);document.body.dataset.screen="welcome";
  updateStamps('안녕! 나는 퀴즈 친구 큐비야. AI 윤리 퀴즈에 도전해 볼래?');
  quiz.innerHTML=`<div class="welcome"><span class="category">${versionLabel()} · 10문제 · 문제당 15초</span><div class="ready-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></div><h2>준비되셨나요?</h2><p>생활 속 10가지 AI 상황에서 나만의 선택을 해 봐요.<br>정답 스탬프를 모아 나만의 배지를 받아요!</p><div class="welcome-steps"><span>① 선택하기</span><span>② 스탬프 모으기</span><span>③ 배지 받기</span></div><p class="time-rule">문제당 15초! 시간이 끝나면 오답 처리돼요.<br>해설은 시간제한 없이 읽을 수 있어요.</p><button class="primary start" id="start">시작 🚀</button><div><button class="back-button" id="change-version">← 버전 다시 선택</button></div><small>이름 입력 없이 바로 참여할 수 있어요.</small></div>`;
  quiz.querySelector('#start').addEventListener('click',beginCountdown);
  quiz.querySelector('#change-version').addEventListener('click',()=>{renderVersionSelection();focusHeading();});
}
function renderVersionSelection(){
  stopTimer();clearInterval(countdownId);countdownId=null;
  answers=Array(10).fill(null);position=0;retry=false;locked=false;
  document.body.dataset.screen='welcome';
  updateStamps('반가워요! 나에게 맞는 AI 윤리 퀴즈를 선택해 주세요.');
  quiz.innerHTML='<div class="welcome"><span class="category">청원생명축제 · AI 윤리 퀴즈 체험</span><h2>어떤 퀴즈에 도전할까요?</h2><p>학생도, 어른도 함께 즐기는 AI 윤리 챌린지!</p><div class="version-options"><button class="version-card" id="student-version"><span aria-hidden="true">🎒</span><strong>학생 버전</strong><small>초·중등 학생을 위한<br>학교와 친구, 생활 속 AI</small><b>10문제 · 문제당 15초 →</b></button><button class="version-card adult" id="adult-version"><span aria-hidden="true">💼</span><strong>성인 버전</strong><small>성인을 위한<br>업무와 일상 속 AI</small><b>10문제 · 문제당 15초 →</b></button></div><small>70점 이하이면 틀린 문제만 다시 도전할 수 있어요.</small></div>';
  quiz.querySelector('#student-version').addEventListener('click',()=>chooseVersion('student'));
  quiz.querySelector('#adult-version').addEventListener('click',()=>chooseVersion('adult'));
}
renderVersionSelection();
