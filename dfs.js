// PRE ORDER
// IN ORDER
// POST ORDER
// RECURSIVE IMPLEMENTATION

import { BinarySearchTree } from "./bfs.js";

const tree = new BinarySearchTree(23);
tree.insert(44);
tree.insert(2);
tree.insert(11);

tree.DFSInorder();

function preOrder(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  this.preOrder(root.left);
  this.preOrder(root.right);
}
