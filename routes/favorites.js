var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/pg_connect');




router.get('/', function(req, res) {
    console.log('get route working');
    var results = [];

    pg.connect(connect, function(err, client, done) {
        var query = client.query('SELECT * FROM favorite_pets');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

/////

router.post('/', function(req, res) {
///split that long description string into a shorter one
var desc = req.body.description.$t;
var abbrDesc = desc.substring(0,100);

    var addFavorite = {
        pet_name: req.body.name.$t,
        pet_img_url: req.body.media.photos.photo[2].$t,
        pet_desc: abbrDesc
    };
    ///commands to send POST is INSIDE the connect.
    pg.connect(connect, function(err, client){

        client.query("INSERT INTO favorite_pets (pet_name, pet_img_url, pet_desc) VALUES ($1, $2, $3)",
            [addFavorite.pet_name, addFavorite.pet_img_url, addFavorite.pet_desc], //pass in array of our values to POST
            function(err, result) {   //call back function
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
    });

});



module.exports = router;
