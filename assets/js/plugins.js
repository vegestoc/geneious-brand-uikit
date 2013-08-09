function slideTo(el, time){
    var to = isNaN(el) ? $(el).offset().top : el, //find scroll to position
        from = $(window).scrollTop(), //find starting point
        dy = to-from, //calculate change in scroll position - deltaY
        body = $("body");

    if(time==undefined){
    	time=1;
    }

    if(from+dy>$(document).height()-$(window).height()) {
		to = $(document).height()-$(window).height();
		dy = to-from;
		}
		
    /* At this juncture, we're going to use margin-top to move the the page so it feels like we're at the *from* scroll position, when we're actually instantly at the *to* scroll position. */
    body.css("margin-top", dy+"px");
    $(window).scrollTop(to);

    /* Now we will use CSS transitions to perform the scroll for us, by transition the margin-top to 0 */
    body.css("transition","margin-top "+time+"s ease");
    body.css("margin-top", 0);

    /* Reset the transition property once we're done with it so we don't get accidental transitions, and so if we slideTo again, the first step will be instant. */
    body.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      $("body").css("transition", "none");
    });
}