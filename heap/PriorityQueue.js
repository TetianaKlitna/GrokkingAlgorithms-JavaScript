class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = Number(priority);
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);

    const len = this.values.length;

    if (len === 1) {
      return this;
    }
    
    let childInd = len - 1;
    while (childInd > 0) {
      const parentInd = Math.floor((childInd - 1) / 2);
      if(this.values[childInd].priority >= this.values[parentInd].priority){
         break;
      }
    
      [this.values[childInd], this.values[parentInd]] = [
          this.values[parentInd],
          this.values[childInd],
      ];
      childInd = parentInd;
    }

    return this;
  }

 

}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 6).enqueue('2', '1').enqueue('3', 3);
for (let i = 0; i < priorityQueue.values.length; i++) {
  console.log(priorityQueue.values[i].val, priorityQueue.values[i].priority);
}
