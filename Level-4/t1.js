// Global scope 
let name = 'khalid'
function names(){
    console.log(name)
}
names()


// Function scope 
 function fn(){
    let x = 5
 }
// --->  console.log(x) //Error


//  block scope means {..}
// const and let 
if(true){
    let y =7

}
// --->console.log(y) //ref error

if(true){
    var z =5
}
console.log(z)



// Lexical scope 

let a = 10;
function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }

  inner();
}

outer();


// Execution context = box 
//  Global execution context (vairable, function, this keyweor)

// Search chain 
let ax = 1;

function one() {
  let b = 2;

  function two() {
    let c = 3;
    console.log(ax, b, c);
  }

  two();
}

one();

