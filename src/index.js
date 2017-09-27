var $ = require('jquery');

var str = require('./constant');

var App = function () {
  console.log(str);
  $('body').html(str);

};

var App = new App();