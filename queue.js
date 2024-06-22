class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = null;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        }
        else{
            this.last.next = newNode; 
            this.last = newNode;
        }
        this.length++
    }
    dequeue(){
        if(!this.first) return undefined;
        let poppedNode = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            poppedNode.next = null;
        } 
        this.length--;
        return poppedNode;
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue)
queue.dequeue();
console.log(queue)

