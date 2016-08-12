function findMyCookie(name) {
	const cookiesArray = document.cookie.split(';');
	let myCookie = '';

	for (let i = 0; i < cookiesArray.length; i++) {
		myCookie = cookiesArray[i].trim();

		if (myCookie.indexOf(name) > -1) {
			return myCookie;
		}
	}

	return '';
}

window.onload = () => {
	const snackbarContainer = document.querySelector('#demo-toast-example');
	const myCookie = findMyCookie('told');
	const myData = {
		message: 'This site uses coockies',
		timeout: 2500
	};

	if (myCookie.substring(myCookie.indexOf('=') + 1) !== 'yes') {
		document.cookie = 'told=yes;';
		snackbarContainer.MaterialSnackbar.showSnackbar(myData);
	}
};
