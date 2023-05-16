let todoInput; // użytkownik wpisuje tutaj treść
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL

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
		const newTask = document.createElement("li");
		newTask.textContent = todoInput.value;

		createToolsArea(newTask);
		ulList.append(newTask);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania!";
	}
};

const createToolsArea = (newTask) => {
	const toolsPanel = document.createElement("div");
	toolsPanel.classList.add("tools");
	newTask.append(toolsPanel);

	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

document.addEventListener("DOMContentLoaded", main);
