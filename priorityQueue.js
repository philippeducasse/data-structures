class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }
  bubbleUp(newNode) {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (newNode.priority >= parent.priority) {
        break;
      }
      this.values[parentIndex] = newNode;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new PriorityQueue();

heap.enqueue("tea",2);
heap.enqueue("coffee",3);
heap.enqueue("coke",1);
heap.enqueue("palm",4);
heap.enqueue("togo",1);
console.log(heap);

heap.dequeue();

console.log(heap);
heap.dequeue();
console.log(heap);

