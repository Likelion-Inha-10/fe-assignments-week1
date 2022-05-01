let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const year = Number(input[0]);
let lap_year;

if(year%4 === 0 && year%400 === 0){
    lap_year = 1;
}
else if(year%4 === 0 && year%100 != 0){
    lap_year = 1;
}
else{
    lap_year = 0;
}
console.log(lap_year);