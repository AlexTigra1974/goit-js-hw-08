import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// console.dir(iframe);

const player = new Player(iframe);
// console.dir(player);
const KEY_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(KEY_TIME, seconds);
  }, 1000)
);
const time = localStorage.getItem(KEY_TIME);
if (time) {
  player.setCurrentTime(time);
}
