/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != undefined && nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1)
        }
    }
    return nums.length;
};