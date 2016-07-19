import React from 'react';
import About from './about.jsx';
import Form from './form.jsx';
import Game from './game.jsx';
import Home from './home.jsx';
import Programming from './programming.jsx';
import Reverse from './reverse.jsx';
import Tools from './tools.jsx';
import Nav from './nav.jsx';

export default class Layout extends React.Component {
	render() {
	// http://aral.github.io/fork-me-on-github-retina-ribbons/right-red@2x.png

		return (
			<section>
				<Nav/>
				<Home img="images/fm.png" location="https://github.com/updowndude/start-here"/>
				<About img="images/me.jpg"/>
				<Tools/>
				<Programming/>
				<Reverse/>
				<Game/>
				<Form/>
			</section>
		);
	}
}
