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

//For loop
//The for loop is more complex, but it’s also the most commonly used loop.

for (begin; condition; step) {
    // ... loop body ...
  }
		
//begin	let i = 0	Executes once upon entering the loop.
//condition	i < 3	Checked before every loop iteration. If false, the loop stops.
//body	console.log(i)	Runs again and again while the condition is truthy.
//step	i++	Executes after the body on each iteration.


  for ( i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
  }

  //Breaking the loop
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );
//The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop.


//Continue to the next iteration
//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

//The loop below uses continue to output only odd values:

for ( i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, then 3, 5, 7, 9
  }

  //Labels for break/continue

  //A label is an identifier with a colon before a loop:
  labelName: for ( i = 0; i < 3; i++) 
  {
  //...
  }

  //The break <labelName> statement in the loop below breaks out to the label:

  outer: for ( i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
    console.log('Done!');

   // In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

   // So the control goes straight from (*) to alert('Done!').

   //We can also move the label onto a separate line:
   
   outer:
for ( i = 0; i < 3; i++) { 
    //... 
}


//Labels do not allow to “jump” anywhere
//For example, it is impossible to do this:
break label; // jump to the label below (doesn't work)

label: for (  i = 0; i < 3; i++);
//A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
    // ...
    break label; // works
    // ...
  }