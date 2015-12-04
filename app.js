// var express = require('express');
// var app = express();
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(__dirname + '/public'));
//
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
//
//
var express = require('express');
    gm = require('gm').subClass({imageMagick: true});

var app  = express();

app.set( 'port', ( process.env.PORT || 5000 ) );

app.use( '/assets', express.static( __dirname + '/public' ) );

app.get( '/status', function( req, res ) {
  res.status( 200 ).json({
    app: 'sonny-image-resizer',
    status: 200,
    message: 'OK - ' + Math.random().toString(36).substr(3, 8)
  });

});

// app.get( '/*', function(req, res) {
//       console.log('fsdds');
//       console.log(req.query);
// });

app.get( '/image/:filename', function( req, res ) {
  var filename   = req.params.filename,
      size      = req.query.s || 800,
      quality   = req.query.q || 85;

  gm( './public/images/' + filename )
    .resize( size, size )
    .quality( quality )
    .toBuffer( 'JPG', function( err, buffer ) {
      if ( ! err ) {
        res.set( 'Content-Type', 'image/jpeg' );
        res.send( buffer );
      }
    });
});

app.listen(app.get( 'port' ), function() {
  console.log('Node app is running on port', app.get('port'));
});
