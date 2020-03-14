const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000','https://localhost:3443', 'http://DESKTOP-UVMCLH1:3001']
var corsOptionsDelegate = (req,callback) => {
	var corOptions;

	if (whitelist.indexOf(req.header('Origin')) !== -1) {
		corOptions = {origin: true};
	} else {
		corOptions = {origin: false};
	}
	callback(null, corOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);