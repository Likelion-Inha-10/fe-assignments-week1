let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const num1 = Number(input[0]);
if(num1>= 90 && num1 <= 100){
    console.log("A")
}

else if(num1>= 80 && num1 <= 89){
    console.log("B")
}

else if(num1>= 70 && num1<= 79){
    console.log("C")
   
}
else if(num1>= 60 && num1 <=69){
    console.log("D")
}

else{ console.log("F")}
 /*&&는 둘다 참일 때 참, ||는 둘 중 하나만 참이어도 참*/
