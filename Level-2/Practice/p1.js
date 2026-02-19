function fizzBuzz(x){
    for(let i =1;i<=x;i++){
        if(i%15===0) {
            const r ='fizzBuzz'
            return r
        }
        else if(i%3===0) {
            const r ='fizz'
            return r
        }
        if(i%5===0) {
            const r ='Buzz'
            return r
        }

    }

}
console.log(fizzBuzz(45))