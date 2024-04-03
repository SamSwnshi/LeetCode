/**
 * @param {number[]} nums
 * @return {number[]}
 */
function merger(left,right){
let sorted = []
while(left.length && right.length){
    if(left[0] < right[0]){
        sorted.push(left.shift())
    }else{
        sorted.push(right.shift())
    }
}
    return [...sorted,...left,...right]
}
function mergeSort(nums){
    if(nums.length === 1 )return nums;
    
    let mid = Math.floor(nums.length/2);
    
    let left = mergeSort(nums.slice(0,mid))
    let right = mergeSort(nums.slice(mid))
    return merger(left,right)
}
var sortArray = function(nums) {
    return mergeSort(nums)
};