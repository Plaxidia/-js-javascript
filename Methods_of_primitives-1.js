//Let’s look at the key distinctions between primitives and objects.
//A primitive

//Is a value of a primitive type.
//There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

//An object
//Is capable of storing multiple values as properties.
//Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
//One of the best things about objects is that we can store a function as one of its properties.

let john = {
    name: "John",
    sayHi: function() {
      console.log("Hi buddy!");
    }
  };
  
  john.sayHi(); // Hi buddy!

  //A primitive as an object
  //Primitives must be as fast and lightweight as possible.
  //There are many things one would want to do with a primitive like a string or a number. It would be great to access them using methods.
//For instance, there exists a string method str.toUpperCase() that returns a capitalized str.
//example
let str = "Hello";

console.log( str.toUpperCase() ); // HELLO

//A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:
let n = 1.23456;

console.log( n.toFixed(2) ); // 1.23

//In JavaScript, that’s also possible for historical reasons, but highly unrecommended. Things will go crazy in several places.
console.log( typeof 0 ); // "number"

console.log( typeof new Number(0) ); // "object"!
//Objects are always truthy in if, so here the alert will show up:

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  console.log( "zero is truthy!?!" );
}

//On the other hand, using the same functions String/Number/Boolean without new is a totally sane and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).


let num = Number("123"); // convert a string to number

//null/undefined have no methods
console.log(null.test); // error