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

# Run both payload and sveltekit in dev in parallel, sveltekit at 3000, cms at 3001
yarn dev

# Reboot container, run build and then dev in one command
yarn dx 

# Serve a merged server handling both Payload and Svelte for prod
yarn serve
```

Otherwise all else as normal like a sveltekit app.
