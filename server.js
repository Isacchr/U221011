const express = require('express');
const server = express();
const fs = require('fs');
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

server.post('/contacts', (req, res) => {

    var contactsJson = req.body;

    console.log(contactsJson);
    console.log(contacts);

    /*fs.writeFile("data.json", contactsJson, 'utf8', function (err) {
        
        res.end();
        
    })*/

})

server.listen(8080);