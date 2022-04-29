//6번 반복문: 별 찍기-1

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num = Number(input[0]);

var star = '';
for (var i = 0; i < num; i++) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);