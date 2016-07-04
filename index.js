require('babel-register');
// defualt pack
const path = require('path');
const mysql = require('mysql');
const express = require('express');
const favicon = require('serve-favicon');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(`${__dirname}/public/images/favicon.ico`)));

app.get('/', (request, response) => {
	response.sendFile(path.join(`${__dirname}/index.html`));
}).listen(8080);
