;(function(window, document){
    'use strict';

    var skrulle = {
        up: 'up',
        down: 'down',
        previousScrollY: 0,
        init: function(){
            window.addEventListener('scroll', function(){
                if(skrulle.previousScrollY < window.scrollY){
                    // scrolling down
                    document.documentElement.classList.remove(skrulle.up);
                    document.documentElement.classList.add(skrulle.down);
                } else {
                    // scrolling up
                    document.documentElement.classList.remove(skrulle.down);
                    document.documentElement.classList.add(skrulle.up);
                }

                skrulle.previousScrollY = window.scrollY;
            });
        }
    };

    skrulle.init();
})(window, document);