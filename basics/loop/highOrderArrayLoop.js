// for of loop

let arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val)
}

let greeting = "hello world!"

for (const val of greeting) {
    if (val == " ") {
        continue
    }
    else {
        // console.log(`each char is ${val}`)
    }

}

let obj = {
    game1: 'cricket',
    game2: 'hockey'
}

for (const val of obj) {
    console.log(val)
}