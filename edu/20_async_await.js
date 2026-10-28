const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      //셋타임아웃은 기본적으로 비동기 성질이라 시간을 안적어도 동기처리 다음에 뜬다.
      if (
        str === "A" ||
        str === "B" ||
        str === "C"
        //가장 첫번째로 참이되는경우가 많은걸 우선순위로 적는게 좋다. 빈도수가 99%되는애를 뒤로 넣어놓으면 비교처리를 3번해야한다. 근데 가장 앞에 적으면 99%는 처리 한번만 하고 끝난다. 참이되는 빈도수가 높은걸 처음으로 적는게 프로그램...어쩌고.암튼 좋음
      ) {
        resolve({ code: "허용", word: str });
        // 객체로 셋팅한거다. 리졸브가 성공패턴으로 왔을때 반환해주는 값이다. 여기서 리졸브(파라미터)가 아닌 리졸브(아규먼트)를 적는다.
      } else {
        reject(new Error("허용하지 않는 문자가 입력 됐다."));
      }
    }, ms);
  });
  //성공했을때의 함수와 실패했을때의 함수를 매개변수자리에 자동으로 넣어준다.
};

const process = async () => {
    // async를 넣어줘야 여기에 await를 쓸수있다.
    // const process = async /function 생략/() => {
        // async function(){} 으로 사용하면 된다.
    try{
        const result1 = await timer('A')
        //타이머라는 비동기처리가 프로미스처리를 반환하고 리졸브가 될때까지 대기를 한다. 그전까지 다음 흐름으로 가지 않는다. 리졸브가 되면 담은 값을 대입을 할 거고 리젝트가 되면 캐치로 들어간다.
        console.log(result1.code, result1.word);

        const result2 = await timer('B');
        console.log(result2.code, result2.word);
        //위에서부터 아래로 차례로 하나씩 읽어간다.

        const result3 = await timer('D');
        // A, B, C만 허용하고있기때문에 안된다. 이 타이머의 결과는 에러객체를 반환했다.
    } catch(error){
        console.log(error.message);
        
    }
}
//자바스크립트에서 1-5정도의 난이도중 4정도이다 프로미스가.

process();
//비동기방식으로 동기 만들기 체이닝메소드와 또다른 방법