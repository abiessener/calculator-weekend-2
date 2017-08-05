var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.post('/operate', function (req, res) {
    var operandOne = req.body.inputOne;
    var operandTwo = req.body.inputTwo;
    var operation = req.body.operation;
    console.log('/operate hit');    
    console.log(operandOne, operandTwo, operation);

})
var port = 5000;

app.listen(port, function () {
    console.log('listening on port', port);

});