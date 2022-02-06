//String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

//Numeric Conversion
console.log( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
console.log(str,typeof str); //123, string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number



//Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

//If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed


//Boolean Conversion

//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
//Other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false


//example

let x;
console.log(x,typeof x);//undefined ,undefined
x=8;
console.log(x,typeof x);//,number
x=x+" ";//coercion >> (we are adding two different data types )but not always when you add two diffrent data types will you get the same result ,an exammple  below after 9 lines
console.log(x,typeof x);// 8,string 
/*
x=x+2;//x is a string,we are adding 2 to a string ,because we converted x into a string in the lines above ;
console.log(x,typeof x);//82 string

covertind to a number
x=+x+2;
console.log(x,typeof x);//10, number
*/
x=x-2;//subtracting a number from a string ,X ia now a string 
console.log(x,typeof x);//6,number (is now converted into a number)

//! means not
x= !x;
console.log(x,typeof x);// false ,boolean

console.log(Boolean (7));//true
console.log(Boolean (0));//false>>(in the case any number will be true execpt zero ,undefined ,,because of  the truty and falsy values)


//another example 
x = Number("123 Ameno");
console.log(x);//NaN