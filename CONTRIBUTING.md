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

## Maintainers only: releasing a new version

Releases are automated using [semantic-release](https://github.com/semantic-release/semantic-release) when ever a push occurs on the `main` branch. The following commit message conventions determine which version is released:

1. `fix: ...` or `fix(scope name): ...` prefix in subject: bumps fix version, e.g. `1.2.3` → `1.2.4`
2. `feat: ...` or `feat(scope name): ...` prefix in subject: bumps feature version, e.g. `1.2.3` → `1.3.0`
3. `BREAKING CHANGE:` in body: bumps breaking version, e.g. `1.2.3` → `2.0.0`

If a pull request looks good but does not follow the commit conventions, use the "Squash & merge" button to update the commit message when merging.

Only one version number is bumped at a time, the highest version change trumps the others.
Besides publishing a new version to npm, semantic-release also creates a git tag and release
on GitHub, generates changelogs from the commit messages and puts them into the release notes.

It also builds the code into a single binary and pushes the update to the `v1` branch. That ways users get fix/feature updates automatically when they use `uses: logflare/action@v1` in their workflow file.
