//Recursion and stack
//Two ways of thinking
//For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16

//There are two ways to implement it.
//1,iterative thinking: the for loop:

function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log( pow(2, 3) ); // 8
//2.Recursive thinking: simplify the task and call self:
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8
 // When pow(x, n) is called, the execution splits into two branches:
/*

              if n==1  = x
             /
pow(x, n) =
             \
               else     = x * pow(x, n - 1)


1.If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x.
2.Otherwise, we can represent pow(x, n) as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). Next steps simplify it further and further until n reaches 1.

*/
//making Recursion is  shorter with ??
//Here we can rewrite the same using the conditional operator ? instead of if to make pow(x, n) more terse and still very readable:
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
//The execution context and stack
//The information about the process of execution of a running function is stored in its execution context.
//The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this (we don’t use it here) and few other internal details.
//When a function makes a nested call, the following happens:
//-The current function is paused.
//-The execution context associated with it is remembered in a special data structure called execution context stack.
//-The nested call executes.
//After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.


//WHAT HAPPENS DURING THE pow(2,3)
//In the beginning of the call pow(2, 3) the execution context will store variables: x = 2, n = 3, the execution flow is at line 1 of the function.
//That’s when the function starts to execute. The condition n == 1 is falsy, so the flow continues into the second branch of if:

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) );
  //To calculate x * pow(x, n - 1), we need to make a subcall of pow with new arguments pow(2, 2).


  
//The exit
//During the execution of pow(2, 1), unlike before, the condition n == 1 is truthy, so the first branch of if works:
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  //There are no more nested calls, so the function finishes, returning 2.


  