/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return getNumber(l1, l2, 0);
};
const getNumber  = (l1, l2, carray) => {
    if(!l1 && !l2 && carray === 0) {
        return null;
    }
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carray;
    const node = new ListNode(sum % 10);
    node.next = getNumber(l1? l1.next : null, l2? l2.next : null,Math.floor(sum / 10))
    return node;
}
