const jsClock = document.querySelector(".js-clock"),
clockContainer = jsClock.querySelector("h1");


function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockContainer.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}h  ${minutes < 10 ? `0${minutes}` : `${minutes}`}m  ${seconds < 10 ? `0${seconds}` : `${seconds}`}s `;
}


function init() {
    getTime();
    setInterval(getTime,1000);
}

init();