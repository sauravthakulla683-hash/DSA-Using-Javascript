let a = [1, 7, 3, 6, 5, 6];
let left = 0;
let total = 0;

for (let i = 0; i < a.length; i++) {
  total = total + a[i];
}

for (let i = 0; i < a.length; i++) {
  let right = total - a[i] - left;
  if (left === right) {
    console.log("Pivot index :", i);
  }
  left = left + a[i];
}
