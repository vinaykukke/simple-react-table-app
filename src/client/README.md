# Client-side routing

Using `react-router` and friends for client-side routing.

## Connecting routes and state

We're using `react-router-redux` to keep track of the routes in the state. Note that only v5 (currently in alpha) can be used with `react-router` to keep routes in sync with state.

Note that to access the latest version, we're using the `next` flag. The `next` tag is used by some projects to identify the upcoming version. [NPM Docs](https://docs.npmjs.com/cli/dist-tag)

```json
{
  "react-router-redux": "next"
}
```
