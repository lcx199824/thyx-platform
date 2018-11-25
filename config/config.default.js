const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};
  exports.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [
      'http://localhost:3000'
    ]
  };

  exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  exports.siteFile = {
    // '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'public/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: [ path.join(app.baseDir, 'public'), path.join(app.baseDir, 'statics') ]
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
    // 'proxy'
  ];

  exports.bodyParser = {
    ignore: '/Home/*'
  };

  return exports;
};
