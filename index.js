$(function () {
    console.log('loaded');
    let DATABASE = {user:'', score:0, incorrect:0, correct:0, index:0, question:[], answers:[] };
$('header').on("click", function(){
    $('#thing1').animate({opacity:0, height:0, display:'none'},3000, function(){})
    $('#thing2').hide(3000)
});
});

$('#jsStartButton').on('click', function(){
    console.log('clicked!')
    $('#startPage').remove();
    $('#questionPage').css('display', 'block');
    $('form:nth-child(1)').css('display', 'block');
  });

function createQuestion (correctAns, question, answeredQuest) {
    return `
    <section id="questionPage" role="main">
    <h3 id="question">${question.quest}</h3>
      
      <form>
        <fieldset>
          <label>
            <input class="answer" type="radio" name="option" required></input>
            <span>Bill Gates</span>
          </label>
        
          <label>
            <input class="answer" type="radio" name="option" ></input>
            <span>Elon Musk</span>
          </label>
        
          <label>
            <input class="answer" type="radio" name="option" ></input>
            <span>Warren Buffet</span>
          </label>
        
          <label>
            <input class="answer" type="radio" name="option" ></input>
            <span>Jeff Bezos</span>
          </label>
          </fieldset>
          <button id="jsSubmitButton">Submit</button>
      </form>
      
    <div id="progressBar">
      <span id="questionNum">Question: 0/10 </span>
      <span id="scoreBoard">Score: 0/10 </span>
    </div>
    </section> `
}