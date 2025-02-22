// <<<<<<<<<<<<<<< Two types of data types >>>>>>>>>>>>>>>

//  Premetive Data Types : string, numbers, boolean , null , undefiend , Bigint, Symbol
//  the changes dont occur in the actual reference but in the copy of reference.

const score =  100;
const isLoggedIn = true;
const name = 'unza';
let userEmail;
const temp = null;
const userId = Symbol('123');
const userId2 = Symbol('123');
const bigNumb = 274648396829938889373873932n;

// References (non-premetive data types) Arrays, Objects and Functions

const cars = ['audi','bugatti', 'corolla'];
const myObject = {
    name: "unza",
    age : 24,
}

const myfunc = ()=>{
    console.log("Hello world");
}

//Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object


// Note: JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it.
//  You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly,
// and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, 
// and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int