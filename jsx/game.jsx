import React from 'react';
import Axios from 'axios';
import Test from './test.jsx';

export default class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			info: ''
		};
	}

	componentDidMount() {
		Axios.get('query.json')
		.then(response => {
			this.setState({
				info: `${response.data[2].Character_name}`
			});
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		let {info} = this.state;

		return (
			<article id="reactGame" class="pageContent">
				<Test title="Game"/>
				<h1>{info}</h1>
			</article>
    );
	}
}
