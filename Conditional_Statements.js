//Conditional branching: if, '?'


//The “if” statement
//The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = prompt('In which year was ECMAScript-2021 specification published?', '');

if (year == 2021)
{
console.log( 'You are right!' );
console.log( "You're so smart!" );
  
}
//Boolean conversion
//The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
//A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
//Other values become true, so they are called “truthy”.

if (0) { // 0 is falsy
    //...
  }
  
  if (1) { // 1 is truthy
    //...
  }
//We can also pass a pre-evaluated boolean value to if, like this:
  let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  //...
}

//elese
//The if statement may contain an optional “else” block. It executes when the condition is falsy.

let year = prompt('In which year Plaxidia started her career?', '');

if (year == 2018) {
 console.log( 'You guessed it right!' );
} else {
  console.log( 'How can you be so wrong?' ); // any value except 2018
}