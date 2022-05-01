// LikeLion 백준 문제풀이
// 2741. N 찍기
// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 멋대 10기 이동령
let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const n = Number(input[0]);
let result = "";

for (let i = 1; i <= n; i++) {
  result += i + "\n";
}

console.log(result);
