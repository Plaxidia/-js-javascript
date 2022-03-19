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