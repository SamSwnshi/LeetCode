/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
     nums.sort((a, b) => a - b);
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] === target) {
            let result = [];
            let leftIdx = mid - 1;

            while (leftIdx >= 0 && nums[leftIdx] === target) {
                result.push(leftIdx);
                leftIdx--;
            }

            result.push(mid);

            let rightIdx = mid + 1;
            while (rightIdx < n && nums[rightIdx] === target) {
                result.push(rightIdx);
                rightIdx++;
            }

            return result.sort((a,b)=> a- b);
        }
    }

    return [];
};