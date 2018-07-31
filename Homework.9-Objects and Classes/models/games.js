function Games() {
  
}

Games.prototype.getAll = function() {
  return $.get("https://games-world.herokuapp.com/games")
}

Games.prototype.addNewGame = function() {
  var that = this
  return $.ajax({
      url: "https://games-world.herokuapp.com/games/",
      method: "POST",
      data: {
        title: "Dissidia: Final Fantasy NT",
        publisher: "Activision",
        imageUrl: "https://psmedia.playstation.com/is/image/psmedia/dissidia-final-fantasy-nt-two-column-01-ps4-eu-23oct17?$TwoColumn_Image$",
        description: "Drawing on over three decades of industry-leading game development, Dissidia: Final Fantasy NT places you and two team mates into one of over 10 iconic arenas, for an intense three-versus-three player battle between true legends of the Final Fantasy universe.A unique take on the team brawler genre, you'll choose from one of 20+ much-loved characters from the franchise and enter into battle using classic weapons and magic attacks, alongside devastating summon spells like Odin, Shiva and Ifrit.Gain new skills, earn Gil and freely customise your character as you go, then hone your newly acquired skills in practice mode before heading online for the ultimate challenge."
      }
    })
    .then(function(respone) {
      that.title = respone.title;
      that.releaseDate = respone.releaseDate;
      that.genre = respone.genre;
      that.publisher = respone.publisher;
      that.imageUrl = respone.imageUrl;
      that.description = respone.description;
    });
}