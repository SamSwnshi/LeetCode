/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse_ans = parseInt(x.toString().split("").reverse().join(""))
   
    if(reverse_ans < Math.pow(2,-31) || reverse_ans > Math.pow(2,31))
        return 0;
     if(x < 0) {return -reverse_ans}
    else{
  return reverse_ans;
    }
};