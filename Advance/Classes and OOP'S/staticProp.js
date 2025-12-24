class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is logged in`)
    }

    static creteID() {
        return `123`
    }
}

const aman = new user('billu badmass')
// console.log(aman.creteID())

class teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

let newTeacher = new teacher('aman', 'billubadmass@gmail.com')
console.log(newTeacher)