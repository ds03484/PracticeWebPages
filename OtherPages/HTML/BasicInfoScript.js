/**
 * Created by Darren on 11/8/14.
 */
$(document).ready(function(){
    //button effects
    $('#Hobbies').click(function(){
        document.location = "/PracticeWebPages/OtherPages/HTML/Hobbies.html";
    });
    $('#GoHome').click(function(){
        window.location = "/PracticeWebPages/LandingPage/HomePage.html";
    });

    //effects for the individual sections of the web page
    $('#clickIntro').click(function(){
        $('#intro').fadeIn("slow");
        $('#college_achievements').fadeOut("fast");
        $('#professional_accomplishments').fadeOut("fast");
        $('#future_goals').fadeOut("fast");
    });
    $('#clickCollege').click(function(){
        $('#college_achievements').fadeIn("slow");
        $('#intro').fadeOut("fast");
        $('#professional_accomplishments').fadeOut("fast");
        $('#future_goals').fadeOut("fast");
    });
    $('#clickProfessional').click(function(){
        $('#professional_accomplishments').fadeIn("slow");
        $('#intro').fadeOut("fast");
        $('#college_achievements').fadeOut("fast");
        $('#future_goals').fadeOut("fast");
    });
    $('#clickFuture').click(function(){
        $('#future_goals').fadeIn("show");
        $('#college_achievements').fadeOut("fast");
        $('#professional_accomplishments').fadeOut("fast");
        $('#intro').fadeOut("fast");
    });

});