let clickValue = [];
let indexColer = 0;
let level = 0;
let gamePattern = [];
let colors = ["blue", "yellow", "red", "green"];
let started = false;


// ====================
// Start Game
// ====================

$(document).keypress(function () {
    if (!started) {
        level++;
        $("#level-title").text("Level " + level);
        colorsPick();
        started = true;
    }
});


// ====================
// User Click
// ====================

$(".btn").on("click", function () {
    // اگر بازی شروع نشده، کلیک قبول نشود
    if (!started) {
        return;
    }
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
    if (!started) {
        return;
    }
    const color = $(this).attr("id");
    clickValue.push(color);
    console.log(clickValue);

    if (clickValue[indexColer] === gamePattern[indexColer]) {
        console.log("Correct!");
        indexColer++;

        // اگر کل sequence درست زده شده
        if (indexColer === gamePattern.length) {
            clickValue = [];
            indexColer = 0;
            level++;
            $("#level-title").text("Level " + level);
            setTimeout(() => {
                colorsPick();
            }, 1000);
        }

    } else {
        console.log("false!");
        startOver();
    }
});

// ====================
// Pick Random Color
// ====================
function colorsPick() {
    const picking = Math.floor(Math.random() * colors.length);
    gamePattern.push(colors[picking]);
    console.log("Game Pattern:", gamePattern);

    // کل sequence را نمایش بده
    let i = 0;
    const sequence = setInterval(() => {
        const pickedColor = gamePattern[i];
        const randomColor = $("#" + pickedColor);
        randomColor.addClass("pressed");
        const audioPicked = new Audio(
            "sounds/" + pickedColor + ".mp3"
        );
        audioPicked.play();
        setTimeout(() => {
            randomColor.removeClass("pressed");
        }, 100);

        i++;

        if (i === gamePattern.length) {
            clearInterval(sequence);
        }
    }, 600);
    return gamePattern;
}


// ====================
// Game Over
// ====================

function startOver() {
    new Audio("sounds/wrong.mp3").play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    indexColer = 0;
    gamePattern = [];
    clickValue = [];
    level = 0;
    started = false;
    $("#level-title").text("Game Over, Press Any Key to Restart");
}