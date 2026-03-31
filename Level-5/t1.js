// Hoisting scan variable and function in creation phase of running 

// --> variable hoisting 
console.log(x)
var x = 5 // undifined
// what happening -->
var xx
console.log(xx)
xx=5
// thats why its undefined

// --> function hoisting

fnx()
function fnx(){
    console.log('hi')
}
// why ? => function can hoisted fully 
// function expression -->
f()
var f= function(){console.log('good line')}