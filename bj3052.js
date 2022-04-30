let input1 = require("fs").readFileSync("/dev/stdin").toString().split("\n");
numbers = input1.map(Number);

let arr = [];
let num = numbers[0] % 42;

for (let i = 0; i < 10; i++) {
  num = numbers[i] % 42;
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
}

console.log(arr.length);
