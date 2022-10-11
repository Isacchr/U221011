const express = require('express');
const fs = require('fs');
const server = express();
const bodyParser = require('body-parser');


server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true}));

server.get('/', (req, res) => {

    fs.readFile('/public/index.html', (err, data) => {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();

    });

    
});