/**
 *  Skrulle
 *
 *  By Pelle Bjerkestrand - http://pellebjerkestrand.net/
 *  License: UNLICENSE - http://unlicense.org/
 */

;(function(window, document){
    'use strict';

    var skrulle = {
        up: 'up',
        down: 'down',
        previousScrollY: 0,
        debounce: function(fn, delay) {
            // http://remysharp.com/2010/07/21/throttling-function-calls/
            var timer = null;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            };
        },
        handleScroll: function(oldY, newY){
            if(oldY < newY){
                // scrolling down
                document.documentElement.classList.remove(skrulle.up);
                document.documentElement.classList.add(skrulle.down);
            } else if(oldY > newY) {
                // scrolling up
                document.documentElement.classList.remove(skrulle.down);
                document.documentElement.classList.add(skrulle.up);
            }
            // equal values is a no op

            skrulle.previousScrollY = newY;
        },
        init: function(){
            window.addEventListener('scroll', skrulle.debounce(function(){
                skrulle.handleScroll(skrulle.previousScrollY, window.scrollY);
            }, 150));
        }
    };

    skrulle.init();
})(window, document);