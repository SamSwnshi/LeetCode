/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while(left < right){
        leftH = height[left];
        rightH = height[right];
        
       let width = right - left;
        let minHeight = Math.min(leftH,rightH);
        
        let total = width * minHeight;
        max = Math.max(max,total)
        
        if(leftH < rightH){
            left++
        }else{
            right--
        }
        
    }
    return max;
};