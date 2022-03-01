/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1, sum = 0
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry === 0) break
        sum = digits[i] + carry
        digits[i] = sum % 10
        carry = Math.floor(sum / 10)
    }
    
    if (carry > 0) digits.unshift(carry)
    return digits
};