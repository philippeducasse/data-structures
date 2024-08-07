class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(vertex) {
    const list = [];
    const visited = {};

    const DFS = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      list.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) DFS(neighbour);
      });
    };
    DFS(vertex);
    console.log(list);
    return list;
  }

  depthFirstIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};

    visited[vertex] = true;

    while (stack.length) {
      let popped = stack.pop();
      result.push(popped);

      this.adjacencyList[popped].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    console.log(result);
    return result;
  }

  bfs(vertex){
    const queue = [vertex];
    const result = [];
    const visited = {};

    visited[vertex] = true;

    let currentVertex;
    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(v => {
            if(!visited[v]){
                visited[v] = true;
                queue.push(v);
            }
        });
    }
    console.log(result);
    return result;
  }
}

g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.bfs("A");
