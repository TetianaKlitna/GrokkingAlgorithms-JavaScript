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
      if (this.values[childInd].priority >= this.values[parentInd].priority) {
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

  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const node = this.values.pop();
    const len = this.values.length;

    let ind = 0;
    let maxPriorityNextInd = 0;
    while (ind < len) {
      const indNext1 = 2 * ind + 1;
      const indNext2 = 2 * ind + 2;
      if (indNext1 < len && indNext2 < len) {
        maxPriorityNextInd =
          this.values[indNext1].priority < this.values[indNext2].priority
            ? indNext1
            : indNext2;
      } else if (indNext1 < len) {
        maxPriorityNextInd = indNext1;
      } else if (indNext2 < len) {
        maxPriorityNextInd = indNext2;
      } else {
        break;
      }

      if (
        this.values[ind].priority < this.values[maxPriorityNextInd].priority
      ) {
        break;
      }

      [this.values[ind], this.values[maxPriorityNextInd]] = [
        this.values[maxPriorityNextInd],
        this.values[ind],
      ];
      ind = maxPriorityNextInd;
    }

    return node;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue
  .enqueue('common cold', 5)
  .enqueue('gunshot wound', 1)
  .enqueue('high fewer', 4)
  .enqueue('broken arm', 2)
  .enqueue('glass in foot', 3);
for (let i = 0; i < priorityQueue.values.length; i++) {
  console.log(priorityQueue.values[i].val, priorityQueue.values[i].priority);
}
console.log(priorityQueue.dequeue().priority);
console.log(priorityQueue.dequeue().priority);
for (let i = 0; i < priorityQueue.values.length; i++) {
  console.log(priorityQueue.values[i].val, priorityQueue.values[i].priority);
}
