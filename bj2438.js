let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);

result = '';

for (let i = 0; i < A; i++) {
  for (let j = 0; j <= i; j++) {
    result = result + '*';
  }
  result = result + '\n';
}

console.log(result);