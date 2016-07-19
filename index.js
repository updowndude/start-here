require('babel-register');
// defualt pack
const filesystem = require('fs');
const path = require('path');
const mysql = require('mysql');
const express = require('express');
const favicon = require('serve-favicon');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'Mega_Man_Final_Fantasy'
});

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(`${__dirname}/public/images/favicon.ico`)));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
	pool.getConnection((error, connection) => {
		connection.query('SELECT * FROM Characters', (error, rows) => {
			filesystem.writeFile('./public/query.json', JSON.stringify(rows), err => {
				if (err) {
					throw err;
				}
			});
			connection.release();
		});
	});
});

app.post('/', (request, response) => {
	pool.getConnection((error, connection) => {
		connection.query('INSERT INTO users SET ?', request.body, err => {
			if (err) {
				throw err;
			}
			response.send('Done');
		});
	});
});

app.listen(8080);
