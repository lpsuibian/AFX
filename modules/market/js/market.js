// 在页面中插入模板
// $("#muban").load("template/marketlist.html", function(){
// 	// 请求json数据
// 	$.getJSON("data/a.json", "data.data.products", function(data){
// 		list = data.data.products[104749];
// 		var htmStr = baidu.template("shopsjson", data);
// 		document.querySelector(".right").innerHTML = htmStr;
// 		list = "";
// 	})
// })


$(".left ul").on("click", function(e){
	e = e || window.event;
	var name = $(e.target).text();
	$(e.target).children("span").addClass("leftcol");
	$(e.target).siblings("li").children("span").removeClass("leftcol");
	$("#muban").load("template/marketlist.html", function(){
	// 请求json数据
		$.getJSON("data/a.json", function(data){
			for(var i = 0; i< data.data.categories.length; i++) {
				if (data.data.categories[i].name === name) {
					var id = data.data.categories[i].id;
					list = data.data.products[id];
					var htmStr = baidu.template("shopsjson", data);
					document.querySelector(".right").innerHTML = htmStr;
					list = "";
					return;
				};
			}
		})
	})
})

$(function(){
	var offset = $(".cart").offset();
	$(".addcar").click(function(e){
		var addcar = $(this);
		var img = addcar.parent().parent().siblings().find("img").attr("src");
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: e.pageX-230,
				top: e.pageY-100
			},
			end: {
				left: offset.left+50,
				top: offset.top+100,
				width: 0,
				height: 0
			},
			onEnd: function(){
				this.destroy()
			}
		})
	})
})