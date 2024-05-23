/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    var esum=0
   var dsum=0
  
    for(let i=0;i<nums.length;i++){
         var s=nums[i].toString()
        esum=esum+nums[i]
        for(var j=0;j<s.length;j++){
            dsum=dsum+parseInt(s[j])
           
        }
    }
     var res=esum-dsum
    return Math.abs(res)
};