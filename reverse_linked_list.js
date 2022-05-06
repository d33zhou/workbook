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
const reverseList = function (head) {
  let currentNode = head;
  let previousNode = null;

  while (currentNode !== null) {
    let tempNext = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNext;
  }

  return previousNode;
};
