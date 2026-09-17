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

$(".btn").on("click", function (event) {

    const color = event.target.id;

    clickValue.push(color);
    console.log(clickValue);
});



let gamePattern = [];
function colorsPick() {
    const colors = ["blue", "yellow", "red", "green"];


    const picking = Math.floor(Math.random() * 4);
    gamePattern.push(colors[picking]);

    const randomColor = $("#" + gamePattern[gamePattern.length - 1]);
    console.log(randomColor);



    let colorPicked = randomColor.addClass("pressed");
    let audioPicked = Audio().play;





    return gamePattern;
}
colorsPick();
colorsPick();
colorsPick();
console.log(gamePattern);


