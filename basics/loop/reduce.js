let arr = [1, 2, 3, 4, 5]

// let totalNums = arr.reduce((acc, currVal) => {
//     console.log(`acc:- ${acc} currVal:- ${currVal}`)
//     return acc + currVal
// }, 0) we can write the same code in one line 

let totalNums = arr.reduce((acc, currVal) => (acc + currVal), 0) //this is the same code and output is same  

// console.log(totalNums)

let shopingCart = [
    {
        itemName: 'js course',
        coursePrice: 999
    },
    {
        itemName: 'c course',
        coursePrice: 1599
    },
    {
        itemName: 'python course',
        coursePrice: 1999
    }
]

let totalPrice = shopingCart.reduce((acc, item) => (acc + item.coursePrice), 0)
console.log(totalPrice)