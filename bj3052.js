let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputArr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    inputArr.push(input[i].split(" "));
  }
}

let indexArr = [];
for (let i = 0; i < 42; i++) {
  indexArr.push(0);
}

let answer = 0;
for (let i = 0; i < 10; i++) {
  if (indexArr[parseInt(inputArr[i]) % 42] == 0) {
    answer++;
    indexArr[parseInt(inputArr[i]) % 42] = 1;
  }
}
console.log(answer);