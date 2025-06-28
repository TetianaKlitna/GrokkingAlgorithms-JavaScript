class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    if (this.values.length === 1) {
      return this;
    }

    let currInd = this.values.length - 1;
    let currParentInd = Math.floor((currInd - 1) / 2);
    while (currParentInd >= 0) {
      if (this.values[currInd] > this.values[currParentInd]) {
        [this.values[currInd], this.values[currParentInd]] = [
          this.values[currParentInd],
          this.values[currInd],
        ];
      } else {
        break;
      }
      currInd = currParentInd;
      currParentInd = Math.floor((currInd - 1) / 2);
    }

    return this;
  }

  extractMax() {

    if(this.values.length === 0) return undefined;

    if(this.values.length === 1) return this.values.pop();

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const max = this.values.pop();
 
    let ind = 0;
    let currInd = 0;
    while (ind < this.values.length) {
      const nextInd1 = 2 * ind + 1;
      const nextInd2 = 2 * ind + 2;
      if (nextInd1 < this.values.length && nextInd2 < this.values.length) {
        currInd =
          this.values[nextInd1] > this.values[nextInd2] ? nextInd1 : nextInd2;
      } else if (nextInd1 < this.values.length) {
        currInd = nextInd1;
      } else if (nextInd2 < this.values.length) {
        currInd = nextInd2;
      } else {
        break;
      }
  
      if (this.values[ind] < this.values[currInd]) {
        [this.values[ind], this.values[currInd]] = [
          this.values[currInd],
          this.values[ind],
        ];
      } else {
        break;
      }

      ind = currInd;
    }
    
    return max;
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(10);
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
