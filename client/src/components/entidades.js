var express = require('express');
var router = express.Router();
var config = require('config');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(config.get("url"), {
    useNewUrlParser: true
  }).then(client => {

    let db = client.db(config.get("dbname"));
    let collection = db.collection('entidades');


    collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result)

    });
  }).catch(error => {
    console.log(error);
  });
});

module.exports = router;
