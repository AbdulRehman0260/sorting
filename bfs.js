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
      return;
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
}
