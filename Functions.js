// functions 
//function keyword goes first then goes the name of the function
function greet ()
{
    console.log(" Hello ,It's Plaxidia");//body
}//function defination

greet(); //function calling,it executes the code of the fuction

//local variables
//a variable declared inside a function is only visible inside that function

//example
    function showMessage() {
    let message = "Hello, I'm Plaxidia!"; // local variable
  
  console.log( message );
  }
  
  showMessage(); // Hello, I'm Plaxidia!
  
  console.log( message ); // <-- Error! The variable is local to the function

//outer variables
//function can access an outer as well 

  function showMessage()
  {
    let userName = 'Hove';
  let Message2 = 'Hello' + userName;
  console.log(Message2);
  }

   showMessage(); // Hello, Hove
  //The function has full access to the outer variable. It can modify it as well.
  //example

  let userName1 = 'Hove';

  function showMessage1() {
  userName1 = "Chiko"; // (1) changed the outer variable

  let showMessage1 = 'Hello, ' + userName1;
  console.log(showMessage1);
}

console.log( userName1 ); // Hove ,before the function call

showMessage1();

console.log( userName1 ); // chiko, the value was modified by the function

//The outer variable is only used if there’s no local one.

let userName2 = 'John';

function showMessage2() {
  let userName = "Bob"; // declare a local variable

  let message2 = 'Hello, ' + userName2; // Bob
 console.log(message2);
}

// the function will create and use its own userName
showMessage2();

console.log( userName2 ); // John, unchanged, the function did not access the outer variable

//Parameters
//We can pass arbitrary data to functions using parameters.
// below, the function has two parameters: from and text.

function showMessage4(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
  }
  
  showMessage4('Plaxidia', 'Hello!'); // Plaxidia: Hello! (*)
  showMessage4('Plaxidia', "What's up?"); // Plaxidia: What's up? (**)
  //Another example
  function showMessage5(from1, text2) {

    from1 = '*' + from1 + '*'; // make "from1" look nicer
  
    console.log( from1 + ': ' + text2 );
  }
  
  let from2 = "Ann";
  
  showMessage5(from2, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from2 ); // Ann

  //default values 

  //If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
  //the aforementioned function showMessage(from, text) can be called with a single argument:

  showMessage("Ann");// the value for text isn’t passed, it becomes undefined.

  function showMessage6(from, text = "no text given") {
    console.log( from + ": " + text );
  }
  
  showMessage6("Ann"); // Ann: no text given


  //anotherFunction() isn’t called at all, if the text parameter is provided.
  function showMessage7(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }

  //alternative default parameters
//Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.
//We can check if the parameter is passed during the function execution, by comparing it with undefined:

function showMessage8(text3) {
  // ...

  if (text3 === undefined) { // if the parameter is missing
    text3 = 'empty message';
  }

  console.log(text3);
}

showMessage(); // empty message

//…Or we could use the || operator:
function showMessage8(text3) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text3 = text3 || 'empty';
  //...
}
//Returning a value
//A function can return a value back into the calling code as the result.

//The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3
//The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

//It is possible to use return without a value. That causes the function to exit immediately.

//For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  console.log( "Showing you the movie" ); // (*)
  // ...
}
//In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the print out the output

//A function with an empty return or without it returns undefined
//If a function does not return a value, it is the same as if it returns undefined:

function doNothing() { /* empty */ }

console.log( doNothing() === undefined ); // true

//An empty return is also the same as return undefined:
function doNothing() {
  return;
}

console.log( doNothing() === undefined ); // true

//Never add a newline between return and the value
//For a long expression in return, it might be tempting to put it on a separate line, like this:

return
 (some + long + expression + or + whatever * f(a) + f(b))

//That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))
//So, it effectively becomes an empty return.

//If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
  //And it will work just as we expect it to.

  //Naming a fuctions
  //Functions are actions. So their name is usually a verb.
  //For instance, functions that start with "show" usually show something.

  //Examples of such names:

showMessage()     // shows a message
getAge()          // returns the age (gets it somehow)
calcSum()         // calculates a sum and returns the result
createForm()      // creates a form (and usually returns it)
checkPermission() // checks a permission, returns true/false


//Functions == Comments
//Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

//The first variant uses a label:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log( i ); // a prime
  }
}
//The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}