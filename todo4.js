const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];


function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    const cleanTodos = toDos.filter(function(todo){
        return todo.id != parseInt(li.id);
    })
    toDoList.removeChild(li);
    toDos = cleanTodos;
    saveTodos();
}


function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", handleDelete);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    todoObj = {
        id : newId,
        text : text
    };
    toDos.push(todoObj);
    saveTodos();
}


function loadTodos(){
    const currentTodos = localStorage.getItem(TODOS_LS);
    if(currentTodos !== null){
        const parsedTodos = JSON.parse(currentTodos);
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const inputTodo = toDoInput.value;
    paintTodo(inputTodo);
    toDoInput.value = "";
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
