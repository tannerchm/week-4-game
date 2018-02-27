$(document).ready(function() {
    // equation that goes into the desired quanity box at the beginning of script
    var randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#rand-num-html").html(randomNumber);
    // shorthand to add math function to each button ***** Which did not work *****
    // function buttonMath() {
    //  Math.floor(Math.random() * 12) + 1;}
    // giving random numbers to each button
    var butt1 = Math.floor(Math.random() * 12) + 1;
    var butt2 = Math.floor(Math.random() * 12) + 1;
    var butt3 = Math.floor(Math.random() * 12) + 1;
    var butt4 = Math.floor(Math.random() * 12) + 1;
    // user input
    var userNum = 0;
    var wins = 0;
    var losses = 0;

    // button clicks
 
    $("#button-1").on ("click", function(){
        userNum = userNum + butt1;
           $("#user-total").text(userNum); 
               if (userNum == randomNumber){
                     winAlert();
               }
               else if (userNum > randomNumber){
                    loseAlert();
               }   
             })  


             $("#button-2").on ("click", function(){
                userNum = userNum + butt2;
                   $("#user-total").text(userNum); 
                       if (userNum == randomNumber){
                             winAlert();
                       }
                       else if (userNum > randomNumber){
                            loseAlert();
                       }   
                     })  

                     $("#button-3").on ("click", function(){
                        userNum = userNum + butt3;
                           $("#user-total").text(userNum); 
                               if (userNum == randomNumber){
                                     winAlert();
                               }
                               else if (userNum > randomNumber){
                                    loseAlert();
                               }   
                             })  

                             
                             $("#button-4").on ("click", function(){
                                userNum = userNum + butt4;
                                   $("#user-total").text(userNum); 
                                       if (userNum == randomNumber){
                                             winAlert();
                                       }
                                       else if (userNum > randomNumber){
                                            loseAlert();
                                       }   
                                     })  


                                     

    function reset() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#rand-num-html").html(randomNumber);
        butt1 = Math.floor(Math.random() * 12) + 1;
        butt2 = Math.floor(Math.random() * 12) + 1;
        butt3 = Math.floor(Math.random() * 12) + 1;
        butt4 = Math.floor(Math.random() * 12) + 1;
        userNum=0;
        $("#user-total").html(userNum);
    }
    function winAlert() {
        alert("You've matched Indy's value!");
        wins++;
        $("#wins").html(wins);
        reset();
    }                        
    function loseAlert() {
        alert("You were unable to complete Indy's mission.")
        losses++;
        $("#losses").html(losses);
        reset();
    }

// ****** This was supposed to be my game termination script that would alert loss unless it was more than 2 in which case it would switch to my hard reset script which does not work*********
    // var loseAlert 
        // if (losses < 3) {
            // alert("You were unable to complete Indy's mission.")
            //  losses++;
                // $("#losses").html(losses);
            // reset();
    // }
        // else {
        // hardReset()
    // }


    function hardReset() {
        alert("You have failed Indiana Jones! You are now cursed for the rest of eternity.")
        randomNumber = Math.floor(Math.random() * 120) +19;
        $("#rand-num-html").html(randomNumber);
        butt1 = Math.floor(Math.random() * 12) + 1; 
        butt2 = Math.floor(Math.random() * 12) + 1;
        butt3 = Math.floor(Math.random() * 12) + 1;
        butt4 = Math.floor(Math.random() * 12) + 1;
        userNum=0;
        $("#user-total").html(0);

    }
    function finalLoss() {
        if ("#losses" == 3);
        hardReset();
    }


                            })
