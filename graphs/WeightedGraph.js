class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);

    const len = this.values.length;

    let child = len - 1;
    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (this.values[child].priority >= this.values[parent].priority) break;

      [this.values[child], this.values[parent]] = [
        this.values[parent],
        this.values[child],
      ];
      child = parent;
    }

    return this;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const deleted = this.values.pop();

    let parent = 0;
    let child = 0;
    while (parent < this.values.length) {
      const childLeft = 2 * parent + 1;
      const childRight = 2 * parent + 2;

      if (childLeft < this.values.length && childRight < this.values.length) {
        child =
          this.values[childLeft].priority < this.values[childRight].priority
            ? childLeft
            : childRight;
      } else if (childLeft < this.values.length) {
        child = childLeft;
      } else if (childRight < this.values.length) {
        child = childRight;
      } else {
        break;
      }

      if (this.values[parent].priority < this.values[child].priority) {
        break;
      }

      [this.values[parent], this.values[child]] = [
        this.values[child],
        this.values[parent],
      ];

      parent = child;
    }

    return deleted;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return false;
    }

    while (this.adjacencyList[vertex].length > 0) {
      const neighbor = this.adjacencyList[vertex].pop();
      this.removeEdge(neighbor.vertex, vertex);
    }

    delete this.adjacencyList[vertex];
    return true;
  }

  addEdge(vertex1, vertex2, weight) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      vertex1 !== vertex2
    ) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      vertex1 !== vertex2
    ) {
      if (this.adjacencyList[vertex1].some((edge) => edge.vertex === vertex2)) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          (edge) => edge.vertex !== vertex2
        );
      }
      if (this.adjacencyList[vertex2].some((edge) => edge.vertex === vertex1)) {
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          (edge) => edge.vertex !== vertex1
        );
      }
      return true;
    }

    return false;
  }
}
