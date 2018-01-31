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

    $('#secondaryNavigation .folder').last().find('.subnav').append('<div><a href="#" data-behavior="open-modal" data-target="newsletter">Sign Up For Newsletter</a></div>');
    $('#secondaryNavigation .folder:nth-of-type(2)').find('.subnav').append('<div><a href="#" data-behavior="open-modal" data-target="donate">Make a Donation</a></div>');

    $('#headerNav').find('#mainNavigation').append('<div class="external"><a href="#" data-behavior="open-modal" data-target="donate">Donate</a></div>');

    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('data-target');
      $('.modal-wrapper.'+target).fadeIn();
    });

    $('*[data-behavior="close-modal"]').on('click', function() {
      $('.modal-wrapper').fadeOut();
    });

    $('a[data-trk-podcast]').on('click', function() {
      console.log('click');
      var podcast = $(this).attr('data-trk-podcast');
      var platform = $(this).attr('data-trk-platform');

      ga('send', {
        hitType: 'event',
        eventCategory: 'Subscription Link',
        eventAction: podcast,
        eventLabel: platform,
        eventValue: 1,
        transport: 'beacon'
      });
    });
  },

  resizeHandler: function() {
  	Radiotopia.client.width = $(window).width();
    Radiotopia.client.height = $(window).height();
  },

  scrollHandler: function() {
  	Radiotopia.client.scrollPosition = $(window).scrollTop();

    if ($('#siteWrapper.home').length) {
      RadiotopiaHome.parallaxScroll();
    }
  }
}
