// LikeLion 백준 문제풀이
// 2438. 별 찍기 - 1
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 멋대 10기 이동령
let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}
