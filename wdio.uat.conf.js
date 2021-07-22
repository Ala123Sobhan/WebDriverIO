//merge parent conf object and add new configuration (baseUrl, connection timeout)

const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");

exports.config = merge(wdioConf.config, {
  baseUrl: "http://rahulshettyacademy.com",
  waitforTimeout: 10000,
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    grep: "Smoke",
  },
});

//run this conf file - npx wdio run wdio.uat.conf.js
