$(function() {

    var startposition = [ "40px" , "20px" , "0px"];
    var speedup = 2500;
    var lifes = 13;
    var stonetries = 0;
    var kangarootries = 0;




    function repeat() {
        stonetries++;
        speedup -= 80;
        var randomnumber = Math.floor(Math.random() * 3);

        $('.resource:nth-child(2)').css('right', 0);
        $('.resource:nth-child(2)').css('bottom', startposition[randomnumber]);
        $('.resource:nth-child(2)').animate({
            right : 405
        }, speedup, function (){
            repeat();
        });

        hitcheck(randomnumber);



        if (stonetries == 20 || lifes == 0) {
            $('.resource:nth-child(2)').stop(true);
            if (stonetries == 20 && lifes != 0) {
                $('#retry').html("You win!");
                $('#WinOrLoose').css('display','initial');
            }else {
                $('#retry').html("You loose!");
                $('#WinOrLoose').css('display','initial');
            }
        }
        if (stonetries < 21) {
            $('#shots').html("Stones:"+(20 - stonetries));
        }


    }
    repeat();

    function kangaroojump() {
        if ($('.resource:first-child').css('bottom') == "0px") {
            kangarootries++;
            $('.resource:first-child').animate({
                bottom: 70
            }, 400, function () {
                $('.resource:first-child').animate({
                    bottom: 0
                }, 400);
            });
        }
        if (kangarootries == 20) {
            $('.resource:nth-child(2)').stop(true);
            $('#retry').html("You loose!");
            $('#WinOrLoose').css('display','initial');
        }
        if (kangarootries < 21 && stonetries != 20) {
            $('#jump').html("Jumps:"+(20 - kangarootries));
        }
    }

    function kangarooduck() {
        if ($('.resource:first-child').css('bottom') == "0px") {
            kangarootries++;
            $('.resource:first-child').animate({
                bottom: -35
            }, 400, function () {
                $('.resource:first-child').animate({
                    bottom: 0
                }, 400);
            });
        }
        if (kangarootries == 20) {
            $('.resource:nth-child(2)').stop(true);
            $('#retry').html("You loose!");
            $('#WinOrLoose').css('display','initial');
        }
        if (kangarootries < 21 && stonetries != 20) {
            $('#jump').html("Jumps:"+(20 - kangarootries));
        }

    }

    function hitcheck(randomnumber) {
        var kangaroobottom = $('.resource:first-child').css('bottom');
        var colissionval1 = parseInt(kangaroobottom);
        var colissionval2 = parseInt(startposition[randomnumber]);

        if (randomnumber == 1 || randomnumber == 2) {
            if (colissionval1 <= colissionval2) {
                --lifes;
                $('#lifes').html("Lifes:" + lifes);
            }
        }
        if (randomnumber == 0) {
            if (colissionval1 >= 0) {
                --lifes;
                $('#lifes').html("Lifes:" + lifes);
            }
        }


    }


    $('html').on('keypress',function(e){
        if (e.which == 32 ) {
            kangaroojump();
        }
    });
    $('html').on('keydown',function(e){
        if (e.which == 38 ) {
            kangaroojump();
        }
        if (e.which == 40) {
            kangarooduck();
        }
    });
    $('html').on('mousedown',function(e){
        if (e.which == 1 ) {
            kangaroojump();
        }
    });




    $('button').on('mouseover',function() {
        $('#controls').toggle();


    });





});/**
 * Created by user on 8/15/16.
 */
