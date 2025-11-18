let a = [1, 2, 3, 1, 1, 1, 1, 1];
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === 1) {
    count++;
  }
}
console.log(count);
