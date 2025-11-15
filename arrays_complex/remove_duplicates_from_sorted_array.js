let a = [1, 3, 3, 4, 5];
let k = 1;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] !== a[i + 1]) {
    a[k] = a[i + 1];
    k++;
  }
}
console.log(k);
console.log(a);
