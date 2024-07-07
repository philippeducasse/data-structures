const bubbleSort = (array) => {
    for (let i = 0; i< array.length; i++){
        if(array[i] > array [i+1]){
            [array[i], array[i + 1]] = [array[i+1], array[i]];
        }
    } return array;
}
console.log(bubbleSort([4,2,9,1,5,3]));