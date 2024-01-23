/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let n = nums.length;
    nums.sort((a,b)=> a - b);
    let left = 0;
    let right = n -1;
    while(left <= right){
        const mid = Math.floor((left + right)/2)
        
        if(nums[mid] === target){
            return true;
        }
        //handle duplicate
        while(left <= mid && nums[left] === nums[mid]){
            left++
        }
        
        //check left side
        if(nums[left] < nums[mid]){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            if(nums[mid] <= target && target <= nums[right]){
                left =  mid + 1
            }else{
                right = mid - 1;
            }
        }
        
        
        
        
        
        
    }
    return false;
};