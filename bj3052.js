/* 입력받은 수가 담긴 배열에서 중복된 값을 제거한 컬렉션을 만들어서 요소의 갯수를 출력
-Set 객체를 활용해 중복된 요소가 없는 컬렉션을 생성한 후 배열로 만들기
-filter()와 indexOf()를 활용하여 콜백함수(:다른 함수에 매개변수로 넘겨준 함수,나중에 필요할 때 콜백-호출 한다)에서
받아온 요소들을 indexOf()에 전달 해주어 검사중인 요소의 index와 배열에서 해당 요소의 첫 index를 비교하여 새로운 배열을 만듦
-foreEach()와 includes()를 활용하여 기존 배열에 없는 요소만 새로운 배열에 추가해서 중복 없는 배열을 만드는 방법 
-Set 객체를 활용하면 간단하게 중복 없는 컬렉션을 만들수 있다.
(참고 : https://velog.io/@wandakim/boj-node.js-%EB%B0%B1%EC%A4%80-3052%EB%B2%88-%EB%82%98%EB%A8%B8%EC%A7%80-javascript) */

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>+val);

const arr = input.map((el) => el % 42);
const set = new Set(arr);
const uniqueArr = [...set];
console.log(uniqueArr.length);