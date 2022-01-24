const toDo_from = document.querySelector(".todo_form");
const toDo_input = document.querySelector(".todo_form input")
const toDo_List = document.querySelector(".todo_list");

const toDo_key = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(toDo_key, JSON.stringify(toDos));   
}

function delete_todo(event) {
    const toDo_li = event.target.parentElement;
    toDo_li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDo_li.id));
    saveToDos();
}

function toDo_paint(newTodo_date) {
    const toDo_li = document.createElement("li");
    toDo_li.id = newTodo_date.id;
    const toDo_span = document.createElement("span");
    toDo_span.innerText = newTodo_date.text;
    const x_btn = document.createElement("button");
    x_btn.innerText = "X";
    x_btn.addEventListener("click", delete_todo);
    toDo_li.appendChild(toDo_span);
    toDo_li.appendChild(x_btn)
    toDo_List.appendChild(toDo_li);
}

function toDo_submit(event) {
    event.preventDefault();
    const newTodo_date = toDo_input.value;
    toDo_input.value = "";
    const new_toDoObj = {
        id: Date.now(),
        text: newTodo_date
    }
    toDos.push(new_toDoObj);
    toDo_paint(new_toDoObj);
    saveToDos();
}

toDo_from.addEventListener("submit", toDo_submit);

const save_toDos = localStorage.getItem(toDo_key);

if(save_toDos !== null) {
    const parsed_toDos = JSON.parse(save_toDos);
    toDos = parsed_toDos;
    parsed_toDos.forEach(toDo_paint);
}

