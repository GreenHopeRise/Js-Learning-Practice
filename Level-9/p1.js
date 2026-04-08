const arr = [1,2,3,4]
arr.push(5) //muted
console.log(arr)


const a = [1,2,3,4,5]
const newA = [...a, 4] //a is not muted 


const res = a.map((n)=>{
    return n*2
})
console.log(res)


const sqr = a.map((s)=>{
    return s*s
})
console.log(sqr)


console.log(
a.filter(a=> a%2===0))


const b = [10,20,30,40,50]
const filte = b.filter((b)=> b> 15)
console.log(filte)

const sum = b.reduce((acc, con)=>{
    return acc+con
},0)
console.log(sum)

console.log(1);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(2);


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

for (let i = 0; i < 1e9; i++) {} // heavy work

console.log("Ends");