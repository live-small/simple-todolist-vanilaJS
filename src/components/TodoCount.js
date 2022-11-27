import isValidTodoList from "../utils/validation.js";

export default class TodoCount {
    constructor({ appElement, initialValue }) {
        this.containerElement = document.createElement("footer");
        appElement.appendChild(this.containerElement);

        const todos = isValidTodoList(initialValue) ? initialValue : [];
        this.state = this.calculateTodoCount(todos);
        this.render();
    }

    calculateTodoCount(todos) {
        return {
            completedTodo: todos.filter((todo) => todo.isCompleted).length,
            totalTodo: todos.length,
        };
    }

    setState(todos) {
        const todoCount = this.calculateTodoCount(todos);
        this.state = todoCount;
        this.render();
    }

    render() {
        this.containerElement.innerHTML = `
			<div>완료된 Todo: ${this.state.completedTodo}</div>
			<div>전체 Todo: ${this.state.totalTodo}</div>
		`;
    }
}
