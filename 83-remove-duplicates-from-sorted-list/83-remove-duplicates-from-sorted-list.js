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
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur && cur.next){
        let next = cur.next
        if(next.val === cur.val){
            cur.next = next.next
        } else cur = cur.next
    }
    return head
};