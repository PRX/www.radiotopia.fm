var RadiotopiaHome = {
  initialize: function() {
    RadiotopiaHome.bind();
  },
  bind: function() {
    if ($('.events').length === 0) {
      $('.events').remove();
    } else if ($('.events').length > 1) {
      var nextEvent = $('.event-item').first();
      nextEvent.nextAll('article').remove();
    } else {};
  }
}
