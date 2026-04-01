const object = {a: 5}
const object2 = object
object2.a=20
console.log(object)


const obj1 ={x:5}
const obj2 = {...obj1}
obj2.x=3
console.log(obj1.x)
console.log(obj2.x)


const o1 = {
    name: 'Khalid',
    age: 23
}
const {name, age} = o1
console.log(name, age)

const method = {
    x: 'Khalid',
    y: 23,
    name(){
        console.log(`Hi my name is ${this.x} and age is ${this.y}`)

    }
}
method.name()


const state = {
    user :{
        name: 'khalid',
        age: 24
    }
}
state.user.age=25
console.log(state.user.age)

const newState ={
    ...state,
    user: {...state.user, age: 26, name: 'io', tp: 33}
}
console.log(newState.user.age, newState.user.name, newState.user.tp)