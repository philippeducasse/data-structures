class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } 
        this.length++;
        return this
    }
    // make sure to remove both tail.next and oldTail.prev to sever the links.
    pop(){
        if(this.tail !== null){
            let oldTail = this.tail;
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            }else {
                this.tail = oldTail.prev;
                this.tail.next = null;
                this.length--;
                oldTail.prev = null;
                return oldTail;
            }
        } else return undefined
    }
    shift(){
        if (this.length === 0) return undefined;
        oldHead = this.head;0
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

let list = new DoublyLinkedList
list.push(3)
console.log(list)
list.push(2)
console.log(list)
list.pop()
console.log(list)
