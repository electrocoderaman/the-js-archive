/* let myName="Aman      "
console.log(myName.length) */


let myHeros = ['thor', 'ironman', 'spiderman', 'homelander']

let heroPower = {
    thor: 'hammer',
    ironman: 'solid',
    spiderman: 'can throw web',
    homelander: 'leaser eyes',

    getSpiderPower: function () {
        // console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.aman = function () {
    // console.log('im present here')
}

Array.prototype.aman2 = () => {
    // console.log('this is aman')
}


heroPower.aman()
myHeros.aman2()
myHeros.aman()


const user = {
    userName: 'Aman kumar',
    ID: '123abc',
    isloggedIn: true,
    email: 'aman@google.com'
}

const teacher = {
    makingVideo: true,
}

const teachingSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssignment: 'javascript assignment',
    fullTime: true,
    __proto__: teachingSupport // this is old school type not used in modern js codes
}

//Modern syntax

Object.setPrototypeOf(teacher, user)

// console.log(teacher)

let anotherUserName = 'billu badmass         '

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)

}

anotherUserName.trueLength()

'google'.trueLength()
'microsoft'.trueLength()

