let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = arr[0];

for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);
