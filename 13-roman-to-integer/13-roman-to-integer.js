/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumbersMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i != 0 && romanNumbersMap[s[i - 1]] < romanNumbersMap[s[i]]) {
            result = result - romanNumbersMap[s[i - 1]];
            result = result + (romanNumbersMap[s[i]] - romanNumbersMap[s[i - 1]])
        } else {
            result = result + (romanNumbersMap[s[i]])
        }
    }
    return result;
};