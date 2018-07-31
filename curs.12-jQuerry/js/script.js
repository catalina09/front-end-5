// DOM LOADED
$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log("On HTML Loaded")


//by id - jquerry emelent
console.log("Commnet list", $('#commnets-list'));

//by id - native dom element
console.log("Commnet list", $('#commnets-list')[0]);


//by class
console.log("Item", $('.commnet-item'));

//by tag
console.log("Header", $('h1'));

//by query selector
console.log("Author", $('section.coment-item strong'));

//Modify content
var h1 = $('h1');
h1.text('JQuery DOM Manipulation New');
h1.html('JQuery DOM Manipulation  <em>NEW</em>');

//Set attributes
var h2 = $('h2');
h2.attr('title','Comments List'); // set attr
console.log("H2 Title", h2.attr('title')); //get attr

var commentsContainer = $ ('#comments-list');
commentsContainer.css('border', 'solid 1px green');
commentsContainer.css({
  color: 'blue',
   background: '#ccc'
});
console.log("Commnets list border", commentsContainer.css('border'));
  
//Add border to each comment
  var commentItems = $ ('.comment-item');

commentItems.css('border', 'solid 5px pink');
  
 //Add new comments
 var comment = '<section>' + 
                    '<h3> NEW comment</h3>' +
                    '<p> Content<strong>A B</strong></p>' +
                '</section>';
                    
commentsContainer.append(comment); 
 
  
var list = [
  {
    title: "Title 1",
    body: "Lorem ipsum...",
    author: "Ion Pop"
  },
  {
    title: "Title 2",
    body: "Lorem ipsum...",
    author: "Ana Pop"
  }
];
 
  for ( var i = 0; i < list.length; i++) {
  var item = list[i];
  var comment= '<section>' + 
                    '<h3>' + item.title + '</h3>' +
                    '<p>' + item.body + '<strong>' + item.author + '</strong></p>' +
                '</section>';
  commentsContainer.append(comment);
  
  
//remove element

commentItems.first().remove();
  
//bind events
  var btnSearch = $ ('#btn-search');
    btnSearch.on('click', function(){
     // alert(1);
     //get search value
      
     var search = $('input[name="search"]').val();
      console.log("search value", search);
      
    });
  
  }
} 
  
  
  