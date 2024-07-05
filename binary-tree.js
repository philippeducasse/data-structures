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
}

let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(2);
// console.log(tree.bfs());


