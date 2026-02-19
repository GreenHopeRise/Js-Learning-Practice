function earlyExit(x,arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===x){
            return 'done'
        }
    }
    return 'ok'
}

console.log(earlyExit(5, [1,3,3,2]))