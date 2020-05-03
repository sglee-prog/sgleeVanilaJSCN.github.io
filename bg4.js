const body = document.querySelector("body");

const IMG_NUMBER = 5;


function getImage(number){
    const image = new Image();
    image.src = `./images/${number+1}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom(number){
    const random = Math.floor(Math.random()*number);
    return random;
}

function init(){
    const randomNumber = genRandom(IMG_NUMBER);
    getImage(randomNumber);

}

init();