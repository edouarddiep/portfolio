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
if(6 <= n && n <= 18){
    $("#first-part-writer").writeText("Bonjour !");
} else {
    $("#first-part-writer").writeText("Bonsoir !");
}

setTimeout(function(){
    $("#sec-part-writer").delay(600).writeText("Je suis Edouard");
}, 600);


// input text for typing animation 
setTimeout(function(){
    $("#last-part-writer").delay(1000).writeText("un développeur Full Stack");
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
        'letter-spacing':'6vw'
    },1000);

    // welcome loading animation
    $('.mainPage .content .last-part-writer').delay(1700).animate({
        'opacity':'1'
    },700);

    // objectif wrapper animation
    $('.mainPage .content .description-wrapper .objectif-wrapper').delay(3500).animate({
        'opacity':'1',
        'padding-top':'15px'
    },1500);

    /****** SCROLLING ANIMATION WITH CLICK ON NAVBAR ******/

    // Cache selectors
    var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight()+1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation

    if(width <= 812){
        menuItems.on('touchstart mouseenter focus', function (e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 850);
            e.preventDefault();
        });
    }

    // Bind to scroll

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

        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        
        if (lastId !== id) {
            console.log(id);
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("active")
            .end()
            .filter("[href=\"#"+id+"\"]")
            .parent().addClass("active");
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
        
                // ANIMATION LOGOS IT & PROGRESS BARS 
                function frame() {
                    if(width > 10){
                        for(let i=0;i<=17;i++){
                            setTimeout(function() { 
                                $('#skill'+i).animate({
                                    'opacity':'1',
                                    'left':'0',
                                },1500);  
                            }, i*80);
                        }
                    }
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

        // ANIMATION IMAGES INTÉRETS
        $('.grid-interests div').each(function(){
            if(bottom_of_window > middle_dev_scroll){
                for(let i=0;i<3;i++){
                    if(width > 2200){
                        setTimeout(function(){
                            $('#interest'+i).animate({
                                'opacity':'1',
                                'zoom': '2.8',
                                '-moz-transform':'scale(2.8)'
                            },800);         
                        }, i*350);
                    }
                    else if(width > 1024){
                        setTimeout(function(){
                            $('#interest'+i).animate({
                                'opacity':'1',
                                'zoom': '2.2',
                                '-moz-transform':'scale(2.2)'
                            },1000);
                        }, i*80);
                    } else {
                        setTimeout(function(){
                            $('#interest'+i).animate({
                                'opacity':'1',
                                'zoom': '1.3',
                                '-moz-transform':'scale(1.3)'
                            },1000);
                        }, i*80);
                    }
                }
            }
        });

        // ANIMATION IMAGES PORTFOLIO
        $('.grid-portfolio .div-portfolio').each(function(){
            var bottom_of_object = $(this).offset().top - $(this).outerHeight();
            if(bottom_of_window > middle_dev_scroll){
                for(let i=0;i<3;i++){
                    if(width > 2200){
                        setTimeout(function(){
                            $('#portfolio'+i).delay(1000).animate({
                                'opacity':'1',
                                'zoom': '1.2',
                                '-moz-transform':'scale(2.8)',
                                'margin-top':'20px'
                            },800);         
                        }, i*350);
                    }
                    else if(width > 1024){
                        setTimeout(function(){
                            $('#portfolio'+i).delay(1000).animate({
                                'opacity':'1',
                                'zoom': '1.1',
                                '-moz-transform':'scale(2.2)',
                                'margin-top':'20px'
                            },1000);
                        }, i*80);
                    } else {
                        console.log("bottom of object : "+bottom_of_object);
                        console.log("bottom of window : "+bottom_of_window);
                        if(bottom_of_window > bottom_of_object){
                            $(this).animate({
                                'opacity':'1',
                                'zoom': '1.1',
                                '-moz-transform':'scale(1.1)'
                            },1000);
                        }
                    }
                }
            }
        });
    });
});
