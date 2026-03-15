var a = 10
let b = 20
const c = 30

a = 50   // ok
b = 60   // ok
c = 70   // ❌ error



// -----**-----

if (true) {
  var x = 10
  let y = 20
}

console.log(x) // 10
console.log(y) // ❌ error


var aa = 10
let bb = 20

if (true) {
  var aa = 30
  let bb = 40
}

console.log(aa)//30
console.log(bb)//20




for (var i = 0; i < 3; i++) {}

console.log(i)//3