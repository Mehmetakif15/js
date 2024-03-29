//! Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

//! global array for todo obj
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//! load event vs. DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //! get TodoList From LocalStorage and load to UI
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

//! form => submit event vs. button => click event
//! form.addEventListener("submit", () => {})
addBtn.addEventListener("click", (e) => {
  //! prevent form submit
  e.preventDefault();
  //! user input control
  if (todoInput.value.trim() === "") {
    alert("Please, enter new todo text!");
    return;
  }
  // else{
  //     alert("continue");
  // }
  //continue func.
  const newTodo = {
    id: new Date().getTime(), //! unique id
    completed: false, //! status
    text: todoInput.value, //! userInput
  };

  // insertTodoToDB(newTodo);
  createTodo(newTodo);

  //! UPDATE todo array
  todoList.push(newTodo);
  //! localStorage todoList Update
  //! localStorage vs. SessionStorage vs. Cookies
  //!!! Stringify
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //! event.target vs. event.currentTarget
  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  //! todo item creation
  //! alert("item was added");
  //! obj. dest. (ES6 => JS'e kazandirilan yapilar??)
  const { id, completed, text } = newTodo;

  //! create li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //! add class with completed(status)
  completed ? li.classList.add("checked") : "";

  //! create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  //! append vs. appendChild
  li.append(icon);

  //! create item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //! create remove button
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  //   console.log(li);

  //! append li to ul
  //! prepend vs. append
  //   todoUl.append(li);
  todoUl.prepend(li);
};

//! capturing vs. bubbling
//! static closest parent element => child
todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    //! alert("check clicked");
    //! update UI
    e.target.parentElement.classList.toggle("checked");
    //update array
    // todoList.map((todo)=>{
    //     if(todo.id == idAttr){
    //         todo.completed = !todo.completed;
    //     }
    // });
    todoList.forEach((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
    });
    //add updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    //! alert("remove clicked");
    //! remove from UI
    e.target.parentElement.remove();
    //! remove from Array
    //! id si ile silinmeyenleri filter la array i update et ==> silineni array den remove
    todoList = todoList.filter((todo) => todo.id != idAttr);
    //! add to updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("other element clicked");
  }
  console.log(todoList);
});
