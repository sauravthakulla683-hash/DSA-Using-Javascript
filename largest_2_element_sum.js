let sum = 0;
let max = -Infinity;
let a = [1, -2, 3, 4, 8];

for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    sum = a[i] + a[j];
    if (max <= sum) {
      max = sum;
    }
  }
}

console.log(max);
