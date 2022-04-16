//Rest parameters and spread syntax
/*
Many JavaScript built-in functions support an arbitrary number of arguments.

For instance:

Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
…and so on.
In this chapter we’ll learn how to do the same. And also, how to pass arrays to such functions as parameters.

*/
//Rest parameters ...
//A function can be called with any number of arguments, no matter how it is defined.
function sum(a, b) {
    return a + b;
  }
  
  console.log( sum(1, 2, 3, 4, 5) );
  //There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.
  //The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.
  //For instance, to gather all arguments into array args:

  function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
 
 console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6

   //We can choose to get the first parameters as variables, and gather only the rest.

//Here the first two arguments go into variables and the rest go into titles array:
function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");

  //The ...rest must always be last.
  //The “arguments” variable

  //There is also a special array-like object named arguments that contains all arguments by their index.
  //For instance:

  function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) alert(arg);
  }
  
  // shows: 2, Julius, Caesar
  showName("Julius", "Caesar");
  
  // shows: 1, Ilya, undefined (no second argument)
  showName("Ilya");
  //Arrow functions do not have "arguments"

  //If we access the arguments object from an arrow function, it takes them from the outer “normal” function
  
  function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1

//Spread syntax
/*
We’ve just seen how to get an array from the list of parameters.

But sometimes we need to do exactly the reverse.

For instance, there’s a built-in function Math.max that returns the greatest number from a list:
*/
console.log( Math.max(3, 5, 1) ); // 5

/*
 let’s say we have an array [3, 5, 1]. so how do  we call Math.max with it?

Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
*/
let arr = [3, 5, 1];

console.log( Math.max(arr) ); // NaN

//Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.
//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
//For Math.max:

let arry = [3, 5, 1];

console.log( Math.max(...arry) ); // 5 (spread turns array into a list of arguments)

//We also can pass multiple iterables this way:

//Variable scope, closure
//JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called from a totally different place of code later.

//Code blocks
//If a variable is declared inside a code block {...}, it’s only visible inside that block.

//For example:
{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  console.log(message); // Hello
}

console.log(message); // Error: message is not defined
//We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

{
  // show message
  let message = "Hello";
  console.log(message);
}

{
  // show another message
  let message = "Goodbye";
  console.log(message);

}
//Please note, without separate blocks there would be an error, if we use let with the existing variable name:
// show message
let message1 = "Hello";
console.log(message);

// show another message
let message1 = "Goodbye"; // Error: variable already declared
console.log(message);

//For if, for, while and so on, variables declared in {...} are also only visible inside:

if (true) {
  let phrase = "Hello!";

  console.log(phrase); // Hello!
}

console.log(phrase); // Error, no such variable!
//The similar thing holds true for for and while loops:

for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}

console.log(i); // Error, no such variable
//Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.

//Nested functions
//A function is called “nested” when it is created inside another function.
//We can use it to organize our code, like this:

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}
//Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name. Nested functions are quite common in JavaScript.

//What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.
//Below, makeCounter creates the “counter” function that returns the next number on each invocation:
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
