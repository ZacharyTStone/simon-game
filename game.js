var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// game rule alert pc
// alert("Hi there!\n\nStart the game by clicking on the start/reset button.\n\nFor each new level press the previous colors in the order they apeared");

// game rule alert
onload = function () {
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Hi there!\n\nStart the game by clicking on the start/reset button.\n\nFor each new level press the previous colors in the order they appeared");
    }
}


// starts the game with a button click and unhides
$(".mobile-reset").click(function () {
    if (!started) {
        $(".btn").removeClass("hidden");
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;


    }
});



$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length - 1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 300);

        $("#level-title").text("Game Over");

        $(".btn").addClass("hidden");

        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
    }

}

function nextSequence() {
    // function to repeat last buttons
    // if (gamePattern != 0) {
    //     var = Math.floor(Math.random() * 4);
    //     var randomChosenColor = buttonColors[randomNumber];
    //     gamePattern.push(randomChosenColor);

    //     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //     playSound(randomChosenColor);

    // }

    // game for each level
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// reset game by setting all the values to what they start as 
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    $(h1).removeClass("game-over");

}