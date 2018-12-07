/**
 * 
 * JS Portfolio
 *  
 * @author Edouard Diep
 */

$(document).ready(function(){

     // action when refreshing html page
    $(this).scrollTop(0);
    
    // main variables
    var dev = $('.development-wrapper');
    var width = $(window).width();
    var lineProgressVisible = false;

    // logo loading animation
    $('.navbar .logo').delay(100).animate({
        'top':'0.3vw',
        'left':'0.3vw',
        'opacity':'0.9',
        'zoom':'3'
    },1500);

    // ul loading animation
    $('.navbar ul').delay(300).animate({
        'opacity':'1',
        'top': '0',
        'left':'0'
    },800);


    // welcome loading animation
    $('.about .content .welcome-wrapper').delay(800).animate({
        'opacity':'1',
        'top': '25%'
      },800);

    $('#navabout').click(function(){
        if(width >= 768){ // PC & Tablets animation
            welcome.style.left = "-80%";
            welcome.style.opacity = 0;
            welcome.style.transition = "all 2s ease";
            objectif.style.left = "15%";
            objectif.style.transition = "all 1.5s ease";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 1;
            aboutText.style.opacity = 1;
            aboutText.style.transition = "all 2s ease";   
        } else { // Mobile animation
            welcome.style.top = "-80%";
            welcome.style.opacity = 0;
            welcome.style.transition = "all 2s ease";
            objectif.style.top = "0";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 1;
            objectif.style.transition = "all 1s ease";
            aboutText.style.opacity = 1;
            aboutText.style.transition = "all 3s ease"
        }
    });

    $('.welcome-wrapper').click(function(){
        if(width >= 768){ // PC & Tablets animation
            welcome.style.left = "-80%";
            welcome.style.opacity = 0;
            welcome.style.transition = "all 2s ease";
            objectif.style.left = "15%";
            objectif.style.transition = "all 1.5s ease";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 1;
            aboutText.style.opacity = 1;
            aboutText.style.transition = "all 2s ease";
        } else { // Mobile animation
            welcome.style.top = "-80%";
            welcome.style.opacity = 0;
            welcome.style.transition = "all 2s ease";
            objectif.style.top = "0";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 1;
            objectif.style.transition = "all 1s ease";
            aboutText.style.opacity = 1;
            aboutText.style.transition = "all 3s ease"
        }
    });

    $('.description-wrapper').click(function(){
        if(width >= 768){ // PC & Tablets animation
            welcome.style.left = "25%";
            welcome.style.opacity = 1;
            welcome.style.transition = "all 1.5s ease";
            objectif.style.left = "-80%";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 0;
            objectif.style.transition = "all 2s ease";
            aboutText.style.opacity = 0;
            aboutText.style.transition = "all 1s ease";
        } else { // Mobile animation
            welcome.style.top = "35%";
            welcome.style.opacity = 1;
            welcome.style.transition = "all 1.5s ease";
            objectif.style.top = "-300%";
            objectif.style.cursor = "pointer";
            objectif.style.opacity = 0;
            objectif.style.transition = "all 1s ease";
            aboutText.style.opacity = 0;
            aboutText.style.transition = "all 1.2s ease";
        }

    });

    /****** SCROLLING ANIMATION WITH CLICK ON NAVBAR ******/

    //store internal links in a variable
    var $clickedNavLinks = $('a[href^="#"]');
    //smooth scrolling on clicking navigation link
    $clickedNavLinks.on('tap click', function(e) {
        //find the links and the clicked link
        var target = this.hash,
                $target = $(target),
                $navLinks = $('.navbar a');
        //stop default link behaviour
        e.preventDefault();
        var diff = 0;
        if(width >= 768){
            diff = $target.outerHeight()/6;
        } else {
            diff = 0;
        }

            //do the scrolling
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - diff
            }, 1200, 'swing');
    });

    $(window).scroll(function(){
        
        var bottom_of_window = $(this).scrollTop() + $(this).height()/2.5;

        // SECTION EXPERIENCE

        $('.experience .content .hidden').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight()*2.2;

            /* If the object is completely visible in the window, fadeIn it */
            
          
            if( bottom_of_window > bottom_of_object){
              $(this).animate({
                'opacity':'1',
                'margin-left': '0',
              },1000);
            }
        });
  
        // SECTION SKILLS IT

        var middle_dev_scroll = dev.offset().top + dev.outerHeight(true)*2;

        if((bottom_of_window > middle_dev_scroll) && lineProgressVisible == false){
            // Managing bars line load
            $('.skills-bar-container li').each( function(){
                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;
        
                var id = setInterval(frame, 25);
        
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

            var bottom_of_object = dev.offset().top + dev.outerHeight(true)*2.5;
 
            if(bottom_of_window > bottom_of_object){
                if(width > 1024){
                    $(this).animate({
                        'opacity':'1',
                        'zoom': '2.2'
                      },1000);
                } else {
                    $(this).animate({
                        'opacity':'1',
                        'zoom': '1.2'
                      },1000);
                }
            }
        });
    });
});
