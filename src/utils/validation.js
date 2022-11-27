const isValidType = (value, type) => {
    return typeof value === type;
};

const isValidTodoList = (todoList) => {
    if (!checkTypeOfTodoList(todoList)) return false;

    const requiredProperty = ["text", "isCompleted"];
    const isValid = todoList.every((todo) => {
        const validProperty = requiredProperty.every((property) => property in todo);

        if (validProperty) {
            const { text, isCompleted } = todo;
            return isValidType(text, "string") && isValidType(isCompleted, "boolean");
        }
        return false;
    });

    return isValid;
};

const checkTypeOfTodoList = (todoList) => {
    if (!Array.isArray(todoList)) return false;
    const isValidTodoItemType = todoList.every((todo) => isValidType(todo, "object"));

    return isValidTodoItemType;
};

export default isValidTodoList;
