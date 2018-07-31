function play() {
  var play = [rock, paper, scissors]
}
var playerOnemove = prompt("Player 1, what would you like to play? Please choose either rock? paper? or scissors?");
var playerTwomove = prompt("Player 2, what would you like to play? Please choose either rock?, paper? or scissors?");

var winner = function(playerOnemove,playerTwomove){
if (playerOnemove==="rock"){
if(playerTwomove==="paper"){
console.log("Player 2 wins, The answer is Paper!");
  
} else if (playerTwomove==="scissors"){
console.log("Player 1 wins! The answer is Rock");
} else if (playerTwomove==="rock"){
console.log("It's a draw!");
}
  
} else if (playerOnemove==="paper"){
if(playerTwomove==="scissors"){
console.log("Player 2 wins! The answer is Scissors");
} else if (playerTwomove==="rock"){
console.log("Player 1 wins!The answer is Papaer");
} else if (playerTwomove==="paper"){
console.log("It's a draw!");
}
  
} else if (playerOnemove==="scissors"){
if(playerTwomove==="rock"){
console.log("Player 2 wins! The answer is Rock");
} else if (playerTwomove==="paper"){
console.log("Player 1 wins! The answe is Scissors");
} else if (playerTwomove==="scissors"){
console.log("It's a draw!");
}
} else {
console.log("Please enter a valid move");
}

};
winner(playerOnemove,playerTwomove);



