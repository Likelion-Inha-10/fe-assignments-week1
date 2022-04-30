let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let count = input[0];
let numbers = input[1].split(" ").map(Number);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < count; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }

  if (max < numbers[i]) {
    max = numbers[i];
  }
}

console.log(min, max);
