"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function setup(){var e=window.innerWidth,t=window.innerHeight,n=document.getElementById("homeThree");renderer=new THREE.WebGLRenderer({preserveDrawingBuffer:!0}),renderer.autoClearColor=!1,renderer.setSize(e,t),renderer=new THREE.WebGLRenderer({alpha:!0}),n.appendChild(renderer.domElement),camera=new THREE.PerspectiveCamera(50,e/t,1,1e4),camera.position.z=500,scene=new THREE.Scene;var a=new THREE.TextureLoader,r=a.load("images/shape2.png");geometry=new THREE.IcosahedronGeometry(192.96,2),material=new THREE.MeshPhongMaterial({shading:THREE.SmoothShading,color:2490303,emissive:2584276,specular:5048842,shininess:19.31,map:r,transparent:!0,opacity:.49}),mesh=new THREE.Mesh(geometry,material),r.wrapS=r.wrapT=THREE.RepeatWrapping,r.repeat.set(4.414056809905318,4.414056809905318),mesh.scale.x=mesh.scale.y=mesh.scale.z=1.38,mesh.position.y=99.26,mesh.rotation.x=5.47,mesh.rotation.y=6.26,mesh.rotation.z=3.18,mesh.castShadow=!0,scene.add(mesh),renderer.shadowMap.enabled=!0,scene.fog=new THREE.Fog(15923199,1,9e3);var o=new THREE.AmbientLight(0);scene.add(o);var c=new THREE.HemisphereLight(16211036,0,2.03);scene.add(c);var s=new THREE.DirectionalLight(16777215,1);s.position.set(1.26,1,0),s.castShadow=!0,scene.add(s);var l=new THREE.SpotLight(16777215,.1);l.position.set(100,1e3,100),l.castShadow=!0,scene.add(l);var i=new THREE.SpotLight(16777215,.1);i.position.set(100,1e3,100),i.castShadow=!0,scene.add(i)}function draw(){window.requestAnimationFrame(draw),mesh.rotation.x=5e-4*Date.now(),mesh.rotation.y=2e-4*Date.now(),mesh.rotation.z=.001*Date.now(),mesh.position.x=50*Math.sin(.001*Date.now()),mesh.rotation.z=5e-4*Date.now(),renderer.render(scene,camera)}function clicker(e){var t=null;switch(e=e.innerHTML,e.indexOf(" ")>=0?(e=e.substring(0,e.indexOf(" ")),t=document.getElementById("page"+e)):t=document.getElementById("page"+e),e){case"Home":t.scrollIntoView(!1);break;case"About":t.scrollIntoView(!1);break;case"Tools":t.scrollIntoView(!1);break;case"Form":t.scrollIntoView(!1);break;case"Programming":t.scrollIntoView(!1);break;case"Reverse":t.scrollIntoView(!1);break;case"Game":t.scrollIntoView(!1)}}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),titler=document.title,Home=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.img,n=e.location;return React.createElement("div",null,React.createElement("h1",null,"Home"),React.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},React.createElement("img",{id:"homePic",src:t})),React.createElement("div",{id:"homeThree"}))}}]),t}(React.Component),About=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props.img;return React.createElement("div",null,React.createElement("h2",null,"About"),React.createElement("img",{id:"aboutPic",src:e}),React.createElement("h3",null,"Goal"),React.createElement("p",null,"The goal of the project is to help a person help a place to start. This place where a person is starting from web development, game development essay writing."))}}]),t}(React.Component),Programming=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement("h1",null,"Programming Map"))}}]),t}(React.Component),Thanks=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement("h1",null,"Thank you"))}}]),t}(React.Component),Tools=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement("h2",null,"Tools"),React.createElement("ul",{className:"demo-list-two mdl-list"},React.createElement("li",{className:"mdl-list__item mdl-list__item--two-line"},React.createElement("span",{className:"mdl-list__item-primary-content"},React.createElement("i",{className:"material-icons mdl-list__item-avatar"},"build"),React.createElement("span",{className:"ToolsName"},"Programming"))),React.createElement("li",{className:"mdl-list__item mdl-list__item--two-line"},React.createElement("span",{className:"mdl-list__item-primary-content"},React.createElement("i",{className:"material-icons mdl-list__item-avatar"},"build"),React.createElement("span",{className:"ToolsName"},"Reverse")),React.createElement("span",{className:"mdl-list__item-secondary-content"})),React.createElement("li",{className:"mdl-list__item mdl-list__item--two-line"},React.createElement("span",{className:"mdl-list__item-primary-content"},React.createElement("i",{className:"material-icons mdl-list__item-avatar"},"build"),React.createElement("span",{className:"ToolsName"},"Game")),React.createElement("span",{className:"mdl-list__item-secondary-content"}))))}}]),t}(React.Component);switch(titler){case"Home":ReactDOM.render(React.createElement(Home,{img:"images/fm.png",location:"https://github.com/updowndude/start-here"}),document.getElementById("reactHome")),ReactDOM.render(React.createElement(About,{img:"images/me.jpg"}),document.getElementById("reactAbout")),ReactDOM.render(React.createElement(Tools,null),document.getElementById("reactTools")),ReactDOM.render(React.createElement(Programming,null),document.getElementById("reactProgramming"));break;case"Thank you":ReactDOM.render(React.createElement(Thanks,null),document.getElementById("reactThank"))}var camera=void 0,scene=void 0,renderer=void 0,geometry=void 0,material=void 0,mesh=void 0;window.onload=function(){var e=document.getElementById("home"),t=document.getElementById("pageHome"),n=document.getElementsByClassName("navP"),a=document.title,r=document.getElementsByClassName("ToolsName");switch(a){case"Home":setup(),draw()}for(var o=0;o<n.length;o++)n[o].setAttribute("onclick","clicker(this)");for(var c=0;c<r.length;c++)r[c].setAttribute("onclick","clicker(this)");"Thank you"!==a&&(e.onclick=function(){t.scrollIntoView(!1)})};