// const sum = (...count) => {
//     let total = 0;
//     console.log(sum)


//     count.forEach(
//         (x) => {
//             total = total + x
//         }
//     )
//     console.log(total)
// }

// sum(1, 3, 4, 5, 5,)
const sub = (...minus) => {
    minus.forEach(
        (i) => {
            console.log(i * 2)
        }
    )
}
sub(8, 5)

// forEach()

let number = [1, 2, 3, 4, 5, 6]

// map

let newArray = number.map(
    (i) => {
        return i * 2
    })
console.log(newArray)


// callbacks
// promises
// async await







// 1. define multiply function and multiply each arrray item using foreach loop
// using map return an array having 3 times result 

