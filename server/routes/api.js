const express = require('express') ;
const router = express.Router() ;
const MongoClient = require( 'mongodb' ).MongoClient ;
const ObjectID = require( 'mongodb' ).ObjectID ;
var dbo ;
var mydb ;

connection = (_url, dbname, closure) => {
  // making sure we connect to the db as app start
  return MongoClient.connect( _url, (err, _db) => {
    if ( err )
      return console.log( err ) ;
    dbo = _db ;
    mydb = dbo.db( dbname) ;
    closure(_db) ;
  });
};

// Error handling
const sendError = ( err, res ) =>{
    response.status = 501 ;
    response.message = typeof err == 'object' ? err.message : err ;
    res.status(501).json(response) ;
}

// ok response
let response = {
  status : 200,
  data : [],
  message : null
};
// Get from db
router.get('/todo', (req, res)=>{
  mydb.collection( 'todo' )
    .find()
    .toArray()
    .then( (data) =>{
      response.data = data ;
      res.json( response ) ;
    })
    .catch( (err)=>{
      sendError( err, res ) ;
    });
});
// insert todo
router.post('/todo', (req, res)=>{
  console.log( req.body ) ;
  if ( ! req.body.task ) {
    res.status = 400 ;
    res.json({
      "error" : "Invalid Data "
    });
    return ;
  }
  mydb.collection( 'todo' )
    // save sort form for insert
    .save ({
        task : req.body.text ,
        check : req.body.check,
      },
      (err, result ) => {
        if ( err )
          res.send( err ) ;
        res.json( result ) ;
      }
    ) ;
});

// update todo
router.put('/todo/:id', (req, res)=>{
  if ( ! req.body.text ) {
    res.status = 400 ;
    res.json({
      "error" : "Invalid Data "
    });
    return ;
  }
  mydb.collection( 'todo' )
    // save sort form for insert
    .save ({
        task : req.body.text ,
        check : req.body.check,
      },
      (err, result ) => {
        if ( err )
          res.send( err ) ;
        else
          res.json( '' ) ;
      }
    ) ;
});


// delete todo
router.delete('/todo/:id', (req, res)=>{
  if ( ! req.params.id ) {
    res.status = 400 ;
    res.json({
      "error" : "Invalid Data "
    });
    return ;
  }
  mydb.collection( 'todo' )
    // save sort form for insert
    .deleteOne ({
        _id : req.params.id
      },
      (err, result ) => {
        if ( err )
          res.send( err ) ;
        else
          res.json( '' ) ;
      }
    ) ;
});

module.exports = { router : router, connection: connection } ;
