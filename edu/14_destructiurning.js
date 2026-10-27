//구조분해 문법 destructurning 문법
//배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];

let idx1 = arr[0];
let idx2 = arr[1];
let idx3 = arr[2];
let idx4 = arr[3];
let idx5 = arr[4];

let [i1, i2, i3, i4, i5] = arr;
//i1 = 인덱스 0, ~ 이렇게 부여된다.

console.log(i3);

const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  addr: "대구 광역시",
  info: {
    board: 1,
  },
};
//property
const { name: userName, age, addr2 = "없음" } = user;
// 변수명 바꾸고 싶을때 기존 name 에서 :변수명
console.log(userName, age, addr2);
//너무 다 쓰여서 실제 있는 속성이라 웬만하면 쓰지 말라는 의미로 중간선을 긋는것.
// function test(num = 999) {
//   // 아규먼트로 값을 주지 못했을경우 매개변수 자리에서도 값을 할당 할 수 있다.
//   console.log(num);
// }
// // test(); = test('');
