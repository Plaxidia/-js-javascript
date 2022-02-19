let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

//Literals and properties
//We can immediately put some properties into {...} as “key: value” pairs:

user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  // get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

//The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

//To remove a property, we can use delete operator:
delete user.age;

//We can also use multiword property names, but then they must be quoted:

 user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

 //last property in the list may end with a comma:

 user = {
    name: "John",
    age: 30,
  }

  //That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

  //Square brackets

  //for multiword properties, the dot access doesn’t work:

  // this would give a syntax error

  // example below

 //>> user.likes birds = true

  // “square bracket notation”

  user = {};

  // set
  user["likes birds"] = true;
  
  // get
 console.log(user["likes birds"]); // true
  
  // delete
  delete user["likes birds"];

  //Please note that the string inside the brackets is properly quoted (any type of quotes will do).
  //Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

   let key = "likes birds";

  // same as user["likes birds"] = true;
   user[key] = true;

   //example
    user = {
    name: "John",
    age: 30
  };
  
  key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  console.log( user[key] ); // John (if enter "name")

  //The dot notation cannot be used in a similar way:


    user = {
    name: "John",
    age: 30
  };
  
  key = "name";
   console.log( user.key ) // undefined
  
//Computed properties

//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); // 5 if fruit="apple"
//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.


//So, if a visitor enters "apple", bag will become {apple: 5}.
//Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

//Property value shorthand

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user.name); // John

  
  //Instead of name:name we can just write name, like this:


  function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }

  //We can use both normal properties and shorthands in the same object:

   user = {
    name ,  // same as name:name
    age: 30
  };

  //Property names limitations

  //a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.
  //But for an object property, there’s no such restriction:

  // these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj.for + obj.let + obj.return );  // 6

//In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
//Other types are automatically converted to strings.
//For instance, a number 0 becomes a string "0" when used as a property key:

 obj = {
  0: "test" // same as "0": "test"
};

// both alerts(console.log) access the same property (the number 0 is converted to string "0")
console.log( obj["0"] ); // test
console.log( obj[0] ); // test (same property)

//There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

//Property existence test, “in” operator

//Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
 user = {};

console.log( user.noSuchProperty === undefined ); // true means "no such property"

//There’s also a special operator "in" for that.

//The syntax is:

"key" in object

//For instance:

 user = { name: "John", age: 30 };

console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist

//Please note that on the left side of in there must be a property name. That’s usually a quoted string.
//If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:


 user = { age: 30 };

 key = "age";
console.log( key in user ); // true, property "age" exists

let obj = {
  test: undefined
};

console.log( obj.test ); // it's undefined, so - no such property?

console.log( "test" in obj ); // true, the property does exist!

//In the code above, the property obj.test technically exists. So the in operator works right.

//Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.


//The “for…in” loop
//To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) 

//The syntax:
for (key in object) {
  // executes the body for each key among object properties
}

//For instance, let’s output all properties of user:

 user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 30, true
}

// all “for” constructs allow us to declare the looping variable inside the loop, like let key here
//Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

