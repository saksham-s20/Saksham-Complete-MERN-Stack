//we can declare variables using two ways 
//one is let and other one is var

const id = 2002
let name = "saksham"
var email = "saksham@saksham.com"
city = "raebareli"

//console.log([id, name, email, city])
console.table([id, name, email, city])

//id = 2001                 //not possible
name = "saksham srivastava"
email = "sakshamsrivastava@saksham.com"
city = "noida"

console.table([id, name, email, city])

//we use console.table when we need to print the values in the form of key-value pairs
//we usually use let instead of var because of issue in block scope and functional scope
// in block scope it means that when a variable name is used in a file and another person uses the same name in another file and changes the value the value gets changed in the original place as well and that's why we avoid using the var and we use the let
//we can declare a variable without using let const and var but it is a bad practice and we should avoid it

// if we say that we are declaring a variable without assigning any value to it and then checking what it will print

let state;
console.table([state]);

//at this point it will print undefined as there is no value is assigned to it