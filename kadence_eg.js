let arr = [1, -2, 3, 4];
let sum = 0;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  sum = Math.max(arr[i], sum + arr[i]);
  max = Math.max(max, sum);
}
console.log(max);
