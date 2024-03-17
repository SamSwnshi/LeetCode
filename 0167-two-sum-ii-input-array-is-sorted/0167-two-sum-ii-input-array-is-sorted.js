/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = 0;
    let e = numbers.length - 1;
    while(s < e){
    if(numbers[s] + numbers[e] === target){
        return [s+1,e+1]
    }else if(numbers[s] + numbers[e] < target){
        s++
    }else {
      e--
    }
    }
};