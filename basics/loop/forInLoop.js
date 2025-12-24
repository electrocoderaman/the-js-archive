let obj = {
    cpp: "c++",
    js: "javascript",
    py: "python",
    rb: "ruby"
}

for (const key in obj) {
    console.log(`${key} is shortcut for ${obj[key]}`)
}

let arr=[1,2,3,4]
for(let key in arr){
    console.log(arr[key])
}

