import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const newPlayer = new Player(iframe);
newPlayer.on('timeupdate', throttle (onPlay, 1000))
function onPlay({seconds}){
    localStorage.setItem('videoplayer-current-time', seconds);
}
newPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


