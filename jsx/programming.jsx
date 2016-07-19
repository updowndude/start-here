import React from 'react';
import Test from './test.jsx';

export default class Programming extends React.Component {
	render() {
		return (
			<article id="reactProgramming" class="pageContent">
				<Test title="Programming Map"/>
				<div class="programmingNode">
					<h2>Server</h2>
					<h3>Php</h3>
					<h3>Node</h3>
					<h3>MySql</h3>
					<svg class="left">
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
					</svg>
				</div>
				<div class="programmingNode">
					<h2>Desktop</h2>
					<h3 class="fourP">Electron</h3>
					<h3 class="fourP">JavaScript</h3>
					<h3 class="fourP">Css</h3>
					<h3 class="fourP">HTML</h3>
					<svg class="right">
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
					</svg>
				</div>
				<div class="programmingNode">
					<h2>Programming</h2>
				</div>
				<div class="programmingNode">
					<h2>Mobile</h2>
					<h3 class="fourP">React Native</h3>
					<h3 class="fourP">Css</h3>
					<h3 class="fourP">HTML</h3>
					<h3 class="fourP">JavaScript</h3>
					<svg class="right">
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
					</svg>
				</div>
				<div class="programmingNode">
					<h2>Web</h2>
					<h3>JavaScript</h3>
					<h3>Css</h3>
					<h3>HTML</h3>
					<svg class="left">
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
						<line x1="50" y1="200" x2="300" y2="200"/>
					</svg>
				</div>
			</article>
    );
	}
}
