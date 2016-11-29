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
	    	console.log("has future events");
	    	$('.right-column .events').show();
	    } else {
	    	$('.right-column .news').show();
	    }
		}, 2000);
  }
}
