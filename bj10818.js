let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
let N = Number(input[0]);
// let stringNumbers = input[1].split(" ");
// let numbers = stringNumbers.map(Number);

let num = Number(input[1]);
let max = num;
let min = num;

for (let i = 1; i < N; i++) {
  num = Number(input[i + 1]);
  if (max < num) {
    max = num;
  }
  if (min > num) {
    min = num;
  }
}

console.log(min, max);
