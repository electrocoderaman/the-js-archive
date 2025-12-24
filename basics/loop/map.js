let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let modifiedArray = arr.forEach((val) => {
//     return val + 10
// }
// ) the output will come as undefine becouse for each does not return a new array it can only itrate through a loop , in a case where we want a new array in return then we will use map 

// let modifiedArray = arr.map((val) => {
//    return val + 10
// }
// )

//chaining

let modifiedArray = arr.map((val) => val * 10).map((val) => val + 1).filter((val) => val > 50)

console.log(modifiedArray)