console.log("this is from the js")

const matt = {
    name: "Matt",
    mattsDog: "Lacey",
    numDogs: 1,
}

// i want 3 variables; each with the value  
// name, mattsDog, numDogs
//below time intensive way
const name = matt.name

//object destructuring

const {name : newNameVariable, mattsDog, numDogs} = matt

console.log(newNameVariable)


//challenge - use destructuring to assign taryn's fav color and hobby to variables

const taryn = {
    favColor: 'black',
    hobby: 'tiktok',
}

const {favColor, hobby} = taryn

//spread opperator

const newTaryn = {... taryn, pets: false, favColor: 'yellow'}

//destructuring for arrays

const arr = [1,2,3]

const [num1,num2,num3] = arr 

const morNums = [... arr, 5]
console.log(morNums)
