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
    $('#secondaryNavigation .folder:nth-of-type(2)').find('.subnav').append('<div><a href="#" data-behavior="open-modal" data-target="donate" data-source="footer">Make a Donation</a></div>');

    if ($('.modal-wrapper.podcast-donate').length) {
      $('#headerNav').find('#mainNavigation').append('<div class="external"><a href="#" data-behavior="open-modal" data-target="podcast-donate" data-source="nav">Donate</a></div>');
    } else {
      $('#headerNav').find('#mainNavigation').append('<div class="external"><a href="#" data-behavior="open-modal" data-target="donate" data-source="nav">Donate</a></div>');
    }

    if (/#subscribe/.test(window.location.href)) {
      $('.modal-wrapper.subscribe').fadeIn();
    }

    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('data-target');
      $('.modal-wrapper.'+target).fadeIn();

      console.log();

      var source = $(this).attr('data-source');
      if (!source) {
        source = "body";
      }

      console.log(source);

      if (target === 'donate' || target === 'podcast-donate') {
        var designation = $('.modal-wrapper.'+target).find('*[data-designation]').attr('data-designation');

        ga('send', {
          hitType: 'event',
          eventCategory: 'Donate',
          eventAction: 'Open modal from '+source,
          eventLabel: designation,
          eventValue: 1,
          transport: 'beacon'
        });
      }
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
