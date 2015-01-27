/**
 * Created by Darren on 11/10/14.
 */

$(document).ready(function(){
    $('#clickVideoGame').click(function(){
        $('#VideoGame').slideDown("slow");
        $('#Boxing').fadeOut("fast");
        $('#PracticeProgramming').fadeOut("fast");
    });

    $('#clickBoxing').click(function(){
        $('#Boxing').slideDown("slow");
        $('#VideoGame').fadeOut("fast");
        $('#PracticeProgramming').fadeOut("fast");
    });

    $('#clickProgramming').click(function(){
        $('#PracticeProgramming').slideDown("slow");
        $('#VideoGame').fadeOut("fast");
        $('#Boxing').fadeOut("fast");
    });


});