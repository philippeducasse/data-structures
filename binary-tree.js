class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        console.log("FOUND: ", current.value);
        return true;
      }
    }
    console.log("Not found");
    return false;
  }
  // time complexity is the same of both. Space complexity is greater for BFS with very large trees.
  // BFS is a bit more memory intensive because you have to store queue variable
  // Therefore for full and very big trees dfs is more efficient

  bfs() {
    let queue = [],
      data = [],
      node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left)queue.push(node.left);
      if(node.right)queue.push(node.right);
    } return data;
  }
  dfs_pre(){
    const data = [];
    const traverse = (node) => {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  dfs_post(){
    const data = [];
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  dfs_in(){
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(4);
tree.insert(12);

console.log(tree.dfs_pre());
console.log(tree.dfs_post());
console.log(tree.dfs_in());




