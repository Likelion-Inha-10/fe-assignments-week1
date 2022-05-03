let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');  /*문자열을 일정한 구분자(여기서는 공백)로 구분해서 배열, 저장*/

let count = Number(input[0]);
let numberStr = input[1].split(' ');

let numbers = numberStr.map(function(cur) {
  return Number(cur);
});

let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(`${min} ${max}`);
/*map은 배열을 순회하면서 실행되는 콜백함수의 결과값들을 새로운 배열로 반환한다.
let array = [1, 4, 9, 16];
let result = array.map(x => x * 2); 

배열에 map 메소드를 사용해서 리턴값으로 배열의 원소 *2	값을 result 에 할당한다.
화살표함수( 전통적인 함수표현(function)의 간편한 대안)
                                    
console.log(array)  //map 은 원본값은 건드리지 않고 새로운 배열을 생성하여 리턴한다.
 [1, 4, 9, 16]
console.log(result)  // 새로운 배열을 생성하여 result의 할당한 결과값.
[2, 8, 18, 32]*/


