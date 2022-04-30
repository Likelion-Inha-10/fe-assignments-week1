let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let remainer = [];
let count = [];

for (let i = 0; i < 10; i++) {
  remainer[i] = input[i] % 42;
  if (count.indexOf(remainer[i]) === -1) {
    count.push(remainer[i]);
  }
}

console.log(count.length);
