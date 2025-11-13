let a = [1, 2, 3, 4, 5, 6, 7];
let k = 5;
let y = new Array();
let ans = false;

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let sum = a[i] + a[j];
    if (sum === k) {
      y.push(a[i]);
      y.push(a[j]);
      ans = !ans;
      break;
    }
  }
  if (ans) break;
}
console.log(y);
