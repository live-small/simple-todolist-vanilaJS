import { id } from "../utils/constants.js";
import isValidTodoList from "../utils/validation.js";

export default class TodoList {
    constructor({ appElement, initialValue, onToggle, onDelete }) {
        this.containerElement = document.createElement("ul");
        appElement.appendChild(this.containerElement);

        this.state = isValidTodoList(initialValue) ? initialValue : [];
        this.render();
        this.bindEvent(onToggle, onDelete);
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.containerElement.innerHTML = this.state
            .map(
                ({ text, isCompleted }, key) => `
					<li data-todo-key=${key} id="${id.todoItem}" class="${isCompleted ? "completed" : ""}">
						${text}
						<button type="button" id="${id.todoDeleteButton}" class="remove-button">삭제</button>
					</li>`
            )
            .join("");
    }

    bindEvent(onToggle, onDelete) {
        this.containerElement.addEventListener("click", (event) => {
            const liElement = event.target.closest("li");
            if (!liElement) return;

            const { todoKey } = liElement.dataset;
            const todokeyNumberType = parseInt(todoKey);

            if (event.target.id === id.todoItem) {
                onToggle(todokeyNumberType);
                return;
            }

            if (event.target.id === id.todoDeleteButton) {
                onDelete(todokeyNumberType);
                return;
            }
        });
    }
}
