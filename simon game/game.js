
    var gamePattern = [];
    var userClickedPattern = [];
    var level = 0;
    var buttonColours = ["red","blue","green","yellow"];
    var started = false;


        $(".btn").click(function(){
            var userChosenColor = $(this).attr("id");
            userClickedPattern.push(userChosenColor);
            playSound(userChosenColor);
            animatePress(userChosenColor);
            checkAnswer(userClickedPattern.length -1)
        });
    


        function nextSequence(){

            userClickedPattern = [];
            var randomNumber = Math.random() * 4;
            randomNumber = Math.floor(randomNumber);
            var randomChosenColour = buttonColours[randomNumber];
            gamePattern.push(randomChosenColour);
            $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
                playSound(randomChosenColour);
                level++;
                $("h1").text("level " + level);
                

        }

    $(document).keypress(function(){
        if (!started){
            nextSequence();
            started = true;
        } 
    });


    function playSound(name){

        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();

    }  

    function animatePress(currentColour){
    
        $("." + currentColour).addClass("pressed");
        setTimeout(function(){
            $("." + currentColour).removeClass("pressed");
        },100);
    }

    function checkAnswer(currentLevel){
        
        if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
            
            if (userClickedPattern.length==gamePattern.length)
                {
                    $("body").addClass("next-level");
                        setTimeout(function () {
                    $("body").removeClass("next-level");
                    },200);
                    $("h1").text("level " + level);
                    setTimeout(function() {
                        nextSequence();
                    },1000);
                    
                }
        }
            
        else{
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            },200);
            startOver();
            $("h1").text("Game Over, Press Any Key to Restart")
            
        }
            
    }

    function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
    }



















