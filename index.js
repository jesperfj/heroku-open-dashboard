'use strict';

const browseCommand = require('./commands/browse.js');

exports.topic = {
  name: 'browse',
  // this is the help text that shows up under `heroku help`
  description: 'Open app overview page in default browser for current app'
};

const subpages = ['overview', 'deploy', 'resources', 'metrics', 'activity', 'access', 'settings'];

exports.commands = subpages.map(page => browseCommand(page));
