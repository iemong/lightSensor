import {Howl, Howler} from 'howler';
const sleep = new Howl({
    src: ['./sound/sleep.mp3'],
    loop: true
})
const move = new Howl({
    src: ['./sound/move.wav']
})


let flag = false;
let counter = 0;
const dom = document.querySelector('.js-hoge');
window.addEventListener('devicelight', (event) => {
    const value = event.value
    if(value > 2) {
        dom.innerHTML = `${value}: 起きている`;
        if(flag) {
            move.play()
        }
        sleep.stop()
    } else {
        dom.innerHTML = `${value}: 眠っている`;
        flag = true;
        sleep.play()
    }
})
