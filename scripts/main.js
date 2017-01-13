var Radiotopia = {

	client: { height: $(window).height(), width: $(window).width(), scrollPosition: $(window).scrollTop() },

  initialize: function() {
    Radiotopia.bind();
  },

  bind: function() {
  	var throttledResize = _.throttle(Radiotopia.resizeHandler, 50);
    $(window).resize(throttledResize);

    var throttledScroll = _.throttle(Radiotopia.scrollHandler, 50);
    $(window).scroll(throttledScroll);

    $('#secondaryNavigation .folder').last().find('.subnav').append('<div><a href="#" data-behavior="open-modal">Sign Up For Newsletter</a></div>');

    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      $('.modal-wrapper').fadeIn();
    });

    $('*[data-behavior="close-modal"]').on('click', function() {
      $('.modal-wrapper').fadeOut();
    });
  },

  resizeHandler: function() {
  	Radiotopia.client.width = $(window).width();
    Radiotopia.client.height = $(window).height();
  },

  scrollHandler: function() {
  	Radiotopia.client.scrollPosition = $(window).scrollTop();

  	// TODO: Add test for homepage
  	RadiotopiaHome.parallaxScroll();
  }
}
