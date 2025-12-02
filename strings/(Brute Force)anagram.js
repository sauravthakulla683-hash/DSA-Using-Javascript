let a = "racecar";
let b = "carrace";
b = b.split("");

if (a.length !== b.length) {
  console.log(false);
  return;
}

for (let i = 0; i < a.length; i++) {
  let temp = 0;
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      temp = 1;
      b[j] = null;
      break;
    }
  }
  if (temp === 0) {
    console.log(false);
    return;
  }
}

console.log(true);
