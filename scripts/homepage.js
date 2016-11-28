var RadiotopiaHome = {
  initialize: function() {
    RadiotopiaHome.hideSecondNewsStory();
  },
  hideSecondNewsStory: function() {
    if ($('.events').length !== 0) {
      var firstNewsStory = $('.news-item').first();
      firstNewsStory.next('article').remove();
    }
  }
}
