function count(x,arr){
    let count = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===x){
            count=count+1
        }
    }
    return count
}

console.log(count(5,[1,5,3,5,4,5,5]))