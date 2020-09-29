class Node {
  constructor(name, children) {
    this.name = name || null;
    this.children = children || [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  getNodes() {
    return this.nodes;
  }
}
