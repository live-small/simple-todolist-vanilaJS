import Header from "./Header.js";
import TodoCount from "./TodoCount.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import isValidTodoList from "../utils/validation.js";
import { setItem, getItem } from "../utils/storage.js";

export default class TodoApp {
    constructor({ appElement }) {
        this.appElement = appElement;
        this.todoListKey = "todos";
        this.render();
    }

    render() {
        Header({
            appElement: this.appElement,
        });

        new TodoForm({
            appElement: this.appElement,
            onSubmit: text => {
                const nextState = [...todoList.state, { text, isCompleted: false }];

                if (isValidTodoList(nextState)) {
                    setItem(this.todoListKey, nextState);
                    todoList.setState(nextState);
                    todoCount.setState(nextState);
                }
            },
        });

        const todoList = new TodoList({
            appElement: this.appElement,
            initialValue: getItem(this.todoListKey, []),
            onToggle: key => {
                // key의 isCompleted 변경
                const newState = [...todoList.state];
                newState[key] = {
                    ...newState[key],
                    isCompleted: !newState[key].isCompleted,
                };

                // 변경된 데이터 반영 - 로컬, todoList
                if (isValidTodoList(newState)) {
                    setItem(this.todoListKey, newState);
                    todoList.setState(newState);
                    todoCount.setState(newState);
                }
            },
            onDelete: key => {
                const newState = [...todoList.state];
                newState.splice(key, 1);

                if (isValidTodoList(newState)) {
                    setItem(this.todoListKey, newState);
                    todoList.setState(newState);
                    todoCount.setState(newState);
                }
            },
        });

        const todoCount = new TodoCount({
            appElement: this.appElement,
            initialValue: getItem(this.todoListKey, []),
        });
    }
}
