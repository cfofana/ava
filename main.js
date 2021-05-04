$(function() {
    // cache the window object
   var $window = $(window);
    
    // parallax effect
    $('section[data-type="background"]').each(function() {
       var $bgObj = $(this);
        $window.scroll(function() {
           // scroll the background at var speed
            // the yPos is a negative value because its scrolling up
            var yPos = -($window.scrollTop() / $bgObj.data('speed'));
            
            // put the final background position
            var coords = '50% ' + yPos + 'px';
            
            // move the background
            $bgObj.css({backgroundPosition: coords});
        }); // end window scroll
    });
});

var copyrightDate = document.querySelector('.copyright');
copyrightDate.innerHTML = new Date().getFullYear();