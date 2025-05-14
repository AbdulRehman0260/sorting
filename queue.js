class Queue {
  constructor() {
    this.size = 0;
    this.list = [];
  }

  // enqueue

  enqueue(value) {
    this.list.push(value);
    this.size++;
  }

  // dequeue
  dequeue() {
    this.list.shift();
    this.size--;
  }

  peek() {
    return this.list[0];
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    console.log(this.list);
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
