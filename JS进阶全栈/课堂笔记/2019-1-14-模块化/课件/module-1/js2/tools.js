define(function() {
    console.log('tools.js');
    function $(selector) {
        return document.querySelectorAll(selector);
    }

    return $;
});