let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");


const A = Number(input[0]);


if (A >= 90 && A <= 100) {
  console.log('A');
} else if (A >= 80 && A < 90) {
  console.log('B');
} else if (A >= 70 && A < 80) {
  console.log('C');
} else if (A >= 60 && A < 70) {
  console.log('D');
} else {
  console.log('F');
}