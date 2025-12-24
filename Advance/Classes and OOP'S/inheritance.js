class user {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        return `USERNAME is: ${this.userName}`
    }
}
// let newUser = new user('aman')
// console.log(newUser.logMe())

class teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`a new course is added by ${this.userName}`)
    }
}

let newTeacher = new teacher('satyam kumar singh', 'pce@2627', 'billubadmass')
// console.log(newTeacher.userName)

newTeacher.addCourse()

console.log(newTeacher instanceof user)
console.log(newTeacher instanceof teacher)


