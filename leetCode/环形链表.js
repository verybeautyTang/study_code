/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 定义一个快指针
    let fast = head;
    // 定义一个慢指针
    let slow = head;
    // 如果快指针和慢指针相遇，那么就证明里面是有环存在的；
    while(fast!= null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true
    }
    return false
};
