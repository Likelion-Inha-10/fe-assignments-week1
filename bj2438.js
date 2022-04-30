let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let num = Number(input[0]);

let answer = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j < i + 1; j++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
