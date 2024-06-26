/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let low = 0;
        let high = nums.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] === target) {
                return mid; // Target found
            } else if (nums[mid] < target) {
                low = mid + 1; // Adjust low pointer
            } else {
                high = mid - 1; // Adjust high pointer
            }
        }

        return low; // Return the index for insertion position
    }
