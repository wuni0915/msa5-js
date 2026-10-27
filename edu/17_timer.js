//타이머 함수

// setTimeout(cb, ms[,args...]):number 콜백/밀리초
//설정한 일정 시간 후에 콜백 함수를 실행
//콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
//return값은 timeoutId 정수값 (해당 타이머의 고유한 식별값)/ 정수값-소수점이 없는 숫자.
console.log("A");
const timeoutId = setTimeout(() => {
  console.log("B");
}, 1000);
console.log("c");
//비동기처리
//해당 ID의 setTimeout을 취소 시킨다
clearTimeout(timeoutId);
//변수명을 선언하는 이유는 줄임말도 있지만 같은 값을 따로따로 사용할 수 있기도 한 때문이다.
setTimeout(()=>clearTimeout(timeoutId), 1500);
// 원하는것 - 1초 유지 후 결과 값이 사라짐. 결과 - 식은 지워졌지만 결과값은 지우지않는다. 결과 값도 지우라고 해야한다.

//디바운싱 기술 제일 처음 누른 요청만 가게 하는것
//쓰루싱 기술 제일 마지막 누른 요청이 가게 하는것

//일정시간마다 반복하게 해주는 타임아웃이 있다.
//setInterval(cb, ms[, ...args]): number(를 리턴한다.)
//설정한 일정 시간마다 콜백 함수를 실행,
//return값은 intervalID 정수값 (해당 인터벌의 고유한 식별값)
const intervalId = setInterval(() => {
    console.log("interval");
    
}, 1000);

setTimeout(()=>{clearInterval(intervalId)}, 5000);
// 1000 뒤부터 시작하기때무네 4번만 찍고 사라진다. 인덱스 같음.