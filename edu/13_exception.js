//에러로 빠지는 상황을 가정하고 예외 처리 과정을 만드는것이다. 선생님 노션에 에러와 예외 설명이 있다
//예외 처리 굉장히 중요.
//에러 상황을 일부러 생성시키고 예외처리를 해보는것이 중요하다.

//node js란? 자바스크립트를 브라우저외에서도 실행할 수 있게 해주는 자바스크립트 환경이다. f12눌러서 확인 안해도 됨. >reload 로 새로고침하고 터미널에서 node --version 을 친다.(이건 노드가 잘 깔렸는지 버전 정보를 같이 확인하는것이다.)

// console.log(1);
// console.log(2);
// // console.log(test.main);
// // 존재 하지 않는 객체이기때문에 undefined임으로 에러 발생 다음줄부터 찍히지 않음 <- 이거를 미리 예상하고 예외처리해야한다.
// try {
//   // 내가 실행 할 처리를 작성
//   console.log("try문 시작");
//   console.log(test.name);
//   console.log("try문 끝");
//   //test가 없기에 try문 끝은 실행 안된다?
//   //try에서 에러가 발생하면 자동으로 정보(빨간색 글자들)이 error로 들어간다.
// } catch (error) {
//   //예외가 발생했을때 처리할 로직을 작성.
//   console.log("에러발생");
//   console.log(error.name); //발생한 에러명
//   console.log(error.message); //발생한 에러를 축약한 내용(간단하게)
//   console.log(error.stack); //디테일한 에러 내용, 방대함. 섬세하게 에러를 추적해야할때 주로 봄.

//   //원래는 1, 2 에러 발생 이후 안뜨는데 catch하고 3,4,5도 찍힌다. 에러 발생 이후 모든게 try안에 있는게 catch로 이동. 에러가 발생하더라도 사이트가 멈추지 않고 정상적으로 흘러가기 위해 예외처리를 해야한다.
// }
// console.log(3);
// console.log(4);
// console.log(5);
//html이 필요없다 디버그 콘솔에서 결과 확인이 가능하다.--------------------

// try {
//   console.log(1);

//   //강제 예외 발생 시키기 1은 나오고 2는 안나오게, 에러객체 하나 만들기
//   throw new Error("강제로 예외 발생 시켰다.");
//   // 새 객체 만들기는 new이다 ?
//   //catch로 들어간다.

//   console.log(2);
// } catch (error) {
//   console.log(error.stack);
// }

//finally > 예외 여부와 상관없이 무조건 실행된다.
try {
  console.log(Test.name);
  console.log(1);
} catch (error) {
  console.log("error");
} finally {
  console.log("finally");
}
//열었던 리소스를 닫아야될때 -> finally. catch까지만 하면 리소스가 열려있다.
//에러를 상세하게 처리하는 방법
//여러종류의 예외를 처리하고 싶을 때, instanceof 연산자를 사용해서 예외를 구체적으로 처리.
//eval() 절대 쓰지말깅~~

try {
  throw new ReferenceError();
  const items = {
    //new를 생략, 여기도 instance가 된거다. 이 행위를 함으로써 item에 객체를 담는것이다. 자바에서는 무조건new키워드를 써야한다.
  }
} catch (error) {
  if (error instanceof SyntaxError) {
    // instancsof - 에러객체의 원래 형태를 반환한다. 싱텍스 에러가 참이라면.
    // 메모리에 올리기 위해서 작성한 코드가 new키워드이다. new를 써야 메모리에 올라간다. new키워드를 써 새 객체를 생성 후 내가 사용 할 수 있는 객체를 instance라고 부른다. 객체를 반드시 instance로 만들어둬야지 접근해서 사용 가능하다. new를 쓴게 instance를 만든 형태이다.
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("참조에러");
  } else {
    console.log("에러에러!");
  }
}
