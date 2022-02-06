//Logical operators
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).


//|| (OR)
result = a || b;

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
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) 
{
    console.log( 'The office is closed.' ); // it is the weekend
}