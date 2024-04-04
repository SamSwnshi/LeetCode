/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
     let mat = [];
   for(let i = 0; i < n ; i++){
       mat.push(new Array(n).fill(0));
   }
    
    let top = 0;
    let bottom = n -1;
    let left = 0;
    let right = n -1;
    let count = 1;

    while(left <= right && top <= bottom){
        for(let i = left; i <= right;i++)
        {
           mat[top][i]  = count ;
            count++;
        }
        top++;
        for(let i = top; i <= bottom;i++){
            mat[i][right] = count;
            count++;
        }
        right--;
        for(let i = right; i >= left;i--){
            mat[bottom][i] = count;
            count++;
        }
        bottom--;
        for(let i = bottom; i >= top;i--){
            mat[i][left] = count;
            count++;
        }
        left++;
        
    }
    return mat;
};