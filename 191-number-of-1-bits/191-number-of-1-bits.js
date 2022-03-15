/**
 * @param {number} n - a positive integer
 * @return {number}
 */
    const hammingWeight = (n) => n.toString(2).split("1").length - 1;
