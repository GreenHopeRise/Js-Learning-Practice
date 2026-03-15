console.log(5 == "5")
console.log(5 === "5")
console.log(false == 0)
console.log(false === 0)
console.log(null == undefined)
console.log(null === undefined)

console.log(prova(2))


function prova(n){
    switch(n){
        case 1:
            console.log('hi')
            break
        case 2:
            console.log('hello')  
            break
            
         case 3:
            console.log('bye')  
            break
        default:
            console.log('not match')     
    }
    

}



let x=10
// 10/3=3. |1

// 10%3=1

// 1%2=1
// 3%2=1
// 5%2=1

// 5%2=1
// 2%2=0
// 4%2=0
// 6%2=0
// for(let i = 0; i<x; i+=2){
//     console.log(i)
// }

// 12345

let a = 'provakor'

a[0]

for(let i=a.length-1; i>=0; i--){
    console.log(a[i])
}

