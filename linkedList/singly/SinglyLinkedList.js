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
      const next = prev.next.next;
      prev.next = next;
      this.length--;
      return removedNode;
    }
  }
}

const list = new SinglyLinkedList();
list.unshift('newVal');
list.unshift('secondVal');
list.insert(1, 'insert!');
console.log(list.remove(2));
let curr = list.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
