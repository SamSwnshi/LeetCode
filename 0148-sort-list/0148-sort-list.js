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
const merge =(left,right)=>{
  let dummy = new ListNode()
  let curr = dummy;
    
    while(left && right){
        if(left.val < right.val){
            curr.next = left;
            left = left.next
        }else{
            curr.next = right;
            right = right.next
        }
        curr = curr.next
    }
    if(left){
        curr.next =left;
    }else if(right){
        curr.next = right
    }
    return dummy.next
}
var sortList = function(head) {
     if (head === null || head.next === null) {
        return head;
    }
    
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;
    
    let left = sortList(head);
    let right = sortList(slow);
    
    return merge(left, right);
};