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

   key = "likes birds";

  // same as user["likes birds"] = true;
   user[key] = true;

   //example
    user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
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
  