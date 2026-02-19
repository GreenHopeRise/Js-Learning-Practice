console.log(parseInt('10px')) //not good

 function safeWay(x){
    const num = Number(x)
    if(Number.isNaN(num)){
        throw new Error('invalid number')
    }
    return num
 }
  console.log(safeWay('10px'))
