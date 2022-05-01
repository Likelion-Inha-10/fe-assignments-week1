let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const n = Number(input[0]);


let stars ="";
for(let i = 1; i <= n; i++){
    stars ="";
    for(let j = 1; j <= i; j++){
        stars = stars + "*";
    }
    console.log(stars);
}