var RadiotopiaPodcast = {

  initialize: function() {
    RadiotopiaPodcast.bind();
  },

  bind: function() {
    $('*[data-behavior="open-modal"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('data-target');

      console.log(target);

      $('#modal-wrapper.'+target).fadeIn();
    });

    $('*[data-behavior="close-modal"]').on('click', function() {
      $('#modal-wrapper').fadeOut();
    });
  }
}
