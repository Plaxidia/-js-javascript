//while loop
while (condition) {
    // code
    // so-called "loop body"
  }

  //For instance, the loop below outputs i while i < 3:

  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
   console.log( i );
    i++;
  } 

  //A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.


  //For instance, a shorter way to write while (i != 0) is while (i):
 i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}

//Curly braces are not required for a single-line body

i = 3;
while (i) alert(i--);

//The “do…while” loop

//The condition check can be moved below the loop body using the do..while syntax:

do {
    // loop body
  } while (condition);

  //The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

  //Example

i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);