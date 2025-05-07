class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    let prev = null;
    let curr = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.tail = prev;
    this.size--;
  }

  shift() {
    this.head = this.head.next;
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const data = new LinkedList();
data.prepend(34);
data.prepend(2);
data.prepend(12);
data.print();
console.log(data.getSize());
data.append(233);
data.print();
data.pop();
data.print();
data.shift();
data.print();
