let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);

let input2 = input[1].split(' ');

//let arr = [20, 10, 35, 30, 7];
let minmax ="";
input2.sort((a, b) => a-b); //오름차순으로 정렬해 최소값 찾기
minmax = input2[0];
minmax = minmax + " " + input2[n-1];

console.log(minmax);