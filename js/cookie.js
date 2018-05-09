
function setCookie(name, value, expires, path){
	var exp = new Date();
	exp.setDate(exp.getDate() + expires );
	var gmtStr = exp.toGMTString();
	if(!path){
		path = "/";
	}
	//设置cookie
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr + ";path=" + path;
}
//获取cookie
function getCookie(name){
	var cookieStr = document.cookie;
	var cookies = cookieStr.split("; ");
	for(var i = 0; i < cookies.length; i ++){
		var detail = cookies[i].split("=");
		if(detail[0] == name){
			return decodeURIComponent(detail[1]);
		}
	}
}
//删除cookie
function removeCookie(name){
	//将过期时间设置超前一天即可
	setCookie(name, "", -1)
}
