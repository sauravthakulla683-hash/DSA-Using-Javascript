let arr1 = [1, 2, 4, 5];
let arr2 = [3, 6, 7];
let m = 3;
let n = 2;
let temp = m + n + 1;
for (let i = 0; i <= n; i++) arr1.push(0);
while (m >= 0 && n >= 0) {
  if (arr1[m] < arr2[n]) {
    arr1[temp--] = arr2[n--];
  } else {
    arr1[temp--] = arr1[m--];
  }
}
while (n > m) {
  arr1[temp--] = arr2[n--];
}
console.log(arr1);
