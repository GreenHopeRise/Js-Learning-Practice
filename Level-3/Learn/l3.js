function outer(){
    return function inner(){
        console.log('hello')
    }
}
const a = outer()
console.log(a())