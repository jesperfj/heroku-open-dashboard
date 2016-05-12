'use strict';
exports.topic = {
  name: 'dashboard',
  // this is the help text that shows up under `heroku help`
  description: 'Open app overview page in default browser for current app'
};

exports.commands = [
  require('./commands/dashboard.js')
];
