/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    const isPrime = (num) =>{
        if(num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num);i++){
            if(num % i === 0)return false
        }
        return true;
    }
    
    let prime = 0;
    for(let i = 0; i < nums.length;i++){
        if(isPrime(nums[i][i])){
        prime = Math.max(prime,nums[i][i])
        }
    }
    
    for(let i = 0; i < nums.length ; i++){
        if(isPrime(nums[i][nums.length - i - 1])){
            prime = Math.max(prime,nums[i][nums.length - i - 1])
        }
    }
    return prime;
    
};