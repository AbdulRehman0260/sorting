// code up a Node
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// code up a BFS implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
    //Any value smaller than current node value, should become the left child of the current node if there is no left child
    if (pass) {
    }
  }
}
