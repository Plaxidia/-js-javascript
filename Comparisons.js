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