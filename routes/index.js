const express = require("express");
const request = require("request");
const router = express.Router();
var apiKey = require('../apiKey');

import { renderToString } from "react-dom/server";
import App from "../public/javascripts/components/app";
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<App />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

router.get('/journals/search/:query', function(req, res){
var options = {
url:'http://apis.baidu.com/qunartravel/travellist/travellist?page=1&query=' + req.params.query,
headers: {"apikey": apiKey.apiKey}
}
var callback = function(err, response, body){
res.send(body);
}
request(options, callback)
})

module.exports = router;
