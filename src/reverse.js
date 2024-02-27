/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
    const reversed = text.split('').reverse().join('');
    
    return reversed;
  }
  
  module.exports = reverse;