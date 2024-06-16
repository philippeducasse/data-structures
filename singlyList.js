class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let previous;
            let count = 0;

            while(count < this.length -1){
                previous = current;
                current = current.next;
                count++ 
            }
            this.tail = previous;
            this.tail.next = null;
        } 
        this.length--;
        return poppedNode;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        else{
            newNode.next = this.head; 
            this.head = newNode;
        }
        this.length++
    }

    shift(){
        if(!this.head) return undefined;
        let poppedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            poppedNode.next = null;
        } 
        this.length--;
        return poppedNode;
    }
    get(index){
        if (this.length === 0) return undefined;
        if (this.length -1 < index) return undefined;
        else {
            let current = this.head;
            let previous;
            let count = 0;

            while(count < index){
                previous = current;
                current = current.next;
                count++ 
            }
            console.log( 'GET: ',current);
            return current;
        }
    }
    insertAt(index){
        if (this.length < index) return undefined;
        else {
            let current = this.head;
            let previous;
            let count = 0;

            while(count < index){
                previous = current;
                current = current.next;
                count++ 
            }
            console.log( 'SET: ',current);
            // TODO: REST OF LOGIC
        }
    }
}


let list = new SinglyLinkedList();

list.push(1);
// console.log(list);
list.unshift(2);
// console.log(list);
list.push(3);
// console.log(list);
list.shift();
console.log(list);
list.get(0)

