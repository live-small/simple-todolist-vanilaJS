const storage = window.localStorage;

export const setItem = (key, value) => {
    try {
        storage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

export const getItem = (key, defaultValue) => {
    try {
        const loadValue = storage.getItem(key);
        if (loadValue) {
            return JSON.parse(loadValue);
        }
        return defaultValue;
    } catch (error) {
        console.log(error);
        return defaultValue;
    }
};

export const deleteItem = (key) => {
    storage.removeItem(key);
};
