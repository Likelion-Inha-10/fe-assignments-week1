let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Number = [];

input.forEach(x => {
     const num = x % 42;
    
    if (Number.indexOf(num) === -1) {
        Number.push(num);
    }
});
console.log(Number.length);