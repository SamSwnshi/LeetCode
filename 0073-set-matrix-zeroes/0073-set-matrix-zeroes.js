/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    let rowS = new Set();
    let colS = new Set();
    
    for(let i = 0; i < row ;i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] === 0){
                rowS.add(i);
                colS.add(j)
            }
        }
    }
    
    for(let i = 0; i < row;i++){
        for(let j =0 ; j < col;j++){
            if(rowS.has(i) || colS.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    
    return matrix;
};