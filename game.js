// color array
const buttonColors = ["red", "blue", "green", "yellow"];

//  array for the game pattern
const gamePattern = []

// array containing what the user clicks
const userClickedPattern = [];

// function that plays sound for user clicked color
function playSound(name) {
    var userClickedButtonSound = new Audio("sounds/" + name + ".mp3");
    userClickedButtonSound.play();
}

// function that animates user's clicks
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
}

// picks a color randomlly, adds it to an array, and animates it
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


// interactive part

// -----------------------------------

// build up an array of the user's click colors (buttons), plays a sound, and animates
$(".btn").on("click", function () {
    var userChoosenColor = $(this).attr("id", );
    userClickedPattern.push(userChoosenColor);
    console.log(userClickedPattern);
    playSound(userChoosenColor);
    // animate function
    animatePress(userChoosenColor);
    // time out function to undo animation

    setTimeout(function () {
        $("#" + userChoosenColor).removeClass("pressed");
    }, 100);

})



nextSequence();