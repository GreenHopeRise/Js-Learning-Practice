let a = 10;

function test() {
  console.log(a);
}

test();


let aa = 10;

function test() {
  let aa = 20;
  console.log(aa);
}

test();


let ab = 1;

function outer() {
  let b = 2;

  function inner() {
    console.log(ab, b);
  }

  inner();
}

outer();



function App() {
  let count = 0;

  return {
    click() {
      count++;
      console.log("click:", count);
    },
    delayed() {
      setTimeout(() => {
        console.log("delayed:", count);
      }, 1000);
    }
  };
}

const app = App();

app.click();
app.delayed();
app.click();