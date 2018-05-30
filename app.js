//모듈을 추출합니다.
var http = require('http');
  var fs = require('fs');
  var ejs = require('ejs');
// 웹 서버를 생성 및 실행합니다.
  http.createServer(function(request, response){

    fs.readFile('index.ejs','utf8', function(error, data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(ejs.render(data, {name : "Node.js"}));
    });

  }).listen(52273, function(){
    console.log('\nserver running at http://127.0.0.1:52273');
  });
