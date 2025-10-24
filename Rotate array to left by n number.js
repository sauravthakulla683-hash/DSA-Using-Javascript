let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 4; //assign any number

for (let i = 0; i < k; i++) {
  let temp = arr[0];
  for (let s = 0; s < arr.length - 1; s++) {
    arr[s] = arr[s + 1];
  }
  arr[arr.length - 1] = temp;
}

console.log(arr);
