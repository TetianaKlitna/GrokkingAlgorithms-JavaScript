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
