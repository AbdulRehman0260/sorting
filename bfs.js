// code up a Node
export class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// code up a BFS implementation
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Go right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        // Duplicate value (optional handling)
        return; // or throw Error or ignore
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while (true) {
      if (value == currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  breadFirstSearch() {
    let currentNode = this.root;
    let answers = [];
    let queue = [];

    //add to queue the first item
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      answers.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return answers;
    //some comment;
  }

  DFSInorder() {
    return this.traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }
}

const tree = new BinarySearchTree(9);
tree.insert(7);
tree.insert(11);
tree.insert(3);
tree.insert(8);
tree.insert(10);
tree.insert(15);

console.log(tree.DFSInorder());

//    9
// 7     11
//3  8  10  15
