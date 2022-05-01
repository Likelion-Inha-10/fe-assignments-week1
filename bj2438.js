let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

let answer = "";

for (let i = 0; i < input; i++) {
  answer += "*";
  console.log(answer);
}
