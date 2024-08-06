class Graph{
    constructor(){
        this.adjacencyList = {};
    };

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
    };

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    };

    removeVertex(vertex){
        for(let v of this.adjacencyList[vertex]){
            this.removeEdge(v, vertex);
        };
        delete this.adjacencyList[vertex];
    }
}

g = new Graph();
g.addVertex("SF");
g.addVertex("CH");
g.addVertex("ZI");
g.addEdge("SF", "CH")
g.addEdge("ZI", "SF");
g.removeEdge("SF", "CH")
g.removeVertex("ZI")

console.log(g)