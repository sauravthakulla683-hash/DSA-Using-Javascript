let a = [1, 2, 3, 4];
let ans = false;
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] === a[j]) {
      ans = true;
      break;
    }
  }
  if (ans) break;
}
console.log(ans);
