//创建对象
function createXhr(){
	//首先检查是否支持XMLHttpRequest
	if (typeof XMLHttpRequest !== "undefined") {
		//新建xhr对象并返回
		return new XMLHttpRequest();
	//如果不支持XMLHttpRequest则检查是否支持ActiveXObject，支持则使用其创建xhr
	}else if (typeof ActiveXObject  !== "undefined") {
		var strList = ["MSXML.XMLHttp.6.0","MSXML.XMLHttp.3.0","MSXML.XMLHttp"];
		//由于不确定看具体参数，使用循环尝试方法创建对象
		for (var i = 0; i < strList.length; i++) {
			try{
				var xhr = new ActiveXObject(strList[i]);
				return xhr;
			}catch(e){
				console.log(e);
			}
		}
	}else{
		console.log("对不起，您的浏览器不支持ajax请求！！！")
	}
}

//请求发送函数
function postRequest(data, type, url, isAsyn, callback){
	//创建通信对象xhr
	var xhr = createXhr();
	//监听通信状态
	xhr.onreadystatechange = function(){
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
			if (xhr.readyState == 4) {
				//临时输出
				// console.log(xhr.responseText);
				var resData = JSON.parse(decodeURIComponent(xhr.responseText))
				callback && callback(resData);
			};
		};
	}

	if (type.toLowerCase() == "get") {
			//get传参格式 www.baidu.com?name=tom&age=28
			url += "?";
			for(var n in data){
				url += n+"="+data[n]+"&";
			}
			url = url.substr(0, url.length-1)
			data = null;
		}else{
			//将上送对象转化为JSON格式字符串，并对中文进行转码
			// data = JSON.stringify(data);
			data = encodeURIComponent(JSON.stringify(data))
		}

		//初始化
		xhr.open(type, url, isAsyn);
		//发送请求
		xhr.send(data);
	}


	//中文转码
	//encodeURI decodeURI  分别将中文转换为字符和将字符还原为中文
	//encodeURIComponent  decodeURIComponent