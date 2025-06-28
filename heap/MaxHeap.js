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
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(10).insert(20).insert(6).insert(6).insert(21);
console.log(maxHeap.values);
