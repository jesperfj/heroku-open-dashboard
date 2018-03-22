'use strict';

let exec = require('child_process').exec;

const openApp = (app, subpage) => {
  const url = "https://dashboard.heroku.com/apps/"+app+(subpage ? "/"+subpage : "");
    if(process.platform == "darwin") {
      exec("open "+url)
    } else if(process.platform == "win32") {
      exec("start "+url)
    } else if(process.platform == "linux"){
      exec("xdg-open "+url)
    } else {
      console.log("Sorry. Don't know how to open a browser on your OS: "+process.platform)
    }
};

module.exports = (subpagecommand) => ({
  topic: 'browse',
  command: subpagecommand,
  description: `Opens the app ${subpagecommand} page for the current app in your default browser`,
  default: true,
  help: '',
  needsApp: true,
  run: function (context) {
    openApp(context.app, subpagecommand);
  }
});
