import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};
const onPlayThrottle = throttle(onPlay, 1000);

player.on('timeupdate', onPlayThrottle);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

//   .then(function (seconds) {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });
