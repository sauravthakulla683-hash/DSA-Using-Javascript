let a = [1, -2, 3, 4];
let max = -Infinity;
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = Math.max(a[i], sum + a[i]);
  max = Math.max(max, sum);
}
console.log(max);
