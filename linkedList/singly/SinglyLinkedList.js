class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    let curr = this.head;
    let newTail = undefined;

    if (curr === null) {
      return newTail;
    }

    while (curr.next !== null) {
      newTail = curr;
      curr = curr.next;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
    }

    return curr;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    if (this.length === 0) {
      this.tail = null;
    }

    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) {
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (i === index) {
        return curr;
      }
      i++;
      curr = curr.next;
    }

    return null;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }

    foundNode.val = value;

    return true;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('there');
list.push('!');
console.log(list);
console.log(list.pop().val);
console.log(list);
list.push('Tanya');
console.log(list);
console.log(list.pop().val);
console.log(list);
console.log(list.shift());
console.log(list.shift());
console.log(list);
list.unshift('newVal');
list.unshift('secondVal');
console.log(list);
console.log(list.get(0));
console.log(list.set(0, 'Hello'));
console.log(list.get(0));
