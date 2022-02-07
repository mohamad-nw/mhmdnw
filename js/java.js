/* global $ */


$(function() {
    
    'use strict';
    

    
    // Show Color Box
    
    $(".option-box .fa-cog").on('click', function() {
        
        $(this).parent('.option-box').toggleClass("is-visible");
        
        if($(this).parent('.option-box').hasClass("is-visible")) {
            
          $(this).parent('.option-box').animate({
              
              left:0
              
          },500); 
            
            $("body").animate({
                
                paddingLeft: "200px"
            });
            
        } else 
            {
                $(this).parent('.option-box').animate({
                    
                    left: "-200px"
                },500);
                
            $("body").animate({
                
                paddingLeft: 0
        });
                
            }
        
    });
    
    // Change Color Theme

    
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#27e235").end()
    .eq(2).css("backgroundColor","#d0b11b").end()
    .eq(3).css("backgroundColor","#d23c96");
    
    colorLi.click(function() {
        
        $("link[href*=theme]").attr("href", $(this).attr("data-value"));
    });
    
    // Screen Loading
    
  $(".loading .testing h1").fadeOut(5000, function() {
        
        $(".loading .testing div").css("display","none");
        
        $(".loading").fadeOut(3000)
    });
    
  // Scroll To Top
    
    var scrollTop = $("#scroll-top");
    
    $(window).scroll(function() {
       
        $(this).scrollTop() >= 700 ? scrollTop.fadeIn(1000) : scrollTop.fadeOut(1000);

        
    });
    
    scrollTop.on('click', function () {
            
        $('html,body').animate({scrollTop: 0}, 800);
    });
    
// Shwo The Text From Section Prtifolio
    
    
    
  $(".photo1 button").click(function () {
      
      var showP = $(this).parent().children("p");
   
      showP.slideToggle(700);
      
      
      
      
      
  });
    

    
    
    
});



