//test function is hoisted so we can call it before it's defined in the code

test();
//global scope str 
//is not declared, not defined 
//it will throw a reference error
//console.log("str in global scope" , str);//reference error


function test () {
  //var str;
  //althrough str is not declared or defined yet, it is hoisted from the first line in for
  //console.log("str in trst function", str);//undefined
  
  for (var i = 1; i < 10; i++ ) {
    var str = "Something " +i;
    console.log(str);
  }
}


// myfunction();
// var myfunction = function () {
//   console.log("my function");
// };

// //under the hood
// //only the declaration is moved at the top of the scope not the assignement

// var myfunction; //undefined
// myfunction();
// myfunction = function() {
//   console.log("myfunction");;
// }

const mynumber = 2;
//mynumber = 7; //error assignemet to constant variable

const user = {
  name: "John",
  age: 35
};
// user = {
//   name: "Mary",
//   age: 35
// };//error: assignemet to constant variable

user.name = "Mary";
console.log("user", user);




















