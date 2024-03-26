let myName: string | number= "Christine"
console.log(myName)

myName = 3
//tsc -w examples.ts

const haveBirthday = (age: number) : number => {
    return(age + 1)
}

const printAge = (age: number):void => {
    console.log()
}

// create a function that takes in somebody's name and age
// and prints to the console a greeting. that refers to their age 
// e.g. Hi Matt, great to see you turned 22


const inputName: string = prompt("What's your name?")
const age: number = prompt("whats your age?")

const greetByAge = (name: string, age:number): void =>{
    console.log(`hey ${inputName}, great to see you turned ${age}`)
}

greetByAge(inputName,age)

let sallyAge =3
 let sallyAge: number|null
 if(sallyAge !== null){
    haveBirthday(sallyAge)
 }

 //nullish coalenscing operator
//has sally's age been defined?
// if so, call the function on sally age.  if not, call function on 25
 haveBirthday(sallyAge ?? 25)
 //I am super confident this is not null
 haveBirthday(sallyAge!)

 type Transaction ={
    date: Date;
    amount: number;
    description: string;
 }

 const trasnaction1: Transaction = {
    date: new Date(),
    amount: 100
 }

 console.log(transaction1.description?.length)