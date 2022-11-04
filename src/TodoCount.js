import isValidTodoList from "./utils/validation.js";

export default class TodoCount {
    constructor({ appElement, initialValue }) {
        this.containerElement = document.createElement("section");
        appElement.appendChild(this.containerElement);

        const validValue = isValidTodoList(initialValue) ? initialValue : [];
        this.state = this.calculate(validValue);
        this.render();
    }

    calculate(todos) {
        return {
            completedTodo: todos.filter(todo => todo.isCompleted).length,
            totalTodo: todos.length,
        };
    }

    setState(todos) {
        const newState = this.calculate(todos);
        this.state = newState;
        this.render();
    }

    render() {
        this.containerElement.innerHTML = `
		<div>완료된 Todo: ${this.state.completedTodo}</div>
		<div>전체 Todo: ${this.state.totalTodo}</div>
		`;
    }
}
