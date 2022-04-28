let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num = Number(input[0]);

let star="";
for(let i=0; i<num; i++){
    star+='*';
    console.log(star);
}