let todoInput; // użytkownik wpisuje tutaj treść
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTask; // nowo dadany LI, (zadanie)

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTask);
};

const addNewTask = () => {
	if (todoInput.value != "") {
		newTask = document.createElement("li");
		newTask.textContent = todoInput.value;
		ulList.append(newTask);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania!";
	}
};

document.addEventListener("DOMContentLoaded", main);
