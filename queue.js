class Queue {
  constructor() {
    this.length = 0;
    this.list = [];
  }

  // enqueue

  enqueue(value) {
    this.list.push(value);
    this.length++;
  }

  // dequeue
  dequeue() {
    this.list.shift();
    this.length--;
  }

  peek() {
    return this.list[0];
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    console.log(this.list);
  }

  size() {
    console.log(this.length);
  }
}

let q = new Queue();
q.enqueue(4);
q.enqueue(5);
q.enqueue(7);
q.enqueue(2);
q.print();
q.dequeue();
q.dequeue();
q.print();
q.size();
