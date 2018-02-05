var express = require('express') ;
var path = require('path') ;
var logger = require('morgan') ;
var cookierParser = require('cookie-parser');
var bodyParser = require('body-parser') ;

var http = require('http') ;


var app = express() ;
// api for inteacting with mongodb
var api = require('./server/routes/api') ;

// Parsers
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(cookierParser()) ;
app.use( logger('dev') ) ;

app.use( express.static(path.join(__dirname,'dist'))) ;

// API location
app.use('/api', api.router ) ;

// send all other request to the angular app

app.get('*', (req, res)=> {
  res.sendFile( path.join(__dirname, 'dist/index.html') ) ;
});

//Set port
const port = process.env.port || '3000' ;
app.set('port', port ) ;

const server = http.createServer(app);

api.connection(
  'mongodb://localhost:27017/' ,
  'todo',
  ( db ) => {
    server.listen(port, ()=> console.log( `Running  on localhost:${port}`));
    // api.getTodos( ( data )=>{
    //   console.log( data )  ;
    // }, ()=>{} ) ;
  }
);

