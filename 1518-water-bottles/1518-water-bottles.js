/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = 0;
    let empty = 0;
    let current = numBottles;
    
    while(current > 0){
        total += current;
        empty += current;
        
        current = Math.floor(empty / numExchange);
        empty = empty % numExchange;
    }
    return total
};