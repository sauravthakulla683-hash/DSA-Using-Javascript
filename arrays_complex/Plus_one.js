let a = [9, 6, 7];

for (let i = a.length - 1; i >= 0; i--) {
  if (a[i] === 9) {
    a[i] = 0;
  } else {
    a[i]++;
    break;
  }
}
if (a[0] === 0) {
  a.unshift(1);
}
console.log(a);
