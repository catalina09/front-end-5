var emptyObject = { }; //no propetries and no method
console.log(emptyObject);

var emptyObject2 = new Object();
console.log(emptyObject2);

var userMe = {
  name: "Catalina",
  age: 24,
  height: 158,
  weight: 55,
  "eyes color": "blue",
  //age: 22 - duplicated keys are not possible
  
sayHi: function() {
  console.log("Hello world from an object method!");
},
sayHiTo: function (name) {
  console.log("Heloo," + name + "!");
},
  
  
};
console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("Grupa 5");


console.log(userMe.name);  //dot notation
console.log(userMe["eyes color"]);
console.log(userMe["name"]);// brackets notation

var  prop = "height";
console.log("height" , userMe[prop]); //will display the height
console.log(userMe.prop);  //userMe["prop"]

prop = "age";
console.log("age" , userMe[prop]); //will display age


console.log("userMe keys" ,Object.keys(userMe));
console.log("userMe values" ,Object.values(userMe));

var keys = Object.keys(userMe);
for ( var i = 0; i < keys.length; i++) {
  var prop = keys[i];
  console.log(prop, userMe[prop]);
}


//constructor function
function User (options){
   //this is used to avoid console errors
  options= options || {};
  
  this.name = options.name || " " ; //If we're not srnding a name, the object. Will get empty string as its name

  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.caculateBMI = function () {
    return this.height / this.weight;
  }
}


var user = new User({
  name: "Catalina",
  height: 165,
  weight: 55
});

console.log("user created with constructor function", user);
console.log("user BMI", user.caculateBMI());

var colleague = new User({
  name: "Emilia",
  height: 175,
  weight: 55
});

console.log("colleague", colleague);
console.log("colleague BMI" , colleague.caculateBMI());

console.log("User prototype", User.prototype);
User.prototype.sayHi = function () {
  console.log("Hy there from " + this.name);
}


user.sayHi();
colleague.sayHi();


console.log("that is no prototype property on object", user.prototype);//=> undefined

console.log("prototype attribute", Object.getPrototypeOf(user),
                                   Object.getPrototypeOf(colleague));

console.log("constructor function is prototype of object", User.prototype.isPrototypeOf(user),
                                             User.prototype.isPrototypeOf(colleague));



console.log(user.toString());









































