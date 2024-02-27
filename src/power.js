/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
    if( exponent < 0) {
      throw new Error("exponent should be >= 0");
    }
    // base case
    if (exponent === 0) {
      return 1;
    }
    //recursive case
    return base *( power(base, exponent-1));
  }
  
  // const base = 2;
  // const exponent = 5;
  // console.log(power(base, exponent));
  
  module.exports = power;