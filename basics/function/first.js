function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function sum(a,b){
//     console.log(a+b);
// }

// sum(48,56)

function sum(a, b) {
    return a + b;
}

// let result=sum(54,69);
// console.log(sum(45,25))


function loginUserMessage(userName) {
    if (typeof userName === "string") {
        return console.log(`hey, ${userName} welcome hope you liked our website `)
    }
    else {
        return console.log("please enter a valid name")
    }
}

loginUserMessage()