const isValidTodoList = todoList => {
    if (!checkTypeOfTodoList(todoList)) return false;

    const requiredProperty = ["text", "isCompleted"];
    const isValid = todoList.every(todo => {
        const validProperty = requiredProperty.every(property => property in todo);

        if (validProperty) {
            const isValidType =
                typeof todo.text === "string" && typeof todo.isCompleted === "boolean";
            return isValidType;
        }
        return false;
    });

    return isValid;
};

const checkTypeOfTodoList = todoList => {
    if (!Array.isArray(todoList)) return false;
    const isValidTodoItemType = todoList.every(todo => typeof todo === "object");

    return isValidTodoItemType;
};

export default isValidTodoList;
