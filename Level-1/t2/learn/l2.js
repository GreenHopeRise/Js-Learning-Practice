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


let x = 10

if (true) {
  let x = 50
  console.log(x)
}
console.log(x)




// ------*------

const user = { name: "Anis" }
user.name = "Rahim"
console.log(user.name)



let ce = 10
let d = a
d = 20
console.log(ce)
console.log(d)


let ax = { value: 10 }
let bx = a
bx.value = 20
console.log(ax.value)
console.log(bx.value)
// so we can say that premitive copy value but non premitive like object, arry, function copy refarense

let arr1 = [1,2,3]
let arr2 = [...arr1]

arr2.push(4)

console.log(arr1)
console.log(arr2)



// ------****-------

/*
Falsy value :-
false
0
""   // empty string
null
undefined
NaN

else are truety
*/

if (0) {
  console.log("runs")
} else {
  console.log("does not run")
}

// Output: "does not run"
if ("hello") {
  console.log("runs")
}

// Output: "runs"

const name = "" || "Guest"
console.log(name)  // "Guest"

true && "Hello"   // "Hello"
false && "Hello"  // false


console.log(Boolean(0)) //false
console.log(Boolean("0")) //true
console.log(Boolean([])) //true
console.log(Boolean({})) // true
console.log(Boolean(null)) //false
console.log(Boolean(NaN)) // false

const user = null
console.log(user || "Guest")

const nam = "Anis"
console.log(nam && "Hello")



// ------*-------
console.log(5 == "5")
console.log(5 === "5")
console.log(0 == false)
console.log(0 === false)
console.log(null == undefined)
console.log(null === undefined)


console.log("" == false)
console.log("" === false)
console.log("0" == false)
console.log("0" === false)


// Type Coercion in JavaScript=>
"5" + 2
"Hello " + 5  // "Hello 5"
"5" - 2
"10" * "2"  // 20
"10" / "2"  // 5
if ("") console.log("runs") // won't run → "" is falsy
if ("Hello") console.log("runs") // runs → truthy
console.log("5" + 3)
console.log("5" - 3)
console.log(true + 1)
console.log(false + 5)
console.log(null + 5)
console.log(undefined + 5)

console.log(Number("123"))
console.log(Number("abc"))
console.log(String(123))
console.log(Boolean(0))
console.log(Boolean("false"))

"" == false       // true
"" === false      // false

"0" == false      // true
"0" === false     // false

null == undefined // true
null === undefined// false


