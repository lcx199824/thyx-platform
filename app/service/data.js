const fs = require('fs');
const path = require('path');
module.exports = app => {
  class Data extends app.Service {
    async getSeo() {
      // const result = await app.curl(`http://127.0.0.1:3001/api/seo?url=${url}`, {
      //   dataType: 'json',
      // });
      // const result = await app.curl('http://127.0.0.1:3001/api/seo', {
      //   dataType: 'json',
      // });
      const result = await app.curl('http://www.thyxzs.cn/Home/Index/seo', {
        dataType: 'json',
      });
      return result.res.data;
    }
  }
  return Data;
};