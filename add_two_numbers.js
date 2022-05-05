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
const addTwoNumbers = function (l1, l2) {
  // loop thru each list concurrently, add the digits, carry over the ones
  // return a new linked list

  let pointerl1 = l1;
  let pointerl2 = l2;

  let carryforward = 0;
  let outputList = new ListNode(0); // dummy head
  let previousNode = outputList;

  while (pointerl1 !== null || pointerl2 !== null || carryforward !== 0) {
    let outputValue = 0;

    pointerl1 && pointerl1.val > 0 ? (outputValue += pointerl1.val) : "";
    pointerl2 && pointerl2.val > 0 ? (outputValue += pointerl2.val) : "";
    outputValue += carryforward;

    carryforward > 0 ? (carryforward = 0) : "";

    if (outputValue >= 10) {
      outputValue -= 10;
      carryforward = 1;
    }

    let currentNode = new ListNode(outputValue);
    previousNode.next = currentNode;
    previousNode = currentNode;

    pointerl1 ? (pointerl1 = pointerl1.next) : "";
    pointerl2 ? (pointerl2 = pointerl2.next) : "";
  }

  return outputList.next;
};
