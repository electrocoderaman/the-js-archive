function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
           return this._email.toUpperCase()
        },

        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            this._password.toUpperCase()
        },

        set: function (value) {
            this._password = value
        }
    })
}

let newUser = new user('aman@2627', 'aman123')
console.log(newUser.email)