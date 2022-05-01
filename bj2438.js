let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let line = Number(input)

for (let star =1 ; star<=line; star += 1){
        
        console.log('*'.repeat(star))
    }
