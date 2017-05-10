var dataBase = require('./dataBase');

var mockApi = function (res,pathName,param,method,next){

	console.log(method);

	if(method == 'POST'){
		console.log('current method: post ');
	} else if( method == 'GET') {

		switch(pathName) {
			case '/index' : 
			res.setHeader('Content-type','text/html');
			res.write(dataBase['主页']);
			res.end();
			break;
			case '/goodsList' : 
			res.setHeader('Content-type','application/json');
			res.write(JSON.stringify(dataBase['水果']));
			res.end();
			break;	
			case '/shoppingCar' :
			res.setHeader('Content-type','application/json');
			res.write(JSON.stringify(dataBase['购物车']));
			res.end();
			break;			
			default :
			break;
		}

	} 
	//pathName

}

module.exports = mockApi;