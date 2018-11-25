const c2k = require('koa-connect');
const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.all('/Home/*', async function (next) {
    await c2k(proxy({
      target: 'http://www.thyxzs.com',
      changeOrigin: true
    }))(this, next);
  });
  app.get('/*', app.controller.app.index);
};
