var express = require('express');
var bodyParser = require('body-parser');
var port = 5000;
var result = '';

app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.post('/operate', function (req, res) {
    var operandOne = +req.body.inputOne;
    var operandTwo = +req.body.inputTwo;
    var operation = req.body.operation;

    console.log('/operate hit');

    switch (operation) {
        case '+':
            result = operandOne + operandTwo;
            break;
        case '-':
            result = operandOne - operandTwo;
            break;
        case '*':
            result = operandOne * operandTwo;
            break;
        case '/':
            result = operandOne / operandTwo;
            break;
        default:
            res.status(400).send('illegal operation');
    }

    console.log('result: ', result);
    result = result.toString();
    res.sendStatus(200);

});

app.get('/operate', function(req,res){
    if(result.length > 0){
        res.send(result);
    } else {
        res.sendStatus(200);
    }

});
app.listen(port, function () {
    console.log('listening on port', port);

});