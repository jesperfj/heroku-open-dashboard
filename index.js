'use strict';
exports.topic = {
  name: 'dashboard',
  // this is the help text that shows up under `heroku help`
  description: 'Mac Only: open Heroku Dashboard in default browser'
};

exports.commands = [
  require('./commands/dashboard.js')
];
