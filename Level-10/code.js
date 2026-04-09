const p = new Promise((resolve, reject)=>{
    resolve('hi')
})
p.then(result => console.log(result))



const d = new Promise ((resolve, reject)=>{
  setTimeout(()=>{
    resolve('done')
  },2000)  
})

d.then(r => console.log(r))


const x = new Promise ( (resolve, reject)=>{
    let success = false
    if(success) resolve('good')
    else reject('bad')    
})
x.then(r=>console.log(r)).catch(t=>console.log(t))



const pro = new Promise((resolve, reject)=>{
    resolve(2)
})
pro.then(r=>r*2).then(r=>r*2).then(r=>r*2).then(r=>console.log(r))