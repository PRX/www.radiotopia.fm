function togglePlayer(list, managerID) {
  var m = list.slice(0);

  var i = m.indexOf(managerID);
  m.splice(i, 1);

  jQuery.each(m, function(i, v) {
    soundManager.pause(v);
  });

  soundManager.togglePause(managerID);
}

$(function() {

  var managers = [];

  soundManager.setup({
    url: '/scripts/soundmanager2_flash9.swf',
    flashVersion: 9,
    onready: function() {

      $('.player').each(function(i, el) {
        var audioURL = $(el).attr('data-audio-url');
        var sndmanID = 'sndman_' + $(el).attr('id');

        managers.push(sndmanID);

	$('button', el).click(function(ev) {
	  togglePlayer(managers, sndmanID);
	});

        soundManager.createSound({
          id: sndmanID,
          url: audioURL,
          autoLoad: false,
          autoPlay: false,
          onload: function() {
          },
          onpause: function() {
            $('.player').addClass('paused').removeClass('playing');
            $(el).addClass('paused').removeClass('playing');
          },
          onresume: function() {
            $('.player').addClass('paused').removeClass('playing');
            $(el).addClass('playing').removeClass('paused');
          },
          onplay: function() {
            $('.player').addClass('paused').removeClass('playing');
            $(el).addClass('playing').removeClass('paused');
          },
          onfinish: function() {
            $('.player').addClass('paused').removeClass('playing');
            $(el).addClass('paused').removeClass('playing');
          },
          whileplaying: function() {
            var p = (this.position / this.duration);
            $('.progress', el).css('width', (p * 98));
          },
          volume: 100
        });
      });
    }
  });
});
