import { id, storageKey } from "../utils/constants.js";
import { deleteItem, getItem, setItem } from "../utils/storage.js";

export default class TodoForm {
    constructor({ appElement, onSubmit }) {
        this.containerElement = document.createElement("form");
        appElement.appendChild(this.containerElement);

        this.state = getItem(storageKey.inputValue, "");
        this.render();
        this.bindEvent(onSubmit);
    }

    render() {
        this.containerElement.innerHTML = `
			<label>
				<input type="text" id="${id.todoFormInput}" value="${this.state}" autofocus placeholder="할 일을 입력하세요"></input>
				<button>추가</button>
			</label>
		`;
    }

    bindEvent(onSubmit) {
        this.containerElement.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!onSubmit) return;

            const inputElement = this.containerElement.querySelector(`#${id.todoFormInput}`);
            const inputValue = inputElement.value.trim();
            if (!inputValue.length) return;

            onSubmit(inputValue);
            inputElement.value = "";
            deleteItem(storageKey.inputValue);
        });

        window.addEventListener("beforeunload", (event) => {
            event.preventDefault();

            const inputElement = this.containerElement.querySelector(`#${id.todoFormInput}`);
            const inputValue = inputElement.value.trim();
            if (inputValue.length) {
                setItem(storageKey.inputValue, inputValue);
            }
        });
    }
}
