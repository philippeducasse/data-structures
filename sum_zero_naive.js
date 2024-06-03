function unique(arr){
    let count = 0
    let i= 0
    while (i<= arr.length){
        if (i>0 && (arr[i]!== arr[i+1]) && (arr[i]=== arr[i-1])){
            i++
        }
        else if (arr[i]=== arr[i+1]){
            count++
            i+=2
        }
        else if (arr[i]!== arr[i+1]){
            count +=2;
            i++
        }
        else continue
    }
    console.log(count)
}


unique([1,1,1,3,6])