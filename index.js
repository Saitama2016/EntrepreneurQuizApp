$(function () {
    console.log('loaded');
    let DATABASE = {user:'', 
    score:0, 
    incorrect:0, 
    correct:0, 
    index:0, 
    question:["Who is Forbe's Richest Man in 2018?", ""], 
    answers:["Bill Gates", "Elon Musk", "Warren Buffet", "Jeff Bezos", 
    ""] };
// $('header').on("click", function(){
//     $('#thing1').animate({opacity:0, height:0, display:'none'},3000, function(){})
//     $('#thing2').hide(3000)
// });

$('#jsStartButton').on('click', function() {
    console.log('clicked!')
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
createQuestion();
});