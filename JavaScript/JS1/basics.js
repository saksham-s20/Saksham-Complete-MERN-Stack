console.log("hello my name is saksham srivastava!")

// sabse main cheez there are three ways we can declare variables in java
// let, const, var


let name = "saksham"
var designation = "Software Engineer"
const id = 2001

//id = 2002 -> not possible
console.log(id);
console.log(designation);
console.log(name);

designation = "full stack developer"
name = "saksham srivastava"


console.log(name);
console.log(designation)

let a = 15
let b = 20
let sum = a + b

//console.log(sum)
console.log("the sum is: ",sum);

let pencilprice = 10
let eraserprice = 5

//let output = "the total price of the stationary is " + (pencilprice+eraserprice) + " Rupees."
let output = (`the total price is: ${pencilprice+eraserprice} Rupees only`)     //here we use backticks which are present under the esc
console.log(output)

console.log(2*4)            //this shows multiplication
console.log(2**4)           //this shows power

let age = 23
if(age>18){
    console.log("you can vote")
    console.log("you can drive")
    let a = 5
    console.log(a**2)
}
console.log("printing this after the if statement")

let firstname = "saksham"
if(firstname == "saksham"){
    console.log(`your name is ${firstname}`)
}

let color = "Green"
if(color === "Red"){
    console.log("Stop!")
} else if(color === "Yellow"){
    console.log("Be ready!")
} else if(color === "Green"){
    console.log("Go!!")
}

let the = 123

if(the > 12){
    console.log("hello u are greater")
}
if(the == 123){
    console.log("123 is equal for [==] not in string")
}
if(the == "123"){
    console.log("123 is equal for [==] in string")
}
if(the === 123){
    console.log("123 is equal for [===] not in string")
}
if(the === "123"){
    console.log("123 is equal for [===] in string")
}

//alert("hello and welcome to my website")
//prompt("enter your name!")

// let fname = prompt("enter your first name!")
// let sname = prompt("enter your second name!")

// console.log(fname);
// console.log(sname);

// console.log(fname + " " + sname);

// let str = fname + " " + sname;
// alert(str);

// let num = prompt("enter a number!")
// if(num%2 == 0){
//     alert("Good!")
// } else {
//     alert("Bad!")
// }

// let yname = prompt("enter your name!")
// let yage = prompt("enter your age!")

// console.log(`${yname} is ${yage} years old.`)
// alert(`${yname} is ${yage} years old.`)

let c = 2;
switch(c){
    case 1: console.log("janfebmarch");
    break;
    case 2: console.log("aprmayjune");
    break;
    case 3: console.log("julyaugsept");
    break;
    case 4: console.log("octnovdec");
    break;
    default: console.log("this is not a month!");
}

let str = "apples"
if((str[0] === "a" || str[0] === "A") && str.length > 5){
    console.log("golden string!")
} else {
    console.log("not a golden string!")
}

// let num1 = prompt("enter the first number!")
// let num2 = prompt("enter the second number!")
// let num3 = prompt("enter the third number")

// if(num1 > num2){
//     if(num1 > num3){
//         alert("first number is greatest!")
//     } else {
//         alert("third number is greatest!")
//     }
// } else if (num2 > num3){
//     alert("second number is greatest!")
// } else {
//     alert("third number is greatest!")
// }

let num1 = 32
let num2 = 245532

if(num1%10 == num2%10){
    console.log("hey its a match!")
} else {
    console.log("not a match!")
}


//STRINGS

let str1 = ("     hello                    my name is saksham srivastava             ")
let str2 = str1.trim();
console.log(str2);      // the output will be "hello                    my name is saksham srivastava"
// when we use string trim() function then we can only remove the spaces before or after the first and the last word respectively
// any number of spaces in between the words will not be removed

// let pswrd = prompt("enter your password!")
// console.log(pswrd.trim());

let nm = "saksham srivastava"
let ind1 = nm.indexOf("k");
let ind2 = nm.indexOf("s");

console.log(ind1, ind2)

// Method Chaining-> using two or more functions in a single statement

let stringa = "                   hello!!                   "
let stringb = stringa.trim();
console.log(stringb);
let stringc = stringb.toUpperCase();
console.log(stringc);


let stringd = "my name is saksham!"
stringd = stringd.toUpperCase();
console.log(stringd);

let stringe = "hello my name is saksham srivastava!!                                        "
let stringf = stringe.trim().toUpperCase();
console.log(stringf);

//we can declare variables using two ways 
//one is let and other one is var