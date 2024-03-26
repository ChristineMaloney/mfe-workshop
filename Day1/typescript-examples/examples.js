var myName = "Christine";
console.log(myName);
myName = 3;
//tsc -w examples.ts
var haveBirthday = function (age) {
    return (age + 1);
};
var printAge = function (age) {
    console.log();
};
// create a function that takes in somebody's name and age
// and prints to the console a greeting. that refers to their age 
// e.g. Hi Matt, great to see you turned 22
var inputName = prompt("What's your name?");
var age = prompt("whats your age?");
var greetByAge = function (name, age) {
    console.log("hey ".concat(inputName, ", great to see you turned ").concat(age));
};
greetByAge(inputName, age);
var sallyAge = 3;
var sallyAge;
if (sallyAge !== null) {
    haveBirthday(sallyAge);
}
//nullish coalenscing operator
//has sally's age been defined?
// if so, call the function on sally age.  if not, call function on 25
haveBirthday(sallyAge !== null && sallyAge !== void 0 ? sallyAge : 25);
//I am super confident this is not null
haveBirthday(sallyAge);
