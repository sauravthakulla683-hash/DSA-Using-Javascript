let a = [1, 2, 3, 4];
let p = new Array(a.length);
let product = 1;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (i === j) {
      product = product * 1;
    } else {
      product = product * a[j];
    }
  }
  p[i] = product;
  product = 1;
}

console.log(p);
