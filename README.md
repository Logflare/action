# 🚧 WORK IN PROGRESS - see [#1](https://github.com/gr2m/logflare-log-action/pull/1)

# Logflare Log Action

> GitHub Action to create a log in a [Logflare](https://logflare.app/) source

[![Build Status](https://github.com/gr2m/logflare-log-action/workflows/Test/badge.svg)](https://github.com/gr2m/logflare-log-action/actions)

## Usage

Before using the action, you need to create two secrets in your repository settings:

1. `LOGFLARE_API_KEY` - your Logflare API Key, find it on [your Logflare Dashboard](https://logflare.app/dashboard)
2. `LOGFLARE_SOURCE_ID` - ID of one of your surces listed on [your Logflare Dashboard](https://logflare.app/dashboard)

Example: Log every new release ([example for `github.event` data](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/webhook-events-and-payloads#webhook-payload-example-34))

```yml
name: Log new release
on:
  release:
    types: [published]

jobs:
  log:
    runs-on: ubuntu-latest
    steps:
      - uses: gr2m/logflare-log-action@v1.x
        id: stats
        with:
          api_key: ${{ secrets.LOGFLARE_API_KEY }}
          source_id: ${{ secrets.LOGFLARE_SOURCE_ID }}
          message: "new release: ${{ github.event.release.html_url }}"
          metadata: ${{ toJSON(github.event) }}
```

## Debugging

To see additional debug logs, create a secret with the name: `ACTIONS_STEP_DEBUG` and value `true`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[ISC](LICENSE)
