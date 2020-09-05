const dotenv = require("dotenv");

const os = require('os');
const homedir = os.homedir();

const result = dotenv.config({
  path: `${homedir}/bbb-live-recorder/.env`
});

if (result.error) {
  throw result.error;
}

const { parsed: envs } = result;

module.exports = envs;
