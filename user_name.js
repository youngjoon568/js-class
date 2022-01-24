const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input");
const user__Name = document.querySelector("#user_name");
const none_class = "dis_none";
const user_key = "username";

function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(none_class);
    const username = loginInput.value;
    localStorage.setItem(user_key, username);
    painUser_Name(username);
}

function painUser_Name(save__Name) {
    user__Name.innerText = `hi ${save__Name}`; 
    user__Name.classList.remove(none_class);
}

const saveName = localStorage.getItem(user_key);

if(saveName === null) {
    loginForm.classList.remove(none_class);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    painUser_Name(saveName);
}

