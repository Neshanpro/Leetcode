/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length

    for (let i = 0; i < n + 1; i++) {
        if(!nums.includes(i)) return i
    }
};