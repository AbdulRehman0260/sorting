//create a node class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      return this._recur(this.root, value);
    }
  }

  _recur(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        return this._recur(node.left, value);
      }
    }
    if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        return this._recur(node.right, value);
      }
    }
  }

  search(value, root = this.root) {
    if (!root) {
      return "Value not found";
    } else if (value === root.value) {
      return root;
    } else if (value > root.value) {
      return this.search(value, root.right);
    } else if (value < root.value) {
      return this.search(value, root.left);
    }
  }

  dfsPreOrder(root = this.root, result = []) {
    if (!root) {
      return;
    }
    result.push(root.value);
    this.dfsPreOrder(root.left, result);
    this.dfsPreOrder(root.right, result);
    return result;
  }

  dfsInOrder(root = this.root, result = []) {
    if (!root) {
      return;
    }
    this.dfsInOrder(root.left, result);
    result.push(root.value);
    this.dfsInOrder(root.right, result);
    return result;
  }

  dfsPostOrder(root = this.root, result = []) {
    if (!root) {
      return;
    }
    this.dfsPostOrder(root.left, result);
    this.dfsPostOrder(root.right, result);
    result.push(root.value);
    return result;
  }

  bfs() {
    let queue = [];
    let result = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
}

let tree = new binarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(25);
tree.insert(12);
tree.insert(15);
console.log(tree);
console.log(tree.dfsPreOrder());
console.log(tree.dfsInOrder());
console.log(tree.dfsPostOrder());
tree.bfs();

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, target, low = 0, high = array.length - 1) {
  if (low > high) {
    return "not found";
  }
  let middle = Math.floor((low + high) / 2);
  if (target === array[middle]) {
    return array[middle];
  } else if (target > array[middle]) {
    return binarySearch(array, target, middle + 1, high);
  } else if (target < array[middle]) {
    return binarySearch(array, target, low, middle - 1);
  }
}

console.log(binarySearch(list, 22));
