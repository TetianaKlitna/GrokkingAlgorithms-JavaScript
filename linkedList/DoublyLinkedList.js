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
}

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.set(0,10) === true);// true
console.log(doublyLinkedList.length === 4);// 4
console.log(doublyLinkedList.head.val === 10); // 10
 
console.log(doublyLinkedList.set(10,10) === false); // false
 
console.log(doublyLinkedList.set(2,100) === true);// true
console.log(doublyLinkedList.head.next.next.val === 100); // 100
