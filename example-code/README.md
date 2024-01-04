# Examples of using an API

## Setup

Using Node v20

Run `npm install`

Update `auth.mjs` file and replace `process.env.X_TBA_AUTH_KEY` on line 2 with the value of your `X-TBA-Auth-Key`

## Example files

These examples use [node-fetch](https://www.npmjs.com/package/node-fetch) module to make rest calls.

### status-call.mjs

`status-call.mjs` - calls `/status` endpoint and prints response

Run with `node status-call.mjs`
