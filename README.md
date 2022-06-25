# create-svelte with payload cms

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
This example also sets up [payload cms](https://payloadcms.com/) with a locally running mongoDB, and tailwind CSS.

## Running a single server with both the payload and sveltekit

We can use the built output of node adapter for sveltekit.
and inject the payload cms handler, see src/server/index.js.

Boot up a docker container with a mongodb

```bash
# Boot up a docker container with a mongodb
docker compose up 

# Install dependencies if you haven't already
yarn

# Run both payload and sveltekit in dev in parallel
yarn dev # run the combined payload and sveltekit node server!

# Reboot container, run build and then dev in one command
yarn dx 

# Run svelte-kit only (dev)
yarn dev:svelte

# run only Payload (stand alone mode)
yarn payload
```

Otherwise all else as normal like a sveltekit app.
