const core = require("@actions/core");

const sendLog = require("./lib/send-log");

sendLog(core).catch((error) => {
  core.error(error);
  core.setFailed(error.message);
});
