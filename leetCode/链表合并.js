/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //递归终止 分隔到不能分割 也就是两个链表有一个的nxet不存在了 那就没法分割问题了 只能返回
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {//当前节点谁小，就让这个较小的节点的next和另一个链表继续递归合并
        l1.next = mergeTwoLists(l1.next, l2);//分隔成合并l1.next, l2的子问题
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
