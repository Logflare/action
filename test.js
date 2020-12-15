const { suite } = require("uvu");
const assert = require("uvu/assert");

const sendLog = require("./lib/send-log");

const nock = require("nock");
nock.disableNetConnect();

const test = suite("app");

test("README example", async function () {
  const metadata = { meta: "data" };
  const inputs = {
    api_key: "apikey123",
    source_id: "sourceid123",
    message: "my log message",
    metadata: JSON.stringify(metadata),
  };

  const infoLogs = [];
  const debugLogs = [];

  const coreMock = {
    getInput: (input) => inputs[input],
    info: (what) => infoLogs.push(what),
    debug: (what) => debugLogs.push(what),
  };

  nock("https://api.logflare.app")
    .post("/logs?api_key=apikey123&source=sourceid123", {
      log_entry: "my log message",
      metadata,
    })
    .reply(200, '{"message":"Logged!"}');

  await sendLog(coreMock).catch(console.log);

  assert.equal(infoLogs, ["Log message sent."]);
  assert.equal(debugLogs, [
    "Sending log ...",
    {
      log_entry: "my log message",
      metadata: {
        meta: "data",
      },
    },
    "Response from Logflare:",
    '{"message":"Logged!"}',
  ]);
});

test.run();
