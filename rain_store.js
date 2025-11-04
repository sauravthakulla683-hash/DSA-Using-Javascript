let heigth = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let right = new Array(heigth.length);
let left = new Array(heigth.length);
let leftMax = heigth[0];
let rightMax = heigth[heigth.length - 1];
left[0] = leftMax;
right[heigth.length - 1] = rightMax;

for (let i = 1; i < heigth.length; i++) {
  leftMax = Math.max(leftMax, heigth[i]);
  left[i] = leftMax;
}
for (let i = heigth.length - 2; i >= 0; i--) {
  rightMax = Math.max(rightMax, heigth[i]);
  right[i] = rightMax;
}
let ans = 0;
for (let i = 0; i < heigth.length; i++) {
  ans = ans + Math.min(left[i], right[i]) - heigth[i];
}
console.log(ans);
