// The Number Data Type
let n = 123;
n = 12.345;

//-----
let n1=1 / 0;// Infinity
console.log(n1); 
console.log (typeof n1);



//----NaN


console.log( "not a number" / 2 ); // NaN, such division is erroneous
console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); //NaN

//-----

//Bigint
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//-----String datatype 

let user ="hello";//String 

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3

//----Boolean (logical type)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")

//The Undefined Data Type
let  a;
let  b = "Hello World!"
 
console.log(a) // Output: undefined
console.log(b) // Output: Hello World!


//-----The “null” value

let age = null;
//It’s just a special value which represents “nothing”, “empty” or “value unknown”.
//null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

//----The typeof operator

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)