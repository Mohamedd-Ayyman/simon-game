var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false;
keyboard();

$(".btn").on("click" , function (){
  var userChosenColour = $(this).attr("id"); 
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
} 
)


function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}


function animatePress(currentColour){
 $("#" + currentColour).addClass("pressed")
 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(100).then(() => { $("#" + currentColour).removeClass("pressed"); });

}



function nextSequence(){
  userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * (4))
    var randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)
    console.log(gamePattern)
    
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour)
 $("h1").text(level)
 level++;
}

function keyboard() {
  $(document).on("keydown", function() {
    if (!started) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }
  }
  else{
      playSound("wrong")
      $("body").addClass(".game-over")
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      sleep(100).then(() => {  $("body").removeClass(".game-over")});
      const Sentences = [ "Game Over!" , "Oh Noo!" , "Let's try again"]
      var nummm = Math.floor(Math.random() * 3)
      $("h1").text(Sentences[nummm] + ". press any key on keyboard to start again")
      startOver()
  }

}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  keyboard();
}