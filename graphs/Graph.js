class Graph {
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
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length > 0) {
        const neighbor = this.adjacencyList[vertex].pop();
        this.removeEdge(neighbor, vertex);
      }
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2)
    ) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      );
      return true;
    }

    return false;
  }

  DFSrec(startVertex){
    const res = [];
    const visited = {};

    const helper = (vertex) => {

      if(!vertex) return;

      visited[vertex] = true;
      res.push(vertex);
      
      const neighbors = this.adjacencyList[vertex];
      for(let i = 0; i < neighbors.length; i++){
        if(!visited[neighbors[i]]) helper(neighbors[i]);
      }
    }

    helper(startVertex)

    return res;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.DFSrec('F'));