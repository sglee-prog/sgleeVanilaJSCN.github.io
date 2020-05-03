const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greetings = document.querySelector(".js-greetings");

const USER = "currentUser",
SHOWING = "showing";


function paintName(text) {
    greetings.classList.add(SHOWING);
    form.classList.remove(SHOWING);
    greetings.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER, text)
}

function handleSubmit(event){
    event.preventDefault();
    const inputName = input.value;
    saveName(inputName);
    paintName(inputName);
}

function askName() {
    greetings.classList.remove(SHOWING);
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
}


function loadName(){
    const nowUser = localStorage.getItem(USER);
    if(nowUser === null){
        askName();
    } else {
        paintName(nowUser);
    }

}


function init() {
    loadName();
}

init();