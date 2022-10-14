/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 let count= 0;
var removeNthFromEnd = function(head, n) {
    // // head是否合法
    // if(!head) return null;
    // head.next = removeNthFromEnd(head.next,n);
    // count++;
    // if(count === n) return head.next ? head.next: [];
    // return head;
    const prev = new ListNode(null, head);
    let slow = fast = prev;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return prev.next;
};
