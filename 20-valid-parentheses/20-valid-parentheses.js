/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (bracketString) => {
  if (bracketString.length < 2) {
    return false;
  }

  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openBrackets = [];

  for (let i = 0; i < bracketString.length; i++) {
    if (pairs[bracketString[i]]) {
      openBrackets.push(bracketString[i]);
    } else {
      if (bracketString[i] !== pairs[openBrackets.pop()]) {
        return false;
      }
    }
  }

  if (!openBrackets.length) {
    return true;
  }

  return false;
};