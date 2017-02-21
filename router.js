//定义路由模块
define("router", ["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"home": "home",
			"mine": "mine"
		},
		"home": function(){
			require(["home"], function(homeMode){
				homeMode.init();
			})
		},
		mine: function(){
			require(["mine"], function(mineMode){
				mineMode.init();
			})

		}
	});

	return new Router()
});