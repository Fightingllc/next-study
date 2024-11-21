
/* 链表节点类 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);       // 节点值
        this.next = (next === undefined ? null : next); // 指向下一节点的引用
    }

}
/* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
// 初始化各个节点
const n0 = new ListNode(0);
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

// 头节点就是链表的名称
// console.log(n0)


// 插入节点（只需要改变两个节点的引用即可）时间复杂度O(1)
const P = new ListNode(9);
const value = n1.next;
P.next = value;
n1.next = P;


// 删除节点 (n3) （只需要改变一个节点的引用即可）时间复杂度O(1)
const n4Value = n3.next;
n2.next = n4Value;
n3.next = null;

console.log(n0)

// 访问节点 时间复杂度O(n)
/* 访问链表中索引为 index 的节点 */ 
function access(head, index) {
  if(!head) return null;
//   若要找index节点只需找到上一节点的next即可
  for(let i = 0; i < index; i++) {
      head = head.next;
  }
  return head;
}

// 访问n0链表 索引为3的节点
access(n0,3)