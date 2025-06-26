class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let curr = this.root;
    while (curr) {
      if (node.value < curr.value) {
        if (!curr.left) {
          curr.left = node;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (curr.value < node.value) {
        if (!curr.right) {
          curr.right = node;
          return this;
        } else {
          curr = curr.right;
        }
      } else {
        return this;
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let curr = this.root;

    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (curr.value < value) {
        curr = curr.right;
      } else {
        return curr;
      }
    }
    return undefined;
  }

  remove(value) {
    if (!this.root) {
      return undefined;
    }

    let curr = this.root;
    let prev = null;
    while (curr) {
      if (curr.value < value) {
        prev = curr;
        curr = curr.right;
      } else if (value < curr.value) {
        prev = curr;
        curr = curr.left;
      } else {
        if (curr.right && curr.left) {
          let parentSuccessor = curr;
          let successor = curr.right;
          while (successor.left) {
            parentSuccessor = successor;
            successor = successor.left;
          }

          curr.value = successor.value;

          if (parentSuccessor.left === successor) {
            parentSuccessor.left = successor.right;
          } else {
            parentSuccessor.right = successor.right;
          }
        } else {
          let node = curr.left ? curr.left : curr.right ? curr.right : null;

          if (!prev) {
            this.root = node;
          } else if (prev.left === curr) {
            prev.left = node;
          } else {
            prev.right = node;
          }
        }
        break;
      }
    }
  }

  findSecondLargest() {
    let largest = -Infinity;
    let secondLargest = undefined;
    let curr = this.root;

    if (!curr) {
      return undefined;
    }

    while (curr) {

      if (largest < curr.value) {
        secondLargest = largest;
        largest = Math.max(largest, curr.value);
      }
      
      if(curr.value < largest && curr.value > secondLargest){
        secondLargest = curr.value;
      }

      if (curr.right) {
        curr = curr.right;
      } else if (curr.left) {
        curr = curr.left;
      } else {
        break;
      }
    }

    return secondLargest === -Infinity ? undefined : secondLargest;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(17);
console.log(binarySearchTree.findSecondLargest() === 17); // returns 17

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(10);
console.log(binarySearchTree2.findSecondLargest() === undefined); // returns undefined
