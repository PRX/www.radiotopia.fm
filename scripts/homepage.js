var RadiotopiaHome = {

  initialize: function() {
    RadiotopiaHome.checkEventDate();
  },

  checkEventDate: function() {

  	setTimeout(function(){
	  	var d = new Date();
	    var current = d.getTime();

	    var eventDate = $('.events .event-item:first-child').attr('data-date');

	    if (eventDate > current) {
	    	$('.right-column .events').show();
	    } else {
	    	$('.right-column .news').show();
	    }
		}, 2000);
  },

  parallaxScroll: function() {
  	var supportPosition = $('#support-container').offset();
   	var supportOffset = supportPosition.top - Radiotopia.client.height;
   	var backgroundOffset = (supportOffset - Radiotopia.client.scrollPosition) * .1;
  	if (Radiotopia.client.scrollPosition > supportOffset) {
  		$('.parallax').css('top', backgroundOffset+'px');
  	}
  }
}
