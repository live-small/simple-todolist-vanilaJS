import Header from "./Header.js";
import TodoCount from "./TodoCount.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import isValidTodoList from "../utils/validation.js";
import { setItem, getItem } from "../utils/storage.js";
import { storageKey } from "../utils/constants.js";

export default class TodoApp {
    constructor({ appElement }) {
        this.appElement = appElement;
        this.state = {
            todos: getItem(storageKey.todoList, []),
        };
        this.turnOn();
    }

    setTodos(newTodos) {
        if (!isValidTodoList(newTodos)) return;

        setItem(storageKey.todoList, newTodos);
        this.state.todos = newTodos;

        this.todoListComponent.setState(newTodos);
        this.todoCountComponent.setState(newTodos);
    }

    turnOn() {
        Header({
            appElement: this.appElement,
        });

        new TodoForm({
            appElement: this.appElement,
            onSubmit: (text) => {
                const newTodos = [...this.state.todos, { text, isCompleted: false }];

                this.setTodos(newTodos);
            },
        });

        this.todoListComponent = new TodoList({
            appElement: this.appElement,
            initialValue: this.state.todos,
            onToggle: (targetIndex) => {
                const newTodos = this.state.todos.map((todo, index) => {
                    if (index === targetIndex) {
                        return {
                            ...todo,
                            isCompleted: !todo.isCompleted,
                        };
                    }
                    return todo;
                });

                this.setTodos(newTodos);
            },
            onDelete: (targetIndex) => {
                const newTodos = [...this.state.todos];
                newTodos.splice(targetIndex, 1);

                this.setTodos(newTodos);
            },
        });

        this.todoCountComponent = new TodoCount({
            appElement: this.appElement,
            initialValue: this.state.todos,
        });
    }
}
