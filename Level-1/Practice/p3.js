// bug
function add(a,b){
    return a+b
}

console.log(add(5,'1'))

// fix 
function addFix(a,b){
    return Number(a)+Number(b)
}
console.log(addFix('4',5))