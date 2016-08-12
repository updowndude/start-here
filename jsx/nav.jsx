import React from 'react';
import {Button} from 'react-bootstrap';

export default class Nav extends React.Component {
	// Router version links <Link to="/">
	constructor() {
		super();
		this._clicker = this._clicker.bind(this);
		this._clickerHome = this._clicker.bind(this, 'Home');
		this._clickerAbout = this._clicker.bind(this, 'About');
		this._clickerProgramming = this._clicker.bind(this, 'Programming');
		this._clickerReverse = this._clicker.bind(this, 'Reverse');
		this._clickerGame = this._clicker.bind(this, 'Game');
		this._clickerForm = this._clicker.bind(this, 'Form');
	}

	_clicker(tagert) {
		const goHere = document.getElementById(`react${tagert}`);
		// if using different layout
		// .scrollIntoView(false);
		const myReactElements = document.getElementsByClassName('pageContent');
		for (let i = 0; i < myReactElements.length; i++) {
			myReactElements[i].style.display = 'none';
		}
		goHere.style.display = 'block';
	}

	render() {
		return (
			<article>
				<div class="mdl-layout mdl-js-layout">
					<header class="mdl-layout__header">
						<div class="mdl-layout__header-row">
							<span class="mdl-layout-title">Pages</span>
							<div class="mdl-layout-spacer"></div>
							<nav class="mdl-navigation">
								<img src="images/shape.png" alt="Shape"/>
							</nav>
						</div>
					</header>
					<div class="mdl-layout__drawer">
						<span class="mdl-layout-title">Pages</span>
						<nav class="mdl-navigation">
							<p class="navP" onClick={this._clickerHome}>Home &nbsp;</p>
							<p class="navP" onClick={this._clickerAbout}>About &nbsp;</p>
							<p class="navP" onClick={this._clickerForm}>Form &nbsp;</p>
							<hr/>
							<p class="navP" onClick={this._clickerProgramming}>Programming Map</p>
							<p class="navP" onClick={this._clickerReverse}>Reverse</p>
							<p class="navP" onClick={this._clickerGame}>Game</p>
						</nav>
					</div>
				</div>

				<Button bsClass="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" id="home">
					<i class="material-icons" onClick={this._clickerHome}>home</i>
				</Button>
			</article>
		);
	}
}
