export default class TodoForm {
    constructor({ appElement, onSubmit }) {
        this.containerElement = document.createElement("form");
        appElement.appendChild(this.containerElement);
        this.render();
        this.bindEvent(onSubmit);
    }

    render() {
        this.containerElement.innerHTML = `
		<input type="text" name="input"></input>
		<button>추가</button>
		`;
    }

    bindEvent(onSubmit) {
        this.containerElement.addEventListener("submit", event => {
            event.preventDefault();
            const inputElement = event.target.querySelector("input[name=input]");
            const inputValue = inputElement.value.trim();
            if (!inputValue.length || !onSubmit) return;

            onSubmit(inputValue);
            inputElement.value = "";
        });
    }
}
