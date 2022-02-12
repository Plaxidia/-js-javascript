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

