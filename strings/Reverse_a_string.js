let s = ["h", "e", "l", "l", "o"];
let a = [];
let count = 0;
let i = 0;

for (i = s.length - 1; i >= 0; i--) {
  a[count] = s[i];
  count++;
}
i = 0;
while (i < s.length) {
  s[i] = a[i];
  i++;
}
console.log(s);
