// // Empty Object
// var robot = {};
// console.log("Robot = ", robot);

// var robot = {
//   model: "TRX1000",
//   weight: 100
// };
// console.log("Robot = ", robot);

// // Add new property
// robot.color = "red";
// console.log("Robot = ", robot);

// // Update property
// robot.weight = 99;
// console.log("Robot = ", robot);

// //  Delete property
// // delete robot.model;
// // console.log("Robot = ", robot);

// var robot = {
//   model: "TRX1000",
//   weight: 100,
//   run: function () {
//     console.log("The robot is running");
//   }
// };
// console.log("Robot = ", robot);

// // Call robot method
// robot.run();

// // Typeof data
// var name = "Karina";
// console.log("Typeof string", typeof name); //string

// var age = 20;
// console.log("Typeof string", typeof age); //number

// var isNull = null;
// console.log("Typeof string", typeof isNull); //object

// var isUndifined;
// console.log("Typeof string", typeof isUndifined); //undifined

// var list = [];
// console.log("Typeof array", typeof list); //object


// //IF STATEMENT
// var x = 10;
// if (x > 0) {
//   console.log("Positiv number x = ", x);
// }

// var x = -2;
// if (x > 0) {
//   console.log("Positiv number x = ", x);
// } else {
//   console.log("Negative number x = ", x);
// } 

// var x = 0;
// if (x > 0) {
//   console.log("Positiv number x = ", x);
// } else if (x === 0) {
//   console.log("x = ", x);
// } else {
//   console.log("Negative number x = ", x);
// } 


// var currentTime = prompt("Enter time");
// console.log(currentTime);
// if (currentTime < 10) {
//   console.log("Buna ziua ");
// } else if (currentTime <= 18) {
//   console.log("Buna ");
// } else {
//   console.log("Buna seara");
// }


// //FOR STATEMENT
// for (var i = 0; i <= 10; i++) {
//   console.log("Index = ", i);
// }

// for (var i = 1; i <= 5; i++) {
// //   console.log("Line = ", i);
//   var line = "";
//   for (var j = 1; j <= 5; j++) {
// //     console.log("Column = ", j);
//     line += (i * j) + " ";
// //     var value = i * j;
// //     console.log("Value = ", value);

//   }
//   console.log("LINE", line);
// }



// //1.display in the console the numbers from 1 to 20
// for (var i = 1; i <= 20; i++) {
//   console.log("Index = ", i);
// }



// //2.display in the console the odd numbers from 1 to 20
// for(var i=1;i<=20;i++)
// {
// if((i%2)!==0){
//   console.log ("i= ", i)
// }
// }

//3.compute the sum of the elements of an array and display it in the console
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     s = 0,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     s += array[i];
//     }
// console.log("Sum = " , s ); 


//4.compute the maximum of the elements of an array and display it in the console 
    
// var array = [11, 42, 123, 4, 25, 61, 87, 78, 99];
// var max = array[0];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] > max) {max = array[i];}
// }
// console.log("Max is = ", max );

//5.compute how many times a certain element appears in an array
//var array = [11, 42, 11, 4, 25, 4, 87, 78, 99];
