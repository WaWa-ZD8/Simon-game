let buttonColors = ["red", "blue", "green", "yellow"];
let gamePttern = [];
let userClickedPttern = [];
let hasUserInteracted = false;

let level = 0;

function nextSequence(){

  userClickedPttern = [];
  let randomNumber = Math.floor((Math.random()*4));
  let randomChosenColor = buttonColors[randomNumber];

  
  gamePttern.push(randomChosenColor);
  console.log(gamePttern);
  
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  level++;
  $("#level-title").text("Level " + level);

}


$(".btn").on("click", function handler(){
  

  let userChosenColor = $(this).attr("id");
   

   userClickedPttern.push(userChosenColor);
   console.log(userClickedPttern);

   playSound(userChosenColor)
   animatePress(userChosenColor)
   
  checkAnswer(userClickedPttern.length-1);
   
 
}); 


function gameStart(){
  $(document).keydown(function(){
    if(!hasUserInteracted){
      
      hasUserInteracted = true;
      nextSequence()
  
    }
  
  });
}
gameStart()


function playSound(name){

  let audio = new Audio("sounds/"+name+".mp3")
  audio.play()

}

function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");

  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  },150)
}


function checkAnswer(currentLevel){
  if(userClickedPttern[currentLevel] === gamePttern[currentLevel]){
    console.log("success");
  }

  if(userClickedPttern.length === gamePttern.length){
    setTimeout(nextSequence,1800);
  }
  
  if(userClickedPttern[currentLevel] !== gamePttern[currentLevel]){
    playSound("wrong");
    
    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over")
    }, 250);

    $("h1").text("Game over, Press any key to restart");
       startOver()

  }

}

function startOver(){
  gamePttern = [];
  userClickedPttern = [];
  level = 0;
  hasUserInteracted = false;
  
  gameStart()

}

