let a = [1, 6];

a.sort(function (x, y) {
  return x - y;
});

let set = new Set(a);
let arr = [...set];

if (arr.length < 3) {
  console.log(arr[arr.length - 1]);
  return;
}
console.log(arr[arr.length - 3]);
