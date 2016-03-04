var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//mongoose connect
mongoose.connect('mongodb://localhost/to-do_app_mean_stack');

mongoose.model(
    'Task',
    new Schema({
        "task_name": String,
        "task_complete": Boolean,
    },
    {
        collection: 'tasks'
    }
));
//

// assign schema to variable
var Task = mongoose.model('Task');

//GET
router.get('/', function(req, res) {
    console.log('get route working');
    Task.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});

///// POST
router.post('/', function(req, res) {
    var newTask= new Task({
        "task_name": req.body.task_name,
        "task_complete": req.body.task_complete
    });

    newTask.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Task.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        });
    });
});

//delete

router.delete('/:id', function(req, res) {
    console.log('deleting');
    Task.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});

////update
router.put('/:id', function(req, res){
    Task.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {task_complete: true}
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

});





module.exports = router;
