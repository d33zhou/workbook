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
  let currentNode = outputList;

  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 && pointer2) {
    if (pointer1.val <= pointer2.val) {
      currentNode.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      currentNode.next = pointer2;
      pointer2 = pointer2.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = pointer1 || pointer2;

  return outputList.next;
};
