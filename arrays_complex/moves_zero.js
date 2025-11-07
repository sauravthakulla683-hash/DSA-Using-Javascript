let a = [1, 0, 3, 0, 4, 5];
let move = new Array(a.length);
let end = a.length - 1;
let start = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === 0) {
    move[end--] = 0;
  } else {
    move[start++] = a[i];
  }
}
console.log(move);
