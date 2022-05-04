let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const num1 = Number(input[0]);
if(num1 % 4 === 0 && num1 % 100 !== 0){
    console.log("1")
}

else if(num1 % 400 === 0){
    console.log("1")
}

else{ console.log("0")}