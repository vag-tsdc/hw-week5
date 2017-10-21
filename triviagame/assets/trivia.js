/*    global variables       */




/* pre game */

function ageCheck() {
    var ageCheck = confirm("Are you at least 16 years old?")
    if (ageCheck) {
        alert("Let's talk about sex!")
    }
    else {
        alert("nope.")
        $("body").text("Nope. Try again when you're older.")
    }
    console.log("Age Check: " + ageCheck);
}



/* game variables */


var timer;

var triviaKey = [];

var userAnswer = [];





/*    CURRENT STATS       */
var questionsLeft = "#current-question-rem";







/*    User Input       */
$(document).ready(function() {

// confirm user Age 
ageCheck();



// start button
 // .on("click") for #start button
 $("#start-button").on("click", function() {
    //  Set the button alert's timeout to run 3 seconds after the function's called.
    startQuizTimer = setTimeout(function() {
      alert("Time's Up");
    }, 150000);
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