let arr = [1, 2, 0, 1, 1, 2, 2, 0, 0, 0];
let i = 0;
let j = 0;
let k = arr.length - 1;

while (i <= k) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
    i++;
  } else if (arr[i] === 2) {
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    k--;
  } else {
    i++;
  }
}

console.log(arr);
