// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 	1-1. 다음 페이지를 가져올 때 기존 데이터는 지워지지 않습니다.
// 	1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 	2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- paramers: 
// 	  - page: number
// 	  - limit: number
(() => {

  //즉시실행 함수 처음 할 때만 실행되고 다음은 실행 안됨. 즉시실행 함수를 여기서 왜 쓴거.
  let allowFlg = true; // 디바운싱 제어용 플래그
  const baseURL = 'https://picsum.photos/v2/list';
  let page = 1;
  const limit = 3;
  
  const btnNext = document.querySelector('#btnNext');
  btnNext.addEventListener('click', async () => {
    // allowFlg가 true일, 경우 해당 처리 시작
    if(allowFlg) {
      // 처리 시작시 false로 변경해서 처리중 다시 실행되지 않도록 막음
      allowFlg = false;

      try {
        const config = { 
          params: {
            //속성값 단축
            // 객체의 프로퍼티를 설정할때, 사용할 변수명과 키명이 일치하면
            // 아래처럼 단축작성 가능
            // limit: limit, page: page <이거라서 ?page=page를 해준다.
            limit,
            page
            // 순서가 상관없다. 객체는 순서성이 없어서 상관없는데 배열은 있어서 상관있다. 콘피그, 베이스유알엘도 상관없다.
          }
          // 내가 알고있는 객체와 다른데.... 객체를 만들어보는 연습하기. 위에건 변수명과 키값을 똑같이 할 경우 변수명을 손 쉽게 할 수 있는 방법
        };
    
        const res = await axios.get(baseURL, config);
        // 리미트와 파라미터를 담는다..
        //콘피그에 뭐가 담기는지 모를땐 우린 액시오스를 쓰니까 액시오스 홈피에 간다.
    
        res.data.forEach(item => {
          const container = document.querySelector('.container');
    
          const newCard = document.createElement('div');
          const newCardImg = document.createElement('div');
          const newCardAuthor = document.createElement('p');
    
          newCardImg.classList.add('card-img');
          newCardImg.style.backgroundImage = `url('${item.download_url}')`;
          newCard.appendChild(newCardImg);
    
          newCardAuthor.textContent = `${item.id}: ${item.author}`;
          newCard.appendChild(newCardAuthor);
    
          newCard.classList.add('card');
          container.appendChild(newCard);
        });
    
        page++;
      } catch(error) {
        console.error(error);
      } finally {
        allowFlg = true;
        //뭐든 초기화를 시켜주어야하니 트루로 변경
      }
    }
  });
  
  const btnReset = document.querySelector('#btnReset');
  btnReset.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.textContent = '';
  
    page = 1;
  });
})();

//디세이블드로 클릭을 막을수는 있지만 자바스크립트에 의한 공격은 막을 수 없다.
//보통 프론트엔드에서 이벤트 핸들러 함수가 너무 많이 일어나 버그가 일어난다 스크롤 이벤트가 과부하가 많이 일어나는 이벤트 중 하나다.

//커밋하는 기준. 동작을 실행하는 코드 하나가 완전히 실행한다는 보장 하에 실행하는것임. 스태시 스태이지드, 스태이징 한것들만 임시저장 하라시킴. 가장 안전한 방법은 내가 저장한 스태이시 하나하나 꺼내오는거다.