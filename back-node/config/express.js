const express = require('express');

module.exports = function(){
  let app = express();

  app.set("port", 8393);
  return app;
}