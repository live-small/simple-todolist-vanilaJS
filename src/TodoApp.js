import { getItem, setItem } from "./storage.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default class TodoApp {
    constructor({ appElement }) {
        // 이용할 상태값 넣기
        this.appElement = appElement;
        this.todoListKey = "todos";
        this.render();
    }

    render() {
        const todoForm = new TodoForm({
            appElement: this.appElement,
            onSubmit: text => {
                const nextState = [...todoList.state, { text }];
                setItem(this.todoListKey, nextState);
                todoList.setState(nextState);
            },
        });

        const todoList = new TodoList({
            appElement: this.appElement,
            initialValue: getItem(this.todoListKey, []),
        });
    }
}
