var RadiotopiaSponsorship = {

  initialize: function() {
    RadiotopiaSponsorship.bind();
  },

  bind: function() {
    $('[data-behavior="smooth-scroll"]').on('click', function(event) {
    	event.preventDefault();
    	var $target = $('#'+$(this).attr('data-target'));
    	$.scrollTo($target, 1000, { axis: 'y' });
    });
  }
}
