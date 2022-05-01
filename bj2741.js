let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);

for(let i =0; i <= A; i++) {
  console.log(i);
}