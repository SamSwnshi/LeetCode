/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b)=> a -b)
    let totla = 0;
    for(let i = 1; i <= salary.length - 2;i++){
        totla = totla + salary[i]
    }
    return totla/(salary.length-2)
};