let nums = [1, 2, 3, 4, 2, 3, 1];
let count = 1;
for (let i = 0; i < nums.length; i++) {
  count = 1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === nums[j] && i != j) {
      count = 0;
      break;
    }
  }
  if (count === 1) {
    console.log(nums[i]);
    break;
  }
}
    