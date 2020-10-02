const car = document.querySelector('.car');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const audioPlayer = document.querySelector('.audio-player');
let count = 0;

function draw() {
    if (car.style.left === '') {
        car.style.left = '2px';
    } else {
        car.style.left = (parseInt(car.style.left) + 2) + 'px';
    }
    if ((parseInt(car.style.left) + 240) < document.body.clientWidth) {
        audioPlayer.play();
        let requestId = requestAnimationFrame(draw);
        if (count % 2 === 0) {
            audioPlayer.pause();
            cancelAnimationFrame(requestId);
        }
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    
    
}

start.addEventListener('click', () => {
    requestAnimationFrame(draw);
    count++;
});

reset.addEventListener('click', () => {
    car.style.left = '';
    audioPlayer.currentTime = 0;
    count = 0;
});

