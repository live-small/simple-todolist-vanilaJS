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
            .map(({ text, isCompleted }, key) => {
                const style = `text-decoration-line:${isCompleted ? "line-through" : "none"}`;
                return `
					<li data-todo-key=${key} class="todo-item" style=${style}>${text}
						<button type="button" class="remove-button">삭제</button>
					</li>
					`;
            })
            .join("");
    }

    bindEvent(onToggle, onDelete) {
        this.containerElement.addEventListener("click", (event) => {
            if (!event.target.closest("li")) return;

            const { todoKey } = event.target.closest("li").dataset;
            const todokeyNumberType = parseInt(todoKey);
            if (event.target.className === "todo-item") {
                onToggle(todokeyNumberType);
            } else {
                onDelete(todokeyNumberType);
            }
        });
    }
}
