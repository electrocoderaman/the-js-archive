const promiseOne = new Promise((resolve, reject) => {
    //DO an async task
    //DB calls, cryptography,newtwork releted
    setTimeout(() => {
        console.log('async task is completed')
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log('promise consumed')
}
)

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task two')
        resolve()
    }, 1000);
}).then(() => {
    console.log('recevied')
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: 'Chai', email: 'chai@example.com' })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: 'Aman', userId: '123abc' })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user)
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('the promise is either resolved or rejected'))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'javascript', userId: '123abc' })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

/* async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers() */

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    }) 