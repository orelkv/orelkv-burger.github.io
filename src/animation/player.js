; (function() { 
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-elem', {
    height: '406',
    width: '662',
    videoId: 'l7WQJGEAQpg',
    events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    }
  });
}
})()
