"use strict";

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const ORDERS_FILE = path.join(__dirname, 'orders.json');
const MEALS_FILE = path.join(__dirname, 'meals.json');

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  
  next();
});

app.get('/api/orders', function(req, res) {
  fs.readFile(ORDERS_FILE, function(err, data){
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/meals', function(req, res) {
  fs.readFile(MEALS_FILE, function(err, data){
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/orders', function(req, res) {
    fs.readFile(ORDERS_FILE, function(err, data) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    let orders = JSON.parse(data);
    var newOrder = {
      date: Date.now(),
      meal: req.body.meal,
      price: req.body.price,
      user: req.body.user
    };
    orders.push(newOrder);
    fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 4), function(err){
      if(err) {
        console.error(err);
        process.exit(1);
      }
      res.json(orders);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server Started: http://localhost:' + app.get('port') + '/');
});
