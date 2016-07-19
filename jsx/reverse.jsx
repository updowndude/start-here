import React from 'react';
import Test from './test.jsx';

export default class Reverse extends React.Component {
	constructor() {
		super();
		this._deleteMyText = this._deleteMyText.bind(this);
		this._saveMyText = this._saveMyText.bind(this);
		this._loadMyText = this._loadMyText.bind(this);
		this._changeNumber = this._changeNumber.bind(this);
		this._speack = this._speack.bind(this);
		this.state = {
			works: true,
			limit: 0,
			worksSave: true,
			worksClear: true,
			worksSpeack: true
		};
	}

	componentDidMount() {
		if (findMyCookie('speack') !== '') {
			this.setState({
				works: false
			});
		}
	}

	_speack() {
		const sentences = document.querySelector('.mdl-textfield__input').value.split('.');
		const myMessage = new SpeechSynthesisUtterance(sentences.reverse());
		window.speechSynthesis.speak(myMessage);
	}

	_deleteMyText() {
		document.querySelector('.mdl-textfield__input').value = '';

		this.setState({
			worksClear: true,
			worksSpeack: true,
			worksSave: true,
			limit: 0
		});
	}

	_saveMyText() {
		const snackbarContainer = document.querySelector('#demo-toast-example');

		const myData = {
			message: '',
			timeout: 2500
		};

		myData.message = 'Text was saved for the reverse';

		if (findMyCookie('speack') === '') {
			this.setState({
				works: false
			});
		}

		document.cookie = `speack=${document.querySelector('.mdl-textfield__input').value};`;
		snackbarContainer.MaterialSnackbar.showSnackbar(myData);
	}

	_loadMyText() {
		const myCookie = findMyCookie('speack');
		document.querySelector('.mdl-textfield__input').value = myCookie.substring(myCookie.indexOf('=') + 1);
	}

	_changeNumber() {
		const charHolder = document.querySelector('.mdl-textfield__input');
		const charNum = charHolder.value.length;
		const charVal = document.querySelector('#charVal');
		const wrapper = document.querySelector('#wrapper');
		const dialog = document.querySelector('dialog');

		this.setState({
			limit: charNum
		});

		if (charNum === 0) {
			this.setState({
				worksClear: true,
				worksSpeack: true,
				worksSave: true
			});
		} else {
			this.setState({
				worksClear: false,
				worksSpeack: false,
				worksSave: false
			});
		}

		if (charNum > 3500) {
			wrapper.style.backgroundColor = '#421414';
			charVal.style.color = '#1bb';

			this.setState({
				worksSave: true
			});
		} else {
			wrapper.style.backgroundColor = '#b83737';
			charVal.style.color = '#D1F8A1';
		}

		if ((charHolder.value.indexOf('?') >= 0) || (charHolder.value.indexOf('!') >= 0)) {
			// mdl diglog
			if (!dialog.showModal) {
				dialogPolyfill.registerDialog(dialog);
			}

			dialog.showModal();

			dialog.querySelector('.close').addEventListener('click', () => {
				dialog.close();
			});

			this.setState({
				worksSpeack: true
			});
		}
	}

	render() {
		let {works, limit, worksSave, worksClear, worksSpeack} = this.state;

		return (
			<article id="reactReverse" class="pageContent">
				<Test title="Reverse"/>
				<textarea onInput={this._changeNumber} class="mdl-textfield__input" placeholder="Enter some text" rows="20" cols="100"></textarea>
				<div id="wrapper">
					<button id="demo-menu-top-right" class="mdl-button mdl-js-button mdl-button--icon">
						<i class="material-icons">more_vert</i>
					</button>
					<ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect" data-mdl-for="demo-menu-top-right">
						<li disabled={worksSpeack} class="mdl-menu__item" onClick={this._speack}>Speak</li>
						<li disabled={worksClear} class="mdl-menu__item" onClick={this._deleteMyText}>Clear</li>
						<li disabled={worksSave} class="mdl-menu__item" onClick={this._saveMyText}>Save</li>
						<li disabled={works} class="mdl-menu__item" onClick={this._loadMyText}>Load</li>
					</ul>
				</div>
				<p id="charVal">{limit}/3500 characters</p>

				<dialog class="mdl-dialog">
					<h4 class="mdl-dialog__title">Sorry</h4>
					<div class="mdl-dialog__content">
						<p>
							We can't handle ! and ?, so replace them with.
						</p>
					</div>
					<div class="mdl-dialog__actions">
						<button type="button" class="mdl-button close">Agree</button>
					</div>
				</dialog>
			</article>
    );
	}
}
