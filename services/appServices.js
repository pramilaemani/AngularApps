
//This is for logging purpose
var log4js = require('log4js');
log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app.log'), 'app');
var logger = log4js.getLogger('app');
logger.setLevel(log4js.levels.TRACE);


var traceLogger = function (message) {
        logger.trace('message');
    };

var errorLogger = function (message) {
        logger.trace(message);
    };

/*
 * Services
 */
 var app=angular.module('myApp', []);

 app.factory('appNameSvc', function(){
    return{
      appName : "Vin Camp Application";
    }
 });