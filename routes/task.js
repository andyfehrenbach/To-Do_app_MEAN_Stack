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


router.get('/', function(req, res) {
    console.log('get route working');
    Task.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});

/////

// router.post('/', function(req, res) {
// ///split that long description string into a shorter one
// var desc = req.body.description.$t;
// var abbrDesc = desc.substring(0,100);
//
//     var addFavorite = {
//         pet_name: req.body.name.$t,
//         pet_img_url: req.body.media.photos.photo[2].$t,
//         pet_desc: abbrDesc
//     };
//     ///commands to send POST is INSIDE the connect.
//     pg.connect(connect, function(err, client){
//
//         client.query("INSERT INTO favorite_pets (pet_name, pet_img_url, pet_desc) VALUES ($1, $2, $3)",
//             [addFavorite.pet_name, addFavorite.pet_img_url, addFavorite.pet_desc], //pass in array of our values to POST
//             function(err, result) {   //call back function
//                 if(err) {
//                     console.log("Error inserting data: ", err);
//                     res.send(false);
//                 } else {
//                     res.send(true);
//                 }
//             });
//     });
//
// });



module.exports = router;
