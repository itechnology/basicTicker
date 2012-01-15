/**************************
 * Author : Robert Hoffmann
 * License: MIT
 * Date   : 14/01/12
 * Version: 1.0
 **************************
 * CallBack Usage
 *
 * jQuery(selector).basicTicker(["Some text 1", "Some text 2", "Some text 3"], 2000, function(ele) {
 *      alert("All done");
 * });
 *
 **************************
 * EvenHandler Usage
 *
 * Instead of using the callBack as shown above,
 * you can also subscribe to the eventHandler
 *
 * jQuery(selector).bind("ticker:done", function(e){
 *     alert("All done");
 * });
 *
 **************************/
(function($, undefined) {
    $.fn.basicTicker = function(data, duration, callBack) {
        callBack = callBack || function(e) { };

        if (!$.isArray(data)) {
            return;
        }

        var that = this;

        // replace fadeIn/Out with slideUp/Down, Show/Hide, etc ...
        function tick(data, duration) {
            var item = data.splice(0, 1)[0];

            that
                .text(item)
                .fadeIn(duration)
                .fadeOut(duration, function() {
                    if (data.length > 0) {
                        tick(data, duration);
                    }
                    else {
                        callBack(that);
                        $(that).triggerHandler("ticker:done");
                    }
                });
        }

        tick(data, duration);
        return that;
    };
})(jQuery);