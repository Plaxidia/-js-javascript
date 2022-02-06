//Logical operators
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).


//|| (OR)
let a =2;
let b=5;
let result = a || b;

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false


//For instance, the number 1 is treated as true, the number 0 as false:
if (1 || 0)
 { // works just like if( true || false )
    console.log( 'truthy!' );
  }

  //example 
  let hour = 9;

   if (hour < 10 || hour > 18)
    {
        console.log( 'The office is closed.' );
    }


//We can pass more conditions:
 hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) 
{
    console.log( 'The office is closed.' ); // it is the weekend
}

//OR "||" finds the first truthy value

let  value1=0;
let value2=10;
let  value3= -1;
result = value1 || value2 || value3;

//Evaluates operands from left to right.
//For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were false), returns the last operand.

console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)



//Getting the first truthy value from a list of variables or expressions.
//For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

//Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//2 Short-circuit evaluation.

//"Short-circuit" It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

true || console.log("not printed");
false || console.log("printed");

//&& (AND)

result = a && b;
//In classical programming, AND returns true if both operands are truthy and false otherwise:

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

//example with if 

 hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) 
{
  console.log( 'The time is 12:30' );
}

//Just as with OR, any value is allowed as an operand of AND:
if (1 && 0) 
  { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
  }

  //AND “&&” finds the first falsy value

  result = value1 && value2 && value3;

//The AND && operator does the following:

//Evaluates operands from left to right just like ||.
//For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were truthy), returns the last operand.

//Example 

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

//We can also pass several values in a row. See how the first falsy one is returned:
console.log( 1 && 2 && null && 3 ); // null

//When all values are truthy, the last value is returned:
console.log( 1 && 2 && 3 ); // 3, the last one



//Precedence of AND && is higher than OR ||
//The precedence of AND && operator is higher than OR ||.

//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).


//!NOT
result = !value1;
//The boolean NOT operator is represented with an exclamation sign !.
//Converts the operand to boolean type: true/false.
//Returns the inverse value.

//example
console.log( !true ); // false
console.log( !0 ); // true

//A double NOT !! is sometimes used for converting a value to boolean type:
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false



//Arithmetic Operatores


//adding numbers
//++num Pre increment
//num++ post increment 

let num =4;
num =+2;//num =num +2
console.log (num);//6

//remainder operator %

let num1 =5;
let num2 =2;
result  = num1 % num2;
console.log (result);//remainder 1

//boolean
//for instance false =0 and true = 1;

let num3 =true;
let num4 =true ;


let result2  = num3 + num4;
console.log (result2);//2



//++num Pre increment
//num++ post increment 
 num =4;
let  X =num++;//post increament : therefore the at first num will be assigned to X and then the increament will happen
console.log (X,num);//4,5

 X =++num;// pre increament :the value of nu mwill be increased first and then assign the value to X
console.log (X,num);//5,5

//multiplying 
num =4;
result2= num1*num2*num3;//num1=2,num2=5,num3=true which is 1(from the code above)
console.log(result2);//10

result2 =Math.pow(4,2);//4 to the power 2
console.log(result2);
