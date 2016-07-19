import React from 'react';
import Test from './test.jsx';

export default class About extends React.Component {
	static propTypes = {
		img: React.PropTypes.string
	}

	static defaultProps = {
		img: '#'
	}

	getChildContext() {
		return {
			fontStyle: 'Slabo 27px'
		};
	}

	render() {
		let {img} = this.props;

		return (
			<article id="reactAbout" class="pageContent">
				<Test title="About"/>
				<p>Author of the project</p>
				<img id="aboutPic" src={img}/>
				<h3>Goal</h3>
				<p>The goal of this project is to help people find a place to start.
				A place to learn the basics of web development, essay writting, and proofreading.
				Starting from the begining can be overwhelming and intimidating, teaching you the basics
				is my goal.</p>
			</article>
    );
	}
}

About.childContextTypes = {
	fontStyle: React.PropTypes.string.isRequired
};
