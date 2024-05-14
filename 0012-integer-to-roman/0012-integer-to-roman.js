/**
 * @param {number} num
 * @return {string}
 */
const value = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
var intToRoman = function(num) {
    let ans = "";
    for(let i = 0;  num;i++){
        while(num>= value[i]){
            ans += roman[i];
            num -= value[i]
        }
    }
    return ans;
};