var RadiotopiaPodcast = {

  initialize: function() {
    RadiotopiaPodcast.bind();
  },

  bind: function() {
    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('data-target');
      $('.modal-wrapper.'+target).fadeIn();
    });

    $('*[data-behavior="close-modal"], .closeButton').on('click', function() {
      console.log('close');
      $('.modal-wrapper').fadeOut();
    });
  }
}
