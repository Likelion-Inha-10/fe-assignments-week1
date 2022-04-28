let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let num=[];
let remainder = [];
for(let i = 0; i<10; i++){
    num.push(input[i]);
    remainder[i]=num[i]%42;
}

let remain=[];
for(let j=0; j<10; j++){
    if(remain.indexOf(remainder[j])===-1){
        remain.push(remainder[j]);
    }
}
console.log(remain.length);