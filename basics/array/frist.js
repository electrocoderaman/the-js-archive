let arr = [1, "aman", 65, true, 0.66];

arr.push(false)
// console.log(arr);

arr.pop()
// console.log(arr)

arr.unshift(8)
// console.log(arr)

arr.shift()
// console.log(arr)

// console.log(arr.includes(2))

// let newArr = arr.join()
// console.log(newArr);
//  console.log(typeof newArr);

// let newArr2 = arr.slice(1, 3)
// console.log("A", arr);
// console.log(newArr2);

// let newArr3 = arr.splice(1, 3)
// console.log("B", arr);
// console.log(newArr3)


// PART- 2

let marvalHeroes = ["thor", "iron man", "spider man"];
let dcHeroes = ["super man", "flash", "batman"];

// marvalHeroes.push(dcHeroes);
// console.log(marvalHeroes)


let heroesMerge = marvalHeroes.concat(dcHeroes)
// console.log(heroesMerge)

let allHeros = [...dcHeroes, ...marvalHeroes];
// console.log(allHeros)

let other = [1, 2, 3, [4, 5, 6], [7, 8, [11, 20, 36, [45, 78, 98]]]]
// console.log(other)

let realOther = other.flat(Infinity);
// console.log(realOther);


let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));