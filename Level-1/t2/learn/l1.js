// var a =5
// let b=6
// const c = 7

// a=5 //allowed
// b=8 // allowed
// c=9 // not allowed  ** const means variable refarense cannot be changed **
 
// if(true){
//     var x= 5
//     let y=6
// }
// console.log(x) //5 because var dont care block scope
// console.log(y) // error because let respect block scope


let a = { value: 10 }
let b = a

b.value = 20

console.log(a.value)
console.log(b.value)