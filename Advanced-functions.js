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


  //Recursive traversals
  //Another great application of the recursion is a recursive traversal.
  //Imagine, we have a company. The staff structure can be presented as an object:

  let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  //In other words, a company has departments.
  //-A department may have an array of staff. For instance, sales department has 2 employees: John and Alice.
  //-Or a department may split into subdepartments, like development has two branches: sites and internals. Each of them has their own staff.
  //-It is also possible that when a subdepartment grows, it divides into subsubdepartments (or teams).
  //-For instance, the sites department in the future may be split into teams for siteA and siteB. And they, potentially, can split even more. That’s not on the picture, just something to have in mind
  //Let’s try recursion.

  let ccompany = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 770054321
  //Recursive structures
  /*
  A recursive (recursively-defined) data structure is a structure that replicates itself in parts.

We’ve just seen it in the example of a company structure above.

A company department is:

Either an array of people.
Or an object with departments.
For web-developers there are much better-known examples: HTML and XML documents.

In the HTML document, an HTML-tag may contain a list of:

Text pieces.
HTML-comments.
Other HTML-tags (that in turn may contain text pieces/comments or other tags etc).
That’s once again a recursive definition.

For better understanding, we’ll cover one more recursive structure named “Linked list” that might be a better alternative for arrays in some cases.
*/


//Linked list
//Imagine, we want to store an ordered list of objects.

//The natural choice would be an array:
let arr = [obj1, obj2, obj3];

//The linked list element is recursively defined as an object with:

//-value.
//-next property referencing the next linked list element or null if that’s the end.
//example 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//An alternative code for creation:
list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
//The list can be easily split into multiple parts and later joined back:

let secondList = list.next.next;
list.next.next = null;
//to join 
list.next.next = secondList;

//And surely we can insert or remove items in any place.

//For instance, to prepend a new value, we need to update the head of the list:
list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };
//To remove a value from the middle, change next of the previous one:
list.next = list.next.next;
//We made list.next jump over 1 to value 2. The value 1 is now excluded from the chain. If it’s not stored anywhere else, it will be automatically removed from the memory.