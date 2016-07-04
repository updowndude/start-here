const titler = document.title;
class Home extends React.Component {
	render() {
		let {img, location} = this.props;
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Home"), 
				React.createElement("a", {href: location, target: "_blank", rel: "noopener noreferrer"}, 
					React.createElement("img", {id: "homePic", src: img})), 
				React.createElement("div", {id: "homeThree"})
			)
    );
	}
}
class About extends React.Component {
	render() {
		let {img} = this.props;
		return (
			React.createElement("div", null, 
				React.createElement("h2", null, "About"), 
				React.createElement("img", {id: "aboutPic", src: img}), 
				React.createElement("h3", null, "Goal"), 
				React.createElement("p", null, "The goal of the project is to help a person help a place to start." + ' ' +
				"This place where a person is starting from web development, game development" + ' ' +
				"essay writing.")
			)
    );
	}
}
class Programming extends React.Component {
	render() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Programming Map")
			)
    );
	}
}
class Thanks extends React.Component {
	render() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Thank you")
			)
    );
	}
}
class Tools extends React.Component {
	render() {
		return (
			React.createElement("div", null, 
				React.createElement("h2", null, "Tools"), 
				React.createElement("ul", {className: "demo-list-two mdl-list"}, 
					React.createElement("li", {className: "mdl-list__item mdl-list__item--two-line"}, 
						React.createElement("span", {className: "mdl-list__item-primary-content"}, 
							React.createElement("i", {className: "material-icons mdl-list__item-avatar"}, "build"), 
							React.createElement("span", {className: "ToolsName"}, "Programming")
						)
					), 
					React.createElement("li", {className: "mdl-list__item mdl-list__item--two-line"}, 
						React.createElement("span", {className: "mdl-list__item-primary-content"}, 
							React.createElement("i", {className: "material-icons mdl-list__item-avatar"}, "build"), 
							React.createElement("span", {className: "ToolsName"}, "Reverse")
						), 
						React.createElement("span", {className: "mdl-list__item-secondary-content"}
						)
					), 
					React.createElement("li", {className: "mdl-list__item mdl-list__item--two-line"}, 
						React.createElement("span", {className: "mdl-list__item-primary-content"}, 
							React.createElement("i", {className: "material-icons mdl-list__item-avatar"}, "build"), 
							React.createElement("span", {className: "ToolsName"}, "Game")
						), 
						React.createElement("span", {className: "mdl-list__item-secondary-content"}
						)
					)
				)
			)
    );
	}
}
switch (titler) {
	case 'Home':
		// http://aral.github.io/fork-me-on-github-retina-ribbons/right-red@2x.png
		ReactDOM.render(React.createElement(Home, {img: "images/fm.png", location: "https://github.com/updowndude/start-here"}),
		document.getElementById('reactHome'));
		ReactDOM.render(React.createElement(About, {img: "images/me.jpg"}),
		document.getElementById('reactAbout'));
		ReactDOM.render(React.createElement(Tools, null),
		document.getElementById('reactTools'));
		ReactDOM.render(React.createElement(Programming, null),
		document.getElementById('reactProgramming'));
		break;
	case 'Thank you':
		ReactDOM.render(React.createElement(Thanks, null),
		document.getElementById('reactThank'));
		break;
	default:
		break;
}

//# sourceMappingURL=my-com.js.map
