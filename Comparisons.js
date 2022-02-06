//Greater/less than: a > b, a < b.
//Greater/less than or equals: a >= b, a <= b.
//Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
//Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

//Boolean is the result
//All comparison operators return a boolean value:

//true – means “yes”, “correct” or “the truth”.
//false – means “no”, “wrong” or “not the truth”.


console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

//String comparison

//In other words, strings are compared letter-by-letter.
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

//theoratical example
//The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

//G is the same as G.
//l is the same as l.
//o is greater than e. Stop here. The first string is greater.


//Comparison of different types
//When comparing values of different types, JavaScript converts the values to numbers.


console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

console.log( true == 1 ); // true
console.log( false == 0 ); // true
console.log( false == 1 ); // false

//Strict equality
//A regular equality check == has a problem. It cannot differentiate 0 from false:

console.log( 0 == false ); // true

console.log( ' ' == false ); // true
//to  differentiate 0 from false we use ===
// strict equality operator
//A strict equality operator === checks the equality without type conversion.
//In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

console.log( 0 === false );// false, because the types are different

//There is also a “strict non-equality” operator !== analogous to !=.