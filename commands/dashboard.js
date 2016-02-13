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
    if(process.platform == "darwin") {
      exec("open https://dashboard.heroku.com/apps/"+context.app)
    } else if(process.platform == "win32") {
      exec("start https://dashboard.heroku.com/apps/"+context.app)
    } else if(process.platform == "linux"){
      exec("xdg-open https://dashboard.heroku.com/apps/"+context.app)
    } else {
      console.log("Sorry. Don't know how to open a browser on your OS: "+process.platform)
    }
  }
};
