let input = [0]
 let num1 = Number(input[0])
for ( let i = 1; i <= num1; i++){
    let stars = [];
    for(let j = 1; j <= i; j++){
        stars += '*'
    }
    console.log(stars);
}