/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === needle || !needle) return 0;
    
    const left = haystack.split(needle)[0];
    if(haystack === left) return -1;
    return left.length
};