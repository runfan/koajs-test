'use strict';

const Koa = require('koa');
const app = new Koa();
const router = require('./src/routes');
// x-response-time

app.use((ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    ctx.set('X-Response-Time', ms + 'ms');
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

app.use(router.root.routes())
  .use(router.root.allowedMethods())
// response

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);
console.log('listen 3000')