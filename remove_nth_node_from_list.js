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
  let listLength = 0;
  let pointer = head;

  while (pointer) {
    listLength++;
    pointer = pointer.next;
  }

  if (listLength === 1) {
    return null;
  }

  let removeNodeIndex = listLength - n;

  if (removeNodeIndex === 0) {
    head = head.next;
  } else {
    pointer = head;
    let prev = null;

    for (let i = 0; i <= removeNodeIndex; i++) {
      if (i === removeNodeIndex) {
        pointer.next ? (prev.next = prev.next.next) : (prev.next = null);
      } else {
        prev = pointer;
      }

      pointer = pointer.next;
    }
  }

  return head;
};
