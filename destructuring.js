// ES5
// // OBJECT CREAZTING
// var info = {
    
//     name: "Zeeshan",
//     age: "10",
//     a: "a",
//     b:"b"

// }

// var names = info.name
// var ages =  info.age
// var a = info.a
// var b = info.b

// console.log(names)
// console.log(ages)
// console.log(a)
// console.log(b)


// ES6


var info = {
    
    name: "Zeeshan",
    age: "10",
    a: "a",
    b:"b"

}
var {name:names, age, a, b} = info

console.log(names)
console.log(age)
console.log(a)
console.log(b)
