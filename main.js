$(document).ready(function() {
    var elem = $("#myTextfield");
    if (elem) {
        elem.keydown(function() {
            if (elem.val().length > 10)
                elem.val(elem.val().substr(0, 10));
        });
    }            
});