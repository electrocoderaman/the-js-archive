const user = {
    userName: 'Aman',
    userId: '11234',
    isLoggedIn: true,
    getUserDetail: function () {
        return 'got user detail form database'
    },
    getUserName: function () {
        return this.userName
    }

}

// console.log(user.userName)
// console.log(user)
// console.log(user.getUserDetail())
// console.log(user.getUserName())

function user1(userName, userId, isLoggedIn) {
    this.userName = userName;
    this.userId = userId;
    this.isLoggedIn = isLoggedIn
    this.greeting=function(){
        return 8`welcome ${this.userName}`
    }

    return this;
}

const userOne = new user1('Aman', '123abc', false)
const userTwo = new user1('jhon', '123abc', true)

console.log(userOne)
console.log(userOne.greeting())
