let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    arr.push(input[i].split(" "));
  }
}

let max = -1000001,
  min = 1000001;

for (let i = 0; i < arr[0][0]; i++) {
  if (parseInt(arr[1][i]) > max) max = arr[1][i];
  if (parseInt(arr[1][i]) < min) min = arr[1][i];
}
console.log("%d %d", min, max);