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
const mergeTwoLists = (list1, list2) => {
  let outputList = new ListNode(0); //dummy head node
  let pointer1 = list1;
  let pointer2 = list2;
  let currentNode = outputList;
  let previousNode = currentNode;

  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.val <= pointer2.val) {
      currentNode = pointer1;
      pointer1 = pointer1.next;
    } else {
      currentNode = pointer2;
      pointer2 = pointer2.next;
    }

    previousNode.next = currentNode;
    previousNode = currentNode;
  }

  if (pointer1 !== null) {
    previousNode.next = pointer1;
  } else if (pointer2 !== null) {
    previousNode.next = pointer2;
  }

  return outputList.next;
};
