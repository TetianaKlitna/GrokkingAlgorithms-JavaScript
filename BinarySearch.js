const search = (nums, target) => {
  if (target < nums[0] || nums[nums.length - 1] < target) {
    return -1
  }

  let startInd = 0
  let endInd = nums.length - 1

  while (startInd <= endInd) {
    let midInd = Math.floor((startInd + endInd) / 2)
    let guess = nums[midInd]

    if (guess === target) {
      return midInd
    }

    if (guess < target) {
      startInd = midInd + 1
    } else {
      endInd = midInd - 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9) === 4)
console.log(search([-1, 0, 3, 5, 9, 12], 2) === -1)
