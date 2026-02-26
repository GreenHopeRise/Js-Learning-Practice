function add(a){
    return function ok(){
        return a+5
    }
}
const y = add(7)
console.log(y())