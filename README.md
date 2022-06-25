# create-svelte with payload cms

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
This example also sets up [payload cms](https://payloadcms.com/) with a locally running mongoDB, and tailwind CSS.

## Running a single server with both the payload and sveltekit

We can use the built output of node adapter for sveltekit.
and inject the payload cms handler, see src/server/index.js.

Boot up a docker container with a mongodb


```bash
docker compose up # Boot up a docker container with a mongodb
yarn # Install deps
yarn build # Build sveltekit output
yarn cms # run the combined payload and sveltekit node server!

yarn dx #re-boot container, run build and start server in one command
```

Otherwise all else as normal like a sveltekit app.