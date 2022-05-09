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
const deleteDuplicates = function (head) {
  const map = {};

  let pointer = head;
  let prev = null;

  while (pointer) {
    if (map[pointer.val] !== undefined) {
      pointer = pointer.next;
      prev.next = pointer;
    } else {
      map[pointer.val] = 1;
      prev = pointer;
      pointer = pointer.next;
    }
  }

  return head;
};
