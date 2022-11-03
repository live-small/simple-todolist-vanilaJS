export default class TodoList {
    constructor({ appElement, initialValue }) {
        this.containerElement = document.createElement("ul");
        appElement.appendChild(this.containerElement);
        this.state = initialValue;

        this.render();
        this.bindEvent();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.containerElement.innerHTML = this.state.map(({ text }) => `<li>${text}</li>`).join("");
    }

    bindEvent() {
        // this.containerElement에 걸면 됨
    }
}
