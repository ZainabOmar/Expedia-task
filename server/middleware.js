var bodyParser = require('body-parser');
var express = require ('express');
var morgan = require('morgan');
var request = require('request');

module.exports = function (app, express) {

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/static',  express.static(__dirname + '../client'));

};
