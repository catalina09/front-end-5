// ////
// 1.HTML button create
// 2.JS subcribe to button call
// 3.JS onclick-ASYN function call
// 4.JS DISPLAY SPINNER
// 5.JS Remove Spinner,Display Done!!!

 getName = function (callback){
  var firstName = prompt ("First Name")
  var lastName = prompt ("Last Name")
  var fullName;
     
      setTimeout(function() {
      fullName = firstName + ' ' + lastName
      if (typeof callback === "function"){
          callback(fullName)
        }
      
    
    },2000)
    
    return fullName;
  }
   