/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let a = new Array(n);
    
 a[0] = 1;
    
    let p1 = 0,p2 = 0,p3 =0;
    
    for(let i = 1 ; i< n ;i++){
    let n1 = a[p1] * 2;
        let n2 = a[p2] * 3;
        let n3 = a[p3] * 5;
        
        a[i] = Math.min(n1,n2,n3);
        
        if(a[i] == n1) p1++
        if(a[i] == n2) p2++
        if(a[i] == n3) p3++
    }
    return a[n-1]
    
};