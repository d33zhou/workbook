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
const removeNthFromEnd = function (head, n) {
  let pointer = head;
  let listLength = 0;

  while (pointer) {
    pointer = pointer.next;
    listLength++;
  }

  let nodeBeforeRemovedN = listLength - n - 1;

  if (listLength === n) {
    return head.next;
  }

  pointer = head;

  for (let i = 0; i < nodeBeforeRemovedN; i++) {
    pointer = pointer.next;
  }

  pointer.next = pointer.next.next;

  return head;
};
