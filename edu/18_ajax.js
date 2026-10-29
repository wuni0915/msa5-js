// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100

//기존화면은 그대로 두고 데이터만 요청해서 받아와야한다. 이러려면 서브밋 이벤트를 막아야함
const form = document.querySelector("form");


form.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const baseURL = "https://picsum.photos";
  const path = '/v2/list'
  // 패쓰임


  //이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  // page라는 아이디의 인풋태그를 가져온다. 그래서 2를 가져온다. 돔객체에서 가져온 값은 문자열이다.우리눈에선 숫자지만 컴퓨터에선 문자열임. 우리한테 필요한 값으로 형변환 할 필요가 있다. 데이터를 받아올때까지 대기하는 동기처리를 해야한다.

  const limit = e.target.limit.value;
  // 둘다 name을 가져왔다. 

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;
  // const url = `${baseURL}${path}?page=/2/&limit=/100/`;
  try {
    const response = await axios.get(url);
    console.log(response);
    //데이터 보는 화면을 모르겠는디.

    //카드를 넣을 컨테이너 요소
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent='';

    // 같은 처리를 반복하는건 roof처리를 한다.
    response.data.forEach((item)=>{
      
      //2.card-img 요소 생성
      const cardImg =document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${item.download_url}')`;
      //카드이미지 노드에  여기서 노드가 뭐야
      
      //3.card-text 요소 생성
      const cardText =document.createElement('p');
      cardText.classList.add('card-txt');
      cardText.textContent = `${item.id}: ${item.author}`;
      
      //4.cardContainer에 생성한 요소를 담는다.
      const card = document.createElement('div');
      cardContainer.appendChild(card);
      
      //1.card 요소 생성
      card.classList.add('card');
      // 클래스 붙이기 또는 클래스 어트리부트로도 가능. 속성이기때문에 기존 내가 넣은 문자열을 대체한다.
      
      // 돔거 어쩌고는 보통 콘스트로 생성한다
      card.appendChild(cardImg);
      card.appendChild(cardText);
      // 순서대로 넣어야댐~~~~~~~~~~~

    }); //밸류, 인덱스
    
  }catch(error){
    console.log(error);
    
  }
  // await axios 이미 만들어져있다. 여기서 get의 역할은..?

  // fetch("https://picsum.photos/v2/list?page=2&limit=100")
  // //예외처리를 하나하나 해줘야한다.
  // .then()
  //axios라이브러리에 인터셉트를 넣어서 뭘 가로챈다.
  //유지보수때문에 규모작은 사이트에서 페치 api쓰기 괜찮음... 크면 안좋
  //axios는 받아오는 파일이 아니기때문에 뭐 cdn이라는 방식으로 넣었다? 자바스크립트 파일보다 액시오스 파일이 먼저 실행 되어야한다 (작성 순서)
});