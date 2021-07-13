// color array
const buttonColors = ["red", "blue", "green", "yellow"];

// game pattern
const gamePattern = []

// array containing what the user clicks
const userClickedPatter[];

function nextSequence() {
    //function containing a random number generator from 0-3
    var randomNumber = Math.floor((Math.random() * 4));
    // uses the random number to pick a color 
    var randomChosenColor = buttonColors[randomNumber];
    // adds the color to the game pattern array 
    gamePattern.push(randomChosenColor);
    // animates the button that was selected
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var sequencedButtonSound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sequencedButtonSound.play();
}

$(".btn").on("click", function () {
    var userChoosenColor = this.attr("id");
    console.log
})


nextSequence();
console.log(gamePattern);
// nextSequence();
// console.log(gamePattern);
// nextSequence();
// console.log(gamePattern);
// nextSequence();
// console.log(gamePattern);