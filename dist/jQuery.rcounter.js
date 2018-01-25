(function($){
    'use strict';
    $.fn.rCounter = function(options){
        var settings = $.extend({
            duration : 4000,
            easing: 'swing',
        },options);
        return this.each(function(){
            var $this = $(this);
            var length = $this.length;
            $({Counter : 0}).animate(
                {Counter:$this.text()},
                {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function(){
                        $this.text(Math.ceil(this.Counter));
                    }
                }
            )
        });

        
    }

}(jQuery));
