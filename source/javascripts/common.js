var showActiveNavbarLink = function() {
    var navItems = $('.header .nav .item');
    var pathName = window.location.pathname;
    
    navItems.each(function(i, item) {
        var elem = $(item);
        if(elem.data('active') === pathName) {
            elem.addClass('active');
        }
    });
};
$(function() {
    showActiveNavbarLink(); 
});
