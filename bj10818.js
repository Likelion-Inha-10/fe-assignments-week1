//7번 배열: 최소, 최대

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let num = input[1].split(' ').map(x=> Number(x));

let max = num[0]; 
let min = num[0];

for (let i = 1; i < count; i++) {
  if (max < num[i]) {
    max = num[i];
  }
  
  if (min > num[i]) {
    min = num[i];
  }
}

console.log(`${min} ${max}`);