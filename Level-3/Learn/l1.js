// when we declare a function it imideatly stored in memory so it can be called any time before or after the function execution but it will not accaptable for expression function

sayHi()
function sayHi(){
    console.log('hi')

}
sayHi()

// console.log(fun(2,4)) error
const fun = function(a,b){
    return a+b
}
console.log(fun(2,4))