// $ (domLoaded)
//   function domLoaded() {
//     getName(function(numeIntreg) {
//       console.log('Numele este ' + numeIntreg)
//     });
    
//     getName (function(name){
//       alert('aici este a doua implementare cu numele' + name );
//     })
    
//   }
 

//apeleaza functia la click


$(onLoad)

function onLoad(){
  $('#button').on('click',function(){
    $('#spinner').css('visibility','visible');
    getName(function(fullName) {
      $('#spinner').css('visibility','hidden');
      $('.contetn').html('Numele este' + fullName);
//       console.log('Numele este' + fullName)
    })
  })
}
  

$('#button1').on('click',getPosts)
function getPosts(){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: 'GET'
  })
  .then(function(response){
    console.log('Response',response);
  });
  
}
  
}