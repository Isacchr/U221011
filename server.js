const express = require('express');
const fs = require('fs');
const server = express();
const bodyParser = require('body-parser');


server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true}));