"use strict"
var http=require("http");
var querystring=require("querystring");
var server=http.createServer(function(request,response){
	var url = request.url;
		switch(url){
			case '/show':
				show(request,response);
				break;
			case '/login':
				login(request,response);
				break;
			default:
				response.writeHead(404,{});
				response.end();
				break;
		}
});
server.listen(8080,function(){
	console.log('监听8080端口号。。。。');
});
function show(request,response){
	response.writeHead(200,{
		'Content-Type':'text/html;charset=utf-8'
	});
	response.write('<!DOCTYPE html>');
	response.write('<html lang="en">');
	response.write('<head>');
	response.write('	<meta charset="UTF-8">');
	response.write('	<title>Document</title>');
	response.write('</head>');
	response.write('<body>');
	response.write('	<form action="/login" method="get">');
	response.write('		<table>');
	response.write('			<tr>');
	response.write('				<td>用户名：</td>');
	response.write('				<td><input type="text" name="username"></td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td>密码：</td>');
	response.write('				<td><input type="password" name="password"></td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td colspan="2"><input type="submit" value="登录"></td>');
	response.write('			</tr>');
	response.write('		</table>');
	response.write('	</form>');
	response.write('</body>');
	response.write('</html>');
	response.end();
}
function login(request,response){
	response.writeHead(200,{
		'Content-Type':'text/html;charset=utf-8'
	});
	var srt='';
	request.on('data',function(sum){
		str+=sum;
	});
	request.on('end',function(){
		var obj=querystring.parse(str);
		if(obj.username==='admin'&&obj.password==='456'){
			response.write('欢迎您：'+obj.username);
		}else{
			response.write('用户名或者密码不正确。。。');
		}
		response.end();
	});
}










