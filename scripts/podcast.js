var RadiotopiaPodcast = {

  initialize: function() {
    RadiotopiaPodcast.bind();
  },

  bind: function() {
    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      $('#modal-wrapper').fadeIn();
    });

    $('*[data-behavior="close-modal"]').on('click', function() {
      $('#modal-wrapper').fadeOut();
    });
  }
}
