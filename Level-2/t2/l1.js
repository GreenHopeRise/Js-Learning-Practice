if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}

if (score >= 90) {
  console.log("A")
} else if (score >= 75) {
  console.log("B")
} else {
  console.log("C")
}

let age = 18

if (age >= 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}

let x = 0

if (x) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}


let score = 82

if (score >= 90) {
  console.log("A")
} else if (score >= 75) {
  console.log("B")
} else if (score >= 50) {
  console.log("C")
} else {
  console.log("F")
}


let temp = 30

if (temp > 40) {
  console.log("Hot")
} else if (temp > 25) {
  console.log("Warm")
} else {
  console.log("Cold")
}



let name = "Anis"

name && console.log("Name exists")
// prints "Name exists" because name is truthy

name || console.log("No name")
// does not print because name is truthy


let scores = 0

scores && console.log("Passed")
scores || console.log("Failed")



for (let i = 3; i > 0; i--) {
  console.log(i)
}



let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break
  console.log(i)
}
// Output: 1, 2

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue
  console.log(i)
}
// Output: 1, 2, 4, 5


for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue
  console.log(i)
}


let day = 3

switch (day) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  default:
    console.log("Another day")
}


let fruit = "apple"

switch(fruit) {
  case "banana":
    console.log("Yellow")
    break
  case "apple":
    console.log("Red")
  case "grape":
    console.log("Purple")
  default:
    console.log("Unknown color")
}


let numbers = [0, 1, 2, 3, 4]

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i]

  if (num % 2 === 0 && num !== 0) {
    console.log("Even:", num)
  } else if (num % 2 !== 0) {
    switch (num) {
      case 1:
        console.log("One")
        break
      case 3:
        console.log("Three")
        break
      default:
        console.log("Odd number")
    }
  } else {
    console.log("Zero")
  }
}