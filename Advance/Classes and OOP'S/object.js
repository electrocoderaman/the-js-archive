function mulBy5(num) {
    return num * 5
}

mulBy5.power = 2

console.log(mulBy5(5))
console.log(mulBy5.power);
console.log(mulBy5.prototype)

function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}

const chai = new createUser('chai', 10)
const tea = new createUser('tea', 100)

chai.printMe()