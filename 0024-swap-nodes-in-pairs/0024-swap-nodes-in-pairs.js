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
var swapPairs = function(head) {
     if (!head || !head.next) {
        return head;
    }

   
    const first = head;
    const second = head.next;

   
    first.next = swapPairs(second.next);
    second.next = first;

    // Return the new head (second node after swapping)
    return second;
};