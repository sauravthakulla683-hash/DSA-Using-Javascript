let a = [1, 2, 3, 4, 1];
let set = new Set(a);
let s = false;
if (set.size !== a.length) {
  s = !s;
  console.log(s);
} else {
  console.log(s);
}
