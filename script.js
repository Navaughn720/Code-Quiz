//Start quiz variables
var startButton = document.querySelector(".start button");
var start_quiz = document.querySelector(".quiz")
var points = 0;

//Question 1 variables
var quest1 = document.querySelector(".Q1")
var q1a1Button = document.querySelector(".answers-list1 .answer1")
var q1a2Button = document.querySelector(".answers-list1 .answer2")
var q1a3Button = document.querySelector(".answers-list1 .answer3")
var q1a4Button = document.querySelector(".answers-list1 .answer4")

//Question 2 variables
var quest2 = document.querySelector(".Q2")
var q2a1Button = document.querySelector(".answers-list2 .answer1")
var q2a2Button = document.querySelector(".answers-list2 .answer2")
var q2a3Button = document.querySelector(".answers-list2 .answer3")
var q2a4Button = document.querySelector(".answers-list2 .answer4")

//Question 3 variables
var quest3 = document.querySelector(".Q3")
var q3a1Button = document.querySelector(".answers-list3 .answer1")
var q3a2Button = document.querySelector(".answers-list3 .answer2")
var q3a3Button = document.querySelector(".answers-list3 .answer3")
var q3a4Button = document.querySelector(".answers-list3 .answer4")

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
    quest2.classList.add("activeQ2")
    points = points + 10
}
q1a2Button.onclick = ()=>{
    alert("WRONG!")
    quest1.classList.add("killQ1");
    quest2.classList.add("activeQ2");
}
q1a3Button.onclick = ()=>{
    alert("WRONG!");
    quest1.classList.add("killQ1");
    quest2.classList.add("activeQ2");
}
q1a4Button.onclick = ()=>{
    alert("WRONG!");
    quest1.classList.add("killQ1");
    quest2.classList.add("activeQ2");
}


//Question 2 events
q2a1Button.onclick = ()=>{
    alert("WRONG!");
    quest2.classList.add("killQ2");
    quest3.classList.add("activeQ3");
}
q2a2Button.onclick = ()=>{
    alert("WRONG!");
    quest2.classList.add("killQ2");
    quest3.classsList.add("activeQ3");
}
q2a3Button.onclick = ()=>{
    alert("WRONG!")
}
q2a4Button.onclick = ()=>{
    alert("CORRECT!")
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

