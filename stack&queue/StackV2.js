class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }
  push(val) {
    this.queue1.enqueue(val);
    return this;
  }
  pop() {
    if (this.queue1.size === 0) return null;
    while (this.queue1.size !== 1) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
    const val = this.queue1.dequeue();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return val;
  }
}

// Quene
// 1 2 3 pop 1; pop 2 pop
//Stack
// 1 2 3 pop 3

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

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
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.push(10).push(20).push(30);
console.log(s.pop() === 30); // 30
console.log(s.pop() === 20); // 20
console.log(s.pop() === 10); // 10
console.log(s.pop() === null); // null
s.push(30).push(40).push(50);
console.log(s.pop() === 50); // 50
s.push(60);
console.log(s.pop() === 60); // 60

// Stack with 2 Queues - Exercise
// Implement a stack using two queues:

// You should implement the following functions:
// - push (returns the stack)
// - pop (returns the value popped)
