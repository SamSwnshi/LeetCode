/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const char = Array(26).fill(0)
    for(let i = 0 ;i < s.length; i++){
        char[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        char[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for(let count of char){
        if(count !== 0){
        return false
        }
    }
    return true;
};
