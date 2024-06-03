function same(arr1, arr2){

    // count numers
    let count1 = {};
    let count2 = {};
    
    for (var num of arr1){
        count1[num] = ++count1[num] || 1;
    }

    for (var num of arr2){
        count2[num] = ++count2[num] || 1;
    }
    
    //compare
    for (let key in count1){
        if(!(key**2 in count2)){
             console.log(false)

            return false
        }
        if (count1[key**2] !== count2[key]){
             console.log(false)

            return false;
        }
    }
    console.log(true)
    return true
}

same([2],[4])
same([2,1,3],[4])
same([2,1,3],[4,9,1])

