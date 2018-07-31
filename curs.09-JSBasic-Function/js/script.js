
// function myFirstFunction () {
//   console.log("My first JS function");
// }



// //Call function
// myFirstFunctionReturn();

// function myFirstFunctionReturn() {
//   return " My First JS function return";
// }

// var message = myFirstFunctionReturn();
// document.write(message);
// document.writeln('<strong>' + message + '</strong>');



// function displayStars() {
//   var line = "";
//   for (i = 0; i < 4; i++) {
//       line  += "*";
//       console.log(line);
//      }
// }

// displayStars();
// displayStars();


// //Function with parms

// function displayStars1(nr) {
//   var line = "";
//   for (i = 0; i < nr; i++) {
//       line  += "*";
//       console.log(line);
//      }
// }
// displayStars1(4);
// displayStars1(2);
// displayStars1(9);


// //Function with default value for param

// // function displayStars2(nr=4) {
// //   var line = "";
// //   for (i = 0; i < nr; i++) {
// //       line  += "*";
// //       console.log(line);
// //      }
// // }
// // displayStars2();
// // displayStars2();
// // displayStars2();
// // displayStars2(2);




// function displayStars2(nr= 4, char = '*') {
//   var line = "";
//   for (var i = 0; i < nr; i++) {
//       line  += char;
//       console.log(line);
//      }
// }
// displayStars2();
// displayStars2(4,'-');
// displayStars2();
// displayStars2(2);




// var fname= "Ana";
// var lname= "Pop";

// function displayName(fname,lname) {
//   console.log(fname + " " + lname);
//   fname= "Ion";
//   console.log("Inside function fname", fname) //Iom
// }

// displayName(fname, lname);
// console.log("Outside function fname", fname) //Ana



// function displayNameObject(person) {
//   console.log(person.fname + " " + person.lname);
//   person.fname= "Ion";
//   console.log("Inside function fname", person.fname) //Iom
// }
//   var person = {fname:"Ana", lname: "Pop"}
//  displayNameObject({fname:"Ana", lname: "Pop"});
// console.log("Outside function fname", person.fname) 


//Statemen function
function statementFunction() {
  console.log("Statement function");
}
statementFunction();


//Exp function
var expFunction = function() {
  console.log("Exp function");
}
expFunction();


// //IIEE self inoking function
// (function() {
//   console.log("IIEE");
// })();

// //Function with function as parameter

// function testFunction() {
//   alert("Exec from another function");
// }
// execOtherFunction(testFunction);
// function execOtherFunction(f) {
//   testFunction();
// }


//Variables scope
var a = 1;         // variabila globala
b = 2;             //variabila globala
window.c = 3;      //variabila globala

function displayVariable() {
  var d = 4;    //variabila locala
  e = 5;        //variabila globala
  console.log("InsideVariable d = ", d);
console.log("InsideVariable e = ", e);
}
displayVariable();
//console.log("OutsideVariable d = ", d);
console.log("OutsideVariable e = ", e);


//Closure
var x =  1; //Global
function firstF() {
  var y = 2; // Locat first function
  
  secondF();
  function secondF(){
    var z = 3;  //local secondF
     w=4;
      console.log("Second x = ", x ); //1
      console.log("Second y  = ", y ); //2
      console.log("Second  z= ", z ); //3
    
  }
  
  console.log("First x = ", x ); //1 
  console.log("First y = ", y ); //2
 // console.log("Second z = ", z );//undefined
}
firstF();
  console.log(" x = ", x ); //1 
 // console.log(" y = ", y ); // undefined
  //console.log(" z = ", z );// undefined
  console.log("w =", w); //4