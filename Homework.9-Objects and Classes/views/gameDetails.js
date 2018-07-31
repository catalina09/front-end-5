$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");
  
 
  var containerEl = document.getElementById("gameBody");
  var titleGame = document.getElementById("titleGame");
  var imgGame = document.getElementById("imgGame");
  var gameDescription = document.getElementById("gameDescription");
  var editBtn = $("#editBtn");
  var editBtn2 = $("#editBtn2");
  var deleteBtn = $("#deleteBtn");
  var confirmation = $(".confirmation");
  var mainContainer = $(".main");
  var editContainer = $(".edit");

  var game = new Game();
  var gameId = getUrlParameter("gameId");
  game.id = gameId;

  game.getGameDetails().then(function() {
    displayGameDetails(game);
  });

  function displayGameDetails(gameDetails) {

    titleGame.innerHTML = ("Title: " + gameDetails.title);

    var imgEl = document.createElement('IMG');
    imgEl.className = "img-fluid text-center";
    imgEl.setAttribute("src", game.imageUrl);
    imgEl.setAttribute("width", "304");
    imgEl.setAttribute("height", "228");
    imgEl.setAttribute("alt", game.title);
    imgGame.appendChild(imgEl);

    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = gameDetails.description;
    gameDescription.appendChild(bodyEl);
  }
  
  editBtn.click(function(){
    mainContainer.hide();
    editContainer.show();
  })
  

  editBtn2.click(function(){
    game.editGame();
    mainContainer.hide();
    editContainer.show();
    editContainer.text("Title successfully edited!");
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  })
  

  deleteBtn.click(function(){
    game.deleteGame();
    mainContainer.hide();
    confirmation.show();
    confirmation.text("Game successfully deleted!");
    setTimeout(function() {
      window.location = "http://cursuri-catalinaioanarusu739255.codeanyapp.com/incercare%20tema/templates/index.html"
    }, 1000);
  });

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}