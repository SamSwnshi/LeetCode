/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = new Map();
    let ans = [];
    
    for(let str of strs){
        let sorted = str.split('').sort().join('');
        
        if(m.has(sorted)){
            ans[m.get(sorted)].push(str)
        }else{
            m.set(sorted,ans.length)
            ans.push([str])
        }
    }
    return ans;
};