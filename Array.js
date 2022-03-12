 //Arrays

//Objects allow you to store keyed collections of values. That’s fine.

//But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.
//Declaration
let arr = new Array();
let arr = [];
//Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
let fruits = ["Apple", "Orange", "Plum"];

//Array elements are numbered, starting with zero.
//We can get an element by its number in square brackets:

fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum


//We can replace an element:

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
// add a new element  to the array:

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

//The total count of the elements in the array is its length:

 fruits = ["Apple", "Orange", "Plum"];

console.log( fruits.length ); // 3

//We can also use console.log to show the whole array.
 fruits = ["Apple", "Orange", "Plum"];

console.log( fruits ); // Apple,Orange,Plum

//An array can store elements of any type.

//For instance:

// mix of values
let array = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( array[1].name ); // John

// get the function at index 3 and run it
array[3](); // hello

//Methods pop/push, shift/unshift
//Methods that work with the end of the array:

//POP
//Extracts the last element of the array and returns it:

fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() ); // remove "Pear" and alert it

console.log( fruits ); // Apple, Orange
//PUSH
//Append the element to the end of the array:
fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log( fruits ); // Apple, Orange, Pear
//The call fruits.push(...) is equal to fruits[fruits.length] = ....

//Methods that work with the beginning of the array:
//SHIFT
let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() ); // remove Apple and alert it

console.log( fruits ); // Orange, Pear

//ushift
//Add the element to the beginning of the array:
fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

console.log( fruits ); // Apple, Orange, Pear

//Methods push and unshift can add multiple elements at once:
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );

//Internals

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now


//LOOPS 
//One of the oldest ways to cycle array items is the for loop over indexes:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
//But for arrays there is another form of loop, for..of:

fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log( fruit );
}

//The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
//Technically, because arrays are objects, it is also possible to use for..in:

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  console.log( arr[key] ); // Apple, Orange, Pear
}
//A word about “length”
//The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

//example

let fruits = [];
fruits[123] = "Apple";

console.log( fruits.length ); // 124
//but we don't usually use the array this way
//If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible,
// here’s the example:

 arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return


//So, the simplest way to clear the array is: arr.length = 0;.

//new Array()
let arr = new Array("Apple", "Pear", "etc");
//If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

let arr = new Array(2); // will it create an array of [2] ?

console.log( arr[0] ); // undefined! no elements.

console.log( arr.length ); // length 2

//To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

//Multidimensional arrays

//Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][1] ); // 5, the central element


  //toString
  //Arrays have their own implementation of toString method that returns a comma-separated list of elements.

  let arr = [1, 2, 3];

   console.log(arr ); // 1,2,3
   console.log( String(arr) === '1,2,3' ); // true

   //another example
   console.log( [] + 1 ); // "1"
   console.log( [1] + 1 ); // "11"
   console.log( [1,2] + 1 ); // "1,21"
   //Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

   //When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:
   console.log( "" + 1 ); // "1"
   console.log( "1" + 1 ); // "11"
   console.log( "1,2" + 1 ); // "1,21"

   //Don’t compare arrays with ==

   //Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.
   console.log( [] == [] ); // false
   console.log( [0] == [0] ); // false
 

