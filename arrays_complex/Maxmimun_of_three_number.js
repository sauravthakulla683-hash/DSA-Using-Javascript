let a = [1, 2, 3, 4, 5, 6, 7];

a.sort(function (a, b) {
  return a - b;
});

let q = a[a.length - 1];
let r = a[a.length - 2];
let s = a[a.length - 3];

let p = q * r * s;
let i = a[0] * a[1] * q;
console.log(Math.max(p, i));
