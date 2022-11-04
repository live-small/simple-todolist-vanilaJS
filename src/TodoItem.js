export default class TodoItem {
    constructor({ text, isCompleted }) {
        this.state = { text, isCompleted };
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {}
}
