let x = 5
function shadow(){
    let x =10
    console.log(x)
}
shadow()
console.log(x)

// scope leakage 
function total(){
    tota = 500
}
total()
console.log(tota)

// scope chain 
function A() {
  let x = "A";

  function B() {
    let y = "B";

    function C() {
      console.log(x, y);
    }

    C();
  }

  B();
}

A();