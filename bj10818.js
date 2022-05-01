const input = require("fs").readFileSyns("/dev/stdin").toString().split("\n");

const count = input[0];
const nums = input[1].split("").map(Number);

nums.sort((a, b) => a - b);

console.log(nums[0], nums[count - 1]);
