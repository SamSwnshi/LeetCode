/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const value = {   
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000 }
    
    let ans = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        let current = value[s[i]];
        let nextVal = value[s[i + 1]]
        
        if(nextVal && current < nextVal){
            ans -= current
        }else{
            ans += current;
        }
    }
    
    return ans;
};