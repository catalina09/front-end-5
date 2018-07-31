
//1.display in the console the numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
  console.log("Index = ", i);
}



//2.display in the console the odd numbers from 1 to 20
for(var i=1;i<=20;i++)
{
if((i%2)!==0){
  console.log ("i= ", i)
}
}

//3.compute the sum of the elements of an array and display it in the console
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    s = 0,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    }
console.log("Sum = " , s ); 


//4.compute the maximum of the elements of an array and display it in the console 
    
var array = [11, 42, 123, 4, 25, 61, 87, 78, 99];
var max = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] > max) {max = array[i];}
}
console.log("Max is = ", max );

//5.compute how many times a certain element appears in an array
var array = [11, 42, 11, 4, 25, 4, 87, 78, 99];
