import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1100)
);

window.addEventListener('load', () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
