/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    
    let left = 0;
    let right = m * n - 1;
    while(left <= right ){
        let mid = Math.floor((left+ right)/2)
        
        let midEle = matrix[Math.floor(mid/n)][mid % n]
        if(midEle === target){
return true
        }else if(midEle < target){
                 left = mid + 1;
                 }else{
            right = mid - 1;
        }
    }
    
    return false
};