import player from '@vimeo/player';
import throttle from 'lodash.throttle';

// {
//   /* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script> */
// }

// const iframe = document.querySelector('iframe');
// console.dir(iframe);

// const player = new Vimeo.Player(iframe);
// console.dir(player);

// iframe.addEventListener('click', onPlay);
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// player.on('play', function () {
//   console.log('played the video!');
// });
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // If later on you decide that you don’t need to listen for play anymore.
// player.off('play', onPlay);

// // Alternatively, `off` can be called with just the event name to remove all
// // listeners.
// player.off('play');

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// player
//   .getCurrentTime()
//   .then(function (seconds) {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });
// const KEY_TIME = currentTime.seconds;
// localStorage.setItem(KEY_TIME);
// const time = localStorage.getItem(KEY_TIME);
