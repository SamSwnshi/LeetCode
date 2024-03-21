/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    let rowSet = new Set();
    let colSet = new Set();
    
    for(let i = 0 ; i < row;i++){
        for(let j = 0 ; j < col;j++){
            if(matrix[i][j] == 0){
                rowSet.add(i);
                colSet.add(j)
            }
        }
    }
    for(let i = 0; i < row;i++){
        for(let j= 0; j < col; j++){
            if(rowSet.has(i) || colSet.has(j)){
                matrix[i][j] = 0
            }
        }
    }
};