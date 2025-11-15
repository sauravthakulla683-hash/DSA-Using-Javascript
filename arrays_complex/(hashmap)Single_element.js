let a = [1, 2, 3, 4, 5, 1, 2, 3, 4];

let map = {};

for (let i of a) {
  if (map[i] === undefined) {
    map[i] = 1;
  } else {
    map[i]++;
  }
}

for (let i of a) {
  if (map[i] === 1) {
    console.log(i);
    break;
  }
}
