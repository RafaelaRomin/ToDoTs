"use strict";
let listElement = document.querySelector('#todo ul');
let inputElement = document.querySelector('#todo input');
let buttonElement = document.querySelector('#todo button');
let listSave = localStorage.getItem('@listToDo');
let todo = listSave !== null && JSON.parse(listSave) || [];
function listToDo() {
    listElement.innerHTML = "";
    todo.map(item => {
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(item);
        let positionElement = todo.indexOf(item);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", `deleteToDo(${positionElement})`);
        linkElement.setAttribute("style", "margin-left: 12px");
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}
listToDo();
function addToDo() {
    if (inputElement.value === "") {
        alert("Valor não informado");
        return false;
    }
    else {
        let todoInput = inputElement.value;
        todo.push(todoInput);
        inputElement.value = "";
        listToDo();
        saveToDo();
    }
}
buttonElement.onclick = addToDo;
function deleteToDo(positionElement) {
    todo.splice(positionElement, 1);
    listToDo();
    saveToDo();
}
function saveToDo() {
    localStorage.setItem("@listToDo", JSON.stringify(todo));
}
