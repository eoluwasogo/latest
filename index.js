// VARIABLE
var b = 15;
var pi ;
var a;
console.log(a,b,pi)

//Assign values to all three variables.
 a = "Change is constant";
// const d = b
 pi = 22.7

//Print all three values to the console.
console.log(a,b,pi)

//Update the value of the variable that can change.
pi+= 6;
console.log(a,b,pi)

//Try (intentionally or not) to change the value of the variable that cannot change. Observe what happens.
//d+= 6;
//console.log(a,b,pi)

//Add a new variable using the modern standard (let) and another using the old way (var). Assign numbers to both.
let e = 16;
var f = 22;

//Perform a simple arithmetic operation using at least two variables and store the result in a new variable. Print the result.
var result = e + f;
console.log(result)

//Explain in comments why you would choose let vs var vs const for each variable.
//because java script is a dynamic language 

//OBJECT


let name = "Sogo"
let age = 30

let person = { name: "Sogo", age: 30}

person.name = "Abbey"

console.log(person.name, person.age)

//ARRAY

let coloured = ["yellow", "green", "black", 33, 23]
coloured[5] = true
console.log(coloured);



function great (name, LAST) {

    console.log("Hello world" + " " + name + " " + LAST)
}

great("Abbey", "Elegbede");


function square(whole, power)
{
    return whole ** power;

}
console.log(square(5,3));
