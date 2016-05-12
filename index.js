'use strict';
exports.topic = {
  name: 'browse',
  // this is the help text that shows up under `heroku help`
  description: 'Open app overview page in default browser for current app'
};

exports.commands = [
  require('./commands/browse.js')
];
