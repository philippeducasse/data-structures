class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp(value);
    }
    bubbleUp(value){
        let index = this.values.length -1;
        while (index > 0){
                let parentIndex = Math.floor((index-1)/2);
                let parent = this.values[parentIndex];
                if(value <= parent){
                    break;
                }
                    this.values[parentIndex] = value;
                    this.values[index] = parent;
                    index = parentIndex;
            }
        }

}

let heap = new MaxBinaryHeap;

heap.insert(5);
heap.insert(10);
heap.insert(3);
heap.insert(12);
heap.insert(5012);


console.log(heap)
