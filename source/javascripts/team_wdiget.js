var findLastMemberInTheSameRow = function(memberElem){
    var memberElemTop = memberElem.offset().top;
    var lastMemberElem = memberElem;
    var nextMemberElem = memberElem.next('.member');
    while(nextMemberElem.length > 0 && (nextMemberElem.offset().top === memberElemTop)) {
        lastMemberElem = nextMemberElem;
        nextMemberElem = nextMemberElem.next('.member');
    }
    return lastMemberElem;
}

$(function (){
    $(window).resize(function(){
        $('.team-widget .member-description').remove();
    });
    $('.team-widget .member').click(function(e){
        $('.team-widget .member-description').remove();
        var elem = $(e.target);
        var memberElem =  elem.hasClass('member') ? elem : elem.parent('.member');
        if(!memberElem.hasClass('active')) {
            var memberDescriptionElem = memberElem.find('.description');
            if(memberDescriptionElem.length > 0) {
                $('.team-widget .member.active').removeClass('active');
                memberElem.addClass('active');
                var wrappingContainerElem = memberElem.parent('.row');
                var lastElementInSameRow = findLastMemberInTheSameRow(memberElem);
                var caretMarkup = "<div class='triangle-up'><div class='inner-triangle'></div></div>";
                lastElementInSameRow.after("<div class='col-xs-12 member-description'>" + caretMarkup + memberDescriptionElem.html() +"</div>");
                var caretElem = $('.member-description .triangle-up');
                var caretLeftOffset = (memberElem.offset().left - wrappingContainerElem.offset().left) + (memberElem.outerWidth() / 2.0) - (caretElem.outerWidth() / 2.0);
                $('.member-description .triangle-up').css('left', caretLeftOffset);
            }
        } else {
            memberElem.removeClass('active');
        }
    });
});
