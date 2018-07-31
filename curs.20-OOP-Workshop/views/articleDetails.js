window.addEventListener("load", function(){
  
  var containerEl = document.getElementById("article-detalis");
  
  var article = new Article();
  var artcileId = getUrlParameter("articleId");
  
  //our article object gets the id from URL
  article.id = artcileId;
  
  article.getArticleDetails().then(function(response) {
    console.log (response);
    article.title = response.title;
    article.body = response.body;
    
    
    displayArticleDetalis(article);
    
  });
  
  
  function displayArticleDetails(articleDetails) {
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = articleDetails.title;
        containerEl.appendChild(titleEl);
        
        var bodyEl = document.createElement('p');
        bodyEl.innerHTML = articleDetails.body;
        containerEl.appendChild(bodyEl);
    }
  
  
});