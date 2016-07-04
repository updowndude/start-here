const titler = document.title;
class Home extends React.Component {
	render() {
		let {img, location} = this.props;
		return (
			<div>
				<h1>Home</h1>
				<a href={location} target="_blank" rel="noopener noreferrer">
					<img id="homePic" src={img}/></a>
				<div id="homeThree"></div>
			</div>
    );
	}
}
class About extends React.Component {
	render() {
		let {img} = this.props;
		return (
			<div>
				<h2>About</h2>
				<img id="aboutPic" src={img}/>
				<h3>Goal</h3>
				<p>The goal of the project is to help a person help a place to start.
				This place where a person is starting from web development, game development
				essay writing.</p>
			</div>
    );
	}
}
class Programming extends React.Component {
	render() {
		return (
			<div>
				<h1>Programming Map</h1>
			</div>
    );
	}
}
class Thanks extends React.Component {
	render() {
		return (
			<div>
				<h1>Thank you</h1>
			</div>
    );
	}
}
class Tools extends React.Component {
	render() {
		return (
			<div>
				<h2>Tools</h2>
				<ul className="demo-list-two mdl-list">
					<li className="mdl-list__item mdl-list__item--two-line">
						<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">build</i>
							<span className="ToolsName">Programming</span>
						</span>
					</li>
					<li className="mdl-list__item mdl-list__item--two-line">
						<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">build</i>
							<span className="ToolsName">Reverse</span>
						</span>
						<span className="mdl-list__item-secondary-content">
						</span>
					</li>
					<li className="mdl-list__item mdl-list__item--two-line">
						<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">build</i>
							<span className="ToolsName">Game</span>
						</span>
						<span className="mdl-list__item-secondary-content">
						</span>
					</li>
				</ul>
			</div>
    );
	}
}
switch (titler) {
	case 'Home':
		// http://aral.github.io/fork-me-on-github-retina-ribbons/right-red@2x.png
		ReactDOM.render(<Home img="images/fm.png" location="https://github.com/updowndude/start-here"/>,
		document.getElementById('reactHome'));
		ReactDOM.render(<About img="images/me.jpg"/>,
		document.getElementById('reactAbout'));
		ReactDOM.render(<Tools/>,
		document.getElementById('reactTools'));
		ReactDOM.render(<Programming/>,
		document.getElementById('reactProgramming'));
		break;
	case 'Thank you':
		ReactDOM.render(<Thanks/>,
		document.getElementById('reactThank'));
		break;
	default:
		break;
}
