function setUserName(userName) {
    this.userName = userName;
    console.log('im called')
}

function createUser(username, email, paassword) {
    setUserName.call(this, username)
    this.email = email
    this.paassword = paassword
}

const user = new createUser('aman', 'theaman@gmail.com', '123abc')
console.log(user)