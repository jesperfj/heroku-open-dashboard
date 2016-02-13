'use strict';

let exec = require('child_process').exec;

module.exports = {
  topic: 'dashboard',
  command: 'open',
  description: 'opens Heroku Dashboard',
  default: true,
  help: 'help text for hello:world',
  needsApp: true,
  run: function (context) {
    exec("open https://dashboard.heroku.com/apps/"+context.app)
  }
};
