setDate = function() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secDegrees = ((seconds/60) * 360) + 90;
    const minDegrees = ((minutes/60) * 360) + 90;
    const hourDegrees = ((hours/12) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
}

setInterval(setDate, 1000);