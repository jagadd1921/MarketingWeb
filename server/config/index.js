'use strict';

var config = module.exports = function(rootPath){

  var conf = {
    paths: require('./paths')(rootPath),
    secrets: require('./secrets'),
    server: require('./server'),
    
  };

  return conf;

};