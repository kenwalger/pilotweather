#!/usr/bin/env node

var weather = require("./weather.js");
var airports = process.argv.slice(2);

airports.forEach(weather.get);