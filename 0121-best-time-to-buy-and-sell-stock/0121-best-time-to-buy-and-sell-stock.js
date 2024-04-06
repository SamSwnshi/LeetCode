/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let ans = 0;
    
    for(let i = 0; i < prices.length;i++){
        if(buy > prices[i]){
            buy = prices[i]
        }
        
        ans = Math.max(ans,prices[i] - buy)
    }
    return ans;
};