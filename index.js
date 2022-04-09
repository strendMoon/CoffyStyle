
const express = require("express");


const app = express();


app.get('/', function(req, res) {
    res.sendFile(__dirname +'/view/index.html');
});

app.use(express.static(__dirname + '/view'));


const host = 'localhost';
const port = 8000;


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
