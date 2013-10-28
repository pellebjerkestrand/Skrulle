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
            init: function(){
                $.extend(skrulle.settings, defaults, options);

                $(window).on('scroll', function(){
                    if(!skrulle.element){
                        skrulle.element = $(skrulle.settings.selector);
                        skrulle.previousScrollTop = $this.scrollTop();
                    }

                    if(skrulle.previousScrollTop < $this.scrollTop()){
                        // scrolling down
                        skrulle.element
                            .removeClass(skrulle.settings.up)
                            .addClass(skrulle.settings.down);
                    } else {
                        // scrolling up
                        skrulle.element
                            .removeClass(skrulle.settings.down)
                            .addClass(skrulle.settings.up);
                    }

                    skrulle.previousScrollTop = $this.scrollTop();
                });
            }
        };

        skrulle.init();

        return $this;
    };
})(jQuery);