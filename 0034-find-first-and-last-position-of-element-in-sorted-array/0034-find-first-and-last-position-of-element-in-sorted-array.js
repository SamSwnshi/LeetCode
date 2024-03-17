/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function leftMost(nums,target,n){
    let s = 0,e = n - 1;
    let left = -1;
    while(s <= e){
        let mid = s + Math.floor((e - s)/2)
        if(nums[mid] === target){
            left = mid
            e = mid - 1
        }else if(nums[mid] < target){
            s = mid + 1 
        }else{
            e = mid - 1;
        }
    }
    return left;
}

function rightMost(nums,target,n){
    let s= 0 ,e = n - 1;
    let right = -1;
    while(s<= e){
        let mid = s + Math.floor((e - s)/2)
        if(nums[mid] === target){
            right = mid;
            s = mid + 1;
        }else if(nums[mid] > target){
            e = mid - 1
        }else {
        s = mid + 1;    
        }
    }
    return right;
}
var searchRange = function(nums, target) {
    let n = nums.length;
    
    let left = leftMost(nums,target,n);
    let right = rightMost(nums,target,n);
    
    return [left,right]
};