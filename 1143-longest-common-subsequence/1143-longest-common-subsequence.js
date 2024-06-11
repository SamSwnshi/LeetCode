/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// function helper(text1,text2,i,j){
//     if(i == text1.length || j == text2.length){
//         return 0;
//     }
    
//     if(text1[i] == text2[j]){
//         return 1 + helper(text1,text2,i + 1,j + 1)
//     }else{
//         let left = helper(text1,text2,i+ 1,j);
//         let right = helper(text1,text2,i ,j +1)
//     return Math.max(left,right)
//         }
// }
var longestCommonSubsequence = function(text1, text2) {
   const m = text1.length;
    const n = text2.length;

    // Create a 2D array with dimensions (m+1) x (n+1) filled with 0s
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the longest common subsequence will be in dp[m][n]
    return dp[m][n];
};