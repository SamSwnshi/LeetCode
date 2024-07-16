/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let ans = s.split(" ");
 let word = ans.slice(0,k);
    
    let result = word.join(" ");
    return result;
};