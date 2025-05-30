const removeElement = (nums, val) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
};
