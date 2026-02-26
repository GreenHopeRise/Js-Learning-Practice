function calculator(a,o,b){
    switch(o){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b
        case '/':
            return b===0? 'error':a/b
        default: return 'invalid return'
    }
}

console.log(calculator(2,'-',3))