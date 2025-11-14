let a = [1, 2, 3, 4, 4, 5];
let k = 0;
let val = 4;

for (let i = 0; i < a.length; i++) {
  if (a[i] !== val) {
    a[k] = a[i];
    k++;
  }
}
console.log(k);
console.log(a);
