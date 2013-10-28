/**
 *  jQuery Skrulle
 *
 *  By Pelle Bjerkestrand - http://pellebjerkestrand.net/
 *  License: UNLICENSE - http://unlicense.org/
 */

;(function($){
    'use strict';

    $.fn.skrulle = function(options){
        if(this.length === 0){
            return this;
        }

        if(this.length > 1){
            this.each(function(){
                $(this).skrulle(options);
            });

            return this;
        }

        var $this = $(this);

        var defaults = {
            selector: 'body',
            up: 'up',
            down: 'down'
        };

        var skrulle = {
            settings: {},
            previousScrollTop: 0,
            element: null,
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
                    skrulle.element
                        .removeClass(skrulle.settings.up)
                        .addClass(skrulle.settings.down);
                } else if (oldY > newY){
                    // scrolling up
                    skrulle.element
                        .removeClass(skrulle.settings.down)
                        .addClass(skrulle.settings.up);
                }

                skrulle.previousScrollTop = newY;
            },
            init: function(){
                $.extend(skrulle.settings, defaults, options);

                if(!skrulle.element){
                    skrulle.element = $(skrulle.settings.selector);
                    skrulle.previousScrollTop = $this.scrollTop();
                }

                $(window).on('scroll', skrulle.debounce(function(){
                    skrulle.handleScroll(skrulle.previousScrollTop, $this.scrollTop());
                }, 150));
            }
        };

        skrulle.init();

        return $this;
    };
})(jQuery);