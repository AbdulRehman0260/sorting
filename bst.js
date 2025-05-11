class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insertLoop(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;

      while (true) {
        if (newNode.value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            return;
          }
          curr = curr.left;
        }
        if (newNode.value > curr.value) {
          if (!curr.right) {
            curr.right = newNode;
            return;
          }
          curr = curr.right;
        }
      }
    }
  }

  insertrecur(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.inserting(this.root, newNode);
    }
  }

  inserting(root, newNode) {
    if (root.value === null) {
      root.value = newNode;
    } else {
      if (newNode.value < root.value) {
        if (!root.left) {
          root.left = newNode;
        } else {
          this.inserting(root.left, newNode);
        }
      }
      if (newNode.value > root.value) {
        if (!root.right) {
          root.right = newNode;
        } else {
          this.inserting(root.right, newNode);
        }
      }
    }
  }
}
