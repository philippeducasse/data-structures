class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = null;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        }
        else{
            newNode.next = this.first; 
            this.first = newNode;
        }
        this.length++
    }
    pop(){
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

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(3)
console.log(stack);
