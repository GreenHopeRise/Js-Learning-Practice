// function declaration
function hello(){
    console.log('hi')
}
hello()

// function Expression

const x = function(){
    console.log('hello')
}
x()
// we cann't access expression function before declaration
hell()

const hell = function() {
  console.log("Hi")
}



helo()

var helo = function() {
  console.log("Hi")
}

function test() {
  var a
  console.log(a)

  a = 5
}

test()


function outer() {
  var a = 10

  function inner() {
    console.log(a)
  }

  inner()
}

outer()



function counter() {
  let count = 0; 
  return function () { 
    count++;
    console.log(count);
  };
}

const c1 = counter(); 
c1();
c1();