/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let stringS
    for(let char of s){
        stringS ^= char.charCodeAt(0)
    }
    for(let char of t){
        stringS ^= char.charCodeAt(0)
    }
    
    return String.fromCharCode(stringS);
};