+function (exports) {
    if (typeof window === 'undefined') {
        module.exports = exports;
    } else {
        return exports(window.jQuery);
    }
}(function (jQuery) {
    /**
     * @param {Boolean} [unfiltered]
     * @return {Boolean}
     */
    jQuery.fn.dirty = function (unfiltered) {
        for (var i = 0; i < this.length; i++) {
            var selector = ':input:not(:not([name])' + (!unfiltered ? ', [type="file"], [type="hidden"]' : '') + ')';
            var that = jQuery(this[i]);

            if (!that.is(selector)) {
                if (that.find(selector).dirty()) {
                    return true;
                }
            } else if (that.val() !== that.prop('defaultValue')) {
                return true;
            }
        }

        return false;
    };

    jQuery(function ($) {
        $('button, select').each(function () {
            var that = $(this);

            that.prop('defaultValue', that.val());
        });
    });
});