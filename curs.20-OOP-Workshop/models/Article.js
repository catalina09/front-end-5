function Article (options) {
  options = optionns || {};
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
  this.userId = options.userId;
}

Article.prototype.getArticleDetails = function () {
  
  return $.get('https://jsonplaceholder.typicode.com/posts/' + this.id);
  
}