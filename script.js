const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const releaseTime = totalTime / 5;
animateBreath();
function animateBreath() {
    text.innerHTML = 'Breath in!';
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink'
        }, releaseTime)
    },
        breathTime
    );
}

setInterval(animateBreath, totalTime);
