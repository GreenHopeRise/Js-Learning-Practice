const arr = [1,2,3,4]
arr.push(5) //muted
console.log(arr)


const a = [1,2,3,4,5]
const newA = [...a, 4] //a is not muted 


a.map((a)=>{
    console.log(a*2)
})


console.log(
a.filter(a=> a%2===0))