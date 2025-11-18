let a = [1, 5, 3, 4, 2];
let k = 2;
let count = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let sum = Math.abs(a[i] - a[j]);
    if (sum === k) {
      count++;
    }
  }
}
console.log(count);
