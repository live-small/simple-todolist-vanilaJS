export default class TodoCount {
    constructor({ appElement, initialValue }) {
        this.containerElement = document.createElement("section");
        appElement.appendChild(this.containerElement);
        this.state = this.calculate(initialValue);
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
