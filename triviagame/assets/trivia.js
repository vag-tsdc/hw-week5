/* global variables       */
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
var currentPlayer;
var gameOver;

var key = [
    q1 = {
        text: "Vaseline is safe to use with latex condoms.",
        info: "Only water based lubricants should be used on latex condoms.NEVER use an oil-based lube with latex condoms or you run the risk of condom breakage (this includes, baby oil, coconut oil, etc.)",
        userAnswer: "",
        answer: "It's CRAP! ",
        result: this.answer + this.userAnswer + this.info
    },
    q2 = {
        text: "HIV attacks the cells of the respiratory system",
        info: "HIV attacks the cells of the immune system",
        userAnswer: "",
        answer: "It's CRAP! ",
        result: this.answer + this.userAnswer + this.info
    },
    q3 = {
        text: "The safest sex is performed with both male and female condoms being used at the same time.",
        info: "DON’T use a female condom and a male (conventional) condom at the same time. The condoms may stick to each other, causing them to slip off. If you have a choice, USE A MALE CONDOM for better protection.",
        userAnswer: "",
        answer: "FACTS ",
        result: this.answer + this.userAnswer + this.info

    },
    q4 = {
        text: "Chlamydia is curable.",
        info: "Chlamydia is a bacteria and bacterias are curable.",
        userAnswer: "",
        answer: "FACTS!!! ",
        result: this.answer + this.userAnswer + this.info

    },
    q5 = {
        text: "It is always good to keep a condom in your wallet.",
        info: "It is great to take one with you if you plan on having sex but do not keep it there.",
        userAnswer: "",
        answer: "THAT IS CRAP! ",
        result: this.answer + this.userAnswer + this.info


    },
    q6 = {
        text: "The clitoris is the only human organ that exists for pleasure.",
        info: "The clitoris is the only organ in either sex with pleasure as its only function.",
        userAnswer: "",
        answer: "F A C T S !",
        result: this.answer + this.userAnswer + this.info

    },
    q7 = {
        text: "Having sex while on her period makes it impossible for a woman to get pregnant.",
        info: "A woman could be ovulating during her period therefore pregnancy can happen.",
        userAnswer: "",
        answer: "C R A P!",
        result: this.answer + this.userAnswer + this.info


    },
    q8 = {
        text: "Lambskin condoms only protect against pregnancy.",
        info: "Lambskin condoms have small pores that bacteria and viruses may pass through.",
        userAnswer: "",
        answer: "FACTS! ",
        result: this.answer + this.userAnswer + this.info

    },
    q9 = {
        text: "At least 80 percent of sexually active people are infected with HPV at some point in their lives.",
        info: "Most people get it and never know they had it. While others have symptoms like genital warts. There are also high risk HPV strains that cause cancer.",
        userAnswer: "",
        answer: "FACTS!!!! ",
        result: this.answer + this.userAnswer + this.info

    },
    q10 = {
        text: "The average speed of ejaculate during a male orgasm is 28 mph.",
        info: "The force of orgasm is thought to give the sperm a head start.",
        userAnswer: "",
        answer: "FACTS! ",
        result: this.answer + this.userAnswer + this.info


    }

];


function startQuiz() {
    pullQuestions();
    console.log("Timer has Started!");
}

function pullQuestions() {
    $("#question-1-text").text(key[0].text);
    $("#question-2-text").text(key[1].text);
    $("#question-3-text").text(key[2].text);
    $("#question-4-text").text(key[3].text);
    $("#question-5-text").text(key[4].text);
    $("#question-6-text").text(key[5].text);
    $("#question-7-text").text(key[6].text);
    $("#question-8-text").text(key[7].text);
    $("#question-9-text").text(key[8].text);
    $("#question-10-text").text(key[9].text);

}

function gameResults() {
    displayResults();
}



function pushAnswers() {
    var userKey = [];
    $("input:checked").each(function () {
        userKey.push($(this).val());
    })
    console.log(userKey);

    var userAnswer = [];
    $(".userAnswer-1:checked").each(function () {
        userAnswer.push($(this).val());
    });
    console.log(userAnswer);
}


function displayResults() {
    $("#question-1-text").text(key[0].result);
    $("#question-2-text").text(key[1].result);
    $("#question-3-text").text(key[2].result);
    $("#question-4-text").text(key[3].result);
    $("#question-5-text").text(key[4].result);
    $("#question-6-text").text(key[5].result);
    $("#question-7-text").text(key[6].result);
    $("#question-8-text").text(key[7].result);
    $("#question-9-text").text(key[8].result);
    $("#question-10-text").text(key[9].result);
}


function pageTweak() {
    console.log(key[0].text);
    console.log(key[1].text);
    console.log(key[2].text);
    console.log(key[3].text);
    console.log(key[4].text);
    console.log(key[5].text);
    console.log(key[6].text);
    console.log(key[7].text);
    console.log(key[8].text);
    console.log(key[9].text);
}

/* ON LOAD */
$(document).ready(function () {

            // confirm user Age 
            ageCheck();


            // start button
            $("#start-button").on("click", function () {
                startQuiz();
                quizTimerStart = setTimeout(function () {
                    var timeUp = confirm("Time's Up! Ready for your results?!")
                    if (timeUp) {
                        console.log("Game Over " + timeUp);
                        gameResults();
                    } else {
                        console.log("Game Over " + timeUp);
                        alert("That's unfortunite... Here are your results...");
                        gameResults();
                    }
                }, 150000);
            });


            $("input:checked").on("click" (function () {
                        console.log((this).val());
                    }));

                    $(".userAnswer-1:checked").on("click" (function () {
                        console.log($(this).val());
                    })
                )

                    // var userAnswer = {};
                    // var a1 = $(".userAnswer-1").each(function() {
                    //     userKey.push($(this).val());
                    // var a2 = $(".userAnswer-2").val();
                    // var a3 = $(".userAnswer-3").val();
                    // var a4 = $(".userAnswer-4").val();
                    // var a5 = $(".userAnswer-5").val();
                    // var a6 = $(".userAnswer-6").val();
                    // var a7 = $(".userAnswer-7").val();
                    // var a8 = $(".userAnswer-8").val();
                    // var a9 = $(".userAnswer-9").val();
                    // var a10 = $(".userAnswer-10").val();





                    // updateStatusBar(function () {
                    //     progressBar = function () {
                    //         updateProgress
                    //         $(".progress").append;
                    //     }

                    // Question Variables 


                    // /*   GAME OVER      */
                    // function getUserAnswers() {

                    // Document.ready

            })