// ================================================================
// =======------------   FIRST ANSWER   ----------------===========
// ================================================================

// let clickValue = [];
// let indexColer = 0;
// let level = 0;
// let gamePattern = [];
// let colors = ["blue", "yellow", "red", "green"];
// let started = false;


// // ====================
// // Start Game
// // ====================

// $(document).keypress(function () {
//     if (!started) {
//         level++;
//         $("#level-title").text("Level " + level);
//         colorsPick();
//         started = true;
//     }
// });


// // ====================
// // User Click
// // ====================

// $(".btn").on("click", function () {
//     // اگر بازی شروع نشده، کلیک قبول نشود
//     if (!started) {
//         return;
//     }
//     let key = $(this).attr("id");

//     switch (key) {
//         case "blue":
//             new Audio("sounds/blue.mp3").play();
//             $(".blue").addClass("pressed");
//             setTimeout(() => {
//                 $(".blue").removeClass("pressed");
//             }, 100);
//             break;

//         case "yellow":
//             new Audio("sounds/yellow.mp3").play();
//             $(".yellow").addClass("pressed");
//             setTimeout(() => {
//                 $(".yellow").removeClass("pressed");
//             }, 100);
//             break;

//         case "red":
//             new Audio("sounds/red.mp3").play();
//             $(".red").addClass("pressed");
//             setTimeout(() => {
//                 $(".red").removeClass("pressed");
//             }, 100);
//             break;

//         case "green":
//             new Audio("sounds/green.mp3").play();
//             $(".green").addClass("pressed");
//             setTimeout(() => {
//                 $(".green").removeClass("pressed");
//             }, 100);
//             break;

//         default:
//             break;
//     }

// });

// // ====================
// // Check User Answer
// // ====================
// $(".btn").on("click", function () {
//     if (!started) {
//         return;
//     }
//     const color = $(this).attr("id");
//     clickValue.push(color);
//     console.log(clickValue);

//     if (clickValue[indexColer] === gamePattern[indexColer]) {
//         console.log("Correct!");
//         indexColer++;

//         // اگر کل sequence درست زده شده
//         if (indexColer === gamePattern.length) {
//             clickValue = [];
//             indexColer = 0;
//             level++;
//             $("#level-title").text("Level " + level);
//             setTimeout(() => {
//                 colorsPick();
//             }, 1000);
//         }

//     } else {
//         console.log("false!");
//         startOver();
//     }
// });

// // ====================
// // Pick Random Color
// // ====================
// function colorsPick() {
//     const picking = Math.floor(Math.random() * colors.length);
//     gamePattern.push(colors[picking]);
//     console.log("Game Pattern:", gamePattern);

//     // کل sequence را نمایش بده
//     let i = 0;
//     const sequence = setInterval(() => {
//         const pickedColor = gamePattern[i];
//         const randomColor = $("#" + pickedColor);
//         randomColor.addClass("pressed");
//         const audioPicked = new Audio(
//             "sounds/" + pickedColor + ".mp3"
//         );
//         audioPicked.play();
//         setTimeout(() => {
//             randomColor.removeClass("pressed");
//         }, 100);

//         i++;

//         if (i === gamePattern.length) {
//             clearInterval(sequence);
//         }
//     }, 600);
//     return gamePattern;
// }


// // ====================
// // Game Over
// // ====================

// function startOver() {
//     new Audio("sounds/wrong.mp3").play();
//     $("body").addClass("game-over");
//     setTimeout(() => {
//         $("body").removeClass("game-over");
//     }, 200);

//     indexColer = 0;
//     gamePattern = [];
//     clickValue = [];
//     level = 0;
//     started = false;
//     $("#level-title").text("Game Over, Press Any Key to Restart");
// }


// ================================================================
// =====--------------   SECOND ANSWER   ----------------==========
// ================================================================
// let clickValue = [];
// let indexColor = 0;
// let level = 0;
// let gamePattern = [];
// let colors = ["blue", "yellow", "red", "green"];
// let started = false;
// // ====================
// // Start Game
// // ====================
// $(document).keypress(function () {
//     if (!started) {
//         level = 1;
//         indexColor = 0;
//         clickValue = [];
//         gamePattern = [];
//         $("#level-title").text("Level " + level);
//         nextSequence();
//         started = true;
//     }

// });

// // ====================
// // User Click
// // ====================

// $(".btn").on("click", function () {
//     if (!started) {
//         return;
//     }
//     let key = $(this).attr("id");
//     playSound(key);
//     animatePress(key);
//     clickValue.push(key);
//     checkAnswer(clickValue.length - 1);

// });

// // ====================
// // Check User Answer
// // ====================

// function checkAnswer(currentIndex) {

//     if (clickValue[currentIndex] === gamePattern[currentIndex]) {
//         console.log("Correct!");
//         // آیا کاربر کل sequence را درست زده؟
//         if (clickValue.length === gamePattern.length) {
//             // آماده شدن برای مرحله بعد
//             clickValue = [];
//             indexColor = 0;
//             level++;
//             $("#level-title").text("Level " + level);
//             setTimeout(function () {
//                 nextSequence();
//             }, 1000);
//         }

//     } else {
//         console.log("Wrong!");
//         gameOver();
//     }
// }

// // ====================
// // Next Sequence
// // ====================

// function nextSequence() {

//     clickValue = [];
//     indexColor = 0;

//     let randomNumber = Math.floor(Math.random() * colors.length);
//     let randomChosenColor = colors[randomNumber];

//     gamePattern.push(randomChosenColor);
//     console.log("Game Pattern:", gamePattern);
//     playSequence();
// }

// // ====================
// // Play Whole Sequence
// // ====================

// function playSequence() {
//     let i = 0;
//     let interval = setInterval(function () {

//         let color = gamePattern[i];
//         playSound(color);
//         animatePress(color);
//         i++;
//         if (i === gamePattern.length) {
//             clearInterval(interval);
//         }

//     }, 600);
// }

// // ====================
// // Play Sound
// // ====================

// function playSound(color) {
//     let audio = new Audio("sounds/" + color + ".mp3");
//     audio.play();
// }

// // ====================
// // Animation
// // ====================

// function animatePress(color) {
//     $("#" + color).addClass("pressed");
//     setTimeout(function () {
//         $("#" + color).removeClass("pressed");
//     }, 100);
// }

// // ====================
// // Game Over
// // ====================

// function gameOver() {
//     new Audio("sounds/wrong.mp3").play();
//     $("body").addClass("game-over");
//     setTimeout(function () {
//         $("body").removeClass("game-over");
//     }, 200);

//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     started = false;
//     clickValue = [];
//     indexColor = 0;
//     gamePattern = [];
//     level = 0;
// }



// ================================================================
// =======------------   Teacher ANSWER   ----------------=========
// ================================================================
// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }



let getValue = [];

let gamePatern = [];

let colors = ["red", "blue", "green", "yellow"];

let level = 0;

let started = false;


$(document).keypress(function () {

    if (!started) {

        started = true;

        nextSequeense();

    }

});


$(".btn").click(function () {

    let idValue = this.id;

    // ذخیره انتخاب کاربر
    getValue.push(idValue);

    // پخش صدای دکمه
    let soundValue = new Audio("sounds/" + idValue + ".mp3");

    soundValue.play();

    // افکت دکمه
    $("#" + idValue).addClass("pressed");

    setTimeout(function () {

        $("#" + idValue).removeClass("pressed");

    }, 100);

    // بررسی جواب
    checkAnswer(getValue.length - 1);

});


function checkAnswer(Curentlevel) {

    // جواب درست است
    if (gamePatern[Curentlevel] === getValue[Curentlevel]) {

        // اگر کاربر کل مرحله را درست زده
        if (getValue.length === gamePatern.length) {

            // انتخاب‌های کاربر برای مرحله بعد پاک می‌شوند
            getValue = [];

            // یک ثانیه صبر و سپس مرحله بعد
            setTimeout(function () {

                nextSequeense();

            }, 1000);

        }

    } else {

        // جواب اشتباه
        let soundValue = new Audio("sounds/wrong.mp3");

        soundValue.play();

        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {

            $("body").removeClass("game-over");

        }, 200);

        startOver();

    }

}


function nextSequeense() {

    level++;

    $("#level-title").text("Level " + level);

    // انتخاب رنگ تصادفی
    let randomNumber = Math.floor(Math.random() * 4);

    let randomColer = colors[randomNumber];

    // اضافه کردن رنگ به Pattern
    gamePatern.push(randomColer);

    // نمایش رنگ جدید به کاربر
    $("#" + randomColer).fadeOut(100).fadeIn(100);

    // پخش صدای رنگ
    let soundValue = new Audio("sounds/" + randomColer + ".mp3");

    soundValue.play();

}


function startOver() {

    gamePatern = [];

    getValue = [];

    level = 0;

    started = false;

}

