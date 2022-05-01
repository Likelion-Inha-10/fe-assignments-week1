//4번 조건문: 윤년(윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.)
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const year = Number(input[0]);

Number.MAX_VALUE = 4000;
Number.MIN_VALUE = 2;


if ((year % 4 == 0 && year % 100 !==0) || year % 400 == 0) {
    console.log("1");
}

else {
  console.log("0");
};