var removeduplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

let arr = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(removeduplicates(arr));
