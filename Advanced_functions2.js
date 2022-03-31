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