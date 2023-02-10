let inputField = document.getElementById("inputfield");
let button = document.getElementById("btn");
let toDoList = document.getElementById("todo-wrapper");


let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];


for (let i = 0; i < todoArray.length; i++) {
  let paragraph = document.createElement("p");
  paragraph.innerText = todoArray[i];
  toDoList.appendChild(paragraph);

  paragraph.addEventListener("click", function() {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function() {
    todoArray.splice(i, 1);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    toDoList.removeChild(paragraph);
  });
}

button.addEventListener("click", function() {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;

  if (paragraph.innerText) {
    todoArray.push(paragraph.innerText);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    toDoList.appendChild(paragraph);
  } else {
    alert("Please write something!");
  }

  inputField.value = "";

  paragraph.addEventListener("click", function() {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function() {
    todoArray.splice(todoArray.indexOf(paragraph.innerText), 1);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    toDoList.removeChild(paragraph);
  });
});