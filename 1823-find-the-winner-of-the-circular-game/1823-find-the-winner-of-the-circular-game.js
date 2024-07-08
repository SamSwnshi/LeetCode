/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
     // Create an array to represent friends 1 to n
    let friends = Array.from({ length: n }, (v, i) => i + 1);
    
    // Start from index 0 (which represents friend 1 in one-indexed form)
    let index = 0;
    
    // Iterate until only one friend remains
    while (friends.length > 1) {
        // Calculate the index to remove based on k
        index = (index + k - 1) % friends.length;
        
        // Remove the friend at index
        friends.splice(index, 1);
    }
    
    // Return the remaining friend (which is the winner)
    return friends[0];
};