// ES5
function welcome(a, b) {

    let result =a+b;
console.log(a)
console.log(b)
    return result;

}



// ES6 if returning a single line
welcome =(a,b)=> a+b;
// ES6 for returning multiple lines
let welcome = (a, b) => {

    let result =a+b;
    console.log(a)
    console.log(b)
        return result;
};

