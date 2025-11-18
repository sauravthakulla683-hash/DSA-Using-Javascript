let a = [1, 2, 3, 1, 1, 1, 1, 1];
let count = 0;
let max = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === 1) {
    count++;
    max = Math.max(count, max);
  } else {
    count = 0;
  }
}
console.log(max);
