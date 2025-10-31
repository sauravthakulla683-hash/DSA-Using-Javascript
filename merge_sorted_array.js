let arr = [2, 5, 6];
let arr2 = [1, 3, 4, 8];
let merge = new Array(arr.length + arr2.length);
let i = 0;
let j = 0;
let k = 0;

while (i < arr.length && j < arr2.length) {
  if (arr[i] < arr2[j]) {
    merge[k++] = arr[i++];
  } else {
    merge[k++] = arr2[j++];
  }
}
while (j < arr2.length) {
  merge[k++] = arr2[j++];
}
while (i < arr.length) {
  merge[k++] = arr[i++];
}

console.log(merge);
