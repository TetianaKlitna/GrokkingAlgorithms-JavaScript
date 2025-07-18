class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;
    return node;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    const mid = Math.floor(this.length / 2);
    let curr = null;
    if (index < mid) {
      let i = 0;
      curr = this.head;
      while (i !== index) {
        curr = curr.next;
        i++;
      }
    } else {
      let i = this.length - 1;
      curr = this.tail;
      while (i !== index) {
        curr = curr.prev;
        i--;
      }
    }

    return curr;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    }

    let nodePrev = this.get(index - 1);
    let nodeNext = nodePrev.next;
    let nodeCurr = new Node(value);

    nodeCurr.prev = nodePrev;
    nodeCurr.next = nodeNext;
    nodePrev.next = nodeCurr;
    nodeNext.prev = nodeCurr;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index == this.length - 1) {
      return this.pop();
    }

    const nodeCurr = this.get(index);
    let nodePrev = nodeCurr.prev;
    let nodeNext = nodeCurr.next;

    nodePrev.next = nodeNext;
    nodeNext.prev = nodePrev;

    nodeCurr.next = null;
    nodeCurr.prev = null;

    this.length--;
    return nodeCurr;
  }

  reverse() {
    let curr = this.tail;
    while (curr) {
      const nodePrev = curr.prev;
      [curr.prev, curr.next] = [curr.next, curr.prev];
      curr = nodePrev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

// 1 -> 2 -> 3 -> 4 -> 5
// 5 next = null previous 4 next  = 4 previous = null

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.reverse(); // singlyLinkedList;
console.log(doublyLinkedList.length === 4); // 4
console.log(doublyLinkedList.head.val === 20); // 20
console.log(doublyLinkedList.head.next.val === 15); // 15
console.log(doublyLinkedList.head.next.next.val === 10); // 10
console.log(doublyLinkedList.head.next.next.next.val === 5); // 5
