'use strict'
var http=require('http');
var server=http.createServer(function(request,response){
	console.log('接受一个请求。。。')
	if(request.url=='/favicon.ico'){//过滤图标请求
		return;
	}

response.writeHead(200,{
	'Content-Type':"text/html;charset=utf-8"
});
response.write('<h1>欢迎来到wbs17042。。。</h1>');
response.end();
});
server.listen(8080,function(){
	console.log('开始监听8080端口。。。。。');
});