// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

// const discripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(discripter)
// console.log(discripter.value)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvilable: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// console.log(Object.getOwnPropertyDescriptor(chai, 'price'))
// console.log(Object.getOwnPropertyDescriptor(chai, 'isAvilable'))

console.log('now printing the objects')

for (const key in chai) {
    if (typeof chai[key] !== 'function') {
        console.log(`the key is ${key} and value is ${chai[key]}`)
    }
}

// Object.defineProperty(chai, 'name', {
// writable: false,
// enumerable: false,
// configurable: false
// })                           NOTE:- this is used when we want to change the property of only one key if we want to change the property of every key then we should use defineProperties

Object.defineProperties(chai, {
    name: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    price: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    isAvilable: {
        writable: false,
        enumerable: false,
        configurable: false
    }
})   // when we use this method we can disable the properties of whole objects

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
console.log(Object.getOwnPropertyDescriptor(chai, 'price'))
console.log(Object.getOwnPropertyDescriptor(chai, 'isAvilable'))


for (const key in chai) {
    console.log(`the key is ${key} and value is ${chai[key]}`)
} // this will not work now
