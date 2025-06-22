class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;

    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    let node = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = node.next;
    }
    node.next = null;
    this.size--;

    return node.value;
  }
}

var queue = new Queue();
console.log(queue.enqueue(10) === 1); // returns 1, size becomes 1
console.log(queue.enqueue(100) === 2); // returns 2, size becomes 2
console.log(queue.enqueue(1000) === 3); // returns 3, size becomes 3
console.log(queue.dequeue() === 10); // returns 10, size becomes 2
