$( () => { // Module
    console.log('loaded');
    let DATABASE = {user:'', 
    score:0, 
    incorrect:0, 
    correct:0, 
    index:0, 
    question:["Who is Forbe's Richest Man in 2018?", 
    "Which product/service helped revolutionized the smartphone industry?",
    "Which of these is the safest form of passive income?",
    "On average, how many books do CEOs read per year?",
    "Which of these assests can you not get back?",
    "Which CEO began their career as a newspaper delivery boy?"], 
    answers:["Bill Gates", "Elon Musk", "Vladimir Putin", "Jeff Bezos", 
    "iPhone", "Instagram", "Uber", "Airbnb", 
    "Stocks", "Real Estate", "Cryptocurrency", "Freelancing",  
    "20", "50", "100", "75", 
    "Home", "Investments", "Time", "Cars", 
    "Howard Schultz", "Warren Buffet", "Evan Williams", "Ray Kroc"], 
    rightAnsw:["Jeff Bezos", "iPhone", 
    "Real Estate", "50", "Time", "Warren Buffet"]};
// $('header').on("click", function(){
//     $('#thing1').animate({opacity:0, height:0, display:'none'},3000, function(){})
//     $('#thing2').hide(3000)
// });

let questionNum = 1;

let correctAns = DATABASE.correct;

function handleStartButton() {
$('#jsStartButton').on('click', function() {
    $('#startPage').hide();
    $('#questionPage').css('display', 'block');
  });
}

function createQuestion () {
    $('#question').html(DATABASE.question[questionNum-1]);
    $('#ans1').html(DATABASE.answers[(questionNum-1) * 4]);
    $('#ans2').html(DATABASE.answers[((questionNum-1) * 4)+1]);
    $('#ans3').html(DATABASE.answers[((questionNum-1) * 4)+2]);
    $('#ans4').html(DATABASE.answers[((questionNum-1) * 4)+3]);
}

function scoreCounter () {
    correctAns++;
    $('#scoreBoard').html("Score: " + correctAns + "/6");
}

function currentQuestion () {
    questionNum++;
    $('#questionNum').html("Question: " + questionNum + "/6");
}


function correctFeedback () {
    $('#feedbackPage').show();
    $('#Congrats').prepend('<img id="correctFeedback" src="https://media1.giphy.com/media/KySymGAt2SJmE/giphy.gif " alt="Wolf of Wall Street Dance Party" />');
    $('#correct').html('Congratulations! That is correct!');
    $('#incorrect').hide();
    $('#Sorry').hide();
    $('#questionPage').hide();
}

function incorrectFeedback () {
    $('#feedbackPage').show();
    $('#Sorry').prepend('<img id="incorrectFeedback" src="https://media.giphy.com/media/3o6ZsZKbgw4QVWEbzq/giphy.gif " alt="Donald Trump Shaking Head at RNC" />');
    $('#incorrect').html('The correct answer is ' + DATABASE.rightAnsw[questionNum-1]);
    $('#correct').hide();
    $('#Sorry').hide();
    $('#questionPage').hide();
}

function handleSubmitButton () {
$('#jsSubmitButton').on('click', function(e) {
    e.preventDefault();
    const userAnsw = $('input:checked').siblings('span');
        if (userAnsw.html() === DATABASE.rightAnsw[questionNum-1]) {
            correctFeedback();
            scoreCounter();
            $('#Congrats').show();
            $('#correct').show();
            console.log(correctAns);
        } else {
            incorrectFeedback();
            $('#Sorry').show();
            $('#incorrect').show();
        }
});
}

function handleNextButton () {
$('#jsNextButton').on('click', function(e) {
    $('#feedbackPage').hide();
    if(questionNum === 6) {
        finalScore(correctAns);
    } else {
        currentQuestion();
        newQuestion();
        createQuestion();
        console.log(questionNum);
    }
});
}

function newQuestion() {
    $('#questionPage').css('display','block');
}

$('#scoreBoard').html("Score: " + correctAns + "/6");

$('#questionNum').html("Question: " + questionNum + "/6");

function finalScore() {
    $('#finalPage').show();
    $('#scoreBoard').show();
    $('#scoreBoard').html("Score: " + correctAns + "/6");
}

function handleButtons() {
    handleStartButton();
    createQuestion();
    handleSubmitButton();
    handleNextButton();
}

handleButtons();
});