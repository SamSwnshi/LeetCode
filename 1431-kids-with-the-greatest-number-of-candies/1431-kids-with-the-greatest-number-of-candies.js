/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let n = candies.length;
    let result = []
    for(let i = 0; i < n ;i++){
        if(candies[i] + extraCandies >= Math.max(...candies)){
             result.push(true)
        }else{
            result.push(false);
        }
    }
    return result;
};