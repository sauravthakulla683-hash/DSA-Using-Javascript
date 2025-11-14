let a = [1, 2, 3, 3, 4, 5];
let k = 3;
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === k) {
    a.splice(i, 1);
    count++;
    i--;
  }
}
console.log(count);
console.log(a);
