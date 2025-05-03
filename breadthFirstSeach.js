import { BinarySearchTree } from "./bfs.js";

const tree = new BinarySearchTree(23);
tree.insert(44);
tree.insert(2);
tree.insert(11);

console.log(tree.lookup(2));
