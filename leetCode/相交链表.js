/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let new_head_a = headA;
  let new_head_b = headB;
  if(!headA || !headB) return null;
  while(new_head_a !== new_head_b) {
      new_head_a = new_head_a ? new_head_a.next : headB;
      new_head_b = new_head_b ? new_head_b.next : headA;
  } 
  return new_head_a

};
// 我走过你走过的晚风 那算不算相拥
