/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let curr = head;
    
    while(curr.next){
        curr.val += curr.next.val;
        curr.next = curr.next.next;
        
        if(!curr.next.next){
            curr.next = null
            break;
        }
        if(curr.next.val === 0){
            curr = curr.next
        }
    }
    return head;
};