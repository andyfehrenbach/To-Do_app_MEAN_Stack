var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var task = require('./routes/task');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/task', task);



// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/views/templates'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));
app.use(express.static('public/images'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
