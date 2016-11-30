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
