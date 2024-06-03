const squared = function (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr1.length; i++){
        correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return false
        }
        else arr2.splice(correctIndex,1)
        console.log(arr2)
    }
    return true
}

squared([2,3,4], [4,9,16,5])