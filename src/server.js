import 'babel-polyfill';

import { join } from 'path';
import React from 'react';
import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import logger from 'koa-logger';
import ReactDOMServer from 'react-dom/server';
import App from './client/App';

import homeHtml from './templates/home.html';
import csrHtml from './templates/client-side-rendered.html';
import ssrHtml from './templates/server-side-rendered.html';

const app = new Koa();
const router = new Router();
const PORT = 3000;

router.get('/', ctx => {
  ctx.body = homeHtml;
});

router.get('/csr', ctx => {
  ctx.body = csrHtml;
});

router.get('/ssr', ctx => {
  const reactMarkup = ReactDOMServer.renderToString(<App ssr />);
  const htmlMarkup = ssrHtml.replace('{{ INJECT_REACT_HERE }}', reactMarkup);

  ctx.body = htmlMarkup;
});

app.use(serve(join(__dirname, 'public')));
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`> Server listening on http://localhost:${PORT}`);
});
