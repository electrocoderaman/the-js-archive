for (let index = 1; index <= 30; index++) {
    console.log(`outer loop value ${index}`)
    for (let j = 1; j <= 10; j++) {
        console.log(index + `*` + j + `=` + index * j)
    }
    console.log("\n")
} 