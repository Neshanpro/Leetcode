/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
      let w = s.match(/[a-zA-Z]/g);
  return s.split(``).map((cur) => (cur.match(/[a-zA-Z]/) ? w.pop() : cur)).join(``);
};