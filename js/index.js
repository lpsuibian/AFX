// 在页面中插入模板
$("#muban").load("template/indexmuban.html", function(){
	// 请求json数据
	$.getJSON("data/AXF.json", function(data){
		var htmStr1 = baidu.template("topjson", data),
			htmStr2 = baidu.template("shopsjson", data),
			htmStr3 = baidu.template("bianjson", data),
			htmStr4 = baidu.template("styjson", data);
		document.querySelector(".top").innerHTML = htmStr1;
		document.querySelector(".show").innerHTML = htmStr2;
		document.querySelector(".smo").innerHTML = htmStr3;
		document.querySelector(".kind").innerHTML = htmStr4;
	})
})

