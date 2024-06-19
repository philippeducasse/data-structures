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
        oldHead = this.head;
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
    unshift(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;    
    }
    get(index){
        if (index < 0 || index >= this.length) return undefined;
        else{
            if (index <= this.length/2){
                let count = 0;
                let current = this.head;
                while(count !== index){
                    current = current.next;
                    count++;
                }
                return current;
            }
            else {
                let current = this.tail;
                let count = this.length -1;
                while(count !== index){
                    current = current.prev;
                    count--;
                }
                return current;
            }
        }
    }

    set(index, value){
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        } return false;
    }
    insert(index, value){
        let insertionNode = this.get(index);
        let newNode = new Node(value);
        let prevNode = insertionNode.prev;
        if (insertionNode){
            if(index === 0) return this.unshift(value);
            if(index === this.length) return this.push(value);
            newNode.prev = insertionNode.prev;
            newNode.next = insertionNode;
            insertionNode.prev = newNode;
            prevNode.next = newNode;
            this.length++;
            return true;
        } 
    }
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length -1) return this.pop();
        else {
            let removedNode = this.get(index);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
        }
    }
}


let list = new DoublyLinkedList
list.push(3)
list.push(2)
list.unshift("H")
list.set(0,"get");
list.insert(1, "TEST");
list.remove(1);
console.log(list);