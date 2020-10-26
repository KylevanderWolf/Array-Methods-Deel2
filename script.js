//Deel A:
let superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]

let findSpiderman = superheroes.find(item => item.name === "Spiderman")
console.log(findSpiderman);



//Deel B:
let array1 = [3, 6, 9, 18]
let Multiplier = array1.map(number => (number * 2))
console.log(Multiplier)

//Deel C:
let array2 = [1, 3, 6, 8, 11]
let findNumbersAboveTen = array2.some(number => number > 10)
console.log(findNumbersAboveTen)


//Deel D:
let country = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']
let findItaly = country.some(item => item === "Italy")
console.log(findItaly)

//Deel E: 
//Numbers * 10
let array3 = [1, 2, 3, 4, 5];
array3.forEach(number => console.log(number * 10));

//Deel F:
//Check if all numbers are below 100
//Result = false
let array4 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]
let isBelowHundred = array4.every(number => number < 100)
console.log(isBelowHundred)

//Deel G:
let array5 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
let addNumbers = array5.reduce((total, item) => item + total, 0)
console.log(addNumbers)