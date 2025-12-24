const user = {
    _email: 'theaman@2627',
    _password: 'aman123',


    get email() {
        return this._email.toUpperCase()
    },

    set email(val) {
        this._email = val
    }
}

const tea = Object.create(user)
console.log(tea.email)
