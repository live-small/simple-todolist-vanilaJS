const Header = ({ appElement }) => {
    const template = `
		<header>
			<h1>Simple Todo List</h1>
		</header>
	`;
    appElement.innerHTML = template;
};

export default Header;
