let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = input[1].split(' ').map(Number);

let min = num2[0];
let max = num2[0];

for(let i=1; i<num1; i++){
    if (min > num2[i]) {
        min = num2[i];
    }
    if (max < num2[i]) {
        max = num2[i];
    }
}
console.log(min, max);