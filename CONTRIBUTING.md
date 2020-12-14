# How to contribute

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Run action locally

You need to have [node](https://nodejs.org/en/) installed. Verify with

```
node -v
```

Make sure you install the dependencies:

```
npm install
```

The action requires four environment variables to be set

1. `INPUT_API_KEY`
2. `INPUT_SOURCE_ID`
3. `INPUT_MESSAGE`
4. `INPUT_METADATA`

```
INPUT_API_KEY=yourapikey INPUT_SOURCE_ID=yoursourceid INPUT_MESSAGE="my message" INPUT_METADATA='{"data":"here"}' node index.js
```
