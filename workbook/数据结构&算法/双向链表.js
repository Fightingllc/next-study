/* 双向链表节点类 */
class ListNode {
    constructor(val, next, prev) {
        this.val = val  ===  undefined ? 0 : val;        // 节点值
        this.next = next  ===  undefined ? null : next;  // 指向后继节点的引用
        this.prev = prev  ===  undefined ? null : prev;  // 指向前驱节点的引用
    }
}
const n0 = new ListNode(1)
const n1 = new ListNode(2)
const n2 = new ListNode(3)

n0.next = n1;
n0.prev = null;
n1.next = n2;
n1.prev= n0;
n2.next = null;
n2.prev = n1;

console.log(n0)