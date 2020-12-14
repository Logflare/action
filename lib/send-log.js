module.exports = sendLog;

const { post } = require("got");

/**
 * @param {import("@actions/core")} core
 */
async function sendLog(core) {
  const api_key = core.getInput("api_key", { required: true });
  const source_id = core.getInput("source_id", { required: true });
  const log_entry = core.getInput("message", { required: true });
  const metadata = JSON.parse(core.getInput("metadata", { required: true }));

  const url = `https://api.logflare.app/logs?api_key=${api_key}&source=${source_id}`;
  const json = { log_entry, metadata };

  const { statusCode, statusMessage, body } = await post(url, { json });

  if (statusCode !== 200) {
    const error = new Error(
      `api.logflare.app responded with ${statusCode} ${statusMessage}`
    );
    error.response = { statusCode, statusMessage, body };
    throw error;
  }

  core.info("Log message sent");
  core.debug("Response from Logflare:");
  core.debug(body);
}
