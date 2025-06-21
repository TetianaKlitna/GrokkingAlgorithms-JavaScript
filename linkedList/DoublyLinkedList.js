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
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2, 12); // true
doublyLinkedList.insert(100, 12); // false
doublyLinkedList.length; // 5
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.head.next.next.val; // 12
doublyLinkedList.head.next.next.next.val; // 15
doublyLinkedList.head.next.next.next.next.val; // 20
