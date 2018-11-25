const PORT = 3000;

const http = require('http');
const url = require('url');
const httpProxy = require('http-proxy');

const serverProxy = httpProxy.createProxyServer({
  target: 'http://www.thyxzs.com', // 接口地址
  changeOrigin: true,
  // 下面的设置用于https
  // ssl: {
  //     key: fs.readFileSync('server_decrypt.key', 'utf8'),
  //     cert: fs.readFileSync('server.crt', 'utf8')
  // },
  // secure: false
});
const frontendProxy = httpProxy.createProxyServer({
  target: 'http://localhost:7001', // 接口地址
  changeOrigin: true,
  // 下面的设置用于https
  // ssl: {
  //     key: fs.readFileSync('server_decrypt.key', 'utf8'),
  //     cert: fs.readFileSync('server.crt', 'utf8')
  // },
  // secure: false
});

// serverProxy.on('error', function(err, req, res) {
//   res.writeHead(500, {
//     'content-type': 'text/plain'
//   });
//   console.log(err);
//   res.end('Something went wrong. And we are reporting a custom error message.');
// });

const server = http.createServer(function(request, response) {
  const pathname = url.parse(request.url).pathname;
  // // var realPath = path.join("main-pages", pathname); // 指定根目录
  // const realPath = path.join('./', pathname);
  // console.log('pathname:' + pathname);
  // console.log(realPath);
  if (pathname.indexOf('api') >= 0) {
    request.url = request.url.replace('/api', '');
    serverProxy.web(request, response);
    // console.log(request.url);
    // 判断如果是接口访问，则通过proxy转发
  } else {
    frontendProxy.web(request, response);
  }
});
server.listen(PORT);
console.log('Server runing at port: ' + PORT + '.');