exports.static = true;

exports.vuessr = {
  enable: true,
  package: 'egg-view-vue-ssr'
};
exports.cors = {
  enable: true,
  package: 'egg-cors'
};
exports.security = {
  domainWhiteList: [ 'http://localhost:7100'],
};