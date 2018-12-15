/**
 * 
 * JS Portfolio
 *  
 * @author Edouard Diep
 */

$(document).ready(function(){

     // action when refreshing html page
    $(this).scrollTop(0);
    
  // typing animation
  (function($) {
    $.fn.delay(3000).writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
    
  })(jQuery);


  // input text for typing animation 
  $("#titleHolder").writeText("Hello ! I am Edouard");


  // input text for typing animation 
  setTimeout(function(){
    $("#pHolder").delay(200).writeText("A Full Stack developer");
  }, 1500);


    // main variables
    var dev = $('.development-wrapper');
    var width = $(window).width();
    var lineProgressVisible = false;


    // logo loading animation
    $('.navbar .logo').delay(100).animate({
        'top':'0.3vw',
        'left':'0.3vw',
        'opacity':'0.9',
        'zoom':'3',
        'transform'                : 'scale(3)',
        'transform-origin'         : '0 0',
        '-moz-transform-origin'    : '0 0',         /*Firefox*/
        '-ms-transform-origin'     : '0 0',         /*IE*/
        '-webkit-transform-origin' : '0 0',         /*Opera/Safari*/
        '-moz-transform'           : 'scale(3)', /*Firefox*/
        '-ms-transform'            : 'scale(3)', /*IE*/
        '-webkit-transform'        : 'scale(3)'  /*Opera/Safari*/
    },1500);

    // ul loading animation
    $('.navbar ul').delay(300).animate({
        'opacity':'1',
        'top': '0',
        'left':'0'
    },800);


    // welcome loading animation
    $('.mainPage .content .welcome-wrapper').animate({
        'opacity':'1'
    },500);
   

    /****** SCROLLING ANIMATION WITH CLICK ON NAVBAR ******/

    //store internal links in a variable
    var $clickedNavLinks = $('a[href^="#"]');
    //smooth scrolling on clicking navigation link
    if(width >= 768){
        $clickedNavLinks.on('click', function(e) {
            //find the links and the clicked link
            var target = this.hash,
                    $target = $(target),
                    $navLinks = $('.navbar a');
            //stop default link behaviour
            e.preventDefault();
            //do the scrolling
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $target.outerHeight()/6
            }, 1200, 'swing');
        });
    } else {
        $clickedNavLinks.on('touchstart mouseenter focus', function(e) {
            //find the links and the clicked link
            var target = this.hash,
                    $target = $(target),
                    $navLinks = $('.navbar a');
            //stop default link behaviour
            if(e.type == 'touchstart'){
                e.stopImmediatePropagation();
                e.preventDefault();
            }
            //do the scrolling
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1200, 'swing');
        });
    }

    $('body').scroll(function(){
       
        var bottom_of_window = $(this).scrollTop() + $(this).outerHeight()/2.5;

        // SECTION EXPERIENCE

        $('.experience .content .hidden').each( function(i){

            var bottom_of_object = $(this).offset().top - $(this).outerHeight();

            console.log("BOTTOM OF WINDOW = "+bottom_of_window);
            console.log("BOTTOM OF EXPERIENCE = "+bottom_of_object);

            /* If the object is completely visible in the window, fadeIn it */
            
          
            if( bottom_of_window > bottom_of_object){
              $(this).animate({
                'opacity':'1',
                'margin-left': '0',
              },1000);
            }
        });
  
        // SECTION SKILLS IT

        var middle_dev_scroll = dev.offset().top - dev.outerHeight()/2.5;
        console.log("BOTTOM OF SKILLS = "+middle_dev_scroll);


        if((bottom_of_window > middle_dev_scroll) && lineProgressVisible == false){
            // Managing bars line load
            $('.skills-bar-container li').each( function(){
                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;
        
                var id = setInterval(frame, 30);
        
                function frame() {
                  if (width >= dataPercent) {
                      clearInterval(id);
                  } else {
                    width++;
                    elem.css("width", width+"%");
                    percent.html(width+" %");
                  }
                }
              });
              lineProgressVisible = true;
        }

        $('.img-portfolio').each(function(){
 
            if(bottom_of_window > middle_dev_scroll){
                if(width > 1024){
                    $(this).animate({
                        'opacity':'1',
                        'zoom': '2.2',
                        '-moz-transform':'scale(2.2)'
                    },1000);
                } else {
                    $(this).animate({
                        'opacity':'1',
                        'zoom': '1.3',
                        '-moz-transform':'scale(1.3)'
                    },1000);
                }
            }
        });
    });
});
