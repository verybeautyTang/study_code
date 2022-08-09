/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     if(!head || !head.next) return true
//     let temp = head
//     let isRome = true
//     // 可以先翻转链表
//     let new_list = null
//     while(temp) {
//         let next = temp.next;
//         temp.next = new_list
//         new_list = temp
//         temp = next
//     }

//     // 判断链表是否相等
//     while(new_list && head ){
//         if(new_list.val !== head.val) {
//             isRome = false;
//             continue;
//         }
//         new_list = new_list.next;
//         head = head.next; 
//     }
//     return isRome
// };

var isPalindrome = function(head) {
    const stack = [];
    let temp = head;
    while(temp) {
        stack.push(temp);   
        temp = temp.next;
    }
    while(head) {
        if(head.val !== stack.pop().val) {
            return false;
        }
        head = head.next;
    }
    return true;
};
