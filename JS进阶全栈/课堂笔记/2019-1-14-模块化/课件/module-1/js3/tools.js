define(function(require, exports, module) {
    function $(selector) {
        return document.querySelectorAll(selector);
    }

    exports.$ = $;
});