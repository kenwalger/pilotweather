#!/usr/bin/env node

var weather = require("./weather.js");
var users = process.argv.slice(2);

users.forEach(weather.get);