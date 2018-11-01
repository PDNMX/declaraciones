var express = require('express');
var router = express.Router();

var dbmongo = require("./database_config");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(dbmongo.url, {
    useNewUrlParser: true
  }).then(client => {

    let db = client.db(dbmongo.dbname);
    let collection = db.collection('estadosCiviles');


    collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.json(result)

    });
  }).catch(error => {
    console.log(error);
  });
});

module.exports = router;
