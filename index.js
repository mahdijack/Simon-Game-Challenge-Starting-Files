$(".btn").on("click", function keyclick() {
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



let clickValue = [];
let indexColer = 0;

$(".btn").on("click", function (event) {

    const color = $(this).attr("id");

    clickValue.push(color);

    console.log(clickValue);

    if (clickValue[indexColer] === gamePattern[indexColer]) {

        console.log("Correct!");
        indexColer++;
        if (indexColer === gamePattern.length){
            console.log("Level Complete!");
        }
    } else {
        $(document).addClass(".game-over");
    }
});



let gamePattern = [];
function colorsPick() {
    let colors = ["blue", "yellow", "red", "green"];

    let picking = Math.floor(Math.random() * 4);
    gamePattern.push(colors[picking]);

    let randomColor = $("#" + gamePattern[gamePattern.length - 1]);
    let pickedColor = gamePattern[gamePattern.length - 1];
    console.log(randomColor);

    randomColor.addClass("pressed");
    setTimeout(() => {
    randomColor.removeClass("pressed");
}, 100);
    const audioPicked = new Audio(`sounds/${pickedColor}.mp3`);
    audioPicked.play();

    if (indexColer === gamePattern.length){

    }
    
    return gamePattern;
}
colorsPick();

console.log(gamePattern);


