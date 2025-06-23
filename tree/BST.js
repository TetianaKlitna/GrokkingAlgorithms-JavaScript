class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
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

  find(value){

    if(!this.root){
      return undefined;
    }

    let curr = this.root;

    while(curr){
      if(value < curr.value){
        curr = curr.left;
      }else if(curr.value < value){
        curr = curr.right;
      }else{
        return curr;
      }
    }

    return undefined

  }

}

let bst = new BST();
bst.insert(5);
bst.insert(10);
bst.insert(15);
bst.insert(6);
bst.insert(6);
console.log(bst.root.value);
console.log(bst.root.right.value);
console.log(bst.root.right.right.value);
console.log(bst.root.right.left.value);
console.log(bst.find(10));