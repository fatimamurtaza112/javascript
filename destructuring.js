//-----------------------------------Object destructuring------------------------------//

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

// let info = {2
//     name: "fatima",
//     age: 20,
//     contact: "0310-78",
//     myClass: "cs",
//     roll: 32,
// }

// let { name, age, contact, myClass, roll } = info

// console.log(name)
// console.log(age)
// console.log(contact)
// console.log(myClass)
// console.log(roll)





//-----------------------------------Array destructuring------------------------------//\

// obj
var infos = {
}


// array
var info = [1, 2, 3, 4, 5, 6]

//   ES5




// ES5
var info = [0, 1, 2, 3, 4, 5]


var fi = info[0]
var se = info[1]
var th = info[2]
var fo = info[3]
var fi = info[4]
var si = info[5]

console.log(fi, se, th, fo, fi, si)


// ESvar6

var values = [0, 1, 2]

var fi = values[0]
var se = values[1]
var th = values[2]

var [fi, se, th] = values
console.log(fi)
console.log(se)
console.log(th)