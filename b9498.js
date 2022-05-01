// LikeLion 백준 문제풀이
// 9498. 시험 점수
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// 멋대 10기 이동령
let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const score = Number(input[0]);

if (100 >= score && score >= 90) {
  console.log("A");
} else if (90 > score && score >= 80) {
  console.log("B");
} else if (80 > score && score >= 70) {
  console.log("C");
} else if (70 > score && score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
