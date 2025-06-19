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

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unshift(value);
    } else {
      const previousNode = this.get(index - 1);
      const nextNode = previousNode.next;
      const insertedNode = new Node(value);
      previousNode.next = insertedNode;
      insertedNode.next = nextNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const prev = this.get(index - 1);
      const removedNode = prev.next;
      prev.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }

  reverse() {
    let curr = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let currNode = null;
    while (curr) {
      const nextNode = curr.next;
      curr.next = currNode;

      currNode = curr;
      curr = nextNode;
    }

    return this;
  }

  rotate(rotation) {
    rotation = rotation % this.length;
    if (rotation === 0) {
      return this;
    }

    let k = rotation > 0 ? rotation : this.length - Math.abs(rotation);

    let i = 0;
    let previous = null;
    let current = this.head;
    while (i < k) {
      i++;
      previous = current;
      current = current.next;
    }

    const previousHead = this.head;
    this.head = current;
    this.tail.next = previousHead;
    this.tail = previous;
    this.tail.next = null;

    return this;
  }
}
/*
 step: 2
 <-
 1 2    3 4 5
 3 4 5  1 2
*/

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(3);
console.log(singlyLinkedList.head.val === 20); // 20
console.log(singlyLinkedList.head.next.val === 25); // 25
console.log(singlyLinkedList.head.next.next.val === 5); // 5
console.log(singlyLinkedList.head.next.next.next.val === 10); // 10
console.log(singlyLinkedList.head.next.next.next.next.val === 15); // 15
console.log(singlyLinkedList.tail.val === 15); // 15
console.log(singlyLinkedList.tail.next === null); // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val === 5); // 5
console.log(singlyLinkedList.tail.val === 25); // 25;

singlyLinkedList.rotate(-1);
console.log(singlyLinkedList.head.val === 25); // 25
console.log(singlyLinkedList.head.next.val === 5); // 5
console.log(singlyLinkedList.head.next.next.val === 10); // 10
console.log(singlyLinkedList.head.next.next.next.val === 15); // 15
console.log(singlyLinkedList.head.next.next.next.next.val === 20); // 20
console.log(singlyLinkedList.tail.val === 20); // 20
console.log(singlyLinkedList.tail.next === null); // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val === 5); // 5
console.log(singlyLinkedList.tail.val === 25); // 25;

singlyLinkedList.rotate(1000);
console.log(singlyLinkedList.head.val === 5); // 5
console.log(singlyLinkedList.head.next.val === 10); // 10
console.log(singlyLinkedList.head.next.next.val === 15); // 15
console.log(singlyLinkedList.head.next.next.next.val === 20); // 20
console.log(singlyLinkedList.head.next.next.next.next.val === 25); // 25
console.log(singlyLinkedList.tail.val === 25); // 25
console.log(singlyLinkedList.tail.next === null);// null
