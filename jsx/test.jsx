import React from 'react';

export default class Header extends React.Component {
	static propTypes = {
		title: React.PropTypes.string
	}

	static defaultProps = {
		title: ''
	}

	static contextTypes = {
		fontStyle: React.PropTypes.string
	};

	render() {
		const {fontStyle} = this.context;
		let {title} = this.props;
		let myStyle = {
			fontFamily: fontStyle
		};

		return (
			<h2 style={myStyle}>{title}</h2>
    );
	}
}
