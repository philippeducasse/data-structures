const bubbleSort = (array) => {
    for (let i = 0; i< array.length; i++){
        for (let j = 0; j < array.length-1-i; j++){
            if(array[j] > array [j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    } return array;
}
console.log(bubbleSort([4,2,9,1,5,3]));