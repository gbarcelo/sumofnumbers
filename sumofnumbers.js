let sample = [1,2,3];

function sumFor(nums) {
  let total = 0;
  for (n of nums){
    total += n;
  }
  return total;
}

console.log(sumFor(sample));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(sample));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(sample));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(sample));
