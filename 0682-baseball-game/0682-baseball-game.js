/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    
    for(let i = 0; i < operations.length ;i++){
        
        switch(operations[i]){
            case "D":{
                const last = stack[stack.length - 1]
                stack.push(last * 2)
                break;
            }
                
                case "C":{
                    stack.pop()
                    break;
                }
            case "+":{
                const one = stack[stack.length - 2];
                const two = stack[stack.length - 1];
                stack.push(one + two);
                break;
            }
            default: {
                stack.push(Number(operations[i]))
                break;
            }
        }
    }
    return stack.reduce((prev,curr)=> prev + curr,0)
};