"use strict";       //treat all the JS code as the newer version
// although it is not necessary nowadays that we actually use this 
// but it is a good practice to do so
// it means we will be including classes, modules and other things 

// javascript's main engine is always hidden in the browser and that's why we are able to write the code in the console and get output

//alert ( 3 + 3 ) we cannot use this because here we are using node js and the main engine of the javascript remains in the browser

//code readability should be maintained high

// the two main documentations are:
// "mdn web docs"
// "tc39.es"   -> ecmascript

let name = "saksham"            //string data type
let age = 22                    //number data type
// usually has a range of 2^53 numbers
// and for very large numbers we use "bigInt" in javascript
let isLoggedInUser = false          // boolean data type

//there is another type of datatype which we can call as NULL
// it is completely different from undefined which means there is no value assigned to that particular variable
// also NULL is a standalone value which represents something which is empty but not undefined
// we can initialise any value with NULL as well

let a = null
//this is how we can initialise
let b

console.table({a, b})

// another data type is "symbol" which is used to uniquely identify the elements and is mostly used in frameworks like ReactJS and many more
// also there is another data type which is known as "object"

console.log(typeof "saksham")
console.log(typeof 22)
console.log(typeof null)        //object
console.log(typeof undefined)   //undefined

console.log(typeof name)
console.log(typeof age)
console.log(typeof a)
console.log(typeof b)

// conversion and operations

let score = 33;
// first of all, we need to know what is the type of the variable because every time  we use the variable we don't know where the value is coming from
// it may be coming from a form, it may be in the form of a string, a number, an object or a boolean value
// so whenever we are working on a backend we need to know the type of the variable

//const {iscore} = req.body
// here we are getting the score from the request body of the frontend
// here we don't know what type of the score is, it may be a string or a number
// in line number 3 we are using the score variable as a number and we know that it is a number
// but in line number 8 we don't know what type of the score is so we need to check the type of the score variable

console.log(typeof score);          // we can write it simply without using the parentheses which allows mw understand the type of the variable without using method
console.log(typeof (score));        //here we are using the parentheses to check the type of the variable which indicates that it is a method

let iscore = "33"; // this is a string
console.log(typeof iscore);         // this will return 'string' 
console.log(typeof (iscore));       // this will also return 'string'



//once we know that we are getting input in string format and we need to perform the opeations on numbers only then we need to convert the string to number
// we can use the Number() method to convert the string to number

let valueInNumber = Number(iscore); // this will convert the string to number
console.log(valueInNumber);          // this will return 33 as a number  
console.log(typeof valueInNumber);  // this will return 'number'
console.log(typeof (valueInNumber));
// now we can perform the operations on the number

let avar = "33abc" // this is a string with some characters
let valueInNumber2 = Number(avar); // this will return NaN (Not a Number) because the string cannot be converted to a number
console.log(valueInNumber2);         // this will return NaN   
console.log(typeof valueInNumber2); // this will return 'number' because NaN is a number type in JavaScript
console.log(typeof (valueInNumber2)); // this will also return 'number'
//NaN is a special value in JavaScript which indicates that the value is not a number
// we can check if the value is NaN or not using the isNaN() method

//if i am coverting any string to a number and don't check what's present in the value of that string
//it may cause us a lot because when we will perform the operations on that value it will return NaN
console.log(isNaN(valueInNumber2)); // this will return true because valueInNumber2 is NaN

let something = null; // this is a null value
console.log(typeof something); // this will return 'object' because null is considered as an object in JavaScript  
console.log(typeof (something)); // this will also return 'object'
console.log(something); // this will return null

let valueInNumber3 = Number(something); // this will convert null to 0
console.log(valueInNumber3); // this will return 0 
console.log(typeof valueInNumber3); // this will return 'number'
console.log(typeof (valueInNumber3)); // this will also return 'number'

//here we need to understand that null is a special value in JavaScript which indicates that the value is not present
// but when we convert it to a number it will return 0
// so we need to be careful while converting null to a number because it may cause us a lot of issues in our calculations
// we can check if the value is null or not using the === operator


let ekthavariable = undefined
let valueInNumber4 = Number(ekthavariable); // this will convert undefined to NaN
console.log(valueInNumber4); // this will return NaN
console.log(typeof valueInNumber4); // this will return 'number'
console.log(typeof (valueInNumber4)); // this will also return 'number'
// here we need to understand that undefined is a special value in JavaScript which indicates that the value is not defined
// but when we convert it to a number it will return NaN    
// so we need to be careful while converting undefined to a number because it may cause us a lot
// of issues in our calculations
// we can check if the value is undefined or not using the typeof operator


//whenever we try to convert a string to a number and it is not a pure number then it wil contain the NaN value
//whenever we try to convert a null value to a number it will return 0
//whenever we try to convert an undefined value to a number it will return NaN
//whenever we try to convert a boolean value to a number it will return 1 for true and 0 for false
//although the typeof all these will remain a number but they will contain different values

//also whenever we convert a pure number in the form of a string to a number it gets easily converted to a number
//but if the string contains any other characters then it will return NaN

/*
    "33" -> 33
    "33abc" -> NaN
    null -> 0
    undefined -> NaN
    true -> 1
    false -> 0
*/ 

let isLoggedIn = 1; // this is a boolean value
let valueInNumber5 = Boolean(isLoggedIn); // this will convert the boolean value to a number
console.log(valueInNumber5); // this will return true because 1 is considered as true
console.log(typeof valueInNumber5); // this will return 'boolean'
console.log(typeof (valueInNumber5)); // this will also return 'boolean'

let isLoggedIn2 = 0; // this is a boolean value
let valueInNumber6 = Boolean(isLoggedIn2); // this will convert the boolean value     
console.log(valueInNumber6); // this will return false because 0 is considered as false
console.log(typeof valueInNumber6); // this will return 'boolean'
console.log(typeof (valueInNumber6)); // this will also return 'boolean'


// we can also use the Boolean() method to convert a number to a boolean value
let valueInNum = 33; // this is a number
let valueInBoolean = Boolean(valueInNum); // this will convert the number to a boolean
console.log(valueInBoolean); // this will return true because any non-zero number is considered as true
console.log(typeof valueInBoolean); // this will return 'boolean'
console.log(typeof (valueInBoolean)); // this will also return 'boolean'

let valInStr = ""
let valueInBoolean2 = Boolean(valInStr); // this will convert the string to a boolean
console.log(valueInBoolean2); // this will return false because an empty string is considered as false
console.log(typeof valueInBoolean2); // this will return 'boolean'  
console.log(typeof (valueInBoolean2)); // this will also return 'boolean'

let valInStr2 = "Hello"
let valueInBoolean3 = Boolean(valInStr2); // this will convert the string to a boolean
console.log(valueInBoolean3); // this will return true because a non-empty string is considered as true
console.log(typeof valueInBoolean3); // this will return 'boolean'
console.log(typeof (valueInBoolean3)); // this will also return 'boolean'

// 1 -> true
// 0 -> false   
// "Hello" -> true
// "" -> false
// null -> false
// undefined -> false
// NaN -> false

let someNumber = 10
let valinstr3 = String(someNumber); // this will convert the number to a string
console.log(valinstr3); // this will return "10" as a string
console.log(typeof valinstr3); // this will return 'string'
console.log(typeof (valinstr3)); // this will also return 'string'


let someBoolean = true
let valinstr4 = String(someBoolean); // this will convert the boolean to a string
console.log(valinstr4); // this will return "true" as a string
console.log(typeof valinstr4); // this will return 'string'
console.log(typeof (valinstr4)); // this will also return 'string'

let someNull = null
let valinstr5 = String(someNull); // this will convert the null to a string
console.log(valinstr5); // this will return "null" as a string
console.log(typeof valinstr5); // this will return 'string'
console.log(typeof (valinstr5)); // this will also return 'string'

let someUndefined = undefined
let valinstr6 = String(someUndefined); // this will convert the undefined to a string
console.log(valinstr6); // this will return "undefined" as a string
console.log(typeof valinstr6); // this will return 'string'
console.log(typeof (valinstr6)); // this will also return 'string'

let someNaN = NaN
let valinstr7 = String(someNaN); // this will convert the NaN to
console.log(valinstr7); // this will return "NaN" as a string
console.log(typeof valinstr7); // this will return 'string'
console.log(typeof (valinstr7)); // this will also return 'string'

//in string mainly we get the values that are present in the values of the variables


//we need to do conversion because browsers mainly return the values in string format so we need to convert those strings to our desired format
//and we can use the Number(), Boolean() and String() methods to convert the values to our desired format  
// so that we can use these numbers to perform our calculations/operations

//also we can use the parseInt() and parseFloat() methods to convert the strings to numbers
// parseInt() is used to convert a string to an integer
// parseFloat() is used to convert a string to a floating point number