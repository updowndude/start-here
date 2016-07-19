import React from 'react';
import Test from './test.jsx';

export default class Tools extends React.Component {
	constructor() {
		super();
		this._clicker = this._clicker.bind(this);
		this._clickerProgramming = this._clicker.bind(this, 'Programming');
		this._clickerReverse = this._clicker.bind(this, 'Reverse');
		this._clickerGame = this._clicker.bind(this, 'Game');
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
			<article id="reactTools" class="pageContent">
				<Test title="Tools"/>
				<ul class="demo-list-two mdl-list">
					<li class="mdl-list__item mdl-list__item--two-line">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-avatar">build</i>
							<span class="ToolsName" onClick={this._clickerProgramming}>Programming Map</span>
						</span>
					</li>
					<li class="mdl-list__item mdl-list__item--two-line">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-avatar">build</i>
							<span class="ToolsName" onClick={this._clickerReverse}>Reverse</span>
						</span>
						<span class="mdl-list__item-secondary-content">
						</span>
					</li>
					<li class="mdl-list__item mdl-list__item--two-line">
						<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-avatar">build</i>
							<span class="ToolsName" onClick={this._clickerGame}>Game</span>
						</span>
						<span class="mdl-list__item-secondary-content">
						</span>
					</li>
				</ul>
			</article>
    );
	}
}
