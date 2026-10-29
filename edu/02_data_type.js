//원시형(Primitive type)
let num1 = 1;
let num2 = num1;
num2 = 99;
// 프라이밋 타입의 기본 속성임. 1, 99가 나온다. 값자체를 복사 해 오기 때문에 본인이 별도로 값을 가지고 있다. 연결 링크 없음
console.log(num1, num2);

//참조형(Reference Type)
let obj1 = {id: 1, name: '둘리', etc: {addr: '대구', test: {key1: 'val1'}}};
// let obj2 = obj1;
// obj2.name = '홍길동';
// console.log(obj1.name, obj1.name);
//내가 직접 값을 가지고 있는게 아니라 어딘가에 가지고 있는 값을 바라본다고 하여 참조형이라 한다. 남이 가지고 있는걸 내거처럼 쓰는것. 두개?라고 해도 될지 모르겠지만 속성 모두 홍길동이 된다. 연결링크 있음.

//참조형 타입은 원본을 해치기때문에 원본을 지키며 대입연산자를 쓰려면 쉘로우 카피? 이런게 나왔다.

//얕은 복사 (Shallow Copy)
//객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참고형 데이터일 경우 주소만 복사하는 방식.

let obj3 = {...obj1};
// 디스트럭셔닝 문법 응용
// obj3.name = '또치';
// obj3.etc.addr ='서울';
// 최상위 계층 값자체 복사 가능 사용하는곳, 내가 사용하는 객체가 최상위 객체밖에 없는 경우에 사용해도 문제 없다.
// console.log(obj1.name, obj3.name, obj3.etc.addr);

//깊은 복사 (deep copy)
//객체의 모든 계층의 값을 복사. 루프를 계속 돌리고있기에 속도가 느리다.
// JSON 데이터 포맷 형식? json은 텍스트로 이루어진 문자열 데이터 자바스크립트 작성법과 굉장히 유사.
let obj4 = JSON.parse(JSON.stringify(obj1));
// stringify가 json객체로 바꿔준다.
//parse가 JSON을 java script객체로 바꿔준다.

obj4.name = '또치';
obj4.etc.addr ='서울';
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);

const obj5 = {id:2};
obj5.id = 3;
const num5 =1;
num5 = 5;
//const도 레퍼런스 타입이라면 대체가 된다. 상수는 내가 가지고 있는 값자체는 안변한데 나한테 있는 iD가 가지고 있는 값이 변하는건 가능하다. 다만 