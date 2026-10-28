//기존화면은 그대로 두고 데이터만 요청해서 받아와야한다. 이러려면 서브밋 이벤트를 막아야함

const form = document.querySelector("form");

form.addEventListener("click", (e)=>{
  e.preventDefault();

  //이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
  // 둘다 name을 가져왔다. 
});