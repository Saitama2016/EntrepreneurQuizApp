$(function () {
    console.log('loaded');
    let DATABASE = {user:'', 
    score:0, 
    incorrect:0, 
    correct:0, 
    index:0, 
    question:["Who is Forbe's Richest Man in 2018?", 
    "Which major company was founded by Larry Page and Sergey Brin?",
    "Which product/service helped revolutionized the smartphone industry?",
    "Which of these do you not need to be successful in business?",
    "Which of these is the safest form of passive income?",
    "What is the tax rate for a 1099 income?",
    "Which company failed to purchase Netflix and were forced to go out of business?",
    "On average, how many books do CEOs read per year?",
    "Which of these assests can you not get back?",
    "Which CEO began their career as a newspaper delivery boy?"], 
    answers:["Bill Gates", "Elon Musk", "Warren Buffet", "Jeff Bezos", 
    "Amazon", "Google", "Apple", "IBM", "iPhone", "Instagram", "Uber", "Airbnb",
"Mentors", "Books", "Time", "Distractions", "Stocks", "Real Estate", "Cryptocurrency",
"Freelancing", "15.3%", "7.65%", "25%", "2.9%", "Toys 'R' Us", "Kodak", "Radio Shack",
"Blockbuster", "20", "50", "100", "75", "Home", "Investments", "Time", "Cars", "Howard Schultz",
"Warren Buffet", "Evan Williams", "Ray Kroc"], 
    rightAnsw:["Jeff Bezos", "Google", "iPhone", "Distractions", 
    "Real Estate", "15.3%", "Blockbuster", "50", "Time", "Warren Buffet"]};
// $('header').on("click", function(){
//     $('#thing1').animate({opacity:0, height:0, display:'none'},3000, function(){})
//     $('#thing2').hide(3000)
// });

$('#jsStartButton').on('click', function() {
    console.log('clicked!');
    $('#startPage').hide();
    $('#questionPage').css('display', 'block');
    // $('form:nth-child(1)').css('display', 'block');
  });

function createQuestion () {
    console.log(DATABASE);
    $('#question').html(DATABASE.question[0]);
    $('#ans1').html(DATABASE.answers[0]);
    $('#ans2').html(DATABASE.answers[1]);
    $('#ans3').html(DATABASE.answers[2]);
    $('#ans4').html(DATABASE.answers[3]);
}

$('#scoreBoard').html("Score: " + DATABASE.score + "/10");

$('#questionNum').html("Question: " + DATABASE.index + "/10");

$('#jsSubmitButton').on('click', function() {
    console.log('Answered!');
    alert('Please select an answer')
    // if (1 == 1) {
    // $('#questionPage').hide();
    // $('#feedbackPage').css('display', 'block');
    // }
});

// $('#finalScore')

createQuestion();
});