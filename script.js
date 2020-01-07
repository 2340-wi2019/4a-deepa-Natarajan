$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("Pen");   
            myFavoriteThings.push("LapTop"); 
            myFavoriteThings.push("Plants"); 
            myFavoriteThings.push("Fish"); 

        //decision structure 
        if (letterGrade=='A'){      
            $("#decision-holder").text("A-90% to 100%");
        }else if (letterGrade=='B'){
            $("#decision-holder").text("B-80% to 90%")
        }else if (letterGrade== 'C'){
            $("#decision-holder").text("C-70% to 80%")
        }else if (letterGrade== 'D'){
            $("#decision-holder").text("D-60% to 70%")
        }else if (letterGrade== 'F'){
            $("#decision-holder").text("F-Less than 60%")
        }else{

            $("#decision-holder").text("Error! Invalid value entered!")
        }
        //......End decision structure 
       
        //While Loop begins
             var counter=0;
             while(counter < myFavoriteThings.length){
             $('#loop-output').append(myFavoriteThings[counter]+ "<br>");
             counter++;
        }
        //...End While Loop


        // jQuery .each() method to loop through

                $.each(myFavoriteThings,function(i,thing){
                $("#each-output").append(thing + "<br>");
         })
        //End JQuery method...
                   

    });
});
