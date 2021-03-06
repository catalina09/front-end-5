window.addEventListener("load", function () {
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  //articlesModel.getAll() returns 100 articles from the API
  //the articles are set as input to the success function in then
  //response will take that value
  
  articlesModel.getAll().then(function(response){
    //call displayAllArticles function with the response from API
    displayAllArticles(response);
  });
  
  //exactly the same as
  //articlesModel.getAll().then(displayAllArticles);
  
  function displayAllArticles(articlesData){
    for ( var i=0; i < articlesData.length; i++) {
      var article = new Article(articlesData[i]);
      displayArticle(article);
      
    }
  }
  
 function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
   
   
   titleEl.addEventListener("clcik ",function (){
     window.location = "http://cursuri-catalinaioanarusu739255.codeanyapp.com/curs.20-OOP-Workshop/templates/article.html?articleId=" + article.id;
   })
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
  
});