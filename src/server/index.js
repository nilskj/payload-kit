import express from 'express';
import { handler } from '../../build/handler.js';
import payload from 'payload';

const app = express();

// init payload and hook it up to our express server
payload.init({
  secret: 'SECRET_KEY',
  mongoURL: 'mongodb://root:rootpassword@localhost:27017/payload-kit?authSource=admin&readPreference=primary&directConnection=true&ssl=false',
  express: app,
})

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
// disable if payload needs to be run in standalone.
if (process.env.CMS_MODE !== "PAYLOAD_STANDALONE") {
  app.use(handler);
}

app.listen(3000, () => {

  console.log('listening on port 3000');
});