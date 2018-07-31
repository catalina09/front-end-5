$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM LOADED")
  
  
$("#btn").click (getPostsAndComments)

function getPostsAndComments() {
  var listContainer = $("#listTitle");
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
  })
  .then(function (posts) {
    var html = "<ul>"
  console.log("Result here: ", posts);
  
  for(var i = 0; i < 10; i++) {
    var postId = posts[i].id;
    getCommentsPost(postId);
    html +='<li>'
    html += '<div>' + posts[i].title+ '</div>';
    html += '<ol id="post_id_' + postId + '"></ol>';
    html +='</li>';
    }
    html += '</ul>'
    $('.content').html(html);
    })
}
  
 function getCommentsPost (postId) {
   $.ajax({
     url: "https://jsonplaceholder.typicode.com/posts" + postId + "/comments",
     method: "GET",
     })
     .then(function (comments) {
     var commentsList = "";
     var maxComments = comments.length > 10 ? 10 : comments.length;
     for (i=0; i<comments.length; i++) {
       commentsList += '<li>' + comments[i].name + '</li>';
       console.log(comments[i]);
      }
    $('#post_id_' + postId).html(commentsList);
    console.log("Comments here: ", comments);
 }) 
 }
}