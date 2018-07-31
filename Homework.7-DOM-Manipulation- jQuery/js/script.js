$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  var form = $("#contact");
  
  function handleForm(event) { 
    event.preventDefault(); 
  }
  
  $("form").on('submit', handleForm);
}


function requiredData() {
    $("#firstName").attr("required", "true");
    $("#lastName").attr("required", "true");
    $("#message").attr("required", "true");
}


function validData() {
  var fname = $("#firstName");
  var lname = $("#lastName");
  var gender =$("#gender input[type='radio']:checked");
  var message = $("#message");
  var successContainer = $("#successItem");
  var successItem = document.createElement("section");
  
  $("#successContainer").css("display", "initial");
  $(successItem).html("<span> Thank you for contacting us," + " " + fname.val() + "!</span>");
  $(successItem).addClass("fa fa-check-circle");
  
  $(successContainer).append(successItem);
  
  console.log("First Name:", fname.val());
  console.log("Last Name:", lname.val()); 
  console.log("Gender:", gender.val()); 
  console.log("Message:", message.val()); 
}
