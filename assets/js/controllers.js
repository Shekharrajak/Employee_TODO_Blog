define(function (require) {
  
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
  
  Controllers.controller('angEmpController', require('controllers/angEmployeeController'));
  
  return Controllers;

  function loginGet(req, res){
  if(req.user){
    // already logged in
    return true;
  } else {
    // not logged in, show the login form, remember to pass the message
  /*  // for displaying when error happens
    res.render('login', { message: req.session.messages });
    // and then remember to clear the message
    req.session.messages = null;*/
    return false;
  }
}
  
});