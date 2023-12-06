const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const SlowDown = document.getElementById('slow-down');

const speedDisplay = document.getElementById('speed-display');



const rollAnimation = [
    {
        transform: 'rotate(0) translate3D(-50%, -50%, 0)',
        color: 'white'
    },

{
    color:'blue',
    offset: 0.3,
},
     {
        transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
        color: 'white'
    },
];

const rollOption = {
    duration:3000,
    iterations: Infinity,
};



const roll = ball.animate(rollAnimation, rollOption);

play.addEventListener('click', () => {
    roll.playbackRate = 1;
    roll.play();
        updateSpeedDisplay();

});

pause.addEventListener('click', () => {
    roll.pause();
    
});

reverse.addEventListener('click', () => {
    roll.reverse();
        updateSpeedDisplay();

});

speedUp.addEventListener('click', () => {
    roll.playbackRate = roll.playbackRate * 2;
        updateSpeedDisplay();

});

SlowDown.addEventListener('click', () => {
    roll.playbackRate = roll.playbackRate / 2;
        updateSpeedDisplay();

});

function updateSpeedDisplay() {
    speedDisplay.textContent = `Speed: ${roll.playbackRate.toFixed(2)}x`;
}