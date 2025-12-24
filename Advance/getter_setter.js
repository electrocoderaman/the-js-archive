class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


    set email(value) {
        this._email = value
    }
    get email() {
        return `${this._email}aman`
    }

    set password(value) {
        this._password = value
    }

    get password() {
        return this._password.toUpperCase()
    }
}

const aman = new user('theaman@2627', 'aman123')
console.log(aman.password)
console.log(aman.email)
