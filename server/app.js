var express = require( 'express' ),
    app = express(),
    yelpAPIKeys = require('./yelpAPIKeys');

// imported keys to hide on GitHub
var yelp = require("yelp").createClient({
  consumer_key: yelpAPIKeys.consumer_key,
  consumer_secret: yelpAPIKeys.consumer_secret,
  token: yelpAPIKeys.token,
  token_secret: yelpAPIKeys.token_secret
});

app.get( '/search', function( req, res ){

// sample url, using local server for testing.
  var searchTerm = req.query.term,
      searchLL = req.query.latitude + "," +req.query.longitude;

  yelp.search({
    term: searchTerm,
    limit: 20,
    ll: searchLL
    }, function( error, data ) {
      // TODO add error handling to let user know request failed
      res.send(data);
  });
});

app.listen(3000, function() {
  console.log("Node/Express server for Flock React Native app started");
});
