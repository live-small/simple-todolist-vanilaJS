export default class TodoList {
    constructor({ appElement, initialValue, onToggle }) {
        this.containerElement = document.createElement("ul");
        appElement.appendChild(this.containerElement);
        this.state = initialValue;

        this.render();
        this.bindEvent(onToggle);
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

    bindEvent(onToggle) {
        this.containerElement.addEventListener("click", event => {
            const { todoKey } = event.target.closest("li").dataset;

            if (event.target.className === "todo-item") {
                onToggle(todoKey);
            } else {
                // remove-button
            }
        });
    }
}
