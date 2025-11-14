let a = [1, 2, 2, 4];
let j = 1;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] !== a[i + 1]) {
    a[j] = a[i+1];
    j++;
  }
}
console.log(j);
console.log(a);
