let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
let num2 = "";

for(let i = 1; i <= num1; i++){
    num2 += i + "\n";
}
console.log(num2);