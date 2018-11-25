'use strict';
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app/index.js'
  },
  buildPath: 'statics',
  alias: {
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js',
    '@': 'app/web'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    sass: true,
    scss: true
  },
  plugins: {
    // copy: [{
    //   from: 'app/web/asset/css/bootstrap.min.css',
    //   to: 'asset/css/bootstrap.min.css'
    // }]
  },
  done() {

  }
};
