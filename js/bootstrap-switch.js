/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

    "use strict"; // jshint ;_;

    var isIE7 = ($.browser && $.browser.version === 7) || $('html').hasClass('lt-ie8');

    /* Switch PUBLIC CLASS DEFINITION
    * =============================== */

    var Switch = function (element, options) {
        this.init(element, options)
    };

     Switch.prototype = {

        constructor: Switch,

        init: function (element, options) {
            this.$element = $(element)
            this.options = options;

            this.$element.wrap('<label class="switch"></label>').after('<div class="track"><div class="knob"></div></div>');
        }
    };

    /* CHECKBOX PLUGIN DEFINITION
    * ========================= */

    var old = $.fn.checkbox;

    $.fn.svitch = function ( option ) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('checkbox')
                , options = typeof option == 'object' && option;

            if (!data) $this.data('checkbox', (data = new Switch(this, options)))
            if (typeof option == 'string') data[option]()
        });
    };

    $(document).on('change', '.switch > input[type="checkbox"]', function() {
        var $this = $(this),
                checked = $this.is(':checked');

        $this[checked ? 'addClass' : 'removeClass']('checked');

        //http://stackoverflow.com/questions/11935581/adjacent-sibling-selector-not-working-with-dynamically-added-class-in-ie7-8
        isIE7 && $this.parent().addClass('dummyclass').removeClass('dummyclass');

    });

}(window.jQuery);