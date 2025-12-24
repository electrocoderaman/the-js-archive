function calculateCardPrice(...num) { // ... this three dots are called rest operator and this is also called spread operator they behave like both on the basis of use case
    return console.log(num);
}

calculateCardPrice(58)
calculateCardPrice(54, 85, 79, 54)

let user = {
    UserName: "Aman kumar",
    price: 999
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.UserName} and price is ${anyObject.price}`)
}

handleObject(user)

let arr=[4556,854,56]

function handleArray(array){
    return console.log(array[1]);
}

handleArray(arr)