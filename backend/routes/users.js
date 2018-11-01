var express = require('express');
var router = express.Router();

var dbmongo = require("./database_config");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(req.body);

  var result = {
    code: 200,
    body: req.body
  };
  //console.log(result);

  MongoClient.connect(dbmongo.url, {
    useNewUrlParser: true
  }).then(client => {

    let db = client.db(dbmongo.dbname);
    let collection = db.collection('usuarios');

    console.log(req.query);

    const {
      usuario,
      clave
    } = req.body;


    collection.findOne({
      "usuario": usuario
    }).then(data => {
      console.log(data);

      if (data == null) {
        res.send({
          code:205
        })
      } else {
        if (data.clave == clave) {
          res.send({
            code: 200
          })
        } else {
          res.send({
            code: 204
          })
        }
      }

      // res.json(data);
    });

  }).catch(error => {
    console.log(error);
  });

  // res.status(200);
  // res.send(result);



});

module.exports = router;
