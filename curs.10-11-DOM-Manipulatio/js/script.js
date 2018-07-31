

//get element by id
console.log("Commnets list", document.getElementById("comments-list"));

window.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");
});

//when document obj is available
document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  //by id
  console.log("Commnets list", document.getElementById('comments-list'));
  
  //by class
  console.log("Commnets items", document.getElementsByClassName('comments-item'));
  
  //first by class
    console.log("First comment", document.getElementsByClassName('comments-items')[0]);
  
  //by tag name
    console.log("First comment", document.getElementsByTagName('secion'));
  
  //second by tag
    console.log("Secont comment", document.getElementsByTagName('secion')[1]);
  
  //by class & tag
    console.log("First comment", document.querySelector('secion.comment-item'));
  
  //All by class & tag
    console.log("Comment items", document.querySelectorAll('secion.comment-item'));
  
  //all user
    console.log("User for comment", document.querySelectorAll('secion.comment-item strong'));


//Change h1 content
var h1 = document.querySelector('h1');
h1.innerText = 'JS DOM Manipulation NEW'; //as string
console.log("H1 text", h1.innerText);

h1.innerHTML = 'JS DOM Manipulation <em> NEW </em>'; 
console.log("H1 html", h1.innerHTML);


//Manipulate attribute 
var h2 = document.querySelector('h2');
h2.setAttribute('titile', 'comments list'); //set attribute
console.log('GET attribute ', h2.getAttribute('title'));
h2.id="comment-list-id";
console.log("Comments list id", h2.id);


//Change style
var CommentsContainer = document.getElementById('comments-list');
CommentsContainer.style.border = "solid 1px green";
  
var commentsItems = document.getElementsByClassName('comment-item');
for (var i = 0; i < commentsItems.length; i++) {
  commentsItems[i].style.border = "solid 2px red";
}
  
//Add new dom elements
var commentItem = document.createElement('section');
commentItem.className = 'comment-item';
commentItem.innerHTML = '<h3> New comment </h3>' + 
                        '<p> New comment content <strong>author</strong></p>';
CommentsContainer.appendChild(commentItem);
  
//Remove first comment item
var commentItem = document.querySelector('section.comment-item');
CommentsContainer.removeChild(commentItem)

  
//Add comments list 
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
for (var i = 0; i < list.length; i++) {
  var comment = list[i];
  var item = document.createElement('section');
  item.className = 'comment-item';
  item.innerHTML = '<h3>' + comment.title + '</h3>' +
                   '<p>' + comment.body + '<strog>' + comment.author + '</strong></p>';
  CommentsContainer.appendChild(item); 
}
  
var btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', onSearch);
//   btnSearch.addEventListener('click', onSearch1);
//   btnSearch.addEventListener('click', onSearch2);
  //btnSearch.addEventListener('mouseover', onHover);
  
function onSearch() {
  alert(1);
}
  //unbind from click event
//  btnSearch.removeEventListener('click', onSearch);
  

}
