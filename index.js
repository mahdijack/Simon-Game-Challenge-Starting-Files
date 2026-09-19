let clickValue = [];
let indexColer = 0;
let gamePattern = [];
let colors = ["blue", "yellow", "red", "green"];
let started = false;


// ====================
// User Click
// ====================

$(".btn").on("click", function () {

    let key = $(this).attr("id");

    switch (key) {

        case "blue":
            new Audio("sounds/blue.mp3").play();
            $(".blue").addClass("pressed");
            setTimeout(() => {
                $(".blue").removeClass("pressed");
            }, 100);
            break;

        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            $(".yellow").addClass("pressed");
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
            }, 100);
            break;

        case "red":
            new Audio("sounds/red.mp3").play();
            $(".red").addClass("pressed");
            setTimeout(() => {
                $(".red").removeClass("pressed");
            }, 100);
            break;

        case "green":
            new Audio("sounds/green.mp3").play();
            $(".green").addClass("pressed");
            setTimeout(() => {
                $(".green").removeClass("pressed");
            }, 100);
            break;

        default:
            break;
    }
});


// ====================
// Check User Answer
// ====================

$(".btn").on("click", function () {
    const color = $(this).attr("id");
    clickValue.push(color);
    console.log(clickValue);

    if (clickValue[indexColer] === gamePattern[indexColer]) {
        console.log("Correct!");
        indexColer++;

        if (indexColer === gamePattern.length) {
            console.log("Level Complete!");
        }
    } else {
        startOver();
    }

});


// ====================
// Pick Random Color
// ====================

function colorsPick() {
    const picking = Math.floor(Math.random() * colors.length);
    gamePattern.push(colors[picking]);

    const pickedColor = gamePattern[gamePattern.length - 1];
    const randomColor = $("#" + pickedColor);

    console.log(randomColor);
    randomColor.addClass("pressed");

    setTimeout(() => {
        randomColor.removeClass("pressed");
    }, 100);

    const audioPicked = new Audio(
        "sounds/" + pickedColor + ".mp3"
    );
    audioPicked.play();

    return gamePattern;
}


// ====================
// Start Game
// ====================

colorsPick();

console.log(gamePattern);


// ====================
// Game Over
// ====================

function startOver() {
    indexColer = 0;
    gamePattern = [];
    clickValue = [];
    started = false;
}