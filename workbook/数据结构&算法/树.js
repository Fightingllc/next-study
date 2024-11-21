/* 二叉树节点类*/
class TreeNode {
  val; // 节点值
  left; // 左节点指针
  right; // 右节点指针
  constructor(val,left = null,right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left;
    this.right = right ;
  }
}

/* 初始化二叉树*/
let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);
// 构建节点之间的引用
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

// 层序遍历 ( 广度优先遍历 BFS)
function levelOrder(root) {
  debugger;
  // 初始化队列，加入根节点
  const queue = [root];
  //   初始化一个列表，用于保存遍历后的序列
  const list = [];
  while (queue.length) {
    let node = queue.shift();
    list.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return list;
}

levelOrder(n1);
//深度优先遍历（DFS）
const perList = [];
// 前序遍历
function preOrder(root) {
  if(root === null) return;
  // 访问优先级 根节点 -> left -> right
  perList.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

preOrder(n1);
console.log("前序遍历",perList);

const inList = [];
// 中序遍历
function inOrder(root) {
  if(root === null) return;
  // 访问优先级  left -> 根节点 -> right
  inOrder(root.left);
  inList.push(root.val);
  inOrder(root.right);
}

inOrder(n1);
console.log("中序遍历",inList)

const postList = [];
function postOrder(root) {
  if(root === null) return;
// 访问优先级： left -> right -> 根
  postOrder(root.left);
  postOrder(root.right);
  postList.push(root.val);
}

postOrder(n1)
console.log("后序遍历",postList)




