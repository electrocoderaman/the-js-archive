let user = {
    userName: "Aman",
    id: "123abc",
    isLoggedIn: true,
    welcomeMessage: function () {
        console.log(`hey ${this.userName}, welcome`)
        // console.log(this)
    }
}
// user.welcomeMessage()
user.userName = "sam";
// user.welcomeMessage()
// console.log(this)

// function other(){
//     console.log(this)
// }

// other()

let other = () => {
    console.log("hey this is aman")

}
// other()

let other1 = () => {
    console.log("hey this is aman")
}

// other1()

let addtwo = (a, b) => {
    return console.log(a + b)
}

// console.log(addtwo(45,87))
addtwo(45,87)

