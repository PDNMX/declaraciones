var express = require("express");
var router = express.Router();

var dbmongo = require("./database_config");

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const ObjectId = require("mongodb").ObjectId;

/* GET users listing. */
router.post("/", function(req, res, next) {
  MongoClient.connect(
    dbmongo.url,
    {
      useNewUrlParser: true
    }
  )
    .then(client => {
      let db = client.db(dbmongo.dbname);
      let collection = db.collection("s1");
      console.log(req.body);

      // collection.find(req.query).toArray(function(err, result) {
      collection.insertOne(req.body, function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.json({
          code: 200,
          result: result
        });
      });
    })
    .catch(error => {
      console.log(error);
      res.json({
        result: error
      });
    });
});

module.exports = router;
