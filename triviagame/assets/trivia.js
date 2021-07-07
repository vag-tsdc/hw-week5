/*    global variables       */




/* pre game */

function ageCheck() {
    var ageCheck = confirm("Are you at least 16 years old?")
    if (ageCheck) {
        alert("Let's talk about sex!")
    } else {
        alert("nope.")
        $("body").text("Nope. Try again when you're older.")
    }
    console.log("User is 16+ Y/O: " + ageCheck);
}



/* game variables */


var timer;

var keyQuizAnswers = [];

var userQuizAnswers = [];






/*    CURRENT STATS       */
// var questionsLeft = "#current-question-rem";







/*    User Input       */
$(document).ready(function () {

    // confirm user Age 
    ageCheck();

    var keyQuizAnswers = [];

    // start button
    $("#start-button").on("click", function () {
        quizTimerStart = setTimeout(function () {
            var gameOver = confirm("Time's Up! Ready for your results?!")
            if (gameOver) {
                console.log("Game Over " + gameOver);
                compareResults();
            } else {
                console.log("Game Over " + gameOver);
                alert("That's unfortunite... Here are your results...");
                compareResults();
            }
        }, 150000);
    });


    // done button
    $("#done-button").on("click", function () {
        var gameOver = confirm("You're DONE?! Ready for your results?!")
        if (gameOver) {
            console.log("Game Over " + gameOver);
            compareResults();
        } else {
            console.log("Game Over " + gameOver);
            alert("That's unfortunite... Here are your results...");
            compareResults();
        }

    });

    startQuiz(function () {
        questionAppear = function () {
            $("");
        }
    });

    updateStatusBar(function () {
        progressBar = function () {
            updateProgress
            $(".progress").append;
        }

var keyQuestions = {
    q1 = {
        text:"",
        userAnswers: ["1f", "1c"],
        facts:"",
        crap:"",
        correct: facts,



    }

}

        compareResults(keyQuizAnswers, userQuizAnswers)

        var keyAnswers = {
            q1: "",
            q2: "",
            q3: "",
            q4:
        }

        var userQuizAnswers = {

        }

    });

    // var currentUserInput = {




    // var triviaKey = {
    //     q1text : " ",
    //     q1rightanswer : " "

    // }

    // preTrivia();



    // $("#start").on("click", function() {
    //     // start timer

    //   });       

    /* timer timer timer */

    // function timer() {
    //     $("#time-rem").html();
    // }


    // /*   GAME OVER      */
    // function getUserAnswers() {


})