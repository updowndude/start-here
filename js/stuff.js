// thanks to http://brangerbriz.net/labs/threejs_playGnd/gui/
let camera;
let scene;
let renderer;
let geometry;
let material;
let mesh;

function setup() {
	const W = window.innerWidth;
	const H = window.innerHeight;
	const homeThree = document.getElementById('homeThree');
	renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true});
	renderer.autoClearColor = false;
	renderer.setSize(W, H);
	renderer = new THREE.WebGLRenderer({alpha: true});
	homeThree.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(50, W / H, 1, 10000);
	camera.position.z = 500;

	scene = new THREE.Scene();

	const loader = new THREE.TextureLoader();
	const	maper = loader.load('images/shape2.png');
	geometry = new THREE.IcosahedronGeometry(192.96, 2);
	material = new THREE.MeshPhongMaterial({shading: THREE.SmoothShading, color: 0x25ffbf, emissive: 0x276ed4, specular: 0x4d0a0a, shininess: 19.31, map: maper, transparent: true, opacity: 0.49});
	mesh = new THREE.Mesh(geometry, material);
	maper.wrapS = maper.wrapT = THREE.RepeatWrapping;
	maper.repeat.set(4.414056809905318, 4.414056809905318);
	mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.38;
	mesh.position.y = 99.26;
	mesh.rotation.x = 5.47;
	mesh.rotation.y = 6.26;
	mesh.rotation.z = 3.18;
	mesh.castShadow = true;
	scene.add(mesh);
	renderer.shadowMap.enabled = true;

	scene.fog = new THREE.Fog(0xf2f7ff, 1, 9000);
	const ambientLight = new THREE.AmbientLight(0x000000);
	scene.add(ambientLight);

	const hemisphereLight = new THREE.HemisphereLight(0xf75c5c, 0x000000, 2.03);
	scene.add(hemisphereLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.position.set(1.26, 1, 0);
	directionalLight.castShadow = true;
	scene.add(directionalLight);

	const spotLight1 = new THREE.SpotLight(0xffffff, 0.1);
	spotLight1.position.set(100, 1000, 100);
	spotLight1.castShadow = true;
	scene.add(spotLight1);

	const spotLight2 = new THREE.SpotLight(0xffffff, 0.1);
	spotLight2.position.set(100, 1000, 100);
	spotLight2.castShadow = true;
	scene.add(spotLight2);
}

function draw() {
	window.requestAnimationFrame(draw);

	mesh.rotation.x = Date.now() * 0.0005;
	mesh.rotation.y = Date.now() * 0.0002;
	mesh.rotation.z = Date.now() * 0.001;

	mesh.position.x = Math.sin(Date.now() * 0.001) * 50;
	mesh.rotation.z = Date.now() * 0.0005;

	renderer.render(scene, camera);
}

window.onload = () => {
	const btnHome = document.getElementById('home');
	const home = document.getElementById('pageHome');
	const navP = document.getElementsByClassName('navP');
	const titler = document.title;
	const ToolsName = document.getElementsByClassName('ToolsName');

	switch (titler) {
		case 'Home':
			setup();
			draw();
			break;
		default:
			break;
	}

	for (let lcv = 0; lcv < navP.length; lcv++) {
		navP[lcv].setAttribute('onclick', 'clicker(this)');
	}

	for (let lcv2 = 0; lcv2 < ToolsName.length; lcv2++) {
		ToolsName[lcv2].setAttribute('onclick', 'clicker(this)');
	}

	if (titler !== 'Thank you') {
		btnHome.onclick = () => {
			home.scrollIntoView(false);
		};
	}
};

function clicker(tagert) {
	let goHere = null;

	tagert = tagert.innerHTML;

	if (tagert.indexOf(' ') >= 0) {
		tagert = tagert.substring(0, tagert.indexOf(' '));

		goHere = document.getElementById(`page${tagert}`);
	} else {
		goHere = document.getElementById(`page${tagert}`);
	}

	switch (tagert) {
		case 'Home':
			goHere.scrollIntoView(false);
			break;
		case 'About':
			goHere.scrollIntoView(false);
			break;
		case 'Tools':
			goHere.scrollIntoView(false);
			break;
		case 'Form':
			goHere.scrollIntoView(false);
			break;
		case 'Programming':
			goHere.scrollIntoView(false);
			break;
		case 'Reverse':
			goHere.scrollIntoView(false);
			break;
		case 'Game':
			goHere.scrollIntoView(false);
			break;
		default:
			break;
	}
}
