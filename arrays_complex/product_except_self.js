let a = [1, 2, 3, 4];
let prefix = new Array(a.length);
let suffix = new Array(a.length);
prefix[0] = 1;
suffix[a.length - 1] = 1;

for (let i = 1; i < a.length; i++) {
  prefix[i] = prefix[i - 1] * a[i - 1];
}
for (let i = a.length - 2; i >= 0; i--) {
  suffix[i] = suffix[i + 1] * a[i + 1];
}
for (let i = 0; i < a.length; i++) {
  a[i] = prefix[i] * suffix[i];
}
console.log(a);
