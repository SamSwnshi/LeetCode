/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     if(matrix.length === 0 || matrix[0].length === 0){
        return []
    }
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
    
    
};