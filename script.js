const centerWatch = document.getElementById('dot');
const hoursWatch = document.getElementById('hours');
const minutesWatch = document.getElementById('minutes');
const secondsWatch = document.getElementById('seconds');

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const interval = 6;

    secondsWatch.style.transform = 'rotate('+(seconds * interval)+'deg)'
    minutesWatch.style.transform = 'rotate(' +(minutes * interval+seconds/10)+'deg)'
    hoursWatch.style.transform = 'rotate(' +(hours*30 + minutes/2)+'deg)'

}
setInterval(getTime, 100)
