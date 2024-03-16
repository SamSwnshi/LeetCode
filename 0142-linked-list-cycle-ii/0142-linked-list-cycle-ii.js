/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
   
    let slow = head;
    let fast = head;
    
    while(fast && fast.next ){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast){
            break;
        }
    }
    if(!fast || !fast.next){
        return null;
    }
    p = head;
    while(p !== fast){
        p = p.next;
        fast = fast.next;
    }
    return p;
};