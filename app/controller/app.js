const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
const httpProxy = require('http-proxy');

class AppController extends Controller {
  async index() {
    const seo = (await this.ctx.service.data.getSeo()) || { title: '北京泰和印象装修设计', description: '泰和印象', keywords: '泰和印象' };
    // console.log('++++++++++++++++++++++++++++++++++++');
    // console.log(seo);
    for (let i = 0; i < seo.data.length; i++) {
      if (this.ctx.url === seo.data[i].url) {
        // await this.ctx.render('app.js', { url: this.ctx.url, seo });
        await this.ctx.render('app.js', { url: seo.data[i].url, seo });
      } else {
        await this.ctx.render('app.js', { url: this.ctx.url, seo });
      }
    }
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = Number(this.ctx.params.id);
    this.ctx.body = Model.getDetail(id);
  }

  async proxy() {
    const proxyServer = httpProxy.createProxyServer({});

    proxyServer.web(this.ctx.req, this.ctx.body, {
      target: 'http://www.thyxzs.com'
    });
    // this.ctx.body = 'a'
  }

}

module.exports = AppController;
