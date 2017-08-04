var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

var port = 5000;

app.listen(port, function () {
    console.log('listening on port', port);

});