var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favorites = require('./routes/');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//mongoose connect
mongoose.connect('mongodb://localhost/to-do_app_mean_stack');

mongoose.model(
    'Task',
    new Schema({
        "task_name": String,
        "task_complete": bool,
    },
    {
        collection: 'tasks'
    }
));

// assign schema to variable
var Task = mongoose.model('Task');

app.use('/favorites', favorites);



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
