/*
    Project: charLimiter
    Version: 1.1
    Date: 10/01/2013
    Description: Characters Limiter and auto generate Counter if you can.
    Author: Abner Soares Alves Júnior
    GitHub: https://github.com/abnersajr
    Licensed under the MIT license
 */
;
(function($, window, undefined) {
    var pluginName = 'charLimiter',
        document = window.document,
        defaults = {
            counterClass: 'counter',
            generateCounter: false,
            insert: 'after', //'after' || 'before'
            forceLimit: true, //Can user continue writing when max is reached?
            textFormat: '{r}' //Possible tags: r = remaining, c = count, m = maxlength, rs = plurialize {r}, cs = plurialize {c}
        };

    function Plugin(element, options) {
        var e = this.element = element;
        var s = this.options = $.extend({
            maxChars: !$(e).attr('maxlength') ? $(e).data(pluginName.toLowerCase() + "-limit") : $(e).attr('maxlength'), //Get maxChars from atribute maxlength or data element (this can be independent in each elements)
            onCharsFull : function(){}, //Callback when all chars are typed
            onCharsEmpty : function(){} //Callback when no chars are not typed
        }, defaults, options);
        
        // Do not continue if no limit is set for the field
        if(!s.maxChars) {
            return;
        }

        this._defaults = defaults;
        this._name = pluginName;

        this.init(e, s);
    }

    Plugin.prototype.init = function(e, s) {
        var maxChars = s.maxChars;
        if(s.generateCounter === true) {
            //Create cache of auto Counter
            var spCounter = $('<span>', {
                'class': s.counterClass,
                text: maxChars
            });
            $(e).data('sp', spCounter)[s.insert](spCounter);
        } else {
            $(e).each(function() {
                $('.' + s.counterClass + '[data-counter-rel="' + $(this).data('counter-rel') + '"]').html(maxChars);
            });
        }
        $(e).on('keypress keyup keydown change input', function() {
            var outputText;
            
            //Quantity of characters inserted.
            var len = $(this).val().length;
            //Quantity of characters remaining to max.
            var remain = maxChars - len;
            if (len === 0) {
                s.onCharsEmpty(this);
            };
            if (remain === 0) {
                s.onCharsFull(this);
            };
            if(s.forceLimit && len > maxChars) {
                var val = $(this).val();
                $(this).val(val.substr(0, maxChars));
                remain = 0;
            }
            //Insert Auto Counter After or Before
            outputText = s.textFormat
                                    .replace(/{r}/g, remain)
                                    .replace(/{rs}/g, remain > 1 ? 's' : '')
                                    .replace(/{c}/g, len)
                                    .replace(/{cs}/g, len > 1 ? 's' : '')
                                    .replace(/{m}/g, maxChars);
            if(s.generateCounter === true) {
                $(this).data('sp').html(outputText);
            } else {
                //If not auto generated counter add data-counter-rel to do the link between your counter and your textarea or input.
                $('.' + s.counterClass + '[data-counter-rel="' + $(this).data('counter-rel') + '"]').html(outputText);
            }
        }).change();
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if(!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery, window));
