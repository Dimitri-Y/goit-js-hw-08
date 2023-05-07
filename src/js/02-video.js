import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};
const onPlayThrottle = throttle(onPlay, 1000);

const updateBrowser = () => {
  if (localStorage.getItem('videoplayer-current-time') === null)
    localStorage.setItem('videoplayer-current-time', 0);
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};

updateBrowser();
player.on('timeupdate', onPlayThrottle);

//   .then(function (seconds) {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });
