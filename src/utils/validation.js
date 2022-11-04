const isValidTodoList = todoList => {
    if (!checkTypeOfTodoList(todoList)) return false;

    const requiredProperty = ["text", "isCompleted"];
    const todoOfMissingProperty = todoList.filter(todo => {
        const validTodo = requiredProperty.every(property => property in todo);
        return !validTodo;
    });

    return todoOfMissingProperty.length === 0;
};

const checkTypeOfTodoList = todoList => {
    if (!Array.isArray(todoList)) return false;
    const isValidTodoItemType = todoList.every(todo => typeof todo === "object");

    return isValidTodoItemType;
};

export default isValidTodoList;
