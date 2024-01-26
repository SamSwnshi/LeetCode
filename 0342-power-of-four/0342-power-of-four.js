/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
   if(n == 1){return true}
    let check = (n & ( n - 1))===0
    let divide = n %10 === 4 || n % 10 === 6
    return check && divide
};