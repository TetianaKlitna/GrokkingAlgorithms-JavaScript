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

          let node = curr.left? curr.left: curr.right? curr.right: null;

          if (!prev) {
            this.root = node;
          }else if (prev.left === curr) {
            prev.left = node;
          } else {
            prev.right = node;
          }
          
        }
        break;
      }
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
/*
          15
    10            20
  1     12               50
    5    
*/
binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value === 20); // 20
console.log(binarySearchTree.root.right.right === null); // null

binarySearchTree.remove(5);
console.log(binarySearchTree.root.left.left.value === 1); // 1
console.log(binarySearchTree.root.left.left.right === null); // null

binarySearchTree.remove(15);
console.log(binarySearchTree.root.value === 20);
console.log(binarySearchTree.root.right === null);

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.remove(15);
console.log(binarySearchTree.root === null);

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
console.log(binarySearchTree.root.left.left.value === 5); // 5
console.log(binarySearchTree.root.left.left.left === null); // null
console.log(binarySearchTree.root.left.left.right === null); // null

binarySearchTree.remove(20);
console.log(binarySearchTree.root.right.value === 50); // 50
console.log(binarySearchTree.root.right.right === null); // null
console.log(binarySearchTree.root.right.left === null); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
console.log(binarySearchTree.root.left.value === 12); // 12
console.log(binarySearchTree.root.left.left.value === 1); // 1
console.log(binarySearchTree.root.left.left.right.value === 5); // 5

binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value === 20); // 20
console.log(binarySearchTree.root.right.right.value === 60); // 60
console.log(binarySearchTree.root.right.right.left.value === 30); // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

binarySearchTree.remove(85);
console.log(binarySearchTree.root.right.right.value === 88); // 88
console.log(binarySearchTree.root.right.right.right.left.left.value === 89); // 89
