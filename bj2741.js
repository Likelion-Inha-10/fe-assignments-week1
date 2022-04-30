let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let num = Number(input[0]);

let answer = "";

// 이렇게 문자열로 한번에 묶어서 출력하면 시간 초과 안뜸
for (let i = 0; i < num; i++) {
  answer += i + 1 + "\n";
}

console.log(answer);
