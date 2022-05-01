/*let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);

for (i = 1; i <= num1; i++){
    console.log(i);
}*/

let input = require("fs").readFileSync("dev/stdin").toString().split(" ");
let num = Number(input);

let str = "";
for (let i = 1; i <= num; i++) {
  str = str + i + "\n";           /* \n은 enter 개념으로 이해*/
}

console.log(str);