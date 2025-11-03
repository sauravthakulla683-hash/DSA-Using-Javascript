let sum = 0;
let max = -Infinity;
let a = [1, -2, 3, 4];

for (let i = 0; i < a.length - 1; i++) {
  for (let j = i; j < a.length - 1; j++) {
    sum = a[i] + a[j];
    if (max <= sum) {
      max = sum;
    }
  }
}

console.log(max);
