import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const onPlay = function(data) {
    console.log(data.seconds);
    
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', _throttle(onPlay, 1000));

const valueLocalStorage = localStorage.getItem("videoplayer-current-time") ? localStorage.getItem("videoplayer-current-time") : 0;
console.log(valueLocalStorage);

player.setCurrentTime(valueLocalStorage);

