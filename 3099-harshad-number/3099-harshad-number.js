/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let s = x.toString();
    let sum = 0;
    for(let i = 0  ; i < s.length ; i++){
        sum += parseInt(s[i])
    }
    if(x % sum === 0){
        return sum
    }else{
        return -1
    }
};