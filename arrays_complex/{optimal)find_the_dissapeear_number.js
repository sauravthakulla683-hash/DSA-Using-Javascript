var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  let b = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      b.push(i + 1);
    }
  }

  return b;
};

let nums = [1, 2, 3, 4, 5, 6, 7, 3, 8];
let a = findDisappearedNumbers(nums);
console.log(a);
