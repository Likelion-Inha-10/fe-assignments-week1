//5번 반복문: N출력
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num = Number(input[0]);

let std="";

for (let i = 1; i <= num; i++){
  std = std + i + "\n";
};

console.log(std);