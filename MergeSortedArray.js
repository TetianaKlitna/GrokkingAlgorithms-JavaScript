/*
try without splice and slice
*/
const merge =  (nums1, m, nums2, n) => {
  let i = 0;
  let j = 0;
  while (i < m + n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      j++;
    } else {
      i++;
    }
  }
  while (j < nums2.length) {
    nums1[nums1.length - n + j] = nums2[j];
    j++;
  }
};
