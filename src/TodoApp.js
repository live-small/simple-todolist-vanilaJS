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
                const nextState = [...todoList.state, { text, isCompleted: false }];
                setItem(this.todoListKey, nextState);
                todoList.setState(nextState);
            },
        });

        const todoList = new TodoList({
            appElement: this.appElement,
            initialValue: getItem(this.todoListKey, []),
            onToggle: key => {
                // key의 isCompleted 변경
                const nextState = [...todoList.state];
                nextState[key] = {
                    ...nextState[key],
                    isCompleted: !nextState[key].isCompleted,
                };

                // 변경된 데이터 반영 - 로컬, todoList
                setItem(this.todoListKey, nextState);
                todoList.setState(nextState);
            },
        });
    }
}
