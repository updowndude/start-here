function findMyCookie(name) {
	const cookiesArray = document.cookie.split(';');
	let nameCookie = '';

	for (let i = 0; i < cookiesArray.length; i++) {
		nameCookie = cookiesArray[i].trim();

		if (nameCookie.indexOf(name) > -1) {
			return nameCookie;
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
