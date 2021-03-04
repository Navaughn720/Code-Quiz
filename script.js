//Start quiz variables
var startButton = document.querySelector(".start button");
var start_quiz = document.querySelector(".quiz")

//Question 1 variables
var quest1 = document.querySelector(".Q1")
var q1a1Button = document.querySelector(".answers-list1 .answer1")
var q1a2Button = document.querySelector(".answers-list1 .answer2")
var q1a3Button = document.querySelector(".answers-list1 .answer3")
var q1a4Button = document.querySelector(".answers-list1 .answer4")

//Question 2 variables
var quest2Show = document.querySelector(".Q2")
var q2a1Button;
var q2a2Button;
var q2a3Button;
var q2a4Button;

//Question 3 variables
var quest3Show;
var q3a1Button;
var q3a2Button;
var q3a3Button;
var q3a4Button;

//Question 4 variables
var quest4Show;
var q4a1Button;
var q4a2Button;
var q4a3Button;
var q4a4Button;

//Restart,submit,view scores buttons
var restartButton = document.querySelector(".buttons .restart");
var submitButton = document.querySelector(".buttons .submit");
var viewScoresButton = document.querySelector("header button");

//Start quiz button
startButton.onclick = ()=>{
    start_quiz.classList.add("activeQuiz");
}
//Question 1 click events
q1a1Button.onclick = ()=>{
    alert("CORRECT!")
    quest1.classList.add("killQ1");
    quest2Show.classList.add("activeQ2")
}
q1a2Button.onclick = ()=>{
    alert("WRONG!")
    quest1.classList.add("killQ1");
    quest2Show.classList.add("activeQ2");
}
q1a3Button.onclick = ()=>{
    alert("WRONG!")
    quest1.classList.add("killQ1");
    quest2Show.classList.add("activeQ2");
}
q1a4Button.onclick = ()=>{
    alert("WRONG!")
    quest1.classList.add("killQ1");
    quest2Show.classList.add("activeQ2");
}

/*
var q1a1 = function(){
    
}
var q1a2 = function(){
    alert("wrong!")
}
var q1a3 = function(){
    alert("wrong!")
}
var q1a4 = function(){
    alert("wrong!")
}
*/

