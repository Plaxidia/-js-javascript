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