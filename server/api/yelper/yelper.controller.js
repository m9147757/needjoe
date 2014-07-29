'use strict';

var _ = require('lodash');
var Yelper = require('./yelper.model');

// Search using Yelp
exports.search = function(req, res) {
    var yelp = require("yelp").createClient({
        consumer_key: "f6TEXZpl19BGpCmvj4sFsA",
        consumer_secret: "Tc5rr4kO49xrWjif6CGC-zDt5Q8",
        token: "nW7K79xxVHQKKRVJGB30UyGAbTlwjZD_",
        token_secret: "c4QpX-2fI4vv9DkkowQvg1UojJg"
    });

    yelp.search({term: "food", location: "78759", limit:"20"}, function(error, data) {
        console.log(error);
        console.log(data);

        function TransformYelpResults(yelpBusiness) {

            return {
                name:yelpBusiness.name,
                image_url:yelpBusiness.image_url,
                mobile_url: yelpBusiness.mobile_url
            };
        }

        var restaurants = data.businesses.map(TransformYelpResults);

        res.json(restaurants);
    });
  
};

// Get list of yelpers
exports.index = function(req, res) {
  Yelper.find(function (err, yelpers) {
    if(err) { return handleError(res, err); }
    return res.json(200, yelpers);
  });
};

// Get a single yelper
exports.show = function(req, res) {
  Yelper.findById(req.params.id, function (err, yelper) {
    if(err) { return handleError(res, err); }
    if(!yelper) { return res.send(404); }
    return res.json(yelper);
  });
};

// Creates a new yelper in the DB.
exports.create = function(req, res) {
  Yelper.create(req.body, function(err, yelper) {
    if(err) { return handleError(res, err); }
    return res.json(201, yelper);
  });
};

// Updates an existing yelper in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Yelper.findById(req.params.id, function (err, yelper) {
    if (err) { return handleError(res, err); }
    if(!yelper) { return res.send(404); }
    var updated = _.merge(yelper, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, yelper);
    });
  });
};

// Deletes a yelper from the DB.
exports.destroy = function(req, res) {
  Yelper.findById(req.params.id, function (err, yelper) {
    if(err) { return handleError(res, err); }
    if(!yelper) { return res.send(404); }
    yelper.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}