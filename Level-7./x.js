console.log(x);
var x = 10;

function outer() {
  var x = 20;
  return function inner() {
    console.log(x);
  };
}

var fn = outer();
fn();





for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
}





function createCounter() {
  let count = 0;
  return {
    inc() { count++; },
    logDelayed() {
      setTimeout(() => console.log(count), 0);
    }
  };
}

const c = createCounter();
c.inc();
c.logDelayed();
c.inc();





let a = 5;

function outer() {
  let a = 10;
  return function inner() {
    let a = 15;
    console.log(a);
  };
}

const fn = outer();
fn();



var x1 = 1;

function test(x1) {
  console.log(x1);
  var x1 = 2;
}

test(10);