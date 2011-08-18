jQuery.extend(jQuery.expr[':'], {
    'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});
jQuery.fn.exists = function () { return this.length > 0; }
jQuery(document).ready(function () {
    var next = jQuery("a:containsi('next')");
    if (!next.exists()) {
        next = jQuery("a[id*='next']");
    }
    var prev = jQuery("a:containsi('prev')");
    if (!prev.exists()) {
        prev = jQuery("a[id*='prev']");
    }
    var arrowToAction = function (anchor) {
        if (!anchor.exists()) {
            return true;
        }
        var href = anchor.attr('href');
        if (typeof href !== 'undefined' && href !== false) {
            window.location = href;
            return false;
        }
        return true;
    };
    jQuery(document).keydown(function (e) {
        if ((e.keyCode == 37) || (e.keyCode == 39)) {
            if (e.keyCode == 37) {
                return arrowToAction(prev)
            }
            else if (e.keyCode == 39) {
                return arrowToAction(next)
            }
        }
        return true;
    });
});
