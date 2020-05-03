const weather = document.querySelector(".js-weather");

const COORDS = "currentCoords";
const API_KEY = "e535c769722c08253b829dfd66411e6a";


function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can not access geo location")

}

function askCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords(){
    const currentCoords = localStorage.getItem(COORDS);
    const parsedCoords = JSON.parse(currentCoords);
    if (currentCoords === null){
        askCoords();
    } else {
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();

}

init();