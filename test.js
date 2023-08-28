// 1. create an arrow function  myInfo 
// 2. that will return an object lets say info



//var {name, roll } =  myInfo

// 

let myinfo = () => {

    let info = {
        name: "fatima",
        age: "20",
        myclass: "cs",
    }

    return info
};

// 2

console.log(myinfo())

let { name, age, myclass } = myinfo()
console.log(name)
console.log(age)
console.log(myclass)
