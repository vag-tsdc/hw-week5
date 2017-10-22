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

var key = [
    q1 = {
        text: "Vaseline is safe to use with latex condoms.",
        info: "Only water based lubricants should be used on latex condoms.NEVER use an oil-based lube with latex condoms or you run the risk of condom breakage (this includes, baby oil, coconut oil, etc.)",
        choices: ["facts", "crap"],
        userInput: "",
        correct: "CRAP!" + "NICE JOB! " + info,
        wrong: "It's Crap" + "Read up!" + info,
    },
    q2 = {
        text: "HIV attacks the cells of the respiratory system",
        info: "HIV attacks the cells of the immune system",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[1] + "NICE JOB! " + info,
        wrong: choices[0] + "Read up! " + info,

    },
    q3 = {
        text: "The safest sex is performed with both male and female condoms being used at the same time.",
        info: "DON’T use a female condom and a male (conventional) condom at the same time. The condoms may stick to each other, causing them to slip off. If you have a choice, USE A MALE CONDOM for better protection.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[0] + "NICE JOB!",
        wrong: choices[1] + "Read up!" + info,

    },
    q4 = {
        text: "Chlamydia is curable.",
        info: "Chlamydia is a bacteria and bacterias are curable.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[0] + "NICE JOB!" + info,
        wrong: choices[1] + "Read up! " + info,

    },
    q5 = {
        text: "It is always good to keep a condom in your wallet.",
        info: "It is great to take one with you if you plan on having sex but do not keep it there.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[1] + "NICE JOB! " + info,
        wrong: choices[0] + "Read up! " + info,

    },
    q6 = {
        text: "The clitoris is the only human organ that exists for pleasure.",
        info: "The clitoris is the only organ in either sex with pleasure as its only function.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[0] + "NICE JOB! " + info,
        wrong: choices[1] + "Read up! " + info,

    },
    q7 = {
        text: "Having sex while on her period makes it impossible for a woman to get pregnant.",
        info: "A woman could be ovulating during her period therefore pregnancy can happen.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[1] + "NICE JOB! " + info,
        wrong: choices[0] + "Read up! " + info,

    },
    q8 = {
        text: "Lambskin condoms only protect against pregnancy.",
        info: "Lambskin condoms have small pores that bacteria and viruses may pass through.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[1] + "NICE JOB!",
        wrong: choices[0] + "Read up!" + info,

    },
    q9 = {
        text: "At least 80 percent of sexually active people are infected with HPV at some point in their lives.",
        info: "Most people get it and never know they had it. While others have symptoms like genital warts. There are also high risk HPV strains that cause cancer.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[0] + "NICE JOB!",
        wrong: choices[1] + "Read up!" + info,

    },
    q10 = {
        text: "The average speed of ejaculate during a male orgasm is 28 mph.",
        info: "The force of orgasm is thought to give the sperm a head start.",
        choices: ["facts", "crap"],
        userInput: "",
        correct: choices[0] + "NICE JOB!",
        wrong: choices[1] + "Read up!" + info,

    }

];




var userAnswers = [];



function startQuiz() {
    pullQuestions();
}

pullQuestions(function() {
    $("#question-1-text").text(q1.text);
})


/*    CURRENT STATS       */
// var questionsLeft = "#current-question-rem";




/*    User Input       */


/* ON LOAD */
$(document).ready(function () {

    // confirm user Age 
    ageCheck();

    // start button
    $("#start-button").on("click", function () {
        startQuiz()
        console.log("Timer Start.");
        console.log(q1);
        quizTimerStart = setTimeout(function () {
            var gameOver = confirm("Time's Up! Ready for your results?!")
            if (gameOver) {
                console.log("Game Over " + gameOver);
                //    compareResults();
            } else {
                console.log("Game Over " + gameOver);
                alert("That's unfortunite... Here are your results...");
                //   compareResults();
            }
        }, 150000);

    });


    // done button
    $("#done-button").on("click", function () {
        var gameOver = confirm("You're DONE?! Ready for your results?!")
        if (gameOver) {
            console.log("Game Over " + gameOver);
            //   compareResults();
        } else {
            console.log("Game Over " + gameOver);
            alert("That's unfortunite... Here are your results...");
            // compareResults();
        }

    });



    // updateStatusBar(function () {
    //     progressBar = function () {
    //         updateProgress
    //         $(".progress").append;
    //     }

    // Question Variables 



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

    // Document.ready
})