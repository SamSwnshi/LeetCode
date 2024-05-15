/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let num = [];
    let inc = 0;
    let dec = s.length;
    let i = 0;
    while(num.length !== s.length+1){
        num[i] = s[i] === 'D'? dec--: inc++;
        i++;
    }
    return num;
};