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
        const selector = `:input:not(:not([name])${ !unfiltered ? ', [type="file"], [type="hidden"]' : '' })`;

        for (let i = 0; i < this.length; i++) {
            const that = jQuery(this[i]);

            if (!that.is(selector)) {
                if (that.find(selector).dirty()) {
                    return true;
                }
            } else if (JSON.stringify(that.val()) != JSON.stringify(that.prop('defaultValue'))) {
                return true;
            }
        }

        return false;
    };

    jQuery.register('jquery-dirty', function ($) {
        this.search('button, select').each(function () {
            const that = $(this);

            that.prop('defaultValue', that.val());
        });
    });
});
