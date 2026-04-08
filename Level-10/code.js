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