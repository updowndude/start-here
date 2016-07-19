import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout.jsx';
import Thanks from './thanks.jsx';

switch (document.title) {
	case 'Home':
		ReactDOM.render(<Layout/>,
			document.getElementById('myStuff'));
		break;
	case 'Thank you':
		ReactDOM.render(<Thanks/>,
		document.getElementById('thankStuff'));
		break;
	default:
		break;
}
