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

  let userName = 'Hove';

  function showMessage()
  {
  let message = 'Hello, ' + userName;
  console.log(message);
  }

   showMessage(); // Hello, Hove
  //The function has full access to the outer variable. It can modify it as well.
  //example

  let userName1 = 'Hove';

  function showMessage1() {
  userName = "Chiko"; // (1) changed the outer variable

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
  
  showMessage(from2, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from2 ); // Ann