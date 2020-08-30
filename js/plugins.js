/* global $, JQuery , alert */

$(document).ready( function (){

    "use strict";

    // Nice Scroll 

    $("html").niceScroll();

    $('.carousel').carousel({
        interval: 4000
    });

    // Show Color Option When Click on the gear

    $('.gear-check').click(function (){

        $('.color-option').fadeToggle();

    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    //

    colorLi.click(function (){

        $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    });

    //Caching The Scroll Top Element

    var scrollButtun = $("#scroll-top");

    $(window).scroll(function (){

        $(this).scrollTop() >= 700 ? scrollButtun.show() : scrollButtun.hide();
    });

        // Click On Button To Scroll Top

        scrollButtun.click( function (){
            $("html,body").animate({scrollTop:0},1000);
        });
});

// Loading Screen

$(window).load( function (){

    // Loading Elements

    $(".loading-overlay .spinner").fadeOut(1000, 
    function (){

            // Show The Scroll

            $("body").css("overflow","auto");

            $(this).parent().fadeOut(2000,
            function(){


            $(this).remove();
            });

    });

});