let nums = [1, 2, 3, 4, 5, 6];
let set = new Set(nums);
let k = 2;
let count = 0;
if (k === 0) {
  let map = new Map();
  let count = 0;

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let [num, freq] of map) {
    if (freq > 1) count++;
  }

  return count;
}
for (let i of set) {
  if (set.has(i + k)) {
    count++;
  }
}
console.log(count);
