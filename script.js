//Start quiz variables
var startButton = document.querySelector(".start button");
var start_quiz = document.querySelector(".quiz")
var timeCounter = start_quiz.querySelector(".timer .time-number")
var points;
var secondsLeft;
var initials;

//Restart,submit,view scores buttons
var result = document.querySelector(".result-section");
var restartButton = document.querySelector(".finalbuttons .restart");
var submitButton = document.querySelector(".buttons .submit");
var scores = result.querySelector(".scorenum")
var viewScoresButton = document.querySelector("header button");

//Question 1 variables
var quest1 = document.querySelector(".Q1");
var q1a1Button = document.querySelector(".answers-list1 .answer1");
var q1a2Button = document.querySelector(".answers-list1 .answer2");
var q1a3Button = document.querySelector(".answers-list1 .answer3");
var q1a4Button = document.querySelector(".answers-list1 .answer4");

//Question 2 variables
var quest2 = document.querySelector(".Q2")
var q2a1Button = document.querySelector(".answers-list2 .answer1");
var q2a2Button = document.querySelector(".answers-list2 .answer2");
var q2a3Button = document.querySelector(".answers-list2 .answer3");
var q2a4Button = document.querySelector(".answers-list2 .answer4");

//Question 3 variables
var quest3 = document.querySelector(".Q3")
var q3a1Button = document.querySelector(".answers-list3 .answer1");
var q3a2Button = document.querySelector(".answers-list3 .answer2");
var q3a3Button = document.querySelector(".answers-list3 .answer3");
var q3a4Button = document.querySelector(".answers-list3 .answer4");

//Question 4 variables
var quest4 = document.querySelector(".Q4")
var q4a1Button = document.querySelector(".answers-list4 .answer1");
var q4a2Button = document.querySelector(".answers-list4 .answer2");
var q4a3Button = document.querySelector(".answers-list4 .answer3");
var q4a4Button = document.querySelector(".answers-list4 .answer4");

//Question 5 variables
var quest5 = document.querySelector(".Q5")
var q5a1Button = document.querySelector(".answers-list5 .answer1");
var q5a2Button = document.querySelector(".answers-list5 .answer2");
var q5a3Button = document.querySelector(".answers-list5 .answer3");
var q5a4Button = document.querySelector(".answers-list5 .answer4");

//Start quiz button
startButton.onclick = ()=>{
    start_quiz.classList.add("activeQuiz");
    quest1.classList.add("activeQ1")
    startTimer(59);
}

restartButton.onclick = ()=>{
    result.classList.add("kill-result");
    start_quiz.classList.add("hideQuiz");
}
function startTimer(time){
    secondsLeft = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        time--;
    }
}
//Question 1 click events
q1a1Button.onclick = ()=>{
    alert("CORRECT!")
    quest1.classList.add("killQ1");
    quest2.classList.add("activeQ2")
    points = points + 10
    console.log(points)
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
    quest3.classList.add("activeQ3");
}
q2a3Button.onclick = ()=>{
    alert("WRONG!")
    quest2.classList.add("killQ2");
    quest3.classList.add("activeQ3");
}
q2a4Button.onclick = ()=>{
    alert("CORRECT!")
    quest2.classList.add("killQ2");
    quest3.classList.add("activeQ3");
    points = points + 10
    console.log(points)
}


//Question 3 events
q3a1Button.onclick = ()=>{
    alert("WRONG!");
    quest3.classList.add("killQ3");
    quest4.classList.add("activeQ4");
}
q3a2Button.onclick = ()=>{
    alert("WRONG!");
    quest3.classList.add("killQ3");
    quest4.classList.add("activeQ4");
}
q3a3Button.onclick = ()=>{
    alert("WRONG!")
    quest3.classList.add("killQ3");
    quest4.classList.add("activeQ4");
}
q3a4Button.onclick = ()=>{
    alert("CORRECT!")
    quest3.classList.add("killQ3");
    quest4.classList.add("activeQ4");
    points = points + 10
    console.log(points)
}


//Question 4 events
q4a1Button.onclick = ()=>{
    alert("WRONG!");
    quest4.classList.add("killQ4");
    quest5.classList.add("activeQ5");
}
q4a2Button.onclick = ()=>{
    alert("CORRECT!")
    quest4.classList.add("killQ4");
    quest5.classList.add("activeQ5");
    points = points + 10
    console.log(points)
}
q4a3Button.onclick = ()=>{
    alert("WRONG!")
    quest4.classList.add("killQ4");
    quest5.classList.add("activeQ5");
}
q4a4Button.onclick = ()=>{
    alert("WRONG!")
    quest4.classList.add("killQ4");
    quest5.classList.add("activeQ5");
}


//Question 5 events
q5a1Button.onclick = ()=>{
    alert("WRONG!");
    quest5.classList.add("killQ5");
    result.classList.add("active-result")
    initials = prompt("Enter Initials")
}
q5a2Button.onclick = ()=>{
    alert("CORRECT!")
    quest5.classList.add("killQ5");
    result.classList.add("active-result")
    points = points + 10
    console.log(points)
    initials = prompt("Enter Initials")
}
q5a3Button.onclick = ()=>{
    alert("WRONG!")
    quest5.classList.add("killQ5");
    result.classList.add("active-result")
    initials = prompt("Enter Initials")
}
q5a4Button.onclick = ()=>{
    alert("WRONG!")
    quest5.classList.add("killQ5");
    result.classList.add("active-result")
    initials = prompt("Enter Initials")
    console.log(initials);
};



