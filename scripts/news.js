var RadiotopiaNews = {

  initialize: function() {
    RadiotopiaNews.bind();
  },

  bind: function() {
    $('*[data-behavior="load-more-news"]').on('click', function() {
      $('.news-item').fadeIn();
      $('*[data-behavior="load-more-news"]').hide();
    });
  }
}
