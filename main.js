//线上参考demo地址
//http://www.runoob.com/w3cnote/requirejs-tutorial-1.html
//http://www.runoob.com/w3cnote/requirejs-tutorial-2.html
//配置路径信息
require.config({
	paths: {
		"jquery": ["./lib/jquery-1.11.2", "./lib/jquery-1.11.3"],
		"home":  "./modules/home/home",
		"mine": "./modules/mine/mine",
		"text": "./lib/text",
		"css": "./lib/css",
		"backbone": "./lib/backbone",
		"underscore": "./lib/underscore"
	}
});


//开启路由监听
require(["router"], function(router){
	Backbone.history.start();
});


//LAB.js