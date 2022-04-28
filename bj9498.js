let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const score_num = Number(input[0]);
let score_ABC;

if(score_num >= 90 && score_num <= 100){
    score_ABC = 'A';
}
else if(score_num >= 80 && score_num <= 89){
    score_ABC = 'B';
}
else if(score_num >= 70 && score_num <= 79){
    score_ABC = 'C';
}
else if(score_num >= 60 && score_num <= 69){
    score_ABC = 'D';
}
else{
    score_ABC = 'F';
}
console.log(score_ABC);