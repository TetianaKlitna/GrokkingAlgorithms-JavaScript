class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;

    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    let node = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    return node.value;
  }
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
console.log(removed);
console.log(removed === 1000); // 1000
console.log(stack.size === 2); // 2
stack.pop();
stack.pop();
console.log(stack.size === 0); // 0
