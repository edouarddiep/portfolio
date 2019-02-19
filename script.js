/**
 * 
 * JS Portfolio
 *  
 * @author Edouard Diep
 */

$(document).ready(function(){

    // main variables
    var dev = $('.development-wrapper');
    var width = $(window).width();
    var lineProgressVisible = false;
    var d = new Date();
    var n = d.getHours();

    // action when refreshing html page
$(this).scrollTop(0);

// typing animation
(function($) {
$.fn.delay(1000).writeText = function(content) {
    var contentArray = content.split(""),
        current = 0,
        elem = this;
    setInterval(function() {
        if(current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
        }
    }, 60);
};

})(jQuery);


// input text for typing animation 
if(n<18){
    $("#first-part-writer").writeText("Bonjour !");
} else {
    $("#first-part-writer").writeText("Bonsoir !");
}

setTimeout(function(){
    $("#sec-part-writer").delay(600).writeText("Je suis Edouard");
}, 600);


// input text for typing animation 
setTimeout(function(){
    $("#last-part-writer").delay(1000).writeText("Un développeur Full Stack");
}, 2000);




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
        'left':'0',
        'letter-spacing':'7vw'
    },1000);


    // welcome loading animation
    $('.mainPage .content .last-part-writer').delay(1700).animate({
        'opacity':'1'
    },700);

    // objectif wrapper animation
    $('.mainPage .content .description-wrapper .objectif-wrapper').delay(3500).animate({
        'opacity':'1',
        'padding-top':'25px'
    },1500);

    /****** SCROLLING ANIMATION WITH CLICK ON NAVBAR ******/

    //store internal links in a variable
    var $clickedNavLinks = $('a[href^="#"]');
    //smooth scrolling on clicking navigation link
    if(width >= 812){
        $clickedNavLinks.on('click', function(e) {
            //find the links and the clicked link
            var offset = 200

            //stop default link behaviour
            e.stopImmediatePropagation();
            e.preventDefault();
            //do the scrolling
            $('html, body').stop().animate({
                'scrollTop': $(this.hash).offset().top - offset
            }, 1200, 'swing', function(){
                window.location.hash = this.hash;
            });
        });
    } else {
        $clickedNavLinks.on('touchstart mouseenter focus', function(e) {
            //find the links and the clicked link
            var offset = 50

            //stop default link behaviour
            if(e.type == 'touchstart'){
                e.stopImmediatePropagation();
                e.preventDefault();
            }
            //do the scrolling
            $('html, body').stop().animate({
                'scrollTop': $(this.hash).offset().top - offset
            }, 1200, 'swing', function(){
                window.location.hash = this.hash;
            });
        });
    }

    $('body').scroll(function(){
        var bottom_of_window = $(this).scrollTop() + $(this).outerHeight()/2.5;

        // SECTION EXPERIENCE

        $('.experience .content .hidden').each( function(i){

            var bottom_of_object = $(this).offset().top - $(this).outerHeight();

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
