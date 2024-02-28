/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length ) return false;
  let n = new Map()
  for(let i = 0 ; i < s.length; i++){
      let c = s.charAt(i)
      if(n.has(c)){
          n.set(c,n.get(c) + 1)
      }else{
          n.set(c,1)
      }
  }
    for(let i = 0 ; i < t.length;i++){
        let c = t.charAt(i)
        if(n.has(c)){
            n.set(c,n.get(c) - 1)
        }else {
            return false
        }
    }
    
    for(let val of n.values()){
        if(val != 0){
            return false
        }
    }
    return true;
};
